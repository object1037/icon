const PartPicker = ({
  color,
  setPart,
  title,
  focused
}: {
  color: string
  setPart: () => void
  title: string
  focused: boolean
}) => {
  return (
    <button onClick={setPart} className={`relative rounded-full w-9 h-9 border ${focused ? 'border-gray-700' : 'border-gray-400'}`} style={{ backgroundColor: `${color}` }} title={title} >
      <div className={`absolute -bottom-4 inset-x-0 mx-auto w-1.5 h-1.5 rounded-full bg-gray-700 ${focused ? 'visible' : 'invisible'}`} />
    </button>
  )
}

export default PartPicker