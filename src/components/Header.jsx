import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='fixed top-10 right-[90px] left-[90px] bg-transparent flex justify-between'>
      <div className='flex items-center gap-[50px] '>
        <Link href='/'>
          <img src='/images/logo.svg' alt="" className='h-[45px]' />
        </Link>
        <ul className='flex space-x-[30px] text-text-200'>
          <li>
            <Link href='/'>Featured</Link>
          </li>
          <li>
            <Link href='/'>How It Work</Link>
          </li>
          <li>
            <Link href='/'>Pricing</Link>
          </li>
          
        </ul>
      </div>
      <div className='flex items-center'>
        <button className='bg-transparent py-3 px-8 text-base'>Contact Us</button>
        <button className='bg-brand py-3 px-8 text-white text-base rounded-md'>Join Us</button>
      </div>
    </header>
  )
}
