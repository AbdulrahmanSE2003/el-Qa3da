export type AmirRole = "mafia" | "police" | "doctor" | "civilian"

export type AmirPhase =
  | "setup"
  | "role-reveal"
  | "mafia"
  | "police"
  | "doctor"
  | "night-result"
  | "discussion"
  | "elimination"
  | "finished"

export interface AmirPlayer {
  id: string
  name: string
  role: AmirRole
  alive: boolean
  silenced: boolean
}

export interface NightActions {
  mafiaKillTargetId: string | null
  mafiaSilenceTargetId: string | null
  policeTargetId: string | null
  doctorTargetId: string | null
}

export interface AmirGameState {
  phase: AmirPhase
  round: number
  night: number

  players: AmirPlayer[]

  currentRevealIndex: number

  nightActions: NightActions

  lastNightKilledId: string | null
  lastNightSaved: boolean
  lastPoliceResult: boolean | null

  eliminatedPlayerId: string | null

  winner: "mafia" | "civilians" | null
}
