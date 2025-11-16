import { useRef } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MainBanner = () => {
  const MainGroup = useRef(null);

  const MoveBannerRight = () => {
    MainGroup.current.append(MainGroup.current.firstElementChild);
  }

  const MoveBannerLeft = () => {
    MainGroup.current.prepend(MainGroup.current.lastElementChild);
  }

  return (
    <section id='Banner'>
        <div className="Group" ref={MainGroup}>
            <div className="Element4"></div>
            <div className="Element1"></div>
            <div className="Element2"></div>
            <div className="Element3"></div>
        </div>   

        <button className="MoveRight" onClick={MoveBannerRight}><FaArrowRight/></button>      
        <button className="MoveLeft" onClick={MoveBannerLeft}><FaArrowLeft/></button>      
    </section>
  )
}

export default MainBanner
