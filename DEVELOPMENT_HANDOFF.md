# King of Slipper / TSG 開発引き継ぎ資料

最終確認時点: `2026.06.02-mobile-header-insiders-v17`

この資料は、現行ブラウザ版の実装を次の開発室へ引き継ぐための技術整理です。ストーリー設定、未実装キャラクター設定、世界観メモは対象外とし、現在のゲーム実装と開発に必要な情報のみを記載します。

## 1. 要件定義

### 1.1 現行プロダクト概要

- 静的HTML/CSS/JavaScriptで動作するブラウザゲーム。
- GitHub Pages / Vercel / Netlify などの静的ホスティングで公開可能。
- スマホは横画面プレイ前提。
- PCブラウザ版も存在するが、直近の優先度はスマホ横画面UI。
- Service Worker と `version.json` により、起動時に公開版の更新判定を行う。
- localStorage を使って、構築、Rating、ランキング、CPU難易度、感想、あいことば対戦モック状態を保存する。

### 1.2 ゲーム基本要件

- 1ゲームは先に5履き達成した側が勝利。
- 1マッチはBO3、先に2ゲーム勝利した側がマッチ勝利。
- マッチ制限時間は15分。
- ゲーム間に Shoe Rack Change が発生し、最大3足まで交換できる。
- Shoe Rack Change の制限時間は3分で、マッチタイマーに含まれる。
- ターン中は配置上限がある。
- 履き数は配置数とは別概念で、玄関全体、配置位置、インサイダー嗜好などで評価する。
- 伏せスリッパは専用パネルで選択し、オープン可能。
- 伏せ効果の解決は非ブロッキングで、OK待ちでゲーム進行を止めない。
- 評価、伏せ、配置、勝敗などはログへ記録し、右UIのログボタンから確認できる。

### 1.3 UI要件

- スマホは起動時点から横画面前提。
- 縦画面では横向き案内を表示する。
- スマホ横画面の基本構成:
  - 左: SLIP INSIDER 縦5アイコン x 2陣営
  - 中央: 相手フィールド、ターン情報、自分フィールド
  - 右: ログ / END / 伏せ / 手持ち
  - 下: 手持ちパネル展開時のみ表示
- 左インサイダーの進捗は、数値ではなく5つのアイコンのカラー/グレーで表示。
- 上部プレイヤー情報は1行固定。
- タイトル画面も横画面前提で、縦画面では横向き案内を表示。
- テスト感想画面は localStorage 保存、コピー、X共有に対応。

### 1.4 非機能要件

- 依存ビルドなしで `index.html` を開いて動く。
- 公開版は静的サイトとして動作する。
- スマホSafari / Chromeで操作可能にする。
- 通信対戦は未完成だが、将来拡張できるよう関数を分離している。
- 重要UIは画面外にはみ出さないことを優先する。

## 2. 基本設計

### 2.1 ファイル構成

| ファイル/フォルダ | 役割 |
| --- | --- |
| `index.html` | 画面DOM、ダイアログ、音声要素、モバイル/PC画面の土台 |
| `styles.css` | 全UI、レスポンシブ、演出、スマホ横画面最適化 |
| `game.js` | ゲーム状態、ルール、描画、イベント、保存、通信モック |
| `assets/` | 画像、音声、スリッパ素材、キャラ画像 |
| `manifest.webmanifest` | PWA用設定 |
| `sw.js` | Service Worker / キャッシュ管理 |
| `version.json` | 公開版更新判定用のバージョン情報 |
| `README.md` | 公開/起動説明 |
| `setup-github.ps1` | GitHub初回連携スクリプト |
| `compress-audio.ps1` | WAVからMP3への圧縮補助 |
| `mobile-qr.html` | ローカルWi-Fi確認用QR |
| `public-qr.html` | 公開URL用QR |

### 2.2 画面遷移

```text
Boot Screen
  ↓ 更新判定完了
Title Screen
  ├─ Tutorial Screen
  ├─ Entrance Builder
  ├─ Ranking Dialog
  ├─ Aikotoba Match Dialog
  ├─ Feedback Dialog
  ├─ Options Dialog
  ├─ Help Dialog
  └─ Character Select
       ↓
     Main Battle
       ├─ VS Screen
       ├─ Coin Toss Screen
       ├─ Game Win/Lose/Draw Overlay
       └─ Shoe Rack Change
            └─ Next Game or Match End
```

### 2.3 デバイス分岐

`game.js` の `applyDeviceMode()` が `body` に以下のクラスを付与する。

| クラス | 条件/用途 |
| --- | --- |
| `mobile-ui` | タッチ端末かつ狭い画面またはモバイルUA |
| `pc-ui` | モバイル判定外 |
| `landscape-ui` | 横画面 |
| `portrait-ui` | 縦画面 |
| `mobile-compact` | 幅、高さ、DPRによる圧縮UI |
| `mobile-tiny` | 小型スマホ向け |
| `mobile-short` | 横画面で高さが低い端末向け |
| `mobile-narrow` | 横画面で幅が狭い端末向け |
| `mobile-se` | iPhone SE相当の下限調整 |

CSSはこのクラスを使ってスマホ横画面を段階的に圧縮する。

### 2.4 更新判定

- `APP_VERSION` は `game.js` 先頭で定義。
- `version.json` の `version` と比較する。
- 新しい版が検出された場合、Service Worker更新処理を試行し、クエリを付けて再読み込みする。
- `sw.js` の `CACHE_NAME` はバージョン更新時に上げる必要がある。

## 3. 詳細設計

### 3.1 主要定数

| 定数 | 値/意味 |
| --- | --- |
| `APP_VERSION` | 現行クライアント版 |
| `MATCH_ROUNDS` | 3 |
| `MATCH_WIN_TARGET` | 2 |
| `MATCH_SECONDS` | 15分 |
| `SIDEBOARD_SECONDS` | 180秒 |
| `MAX_SAVED_ENTRANCES` | 10 |
| `MAX_ENTRANCE_SIZE` | 10 |
| `MAX_TRAP_SIZE` | 3 |
| `MAX_SHOE_RACK_SIZE` | 3 |
| `MAX_ENTRANCE_SAME_NAME` | 同名スリッパはエントランス内2足まで |
| `ELO_K` | 64 |

### 3.2 localStorageキー

| キー | 用途 |
| --- | --- |
| `kos_entrances_v1` | エントランス構築保存 |
| `kos_rating_profile_v1` | プレイヤーRating/勝敗保存 |
| `kos_ranking_beta_v1` | ローカルランキング |
| `kos_room_mock_v1` | あいことば対戦ローカル状態 |
| `kos_room_online_beta_v1` | あいことば対戦オンラインβ状態 |
| `kos_cpu_difficulty_v1` | CPU難易度 |
| `kos_feedback_v1` | テスト感想 |

### 3.3 ゲーム状態

`game.js` の `state` オブジェクトが、試合全体、現在ターン、盤面、手札、伏せ、Shoe Rack、UI開閉状態を保持する。

主な項目:

| 項目 | 意味 |
| --- | --- |
| `started` | 試合開始済みか |
| `gameOver` | 現在ゲーム終了状態 |
| `turn` | `player`, `cpu`, `counter-window` など |
| `timer` | 1ターン残り秒数 |
| `playerScore` / `cpuScore` | 現在ゲームの履き数 |
| `playerRoundWins` / `cpuRoundWins` | BO3内の勝利数 |
| `matchRound` | 現在ゲーム番号 |
| `matchSeconds` | マッチ残り秒数 |
| `playerBoard` / `cpuBoard` | 配置済みスリッパ |
| `playerHand` / `cpuHand` | 手持ちスリッパ |
| `playerTraps` / `cpuTraps` | 伏せスリッパ |
| `selectedSlot` / `activeHandUid` | 選択中スリッパ/配置先 |
| `mobileHandOpen` | スマホ手持ちパネル開閉 |
| `mobileLogOpen` | スマホログパネル開閉 |
| `mobileTrapOpen` | スマホ伏せパネル開閉 |
| `selectedTrapIndex` | オープン対象の伏せ |
| `sideboardSeconds` | Shoe Rack Change残り秒数 |
| `sideboardSwaps` | 交換回数 |
| `ratingDelta` | マッチ後Rating変動 |

### 3.4 スリッパデータ

`slippers` 配列に定義される。

主なプロパティ:

| プロパティ | 意味 |
| --- | --- |
| `name` | 表示名 / 識別名 |
| `style` | タイプ表示 |
| `comfort` | 履き心地 |
| `flow` | 導線 |
| `dignity` | 品格 |
| `tags` | 評価/効果/表示用タグ |
| `text` | 説明文 |
| `counter` | 伏せ/カウンター系か |
| `effectId` | 固有効果識別子 |
| `visualSet` | 画像セット指定 |

配置時には `cloneSlipper()` で `uid` を付与した個体として扱う。

### 3.5 エントランス構築

エントランス構築は `savedEntrances` と `selectedEntranceId` で管理する。

構築データの基本形:

```js
{
  id: "deck-id",
  name: "表示名",
  entrance: ["スリッパ名", "..."], // 10足
  traps: ["伏せスリッパ名", "..."], // 3足
  shoeRack: ["スリッパ名", "..."] // 3足
}
```

構築制約:

- エントランスは10足。
- 伏せは3足。
- Shoe Rackは3足。
- エントランスのみ同名2足まで許可。
- 伏せとShoe Rackは現状重複不可。
- 未完成構築は保存/使用時に確認または制限する。

### 3.6 配置スロット

5スロット固定。

| ID | 表示 | 意味 |
| --- | --- | --- |
| `left_front` | LF / 左前 | 前列左 |
| `center_front` | CF / 中央前 | 前列中央 |
| `right_front` | RF / 右前 | 前列右 |
| `left_back` | LB / 左奥 | 奥列左 |
| `right_back` | RB / 右奥 | 奥列右 |

評価時にスロット補正が入り、同じスリッパでも配置位置で評価が変わる。

### 3.7 履き判定

履き数は配置数とは独立する。

主な流れ:

```text
ターン中に配置
  ↓
ターン終了
  ↓
玄関全体を評価
  ↓
各スリップインサイダーが履く/履かないを判定
  ↓
履いた人数分だけスコア加算
  ↓
5履き到達でゲーム勝利
```

判定要素:

- スリッパ単体性能
- スロット補正
- 導線/空白/組み合わせ
- インサイダー嗜好
- プレイヤー特性
- 伏せ効果ボーナス

### 3.8 CPU

CPU難易度は `cpuDifficultyProfiles` で定義。

| 難易度 | 方向性 |
| --- | --- |
| EASY | ランダム寄り |
| NORMAL | 標準 |
| HARD | 配置/伏せ判断を強化 |
| VeryHard | 配置補正とShoe Rack判断を重視 |
| Lunatic | かなり最適寄りだが乱数あり |

主なパラメータ:

- `trapChance`
- `optimalSlotChance`
- `sideboardReadyMin`
- `sideboardReadyMax`

### 3.9 Rating / Ranking

RatingはElo式。

```text
期待勝率 = 1 / (1 + 10 ^ ((相手Rating - 自分Rating) / 400))
変動値 = K × (実結果 - 期待勝率)
K = 64
```

実結果:

- 勝利: 1
- 引き分け: 0.5
- 敗北: 0

ランキングβはlocalStorage保存。公式人物データとローカルプレイヤー記録をマージして表示する。

### 3.10 あいことば対戦β

現在は土台実装。

実装済み関数:

- `createRoom()`
- `joinRoom(roomCode)`
- `leaveRoom()`
- `syncMatchState()`
- `sendPlayerAction(action)`
- `receiveOpponentAction(message, id)`
- `startOnlineMatch()`

現状:

- Gun.js を使った公開リレー同期を試行する。
- 通信品質や完全同期は未保証。
- ローカルモック/β扱い。
- 本格的なサーバー権威型同期ではない。

### 3.11 テスト感想

Feedback Dialogで入力する。

項目:

- 遊んだ端末
- 楽しかった度
- 見やすさ
- 操作しやすさ
- ひとこと

機能:

- localStorage保存
- X投稿用テキストコピー
- `https://twitter.com/intent/tweet?text=` によるX共有

## 4. 画面仕様

### 4.1 Boot Screen

目的:

- 公開版の更新確認。
- `version.json` と `APP_VERSION` を比較。
- 更新ありならService Worker更新と再読み込みを試行。

主要DOM:

- `#bootScreen`
- `#bootStatus`
- `#bootVersion`

### 4.2 Title Screen

目的:

- メインメニュー。
- スマホでは横画面前提。
- 縦画面では横向き案内を表示。

主要DOM:

- `#titleScreen`
- `#titleStartBtn`
- `#titleTutorialBtn`
- `#titleBuildBtn`
- `#titleRankingBtn`
- `#titleRoomBtn`
- `#titleFeedbackBtn`
- `#titleOptionsBtn`
- `#titleHelpBtn`
- `#cpuDifficultySelect`
- `.title-orientation-notice`

### 4.3 Tutorial Screen

目的:

- 読むチュートリアル。
- ステップ送り形式。

主要DOM:

- `#tutorialScreen`
- `#tutorialStepLabel`
- `#tutorialTopic`
- `#tutorialSpeaker`
- `#tutorialText`
- `#tutorialPrevBtn`
- `#tutorialNextBtn`
- `#tutorialStartGameBtn`

### 4.4 Entrance Builder

目的:

- 保存エントランスの作成/編集。
- 10個まで保存。

主要DOM:

- `#entranceBuilderScreen`
- `#savedDeckList`
- `#deckNameInput`
- `#entranceBuildList`
- `#trapBuildList`
- `#shoeRackBuildList`
- `#ownedSlipperPool`

### 4.5 Character Select

目的:

- 現在は実質的にメイン戦への入口。
- 選択肢の多くは将来拡張用。

主要DOM:

- `#characterSelectScreen`
- `#selectHaouBtn`

### 4.6 Mobile Battle

目的:

- スマホ横画面用の主戦闘UI。

構成:

- 左: `.mobile-insider-rail`
- 上: `.mobile-hud-rival`
- 中央上: `#mobileCpuBoard`
- 中央: `.mobile-center`
- 中央下: `#mobilePlayerBoard`
- 下: `#mobileHand` (手持ち展開時)
- 右: `.mobile-actions`

主要操作:

| ボタン | DOM | 機能 |
| --- | --- | --- |
| ログ | `#mobileRivalBtn` | ログパネル開閉 |
| 開始 | `#mobileStartBtn` | 試合開始 |
| END | `#mobileEndTurnBtn` | ターン終了 |
| 伏せ | `#mobileCounterBtn` | 伏せパネル開閉 |
| 手持ち | `#mobilePlayerBtn` | 手持ちパネル開閉 |
| 再戦 | `#mobileRematchBtn` | 再戦 |

補足:

- 上部プレイヤー情報は1行固定。
- 左インサイダーは5アイコン進捗のみ。
- 長押しでスリッパ/伏せ/インサイダー詳細を表示。

### 4.7 PC Battle

目的:

- PCブラウザ用の情報量多め戦闘UI。

主要DOM:

- `.arena`
- `.topbar`
- `.scoreboard`
- `.phase-panel`
- `.play-layout`
- `#playerBoard`
- `#cpuBoard`
- `#insiders`
- `#log`
- `#handWindow`

### 4.8 Shoe Rack Change

目的:

- ゲーム間の交換フェーズ。

主要DOM:

- `#sideboardScreen`
- `#sideboardTimer`
- `#sideboardMessage`
- `#sideboardEntrance`
- `#sideboardRack`
- `#sideboardDoneBtn`
- `#sideboardTitleBtn`
- `#sideboardDetail`

操作:

- エントランス側とShoe Rack側から交換対象を選ぶ。
- 長押しで詳細表示。
- 最大3交換。
- 時間切れまたは交換完了で次ゲームへ。

### 4.9 Feedback Dialog

目的:

- βテスト感想の保存/共有。

主要DOM:

- `#feedbackDialog`
- `#feedbackDevice`
- `#feedbackFun`
- `#feedbackReadability`
- `#feedbackControl`
- `#feedbackComment`
- `#saveFeedbackBtn`
- `#copyFeedbackBtn`
- `#shareFeedbackXBtn`
- `#feedbackStatus`
- `#feedbackList`

## 5. データ構造

### 5.1 Slipper

```ts
type Slipper = {
  name: string;
  style: string;
  comfort: number;
  flow: number;
  dignity: number;
  tags: string[];
  text: string;
  counter?: boolean;
  effectId?: string;
  visualSet?: string;
  uid?: string;
  slot?: SlotId;
};
```

### 5.2 EntranceDeck

```ts
type EntranceDeck = {
  id: string;
  name: string;
  entrance: string[];
  traps: string[];
  shoeRack: string[];
};
```

### 5.3 PlayerProfile

```ts
type PlayerProfile = {
  name: string;
  rating: number;
  bestRating: number;
  wins: number;
  losses: number;
  draws: number;
  streak: number;
  lastMatchAt: string | null;
};
```

### 5.4 RankingRecord

```ts
type RankingRecord = {
  name: string;
  rating: number;
  bestRating: number;
  wins: number;
  losses: number;
  draws: number;
  streak: number;
  updatedAt: string;
};
```

### 5.5 FeedbackRecord

```ts
type FeedbackRecord = {
  device: "iPhone" | "Android" | "PC" | "Other";
  fun: number;
  readability: number;
  control: number;
  comment: string;
  screen: string;
  userAgent: string;
  createdAt: string;
};
```

### 5.6 RoomState

```ts
type RoomState = {
  code: string;
  role: "host" | "guest";
  status: string;
  players: string[];
  updatedAt: string;
};
```

### 5.7 WearEvaluationResult

概念上の構造。実装ではオブジェクト配列として扱われる。

```ts
type WearEvaluationResult = {
  insider: {
    id?: string;
    name: string;
    bias?: string;
    likes?: string[];
  };
  won: boolean;
  score: number;
  reasonText: string;
};
```

## 6. 未実装タスク

優先度は現状の開発リスクとユーザー体験から見た目安。

| 優先度 | タスク | 内容 |
| --- | --- | --- |
| 高 | スマホ実機の継続QA | iPhone SE / Pro Max / Android横画面でUI崩れ確認 |
| 高 | PC版とスマホ版UIの責務整理 | CSS上書きが増えているため、モバイル専用CSSを分離したい |
| 高 | あいことば対戦の同期安定化 | 現状β。ターン進行/伏せ/配置/勝敗の同期仕様を確定する |
| 高 | 伏せ効果の網羅テスト | 効果処理が非ブロッキング化されたため、ログ/盤面反映の漏れを確認 |
| 中 | Shoe Rack ChangeのUX改善 | 交換中の選択状態、詳細、時間切れ確定の分かりやすさ改善 |
| 中 | エントランス構築の操作改善 | 未完成/重複/保存時のバリデーションをさらに明確化 |
| 中 | CPUの難易度差の検証 | パラメータはあるが、体感差の調整が必要 |
| 中 | Rating履歴 | 現在はプロフィール/ランキング中心。履歴表示は未実装 |
| 中 | 非同期対戦用データ出力 | 他人の構築をCPU代理で遊ぶ形式は未実装 |
| 低 | メール共有 | 感想共有のmailtoは未実装。X共有を優先済み |
| 低 | アセット管理整理 | 画像/音声が増えているため、用途別manifest化すると保守しやすい |

## 7. 既知課題

### 7.1 CSS上書きが多い

スマホUI改善を繰り返した結果、`styles.css` 末尾付近にモバイル向け上書きが多い。現在は動作優先だが、今後は以下を検討する。

- `mobile.css` / `desktop.css` への分割
- 画面別CSSセクション化
- 古い上書きの棚卸し

### 7.2 HTML内テキストの一部文字化け履歴

過去に文字化けしたテキストが一部残っていた履歴がある。現行画面で主要表示は随時修正されているが、READMEや一部HTMLを編集する際はエンコーディングに注意する。

推奨:

- UTF-8で編集。
- PowerShellの古い文字コード変換を避ける。
- 手動編集は `apply_patch` を優先。

### 7.3 ブラウザ自動検証が環境依存

Codex側のブラウザ接続が失敗することがある。静的チェックだけではUI崩れを見落としやすい。

推奨:

- GitHub Pages反映後に実機で確認。
- iPhone SE相当、Pro Max相当、Android横画面を最低確認対象にする。

### 7.4 Service Workerキャッシュ

更新時は以下3つをセットで更新する必要がある。

- `game.js` の `APP_VERSION`
- `version.json` の `version`
- `sw.js` の `CACHE_NAME`

どれかを忘れると、スマホ側で古いUIが残る可能性がある。

### 7.5 通信対戦は本番品質ではない

Gun.js公開リレーを使うβ実装であり、正式な同期保証はない。

未確定:

- 切断処理
- 再接続
- 同時操作競合
- ホスト権威/サーバー権威
- 不正操作対策

### 7.6 BGM/SEはブラウザ制限を受ける

スマホではユーザー操作後でないと音が鳴らない制限がある。`unlockAudio()` と `primeAudioElements()` で対応しているが、端末やブラウザにより挙動差がある。

### 7.7 PC版UIは相対的に古い

スマホ横画面UIが直近の主対象。PC版は使えるが、スマホ版ほど整理されていない箇所が残る。

### 7.8 テスト感想共有は外部API未使用

X共有は `twitter.com/intent/tweet?text=` を開くだけ。投稿成功の検知はしない。

## 8. 開発時チェックリスト

変更後は最低限以下を実行する。

```powershell
node --check game.js
node --check sw.js
python -m json.tool version.json
.\.tools\PortableGit\cmd\git.exe diff --check
```

公開反映時:

```powershell
.\.tools\PortableGit\cmd\git.exe add index.html game.js styles.css sw.js version.json
.\.tools\PortableGit\cmd\git.exe commit -m "変更内容"
.\.tools\PortableGit\cmd\git.exe push origin main
```

UI変更時の実機確認:

- スマホ縦画面で横向き案内が出る。
- スマホ横画面でタイトルが見切れない。
- スマホ横画面で対戦UIが画面内に収まる。
- 左インサイダー5枠が常に見える。
- 右ボタン4系統が押せる。
- 伏せ/手持ち/ログパネルが通常レイアウトを押し広げない。
- Service Worker更新後に最新版が入る。

