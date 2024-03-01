import HexagonIcon from "@/components/core/Icon/HexagonIcon"

interface HexagonIconProps {
  Icon: React.ElementType
  title: string
  text: string
}

const HexagonCard: React.FC<HexagonIconProps> = ({ Icon, title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HexagonIcon Icon={Icon} />
      <h3 className="my-2">{title}</h3>
      <p className="px-2 text-xs text-center">{text}</p>
    </div>
  )
}

export default HexagonCard
