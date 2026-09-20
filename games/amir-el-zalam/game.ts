import type {
  AmirEliminationReason,
  AmirGameState,
  AmirPhase,
  AmirPlayer,
  NightActions,
} from "./types"

const createEmptyNightActions = (): NightActions => ({
  mafiaKillTargetId: null,
  mafiaSilenceTargetId: null,
  policeTargetId: null,
  doctorTargetId: null,
})

export const createAmirGame = (players: AmirPlayer[]): AmirGameState => ({
  phase: "setup",
  round: 1,
  night: 1,
  players,
  currentRevealIndex: 0,
  nightActions: createEmptyNightActions(),
  lastNightKilledId: null,
  lastNightSaved: false,
  lastNightSavedId: null,
  lastPoliceTargetId: null,
  lastPoliceResult: null,
  eliminatedPlayerId: null,
  winner: null,
})

export const setPhase = (
  state: AmirGameState,
  phase: AmirPhase
): AmirGameState => ({
  ...state,
  phase,
})

export const setPlayers = (
  state: AmirGameState,
  players: AmirPlayer[]
): AmirGameState => ({
  ...state,
  players,
})

export const setNightAction = (
  state: AmirGameState,
  action: keyof NightActions,
  playerId: string | null
): AmirGameState => ({
  ...state,
  nightActions: {
    ...state.nightActions,
    [action]: playerId,
  },
})

export const resetNightActions = (state: AmirGameState): AmirGameState => ({
  ...state,
  nightActions: createEmptyNightActions(),
})

export const setNightResult = (
  state: AmirGameState,
  result: {
    killedId: string | null
    saved: boolean
    savedId: string | null
    policeTargetId: string | null
    policeResult: boolean | null
  }
): AmirGameState => ({
  ...state,
  lastNightKilledId: result.killedId,
  lastNightSaved: result.saved,
  lastNightSavedId: result.savedId,
  lastPoliceTargetId: result.policeTargetId,
  lastPoliceResult: result.policeResult,
})

export const eliminatePlayer = (
  state: AmirGameState,
  playerId: string,
  reason: AmirEliminationReason
): AmirGameState => ({
  ...state,
  players: state.players.map((player) =>
    player.id === playerId
      ? {
          ...player,
          alive: false,
          silenced: false,
          eliminationReason: reason,
        }
      : player
  ),
  eliminatedPlayerId: playerId,
})

export const setSilencedPlayer = (
  state: AmirGameState,
  playerId: string | null
): AmirGameState => ({
  ...state,
  players: state.players.map((player) => ({
    ...player,
    silenced: player.id === playerId,
  })),
})

export const clearSilencedPlayers = (state: AmirGameState): AmirGameState => ({
  ...state,
  players: state.players.map((player) => ({
    ...player,
    silenced: false,
  })),
})

export const setWinner = (
  state: AmirGameState,
  winner: "mafia" | "civilians"
): AmirGameState => ({
  ...state,
  phase: "finished",
  winner,
})

export const startNextNight = (state: AmirGameState): AmirGameState => ({
  ...state,
  phase: "mafia",
  night: state.night + 1,
  eliminatedPlayerId: null,
  lastNightKilledId: null,
  lastNightSaved: false,
  lastNightSavedId: null,
  lastPoliceTargetId: null,
  lastPoliceResult: null,
  nightActions: createEmptyNightActions(),
  players: state.players.map((player) => ({
    ...player,
    silenced: false,
  })),
})

export const nextRoleReveal = (state: AmirGameState): AmirGameState => {
  const nextIndex = state.currentRevealIndex + 1

  if (nextIndex >= state.players.length) {
    return {
      ...state,
      currentRevealIndex: 0,
      phase: "mafia",
    }
  }

  return {
    ...state,
    currentRevealIndex: nextIndex,
  }
}
