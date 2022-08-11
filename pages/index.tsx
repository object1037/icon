import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ColorPicker from '../components/colorPicker'
import PartPicker from '../components/partPicker'
import Footer from '../components/footer'
import Icon from '../components/icon'
import { FiCopy, FiCheck } from 'react-icons/fi'

const Home: NextPage = () => {
  const [part, setPart] = useState<parts>('Hair')
  const [colors, setColors] = useState({
    Hair: '#ffbac1',
    Eye: '#00000000',
    Background: '#fff5f6',
    Stroke: '#000000'
  })
  const [stroke, setStroke] = useState('6')
  const [format, setFormat] = useState('svg')
  const [copied, setCopied] = useState(false)

  const handleChange = (part: parts, color: string) => {
    const newColors = {
      ...colors,
      [part]: color
    }
    setColors(newColors)
  }
  const copyHandler = (colors: { [key in parts]: string}, stroke: string, format: string) => {
    const params = new URLSearchParams({
      hair: colors.Hair.slice(1),
      eye: colors.Eye.slice(1),
      bg: colors.Background.slice(1),
      stroke: colors.Stroke.slice(1),
      strokeWidth: stroke,
    })
    let url = new URL(`/${format}`, 'https://icon.object1037.dev/')
    url.search = params.toString()

    navigator.clipboard.writeText(url.href).then(() => {
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
      <meta property="og:image" content="https://icon.object1037.dev/png" />
      <link rel='canonical' href='https://icon.object1037.dev'/>
    </Head>
    <main className='font-mono flex flex-col items-center mb-20'>
      <div className='mt-16 mb-8'>
        <Icon colors={colors} stroke={stroke} className='w-60 h-60' />
      </div>
      <div className='flex space-x-4 mb-8'>
        <select value={format} onChange={(e) => setFormat(e.target.value)} className='rounded-full w-28 h-12 text-center mx-auto bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-0 focus:border-gray-400 dark:focus:border-gray-500'>
          <option value='svg'>SVG</option>
          <option value='png'>PNG</option>
          <option value='jpeg'>JPEG</option>
          <option value='webp'>WebP</option>
          <option value='avif'>AVIF</option>
        </select>
        <button title='Copy URL' className='text-xl w-12 h-12 inline-flex justify-center items-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition' onClick={() => copyHandler(colors, stroke, format)}>
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </div>
      <div className='flex space-x-2 mb-12'>
        <PartPicker color={colors.Hair} setPart={() => setPart('Hair')} title='Select hair color' focused={part === 'Hair'} />
        <PartPicker color={colors.Eye} setPart={() => setPart('Eye')} title='Select eye color' focused={part === 'Eye'} />
        <PartPicker color={colors.Background} setPart={() => setPart('Background')} title='Select background color' focused={part === 'Background'} />
        <PartPicker color={colors.Stroke} setPart={() => setPart('Stroke')} title='Select stroke color' focused={part === 'Stroke'} />
      </div>
      <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-10 space-y-10 sm:space-y-0'>
        <ColorPicker part={part} colors={colors} handleChange={handleChange} />
        <div className='w-[200px]'>
          <label htmlFor='strokeWidth' className='block mb-4 text-lg underline underline-offset-4'>Stroke width</label>
          <input id='strokeWidth' type='number' value={stroke} onChange={(e) => setStroke(e.target.value)} min={1} max={20} className='rounded-full w-16 mx-auto bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-0 focus:border-gray-400 dark:focus:border-gray-500' />
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Home
