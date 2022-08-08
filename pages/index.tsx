import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Picker from '../components/colorPicker'

const Home: NextPage = () => {
  const [part, setPart] = useState<parts>('Hair')
  const [colors, setColors] = useState({
    Hair: '#ffbac1',
    Eye: '#fff5f6',
    Background: '#fff5f6',
    Stroke: '#000000'
  })
  const [stroke, setStroke] = useState('5')

  const handleChange = (part: parts, color: string) => {
    const newColors = {
      ...colors,
      [part]: color
    }
    setColors(newColors)
  }

  return (
    <>
    <Head>

    </Head>
    <main className='font-mono flex flex-col items-center'>
      <div className='m-16'>
        <svg stroke={colors.Stroke} strokeWidth={stroke} fill="none" width="100%" height="100%" viewBox="0 0 240 240" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className='w-60 h-60'>
          <circle onClick={() => setPart('Background')} cx={120} cy={120} r={120} fill={colors.Background} stroke="none" />
          <path fill="none" d="m 167.64272,185.42606 c -31.81174,3.79136 -63.62349,3.82111 -95.43523,0" />
          <path onClick={() => setPart('Hair')} fill={colors.Hair} d="m 137.46189,82.615598 c 9.61018,19.494632 19.49375,38.879902 32.3537,57.074622 1.10464,21.86819 -0.71935,43.34588 -5.00645,64.49516 0,0 4.14215,-0.11648 5.88538,-1.08644 12.85297,-7.15207 23.40554,-18.82864 29.6814,-32.65232 l 2.39338,11.96682 c 5.21848,-12.94457 7.51181,-26.82734 9.33893,-42.1943 l 5.39238,6.03119 c -2.79038,-19.61335 -6.17303,-33.41427 -14.01652,-48.19092 3.12993,-13.521841 6.19781,-27.083162 7.61327,-41.696035 -14.18325,-0.619827 -26.97515,1.114892 -39.09544,3.986231 C 156.79148,50.219563 136.66452,42.246139 119.99999,44.553644 103.33548,42.248138 83.006787,50.331294 67.796346,60.461341 55.239068,57.098379 42.251783,56.033094 28.743031,56.4696 c 1.568255,14.759251 4.129733,28.137455 7.772882,41.59181 -7.843501,14.77665 -11.226143,28.57757 -14.016521,48.19091 l 5.392365,-6.03118 c 1.827137,15.36696 4.120458,29.24972 9.338937,42.1943 l 2.393375,-11.96683 c 6.275859,13.82368 16.842262,25.47546 29.681407,32.65232 1.703169,0.95205 5.752177,1.08483 5.752177,1.08483 -4.696756,-21.85451 -5.339129,-43.23203 -5.006405,-64.49484 12.084989,-17.77277 23.201193,-36.5804 32.175652,-57.074886 0.86845,16.660066 2.16804,39.369656 6.7834,57.139936 1.03405,3.98136 5.22143,0.95404 10.92336,1.06 5.45261,0.10135 10.00203,2.6366 10.92277,-1.05988 4.73717,-19.01821 6.28481,-41.03803 6.60546,-57.140492 z" />
          <path fill="none" d="M 119.77674,44.525186 C 116.99085,33.401337 93.557883,30.993847 74.530401,40.054844" />
          <path onClick={() => setPart('Eye')} fill={colors.Eye} d="M 98.596522,136.05869 72.28797,131.34318 m 7.959615,1.83357 -0.09438,22.5312 c -0.007,0.94397 0.533534,1.95448 2.060284,1.96992 h 12.318535 c 1.575064,0.019 2.13218,-1.0917 2.140488,-2.06029 l -1.4e-4,-19.01075 m 44.938898,-0.54816 26.30855,-4.71552 m -7.84859,1.83357 0.0944,22.53121 c 0.007,0.94397 -0.53353,1.95448 -2.06028,1.96992 h -12.31854 c -1.57506,0.019 -2.13218,-1.09171 -2.14049,-2.0603 l 1.5e-4,-19.01074" />
        </svg>
      </div>
      <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-10 space-y-10 sm:space-y-0'>
        <Picker part={part} colors={colors} handleChange={handleChange} />
        <div className='w-[200px]'>
          <p className='mb-4 text-lg underline underline-offset-4'>Stroke</p>
          <div className='flex space-x-4 items-center'>
            <div onClick={() => setPart('Stroke')} className='w-10 h-10 rounded-full' style={{backgroundColor: `${colors.Stroke}`}} />
            <input type='number' value={stroke} onChange={(e) => setStroke(e.target.value)} min={1} max={10} className='rounded-full w-16 bg-gray-100 border-transparent focus:ring-0 focus:border-gray-400' />
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Home
