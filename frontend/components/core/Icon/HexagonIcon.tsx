interface HexagonIconProps {
  Icon: React.ElementType
  iconProps?: React.SVGProps<SVGSVGElement>
}

const HexagonIcon: React.FC<HexagonIconProps> = ({ Icon, iconProps }) => {
  return (
    <div style={{ filter: "drop-shadow(-1px 6px 3px rgba(0, 0, 0, 0.5))" }}>
      <div
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-b from-primary to-yellow-500"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <Icon className={`text-zinc-100 h-6 w-6`} />
      </div>
    </div>
  )
}

export default HexagonIcon
