import type { AmirGameState, AmirPlayer, AmirRole } from "./types"

const getAlivePlayers = (state: AmirGameState) =>
  state.players.filter((player) => player.alive)

export const canMafiaTarget = (state: AmirGameState, targetId: string) => {
  const target = state.players.find((player) => player.id === targetId)

  if (!target) return false
  if (!target.alive) return false
  if (target.role === "mafia") return false

  return true
}

export const canMafiaSilence = (state: AmirGameState, targetId: string) => {
  const target = state.players.find((player) => player.id === targetId)

  if (!target) return false
  if (!target.alive) return false

  return true
}

export const canPoliceInvestigate = (
  state: AmirGameState,
  targetId: string
) => {
  const target = state.players.find((player) => player.id === targetId)

  if (!target) return false
  if (!target.alive) return false

  return true
}

export const canDoctorHeal = (state: AmirGameState, targetId: string) => {
  const target = state.players.find((player) => player.id === targetId)

  if (!target) return false
  if (!target.alive) return false

  return true
}

export const isMafia = (player: AmirPlayer) => player.role === "mafia"

export const isNonMafia = (player: AmirPlayer) => player.role !== "mafia"

export const resolvePoliceInvestigation = (
  state: AmirGameState,
  targetId: string
) => {
  const target = state.players.find((player) => player.id === targetId)

  if (!target) return null

  return target.role === "mafia"
}

export const resolveNightKill = (state: AmirGameState) => {
  const { mafiaKillTargetId, doctorTargetId } = state.nightActions

  if (!mafiaKillTargetId) {
    return {
      killedId: null,
      saved: false,
    }
  }

  const saved = mafiaKillTargetId === doctorTargetId

  return {
    killedId: saved ? null : mafiaKillTargetId,
    saved,
  }
}

export const checkWinner = (
  state: AmirGameState
): "mafia" | "civilians" | null => {
  const alivePlayers = getAlivePlayers(state)

  const mafiaCount = alivePlayers.filter(
    (player) => player.role === "mafia"
  ).length

  const nonMafiaCount = alivePlayers.filter(
    (player) => player.role !== "mafia"
  ).length

  if (mafiaCount === 0) {
    return "civilians"
  }

  const doctorAlive = alivePlayers.some((player) => player.role === "doctor")

  if (doctorAlive) {
    if (mafiaCount > nonMafiaCount) {
      return "mafia"
    }

    return null
  }

  if (mafiaCount >= nonMafiaCount) {
    return "mafia"
  }

  return null
}
