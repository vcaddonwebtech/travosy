import { Link } from 'react-router-dom'
import routes from '../../Routes/routes'
import logo from '../../assets/logo-dark.png'
import { useState } from 'react'



function Navbar() {
    const [openDropDown, setOpenDropDown] = useState(null)
    const [openNested, setOpenNested] = useState(null)
    return (
        <>
            {/* <div className='bg-slate-400 h-100 w-sreen'> */}

            <div className='bg-white/80 h-20 backdrop-blur-lg border-b  border-white/30 shadow-xl'>
                <div className='flex  justify-between items-center py-5 mx-auto  '>

                    <span className='px-2'>
                        <img src={logo} alt="dark_logo" />

                    </span>
                    <span className='px-2'>
                        <ul className='flex gap-4 py-2 mx-auto '>


                            {routes.map((items) => (
                                <li
                                    className='relative'
                                    key={items.label}
                                    onMouseEnter={()=>{
                                        if(items.Children)setOpenDropDown(items.label)
                                    }}
                                onMouseLeave={()=>{setOpenDropDown(null)}} >

                                    {
                                        items.path ? (

                                            <Link to={items.path}
                                                className={`hover:text-red-500`}>

                                                {items.label}
                                            </Link>
                                        ) : (
                                            <button
                                                className={`hover:text-red-500`}>
                                                {items.label}
                                            </button>
                                        )
                                    }

                                    {/* firstlevel */}
                                    {
                                    items.Children && (
                                        <ul
                                        className={`
                                        ${openDropDown === items.label ? 
                                        'opacity-100 visible translate-y-6.5'
                                        : 'opacity-100 visible translate-y-2'}
                                       right-0 left-0 border shadow-lg border-white/40 rounded-md
                                        absolute z-50 bg-white top-full w-40 mt-1 `}>
                                            {
                                                items.Children.map((child)=>(
                                                    <li className='hover:text-red-500 py-2.5 px-2'>{child.label}</li>
                                                    
                                                ))
                                            }
                                        </ul>
                                    )

                                    }
                                </li>
                            ))}

                        </ul>
                    </span>
                </div>

            </div>
            {/* </div> */}
        </>
    )
}

export default Navbar