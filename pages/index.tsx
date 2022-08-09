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
        <PartPicker color={colors.Hair} setPart={() => setPart('Hair')} title='Select hair color' />
        <PartPicker color={colors.Eye} setPart={() => setPart('Eye')} title='Select eye color' />
        <PartPicker color={colors.Background} setPart={() => setPart('Background')} title='Select background color' />
        <PartPicker color={colors.Stroke} setPart={() => setPart('Stroke')} title='Select stroke color' />
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
