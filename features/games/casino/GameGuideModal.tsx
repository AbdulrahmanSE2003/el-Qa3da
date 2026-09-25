import GenericGuide from "@/components/ui/GenericGuide"
import { CasinoElAlabGuide } from "@/lib/Guides"

const GameGuideModal = () => {
  return (
    <div>
      <GenericGuide
        title="كافيه الألعاب"
        subtitle="لعبة أسألة عامة جماعية تنافسية."
      >
        <CasinoElAlabGuide />
      </GenericGuide>
    </div>
  )
}

export default GameGuideModal
