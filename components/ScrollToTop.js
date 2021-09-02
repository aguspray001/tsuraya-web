import { useEffect, useState } from 'react';
import {FaArrowCircleUp} from 'react-icons/fa'

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
          setShowScroll(false)
        }
      };
    
    const scrollTop = () => {
        window.scrollTo({top:0, behavior:'smooth'})
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
    })

    return (
        <button onClick={()=>scrollTop()} class={`transform hover:scale-125 transition duration-500 ease-out ${showScroll === true?"block":"hidden"}`}>
            <FaArrowCircleUp style={{fontSize:40, color:'gray'}} title="back to top"/>
        </button>
    )
}

export default ScrollToTop
