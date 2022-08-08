import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useRef } from 'react'
import Picker from '../components/colorPicker'
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
    navigator.clipboard.writeText(text ? text : '').then(() => {
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
        <Icon colors={colors} stroke={stroke} setPart={setPart} className='w-60 h-60' ref={iconEl} />
      </div>
      <button className='inline-flex flex-row items-center text-xl bg-gray-100 p-3 px-4 rounded-full mb-14 hover:bg-gray-200 transition' onClick={() => copyHandler(`data:image/svg+xml;base64,${Buffer.from(iconEl.current === null ? '' : iconEl.current.outerHTML).toString('base64')}`)}>
        <FiCopy className={clsx(copied && 'hidden', 'mr-3')} />
        <FiCheck className={clsx(!copied && 'hidden', 'mr-3')} />
        <span className='text-base'>Copy base64</span>
      </button>
      <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-10 space-y-10 sm:space-y-0'>
        <Picker part={part} colors={colors} handleChange={handleChange} />
        <div className='w-[200px]'>
          <p className='mb-4 text-lg underline underline-offset-4'>Stroke</p>
          <div className='flex space-x-4 items-center'>
            <div onClick={() => setPart('Stroke')} className='w-10 h-10 rounded-full' style={{backgroundColor: `${colors.Stroke}`}} />
            <input type='number' value={stroke} onChange={(e) => setStroke(e.target.value)} min={1} max={20} className='rounded-full w-16 bg-gray-100 border-transparent focus:ring-0 focus:border-gray-400' />
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Home
