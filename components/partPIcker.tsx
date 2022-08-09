const PartPicker = ({
  color,
  setPart,
  title
}: {
  color: string
  setPart: () => void
  title: string
}) => {
  return (
    <button onClick={setPart} className="group relative rounded-full w-9 h-9 border border-gray-400 focus:border-gray-700" style={{ backgroundColor: `${color}` }} title={title} >
      <div className="absolute -bottom-4 inset-x-0 invisible group-focus:visible mx-auto w-1.5 h-1.5 rounded-full bg-gray-700" />
    </button>
  )
}

export default PartPicker