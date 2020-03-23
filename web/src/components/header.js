import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import siteLogo from '../img/site-logo.png'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className='relative z-50 border-b border-solid border-tentacle-200'>
    <div className='flex max-w-5xl my-0 mx-auto p-4 sm:p-6 justify-between items-center'>
      <Link to='/'><img src={siteLogo} alt="Tentacle Cult (logo)" /></Link>
      <div hidden className='font-semibold flex-grow'>
        <Link to='/' className='inline-block p-2 text-current no-underline hover:text-green-600'>{siteTitle}</Link>
      </div>

      <button className='appearance-none text-2xl border-none m-0 p-3 outline-none text-current md:hidden sm:block' onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' className='block fill-current' />
      </button>

      <nav className={cn(showNav ? 'block' : 'hidden', 'sm:block absolute sm:static md:static lg:static xl:static bg-white text-black inset-x-0 shadow-y sm:shadow-none')} css={{top: '4.3rem'}}>
        <ul className='m-0 py-4 px-0 sm:flex sm:justify-end sm:list-none sm:py-0'>
          <li>
            <Link to='/' className='uppercase font-bold text-current no-underline hover:text-tentacle-600 hover:underline py-2 px-6 sm:p-6'>Home</Link>
            {/* <Link to='/about/' className='uppercase font-bold text-current no-underline hover:text-tentacle-600 hover:underline py-2 px-6 sm:p-6'>About</Link> */}
            <Link to='/spec/' className='uppercase font-bold text-current no-underline hover:text-tentacle-600 hover:underline py-2 px-6 sm:p-6'>Spec Projects</Link>
            {/* <Link to='/daily-words/' className='uppercase font-bold text-current no-underline hover:text-tentacle-600 hover:underline py-2 px-6 sm:p-6'>Daily Words</Link> */}
            <Link to='/archive/' className='uppercase font-bold text-current no-underline hover:text-tentacle-600 hover:underline py-2 px-6 sm:p-6'>Blog</Link>
            <Link to='/podcast/' className='uppercase font-bold text-current no-underline hover:text-tentacle-600 hover:underline py-2 px-6 sm:p-6'>Podcast</Link>
            <Link to='/hire-me/' className='uppercase font-bold text-current no-underline bg-tentacle-600 text-white hover:bg-white hover:text-tentacle-600 hover:underline py-2 px-6 sm:p-2'>Hire Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
