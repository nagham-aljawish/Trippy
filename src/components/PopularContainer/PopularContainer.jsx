import './PopularContainer.css'

const PopularContainer = ({title , description , firstImage , secImage ,reverse}) => {
  return (
    <div className={`popularcontainer ${reverse ? "reverse" : ""}`}>
        <div className="txt">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className="images">
            <img src={firstImage} alt="" />
            <img src={secImage} alt="" />
        </div>
    </div>
  )
}

export default PopularContainer