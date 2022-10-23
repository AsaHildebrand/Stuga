import Background from "../components/Background"

import house from "../images/house.png"

const PicturePage = () => {

  return (
    <div className="picturepage-container">
      <div className="heading-container">
        <Background image={child} headText={"Galleri"}/>
      </div>
        <div className="album-container">
          <img className="album-image" src={house} alt="house"></img>
          <img className="album-image" src={house} alt="house"></img>
          <img className="album-image" src={house} alt="house"></img>
          <img className="album-image" src={house} alt="house"></img>
          <img className="album-image" src={house} alt="house"></img>
          <img className="album-image" src={house} alt="house"></img>
          <img className="album-image" src={house} alt="house"></img>
          <img className="album-image" src={house} alt="house"></img>
          <img className="album-image" src={house} alt="house"></img>
        </div>

    </div>
  )
}

export default PicturePage