import type { NextApiRequest, NextApiResponse } from 'next'
import sharp from 'sharp'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const hexRe = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  const numRe = /^\d+$/
  let flag = false
  Object.entries(req.query).forEach(([key, value]) => {
    if (typeof value !== "string") {
      flag = true
      return
    }
    if (['hair', 'eye', 'bg', 'stroke'].includes(key) && !hexRe.test(value)) {
      flag = true
      return
    }
    if (['strokeWidth', 'size'].includes(key) && !numRe.test(value)) {
      flag = true
      return
    }
  })
  if (flag) {
    res.status(400).json({ message: 'Bad query' })
    res.end()
    return
  }

  const { hair, eye, bg, stroke, strokeWidth, size } = req.query
  try {
    const svgStr = `
    <svg stroke="#${stroke || '000000'}" stroke-width="${strokeWidth || 6}" fill="none" width="100%" height="100%" viewBox="0 0 240 240" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <circle cx="120" cy="120" r="120" fill="#${bg || 'fff5f6'}" stroke="none" />
      <path fill="none" d="m 167.64272,185.42606 c -31.81174,3.79136 -63.62349,3.82111 -95.43523,0" />
      <path fill="#${hair || 'ffbac1'}" d="m 137.46189,82.615598 c 9.61018,19.494632 19.49375,38.879902 32.3537,57.074622 1.10464,21.86819 -0.71935,43.34588 -5.00645,64.49516 0,0 4.14215,-0.11648 5.88538,-1.08644 12.85297,-7.15207 23.40554,-18.82864 29.6814,-32.65232 l 2.39338,11.96682 c 5.21848,-12.94457 7.51181,-26.82734 9.33893,-42.1943 l 5.39238,6.03119 c -2.79038,-19.61335 -6.17303,-33.41427 -14.01652,-48.19092 3.12993,-13.521841 6.19781,-27.083162 7.61327,-41.696035 -14.18325,-0.619827 -26.97515,1.114892 -39.09544,3.986231 C 156.79148,50.219563 136.66452,42.246139 119.99999,44.553644 103.33548,42.248138 83.006787,50.331294 67.796346,60.461341 55.239068,57.098379 42.251783,56.033094 28.743031,56.4696 c 1.568255,14.759251 4.129733,28.137455 7.772882,41.59181 -7.843501,14.77665 -11.226143,28.57757 -14.016521,48.19091 l 5.392365,-6.03118 c 1.827137,15.36696 4.120458,29.24972 9.338937,42.1943 l 2.393375,-11.96683 c 6.275859,13.82368 16.842262,25.47546 29.681407,32.65232 1.703169,0.95205 5.752177,1.08483 5.752177,1.08483 -4.696756,-21.85451 -5.339129,-43.23203 -5.006405,-64.49484 12.084989,-17.77277 23.201193,-36.5804 32.175652,-57.074886 0.86845,16.660066 2.16804,39.369656 6.7834,57.139936 1.03405,3.98136 5.22143,0.95404 10.92336,1.06 5.45261,0.10135 10.00203,2.6366 10.92277,-1.05988 4.73717,-19.01821 6.28481,-41.03803 6.60546,-57.140492 z" />
      <path fill="none" d="M 119.77674,44.525186 C 116.99085,33.401337 93.557883,30.993847 74.530401,40.054844" />
      <path fill="#${eye || 'fff5f6'}" d="m 141.339,136.05869 26.30855,-4.71551 m -7.95961,1.53382 0.0944,22.83095 c 0.007,0.94397 -0.53354,1.95448 -2.06029,1.96992 h -12.31853 c -1.57507,0.019 -2.13218,-1.0917 -2.14049,-2.06029 l 1.4e-4,-19.81058 M 98.658552,136.05869 72.35,131.34318 m 7.959615,1.53382 -0.09438,22.83095 c -0.007,0.94397 0.533534,1.95448 2.060284,1.96992 h 12.318535 c 1.575064,0.019 2.13218,-1.0917 2.140488,-2.06029 l -1.4e-4,-19.81058" />
    </svg>
    `

    const pngBuffer = await sharp(Buffer.from(svgStr))
      .resize({ width: size ? +size : 600 })
      .png()
      .toBuffer()
      .catch(e => { throw new Error(e) })

    res.setHeader('Content-Type', `image/png`)
    res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`)
    res.end(pngBuffer)
  } catch (e) {
    res.status(500).json({ message: e })
  }
}

export default handler