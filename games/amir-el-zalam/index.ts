import type { Player } from "@/store/party-store"

import {
  createAmirGame,
  eliminatePlayer,
  nextRoleReveal,
  setNightAction,
  setNightResult,
  setPhase,
  setSilencedPlayer,
  setWinner,
  startNextNight,
} from "./game"

import {
  canDoctorHeal,
  canMafiaSilence,
  canMafiaTarget,
  canPoliceInvestigate,
  checkWinner,
  resolveNightKill,
  resolvePoliceInvestigation,
} from "./rules"

import { assignRoles } from "./setup"

import type { AmirGameState } from "./types"

export const createGame = (players: Player[], mafiaCount: number) => {
  const playersWithRoles = assignRoles(players, mafiaCount)

  return createAmirGame(playersWithRoles)
}

export const startRoleReveal = (state: AmirGameState) => {
  return setPhase(state, "role-reveal")
}

export const revealNextPlayer = (state: AmirGameState) => {
  return nextRoleReveal(state)
}

export const startMafiaPhase = (state: AmirGameState) => {
  return setPhase(state, "mafia")
}

export const setMafiaKillTarget = (state: AmirGameState, targetId: string) => {
  if (!canMafiaTarget(state, targetId)) {
    return state
  }

  return setNightAction(state, "mafiaKillTargetId", targetId)
}

export const setMafiaSilenceTarget = (
  state: AmirGameState,
  targetId: string
) => {
  if (!canMafiaSilence(state, targetId)) {
    return state
  }

  return setNightAction(state, "mafiaSilenceTargetId", targetId)
}

export const startPolicePhase = (state: AmirGameState) => {
  return setPhase(state, "police")
}

export const investigatePlayer = (state: AmirGameState, targetId: string) => {
  if (!canPoliceInvestigate(state, targetId)) {
    return state
  }

  const result = resolvePoliceInvestigation(state, targetId)

  return {
    ...setNightAction(state, "policeTargetId", targetId),
    lastPoliceResult: result,
  }
}

export const startDoctorPhase = (state: AmirGameState) => {
  return setPhase(state, "doctor")
}

export const healPlayer = (state: AmirGameState, targetId: string) => {
  if (!canDoctorHeal(state, targetId)) {
    return state
  }

  return setNightAction(state, "doctorTargetId", targetId)
}

export const resolveNight = (state: AmirGameState) => {
  const result = resolveNightKill(state)

  let nextState = setNightResult(state, {
    killedId: result.killedId,
    saved: result.saved,
    policeResult: state.lastPoliceResult,
  })

  if (result.killedId) {
    nextState = eliminatePlayer(nextState, result.killedId)
  }

  if (state.nightActions.mafiaSilenceTargetId) {
    nextState = setSilencedPlayer(
      nextState,
      state.nightActions.mafiaSilenceTargetId
    )
  }

  nextState = setPhase(nextState, "night-result")

  return nextState
}

export const startDiscussion = (state: AmirGameState) =>
  setPhase(state, "discussion")

export const startElimination = (state: AmirGameState) =>
  setPhase(state, "elimination")

export const eliminate = (state: AmirGameState, playerId: string) => {
  const nextState = eliminatePlayer(state, playerId)

  const winner = checkWinner(nextState)

  if (winner) {
    return setWinner(nextState, winner)
  }

  return nextState
}

export const finishNightAndContinue = (state: AmirGameState) => {
  const winner = checkWinner(state)

  if (winner) {
    return setWinner(state, winner)
  }

  return setPhase(state, "discussion")
}

export const prepareNextNight = (state: AmirGameState) => {
  return startNextNight(state)
}
