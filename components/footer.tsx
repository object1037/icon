import IconLink from './icon-link'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import Icon from './icon'

export default function Footer() {
  return (
  <footer className="flex items-center bg-gray-100 dark:bg-gray-800 py-3 px-6 mt-auto">
    <div className="flex flex-row items-center justify-between w-full max-w-5xl mx-auto">
      <div className="flex flex-row flex-wrap space-x-2">
        <IconLink title='Homepage' link='https://object1037.dev' >
          <Icon colors={{
            Hair: 'none',
            Eye: 'none',
            Background: 'none',
            Stroke: 'currentColor'
          }} stroke='12.5' className='text-[40px] -my-[5px]' />
        </IconLink>
        <IconLink title="Twitter link" link='https://twitter.com/object1037' >
          <FiTwitter />
        </IconLink>
        <IconLink title="GitHub link" link='https://github.com/object1037' >
          <FiGithub />
        </IconLink>
      </div>
      <div className="text-gray-800 dark:text-gray-200 font-light text-xs">&copy; 2022 object1037</div>
    </div>
  </footer>
  )
}