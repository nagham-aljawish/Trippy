import './Card.css'

const Card = ({image , title , description}) => {
  return (
    <div className="card">
    <div className="img">
        <img src={image} alt="" />
    </div>
    <div className="txt">
    <h4>{title}</h4>
    <p>{description}</p>
    </div>
    </div>
  )
}

export default Card