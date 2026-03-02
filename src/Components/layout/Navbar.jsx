import { Link } from 'react-router-dom'
import routes from '../../Routes/routes'
import logo from '../../assets/logo-dark.png'
import { Children, useState } from 'react'
import { ChevronDown ,Search } from 'lucide-react'


function Navbar() {
    const [openDropDown, setOpenDropDown] = useState(null)
    const [openNested, setOpenNested] = useState(null)
    return (
        <>
            {/* <div className='bg-slate-400 h-100 w-sreen'> */}

            <div className='bg-white/80 h-20 backdrop-blur-lg border-b  border-white/30 shadow-xl'>
                <div className='flex  justify-between items-center py-5 mx-auto px-10  '>

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
                                                className={`hover:text-red-500 font-medium`}>

                                                {items.label}
                                            </Link>
                                        ) : (
                                            <button
                                                className={`flex items-center 
                                                px-2  gap-1 font-medium
                                                 hover:text-red-500
                                                 transition-transform duration-200 
                                                 `}>
                                                {items.label}
                                                <ChevronDown  className={`w-3 h-3 ${openDropDown ?'rotate-180':'rotate-0'}`} />
                                            </button>

                                        )
                                    }

                                    {/* firstlevel DropDown*/}
                                    {
                                    items.Children && (
                                        <ul
                                        className={`
                                        ${openDropDown === items.label ? 
                                        'opacity-100 visible translate-y-6.5'
                                        : 'opacity-0 invisible translate-y-2'}
                                       right-0 left-0 border shadow-lg border-white/40 rounded-md
                                        absolute z-50 bg-white top-full w-30 mt-1 transition-all duration-200`}>
                                            {
                                                items.Children.map((child)=>(
                                                    <Link to={child.path}>
                                                    <li key ={child.label} className='hover:text-red-500 py-2.5 px-2'>{child.label}</li>
                                                    </Link>
                                                    
                                                ))
                                            }
                                            
                                        </ul>
                                    )
                                    }
                                </li>

                            ))}
                            <li className><button><Search/></button></li>

                        </ul>
                    </span>
                </div>

            </div>
            {/* </div> */}
        </>
    )
}

export default Navbar