# KING OF Slipper!

Trading Slipper Game / TSG のブラウザ版ベータです。  
第一ステージとして、寿立覇王 vs 松葉迅を iPhone / Android / PC ブラウザで遊べる状態にしています。

## KING of Slipper β版

### 配信・動画投稿歓迎！

実況・切り抜き・ネタ動画OK！  
むしろ大歓迎です。

```text
#KingOfSlipper
#寿立覇王
```

## Play

ローカルWi-Fiでスマホ確認する場合:

```powershell
powershell -ExecutionPolicy Bypass -File .\start_mobile_server.ps1
```

表示されたQRコードを、同じWi-Fiに接続した iPhone / Android で読み取るとプレイできます。

GitHub Pagesで公開した場合の想定URL:

```text
https://keisi3926-bit.github.io/king-of-slipper/
```

公開URL用QRページ:

```text
https://keisi3926-bit.github.io/king-of-slipper/public-qr.html
```

## Current Beta Features

- 5スロット制のエントランス配置
- 手スリッパのタップ選択と配置
- BO3 / 2本先取の公式マッチ土台
- 15分マッチタイマー
- Shoe Rack Change 3分
- Rating基礎とランキングβ
- あいことば対戦β
- 勝利 / 敗北 / VS / カットイン演出
- BGM / SE
- localStorageによる構築・Rating・設定保存
- PWA用 `manifest.webmanifest` と `sw.js`

## Smartphone Support

スマホ縦画面では、以下の方針で調整しています。

- 中央に玄関フィールド
- 下部に手スリッパ
- 手スリッパは画像をタップして詳細を開く
- 詳細パネル内から配置先を選択
- スリップインサイダー評価はフィールド下へ退避
- 実況・ジャッジ・観客反応は別レイヤー表示

## Aikotoba Match Beta

タイトル画面の「あいことば対戦」から、合言葉ルームを作成・参加できます。

1. 片方が「部屋を作る」を押す
2. 表示された `CODE` を相手に伝える
3. 相手が同じCODEを入力して「部屋に入る」
4. 「オンライン対戦開始」を押す

β版では公開GUNリレーを使って、配置・外す・ターンエンドを同期します。  
通信環境や公開リレーの状態によって遅延や切断が起きる可能性があります。

## Audio Compression

WAV音源は容量が大きいため、公開版ではmp3を優先して読み込む構成にしています。  
mp3が無い場合はWAVへフォールバックします。

ffmpeg をインストールした後、以下で圧縮できます。

```powershell
powershell -ExecutionPolicy Bypass -File .\compress-audio.ps1
```

生成される音源:

- `assets/haou-theme.mp3`
- `assets/haou-theme-mobile.mp3`
- `assets/haou-victory-theme.mp3`
- `assets/haou-victory-theme-mobile.mp3`
- `assets/jin-theme.mp3`
- `assets/jin-theme-mobile.mp3`
- `assets/jin-victory-theme.mp3`
- `assets/jin-victory-theme-mobile.mp3`

スマホ版は軽量な `*-mobile.mp3` を優先し、PC/WEB版は通常mp3を優先します。

## Deploy

このプロジェクトはビルド不要の静的サイトです。以下のサービスへそのままデプロイできます。

### GitHub Pages

1. GitHubの `king-of-slipper` リポジトリへpush
2. `Settings > Pages`
3. `Build and deployment` を `Deploy from a branch`
4. Branchを `main`、folderを `/root` に設定
5. 公開URLをスマホで確認

### Vercel

1. VercelでGitHubリポジトリをImport
2. Framework Presetは `Other`
3. Build Commandは空
4. Output Directoryは空または `.`
5. Deploy

### Netlify

1. NetlifyでGitHubリポジトリをImport
2. Build commandは空
3. Publish directoryは `.`
4. Deploy

## GitHub Setup

初回push用:

```powershell
powershell -ExecutionPolicy Bypass -File .\setup-github.ps1
```

Gitが入っていない場合は、先に Git for Windows を入れてください。

```text
https://git-scm.com/download/win
```

## Files

- `index.html` - ゲーム本体HTML
- `styles.css` - UI / レスポンシブ / 演出
- `game.js` - ゲームロジック
- `assets/` - 画像・音源素材
- `manifest.webmanifest` - PWA設定
- `sw.js` - Service Worker
- `start_mobile_server.ps1` - ローカルWi-Fi確認用サーバー
- `mobile-qr.html` - ローカル確認用QRページ
- `public-qr.html` - 公開URL用QRページ
- `compress-audio.ps1` - mp3圧縮スクリプト
- `setup-github.ps1` - GitHub初回連携スクリプト

## Public QR Flow

1. GitHubへpush
2. GitHub Pages / Vercel / Netlifyで公開
3. 公開URLをスマホで開いて動作確認
4. `public-qr.html` を開く
5. QRをテストプレイヤーに配布

まずは第一ステージを普通に遊べるベータとして公開し、スマホ実機の反応を見ながら操作性を磨いていきます。
