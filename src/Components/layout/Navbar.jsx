import React from 'react'
import logo from '../../assets/logo-dark.png'

function Navbar() {
  return (
    <div className='bg-white text-red-500 font-sans'>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex justify-between'>
                <ul>
                    <li><img src = {logo}/></li>
                </ul>
                <ul className={`flex gap-3`}>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>contact</li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar