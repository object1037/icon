import { HexAlphaColorPicker, HexColorInput } from "react-colorful"

const ColorPicker = ({
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
      <label htmlFor='hexColorInput' className='block mb-8 text-lg underline underline-offset-4 self-start'>{part} color</label>
      <HexAlphaColorPicker className="h-40" color={colors[part]} onChange={(color) => handleChange(part, color)} />
      <HexColorInput id='hexColorInput' className="form-input rounded-full w-32 text-center m-4 bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-0 focus:border-gray-400 dark:focus:border-gray-500" color={colors[part]} onChange={(color) => handleChange(part, color)} alpha />
    </div>
  )
}

export default ColorPicker