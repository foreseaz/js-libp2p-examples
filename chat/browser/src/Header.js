import React from 'react'
import Logo from './libp2p-logo.svg'

export default function Header () {
  return (
    <header className='flex items-center pa2 bg-dark-blue'>
      <a href='https://libp2p.io' title='home' className='w-50'>
        <img src={Logo} style={{ height: 50 }} />
      </a>
      <h1 className='w-50 ma0 tr f3 fw2 nexa white'><span className='fw7'>libp</span>p2p chat</h1>
    </header>
  )
}