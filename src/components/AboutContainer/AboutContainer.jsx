import './AboutContainer.css'

const AboutContainer = ({title,subTitle}) => {
  return (
    <div className="aboutContainer">
        <h2>{title}</h2>
        <p>{subTitle}</p>
    </div>
  )
}

export default AboutContainer