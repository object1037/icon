import { HexColorPicker, HexColorInput } from "react-colorful"

const Picker = ({
  part,
  colors,
  handleChange
}: {
  part: parts
  colors: {
    [key in parts]: string
  }
  handleChange: (part: parts, color: string) => void
}) => {
  return (
    <div className="flex flex-col items-center colorPicker">
      <p className='mb-8 text-lg underline underline-offset-4 self-start'>{part} color</p>
      <HexColorPicker className="h-40" color={colors[part]} onChange={(color) => handleChange(part, color)} />
      <HexColorInput className="form-input rounded-full w-24 text-center m-4 bg-gray-100 border-transparent focus:ring-0 focus:border-gray-400" color={colors[part]} onChange={(color) => handleChange(part, color)} />
    </div>
  )
}

export default Picker