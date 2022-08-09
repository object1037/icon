import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useRef } from 'react'
import ColorPicker from '../components/colorPicker'
import PartPicker from '../components/partPIcker'
import Footer from '../components/footer'
import Icon from '../components/icon'
import { FiCopy, FiCheck } from 'react-icons/fi'
import clsx from 'clsx'

const Home: NextPage = () => {
  const [part, setPart] = useState<parts>('Hair')
  const [colors, setColors] = useState({
    Hair: '#ffbac1',
    Eye: '#fff5f6',
    Background: '#fff5f6',
    Stroke: '#000000'
  })
  const [stroke, setStroke] = useState('5')
  const [copied, setCopied] = useState(false)

  const iconEl = useRef<SVGSVGElement>(null)

  const handleChange = (part: parts, color: string) => {
    const newColors = {
      ...colors,
      [part]: color
    }
    setColors(newColors)
  }
  const copyHandler = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2500)
    })
  }

  return (
    <>
    <Head>
      <title>object1037 icon</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="object1037's icon" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@object1037" />
      <meta property="og:url" content="https://icon.object1037.dev" />
      <meta property="og:title" content="object1037 icon" />
      <meta property="og:description" content="object1037's icon" />
      <meta property="og:image" content="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNSIgZmlsbD0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDI0MCAyNDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0idy02MCBoLTYwIj48Y2lyY2xlIGN4PSIxMjAiIGN5PSIxMjAiIHI9IjEyMCIgZmlsbD0iI2ZmZjVmNiIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48cGF0aCBmaWxsPSJub25lIiBkPSJtIDE2Ny42NDI3MiwxODUuNDI2MDYgYyAtMzEuODExNzQsMy43OTEzNiAtNjMuNjIzNDksMy44MjExMSAtOTUuNDM1MjMsMCI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmJhYzEiIGQ9Im0gMTM3LjQ2MTg5LDgyLjYxNTU5OCBjIDkuNjEwMTgsMTkuNDk0NjMyIDE5LjQ5Mzc1LDM4Ljg3OTkwMiAzMi4zNTM3LDU3LjA3NDYyMiAxLjEwNDY0LDIxLjg2ODE5IC0wLjcxOTM1LDQzLjM0NTg4IC01LjAwNjQ1LDY0LjQ5NTE2IDAsMCA0LjE0MjE1LC0wLjExNjQ4IDUuODg1MzgsLTEuMDg2NDQgMTIuODUyOTcsLTcuMTUyMDcgMjMuNDA1NTQsLTE4LjgyODY0IDI5LjY4MTQsLTMyLjY1MjMyIGwgMi4zOTMzOCwxMS45NjY4MiBjIDUuMjE4NDgsLTEyLjk0NDU3IDcuNTExODEsLTI2LjgyNzM0IDkuMzM4OTMsLTQyLjE5NDMgbCA1LjM5MjM4LDYuMDMxMTkgYyAtMi43OTAzOCwtMTkuNjEzMzUgLTYuMTczMDMsLTMzLjQxNDI3IC0xNC4wMTY1MiwtNDguMTkwOTIgMy4xMjk5MywtMTMuNTIxODQxIDYuMTk3ODEsLTI3LjA4MzE2MiA3LjYxMzI3LC00MS42OTYwMzUgLTE0LjE4MzI1LC0wLjYxOTgyNyAtMjYuOTc1MTUsMS4xMTQ4OTIgLTM5LjA5NTQ0LDMuOTg2MjMxIEMgMTU2Ljc5MTQ4LDUwLjIxOTU2MyAxMzYuNjY0NTIsNDIuMjQ2MTM5IDExOS45OTk5OSw0NC41NTM2NDQgMTAzLjMzNTQ4LDQyLjI0ODEzOCA4My4wMDY3ODcsNTAuMzMxMjk0IDY3Ljc5NjM0Niw2MC40NjEzNDEgNTUuMjM5MDY4LDU3LjA5ODM3OSA0Mi4yNTE3ODMsNTYuMDMzMDk0IDI4Ljc0MzAzMSw1Ni40Njk2IGMgMS41NjgyNTUsMTQuNzU5MjUxIDQuMTI5NzMzLDI4LjEzNzQ1NSA3Ljc3Mjg4Miw0MS41OTE4MSAtNy44NDM1MDEsMTQuNzc2NjUgLTExLjIyNjE0MywyOC41Nzc1NyAtMTQuMDE2NTIxLDQ4LjE5MDkxIGwgNS4zOTIzNjUsLTYuMDMxMTggYyAxLjgyNzEzNywxNS4zNjY5NiA0LjEyMDQ1OCwyOS4yNDk3MiA5LjMzODkzNyw0Mi4xOTQzIGwgMi4zOTMzNzUsLTExLjk2NjgzIGMgNi4yNzU4NTksMTMuODIzNjggMTYuODQyMjYyLDI1LjQ3NTQ2IDI5LjY4MTQwNywzMi42NTIzMiAxLjcwMzE2OSwwLjk1MjA1IDUuNzUyMTc3LDEuMDg0ODMgNS43NTIxNzcsMS4wODQ4MyAtNC42OTY3NTYsLTIxLjg1NDUxIC01LjMzOTEyOSwtNDMuMjMyMDMgLTUuMDA2NDA1LC02NC40OTQ4NCAxMi4wODQ5ODksLTE3Ljc3Mjc3IDIzLjIwMTE5MywtMzYuNTgwNCAzMi4xNzU2NTIsLTU3LjA3NDg4NiAwLjg2ODQ1LDE2LjY2MDA2NiAyLjE2ODA0LDM5LjM2OTY1NiA2Ljc4MzQsNTcuMTM5OTM2IDEuMDM0MDUsMy45ODEzNiA1LjIyMTQzLDAuOTU0MDQgMTAuOTIzMzYsMS4wNiA1LjQ1MjYxLDAuMTAxMzUgMTAuMDAyMDMsMi42MzY2IDEwLjkyMjc3LC0xLjA1OTg4IDQuNzM3MTcsLTE5LjAxODIxIDYuMjg0ODEsLTQxLjAzODAzIDYuNjA1NDYsLTU3LjE0MDQ5MiB6Ij48L3BhdGg+PHBhdGggZmlsbD0ibm9uZSIgZD0iTSAxMTkuNzc2NzQsNDQuNTI1MTg2IEMgMTE2Ljk5MDg1LDMzLjQwMTMzNyA5My41NTc4ODMsMzAuOTkzODQ3IDc0LjUzMDQwMSw0MC4wNTQ4NDQiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmNWY2IiBkPSJNIDk4LjU5NjUyMiwxMzYuMDU4NjkgNzIuMjg3OTcsMTMxLjM0MzE4IG0gNy45NTk2MTUsMS44MzM1NyAtMC4wOTQzOCwyMi41MzEyIGMgLTAuMDA3LDAuOTQzOTcgMC41MzM1MzQsMS45NTQ0OCAyLjA2MDI4NCwxLjk2OTkyIGggMTIuMzE4NTM1IGMgMS41NzUwNjQsMC4wMTkgMi4xMzIxOCwtMS4wOTE3IDIuMTQwNDg4LC0yLjA2MDI5IGwgLTEuNGUtNCwtMTkuMDEwNzUgbSA0NC45Mzg4OTgsLTAuNTQ4MTYgMjYuMzA4NTUsLTQuNzE1NTIgbSAtNy44NDg1OSwxLjgzMzU3IDAuMDk0NCwyMi41MzEyMSBjIDAuMDA3LDAuOTQzOTcgLTAuNTMzNTMsMS45NTQ0OCAtMi4wNjAyOCwxLjk2OTkyIGggLTEyLjMxODU0IGMgLTEuNTc1MDYsMC4wMTkgLTIuMTMyMTgsLTEuMDkxNzEgLTIuMTQwNDksLTIuMDYwMyBsIDEuNWUtNCwtMTkuMDEwNzQiPjwvcGF0aD48L3N2Zz4=" />
      <link rel='canonical' href='https://icon.object1037.dev'/>
    </Head>
    <main className='font-mono flex flex-col items-center mb-20'>
      <div className='mt-16 mb-8'>
        <Icon colors={colors} stroke={stroke} className='w-60 h-60' ref={iconEl} />
      </div>
      <button className='inline-flex flex-row items-center text-xl p-3 px-4 rounded-full mb-8 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition' onClick={() => copyHandler(`data:image/svg+xml;base64,${Buffer.from(iconEl.current === null ? '' : iconEl.current.outerHTML).toString('base64')}`)}>
        <FiCopy className={clsx(copied && 'hidden', 'mr-3')} />
        <FiCheck className={clsx(!copied && 'hidden', 'mr-3')} />
        <span className='text-base'>Copy base64</span>
      </button>
      <div className='flex space-x-2 mb-12'>
        <PartPicker color={colors.Hair} setPart={() => setPart('Hair')} title='Select hair color' focused={part === 'Hair'} />
        <PartPicker color={colors.Eye} setPart={() => setPart('Eye')} title='Select eye color' focused={part === 'Eye'} />
        <PartPicker color={colors.Background} setPart={() => setPart('Background')} title='Select background color' focused={part === 'Background'} />
        <PartPicker color={colors.Stroke} setPart={() => setPart('Stroke')} title='Select stroke color' focused={part === 'Stroke'} />
      </div>
      <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-10 space-y-10 sm:space-y-0'>
        <ColorPicker part={part} colors={colors} handleChange={handleChange} />
        <div className='w-[200px]'>
          <p className='mb-4 text-lg underline underline-offset-4'>Stroke width</p>
          <input type='number' value={stroke} onChange={(e) => setStroke(e.target.value)} min={1} max={20} className='rounded-full w-16 mx-auto bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-0 focus:border-gray-400 dark:focus:border-gray-500' />
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Home
