import {
  createGame,
  eliminate,
  healPlayer,
  investigatePlayer,
  prepareNextNight,
  resolveNight,
  setMafiaKillTarget,
  setMafiaSilenceTarget,
} from "./index"
import { checkWinner } from "./rules"

import type { AmirPlayer, AmirRole } from "./types"

const assert = (condition: boolean, message: string) => {
  if (!condition) {
    throw new Error(`❌ ${message}`)
  }

  console.log(`✅ ${message}`)
}

const createPlayers = (
  players: {
    id: string
    role: AmirRole
  }[]
): AmirPlayer[] =>
  players.map((player) => ({
    id: player.id,
    name: player.id,
    role: player.role,
    alive: true,
    silenced: false,
  }))

/* -------------------------------------------------- */
/* 1. Mafia can kill                                   */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "mafia", role: "mafia" },
    { id: "civilian", role: "civilian" },
    { id: "doctor", role: "doctor" },
  ])

  let game = createGame(players, 1)

  game = setMafiaKillTarget(game, "civilian")

  game = resolveNight(game)

  assert(
    game.lastNightKilledId === "civilian",
    "Mafia can kill a non-mafia player"
  )

  assert(
    game.players.find((player) => player.id === "civilian")?.alive === false,
    "Killed player is stored correctly"
  )

  assert(game.lastNightSaved === false, "Kill is not marked as saved")
}

/* -------------------------------------------------- */
/* 2. Doctor can save                                 */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "mafia", role: "mafia" },
    { id: "civilian", role: "civilian" },
    { id: "doctor", role: "doctor" },
  ])

  let game = createGame(players, 1)

  game = setMafiaKillTarget(game, "civilian")

  game = healPlayer(game, "civilian")

  game = resolveNight(game)

  assert(game.lastNightKilledId === null, "Doctor can save the targeted player")

  assert(
    game.players.find((player) => player.id === "civilian")?.alive === true,
    "Saved player is not marked as killed"
  )

  assert(game.lastNightSaved === true, "Night is marked as saved")
}

/* -------------------------------------------------- */
/* 3. Police finds Mafia                              */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "mafia", role: "mafia" },
    { id: "police", role: "police" },
    { id: "civilian", role: "civilian" },
  ])

  let game = createGame(players, 1)

  game = investigatePlayer(game, "mafia")

  assert(game.lastPoliceResult === true, "Police correctly identifies Mafia")
}

/* -------------------------------------------------- */
/* 4. Police finds non-Mafia                          */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "mafia", role: "mafia" },
    { id: "police", role: "police" },
    { id: "civilian", role: "civilian" },
  ])

  let game = createGame(players, 1)

  game = investigatePlayer(game, "civilian")

  assert(
    game.lastPoliceResult === false,
    "Police correctly identifies a non-Mafia player"
  )
}

/* -------------------------------------------------- */
/* 5. Mafia cannot kill Mafia                         */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "mafia1", role: "mafia" },
    { id: "mafia2", role: "mafia" },
    { id: "civilian", role: "civilian" },
  ])

  let game = createGame(players, 2)

  game = setMafiaKillTarget(game, "mafia2")

  assert(
    game.nightActions.mafiaKillTargetId === null,
    "Mafia cannot target another Mafia player"
  )
}

/* -------------------------------------------------- */
/* 6. Mafia cannot kill dead player                   */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "mafia", role: "mafia" },
    {
      id: "dead",
      role: "civilian",
    },
  ])

  players[1].alive = false

  let game = createGame(players, 1)

  game = setMafiaKillTarget(game, "dead")

  assert(
    game.nightActions.mafiaKillTargetId === null,
    "Mafia cannot target a dead player"
  )
}

/* -------------------------------------------------- */
/* 7. Doctor cannot heal dead player                  */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "doctor", role: "doctor" },
    {
      id: "dead",
      role: "civilian",
    },
  ])

  players[1].alive = false

  let game = createGame(players, 1)

  game = healPlayer(game, "dead")

  assert(
    game.nightActions.doctorTargetId === null,
    "Doctor cannot heal a dead player"
  )
}

/* -------------------------------------------------- */
/* 8. Mafia can silence                               */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "mafia", role: "mafia" },
    { id: "civilian", role: "civilian" },
  ])

  let game = createGame(players, 1)

  game = setMafiaSilenceTarget(game, "civilian")

  game = resolveNight(game)

  assert(
    game.players.find((player) => player.id === "civilian")?.silenced === true,
    "Mafia can silence a non-mafia player"
  )
}

/* -------------------------------------------------- */
/* 9. Civilians win when Mafia = 0                   */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "mafia", role: "mafia" },
    { id: "civilian", role: "civilian" },
    { id: "doctor", role: "doctor" },
  ])

  let game = createGame(players, 1)

  game = eliminate(game, "mafia")

  assert(
    game.winner === "civilians",
    "Civilians win when all Mafia are eliminated"
  )
}

/* -------------------------------------------------- */
/* 10. Mafia wins at equality when Doctor is dead     */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "mafia1", role: "mafia" },
    { id: "mafia2", role: "mafia" },
    { id: "civilian1", role: "civilian" },
    { id: "civilian2", role: "civilian" },
  ])

  let game = createGame(players, 2)

  game = eliminate(game, "civilian1")

  assert(
    game.winner === null,
    "Game continues while Mafia has fewer players than non-Mafia"
  )

  game = eliminate(game, "civilian2")

  assert(
    game.winner === "mafia",
    "Mafia wins when Mafia count reaches non-Mafia count"
  )
}

/* -------------------------------------------------- */
/* 11. Mafia does NOT win at equality with Doctor     */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "mafia", role: "mafia" },
    { id: "doctor", role: "doctor" },
  ])

  const game = createGame(players, 1)

  const winner = checkWinner(game)

  assert(
    winner === null,
    "Mafia does not win at equality while Doctor is alive"
  )
}

/* -------------------------------------------------- */
/* 12. Next night keeps round and increments night    */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "mafia", role: "mafia" },
    { id: "civilian", role: "civilian" },
  ])

  let game = createGame(players, 1)

  assert(game.round === 1, "Game starts at round 1")

  assert(game.night === 1, "Game starts at night 1")

  game = prepareNextNight(game)

  assert(game.round === 1, "Round does not change when starting a new night")

  assert(game.night === 2, "Night increments when starting a new night")
}

/* -------------------------------------------------- */
/* 13. Role setup assigns correct counts               */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "1", role: "civilian" },
    { id: "2", role: "civilian" },
    { id: "3", role: "civilian" },
    { id: "4", role: "civilian" },
    { id: "5", role: "civilian" },
  ])

  const game = createGame(players, 2)

  const mafiaCount = game.players.filter(
    (player) => player.role === "mafia"
  ).length

  const policeCount = game.players.filter(
    (player) => player.role === "police"
  ).length

  const doctorCount = game.players.filter(
    (player) => player.role === "doctor"
  ).length

  const civilianCount = game.players.filter(
    (player) => player.role === "civilian"
  ).length

  assert(mafiaCount === 2, "Setup assigns 2 Mafia")

  assert(policeCount === 1, "Setup assigns 1 Police")

  assert(doctorCount === 1, "Setup assigns 1 Doctor")

  assert(civilianCount === 1, "Setup assigns remaining players as Civilian")
}

/* -------------------------------------------------- */
/* 14. Role setup rejects invalid Mafia count          */
/* -------------------------------------------------- */

{
  const players = createPlayers([
    { id: "1", role: "civilian" },
    { id: "2", role: "civilian" },
    { id: "3", role: "civilian" },
    { id: "4", role: "civilian" },
    { id: "5", role: "civilian" },
  ])

  let failed = false

  try {
    createGame(players, 3)
  } catch {
    failed = true
  }

  assert(failed, "Setup rejects Mafia count above half of players")
}

console.log("\n🎉 All Amir El Zalam tests passed.")
