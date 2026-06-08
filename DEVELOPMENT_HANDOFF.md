# King of Slipper / TSG Development Handoff

Last updated: 2026-06-09
Current pushed commit: pending this handoff update
Current app version: `2026.06.09-judge-ui-v45`
Current service worker cache: `king-of-slipper-tsg-v64`

This document is a technical handoff for continuing development in a new workspace/thread. It intentionally excludes story lore and unimplemented character setting notes. It covers only current game implementation, data structures, UI behavior, known issues, and next tasks.

## 1. Project Overview

King of Slipper is a static browser game implemented with plain HTML/CSS/JavaScript.

Primary files:

| File | Purpose |
| --- | --- |
| `index.html` | DOM structure, dialogs, title/menu, builder, battle UI roots |
| `styles.css` | PC/mobile responsive UI, battle layout, dialogs, PWA/landscape handling |
| `game.js` | Game state, rules, UI rendering, audio, Firebase room sync, persistence |
| `sw.js` | Service Worker cache |
| `version.json` | Client update detection |
| `manifest.json` / `manifest.webmanifest` | PWA install metadata |
| `assets/` | Images/audio/game assets |

Deployment target is GitHub Pages, with Vercel/Netlify-friendly static structure also present.

## 2. Current Product State

Implemented:

- Static browser playable MVP.
- Mobile landscape-first battle UI.
- PC/Web battle UI being aligned toward the mobile layout.
- PWA install flow and app icon.
- Version/update detection via `APP_VERSION`, `version.json`, and `sw.js`.
- BO3 match structure.
- 15-minute match timer.
- 45-second player turn timer.
- Shoe Rack Change between games.
- Rating update logic based on Elo-like calculation.
- Local ranking/feedback records through `localStorage`.
- Character selection with at least `haou` and `matsuba_jin`.
- Selected player character is used across most battle UI/log/cutin/result references.
- Entrance builder with saved entrance slots.
- Character-owned entrance decks and character-specific slipper restrictions.
- Aikotoba/private-room beta through Firebase Realtime Database, with start gating so matches do not begin without two participants.
- Firebase room cleanup for explicit leave, browser close, and stale room removal.

## 3. Version / Cache Update Rules

When changing files used by the public site:

1. Update `APP_VERSION` in `game.js`.
2. Update `version.json`.
3. Increment `CACHE_NAME` in `sw.js`.
4. Commit and push to `main`.

Current values:

```js
// game.js
const APP_VERSION = "2026.06.09-judge-ui-v45";

// sw.js
const CACHE_NAME = "king-of-slipper-tsg-v64";
```

## 3.1 Current UI Direction

The mobile landscape battle UI is now the canonical battle UI.

- PC/Web should render the same mobile-landscape battle layout, centered if needed.
- Do not add PC-only battle layouts.
- Do not add permanent panels, lanes, bubble tracks, or duplicate score displays.
- The battle view should fit in one screen without vertical scrolling.
- The top HUD is for match state only: opponent name, BO score, phase/turn state, remaining time, player name.
- Wear counts should not be duplicated in the top HUD and judge panel at the same time.
- The right judge panel is for seeing insider reactions, not repeating score information.
- Empty space between the entrance board and judge panel is intentional breathing room and may be used only for temporary overlay bubbles.
- Judge bubbles are temporary overlays, not layout-flow content. They must not push judge rows down or create a permanent lane.
- When the judge panel is collapsed, judge bubbles should not appear; use the existing central insider popup instead.
- Judge face icons are a high-priority polish item. Use the existing `assets/judge-insiders-clean.png` sprite, crop each face cleanly, and avoid neighboring cell artifacts.
- The five-slot entrance board remains LF / CF / RF / LB / RB with the three-front/two-back layout. Keep the five slippers visually centered within the entrance board area.

Latest UI cleanup goals:

1. Remove duplicate wear count text from the top HUD.
2. Remove the always-visible "先に5人を履かせたら勝利" text from the judge panel.
3. Compress the judge panel header to a short title plus "あとN履き" or warning text.
4. Distribute freed vertical space into the five judge rows.
5. Keep the entrance board slightly left-balanced so the board, judge panel, and action buttons breathe.
6. Keep notifications non-blocking where player confirmation is not required.

## 4. Core Runtime State

`game.js` has a large global `state` object. Important fields:

| Field | Meaning |
| --- | --- |
| `started` | Match/game currently active |
| `gameOver` | Current game ended |
| `turn` | Current phase, e.g. `player`, `cpu-placing`, `counter-window`, `online-waiting` |
| `timer` | Current player turn seconds |
| `matchSeconds` | Match timer seconds |
| `playerScore` / `cpuScore` | Current game wear score |
| `playerRoundWins` / `cpuRoundWins` | BO3 score |
| `matchRound` | Current game number in BO3 |
| `playerBoard` / `cpuBoard` | 5-slot entrance boards |
| `hand` / `playerDeck` | Player hand/deck data |
| `playerTraps` / `cpuTraps` | Hidden/trap slippers |
| `matchEntrance` / `matchShoeRack` | Current match deck and sideboard |
| `activeHandUid` | Selected hand slipper |
| `mobileHandOpen` | Mobile hand panel state |
| `mobileLogOpen` | Mobile log panel state |
| `mobileTrapOpen` | Mobile trap panel state |
| `selectedTrapIndex` | Trap selected for open |
| `sideboardSeconds` | Shoe Rack Change timer |
| `cutinActive` | Cutin animation is currently blocking direct input |
| `onlineMode` / `onlineRole` | Aikotoba beta match state |

## 5. Character Data

Main character data is in `PLAYER_CHARACTERS`.

Known keys:

- `haou`
- `matsuba_jin`
- Legacy alias: `PLAYER_CHARACTERS.jin = PLAYER_CHARACTERS.matsuba_jin`

Helper functions:

- `normalizeCharacterKey(key)`
- `getPlayerCharacter()`
- `playerDisplayName()`
- `playerShortName()`
- `playerResultName()`
- `playerCutinLabel()`
- `playerIcon()`
- `playerCounterImage()`
- `playerWinImage()`
- `saveSelectedPlayerKey(key)`
- `applyPlayerCharacterUi()`

Storage:

```js
const PLAYER_CHARACTER_STORAGE_KEY = "kos_player_character_v1";
```

Current design rule:

- Avoid hard-coding `寿立覇王` for player-facing text.
- Use the helper functions above for player name/cutin/icon/result labels.
- Rival is still generally Matsuba Jin in stage 1.

## 6. Entrance / Deck Management

Storage:

```js
const ENTRANCE_STORAGE_KEY = "kos_entrances_v1";
```

Deck structure:

```js
{
  id: "deck-id",
  name: "Deck name",
  ownerCharacterId: "haou",
  entrance: ["slipper name", "..."], // 10
  traps: ["trap slipper name", "..."], // 3
  shoeRack: ["slipper name", "..."] // 3
}
```

Character owner support added in commit `17f0830`:

- Decks now support `ownerCharacterId`.
- Existing decks with no owner are normalized to `haou`.
- Legacy `sample-jin` is normalized to `deck_matsuba_jin_default`.
- `ENTRANCE_OWNER_CHARACTERS` defines selectable deck owners:
  - `haou`
  - `matsuba_jin`
  - `tatamino_shizuma`
  - `momota_kinichiro`
  - `doujouin_reika`

Important helpers:

- `normalizeOwnerCharacterId(ownerCharacterId)`
- `entranceOwnerLabel(ownerCharacterId)`
- `slipperAllowedForOwner(slipperOrName, ownerCharacterId)`
- `restrictedSlippersForDeck(deck)`
- `selectEntranceForOwner(ownerCharacterId)`

Validation:

- Entrance must be complete.
- Entrance: 10 slippers.
- Traps: 3.
- Shoe Rack: 3.
- Entrance allows up to 2 copies of same named slipper.
- Traps and Shoe Rack remain unique-only.
- Deck save is blocked if it contains a character-specific slipper not allowed for `deck.ownerCharacterId`.
- Match start is blocked if selected player character does not match selected deck owner.

Builder UI:

- `deckOwnerSelect` added in `index.html`.
- `renderDeckOwnerSelect(deck)` populates owner options.
- Changing owner calls `changeEditingEntranceOwner(ownerCharacterId)`.
- Restricted slippers are shown disabled in the pool and marked invalid in existing deck lists.

Sample data:

- `sample-haou` owns `haou`.
- `deck_matsuba_jin_default` owns `matsuba_jin`.
- Matsuba-only slipper added:

```js
{
  id: "slipper_matsuba_jin_signature",
  name: "疾風の松葉スリッパ",
  allowedCharacterIds: ["matsuba_jin"]
}
```

## 7. Slipper Data

`slippers` array contains all slipper definitions.

Common fields:

| Field | Meaning |
| --- | --- |
| `id` | Optional stable id |
| `name` | Display/lookup name |
| `style` | Type label |
| `comfort` | Wear comfort stat |
| `flow` | Route/flow stat |
| `dignity` | Dignity stat |
| `attack` / `defense` / `speed` | Combat-like/stat variants used by some effects/UI |
| `tags` | Trait tags |
| `text` | Effect/description |
| `counter` | Trap/counter flag |
| `effectId` | Special effect hook id |
| `visualSet` / `visualIndex` | Image selection metadata |
| `allowedCharacterIds` | Character restriction. `null`, missing, or `[]` means universal. |

Restriction rule:

```js
if (!Array.isArray(allowedCharacterIds) || allowedCharacterIds.length === 0) usableByAll = true;
else usableOnlyIf allowedCharacterIds.includes(deck.ownerCharacterId);
```

Do not hard-code character names for restrictions.

## 8. Battle Rules

Current high-level rules:

- Each game: first to 5 wear wins.
- Match: BO3, first to 2 games.
- Match timer: 15 minutes.
- Shoe Rack Change between games, 3 minutes.
- Player turn timer: 45 seconds.
- First turn placement limit is normally 2; second player first turn can place 3.
- Wear count is not equal to number of slippers placed.
- Wear evaluation uses entrance state, slot modifiers, insider preferences, and trait/synergy logic.

Board slots:

| Key | Label |
| --- | --- |
| `left_front` | LF / 左前 |
| `center_front` | CF / 中央前 |
| `right_front` | RF / 右前 |
| `left_back` | LB / 左奥 |
| `right_back` | RB / 右奥 |

## 9. Mobile UI Policy

Mobile is landscape-first.

Core mobile layout:

- Top: compact player/status bar.
- Left: Slip Insider vertical icon columns.
- Center: red opponent field / blue player field.
- Right: vertical action rail.
- Bottom: collapsible hand panel.

Key rules:

- iPhone SE landscape is the lower layout target.
- Portrait should show a rotate-to-landscape instruction.
- X/Twitter in-app browser shows stronger Safari/PWA guidance.
- Top player name UI should stay one line.
- Left Slip Insider UI should not show large numeric counters like `0/5`; progress is represented by 5 colored/gray icons.
- Details are not persistent panels.
- Hand/trap/log/details are opened only when needed.
- Avoid permanent overlays that consume field space.

## 10. PC/Web UI Policy

PC/Web should follow the mobile UI mental model.

Current target:

- One-page, no-scroll battle UI where possible.
- Centered play area with max-width; avoid spreading controls across entire desktop width.
- Opponent on top, player on bottom.
- Main operations on right-side rail.
- Hand/deck operations near bottom or collapsible like mobile.
- Detail information should be on demand.

Known user concern:

- PC browser UI previously did not fit in one page and required scrolling. Continue aligning it to the mobile fixed-board layout.

## 11. Aikotoba / Private Room Beta

Storage:

- `kos_room_mock_v1`
- `kos_room_online_beta_v1`

Room sync state:

```js
const roomSync = {
  firebaseApp,
  db,
  room,
  code,
  role,
  playerId,
  online,
  mode,
  status,
  players,
  initialGameStateReceived,
  seenActions,
  latestActionId,
  listeners
}
```

Supported status values:

- `idle`
- `room_create`
- `waiting_opponent`
- `room_join`
- `matched`
- `ready_check`
- `playing`
- `ended`

Current behavior from Firebase room migration:

- `joinRoom(roomCode)` blocks empty/null/blank room codes.
- Empty JOIN logs: `あいことばを入力してください`.
- `createRoom()` moves to `room_create`, then `waiting_opponent`.
- Creating a room does not start the match.
- `connectRoom()` uses Firebase Realtime Database at `rooms/{roomCode}`.
- `connectRoom()` writes player under `players.host` or `players.guest`.
- Host writes `hostId`; guest writes `guestId`.
- When both connected `host` and `guest` exist, room moves to `matched`.
- Roles metadata is written as `player1: "host"`, `player2: "guest"`.
- `startOnlineMatch()` calls `onlineMatchStartBlockReason()` and refuses to start unless both players exist.
- Receiving remote `start` is also blocked unless both players exist.
- `endPlayerTurn()` refuses to proceed online if the opponent is missing.
- Online match end sets room status to `ended`.
- Room creation writes `createdAt` / `updatedAt`.
- Host/guest player records write `connected`, `ready`, `joinedAt`, and `lastSeen`.
- `startRoomHeartbeat()` refreshes `updatedAt` and the current player `lastSeen` every 30 seconds.
- `setupRoomDisconnectCleanup()` uses Firebase `onDisconnect`.
- Host disconnect or explicit leave removes the entire room.
- Guest explicit leave removes `players.guest`, clears `guestId`, and returns room status to `waiting`.
- Guest browser disconnect removes `players.guest` and `guestId`; the host listener moves a matched room back to `waiting`.
- `leaveRoom()` clears local room state, storage, listeners, heartbeat timers, and online mode flags.
- `cleanupStaleRooms()` removes non-playing rooms whose `updatedAt`/`createdAt` is older than `ROOM_STALE_MS` (currently 1 hour).

Important helpers:

- `setRoomStatus(status)`
- `activeRoomPlayers()`
- `hasOnlineOpponent()`
- `onlineMatchStartBlockReason()`
- `leaveRoom(options)`
- `resetRoomLocalState(options)`
- `startRoomHeartbeat()`
- `stopRoomHeartbeat()`
- `setupRoomDisconnectCleanup(playerRef)`
- `cleanupStaleRooms()`
- `roomDebug(label, extra)`
- `syncMatchState()`
- `sendPlayerAction(action)`
- `receiveOpponentAction(message, id)`

Debug log events added:

- room created
- room joined
- players count
- current mode
- current game state
- turn owner
- match start blocked reason

Known limitation:

- This is still a beta public-relay/client-side sync model, not authoritative server multiplayer. It prevents the immediate "start with no opponent" failure but does not yet provide robust real-time battle reconciliation.

## 12. Audio / Animation Notes

Implemented policy:

- BGM switches by player/rival turn and result screens.
- Victory/loss themes exist for current stage flow.
- Cutin and commentary timings were extended previously:
  - Slip Insider display target around 2.0-2.5s.
  - Commentary duration scales by text length.
  - Cutin image has a short solo display before text.
- Cutin text uses safe-area aware left offset so iPhone notch/camera areas do not hide names/lines.

Future option:

- Add explicit animation speed setting: fast / standard / slow.

## 13. PWA / Install

Current:

- App icon changed to protagonist-focused icon in prior commit.
- `manifest.json` and `manifest.webmanifest` exist.
- iOS web app meta tags exist in `index.html`.
- X in-app browser guidance exists.

When touching PWA:

- Confirm icons paths work under GitHub Pages.
- Confirm manifest `start_url` and `scope`.
- Confirm service worker cache includes required assets.

## 14. Validation Commands

Use these before committing:

```powershell
node --check game.js
node --check sw.js
python -m json.tool version.json
& .\.tools\PortableGit\cmd\git.exe diff --check
```

Git commands should use PortableGit:

```powershell
& .\.tools\PortableGit\cmd\git.exe status --short
& .\.tools\PortableGit\cmd\git.exe add game.js index.html styles.css sw.js version.json DEVELOPMENT_HANDOFF.md
& .\.tools\PortableGit\cmd\git.exe commit -m "..."
& .\.tools\PortableGit\cmd\git.exe push origin main
```

## 15. Known Issues / Technical Debt

High priority:

- PC/Web battle UI still needs full no-scroll one-page fit aligned to mobile UI.
- Aikotoba online battle remains beta and not authoritative.
- Room sync needs stronger state reconciliation before real public multiplayer.
- Some legacy Japanese text in `game.js` / `index.html` appears mojibake in the local source. Avoid editing unrelated mojibake strings unless necessary; replace only touched UI text.
- Browser automation in the current Codex environment has been failing due to local sandbox startup errors. Static checks were used for recent changes.

Medium priority:

- Continue replacing hard-coded player labels with selected character helpers.
- Add character-specific deck/ability differences beyond display and deck ownership.
- Add more character-specific slippers through `allowedCharacterIds`.
- Improve PC builder and battle UI consistency with mobile.
- Expand tutorial into interactive tutorial.
- Harden PWA update flow and user-facing cache refresh.

Low priority:

- Refactor `game.js` into modules once the MVP flow stabilizes.
- Add automated tests for deck validation, room gating, and rating calculation.
- Normalize all source text encoding to clean UTF-8 if feasible.

## 16. Recent Commit Timeline

```text
457e883 Fix private room start gating
17f0830 Add character-owned entrance rules
5570840 Use selected player character throughout battle
6f31dd1 Add player character selection
e9a40e6 Update PWA app icon
03737c7 Update handoff after web layout pass
02bdc3d Align web battle layout with mobile UI
a715d3f Improve match result ux and rating
```

## 17. Recommended Next Tasks

1. Verify the public GitHub Pages build after the service worker updates.
2. Test Aikotoba flow with two browser contexts:
   - Host creates room.
   - Guest cannot join without code.
   - Host cannot start until guest appears.
   - Guest joins valid code.
   - Start becomes available only at 2/2.
   - Ending turn without opponent no longer freezes.
3. Fix PC/Web one-page battle layout to match mobile mental model.
4. Continue character-selection propagation audit for any remaining hard-coded protagonist text.
5. Add a second character-specific slipper to validate restriction behavior beyond Matsuba Jin.
