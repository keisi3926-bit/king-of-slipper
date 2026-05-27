const APP_VERSION = "2026.05.27-mobile-field-readability-v1";
const VERSION_URL = "version.json";

const slippers = [
  {
    name: "来客用レザー",
    style: "旅館型",
    comfort: 4,
    flow: 1,
    dignity: 5,
    tags: ["大人", "品格", "高級感"],
    text: "高級感と安定感で、大人インサイダーの足を止める。",
  },
  {
    name: "ふわもこ低反発",
    style: "履誘型",
    comfort: 5,
    flow: 1,
    dignity: 3,
    tags: ["女性", "子供", "履き心地"],
    text: "かわいさと履き心地で、見た瞬間に履きたくなる。",
  },
  {
    name: "軽量EVAフォーム",
    style: "高速型",
    comfort: 2,
    flow: 5,
    dignity: 1,
    tags: ["速度", "子供", "EVA"],
    text: "軽い。速い。狭い玄関でとにかく先に並ぶ。",
  },
  {
    name: "健康サンダル",
    style: "機能型",
    comfort: 2,
    flow: 2,
    dignity: 3,
    tags: ["年配", "機能性", "痛そう"],
    text: "年配・機能性重視に刺さるが、痛そうで迷わせる。",
  },
  {
    name: "学校用上履きコンバート",
    style: "特殊型",
    comfort: 3,
    flow: 3,
    dignity: 2,
    tags: ["子供", "ノスタルジー", "改造"],
    text: "元キッズの記憶を直撃する、公式改造確認済みの一足。",
  },
  {
    name: "旅館ふかふか丹前スリッパ",
    style: "旅館型",
    comfort: 5,
    flow: 1,
    dignity: 4,
    tags: ["大人", "年配", "おもてなし"],
    text: "旅館式大玄関なら最強級。狭い玄関では少し重い。",
  },
  {
    name: "100均量産型",
    style: "百均型",
    comfort: 1,
    flow: 4,
    dignity: 1,
    tags: ["速度", "子供", "大量展開"],
    text: "安い、速い、真似しやすい。子供人気が妙に高い。",
  },
  {
    name: "畳なじみ草履",
    style: "静音型",
    comfort: 3,
    flow: 2,
    dignity: 5,
    tags: ["品格", "静音", "年配"],
    text: "音を立てずに整える。京都式の所作がにじむ。",
  },
  {
    name: "竹踏みリカバリー",
    style: "健康型",
    comfort: 2,
    flow: 3,
    dignity: 3,
    tags: ["年配", "機能性", "静音"],
    text: "足裏をほどよく刺激しつつ、玄関の姿勢を整える。",
  },
  {
    name: "湿度カウンター",
    style: "カウンター",
    comfort: 1,
    flow: 1,
    dignity: 3,
    tags: ["湿度", "妨害", "EVA対策"],
    text: "相手の高速導線を湿気で鈍らせる覇王の切り返し。",
    counter: true,
  },
  {
    name: "一手整列",
    style: "奥義",
    comfort: 3,
    flow: 4,
    dignity: 4,
    tags: ["速度", "品格", "おもてなし"],
    text: "玄関は急いだ奴から乱れる。全体を美しく整える。",
    burst: true,
  },
  {
    name: "闇潜りスリッパ",
    style: "伏せスリッパ系",
    comfort: 2,
    flow: 1,
    dignity: 2,
    attack: 2,
    defense: 2,
    speed: 1,
    tags: ["伏せ", "フィニッシャー", "奇襲"],
    text: "伏せ解除時、次の履き判定を押し上げ、相手の履き数を1削る。",
    effectId: "dark_lurker",
    visualSet: "new",
    visualIndex: 0,
  },
  {
    name: "トレードバースト",
    style: "サイド交換系",
    comfort: 2,
    flow: 2,
    dignity: 2,
    attack: 2,
    defense: 2,
    speed: 2,
    tags: ["Shoe Rack", "交換", "攻撃"],
    text: "Shoe Rackから入ると次戦開始時に相手を1削り、自分の履き数を1進める。",
    effectId: "trade_burst",
    visualSet: "new",
    visualIndex: 1,
  },
  {
    name: "スキャニングアイ",
    style: "伏せ対策系",
    comfort: 1,
    flow: 3,
    dignity: 2,
    attack: 1,
    defense: 2,
    speed: 3,
    tags: ["伏せ対策", "情報", "速度"],
    text: "配置時、相手の伏せスリッパ1足を一時確認する。このターンは攻撃性能が少し下がる。",
    effectId: "scanning_eye",
    visualSet: "new",
    visualIndex: 2,
  },
  {
    name: "ブラフマスター",
    style: "伏せスリッパ系",
    comfort: 1,
    flow: 2,
    dignity: 2,
    attack: 1,
    defense: 2,
    speed: 2,
    tags: ["伏せ", "ブラフ", "心理戦"],
    text: "伏せ確認の対象になりやすい。読み合いを歪ませるブラフの中核。",
    effectId: "bluff_master",
    visualSet: "new",
    visualIndex: 3,
  },
  {
    name: "リザーブガード",
    style: "サイド交換系",
    comfort: 1,
    flow: 1,
    dignity: 3,
    attack: 1,
    defense: 3,
    speed: 1,
    tags: ["Shoe Rack", "防御", "控え"],
    text: "Shoe Rackにいる間、自分の玄関全体に防御寄りの品格+2を与える。",
    effectId: "reserve_guard",
    visualSet: "new",
    visualIndex: 4,
  },
  {
    name: "リベンジトラップ",
    style: "伏せトラップ系",
    comfort: 1,
    flow: 1,
    dignity: 2,
    attack: 1,
    defense: 2,
    speed: 1,
    tags: ["伏せ", "罠", "反撃"],
    text: "攻撃または確認された時、相手の履き数を1削る。",
    effectId: "revenge_trap",
    visualSet: "new",
    visualIndex: 5,
  },
  {
    name: "ロックチェンジャー",
    style: "サイド交換メタ系",
    comfort: 1,
    flow: 1,
    dignity: 2,
    attack: 1,
    defense: 2,
    speed: 1,
    tags: ["Shoe Rack", "ロック", "交換封じ"],
    text: "場にいる間、相手のShoe Rack交換判断を鈍らせる交換メタ。",
    effectId: "lock_changer",
    visualSet: "new",
    visualIndex: 6,
  },
  {
    name: "シャドウリンク",
    style: "伏せシナジー系",
    comfort: 1,
    flow: 2,
    dignity: 1,
    attack: 1,
    defense: 1,
    speed: 2,
    tags: ["伏せ", "シナジー", "成長"],
    text: "自分の残り伏せスリッパ数だけ、履き心地と品格が上がる。",
    effectId: "shadow_link",
    visualSet: "new",
    visualIndex: 7,
  },
  {
    name: "デュアルフェイス",
    style: "可変型",
    comfort: 1,
    flow: 2,
    dignity: 1,
    attack: 1,
    defense: 1,
    speed: 2,
    tags: ["伏せ", "可変", "二面性"],
    text: "表なら攻撃寄りに履き心地+2。伏せなら防御寄りに品格+2。",
    effectId: "dual_face",
    visualSet: "new",
    visualIndex: 8,
  },
];

const cpuDeckNames = [
  "軽量EVAフォーム",
  "軽量EVAフォーム",
  "100均量産型",
  "100均量産型",
  "学校用上履きコンバート",
  "学校用上履きコンバート",
  "健康サンダル",
  "100均量産型",
  "軽量EVAフォーム",
  "ふわもこ低反発",
];

const MAX_SAVED_ENTRANCES = 10;
const MAX_ENTRANCE_SIZE = 10;
const MAX_TRAP_SIZE = 3;
const MAX_SHOE_RACK_SIZE = 3;
const MATCH_ROUNDS = 3;
const MATCH_WIN_TARGET = 2;
const MATCH_SECONDS = 15 * 60;
const SIDEBOARD_SECONDS = 180;
const ENTRANCE_STORAGE_KEY = "kos_entrances_v1";
const PROFILE_STORAGE_KEY = "kos_rating_profile_v1";
const RANKING_STORAGE_KEY = "kos_ranking_beta_v1";
const ROOM_STORAGE_KEY = "kos_room_mock_v1";
const ROOM_SYNC_STORAGE_KEY = "kos_room_online_beta_v1";
const CPU_DIFFICULTY_STORAGE_KEY = "kos_cpu_difficulty_v1";
const FEEDBACK_STORAGE_KEY = "kos_feedback_v1";
const ROOM_PEERS = ["https://relay.peer.ooo/gun"];
const ELO_K = 64;
const MAX_ENTRANCE_SAME_NAME = 2;

const cpuDifficultyProfiles = {
  easy: { label: "EASY", trapChance: 0.25, optimalSlotChance: 0.18, sideboardReadyMin: 6000, sideboardReadyMax: 12000 },
  normal: { label: "NORMAL", trapChance: 0.55, optimalSlotChance: 0.55, sideboardReadyMin: 8000, sideboardReadyMax: 30000 },
  hard: { label: "HARD", trapChance: 0.68, optimalSlotChance: 0.72, sideboardReadyMin: 9000, sideboardReadyMax: 34000 },
  veryhard: { label: "VeryHard", trapChance: 0.78, optimalSlotChance: 0.86, sideboardReadyMin: 12000, sideboardReadyMax: 42000 },
  lunatic: { label: "Lunatic", trapChance: 0.9, optimalSlotChance: 0.94, sideboardReadyMin: 14000, sideboardReadyMax: 52000 },
};

const playerTraits = {
  silent_manner: {
    traitId: "silent_manner",
    name: "無言所作",
    description: "静音・所作型。配置数以上の履きを、空白・導線・静けさによって発生させやすい。",
  },
};
const characterTraits = {
  "畳野静馬": "silent_manner",
};

const officialPlayers = [
  { name: "現行王者", rating: 2670, status: "現役" },
  { name: "半田磨流蔵", rating: 2478, status: "失効済 / 元トッププレイヤー" },
  { name: "謎の金満プレイヤー", rating: 2340, status: "現役" },
  { name: "スリッパディストラクション代表", rating: 2280, status: "現役" },
  { name: "湿原梅雨彦", rating: 2215, status: "現役" },
  { name: "畳野静馬", rating: 2130, status: "現役" },
  { name: "斜ノ宮雷牙", rating: 2050, status: "現役" },
  { name: "松葉迅", rating: 1980, status: "現役" },
  { name: "甲斐刹那", rating: 1870, status: "休止 / 運営側" },
  { name: "百均太郎丸", rating: 1760, status: "現役" },
  { name: "寿立覇王", rating: 1600, status: "挑戦者" },
];

const tutorialSteps = [
  {
    topic: "ゲームの目的",
    speaker: "半田さん",
    text: "ようこそ、キング・オブ・スリッパの世界へ。ここでは基本ルールを説明するよ。",
  },
  {
    topic: "ゲームの目的",
    speaker: "甲斐刹那",
    text: "スリッパで戦うって時点で、もう基本がわからないんだけど！？",
  },
  {
    topic: "ゲームの目的",
    speaker: "半田さん",
    text: "大丈夫。これはTSG、Trading Slipper Game。スリッパを選び、戦わせ、玄関の覇道を決める競技だ。",
  },
  {
    topic: "ゲームの目的",
    speaker: "甲斐刹那",
    text: "玄関の覇道……言葉の圧だけはすごいな。",
  },
  {
    topic: "基本操作",
    speaker: "半田さん",
    text: "まずは自分のスリッパを確認しよう。攻撃、防御、速度……今の画面では履き心地、導線、品格として表現される力が勝敗に関わる。",
  },
  {
    topic: "基本操作",
    speaker: "甲斐刹那",
    text: "つまり、スリッパを選んで、置きたい位置を決めて、ターンを進めればいいわけだな。",
  },
  {
    topic: "勝敗の基本",
    speaker: "半田さん",
    text: "勝敗は、玄関を見たスリップインサイダーが何人『履きたい』と思うかで決まる。先に5履きを取った方が1ゲームを取る。",
  },
  {
    topic: "勝敗の基本",
    speaker: "甲斐刹那",
    text: "攻撃が高いと刺さる、防御が高いと崩されにくい、速度が高いと先に動きやすい。ここはわかりやすいな。",
  },
  {
    topic: "サイド交換",
    speaker: "半田さん",
    text: "次にShoe Rack Change、いわゆるサイド交換だ。場に使うエントランスと控えのShoe Rackを入れ替えて、次のゲームへ備える。",
  },
  {
    topic: "サイド交換",
    speaker: "甲斐刹那",
    text: "つまり、相性が悪い時に逃げたり、ここぞって時に切り札を出したりできるわけか。",
  },
  {
    topic: "サイド交換",
    speaker: "半田さん",
    text: "その通り。トレードバーストのように、サイド交換した時に効果を予約するスリッパもいる。",
  },
  {
    topic: "伏せスリッパ",
    speaker: "半田さん",
    text: "そして重要なのが伏せスリッパだ。スリッパを伏せることで、相手に情報を隠せる。",
  },
  {
    topic: "伏せスリッパ",
    speaker: "甲斐刹那",
    text: "伏せスリッパ……つまり、相手に何を仕込んだかわからなくするってことか。",
  },
  {
    topic: "伏せスリッパ",
    speaker: "半田さん",
    text: "そうだ。闇潜りスリッパやリベンジトラップのように、伏せ状態から表になった時に強い効果を発動する足もいる。",
  },
  {
    topic: "実戦のコツ",
    speaker: "甲斐刹那",
    text: "強いスリッパを隠すのか、弱そうな足でブラフをかけるのか……一気に読み合いっぽくなってきたな。",
  },
  {
    topic: "実戦のコツ",
    speaker: "半田さん",
    text: "最後に覚えておいてほしい。スリッパバトルは攻撃だけでは勝てない。交換、伏せ、配置、読み合いが重要だ。",
  },
  {
    topic: "チュートリアル終了",
    speaker: "甲斐刹那",
    text: "ただの履物かと思ったら、普通に戦略ゲームだった。",
  },
  {
    topic: "チュートリアル終了",
    speaker: "半田さん",
    text: "これで基本説明は完了だ。実戦で試してみよう。スリッパはただの履物ではない。覇道である。",
  },
  {
    topic: "チュートリアル終了",
    speaker: "甲斐刹那",
    text: "よし、玄関に立つぞ！",
  },
];

const sampleEntrances = [
  {
    id: "sample-haou",
    name: "寿立覇王サンプル",
    entrance: [
      "来客用レザー",
      "来客用レザー",
      "ふわもこ低反発",
      "旅館ふかふか丹前スリッパ",
      "旅館ふかふか丹前スリッパ",
      "畳なじみ草履",
      "畳なじみ草履",
      "一手整列",
      "学校用上履きコンバート",
      "健康サンダル",
    ],
    traps: ["湿度カウンター", "闇潜りスリッパ", "リベンジトラップ"],
    shoeRack: ["トレードバースト", "リザーブガード", "ロックチェンジャー"],
  },
  {
    id: "sample-jin",
    name: "松葉迅サンプル",
    entrance: [...cpuDeckNames],
    traps: ["瞬間逆置き", "瞬間逆置き", "瞬間逆置き"],
    shoeRack: ["トレードバースト", "ブラフマスター", "シャドウリンク"],
  },
];

const insiders = [
  { name: "会社帰りの大人", wants: ["大人", "品格"], bias: "dignity" },
  { name: "ふわもこ好き女子", wants: ["女性", "履き心地"], bias: "comfort" },
  { name: "元気な小学生", wants: ["子供", "速度"], bias: "flow" },
  { name: "温泉好き年配者", wants: ["年配", "おもてなし"], bias: "comfort" },
  { name: "玄関美学の審判員", wants: ["品格", "静音"], bias: "dignity" },
];

const field = {
  name: "狭小マンション玄関",
  flowBonus: 1,
  maxBoard: 5,
  maxPlacements: 2,
  maxHitsPerTurn: 2,
};

const slotProfiles = [
  {
    name: "左前",
    row: "front",
    flow: 2,
    comfort: 0,
    dignity: -1,
    tags: { 速度: 1, 子供: 1 },
    log: "左前配置で導線が斜めに通った。",
  },
  {
    name: "中央前",
    row: "front",
    flow: 0,
    comfort: 1,
    dignity: 0,
    attention: 3,
    tags: {},
    log: "中央前に視線が集まる。",
  },
  {
    name: "右前",
    row: "front",
    flow: 2,
    comfort: 0,
    dignity: 0,
    tags: { 高速: 1, アグロ: 1, 年配: -1 },
    log: "右前配置で導線が一気に通った。",
  },
  {
    name: "左奥",
    row: "back",
    flow: -1,
    comfort: 0,
    dignity: 2,
    tags: { 静音: 1, 年配: 1 },
    log: "左奥の静かな配置が奥から効いている。",
  },
  {
    name: "右奥",
    row: "back",
    flow: 0,
    comfort: 0,
    dignity: 1,
    tags: { おもてなし: 2, 旅館型: 1, 子供: -1 },
    log: "奥に控えたおもてなしが吟味時間に効いてきた。",
  },
];

const slotAbbrevs = ["LF", "CF", "RF", "LB", "RB"];

const HAOU_COUNTER_IMAGE = "assets/haou-counter.png";
const JIN_COUNTER_IMAGE = "assets/jin-counter.png";
let audioContext = null;
const settings = {
  bgmVolume: 0.42,
  seVolume: 1,
  thoughtDelay: 1000,
  screenSize: "hd",
  cpuDifficulty: loadCpuDifficulty(),
};

const state = {
  started: false,
  playerDeck: [],
  cpuDeck: [],
  hand: [],
  playerBoard: [],
  cpuBoard: [],
  playerScore: 0,
  cpuScore: 0,
  turn: "idle",
  timer: 45,
  interval: null,
  gameOver: false,
  counterReady: true,
  cpuTrapReady: true,
  playerTrapCount: 3,
  cpuTrapCount: 3,
  playerTraps: [],
  cpuTraps: [],
  pendingJudgementBonus: { player: 0, cpu: 0 },
  pendingRoundStartEffects: [],
  turnNumber: 0,
  placementsThisTurn: 0,
  playerTurnsTaken: 0,
  cpuTurnsTaken: 0,
  activeHandUid: null,
  phaseTimeout: null,
  cutinActive: false,
  matchRound: 0,
  playerRoundWins: 0,
  cpuRoundWins: 0,
  matchEntrance: [],
  matchShoeRack: [],
  sideboardSeconds: SIDEBOARD_SECONDS,
  sideboardSwaps: 0,
  sideboardInterval: null,
  playerSideboardReady: false,
  cpuSideboardReady: false,
  sideboardWarnedTwoMinute: false,
  sideboardWarnedTenSecond: false,
  sideboardMessageOverride: "",
  matchSeconds: MATCH_SECONDS,
  matchInterval: null,
  matchFinished: false,
  matchResult: null,
  matchPoints: 0,
  playerRatingBefore: 1600,
  cpuRatingBefore: 1980,
  cpuRatingAfter: 1980,
  ratingDelta: 0,
  cpuRatingDelta: 0,
  cpuDifficulty: settings.cpuDifficulty,
  playerTrait: null,
  cpuTrait: null,
  coinTossWinner: "player",
  firstPlayer: "player",
  onlineMode: false,
  onlineRole: null,
};

let savedEntrances = loadSavedEntrances();
let selectedEntranceId = savedEntrances[0]?.id || "sample-haou";
let editingEntranceId = selectedEntranceId;
const roomSync = {
  gun: null,
  room: null,
  code: null,
  role: null,
  online: false,
  seenActions: new Set(),
};

const byId = (id) => document.getElementById(id);
let serviceWorkerRegistration = null;
let updateReloadPending = false;
let tutorialIndex = 0;
const slipperByName = (name) => slippers.find((slipper) => slipper.name === name);
const slipperVisualNames = slippers.filter((slipper) => !slipper.counter).map((slipper) => slipper.name);
const slipperVisualMap = {
  "100均量産型": 0,
  "畳なじみ草履": 1,
  "湿度カウンター": 2,
  "来客用レザー": 3,
  "軽量EVAフォーム": 4,
  "ふわもこ低反発": 5,
  "健康サンダル": 6,
  "旅館ふかふか丹前スリッパ": 7,
  "学校用上履きコンバート": 8,
  "一手整列": 1,
  "竹踏みリカバリー": 6,
};
const NEW_SLIPPER_SPRITE = "assets/new-slippers.png";

function slipperVisualIndex(slipperOrName) {
  const slipper = typeof slipperOrName === "string" ? slipperByName(slipperOrName) : slipperOrName;
  const name = slipper?.name || slipperOrName;
  if (Number.isInteger(slipper?.visualIndex)) return slipper.visualIndex;
  if (Number.isInteger(slipperVisualMap[name])) return slipperVisualMap[name];
  const index = slipperVisualNames.indexOf(name);
  return index >= 0 ? index % 9 : 0;
}

function slipperArt(slipperOrName, className = "") {
  const slipper = typeof slipperOrName === "string" ? slipperByName(slipperOrName) : slipperOrName;
  const index = slipperVisualIndex(slipperOrName);
  const x = (index % 3) * 50;
  const y = Math.floor(index / 3) * 50;
  const sprite = slipper?.visualSet === "new" ? `--sprite:url('${NEW_SLIPPER_SPRITE}');` : "";
  return `<span class="slipper-art ${className}" style="${sprite}--px:${x}%;--py:${y}%" aria-hidden="true"></span>`;
}

function detectDeviceMode() {
  const touch = navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.matchMedia("(max-width: 820px)").matches;
  const mobileAgent = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  return touch && (narrow || mobileAgent) ? "mobile" : "pc";
}

function applyDeviceMode() {
  const mode = detectDeviceMode();
  const orientation = window.matchMedia("(orientation: landscape)").matches ? "landscape" : "portrait";
  const width = window.innerWidth || document.documentElement.clientWidth || 0;
  const height = window.innerHeight || document.documentElement.clientHeight || 0;
  const dpr = window.devicePixelRatio || 1;
  sessionStorage.setItem("kos_device_mode", mode);
  sessionStorage.setItem("kos_orientation_mode", orientation);
  document.body.dataset.deviceMode = mode;
  document.body.dataset.orientationMode = orientation;
  document.body.dataset.viewportWidth = String(width);
  document.body.dataset.viewportHeight = String(height);
  document.body.dataset.devicePixelRatio = String(Math.round(dpr * 100) / 100);
  document.documentElement.style.setProperty("--mobile-vw", `${width}px`);
  document.documentElement.style.setProperty("--mobile-vh", `${height}px`);
  document.documentElement.style.setProperty("--mobile-dpr", `${dpr}`);
  document.body.classList.toggle("mobile-ui", mode === "mobile");
  document.body.classList.toggle("pc-ui", mode !== "mobile");
  document.body.classList.toggle("landscape-ui", orientation === "landscape");
  document.body.classList.toggle("portrait-ui", orientation === "portrait");
  document.body.classList.toggle("mobile-compact", mode === "mobile" && (width < 820 || height < 410 || dpr >= 3));
  document.body.classList.toggle("mobile-tiny", mode === "mobile" && (width < 720 || height < 370));
  document.body.classList.toggle("mobile-short", mode === "mobile" && orientation === "landscape" && height < 395);
  document.body.classList.toggle("mobile-narrow", mode === "mobile" && orientation === "landscape" && width < 780);
}

function requestPlayFullscreen() {
  if (!document.body.classList.contains("mobile-ui")) return;
  if (document.fullscreenElement) return;
  const target = document.documentElement;
  if (target.requestFullscreen) {
    target.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
  }
}

function waitForServiceWorkerInstalled(worker) {
  if (!worker) return Promise.resolve();
  if (worker.state === "installed") return Promise.resolve();
  return new Promise((resolve) => {
    worker.addEventListener(
      "statechange",
      () => {
        if (worker.state === "installed") resolve();
      },
      { once: true },
    );
    setTimeout(resolve, 1400);
  });
}

async function ensureFreshBuildBeforePlay() {
  if (!("serviceWorker" in navigator) || !location.protocol.startsWith("http")) return false;
  const registration = serviceWorkerRegistration || (await navigator.serviceWorker.getRegistration());
  if (!registration) return false;
  try {
    await registration.update();
    if (registration.installing) await waitForServiceWorkerInstalled(registration.installing);
  } catch {
    return false;
  }
  const waitingWorker = registration.waiting;
  if (!waitingWorker || updateReloadPending) return false;
  updateReloadPending = true;
  sessionStorage.setItem("kos_update_reload", "1");
  navigator.serviceWorker.addEventListener("controllerchange", () => window.location.reload(), { once: true });
  waitingWorker.postMessage({ type: "SKIP_WAITING" });
  setTimeout(() => window.location.reload(), 900);
  return true;
}

function setBootStatus(text) {
  const bootStatus = byId("bootStatus");
  if (bootStatus) bootStatus.textContent = text;
  const bootVersion = byId("bootVersion");
  if (bootVersion) bootVersion.textContent = `現在の版: ${APP_VERSION}`;
}

function revealTitleScreen() {
  byId("bootScreen")?.classList.add("screen-hidden");
  byId("titleScreen").classList.remove("screen-hidden");
}

function reloadForFreshVersion(version) {
  const next = new URL(window.location.href);
  next.searchParams.set("tsg_v", version || Date.now().toString());
  window.location.replace(next.toString());
}

async function checkBuildVersionOnBoot() {
  setBootStatus("最新版を確認しています。");
  if (!location.protocol.startsWith("http")) {
    setBootStatus("ローカル版で起動中です。");
    await wait(250);
    revealTitleScreen();
    return;
  }

  try {
    const response = await fetch(`${VERSION_URL}?t=${Date.now()}`, {
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" },
    });
    const remote = response.ok ? await response.json() : null;
    if (remote?.version && remote.version !== APP_VERSION) {
      setBootStatus("新しい版を検出。更新してから起動します。");
      sessionStorage.setItem("kos_seen_remote_version", remote.version);
      const updatedByWorker = await ensureFreshBuildBeforePlay();
      if (!updatedByWorker) setTimeout(() => reloadForFreshVersion(remote.version), 450);
      return;
    }
    setBootStatus("最新版です。起動します。");
  } catch {
    setBootStatus("通信確認に失敗。保存済み版で起動します。");
  }

  await wait(350);
  revealTitleScreen();
}

function formatClock(totalSeconds) {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds || 0));
  const minutes = String(Math.floor(safeSeconds / 60)).padStart(2, "0");
  const seconds = String(safeSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function loadCpuDifficulty() {
  try {
    const stored = localStorage.getItem(CPU_DIFFICULTY_STORAGE_KEY);
    return cpuDifficultyProfiles[stored] ? stored : "normal";
  } catch {
    return "normal";
  }
}

function setCpuDifficulty(value) {
  const next = cpuDifficultyProfiles[value] ? value : "normal";
  settings.cpuDifficulty = next;
  state.cpuDifficulty = next;
  try {
    localStorage.setItem(CPU_DIFFICULTY_STORAGE_KEY, next);
  } catch {
    // localStorage can be blocked in some embedded contexts.
  }
  const select = byId("cpuDifficultySelect");
  if (select) select.value = next;
  return next;
}

function cpuProfile() {
  return cpuDifficultyProfiles[state.cpuDifficulty || settings.cpuDifficulty] || cpuDifficultyProfiles.normal;
}

function defaultProfile() {
  return {
    name: "寿立覇王",
    rating: 1600,
    bestRating: 1600,
    wins: 0,
    losses: 0,
    draws: 0,
    streak: 0,
    lastMatchAt: null,
  };
}

function loadPlayerProfile() {
  try {
    return { ...defaultProfile(), ...JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || "{}") };
  } catch {
    return defaultProfile();
  }
}

function savePlayerProfile(profile) {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

function isRatingExpired(lastMatchAt, now = new Date()) {
  if (!lastMatchAt) return false;
  const last = new Date(lastMatchAt);
  const threeYears = 1000 * 60 * 60 * 24 * 365 * 3;
  return now.getTime() - last.getTime() > threeYears;
}

function calculateExpectedScore(rating, opponentRating) {
  return 1 / (1 + 10 ** ((opponentRating - rating) / 400));
}

function calculateRatingChange(rating, opponentRating, result, k = ELO_K) {
  return Math.round(k * (result - calculateExpectedScore(rating, opponentRating)));
}

function loadRankingRecords() {
  let stored = [];
  try {
    stored = JSON.parse(localStorage.getItem(RANKING_STORAGE_KEY) || "[]");
  } catch {
    stored = [];
  }
  const official = officialPlayers.map((player) => ({
    name: player.name,
    rating: player.rating,
    bestRating: player.rating,
    wins: 0,
    losses: 0,
    draws: 0,
    streak: 0,
    updatedAt: player.status,
  }));
  const profile = loadPlayerProfile();
  const local = {
    name: profile.name,
    rating: profile.rating,
    bestRating: profile.bestRating,
    wins: profile.wins,
    losses: profile.losses,
    draws: profile.draws,
    streak: profile.streak,
    updatedAt: profile.lastMatchAt || "未対戦",
  };
  const merged = [...official, ...stored, local];
  return [...new Map(merged.map((record) => [record.name, record])).values()].sort((a, b) => b.rating - a.rating);
}

function saveRankingRecord(profile) {
  const records = loadRankingRecords().filter((record) => !officialPlayers.some((player) => player.name === record.name));
  const nextRecord = {
    name: profile.name,
    rating: profile.rating,
    bestRating: profile.bestRating,
    wins: profile.wins,
    losses: profile.losses,
    draws: profile.draws,
    streak: profile.streak,
    updatedAt: profile.lastMatchAt,
  };
  const next = [...records.filter((record) => record.name !== profile.name), nextRecord];
  localStorage.setItem(RANKING_STORAGE_KEY, JSON.stringify(next));
}

function updateLocalRating(result) {
  const profile = loadPlayerProfile();
  const opponentRating = officialPlayers.find((player) => player.name.includes("松葉"))?.rating || 1980;
  const before = profile.rating;
  const delta = calculateRatingChange(before, opponentRating, result);
  const opponentDelta = calculateRatingChange(opponentRating, before, 1 - result);
  const after = before + delta;
  profile.rating = after;
  profile.bestRating = Math.max(profile.bestRating || after, after);
  profile.lastMatchAt = new Date().toISOString();
  if (result === 1) {
    profile.wins += 1;
    profile.streak = Math.max(1, (profile.streak || 0) + 1);
  } else if (result === 0.5) {
    profile.draws += 1;
    profile.streak = 0;
  } else {
    profile.losses += 1;
    profile.streak = 0;
  }
  savePlayerProfile(profile);
  saveRankingRecord(profile);
  state.playerRatingBefore = before;
  state.cpuRatingBefore = opponentRating;
  state.cpuRatingAfter = opponentRating + opponentDelta;
  state.ratingDelta = delta;
  state.cpuRatingDelta = opponentDelta;
  return { before, after, delta, profile };
}

function renderRanking() {
  const root = byId("rankingTable");
  root.innerHTML = `<div class="ranking-row header"><span>#</span><span>名前</span><span>Rating</span><span>最高</span><span>勝敗</span><span>連勝</span></div>`;
  loadRankingRecords().forEach((record, index) => {
    const row = document.createElement("div");
    row.className = "ranking-row";
    row.innerHTML = `
      <span>${index + 1}</span>
      <strong>${record.name}</strong>
      <span>${record.rating}</span>
      <span>${record.bestRating}</span>
      <span>${record.wins || 0}-${record.losses || 0}-${record.draws || 0}</span>
      <span>${record.streak || 0}</span>
    `;
    root.append(row);
  });
}

function createRoom() {
  return connectRoom(generateRoomCode(), "host");
}

function joinRoom(roomCode) {
  const code = normalizeRoomCode(roomCode);
  if (!code) {
    roomLog("Enter a room code first.");
    return null;
  }
  return connectRoom(code, "guest");
}

function leaveRoom() {
  if (roomSync.room && roomSync.role) {
    roomSync.room.get("players").get(roomSync.role).put(null);
  }
  roomSync.room = null;
  roomSync.code = null;
  roomSync.role = null;
  roomSync.online = false;
  state.onlineMode = false;
  state.onlineRole = null;
  localStorage.removeItem(ROOM_STORAGE_KEY);
  localStorage.removeItem(ROOM_SYNC_STORAGE_KEY);
  renderRoomState(null);
  roomLog("Left room.");
}

function syncMatchState() {
  if (!roomSync.room) return null;
  const snapshot = {
    playerScore: state.playerScore,
    cpuScore: state.cpuScore,
    playerBoard: state.playerBoard,
    cpuBoard: state.cpuBoard,
    turnNumber: state.turnNumber,
    at: Date.now(),
  };
  roomSync.room.get("state").get(roomSync.role || "unknown").put(snapshot);
  return snapshot;
}

function sendPlayerAction(action) {
  if (!roomSync.room || !roomSync.role) return { queued: false, action };
  const id = `${Date.now()}-${roomSync.role}-${Math.random().toString(36).slice(2, 8)}`;
  const payload = { id, role: roomSync.role, action, at: Date.now() };
  roomSync.seenActions.add(id);
  roomSync.room.get("actions").get(id).put(payload);
  return { queued: true, action };
}

async function receiveOpponentAction(message, id) {
  if (!message || !message.action || message.role === roomSync.role) return;
  const actionId = message.id || id;
  if (roomSync.seenActions.has(actionId)) return;
  roomSync.seenActions.add(actionId);
  const { action } = message;
  if (action.type === "start") {
    roomLog("Opponent started the match.");
    if (!state.started) startOnlineMatch(false);
    return;
  }
  if (!isOnlineMatch()) return;
  if (action.type === "place") {
    state.cpuBoard[action.slotIndex] = reviveRemoteSlipper(action.slipper);
    playSound("place");
    announce(`ONLINE: opponent placed ${action.slipper?.name || "slipper"}`, "danger");
    render();
  } else if (action.type === "remove") {
    state.cpuBoard[action.slotIndex] = null;
    playSound("place");
    announce("ONLINE: opponent removed a slipper", "danger");
    render();
  } else if (action.type === "turnEnd") {
    state.cpuScore = Math.max(state.cpuScore, Number(action.score || 0));
    state.cpuBoard = Array.isArray(action.board) ? action.board.map(reviveRemoteSlipper) : state.cpuBoard;
    render();
    if (state.cpuScore >= 5) {
      await checkWinner();
    } else {
      await startPlayerTurn();
    }
  } else if (action.type === "counter") {
    announce("ONLINE: opponent countered!", "danger");
    playSound("counter");
  }
}

function roomPlayerName(role = roomSync.role) {
  return role === "host" ? "HOST" : role === "guest" ? "GUEST" : "PLAYER";
}

function roomLog(text) {
  const root = byId("roomLog");
  if (!root) return;
  const line = document.createElement("p");
  line.textContent = `${new Date().toLocaleTimeString()} ${text}`;
  root.prepend(line);
  while (root.children.length > 8) root.lastElementChild.remove();
}

function initRoomGun() {
  if (roomSync.gun) return roomSync.gun;
  if (!window.Gun) {
    roomLog("GUN relay script is not loaded. Check network access.");
    return null;
  }
  roomSync.gun = Gun({ peers: ROOM_PEERS });
  return roomSync.gun;
}

function normalizeRoomCode(roomCode = "") {
  return (roomCode || "").trim().toUpperCase().replace(/[^A-Z0-9-]/g, "").slice(0, 12);
}

function generateRoomCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 6 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
}

function connectRoom(code, role) {
  const gun = initRoomGun();
  if (!gun) {
    const fallback = { code, role, status: "offline", players: [roomPlayerName(role)], updatedAt: new Date().toISOString() };
    localStorage.setItem(ROOM_STORAGE_KEY, JSON.stringify(fallback));
    renderRoomState(fallback);
    return fallback;
  }
  roomSync.code = code;
  roomSync.role = role;
  roomSync.online = true;
  roomSync.seenActions.clear();
  roomSync.room = gun.get("king-of-slipper").get("rooms").get(code);
  localStorage.setItem(ROOM_SYNC_STORAGE_KEY, JSON.stringify({ code, role, updatedAt: new Date().toISOString() }));
  roomSync.room.get("players").get(role).put({
    name: role === "host" ? "寿立覇王" : "挑戦者",
    role,
    ready: true,
    at: Date.now(),
  });
  roomSync.room.get("meta").put({ code, status: "waiting", updatedAt: Date.now() });
  roomSync.room.get("players").map().on(() => renderRoomState());
  roomSync.room.get("meta").on(() => renderRoomState());
  roomSync.room.get("actions").map().on((action, id) => receiveOpponentAction(action, id));
  const room = { code, role, status: "online-waiting", players: [roomPlayerName(role)], updatedAt: new Date().toISOString() };
  localStorage.setItem(ROOM_STORAGE_KEY, JSON.stringify(room));
  roomLog(role === "host" ? `Room created: ${code}` : `Joined room: ${code}`);
  renderRoomState(room);
  return room;
}

function isOnlineMatch() {
  return state.onlineMode && roomSync.online && roomSync.code;
}

function reviveRemoteSlipper(slipper) {
  if (!slipper) return null;
  return { ...slipper, tags: Array.isArray(slipper.tags) ? [...slipper.tags] : [] };
}

async function startOnlineMatch(announceStart = true) {
  if (!roomSync.online || !roomSync.code) {
    roomLog("Create or join a room first.");
    return;
  }
  state.onlineMode = true;
  state.onlineRole = roomSync.role;
  byId("roomDialog").close();
  byId("titleScreen").classList.add("screen-hidden");
  byId("characterSelectScreen").classList.add("screen-hidden");
  byId("gameApp").classList.remove("screen-hidden");
  if (announceStart) sendPlayerAction({ type: "start" });
  await resetMatch();
}

function serializeEntranceForAsync(entrance = getSelectedEntrance()) {
  return JSON.stringify({
    version: 1,
    name: entrance.name,
    entrance: entrance.entrance,
    traps: entrance.traps,
    shoeRack: entrance.shoeRack,
    createdAt: new Date().toISOString(),
  });
}

function renderRoomState(room = null) {
  let current = room;
  if (!current) {
    try {
      current = JSON.parse(localStorage.getItem(ROOM_STORAGE_KEY) || "null");
    } catch {
      current = null;
    }
  }
  byId("roomCodeOutput").textContent = `CODE ${current?.code || "------"}`;
  const startButton = byId("startOnlineMatchBtn");
  if (startButton) startButton.disabled = !roomSync.online || !roomSync.code;
  byId("roomState").textContent = current
    ? `ONLINE β / 役割: ${current.role} / 状態: ${current.status} / 合言葉: ${current.code}`
    : "まだ部屋に入っていません。部屋を作るか、相手の合言葉を入力してください。";
}

function loadFeedbackRecords() {
  try {
    return JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveFeedbackRecords(records) {
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(records.slice(-50)));
}

function currentFeedbackPayload() {
  return {
    device: byId("feedbackDevice").value,
    fun: Number(byId("feedbackFun").value),
    readability: Number(byId("feedbackReadability").value),
    control: Number(byId("feedbackControl").value),
    comment: byId("feedbackComment").value.trim(),
    screen: `${window.innerWidth}x${window.innerHeight}`,
    userAgent: navigator.userAgent,
    createdAt: new Date().toISOString(),
  };
}

function renderFeedbackList() {
  const root = byId("feedbackList");
  const records = loadFeedbackRecords().slice().reverse();
  if (!records.length) {
    root.innerHTML = `<p class="help-note">まだ感想は保存されていません。</p>`;
    return;
  }
  root.innerHTML = "";
  records.forEach((record) => {
    const item = document.createElement("article");
    item.className = "feedback-item";
    item.innerHTML = `
      <strong>${record.device} / 楽しさ${record.fun}・見やすさ${record.readability}・操作${record.control}</strong>
      <p>${record.comment || "コメントなし"}</p>
      <small>${record.screen} / ${new Date(record.createdAt).toLocaleString()}</small>
    `;
    root.append(item);
  });
}

function saveFeedback() {
  const records = loadFeedbackRecords();
  records.push(currentFeedbackPayload());
  saveFeedbackRecords(records);
  byId("feedbackStatus").textContent = "保存しました。端末内に残っています。";
  byId("feedbackComment").value = "";
  renderFeedbackList();
}

async function copyFeedbackSummary() {
  const records = loadFeedbackRecords();
  const text = JSON.stringify(records, null, 2);
  try {
    await navigator.clipboard.writeText(text);
    byId("feedbackStatus").textContent = "感想まとめをクリップボードへコピーしました。";
  } catch {
    byId("feedbackStatus").textContent = text || "コピーできませんでした。";
  }
}

function openFeedback() {
  renderFeedbackList();
  byId("feedbackDialog").showModal();
}

function cloneSlipper(slipper) {
  const uid = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;
  return { ...slipper, uid };
}

function defaultShoeRackNames() {
  return slippers
    .filter((slipper) => !slipper.counter)
    .slice(-MAX_SHOE_RACK_SIZE)
    .map((slipper) => slipper.name);
}

function uniqueNames(names) {
  return [...new Set((Array.isArray(names) ? names : []).filter(Boolean))];
}

function countName(names, target) {
  return (Array.isArray(names) ? names : []).filter((name) => name === target).length;
}

function hasEntranceOverLimit(names) {
  return uniqueNames(names).some((name) => countName(names, name) > MAX_ENTRANCE_SAME_NAME);
}

function hasUniqueOnlyDuplicates(names) {
  return uniqueNames(names).length !== (Array.isArray(names) ? names : []).length;
}

function fillLimitedEntrance(names, candidates, shouldFill) {
  const next = [];
  (Array.isArray(names) ? names : []).forEach((name) => {
    if (next.length < MAX_ENTRANCE_SIZE && countName(next, name) < MAX_ENTRANCE_SAME_NAME) next.push(name);
  });
  if (shouldFill) {
    candidates.forEach((name) => {
      while (next.length < MAX_ENTRANCE_SIZE && countName(next, name) < MAX_ENTRANCE_SAME_NAME) next.push(name);
    });
  }
  return next;
}

function fillUnique(names, candidates, size, shouldFill) {
  const next = uniqueNames(names).slice(0, size);
  if (shouldFill) {
    candidates.forEach((name) => {
      if (next.length < size && !next.includes(name)) next.push(name);
    });
  }
  return next;
}

function normalizeEntrance(deck) {
  const normalNames = slippers.filter((slipper) => !slipper.counter).map((slipper) => slipper.name);
  const allNames = slippers.map((slipper) => slipper.name);
  const oldFullEntrance = Array.isArray(deck?.entrance) && deck.entrance.length >= MAX_ENTRANCE_SIZE;
  const oldFullTraps = Array.isArray(deck?.traps) && deck.traps.length >= MAX_TRAP_SIZE;
  const oldFullRack = Array.isArray(deck?.shoeRack) && deck.shoeRack.length >= MAX_SHOE_RACK_SIZE;
  return {
    ...deck,
    entrance: fillLimitedEntrance(deck?.entrance, normalNames, oldFullEntrance),
    traps: fillUnique(deck?.traps, allNames, MAX_TRAP_SIZE, oldFullTraps),
    shoeRack:
      Array.isArray(deck?.shoeRack) && deck.shoeRack.length
        ? fillUnique(deck.shoeRack, normalNames, MAX_SHOE_RACK_SIZE, oldFullRack)
        : defaultShoeRackNames(),
  };
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function emptyBoard() {
  return Array.from({ length: field.maxBoard }, () => null);
}

function filledBoard(board) {
  return board.filter(Boolean);
}

function maxPlacementsPerTurn(side = state.turn === "cpu-placing" ? "cpu" : "player") {
  const taken = side === "cpu" ? state.cpuTurnsTaken : state.playerTurnsTaken;
  if (taken === 0 && state.firstPlayer !== side) return 3;
  if (taken === 0) return 2;
  return 3;
}

function placedThisTurnFor(board, turnNumber = state.turnNumber) {
  return filledBoard(board).filter((slipper) => slipper.placedTurn === turnNumber);
}

function traitForSide(side) {
  const traitId = side === "player" ? state.playerTrait : state.cpuTrait;
  return traitId ? playerTraits[traitId] : null;
}

function trapListForSide(side) {
  return side === "player" ? state.playerTraps : state.cpuTraps;
}

function setTrapListForSide(side, traps) {
  if (side === "player") {
    state.playerTraps = traps;
    state.playerTrapCount = traps.length;
    state.counterReady = traps.length > 0;
  } else {
    state.cpuTraps = traps;
    state.cpuTrapCount = traps.length;
    state.cpuTrapReady = traps.length > 0;
  }
}

function drawTrapForSide(side) {
  const traps = [...trapListForSide(side)];
  const trapName = traps.shift();
  setTrapListForSide(side, traps);
  return trapName ? cloneSlipper(slipperByName(trapName) || { name: trapName, style: "伏せ", tags: [], text: "" }) : null;
}

function pickTrapForInspection(side) {
  const traps = trapListForSide(side);
  if (!traps.length) return null;
  const bluffIndex = traps.findIndex((name) => slipperByName(name)?.effectId === "bluff_master");
  const index = bluffIndex >= 0 && Math.random() < 0.65 ? bluffIndex : Math.floor(Math.random() * traps.length);
  return cloneSlipper(slipperByName(traps[index]) || { name: traps[index], style: "伏せ", tags: [], text: "" });
}

function opponentSide(side) {
  return side === "player" ? "cpu" : "player";
}

function sideLabel(side) {
  return side === "player" ? "寿立覇王" : "松葉迅";
}

function applyScoreDamage(sourceSide, amount, sourceName) {
  const target = opponentSide(sourceSide);
  if (target === "player") state.playerScore = Math.max(0, state.playerScore - amount);
  else state.cpuScore = Math.max(0, state.cpuScore - amount);
  log(`${sourceName}の効果。${sideLabel(target)}の履き数を${amount}削った。`);
  announce(`実況: ${sourceName}が刺さった！ ${sideLabel(target)}の履き数-${amount}！`, sourceSide === "player" ? "good" : "danger");
  showAudienceReaction("罠が通った！", sourceSide === "player" ? "good" : "danger");
}

function applyScoreHeal(side, amount, sourceName) {
  if (side === "player") state.playerScore = Math.min(5, state.playerScore + amount);
  else state.cpuScore = Math.min(5, state.cpuScore + amount);
  log(`${sourceName}の効果。${sideLabel(side)}の履き数を${amount}進めた。`);
}

function effectiveSlipperStats(slipper, board, side) {
  const stats = {
    comfort: slipper.comfort || 0,
    flow: slipper.flow || 0,
    dignity: slipper.dignity || 0,
    attack: slipper.attack ?? slipper.comfort ?? 0,
    defense: slipper.defense ?? slipper.dignity ?? 0,
    speed: slipper.speed ?? slipper.flow ?? 0,
  };
  if (slipper.effectId === "shadow_link") {
    const hiddenCount = trapListForSide(side).length;
    stats.comfort += hiddenCount;
    stats.dignity += hiddenCount;
    stats.attack += hiddenCount;
    stats.defense += hiddenCount;
  }
  if (slipper.effectId === "dual_face") {
    if (board?.includes(slipper)) {
      stats.comfort += 2;
      stats.attack += 2;
    } else {
      stats.dignity += 2;
      stats.defense += 2;
    }
  }
  if (slipper.attackSuppressedTurn === state.turnNumber) {
    stats.comfort = Math.max(0, stats.comfort - 1);
    stats.attack = Math.max(0, stats.attack - 1);
  }
  return stats;
}

function reservePassiveBonus(side) {
  if (side !== "player") return 0;
  return state.matchShoeRack.some((name) => slipperByName(name)?.effectId === "reserve_guard") ? 2 : 0;
}

function triggerSlipperEvent(eventName, context) {
  const slipper = context.slipper;
  if (!slipper?.effectId) return;
  if (eventName === "onEnterField") {
    if (slipper.effectId === "scanning_eye") {
      const inspected = pickTrapForInspection(opponentSide(context.side));
      slipper.attackSuppressedTurn = state.turnNumber;
      if (inspected) {
        log(`スキャニングアイ発動。${sideLabel(opponentSide(context.side))}の伏せ「${inspected.name}」を一時確認した。`);
        announce(`実況: 伏せ情報を読んだ！ 見えたのは「${inspected.name}」！`, context.side === "player" ? "good" : "danger");
        triggerSlipperEvent("onInspected", { side: opponentSide(context.side), inspectorSide: context.side, slipper: inspected });
      } else {
        log("スキャニングアイ発動。確認できる伏せスリッパはなかった。");
      }
    }
    if (slipper.effectId === "lock_changer") {
      log(`ロックチェンジャー発動。${sideLabel(opponentSide(context.side))}のShoe Rack判断に圧がかかった。`);
      judgeTaunt("裁定。交換圧力、発生しています。", context.side === "player" ? "good" : "danger");
    }
  }
  if (eventName === "onSideSwapIn" && slipper.effectId === "trade_burst") {
    state.pendingRoundStartEffects.push({ effectId: "trade_burst", side: context.side, sourceName: slipper.name });
    log(`トレードバースト予約。次戦開始時、交換が攻撃に変わる。`);
  }
  if (eventName === "onReveal") {
    if (slipper.effectId === "dark_lurker") {
      state.pendingJudgementBonus[context.side] = (state.pendingJudgementBonus[context.side] || 0) + 1;
      applyScoreDamage(context.side, 1, slipper.name);
      log("闇潜りスリッパの伏せ解除。次の履き判定に奇襲ボーナス+1。");
    }
    if (slipper.effectId === "revenge_trap") {
      applyScoreDamage(context.side, 1, slipper.name);
    }
    if (slipper.effectId === "dual_face") {
      state.pendingJudgementBonus[context.side] = (state.pendingJudgementBonus[context.side] || 0) + 1;
      log("デュアルフェイスは伏せの顔を見せた。防御から攻めへ切り替わる。");
    }
  }
  if (eventName === "onInspected" && slipper.effectId === "revenge_trap") {
    applyScoreDamage(context.side, 1, slipper.name);
    log("リベンジトラップは確認行動に反応した。");
  }
}

function applyPendingRoundStartEffects() {
  const effects = [...state.pendingRoundStartEffects];
  state.pendingRoundStartEffects = [];
  effects.forEach((effect) => {
    if (effect.effectId === "trade_burst") {
      applyScoreDamage(effect.side, 1, effect.sourceName);
      applyScoreHeal(effect.side, 1, effect.sourceName);
      showImportantCommentary("Shoe Rack効果", `${effect.sourceName}発動。交換が攻撃に変わった。`, effect.side === "player" ? "good" : "danger");
    }
  });
}

function traitForCharacter(name) {
  return playerTraits[characterTraits[name]] || null;
}

function boardCount(board) {
  return filledBoard(board).length;
}

function firstEmptySlot(board) {
  return board.findIndex((slipper) => !slipper);
}

function slotBonusFor(slipper, slotIndex) {
  const slot = slotProfiles[slotIndex];
  if (!slot || !slipper) return { comfort: 0, flow: 0, dignity: 0, tagScore: 0, attention: 0 };
  let dignity = slot.dignity || 0;
  if (slotIndex === 1 && (slipper.tags.includes("品格") || slipper.dignity >= 4)) dignity += 1;
  if (slotIndex === 1 && (slipper.name.includes("100均") || slipper.dignity <= 1)) dignity -= 2;
  return {
    comfort: slot.comfort || 0,
    flow: slot.flow || 0,
    dignity,
    attention: slot.attention || 0,
    tagScore: Object.entries(slot.tags || {}).reduce((sum, [tag, value]) => sum + (slipper.tags.includes(tag) ? value : 0), 0),
  };
}

function slotReaction(slipper, slotIndex) {
  const slot = slotProfiles[slotIndex];
  if (!slot || !slipper) return "";
  if (slotIndex === 1 && (slipper.tags.includes("品格") || slipper.dignity >= 4)) return "中央前の高級スリッパに視線が集まる！";
  if (slotIndex === 1 && (slipper.name.includes("100均") || slipper.dignity <= 1)) return "中央前に置くには少し安っぽい……インサイダーが迷っている！";
  if (slotIndex === 3 && slipper.tags.includes("静音")) return "左奥の静かな配置が年配インサイダーに刺さった！";
  if (slotIndex === 4 && (slipper.tags.includes("おもてなし") || slipper.style.includes("旅館"))) return "奥に控えた旅館型が、吟味時間の最後に効いてきた！";
  if (slot.row === "front" && slipper.flow >= 4) return `${slot.name}配置で導線が一気に通った！`;
  return slot.log;
}

function judgePlacementTaunt(slipper, slotIndex) {
  const slot = slotProfiles[slotIndex];
  if (slotIndex === 1 && slipper.dignity <= 1) return "ジャッジ: 中央前にそれを置く度胸、嫌いじゃないが雑だな。";
  if (slot.row === "front" && slipper.flow >= 4) return "ジャッジ: 前列導線、速い。だが雑なら即減点だ。";
  if (slot.row === "back" && slipper.dignity >= 4) return "ジャッジ: 奥で品格を見せるか。玄関をわかっている。";
  if (slotIndex === 4 && slipper.tags.includes("おもてなし")) return "ジャッジ: 右奥のおもてなし、遅れて効くぞ。";
  return `ジャッジ: ${slot.name}配置、そこを選ぶなら結果で黙らせろ。`;
}

function judgeResultTaunt(side, hits) {
  if (side === "player") {
    if (hits >= 2) return "ジャッジ: 二人持っていった。今の玄関、かなり刺さっている。";
    if (hits === 1) return "ジャッジ: 一人は履いた。だが覇王ならもう一押し欲しいな。";
    return "ジャッジ: 玄関が沈黙した。配置か選択、どちらかが甘い。";
  }
  if (hits >= 2) return "ジャッジ: 迅の導線が通った。速度だけとは言わせない配置だ。";
  if (hits === 1) return "ジャッジ: 迅、ひとまず一点。だが奥の圧が薄い。";
  return "ジャッジ: 迅の速さが空回った。玄関は走ればいいってものじゃない。";
}

function chooseCpuSlot(slipper) {
  const emptySlots = slotProfiles.map((_, index) => index).filter((index) => !state.cpuBoard[index]);
  if (!emptySlots.length) return -1;
  const profile = cpuProfile();
  if (Math.random() > profile.optimalSlotChance) return emptySlots[Math.floor(Math.random() * emptySlots.length)];
  return emptySlots
    .map((index) => ({ index, score: scoreCpuSlotChoice(slipper, index) + Math.random() * (profile.label === "Lunatic" ? 0.3 : 1.4) }))
    .sort((a, b) => b.score - a.score)[0].index;
}

function scoreCpuSlotChoice(slipper, index) {
  const slot = slotProfiles[index];
  const bonus = slotBonusFor(slipper, index);
  let score = slipper.comfort + slipper.flow + slipper.dignity + bonus.comfort + bonus.flow + bonus.dignity + (bonus.attention || 0);
  if (slipper.flow >= 4 && slot.row === "front") score += 4;
  if (slipper.dignity >= 4 && slot.row === "back") score += 4;
  if (slipper.tags.includes("静音") && slot.row === "back") score += 3;
  if (slipper.tags.includes("おもてなし") && index === 4) score += 3;
  if (slipper.tags.includes("子供") && slot.row === "front") score += 2;
  if (index === 1 && slipper.dignity <= 1) score -= 4;
  return score;
}

function loadSavedEntrances() {
  try {
    const raw = localStorage.getItem(ENTRANCE_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed.slice(0, MAX_SAVED_ENTRANCES).map(normalizeEntrance);
    }
  } catch {
    // Fall through to samples.
  }
  return structuredClone(sampleEntrances).map(normalizeEntrance);
}

function persistEntrances() {
  localStorage.setItem(ENTRANCE_STORAGE_KEY, JSON.stringify(savedEntrances.slice(0, MAX_SAVED_ENTRANCES)));
}

function getEditingEntrance() {
  return savedEntrances.find((deck) => deck.id === editingEntranceId) || savedEntrances[0];
}

function getSelectedEntrance() {
  return savedEntrances.find((deck) => deck.id === selectedEntranceId) || savedEntrances[0] || sampleEntrances[0];
}

function validateEntrance(deck) {
  if (!deck) return ["エントランスが設定されていません。"];
  const messages = [];
  const duplicateMessages = [];
  const overLimitEntrance = uniqueNames(deck.entrance).filter((name) => countName(deck.entrance, name) > MAX_ENTRANCE_SAME_NAME);
  if (overLimitEntrance.length) duplicateMessages.push(`同名スリッパはエントランスに2足までです: ${overLimitEntrance.join("、")}`);
  [
    ["伏せスリッパ", deck.traps],
    ["Shoe Rack", deck.shoeRack || []],
  ].forEach(([label, names]) => {
    const duplicates = names.filter((name, index) => names.indexOf(name) !== index);
    if (duplicates.length) duplicateMessages.push(`${label}に同名スリッパがあります: ${[...new Set(duplicates)].join("、")}`);
  });
  if (deck.entrance.length === 0) {
    messages.push("エントランスが設定されていません。10足セットしてください。");
  } else if (deck.entrance.length !== MAX_ENTRANCE_SIZE) {
    messages.push(`エントランスが${deck.entrance.length}/${MAX_ENTRANCE_SIZE}足です。試合には10足必要です。`);
  }
  if (deck.traps.length === 0) {
    messages.push("伏せスリッパが設定されていません。3足セットしてください。");
  } else if (deck.traps.length !== MAX_TRAP_SIZE) {
    messages.push(`伏せスリッパが${deck.traps.length}/${MAX_TRAP_SIZE}足です。試合には3足必要です。`);
  }
  if (!deck.shoeRack?.length) {
    messages.push("Shoe Rackが設定されていません。3足セットしてください。");
  } else if (deck.shoeRack.length !== MAX_SHOE_RACK_SIZE) {
    messages.push(`Shoe Rackが${deck.shoeRack.length}/${MAX_SHOE_RACK_SIZE}足です。試合には3足必要です。`);
  }
  return [...messages, ...duplicateMessages];
}

function isCompleteEntrance(deck) {
  return validateEntrance(deck).length === 0;
}

function showBuilderDialog(title, text, { confirmText = "OK", cancelText = "", danger = false } = {}) {
  const dialog = byId("builderConfirmDialog");
  byId("builderConfirmTitle").textContent = title;
  byId("builderConfirmText").innerHTML = text;
  byId("builderConfirmBtn").textContent = confirmText;
  byId("builderCancelBtn").textContent = cancelText || "閉じる";
  byId("builderCancelBtn").hidden = !cancelText;
  byId("builderConfirmBtn").classList.toggle("danger", danger);
  dialog.showModal();
  return new Promise((resolve) => {
    dialog.addEventListener(
      "close",
      () => {
        byId("builderCancelBtn").hidden = false;
        byId("builderConfirmBtn").classList.remove("danger");
        resolve(dialog.returnValue === "confirm");
      },
      { once: true },
    );
  });
}

function makeBlankEntrance() {
  return {
    id: `deck-${Date.now()}`,
    name: `エントランス${Math.min(savedEntrances.length + 1, MAX_SAVED_ENTRANCES)}`,
    entrance: [],
    traps: [],
    shoeRack: [],
  };
}

async function resetMatch() {
  const selectedEntrance = getSelectedEntrance();
  const errors = validateEntrance(selectedEntrance);
  if (errors.length) {
    await showBuilderDialog(
      "構築が未完成です",
      `${errors.join("<br>")}<br><br>完成済みのエントランスを選ぶか、構築画面で不足分をセットしてください。`,
      { confirmText: "構築へ" },
    );
    byId("gameApp").classList.add("screen-hidden");
    byId("characterSelectScreen").classList.add("screen-hidden");
    showEntranceBuilder();
    return;
  }
  initAudio();
  playSound("start");
  const online = state.onlineMode && roomSync.online;
  clearInterval(state.interval);
  clearTimeout(state.phaseTimeout);
  clearInterval(state.sideboardInterval);
  clearInterval(state.matchInterval);
  state.matchEntrance = [...selectedEntrance.entrance];
  state.matchShoeRack = [...selectedEntrance.shoeRack];
  const playerProfile = loadPlayerProfile();
  const jinRating = officialPlayers.find((player) => player.name.includes("松葉"))?.rating || 1980;
  Object.assign(state, {
    started: true,
    playerDeck: shuffle(state.matchEntrance.map((name) => cloneSlipper(slipperByName(name))).filter(Boolean)),
    cpuDeck: shuffle(cpuDeckNames.map((name) => cloneSlipper(slipperByName(name)))),
    hand: [],
    playerBoard: emptyBoard(),
    cpuBoard: emptyBoard(),
    playerScore: 0,
    cpuScore: 0,
    turn: "player",
    timer: 45,
    interval: null,
    gameOver: false,
    counterReady: true,
    cpuTrapReady: true,
    playerTrapCount: Math.min(MAX_TRAP_SIZE, selectedEntrance.traps.length),
    cpuTrapCount: 3,
    playerTraps: selectedEntrance.traps.slice(0, MAX_TRAP_SIZE),
    cpuTraps: ["瞬間逆置き", "瞬間逆置き", "瞬間逆置き"],
    pendingJudgementBonus: { player: 0, cpu: 0 },
    pendingRoundStartEffects: [],
    turnNumber: 1,
    placementsThisTurn: 0,
    playerTurnsTaken: 0,
    cpuTurnsTaken: 0,
    phaseTimeout: null,
    cutinActive: false,
    matchRound: 1,
    playerRoundWins: 0,
    cpuRoundWins: 0,
    matchSeconds: MATCH_SECONDS,
    matchInterval: null,
    matchFinished: false,
    matchResult: null,
    matchPoints: 0,
    playerRatingBefore: playerProfile.rating,
    cpuRatingBefore: jinRating,
    cpuRatingAfter: jinRating,
    ratingDelta: 0,
    cpuRatingDelta: 0,
    cpuDifficulty: settings.cpuDifficulty,
    coinTossWinner: null,
    firstPlayer: online && roomSync.role === "guest" ? "remote" : "player",
    onlineMode: online,
    onlineRole: online ? roomSync.role : null,
    sideboardSeconds: SIDEBOARD_SECONDS,
    sideboardSwaps: 0,
    playerSideboardReady: false,
    cpuSideboardReady: false,
    sideboardWarnedTwoMinute: false,
    sideboardWarnedTenSecond: false,
  });
  drawSlippers(5);
  byId("fieldName").textContent = field.name;
  byId("log").innerHTML = "";
  document.querySelector(".arena").classList.remove("game-over");
  byId("victoryScreen").classList.remove("show");
  byId("victoryScreen").setAttribute("aria-hidden", "true");
  byId("defeatScreen").classList.remove("show");
  byId("defeatScreen").setAttribute("aria-hidden", "true");
  byId("drawScreen").classList.remove("show");
  byId("drawScreen").setAttribute("aria-hidden", "true");
  byId("sideboardScreen").classList.remove("show");
  byId("sideboardScreen").setAttribute("aria-hidden", "true");
  stopHaouVictoryTheme();
  stopJinTheme();
  stopJinVictoryTheme();
  byId("startBtn").textContent = "再開幕";
  renderInsiders();
  render();
  await showVsScreen();
  if (!online) {
    const first = await showCoinTossScreen();
    state.coinTossWinner = first;
    state.firstPlayer = first;
  } else {
    state.coinTossWinner = state.firstPlayer === "remote" ? "cpu" : "player";
  }
  log("試合開始！ 狭小マンション玄関で、覇王とマッハのジンが向かい合う。");
  log(`コイントス: ${state.coinTossWinner === "player" ? "寿立覇王" : "松葉迅"}が先攻。`);
  log(`COM難易度: ${cpuProfile().label}`);
  setPhase("スリッパ配置", "第1ターンの配置上限は2足。履き数は配置数ではなく、玄関全体の評価で決まる。");
  setMessage("手持ちスリッパを選んで玄関に置こう。");
  startMatchTimer();
  if (state.firstPlayer === "remote") {
    state.turn = "online-waiting";
    setPhase("オンライン待機", "相手のターンです。相手の配置とターンエンドを待っています。");
    setMessage("相手のターン待ち。合言葉対戦βで同期中です。");
  } else if (state.firstPlayer === "cpu") {
    setPhase("松葉迅の先攻", "コイントスで松葉迅が先に玄関を動かす。");
    setMessage("松葉迅のターン。高速導線の配置を見極めよう。");
    await showCutin("松葉迅", "ENEMY FIRST", "疾履流、先に仕掛ける。");
    cpuSetupTurn();
  } else {
    await showCutin("寿立覇王", "YOU FIRST", "玄関は、先に整えた方が強い。");
    startTimer();
  }
  render();
}

function showIdle() {
  byId("fieldName").textContent = field.name;
  setPhase("試合開始待ち", "試合開始を押すと、手持ちスリッパが配られて45秒ターンが始まる。");
  setMessage("試合開始を押して、玄関に立とう。");
  renderBoard("playerBoard", emptyBoard());
  renderBoard("cpuBoard", emptyBoard());
  renderInsiders();
  render();
}

function startTimer() {
  clearInterval(state.interval);
  state.timer = 45;
  startHaouTheme();
  state.interval = setInterval(() => {
    if (state.gameOver || state.turn !== "player" || state.cutinActive) return;
    state.timer -= 1;
    byId("timer").textContent = state.timer;
    if (state.timer <= 0) endPlayerTurn();
  }, 1000);
}

function startMatchTimer() {
  clearInterval(state.matchInterval);
  updateMatchTimerLabel();
  state.matchInterval = setInterval(() => {
    if (!state.started || state.matchFinished) return;
    state.matchSeconds -= 1;
    updateMatchTimerLabel();
    if (state.matchSeconds <= 0) handleMatchTimeout();
  }, 1000);
}

function stopMatchTimer() {
  clearInterval(state.matchInterval);
  state.matchInterval = null;
  updateMatchTimerLabel();
}

function updateMatchTimerLabel() {
  const label = byId("matchTimeLabel");
  if (label) label.textContent = `MATCH TIME ${formatClock(state.matchSeconds)}`;
}

async function handleMatchTimeout() {
  if (state.matchFinished) return;
  clearInterval(state.interval);
  clearInterval(state.sideboardInterval);
  stopHaouTheme();
  stopJinTheme();
  if (state.playerRoundWins >= MATCH_WIN_TARGET) await finishMatch("win", "time");
  else if (state.cpuRoundWins >= MATCH_WIN_TARGET) await finishMatch("loss", "time");
  else await finishMatch("draw", "time");
}

function drawSlippers(count) {
  for (let i = 0; i < count; i += 1) {
    const next = state.playerDeck.shift();
    if (next) state.hand.push(next);
  }
}

function playSlipper(uid, slotIndex = firstEmptySlot(state.playerBoard)) {
  if (!state.started || state.gameOver || state.turn !== "player" || state.cutinActive) return;
  if (boardCount(state.playerBoard) >= field.maxBoard) {
    setMessage("この玄関は5足でいっぱい。外せば位置調整できる。");
    return;
  }
  if (slotIndex < 0 || state.playerBoard[slotIndex]) {
    setMessage("その位置にはもうスリッパがある。別の配置スロットを選ぼう。");
    return;
  }
  const index = state.hand.findIndex((slipper) => slipper.uid === uid);
  if (index < 0) return;
  const isReposition = Boolean(state.hand[index].repositionFree);
  const placementLimit = maxPlacementsPerTurn("player");
  if (!isReposition && state.placementsThisTurn >= placementLimit) {
    setMessage(`このターンに新しく置けるのは${placementLimit}足まで。外したスリッパの位置調整はまだできる。`);
    return;
  }
  const [slipper] = state.hand.splice(index, 1);
  state.activeHandUid = null;
  slipper.placedTurn = state.turnNumber;
  slipper.slotIndex = slotIndex;
  state.playerBoard[slotIndex] = slipper;
  if (isReposition) {
    delete slipper.repositionFree;
  } else {
    state.placementsThisTurn += 1;
  }
  triggerSlipperEvent("onEnterField", { side: "player", slipper, slotIndex });
  playSound("place");
  const bonus = slipper.burst ? " 一手整列で、玄関全体の品格が締まった。" : "";
  const reaction = slotReaction(slipper, slotIndex);
  log(`覇王は${slotProfiles[slotIndex].name}に「${slipper.name}」を置いた。${reaction}${bonus}`);
  announce(`実況: ${slotProfiles[slotIndex].name}へ「${slipper.name}」！ ${reaction}`, "good");
  judgeTaunt(judgePlacementTaunt(slipper, slotIndex), "good");
  showAudienceReaction(slotIndex === 1 ? "中央前、勝負だ！" : slotProfiles[slotIndex].row === "back" ? "奥の配置いいぞ！" : "導線通した！", "good");
  setMessage(`${slotProfiles[slotIndex].name}に${slipper.name}を置いた。あと${Math.max(0, placementLimit - state.placementsThisTurn)}足置ける。`);
  if (isOnlineMatch()) sendPlayerAction({ type: "place", slipper, slotIndex });
  render();
}
function removeSlipper(index) {
  if (!state.started || state.gameOver || state.turn !== "player" || state.cutinActive) return;
  const slipper = state.playerBoard[index];
  if (!slipper) return;
  state.playerBoard[index] = null;
  if (slipper.placedTurn === state.turnNumber) {
    state.placementsThisTurn = Math.max(0, state.placementsThisTurn - 1);
    delete slipper.placedTurn;
  } else {
    slipper.repositionFree = true;
  }
  delete slipper.slotIndex;
  state.hand.push(slipper);
  playSound("place");
  log(`覇王は「${slipper.name}」を玄関から外し、手元に戻した。`);
  announce(`実況: 「${slipper.name}」を外して導線を組み直す！`, "good");
  showAudienceReaction("そこ外すのか！", "good");
  setMessage(`${slipper.name}を外した。空いた導線に別のスリッパを置ける。`);
  if (isOnlineMatch()) sendPlayerAction({ type: "remove", slipper, slotIndex: index });
  render();
}

async function endPlayerTurn() {
  if (!state.started || state.gameOver || state.turn !== "player" || state.cutinActive) return;
  state.turn = "judge-player";
  clearInterval(state.interval);
  byId("timer").textContent = "停止";
  setPhase("ターンエンド", "カットイン終了後、インサイダーが覇王の玄関を吟味する。");
  log("ターンエンド！ 覇王は玄関から一歩下がった。");
  playSound("turn");
  render();
  await showCutin("寿立覇王", "ターンエンド！", "さあ、履くか履かぬか。");
  state.playerTurnsTaken += 1;
  await maybeCpuTrap();
  if (state.gameOver) return;
  setPhase("覇王の吟味", "インサイダーが覇王の玄関を見る。1回の吟味で得られる履きは最大2。");
  log("スリップインサイダーが覇王の玄関を吟味する。");
  announce("実況: インサイダー、覇王の玄関を凝視！", "good");
  await resolveJudgement("player");
  if (isOnlineMatch()) {
    sendPlayerAction({ type: "turnEnd", score: state.playerScore, board: state.playerBoard, turnNumber: state.turnNumber });
    syncMatchState();
    if (!state.gameOver) {
      state.turn = "online-waiting";
      setPhase("オンライン待機", "相手のターンです。相手の配置とターンエンドを待っています。");
      setMessage("相手のターン待ち。相手の玄関が更新されます。");
      render();
    }
  } else if (!state.gameOver) state.phaseTimeout = setTimeout(cpuSetupTurn, 900);
}

async function maybeCpuTrap() {
  const profile = cpuProfile();
  const hasGoodTarget = filledBoard(state.playerBoard).some((slipper) => slipper.flow >= 3 || slipper.dignity >= 4);
  const trapChance = profile.trapChance + (hasGoodTarget ? 0.08 : -0.08);
  const shouldTrap = state.cpuTrapCount > 0 && boardCount(state.playerBoard) >= 2 && Math.random() < trapChance;
  if (!shouldTrap) return;
  const trap = drawTrapForSide("cpu");
  await showCutin("松葉迅", "伏せスリッパオープン！", `${trap?.name || "瞬間逆置き"}、導線を断つ！`, {
    image: JIN_COUNTER_IMAGE,
  });
  playSound("trap");
  triggerSlipperEvent("onReveal", { side: "cpu", slipper: trap });
  if (trap?.effectId) {
    log(`ジンの伏せスリッパ！ 「${trap.name}」が公開された。`);
    await showImportantCommentary("伏せスリッパ公開", `松葉迅の${trap.name}が発動。${trap.text || "読み合いが動いた。"}`, "danger");
    render();
    return;
  }
  const target = filledBoard(state.playerBoard).find((slipper) => slipper.flow >= 3) || filledBoard(state.playerBoard).at(-1);
  if (target) {
    target.flow = Math.max(0, target.flow - 2);
    target.dignity = Math.max(0, target.dignity - 1);
    target.tags.push("逆置き被弾");
    log(`ジンの伏せスリッパ！ 「${target.name}」の導線が乱された。`);
    announce(`実況: ジンの妨害！ 「${target.name}」が逆置き被弾！`, "danger");
    await showImportantCommentary("伏せスリッパ公開", `松葉迅の妨害が発動。「${target.name}」の導線と品格が下がった。`, "danger");
    showAudienceReaction("湿度読みか！？", "danger");
    setMessage("ジンの妨害工作。こちらの導線と品格が少し下がった。");
    render();
  }
}

async function cpuSetupTurn() {
  if (state.gameOver) return;
  startJinTheme();
  state.turn = "cpu-placing";
  byId("timer").textContent = "停止";
  setPhase("ジンのターン開始", "カットイン後、ジンが高速スリッパを配置する。");
  render();
  await showCutin("松葉迅", "ターン開始！", "疾履流、玄関を置き去りにする！");
  if (state.gameOver) return;

  const placementLimit = maxPlacementsPerTurn("cpu");
  const plays = Math.min(placementLimit, field.maxBoard - boardCount(state.cpuBoard), state.cpuDeck.length);
  for (let i = 0; i < plays; i += 1) {
    const slipper = state.cpuDeck.shift();
    const slotIndex = chooseCpuSlot(slipper);
    if (slipper && slotIndex >= 0) {
      slipper.placedTurn = state.turnNumber;
      slipper.slotIndex = slotIndex;
      state.cpuBoard[slotIndex] = slipper;
      triggerSlipperEvent("onEnterField", { side: "cpu", slipper, slotIndex });
    }
  }
  log(`ジンは疾履流で${plays}足を一気に置いた。`);
  state.cpuTurnsTaken += 1;
  playSound("place");
  announce(`実況: ジン、${plays}足を高速配置！`, "danger");
  setPhase("ジンの配置", "ログを確認して、妨害するなら次の割り込み時間で動ける。");
  setMessage("ジンの配置完了。まもなく伏せスリッパ確認。");
  render();
  state.phaseTimeout = setTimeout(openCounterWindow, 900);
}

function openCounterWindow() {
  if (state.gameOver) return;
  state.turn = "counter-window";
  byId("timer").textContent = "割込";
  setPhase("伏せスリッパ確認", "ログを見ながら伏せスリッパを開けるか判断できる。");
  setMessage(state.playerTrapCount > 0 ? `伏せスリッパ使用可能。残り${state.playerTrapCount}足。` : "伏せスリッパは使い切った。ジンの吟味へ進む。");
  render();
  state.phaseTimeout = setTimeout(resolveCpuTurn, 5000);
}

async function resolveCpuTurn() {
  if (state.gameOver || state.cutinActive) return;
  state.turn = "judge-cpu";
  byId("timer").textContent = "停止";
  setPhase("ジンの吟味", "カットイン後、ジンの高速導線が判定される。");
  log("ジンの玄関をインサイダーが吟味する。");
  announce("実況: インサイダー、ジンの高速玄関へ視線を移す！", "danger");
  render();
  await showCutin("松葉迅", "ターンエンド！", "速さは、履きたいに届く！");
  await resolveJudgement("cpu");
  if (!state.gameOver) state.phaseTimeout = setTimeout(startPlayerTurn, 900);
}

async function startPlayerTurn() {
  if (state.gameOver) return;
  state.turn = "player";
  state.turnNumber += 1;
  state.placementsThisTurn = 0;
  drawSlippers(2);
  startHaouTheme();
  render();
  await showCutin("寿立覇王", "ターン開始！", "玄関を、もう一度整える。");
  startTimer();
  setPhase("スリッパ配置", `配置上限は${maxPlacementsPerTurn()}足。履き数は配置数ではなく、玄関全体をインサイダーが見て決まる。`);
  setMessage("あなたのターン。2足補充した。");
  render();
}

async function useCounter() {
  if (state.gameOver || state.playerTrapCount <= 0 || state.turn !== "counter-window" || state.cutinActive) return;
  clearTimeout(state.phaseTimeout);
  const trap = drawTrapForSide("player");
  await showCutin("寿立覇王", "伏せスリッパオープン！", `${trap?.name || "湿度カウンター"}！`, {
    image: HAOU_COUNTER_IMAGE,
  });
  playSound("counter");
  triggerSlipperEvent("onReveal", { side: "player", slipper: trap });
  if (trap?.effectId && trap.effectId !== "humidity_counter") {
    log(`伏せスリッパ「${trap.name}」を公開した。`);
    await showImportantCommentary("伏せスリッパ公開", `${trap.name}発動。${trap.text || "読み合いが動いた。"}`, "good");
    render();
    state.phaseTimeout = setTimeout(resolveCpuTurn, 1100);
    return;
  }
  const target = filledBoard(state.cpuBoard).find((slipper) => slipper.tags.includes("EVA")) || filledBoard(state.cpuBoard).at(-1);
  if (target) {
    target.flow = Math.max(0, target.flow - 3);
    target.tags = target.tags.filter((tag) => tag !== "速度");
    target.tags.push("湿度被弾");
    log(`湿度カウンター発動！ 「${target.name}」の高速導線が湿気で鈍る。`);
    announce(`実況: 湿度カウンター命中！ 「${target.name}」の導線が鈍った！`, "good");
    await showImportantCommentary("効果発動", `湿度カウンター成功。「${target.name}」の導線を下げた。`, "good");
    showAudienceReaction("カウンター通ったァ！", "good");
    setMessage("湿度カウンター成功。ジンの導線を下げた。");
  } else {
    log("湿度カウンターを構えたが、標的がなかった。");
    setMessage("標的がいない。だが相手は警戒している。");
  }
  render();
  state.phaseTimeout = setTimeout(resolveCpuTurn, 1100);
}

async function resolveJudgement(side) {
  const board = side === "player" ? state.playerBoard : state.cpuBoard;
  const placedThisTurn = placedThisTurnFor(board);
  const wearResults = evaluateSlipInsiders({
    entranceState: board,
    placedThisTurn,
    player: { side, trait: traitForSide(side) },
    opponentState: side === "player" ? state.cpuBoard : state.playerBoard,
    turnNumber: state.turnNumber,
  });
  const verdicts = wearResults.results;
  const bonusHits = state.pendingJudgementBonus[side] || 0;
  state.pendingJudgementBonus[side] = 0;
  const hits = Math.min(5, wearResults.count + bonusHits);
  const reasonSummary = verdicts
    .filter((verdict) => verdict.won)
    .map((verdict) => `${verdict.insider.name}: ${verdict.reasonText}`)
    .join(" / ");

  await showInsiderThoughts(verdicts, side);

  if (side === "player") {
    state.playerScore = Math.min(5, state.playerScore + hits);
    log(`配置:${placedThisTurn.length}足 / 履き:${hits}人。${bonusHits ? `伏せ効果ボーナス+${bonusHits}。` : ""}${reasonSummary || "まだ玄関全体の決め手が足りない。"}`);
    if (hits > 0) playSound("score");
    announce(`実況: 配置${placedThisTurn.length}足、しかし玄関全体で${hits}履き獲得！`, "good");
    judgeTaunt(judgeResultTaunt(side, hits), hits > 0 ? "good" : "danger");
    if (hits > 0) await showImportantCommentary("履き判定", `覇王が${hits}履き獲得。現在 ${state.playerScore} - ${state.cpuScore}`, "good");
  } else {
    state.cpuScore = Math.min(5, state.cpuScore + hits);
    log(`ジン配置:${placedThisTurn.length}足 / 履き:${hits}人。${bonusHits ? `伏せ効果ボーナス+${bonusHits}。` : ""}${reasonSummary || "インサイダーはまだ迷っている。"}`);
    if (hits > 0) playSound("score");
    announce(`実況: ジン、配置${placedThisTurn.length}足から${hits}履き発生！`, "danger");
    judgeTaunt(judgeResultTaunt(side, hits), hits > 0 ? "danger" : "good");
    if (hits > 0) await showImportantCommentary("履き判定", `松葉迅が${hits}履き獲得。現在 ${state.playerScore} - ${state.cpuScore}`, "danger");
  }
  renderInsiders(verdicts);
  await checkWinner();
  render();
}

function calcPressure(board, side = "player") {
  const base = board.reduce(
    (sum, slipper) => {
      if (!slipper) return sum;
      const bonus = slotBonusFor(slipper, slipper.slotIndex ?? 0);
      const stats = effectiveSlipperStats(slipper, board, side);
      sum.comfort += stats.comfort + bonus.comfort;
      sum.flow += stats.flow + field.flowBonus + bonus.flow;
      sum.dignity += stats.dignity + bonus.dignity;
      return sum;
    },
    { comfort: 0, flow: 0, dignity: 0 },
  );
  base.dignity += reservePassiveBonus(side);
  if (filledBoard(board).some((slipper) => slipper.burst)) {
    base.comfort += 2;
    base.dignity += 2;
  }
  return base;
}

function calcInsiderScore(board, insider, pressure, side = "player") {
  const placed = filledBoard(board);
  if (!placed.length) return 0;
  const tagHits = placed.flatMap((slipper) => slipper.tags).filter((tag) => insider.wants.includes(tag)).length;
  const slotScore = placed.reduce((sum, slipper) => {
    const slot = slotProfiles[slipper.slotIndex ?? 0];
    const bonus = slotBonusFor(slipper, slipper.slotIndex ?? 0);
    const stats = effectiveSlipperStats(slipper, board, side);
    let score = bonus.tagScore + Math.floor((bonus.attention || 0) / 2);
    if (slot.row === "front" && insider.bias === "flow") score += 2;
    if (slot.row === "front" && insider.wants.includes("子供")) score += 1;
    if (slot.row === "back" && insider.wants.includes("年配")) score += 2;
    if (slot.row === "back" && insider.wants.includes("おもてなし")) score += 2;
    if ((slipper.slotIndex ?? 0) === 1 && insider.bias === "dignity") score += stats.dignity >= 4 ? 2 : -1;
    return sum + score;
  }, 0);
  const biasScore = Math.floor((pressure[insider.bias] || 0) / 2);
  return tagHits * 3 + biasScore + slotScore + Math.floor(Math.random() * 3);
}

function evaluateSlipInsiders({ entranceState, placedThisTurn, player, opponentState, turnNumber }) {
  const pressure = calcPressure(entranceState, player?.side || "player");
  const results = insiders.map((insider) => {
    const evaluation = evaluateSingleInsider({
      entranceState,
      placedThisTurn,
      player,
      opponentState,
      turnNumber,
      insider,
      pressure,
    });
    return {
      insider,
      score: evaluation.score,
      won: evaluation.wore,
      reason: evaluation.reason,
      reasonText: evaluation.reasonText,
      source: evaluation.source,
    };
  });
  return {
    count: results.filter((result) => result.won).length,
    results,
  };
}

function evaluateSingleInsider({ entranceState, placedThisTurn, player, turnNumber, insider, pressure }) {
  const baseScore = calcInsiderScore(entranceState, insider, pressure, player?.side || "player");
  const reasons = wearReasonCandidates({ entranceState, placedThisTurn, player, turnNumber, insider, pressure });
  const bestReason = reasons.sort((a, b) => b.bonus - a.bonus)[0] || {
    reason: "single_slipper_appeal",
    source: "玄関全体",
    text: "玄関全体の印象を見ている",
    bonus: 0,
  };
  const score = baseScore + bestReason.bonus;
  return {
    score,
    wore: score >= 9,
    reason: bestReason.reason,
    reasonText: bestReason.text,
    source: bestReason.source,
  };
}

function wearReasonCandidates({ entranceState, placedThisTurn, player, turnNumber, insider, pressure }) {
  const placed = filledBoard(entranceState);
  const emptySlots = field.maxBoard - placed.length;
  const slots = placed.map((slipper) => slipper.slotIndex ?? 0);
  const backCount = slots.filter((index) => slotProfiles[index]?.row === "back").length;
  const frontCount = slots.filter((index) => slotProfiles[index]?.row === "front").length;
  const hasLeftBack = slots.includes(3);
  const hasRightBack = slots.includes(4);
  const hasLeftRightFront = slots.includes(0) && slots.includes(2);
  const quietOrJapanese = placedThisTurn.filter((slipper) => slipper.tags.includes("静音") || slipper.style.includes("旅館") || slipper.name.includes("畳"));
  const bestSingle = placed
    .map((slipper) => {
      const stats = effectiveSlipperStats(slipper, entranceState, player?.side || "player");
      return {
        slipper,
        hits: slipper.tags.filter((tag) => insider.wants.includes(tag)).length,
        stat: stats[insider.bias] || 0,
      };
    })
    .sort((a, b) => b.hits * 3 + b.stat - (a.hits * 3 + a.stat))[0];
  const reasons = [];
  if (bestSingle && (bestSingle.hits > 0 || bestSingle.stat >= 4)) {
    reasons.push({
      reason: "single_slipper_appeal",
      source: bestSingle.slipper.name,
      text: `${bestSingle.slipper.name}の魅力に反応`,
      bonus: bestSingle.hits * 2 + Math.floor(bestSingle.stat / 3),
    });
  }
  if (hasLeftRightFront || (frontCount >= 2 && pressure.flow >= 8)) {
    reasons.push({
      reason: "route_synergy",
      source: "前列導線",
      text: "左右前列の導線が自然に通った",
      bonus: insider.bias === "flow" ? 4 : 2,
    });
  }
  if (hasLeftBack && hasRightBack) {
    reasons.push({
      reason: "route_synergy",
      source: "静かな奥列導線",
      text: "左右奥列の静音導線に反応",
      bonus: insider.bias === "dignity" || insider.wants.includes("年配") ? 5 : 3,
    });
  }
  if (emptySlots >= 2 && backCount >= 1) {
    reasons.push({
      reason: "empty_space",
      source: "余白",
      text: "空白の余裕が玄関を落ち着かせた",
      bonus: insider.bias === "dignity" ? 3 : 1,
    });
  }
  if (slots.includes(0) && slots.includes(4)) {
    reasons.push({
      reason: "angle_bonus",
      source: "斜め導線",
      text: "斜めの角度が入りやすさを作った",
      bonus: insider.bias === "flow" ? 3 : 2,
    });
  }
  if (pressure.comfort + pressure.dignity >= 14) {
    reasons.push({
      reason: "atmosphere_bonus",
      source: "玄関全体",
      text: "玄関全体の安心感に反応",
      bonus: insider.bias === "comfort" ? 3 : 2,
    });
  }
  if (player.trait?.traitId === "silent_manner" && turnNumber === 1 && quietOrJapanese.length >= 2 && backCount >= 1) {
    reasons.push({
      reason: "player_trait",
      source: player.trait.name,
      text: "無言所作による静かな空気に反応",
      bonus: 2 + Math.min(3, Math.floor((pressure.dignity + pressure.flow) / 5)),
    });
  }
  if (placed.some((slipper) => slipper.burst)) {
    reasons.push({
      reason: "special_effect",
      source: "一手整列",
      text: "特殊効果で玄関全体が整った",
      bonus: 2,
    });
  }
  if (placed.some((slipper) => slipper.effectId === "shadow_link") && trapListForSide(player?.side || "player").length > 0) {
    reasons.push({
      reason: "special_effect",
      source: "シャドウリンク",
      text: "残る伏せスリッパが影の圧力になった",
      bonus: Math.min(3, trapListForSide(player?.side || "player").length),
    });
  }
  if (reservePassiveBonus(player?.side || "player") > 0) {
    reasons.push({
      reason: "special_effect",
      source: "リザーブガード",
      text: "控えの守りが玄関の品格を支えた",
      bonus: 2,
    });
  }
  return reasons;
}

async function checkWinner() {
  if (state.playerScore >= 5 || state.cpuScore >= 5) {
    state.gameOver = true;
    clearInterval(state.interval);
    clearTimeout(state.phaseTimeout);
    stopHaouTheme();
    stopJinTheme();
    document.querySelector(".arena").classList.add("game-over");
    const win = state.playerScore >= 5;
    const text = win ? "履いたァァァーー！！ 覇王、初戦突破！" : "マッハのジン、速すぎる玄関で勝利！";
    playSound(win ? "win" : "trap");
    setPhase("決着", text);
    setMessage(text);
    log(text);
    if (win) state.playerRoundWins += 1;
    else state.cpuRoundWins += 1;
    state.firstPlayer = win ? "cpu" : "player";
    render();
    await showImportantCommentary("試合終了", `${win ? "覇王" : "松葉迅"}がこのゲームを獲得。GAME ${state.playerRoundWins}-${state.cpuRoundWins}`, win ? "good" : "danger");
    if (state.playerRoundWins >= MATCH_WIN_TARGET) {
      await showCutin("寿立覇王", `GAME WIN ${state.playerRoundWins}-${state.cpuRoundWins}`, "2本先取、マッチを制した。");
      await finishMatch("win", "score");
    } else if (state.cpuRoundWins >= MATCH_WIN_TARGET) {
      await showCutin("松葉迅", `GAME WIN ${state.playerRoundWins}-${state.cpuRoundWins}`, "疾履流、マッチを奪取。");
      await finishMatch("loss", "score");
    } else {
      await showCutin(win ? "寿立覇王" : "松葉迅", `GAME WIN ${state.playerRoundWins}-${state.cpuRoundWins}`, win ? "この玄関、まずは取った。" : "疾風流、まず一勝。");
      await openSideboardTime();
    }
  }
}

async function finishMatch(result, reason = "score") {
  if (state.matchFinished) return;
  state.matchFinished = true;
  state.matchResult = result;
  state.matchPoints = result === "win" ? 3 : result === "draw" ? 1 : 0;
  state.gameOver = true;
  clearInterval(state.interval);
  clearInterval(state.sideboardInterval);
  stopMatchTimer();
  stopHaouTheme();
  stopJinTheme();
  const ratingResult = updateLocalRating(result === "win" ? 1 : result === "draw" ? 0.5 : 0);
  const jinRatingText = `松葉迅 ${state.cpuRatingBefore} → ${state.cpuRatingAfter}`;
  const ratingText = `Rating ${ratingResult.delta >= 0 ? "+" : ""}${ratingResult.delta} / ${ratingResult.before} → ${ratingResult.after} / ${jinRatingText}`;
  log(`MATCH ${result.toUpperCase()} / 勝ち点 ${state.matchPoints} / ${ratingText}`);
  await showImportantCommentary(
    result === "draw" ? "MATCH DRAW" : result === "win" ? "MATCH WIN" : "MATCH LOSS",
    ratingText,
    result === "win" ? "good" : "danger",
  );
  if (result === "win") {
    byId("victoryRatingText").textContent = `MATCH WIN / 勝ち点 ${state.matchPoints} / ${ratingText}`;
    byId("victoryRestartBtn").textContent = "再戦";
    await showVictory();
  } else if (result === "loss") {
    byId("defeatRatingText").textContent = `MATCH LOSS / 勝ち点 ${state.matchPoints} / ${ratingText}`;
    byId("defeatRestartBtn").textContent = "再戦";
    await showDefeat();
  } else {
    byId("drawRatingText").textContent = ratingText;
    await showDraw();
  }
  if (reason === "time" && result === "draw") {
    announce("時間切れェェェ！！ 勝負は引き分けだァ！！", "danger");
    showJudgePopup("裁定。制限時間終了。マッチ引き分けです。", "warn");
  }
  render();
}

function setupRound() {
  clearInterval(state.interval);
  clearTimeout(state.phaseTimeout);
  stopHaouTheme();
  stopJinTheme();
  stopHaouVictoryTheme();
  stopJinVictoryTheme();
  Object.assign(state, {
    started: true,
    playerDeck: shuffle(state.matchEntrance.map((name) => cloneSlipper(slipperByName(name))).filter(Boolean)),
    cpuDeck: shuffle(cpuDeckNames.map((name) => cloneSlipper(slipperByName(name)))),
    hand: [],
    playerBoard: emptyBoard(),
    cpuBoard: emptyBoard(),
    playerScore: 0,
    cpuScore: 0,
    turn: "player",
    timer: 45,
    gameOver: false,
    counterReady: true,
    cpuTrapReady: true,
    playerTrapCount: Math.min(MAX_TRAP_SIZE, getSelectedEntrance().traps.length),
    cpuTrapCount: 3,
    playerTraps: getSelectedEntrance().traps.slice(0, MAX_TRAP_SIZE),
    cpuTraps: ["瞬間逆置き", "瞬間逆置き", "瞬間逆置き"],
    pendingJudgementBonus: { player: 0, cpu: 0 },
    turnNumber: 1,
    placementsThisTurn: 0,
    playerTurnsTaken: 0,
    cpuTurnsTaken: 0,
    phaseTimeout: null,
    cutinActive: false,
  });
  drawSlippers(5);
  document.querySelector(".arena").classList.remove("game-over");
  renderInsiders();
  render();
}

async function beginNextRound() {
  byId("sideboardScreen").classList.remove("show");
  byId("sideboardScreen").setAttribute("aria-hidden", "true");
  state.matchRound += 1;
  setupRound();
  applyPendingRoundStartEffects();
  await showVsScreen({ auto: true, delay: 1200 });
  await showCutin("寿立覇王", `Round ${state.matchRound} 開始！`, "履き替えたなら、もう一度玄関へ。");
  setPhase("スリッパ配置", `配置上限は${maxPlacementsPerTurn()}足。Shoe Rack後の玄関全体で履きを取りに行く。`);
  setMessage(`Round ${state.matchRound}/${MATCH_ROUNDS} 開始。手スリッパから配置しよう。`);
  if (state.firstPlayer === "cpu") {
    cpuSetupTurn();
  } else {
    startTimer();
  }
  render();
}

async function openSideboardTime() {
  state.sideboardSeconds = SIDEBOARD_SECONDS;
  state.sideboardSwaps = 0;
  state.playerSideboardReady = false;
  state.cpuSideboardReady = false;
  pendingSideboardPick = null;
  state.sideboardWarnedTwoMinute = false;
  state.sideboardWarnedTenSecond = false;
  state.sideboardMessageOverride = "";
  byId("sideboardScreen").classList.add("show");
  byId("sideboardScreen").setAttribute("aria-hidden", "false");
  byId("sideboardDoneBtn").disabled = false;
  byId("sideboardReadyState").textContent = "相手準備中";
  announce("Shoe Rack Change開始ィィィ！！", "good");
  await showImportantCommentary("Shoe Rack Change", "3分以内にShoe Rackから交換。完了すると次ゲームへ進みます。", "good");
  showJudgePopup("制限時間は3分。構築変更を開始してください。", "warn");
  renderSideboard();
  clearInterval(state.sideboardInterval);
  const profile = cpuProfile();
  const cpuReadyDelay = profile.sideboardReadyMin + Math.random() * (profile.sideboardReadyMax - profile.sideboardReadyMin);
  const cpuReadyAt = Date.now() + cpuReadyDelay;
  state.sideboardInterval = setInterval(() => {
    state.sideboardSeconds -= 1;
    if (!state.cpuSideboardReady && Date.now() >= cpuReadyAt) {
      state.cpuSideboardReady = true;
      byId("sideboardReadyState").textContent = state.playerSideboardReady ? "双方準備完了" : "相手準備完了";
    }
    if (!state.sideboardWarnedTwoMinute && state.sideboardSeconds < 120) {
      state.sideboardWarnedTwoMinute = true;
      playSound("turn");
      announce("実況: Shoe Rack交換、残り2分を切りました！ 迷いすぎると玄関が冷えます！", "danger");
    }
    if (!state.sideboardWarnedTenSecond && state.sideboardSeconds < 10) {
      state.sideboardWarnedTenSecond = true;
      playSound("trap");
      announce("実況: 残り10秒！ 最後の履き替え、今決めてください！", "danger");
    }
    renderSideboardTimer();
    if (state.matchFinished) {
      clearInterval(state.sideboardInterval);
      return;
    }
    if (state.sideboardSeconds <= 0) {
      showJudgePopup("時間です。未確定部分は前構成を維持します。", "warn");
      clearInterval(state.sideboardInterval);
      beginNextRound();
    } else if (state.playerSideboardReady && state.cpuSideboardReady) {
      clearInterval(state.sideboardInterval);
      beginNextRound();
    }
  }, 1000);
  renderSideboardTimer();
}

function renderSideboardTimer() {
  byId("sideboardTimer").textContent = `RACK ${formatClock(state.sideboardSeconds)} / MATCH ${formatClock(state.matchSeconds)}`;
}

function renderSideboard() {
  byId("sideboardEntranceCount").textContent = `${state.matchEntrance.length}/${MAX_ENTRANCE_SIZE}`;
  byId("sideboardRackCount").textContent = `${state.matchShoeRack.length}/${MAX_SHOE_RACK_SIZE}`;
  if (state.sideboardMessageOverride) {
    byId("sideboardMessage").textContent = state.sideboardMessageOverride;
    state.sideboardMessageOverride = "";
  } else if (!pendingSideboardPick) {
    byId("sideboardMessage").textContent = `Shoe Rackとエントランスを交換できます。交換 ${state.sideboardSwaps}/3。`;
  }
  renderSwapList("sideboardEntrance", state.matchEntrance, "entrance");
  renderSwapList("sideboardRack", state.matchShoeRack, "shoeRack");
}

function renderSwapList(id, names, source) {
  const root = byId(id);
  root.innerHTML = "";
  names.forEach((name, index) => {
    const item = document.createElement("button");
    item.type = "button";
    const selected = pendingSideboardPick?.source === source && pendingSideboardPick.index === index;
    const oppositePicked = pendingSideboardPick && pendingSideboardPick.source !== source;
    let wouldDuplicate = false;
    if (oppositePicked) {
      if (source === "shoeRack") {
        wouldDuplicate = countName(state.matchEntrance, name) >= MAX_ENTRANCE_SAME_NAME;
      } else {
        wouldDuplicate = state.matchShoeRack.some((rackItem, rackIndex) => rackIndex !== pendingSideboardPick.index && rackItem === name);
      }
    }
    item.className = `swap-item ${selected ? "selected" : ""} ${wouldDuplicate ? "invalid" : ""}`;
    item.disabled = state.playerSideboardReady || state.sideboardSwaps >= MAX_SHOE_RACK_SIZE;
    const label = selected
      ? "選択中"
      : wouldDuplicate
        ? "同名上限・別の足を選択"
        : oppositePicked
          ? "ここへ入れ替え"
          : source === "entrance"
            ? "外す足を選択"
            : "入れる足を選択";
    item.innerHTML = `${slipperArt(name, "swap-art")}<strong>${name}</strong><span>${label}</span>`;
    item.addEventListener("click", () => selectSideboardItem(source, index));
    root.append(item);
  });
}
let pendingSideboardPick = null;

function selectSideboardItem(source, index) {
  if (state.playerSideboardReady || state.sideboardSwaps >= MAX_SHOE_RACK_SIZE) return;
  if (!pendingSideboardPick) {
    pendingSideboardPick = { source, index };
    byId("sideboardMessage").textContent = `${source === "entrance" ? "エントランス" : "Shoe Rack"}から1足選択中。交換先を選んでください。`;
    renderSideboard();
    return;
  }
  if (pendingSideboardPick.source === source) {
    pendingSideboardPick = { source, index };
    byId("sideboardMessage").textContent = "同じ場所の中で選び直しました。交換先を選んでください。";
    renderSideboard();
    return;
  }
  const entranceIndex = source === "entrance" ? index : pendingSideboardPick.index;
  const rackIndex = source === "shoeRack" ? index : pendingSideboardPick.index;
  const entranceName = state.matchEntrance[entranceIndex];
  const rackName = state.matchShoeRack[rackIndex];
  const nextEntrance = state.matchEntrance.map((name, i) => (i === entranceIndex ? rackName : name));
  const nextRack = state.matchShoeRack.map((name, i) => (i === rackIndex ? entranceName : name));
  if (hasEntranceOverLimit(nextEntrance) || hasUniqueOnlyDuplicates(nextRack)) {
    pendingSideboardPick = null;
    byId("sideboardMessage").textContent = "同名スリッパはエントランスに2足までです。Shoe Rackは同名不可です。別の足を選んでください。";
    renderSideboard();
    return;
  }
  state.matchEntrance = nextEntrance;
  state.matchShoeRack = nextRack;
  state.sideboardSwaps += 1;
  triggerSlipperEvent("onSideSwapIn", { side: "player", slipper: slipperByName(rackName), entranceIndex });
  pendingSideboardPick = null;
  playSound("place");
  const message = `交換完了: ${entranceName} ⇔ ${rackName}。次戦のエントランスに反映されます。`;
  state.sideboardMessageOverride = message;
  byId("sideboardMessage").textContent = message;
  log(message);
  showAudienceReaction("履き替えた！", "good");
  renderSideboard();
}

function completeSideboard() {
  state.playerSideboardReady = true;
  pendingSideboardPick = null;
  renderSideboard();
  byId("sideboardDoneBtn").disabled = true;
  byId("sideboardReadyState").textContent = state.cpuSideboardReady ? "双方準備完了" : "相手準備待ち";
  if (state.cpuSideboardReady) {
    clearInterval(state.sideboardInterval);
    beginNextRound();
  }
}

function returnToTitleFromSideboard() {
  clearInterval(state.sideboardInterval);
  clearInterval(state.interval);
  clearTimeout(state.phaseTimeout);
  stopHaouTheme();
  stopJinTheme();
  state.started = false;
  state.gameOver = true;
  state.turn = "idle";
  state.playerSideboardReady = false;
  state.cpuSideboardReady = false;
  pendingSideboardPick = null;
  byId("sideboardScreen").classList.remove("show");
  byId("sideboardScreen").setAttribute("aria-hidden", "true");
  byId("gameApp").classList.add("screen-hidden");
  byId("characterSelectScreen").classList.add("screen-hidden");
  byId("titleScreen").classList.remove("screen-hidden");
  render();
}

function render() {
  byId("playerScore").textContent = state.playerScore;
  byId("cpuScore").textContent = state.cpuScore;
  byId("matchLabel").textContent = `Round ${state.matchRound || 0}/${MATCH_ROUNDS}  勝敗 ${state.playerRoundWins}-${state.cpuRoundWins}`;
  byId("officialMatchLabel").textContent = `GAME ${state.matchRound || 0} / BO3  寿立覇王 ${state.playerRoundWins} - ${state.cpuRoundWins} 松葉迅`;
  updateMatchTimerLabel();
  const profile = loadPlayerProfile();
  byId("playerRatingLabel").textContent = `Rating ${profile.rating}${isRatingExpired(profile.lastMatchAt) ? " / 失効" : ""}`;
  byId("cpuRatingLabel").textContent = `Rating ${state.cpuRatingBefore || 1980}`;
  byId("matchInfoTime").textContent = `MATCH TIME ${formatClock(state.matchSeconds || MATCH_SECONDS)}`;
  byId("matchInfoGame").textContent = `GAME ${state.matchRound || 0} / BO3`;
  byId("matchInfoScore").textContent = `履き ${state.playerScore} - ${state.cpuScore} / Match ${state.playerRoundWins}-${state.cpuRoundWins}`;
  byId("matchInfoRatings").textContent = `Rating ${profile.rating} / ${state.cpuRatingBefore || 1980}`;
  byId("deckCount").textContent = `残り ${state.playerDeck.length} / 配置 ${state.placementsThisTurn}・${maxPlacementsPerTurn()}`;
  byId("turnLabel").textContent = getTurnLabel();
  byId("phaseHint").textContent = getPhaseHint();
  if (!state.started) byId("timer").textContent = "--";
  if (state.started && state.turn === "player" && !state.gameOver) byId("timer").textContent = state.timer;
  byId("counterBtn").disabled = state.turn !== "counter-window" || state.playerTrapCount <= 0 || state.gameOver || state.cutinActive;
  byId("counterBtn").textContent = `湿度カウンター (${state.playerTrapCount})`;
  byId("endTurnBtn").disabled = state.turn !== "player" || state.gameOver || state.cutinActive;
  byId("newGameBtn").disabled = !state.started || state.cutinActive;
  byId("startBtn").disabled = state.cutinActive;
  byId("playerPressure").textContent = `履き ${state.playerScore} / ${pressureLabel(calcPressure(state.playerBoard, "player"))}`;
  byId("cpuPressure").textContent = `履き ${state.cpuScore} / ${pressureLabel(calcPressure(state.cpuBoard, "cpu"))}`;
  renderBoard("playerBoard", state.playerBoard);
  renderBoard("cpuBoard", state.cpuBoard);
  renderTraps("playerTraps", state.playerTrapCount);
  renderTraps("cpuTraps", state.cpuTrapCount);
  renderHand();
  renderMobileBattle();
}

function getTurnLabel() {
  if (!state.started) return "開始前";
  if (state.gameOver) return "決着";
  const labels = {
    player: "あなたのターン",
    "judge-player": "覇王の吟味",
    "cpu-placing": "ジンのターン",
    "counter-window": "割り込み可能",
    "judge-cpu": "ジンの吟味",
  };
  return labels[state.turn] || "進行中";
}

function getPhaseHint() {
  if (!state.started) return "待機";
  const labels = {
    player: "配置",
    "judge-player": "吟味",
    "cpu-placing": "相手",
    "counter-window": "割込",
    "judge-cpu": "吟味",
  };
  return state.gameOver ? "終了" : labels[state.turn] || "進行";
}

function renderBoard(id, board) {
  const root = byId(id);
  root.innerHTML = "";
  for (let i = 0; i < field.maxBoard; i += 1) {
    const slot = document.createElement("article");
    const slipper = board[i];
    const canRemove = id === "playerBoard" && slipper && state.turn === "player" && !state.gameOver && !state.cutinActive;
    slot.className = `slot ${slipper ? "filled" : ""} ${canRemove ? "removable" : ""}`;
    if (slipper) {
      const slotBonus = slotBonusFor(slipper, i);
      slot.innerHTML = `
        <span class="slot-name">${slotProfiles[i].name}</span>
        ${slipperArt(slipper, "slot-art")}
        <h3>${slipper.name}</h3>
        <p>${slipper.text}</p>
        <div class="mini-stats">${statPill("履き心地", slipper.comfort + slotBonus.comfort)}${statPill("導線", slipper.flow + slotBonus.flow)}${statPill("品格", slipper.dignity + slotBonus.dignity)}</div>
        <div class="tags">${slipper.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      `;
      if (canRemove) {
        slot.title = "クリックでこのスリッパを外す";
        slot.addEventListener("click", () => removeSlipper(i));
      }
    } else {
      slot.innerHTML = `<span class="slot-name">${slotProfiles[i].name}</span><p>空き導線</p>`;
    }
    root.append(slot);
  }
}

function renderHand() {
  const root = byId("hand");
  root.innerHTML = "";
  if (state.activeHandUid && !state.hand.some((slipper) => slipper.uid === state.activeHandUid)) {
    state.activeHandUid = null;
  }
  state.hand.forEach((slipper) => {
    const button = document.createElement("article");
    button.className = `card ${state.activeHandUid === slipper.uid ? "open" : ""}`;
    const actionLocked = state.turn !== "player" || state.gameOver || state.cutinActive;
    if (actionLocked) button.classList.add("disabled");
    button.tabIndex = actionLocked ? -1 : 0;
    button.setAttribute("aria-label", slipper.name);
    button.addEventListener("click", () => {
      if (actionLocked) return;
      state.activeHandUid = state.activeHandUid === slipper.uid ? null : slipper.uid;
      renderHand();
    });
    button.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      if (actionLocked) return;
      state.activeHandUid = state.activeHandUid === slipper.uid ? null : slipper.uid;
      renderHand();
    });
    button.innerHTML = `
      ${slipperArt(slipper, "card-art")}
    `;
    root.append(button);
  });
  renderHandDetail();
}

function renderHandDetail() {
  const root = byId("handDetail");
  const slipper = state.hand.find((item) => item.uid === state.activeHandUid);
  if (!slipper) {
    root.hidden = true;
    root.innerHTML = "";
    return;
  }
  const actionLocked = state.turn !== "player" || state.gameOver || state.cutinActive;
  const slotButtons = slotProfiles
    .map(
      (slot, index) =>
        `<button type="button" data-detail-slot="${index}" ${state.playerBoard[index] || actionLocked ? "disabled" : ""}>${slot.name}</button>`,
    )
    .join("");
  root.hidden = false;
  root.innerHTML = `
    <div class="hand-detail-head">
      ${slipperArt(slipper, "detail-art")}
      <div>
        <div class="power"><span>${slipper.style}</span><span>スリッパ</span></div>
        <h3>${slipper.name}</h3>
      </div>
      <button type="button" data-close-detail>閉じる</button>
    </div>
    <p>${slipper.text}</p>
    <div class="mini-stats">${statPill("履き心地", slipper.comfort)}${statPill("導線", slipper.flow)}${statPill("品格", slipper.dignity)}</div>
    <div class="tags">${slipper.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    <p class="placement-help">配置先を選択：左前 / 中央前 / 右前 / 左奥 / 右奥</p>
    <div class="slot-buttons">${slotButtons}</div>
  `;
  root.querySelector("[data-close-detail]").addEventListener("click", () => {
    state.activeHandUid = null;
    renderHand();
  });
  root.querySelectorAll("[data-detail-slot]").forEach((slotButton) => {
    slotButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playSlipper(slipper.uid, Number(slotButton.dataset.detailSlot));
    });
  });
}

function renderTraps(id, count) {
  const root = byId(id);
  if (!root) return;
  root.innerHTML = "";
  for (let i = 0; i < 3; i += 1) {
    const trap = document.createElement("span");
    trap.className = `trap-card ${i < count ? "active" : "used"}`;
    trap.textContent = i < count ? "伏" : "済";
    root.append(trap);
  }
}

function renderInsiders(verdicts = insiders.map((insider) => ({ insider, won: false, score: 0, reasonText: "" }))) {
  const root = byId("insiders");
  root.innerHTML = "";
  let wonCount = 0;
  verdicts.forEach(({ insider, won, score, reasonText }) => {
    if (won) wonCount += 1;
    const item = document.createElement("article");
    item.className = `judge ${won ? "won" : "lost"}`;
    item.innerHTML = `
      <strong>${insider.name}</strong>
      <p>${won ? "履きたい" : "まだ迷っている"} / 好み: ${insider.wants.join("・")} / 気分 ${score}</p>
      ${reasonText ? `<p class="wear-reason">理由: ${reasonText}</p>` : ""}
    `;
    root.append(item);
  });
  byId("verdictLabel").textContent = `${wonCount}/5 履誘`;
}

function statPill(label, value) {
  return `<span class="stat-pill"><b>${label}</b><i>${value}</i></span>`;
}

function pressureLabel(pressure) {
  return `履き心地 ${pressure.comfort} / 導線 ${pressure.flow} / 品格 ${pressure.dignity}`;
}

function setPhase(title, text) {
  byId("phaseTitle").textContent = title;
  byId("phaseText").textContent = text;
}

function setMessage(text) {
  byId("message").textContent = text;
}

function log(text) {
  const item = document.createElement("li");
  item.textContent = text;
  byId("log").prepend(item);
  while (byId("log").children.length > 80) byId("log").lastElementChild.remove();
}

function renderMobileBattle() {
  const mobileRoot = byId("mobileBattle");
  if (!mobileRoot) return;
  const profile = loadPlayerProfile();
  mobileRoot.classList.toggle("player-turn", state.started && state.turn === "player" && !state.gameOver);
  mobileRoot.classList.toggle("rival-turn", state.started && ["cpu", "judge-cpu"].includes(state.turn) && !state.gameOver);
  byId("mobilePlayerScore").textContent = state.playerScore;
  byId("mobileCpuScore").textContent = state.cpuScore;
  byId("mobilePlayerMeta").textContent = `Rating ${profile.rating}`;
  byId("mobileCpuMeta").textContent = `Rating ${state.cpuRatingBefore || 1980}`;
  byId("mobileGameLabel").textContent = `GAME ${state.matchRound || 0}/BO3 ${state.playerRoundWins}-${state.cpuRoundWins}`;
  byId("mobileTurnLabel").textContent = getTurnLabel();
  byId("mobileTimeLabel").textContent = formatClock(state.matchSeconds || MATCH_SECONDS);
  byId("mobileStartBtn").hidden = state.started;
  byId("mobileStartBtn").disabled = state.cutinActive || state.started;
  byId("mobileEndTurnBtn").disabled = state.turn !== "player" || state.gameOver || state.cutinActive;
  byId("mobileCounterBtn").disabled = state.turn !== "counter-window" || state.playerTrapCount <= 0 || state.gameOver || state.cutinActive;
  byId("mobileCounterBtn").textContent = `伏${state.playerTrapCount}`;
  const canShowMobileRematch = state.gameOver || state.matchFinished;
  byId("mobileRematchBtn").hidden = !canShowMobileRematch;
  byId("mobileRematchBtn").disabled = !canShowMobileRematch || state.cutinActive;
  renderMobileBoard("mobileCpuBoard", state.cpuBoard, "cpu");
  renderMobileBoard("mobilePlayerBoard", state.playerBoard, "player");
  renderMobileHand();
  renderMobileHandDetail();
}

function renderMobileBoard(id, board, side) {
  const root = byId(id);
  root.innerHTML = "";
  root.dataset.side = side === "player" ? "YOU" : "OPP";
  root.dataset.fieldLabel = side === "player" ? "寿立覇王の玄関" : "松葉迅の玄関";
  const canOperate = side === "player" && state.turn === "player" && !state.gameOver && !state.cutinActive;
  const hasActive = Boolean(state.activeHandUid);
  for (let i = 0; i < field.maxBoard; i += 1) {
    const slipper = board[i];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `mobile-slot ${slipper ? "filled" : ""} ${canOperate && !slipper && hasActive ? "targetable" : ""} ${canOperate && slipper ? "removable" : ""}`;
    button.disabled = side !== "player" || (!slipper && (!canOperate || !hasActive)) || Boolean(slipper && !canOperate);
    if (slipper) {
      button.innerHTML = `
        ${mobileSlotBadge(i, side)}
        ${slipperArt(slipper, "mobile-slot-art")}
        <strong>${shortSlipperName(slipper.name)}</strong>
      `;
      if (canOperate) button.addEventListener("click", () => removeSlipper(i));
    } else {
      button.innerHTML = `${mobileSlotBadge(i, side)}<i></i>`;
      if (canOperate && hasActive) button.addEventListener("click", () => playSlipper(state.activeHandUid, i));
    }
    root.append(button);
  }
  root.append(mobileFieldIdentity(side));
}

function mobileSlotBadge(index, side) {
  return `
    <span class="mobile-slot-badge ${side === "player" ? "you" : "opp"}">
      <b>${slotAbbrevs[index]}</b>
      <small>${slotProfiles[index].name}</small>
    </span>
  `;
}

function mobileFieldIdentity(side) {
  const identity = document.createElement("div");
  const isPlayer = side === "player";
  identity.className = `mobile-field-identity ${isPlayer ? "you" : "opp"}`;
  identity.innerHTML = `
    <span class="mobile-role-icon">${isPlayer ? "YOU" : "OPP"}</span>
    <img src="${isPlayer ? "assets/haou-vs.png" : "assets/jin-vs.png"}" alt="" />
    <div>
      <strong>${isPlayer ? "自分フィールド" : "相手フィールド"}</strong>
      <small>${isPlayer ? "寿立覇王" : "松葉迅"}</small>
    </div>
  `;
  return identity;
}

function shortSlipperName(name = "") {
  return name.length > 7 ? `${name.slice(0, 7)}…` : name;
}

function renderMobileHand() {
  const root = byId("mobileHand");
  root.innerHTML = "";
  const actionLocked = state.turn !== "player" || state.gameOver || state.cutinActive;
  state.hand.forEach((slipper) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `mobile-hand-card ${state.activeHandUid === slipper.uid ? "selected" : ""}`;
    button.disabled = actionLocked;
    button.innerHTML = `
      ${slipperArt(slipper, "mobile-card-art")}
      <strong>${shortSlipperName(slipper.name)}</strong>
      <span>${slipper.comfort}/${slipper.flow}/${slipper.dignity}</span>
    `;
    button.addEventListener("click", () => {
      if (actionLocked) return;
      state.activeHandUid = state.activeHandUid === slipper.uid ? null : slipper.uid;
      render();
    });
    root.append(button);
  });
}

function renderMobileHandDetail() {
  const root = byId("mobileHandDetail");
  const slipper = state.hand.find((item) => item.uid === state.activeHandUid);
  if (!slipper) {
    root.hidden = true;
    root.innerHTML = "";
    return;
  }
  const actionLocked = state.turn !== "player" || state.gameOver || state.cutinActive;
  const slotButtons = slotProfiles
    .map((slot, index) => `<button type="button" data-mobile-slot="${index}" ${state.playerBoard[index] || actionLocked ? "disabled" : ""}>${slot.name}</button>`)
    .join("");
  root.hidden = false;
  root.innerHTML = `
    <div class="mobile-detail-main">
      ${slipperArt(slipper, "mobile-detail-art")}
      <div>
        <strong>${slipper.name}</strong>
        <span>${slipper.style} / 履 ${slipper.comfort} 導 ${slipper.flow} 品 ${slipper.dignity}</span>
        <p>${slipper.text}</p>
      </div>
      <button type="button" data-mobile-close>×</button>
    </div>
    <div class="mobile-slot-buttons">${slotButtons}</div>
  `;
  root.querySelector("[data-mobile-close]")?.addEventListener("click", () => {
    state.activeHandUid = null;
    render();
  });
  root.querySelectorAll("[data-mobile-slot]").forEach((button) => {
    button.addEventListener("click", () => playSlipper(slipper.uid, Number(button.dataset.mobileSlot)));
  });
}

let lastCommentaryAt = 0;
const infoLayer = {
  IMPORTANT: "important",
  STANDARD: "standard",
  AMBIENT: "ambient",
};
const importantQueue = [];
let importantNoticeActive = false;

function stripSpeaker(text) {
  const raw = String(text || "").trim();
  return raw.replace(/^[^:：]{1,16}[:：]\s*/, "").replace(/^JUDGE\s*/i, "").trim();
}

function logTyped(kind, text) {
  if (text) log(`[${kind}] ${text}`);
}

function showImportantCommentary(title, text, tone = "") {
  return new Promise((resolve) => {
    importantQueue.push({ title, text, tone, resolve });
    runImportantNoticeQueue();
  });
}

function runImportantNoticeQueue() {
  if (importantNoticeActive || !importantQueue.length) return;
  const item = importantQueue.shift();
  importantNoticeActive = true;
  state.cutinActive = true;
  render();
  const notice = byId("importantNotice");
  byId("importantNoticeType").textContent = item.tone === "danger" ? "CRITICAL" : "IMPORTANT";
  byId("importantNoticeTitle").textContent = item.title || "重要情報";
  byId("importantNoticeText").textContent = item.text || "";
  notice.className = `important-notice show ${item.tone || ""}`.trim();
  notice.setAttribute("aria-hidden", "false");
  const finish = () => {
    byId("importantNoticeBtn").removeEventListener("click", finish);
    notice.classList.remove("show");
    notice.setAttribute("aria-hidden", "true");
    importantNoticeActive = false;
    state.cutinActive = false;
    render();
    item.resolve();
    runImportantNoticeQueue();
  };
  byId("importantNoticeBtn").addEventListener("click", finish);
}
const audienceLines = [
  "ざわ……",
  "今の配置攻めすぎだろ！",
  "湿度読みか！？",
  "また旅館型かよ！",
  "中央前、勝負に出たな！",
  "奥が効いてきた！",
  "そこ外すのか！",
];

function showCommentaryPopup(text, tone = "") {
  lastCommentaryAt = Date.now();
  const toast = document.createElement("div");
  toast.className = `toast ${tone}`.trim();
  const cleanText = text.replace(/^実況[:：]\s*/, "").replace(/^螳滓ｳ[:：]\s*/, "");
  toast.innerHTML = `<span>${cleanText}</span><img src="assets/kai-setsuna.png" alt="" />`;
  byId("toastStack").prepend(toast);
  setTimeout(() => toast.remove(), document.body.classList.contains("mobile-ui") ? 3400 : 3800);
}
function showJudgePopup(text, tone = "") {
  if (!text) return;
  logTyped("JUDGE", stripSpeaker(text));
  const delay = Date.now() - lastCommentaryAt < 900 ? 650 : 0;
  setTimeout(() => {
    const taunt = document.createElement("div");
    taunt.className = `judge-taunt ${tone}`.trim();
    taunt.innerHTML = `<img src="assets/judge-tsg.png" alt="" /><strong>JUDGE</strong><span>${text.replace(/^ジャッジ[:：]\s*/, "")}</span>`;
    byId("judgeTauntStack").prepend(taunt);
    setTimeout(() => taunt.remove(), document.body.classList.contains("mobile-ui") ? 3200 : 3800);
  }, delay);
}

function showAudienceReaction(text = "", tone = "") {
  const reaction = document.createElement("div");
  reaction.className = `audience-reaction ${tone}`.trim();
  reaction.textContent = text || audienceLines[Math.floor(Math.random() * audienceLines.length)];
  byId("audienceReactionStack").prepend(reaction);
  setTimeout(() => reaction.remove(), document.body.classList.contains("mobile-ui") ? 1100 : 1450);
}

function announce(text, tone = "", options = {}) {
  const layer = options.layer || infoLayer.STANDARD;
  const cleanText = stripSpeaker(text);
  if (layer === infoLayer.IMPORTANT) {
    logTyped("IMPORTANT", cleanText);
    return showImportantCommentary(options.title || "重要実況", cleanText, tone);
  }
  if (layer === infoLayer.AMBIENT) {
    showAudienceReaction(cleanText, tone);
    return Promise.resolve();
  }
  logTyped("実況", cleanText);
  showCommentaryPopup(text, tone);
  if (Math.random() < 0.72) showAudienceReaction();
  return Promise.resolve();
}

function judgeTaunt(text, tone = "") {
  showJudgePopup(text, tone);
}

async function showInsiderThoughts(verdicts, side) {
  for (const verdict of verdicts) {
    const thought = buildThought(verdict, side);
    byId("insiderName").textContent = verdict.insider.name;
    byId("insiderVerdict").textContent = verdict.won ? "履きたい...！" : "まだ迷う...";
    byId("insiderThought").textContent = thought;
    logTyped("INSIDER", thought);
    const popup = byId("insiderPopup");
    popup.classList.remove("show");
    void popup.offsetWidth;
    popup.classList.add("show");
    const mobileThoughtDelay = verdict.won ? 3000 : 2200;
    await wait(document.body.classList.contains("mobile-ui") ? mobileThoughtDelay : settings.thoughtDelay);
    popup.classList.remove("show");
    await wait(130);
  }
}

function buildThought({ insider, won, score, reasonText }, side) {
  const owner = side === "player" ? "覇王" : "ジン";
  const taste = insider.wants.join("と");
  if (won) {
    return `${owner}の玄関、${taste}が刺さる...気分${score}。${reasonText || "玄関全体が決め手になった。"}`;
  }
  return `${owner}の玄関、${taste}は気になるが...気分${score}。${reasonText || "まだ決め手が足りない。"}`;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function showVsScreen(options = {}) {
  const vs = byId("vsScreen");
  vs.classList.add("show");
  vs.setAttribute("aria-hidden", "false");
  byId("vsStartBtn").hidden = Boolean(options.auto);
  playSound("vs");
  return new Promise((resolve) => {
    const finish = () => {
      byId("vsStartBtn").removeEventListener("click", finish);
      byId("vsStartBtn").hidden = false;
      playSound("start");
      if (state.turn === "player" && !state.gameOver) startHaouTheme();
      vs.classList.add("closing");
      setTimeout(() => {
        vs.classList.remove("show", "closing");
        vs.setAttribute("aria-hidden", "true");
        resolve();
      }, 560);
    };
    if (options.auto) {
      setTimeout(finish, options.delay ?? 1200);
    } else {
      byId("vsStartBtn").addEventListener("click", finish);
    }
  });
}

function showCoinTossScreen(options = {}) {
  const screen = byId("coinTossScreen");
  const button = byId("coinFlipBtn");
  const prompt = byId("coinPrompt");
  const result = byId("coinResult");
  const rareText = byId("coinRareText");
  const rareLines = [
    "審議中……いや、合法です！",
    "コインが少し玄関を飛び出したァ！",
    "不正疑惑！？ ただのスリッパ愛です。",
    "実況席、いまの回転数を見失いました！",
  ];

  screen.classList.remove("result-player", "result-cpu", "flipping", "shake");
  screen.classList.add("show");
  screen.setAttribute("aria-hidden", "false");
  prompt.textContent = options.auto ? "コイントス！" : "TAP TO FLIP";
  result.textContent = "コイントス！";
  rareText.textContent = "";
  state.cutinActive = true;
  render();

  return new Promise((resolve) => {
    let flipped = false;
    const flip = () => {
      if (flipped) return;
      flipped = true;
      button.removeEventListener("click", flip);
      const winner = Math.random() < 0.5 ? "player" : "cpu";
      const duration = 1050 + Math.floor(Math.random() * 320);
      const rareHit = Math.random() < 0.08;

      screen.classList.add("flipping", "shake");
      prompt.textContent = "コイントス！";
      result.textContent = "";
      if (rareHit) rareText.textContent = rareLines[Math.floor(Math.random() * rareLines.length)];
      playSound("flip");

      setTimeout(() => {
        screen.classList.remove("flipping", "shake");
        screen.classList.add(winner === "player" ? "result-player" : "result-cpu");
        result.textContent = winner === "player" ? "スリッパ！ YOU FIRST" : "靴！ ENEMY FIRST";
        prompt.textContent = winner === "player" ? "寿立覇王が先攻を選択" : "松葉迅が先攻を選択";
        playSound("result");

        setTimeout(() => {
          screen.classList.remove("show", "result-player", "result-cpu");
          screen.setAttribute("aria-hidden", "true");
          state.cutinActive = false;
          render();
          resolve(winner);
        }, 420);
      }, duration);
    };

    button.addEventListener("click", flip);
    if (options.auto) setTimeout(flip, 420);
  });
}

function showVictory() {
  const victory = byId("victoryScreen");
  victory.classList.add("show");
  victory.setAttribute("aria-hidden", "false");
  startHaouVictoryTheme();
  return new Promise((resolve) => {
    setTimeout(resolve, 1800);
  });
}

function showDefeat() {
  const defeat = byId("defeatScreen");
  defeat.classList.add("show");
  defeat.setAttribute("aria-hidden", "false");
  startJinVictoryTheme();
  return new Promise((resolve) => {
    setTimeout(resolve, 1800);
  });
}

function showDraw() {
  const draw = byId("drawScreen");
  draw.classList.add("show");
  draw.setAttribute("aria-hidden", "false");
  stopHaouVictoryTheme();
  stopJinVictoryTheme();
  playSound("trap");
  return new Promise((resolve) => {
    setTimeout(resolve, 1200);
  });
}

function initAudio() {
  if (!audioContext) {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (AudioCtor) audioContext = new AudioCtor();
  }
  if (audioContext?.state === "suspended") audioContext.resume();
}

function primeAudioElements() {
  ["haouTheme", "haouVictoryTheme", "jinTheme", "jinVictoryTheme"].forEach((id) => {
    const audio = byId(id);
    audio.volume = 0;
    const playPromise = audio.play();
    if (playPromise) {
      playPromise
        .then(() => {
          audio.volume = settings.bgmVolume;
          if (!state.started) {
            audio.pause();
            audio.currentTime = 0;
          }
        })
        .catch(() => {
          audio.volume = settings.bgmVolume;
        });
    }
  });
}

function unlockAudio() {
  initAudio();
}

function playSound(kind) {
  initAudio();
  if (!audioContext) return;
  if (settings.seVolume <= 0) return;
  const now = audioContext.currentTime;
  const master = audioContext.createGain();
  master.gain.setValueAtTime(0.001, now);
  master.gain.exponentialRampToValueAtTime(0.18 * settings.seVolume, now + 0.015);
  master.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
  master.connect(audioContext.destination);

  const patterns = {
    start: [220, 330, 660],
    vs: [110, 220, 440, 880],
    place: [520, 390],
    turn: [180, 90],
    trap: [140, 80, 260],
    counter: [260, 520, 1040],
    score: [660, 880],
    win: [440, 660, 880, 1320],
    flip: [300, 520, 780, 1040, 1320],
    result: [880, 1320, 1760],
  };
  const freqs = patterns[kind] || patterns.place;
  freqs.forEach((freq, i) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = kind === "trap" ? "sawtooth" : "square";
    osc.frequency.setValueAtTime(freq, now + i * 0.055);
    gain.gain.setValueAtTime(0.001, now + i * 0.055);
    gain.gain.exponentialRampToValueAtTime(0.16, now + i * 0.055 + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.055 + 0.12);
    osc.connect(gain);
    gain.connect(master);
    osc.start(now + i * 0.055);
    osc.stop(now + i * 0.055 + 0.14);
  });
}

function startHaouTheme() {
  initAudio();
  stopJinTheme();
  const theme = byId("haouTheme");
  theme.volume = settings.bgmVolume;
  const playPromise = theme.play();
  if (playPromise) playPromise.catch(() => {});
}

function stopHaouTheme() {
  const theme = byId("haouTheme");
  theme.pause();
  theme.currentTime = 0;
}

function startHaouVictoryTheme() {
  initAudio();
  const theme = byId("haouVictoryTheme");
  theme.volume = Math.min(1, settings.bgmVolume + 0.08);
  theme.currentTime = 0;
  const playPromise = theme.play();
  if (playPromise) playPromise.catch(() => {});
}

function stopHaouVictoryTheme() {
  const theme = byId("haouVictoryTheme");
  theme.pause();
  theme.currentTime = 0;
}

function startJinTheme() {
  initAudio();
  stopHaouTheme();
  const theme = byId("jinTheme");
  theme.volume = settings.bgmVolume;
  const playPromise = theme.play();
  if (playPromise) playPromise.catch(() => {});
}

function stopJinTheme() {
  const theme = byId("jinTheme");
  theme.pause();
  theme.currentTime = 0;
}

function startJinVictoryTheme() {
  initAudio();
  const theme = byId("jinVictoryTheme");
  theme.volume = Math.min(1, settings.bgmVolume + 0.06);
  theme.currentTime = 0;
  const playPromise = theme.play();
  if (playPromise) playPromise.catch(() => {});
}

function stopJinVictoryTheme() {
  const theme = byId("jinVictoryTheme");
  theme.pause();
  theme.currentTime = 0;
}

function showCutin(actor, title, text, options = {}) {
  state.cutinActive = true;
  render();
  byId("cutinActor").textContent = actor;
  byId("cutinTitle").textContent = title;
  byId("cutinText").textContent = text;
  const cutin = byId("cutin");
  const image = byId("cutinImage");
  if (options.image) {
    image.src = options.image;
    cutin.classList.add("with-image");
  } else {
    image.removeAttribute("src");
    cutin.classList.remove("with-image");
  }
  cutin.classList.remove("show");
  void cutin.offsetWidth;
  cutin.classList.add("show");
  return new Promise((resolve) => {
    setTimeout(() => {
      cutin.classList.remove("show");
      cutin.classList.remove("with-image");
      image.removeAttribute("src");
      state.cutinActive = false;
      render();
      resolve();
    }, 1250);
  });
}

async function showCharacterSelect() {
  requestPlayFullscreen();
  if (await ensureFreshBuildBeforePlay()) return;
  byId("titleScreen").classList.add("screen-hidden");
  byId("tutorialScreen").classList.add("screen-hidden");
  byId("characterSelectScreen").classList.remove("screen-hidden");
}

function renderTutorial() {
  const step = tutorialSteps[tutorialIndex] || tutorialSteps[0];
  byId("tutorialStepLabel").textContent = `STEP ${tutorialIndex + 1} / ${tutorialSteps.length}`;
  byId("tutorialTopic").textContent = step.topic;
  byId("tutorialSpeaker").textContent = step.speaker;
  byId("tutorialText").textContent = step.text;
  byId("tutorialPrevBtn").disabled = tutorialIndex <= 0;
  byId("tutorialNextBtn").textContent = tutorialIndex >= tutorialSteps.length - 1 ? "完了" : "次へ";
}

function showTutorial() {
  tutorialIndex = 0;
  byId("titleScreen").classList.add("screen-hidden");
  byId("characterSelectScreen").classList.add("screen-hidden");
  byId("gameApp").classList.add("screen-hidden");
  byId("entranceBuilderScreen").classList.add("screen-hidden");
  byId("tutorialScreen").classList.remove("screen-hidden");
  renderTutorial();
}

function returnToTitleFromTutorial() {
  byId("tutorialScreen").classList.add("screen-hidden");
  byId("titleScreen").classList.remove("screen-hidden");
}

function nextTutorialStep() {
  if (tutorialIndex >= tutorialSteps.length - 1) {
    returnToTitleFromTutorial();
    return;
  }
  tutorialIndex += 1;
  renderTutorial();
}

function prevTutorialStep() {
  tutorialIndex = Math.max(0, tutorialIndex - 1);
  renderTutorial();
}

function showEntranceBuilder() {
  byId("titleScreen").classList.add("screen-hidden");
  byId("tutorialScreen").classList.add("screen-hidden");
  byId("entranceBuilderScreen").classList.remove("screen-hidden");
  editingEntranceId = selectedEntranceId;
  renderEntranceBuilder();
}

async function returnToTitleFromBuilder() {
  const selected = getSelectedEntrance();
  const selectedErrors = validateEntrance(selected);
  if (selectedErrors.length) {
    await showBuilderDialog(
      "使用中エントランスが未完成です",
      `${selectedErrors.join("<br>")}<br><br>このままタイトルへ戻ると試合を開始できません。完成済みの構築を選ぶか、不足分をセットしてください。`,
      { confirmText: "OK" },
    );
    return;
  }
  const editing = getEditingEntrance();
  const editingErrors = validateEntrance(editing);
  if (editing?.id !== selected.id && editingErrors.length) {
    const confirmed = await showBuilderDialog(
      "未完成の下書きがあります",
      `${editing.name} はまだ完成していません。<br>${editingErrors.join("<br>")}<br><br>タイトルへ戻りますか？`,
      { confirmText: "戻る", cancelText: "直す", danger: true },
    );
    if (!confirmed) return;
  }
  byId("entranceBuilderScreen").classList.add("screen-hidden");
  byId("titleScreen").classList.remove("screen-hidden");
}

function enterMainScreen() {
  requestPlayFullscreen();
  byId("characterSelectScreen").classList.add("screen-hidden");
  byId("gameApp").classList.remove("screen-hidden");
  showIdle();
}

async function startMatchFromButton() {
  requestPlayFullscreen();
  if (await ensureFreshBuildBeforePlay()) return;
  await resetMatch();
}

function renderEntranceBuilder() {
  const current = getEditingEntrance();
  byId("deckSlotCount").textContent = `${savedEntrances.length}/${MAX_SAVED_ENTRANCES}`;
  byId("deckNameInput").value = current?.name || "";
  byId("entranceCount").textContent = `${current?.entrance.length || 0}/${MAX_ENTRANCE_SIZE}`;
  byId("trapBuildCount").textContent = `${current?.traps.length || 0}/${MAX_TRAP_SIZE}`;
  byId("shoeRackBuildCount").textContent = `${current?.shoeRack.length || 0}/${MAX_SHOE_RACK_SIZE}`;

  const deckList = byId("savedDeckList");
  deckList.innerHTML = "";
  savedEntrances.forEach((deck) => {
    const complete = isCompleteEntrance(deck);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `saved-deck ${deck.id === editingEntranceId ? "active" : ""} ${deck.id === selectedEntranceId ? "selected" : ""} ${complete ? "" : "incomplete"}`;
    button.innerHTML = `<strong>${deck.name}</strong><span>${deck.entrance.length}/10 足・伏せ ${deck.traps.length}/3・Rack ${deck.shoeRack?.length || 0}/3 ${complete ? "" : "未完成"}</span>`;
    button.addEventListener("click", async () => {
      editingEntranceId = deck.id;
      if (complete) {
        selectedEntranceId = deck.id;
      } else {
        await showBuilderDialog(
          "まだ使用できません",
          `${validateEntrance(deck).join("<br>")}<br><br>編集はできますが、試合で使うには完成させてください。`,
          { confirmText: "編集する" },
        );
      }
      renderEntranceBuilder();
    });
    deckList.append(button);
  });

  renderBuildList("entranceBuildList", current?.entrance || [], "entrance");
  renderBuildList("trapBuildList", current?.traps || [], "traps");
  renderBuildList("shoeRackBuildList", current?.shoeRack || [], "shoeRack");
  renderOwnedPool(current);
}

function renderBuildList(id, names, kind) {
  const root = byId(id);
  root.innerHTML = "";
  if (!names.length) {
    root.innerHTML = "<p class=\"empty-build\">未設定</p>";
    return;
  }
  names.forEach((name, index) => {
    const item = document.createElement("div");
    item.className = "build-item";
    item.innerHTML = `${slipperArt(name, "build-art")}<span>${name}</span><button type="button">外す</button>`;
    item.querySelector("button").addEventListener("click", () => removeFromBuild(kind, index));
    root.append(item);
  });
}

function renderOwnedPool(current) {
  const root = byId("ownedSlipperPool");
  root.innerHTML = "";
  slippers.forEach((slipper) => {
    const inEntrance = current?.entrance.filter((name) => name === slipper.name).length || 0;
    const inTraps = current?.traps.filter((name) => name === slipper.name).length || 0;
    const inRack = current?.shoeRack?.filter((name) => name === slipper.name).length || 0;
    const card = document.createElement("article");
    card.className = "pool-card";
    card.innerHTML = `
      ${slipperArt(slipper, "pool-art")}
      <div><strong>${slipper.name}</strong><span>${slipper.style} / 所持 ∞ / 採用 ${inEntrance + inTraps + inRack}</span></div>
      <p>${slipper.text}</p>
      <div class="pool-actions">
        <button type="button" ${slipper.counter ? "disabled" : ""}>エントランスへ</button>
        <button type="button">伏せへ</button>
        <button type="button" ${slipper.counter ? "disabled" : ""}>Rackへ</button>
      </div>
    `;
    const [entranceButton, trapButton, rackButton] = card.querySelectorAll("button");
    entranceButton.disabled = entranceButton.disabled || inEntrance >= MAX_ENTRANCE_SAME_NAME;
    trapButton.disabled = Boolean(inTraps);
    rackButton.disabled = rackButton.disabled || Boolean(inRack);
    entranceButton.addEventListener("click", () => addToBuild("entrance", slipper.name));
    trapButton.addEventListener("click", () => addToBuild("traps", slipper.name));
    rackButton.addEventListener("click", () => addToBuild("shoeRack", slipper.name));
    root.append(card);
  });
}

async function addToBuild(kind, name) {
  const deck = getEditingEntrance();
  const limits = { entrance: MAX_ENTRANCE_SIZE, traps: MAX_TRAP_SIZE, shoeRack: MAX_SHOE_RACK_SIZE };
  const limit = limits[kind];
  if (!deck || deck[kind].length >= limit) return;
  if (kind === "entrance") {
    if (countName(deck.entrance, name) >= MAX_ENTRANCE_SAME_NAME) {
      await showBuilderDialog("投入上限", "同名スリッパはエントランスに2足までです。", { confirmText: "OK" });
      return;
    }
  } else if (deck[kind].includes(name)) {
    return;
  }
  deck[kind].push(name);
  persistEntrances();
  renderEntranceBuilder();
}

function removeFromBuild(kind, index) {
  const deck = getEditingEntrance();
  if (!deck) return;
  deck[kind].splice(index, 1);
  persistEntrances();
  renderEntranceBuilder();
}

async function saveEditingEntrance() {
  const deck = getEditingEntrance();
  if (!deck) return;
  deck.name = byId("deckNameInput").value.trim() || deck.name;
  const errors = validateEntrance(deck);
  if (errors.length) {
    const confirmed = await showBuilderDialog(
      "未完成のまま保存しますか？",
      `${errors.join("<br>")}<br><br>保存はできますが、この構築は使用中に設定されません。`,
      { confirmText: "下書き保存", cancelText: "戻って直す", danger: true },
    );
    if (!confirmed) {
      renderEntranceBuilder();
      return;
    }
  } else {
    selectedEntranceId = deck.id;
  }
  persistEntrances();
  renderEntranceBuilder();
}

function copyEditingEntrance() {
  if (savedEntrances.length >= MAX_SAVED_ENTRANCES) return;
  const deck = getEditingEntrance();
  if (!deck) return;
  const copy = structuredClone(deck);
  copy.id = `deck-${Date.now()}`;
  copy.name = `${deck.name} コピー`;
  savedEntrances.push(copy);
  editingEntranceId = copy.id;
  if (isCompleteEntrance(copy)) selectedEntranceId = copy.id;
  persistEntrances();
  renderEntranceBuilder();
}

function createNewEntrance() {
  if (savedEntrances.length >= MAX_SAVED_ENTRANCES) return;
  const deck = makeBlankEntrance();
  savedEntrances.push(deck);
  editingEntranceId = deck.id;
  persistEntrances();
  renderEntranceBuilder();
}

function openOptions() {
  byId("optionsDialog").showModal();
}

function updateBgmVolume(value) {
  settings.bgmVolume = Number(value);
  ["haouTheme", "haouVictoryTheme", "jinTheme", "jinVictoryTheme"].forEach((id) => {
    byId(id).volume = settings.bgmVolume;
  });
}

function updateThoughtSpeed(value) {
  settings.thoughtDelay = Number(value);
}

function updateScreenSize(value) {
  settings.screenSize = value;
  document.body.dataset.screenSize = value;
  if (value === "fullscreen") {
    document.documentElement.requestFullscreen?.().catch(() => {});
  } else if (document.fullscreenElement) {
    document.exitFullscreen?.().catch(() => {});
  }
}

function initHandDrag() {
  const panel = byId("handWindow");
  const handle = byId("handDragHandle");
  let drag = null;
  handle.addEventListener("pointerdown", (event) => {
    drag = {
      x: event.clientX,
      y: event.clientY,
      left: panel.offsetLeft,
      top: panel.offsetTop,
    };
    handle.setPointerCapture(event.pointerId);
  });
  handle.addEventListener("pointermove", (event) => {
    if (!drag) return;
    const nextLeft = Math.max(8, Math.min(window.innerWidth - panel.offsetWidth - 8, drag.left + event.clientX - drag.x));
    const nextTop = Math.max(8, Math.min(window.innerHeight - panel.offsetHeight - 8, drag.top + event.clientY - drag.y));
    panel.style.left = `${nextLeft}px`;
    panel.style.top = `${nextTop}px`;
    panel.style.right = "auto";
    panel.style.bottom = "auto";
    panel.style.transform = "none";
  });
  handle.addEventListener("pointerup", () => {
    drag = null;
  });
}

byId("titleStartBtn").addEventListener("click", showCharacterSelect);
byId("titleTutorialBtn").addEventListener("click", showTutorial);
byId("titleBuildBtn").addEventListener("click", showEntranceBuilder);
byId("titleRankingBtn").addEventListener("click", () => {
  renderRanking();
  byId("rankingDialog").showModal();
});
byId("titleRoomBtn").addEventListener("click", () => {
  renderRoomState();
  byId("roomDialog").showModal();
});
byId("titleFeedbackBtn").addEventListener("click", openFeedback);
byId("titleOptionsBtn").addEventListener("click", openOptions);
byId("titleHelpBtn").addEventListener("click", () => byId("helpDialog").showModal());
byId("tutorialBackBtn").addEventListener("click", returnToTitleFromTutorial);
byId("tutorialPrevBtn").addEventListener("click", prevTutorialStep);
byId("tutorialNextBtn").addEventListener("click", nextTutorialStep);
byId("tutorialStartGameBtn").addEventListener("click", showCharacterSelect);
byId("cpuDifficultySelect").addEventListener("change", (event) => setCpuDifficulty(event.target.value));
byId("builderBackBtn").addEventListener("click", returnToTitleFromBuilder);
byId("saveDeckBtn").addEventListener("click", saveEditingEntrance);
byId("copyDeckBtn").addEventListener("click", copyEditingEntrance);
byId("newDeckBtn").addEventListener("click", createNewEntrance);
byId("selectHaouBtn").addEventListener("click", enterMainScreen);
byId("bgmVolume").addEventListener("input", (event) => updateBgmVolume(event.target.value));
byId("seVolume").addEventListener("input", (event) => {
  settings.seVolume = Number(event.target.value);
});
byId("thoughtSpeed").addEventListener("change", (event) => updateThoughtSpeed(event.target.value));
byId("screenSize").addEventListener("change", (event) => updateScreenSize(event.target.value));
byId("startBtn").addEventListener("click", startMatchFromButton);
byId("newGameBtn").addEventListener("click", startMatchFromButton);
byId("victoryRestartBtn").addEventListener("click", startMatchFromButton);
byId("defeatRestartBtn").addEventListener("click", startMatchFromButton);
byId("drawRestartBtn").addEventListener("click", startMatchFromButton);
byId("endTurnBtn").addEventListener("click", endPlayerTurn);
byId("counterBtn").addEventListener("click", useCounter);
byId("mobileStartBtn").addEventListener("click", startMatchFromButton);
byId("mobileEndTurnBtn").addEventListener("click", endPlayerTurn);
byId("mobileCounterBtn").addEventListener("click", useCounter);
byId("mobileRematchBtn").addEventListener("click", startMatchFromButton);
byId("sideboardTitleBtn").addEventListener("click", returnToTitleFromSideboard);
byId("sideboardDoneBtn").addEventListener("click", completeSideboard);
byId("createRoomBtn").addEventListener("click", createRoom);
byId("joinRoomBtn").addEventListener("click", () => joinRoom(byId("roomCodeInput").value));
byId("leaveRoomBtn").addEventListener("click", leaveRoom);
byId("startOnlineMatchBtn").addEventListener("click", () => startOnlineMatch(true));
byId("saveFeedbackBtn").addEventListener("click", saveFeedback);
byId("copyFeedbackBtn").addEventListener("click", copyFeedbackSummary);
document.addEventListener("pointerdown", unlockAudio, { once: true });
window.addEventListener("resize", applyDeviceMode);
window.addEventListener("orientationchange", () => setTimeout(applyDeviceMode, 150));

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").then((registration) => {
    serviceWorkerRegistration = registration;
  }).catch(() => {});
}

applyDeviceMode();
initHandDrag();
setCpuDifficulty(settings.cpuDifficulty);
showIdle();
checkBuildVersionOnBoot();
