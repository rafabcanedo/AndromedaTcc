import { useContext } from "react"
import { ChallengesContext } from "../Contexts/ChallengesContext";

export function useChallenges() {
  const context = useContext(ChallengesContext)

  return context
}