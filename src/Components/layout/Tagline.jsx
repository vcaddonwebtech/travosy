
import { useState, useEffect, useRef } from "react"
import {
    Clock
    , MapPin
    , Mail
    , Facebook
    , Instagram
    , Twitter
    , Phone
} from "lucide-react"

export default function Tagline({ visible, setVisible }) {


    //  const [lastScrollY, setLastScrollY] = useState(0)
    const lastScrollY = useRef(0)


    useEffect(() => {

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                // scrolling DOWN — hide tagline
                setVisible(false)
            } else {
                // scrolling UP — show tagline
                setVisible(true)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [setVisible])

    const iconcss = "text-red-500 w-5"
    const hoveranimation = "transition hover:scale-120  hover:-translate-y-0.5 "
    return (
        <>
            <div className={`bg-slate-900 h-16  overflow-hidden mx-auto py-5 text-white 
  transition-all duration-100 ease-in
  ${visible ? "h-16 opacity-100" : "h-0 opacity-0 pointer-events-none"}
                }`}>
                <div className='max-w-7x1 mx-auto h-16'>
                    <div className='flex items-center justify-between'>
                        <ul className='flex  gap-4 mx-2'>
                            <li className='flex gap-4 text-slate-300 text-sm'>
                                <Clock className={`${iconcss}`} />
                                <span>  Mon-Sat: 9am to 6pm</span>
                            </li>
                            <li className='flex gap-4 text-slate-300 text-sm'>
                                <MapPin className={`${iconcss}`} />
                                <span>Surat, India 485</span>
                            </li>

                        </ul>
                        <ul className='flex  gap-4 mx-2'>
                            <li className='flex gap-4 text-slate-300 text-sm hover:text-white  '>
                                <Mail className={`${iconcss}`} />
                                <span >addon@gmail.com</span>
                            </li>
                            <li className='flex gap-4 text-slate-300 text-sm'>
                                <div className=' flex gap-2'>

                                    <Instagram className={`${hoveranimation} w-4 hover:text-red-500 `} />
                                    <Facebook className={`${hoveranimation} w-4 hover:text-red-500 `} />
                                    <Twitter className={`${hoveranimation} w-4 hover:text-red-500 `} />
                                    <Phone className={`${hoveranimation} w-4 hover:text-red-500 `} />
                                </div>

                            </li>

                        </ul>


                    </div>
                </div>

            </div>
        </>
    )
}
