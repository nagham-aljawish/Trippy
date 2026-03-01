import styles from "./Hero.module.css"
const Hero = ({title,description,bgImage,btn}) => {
  return (
    <div className={styles.hero}>
        <img src={bgImage} alt="hero background image" className={styles.background} />
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <button className={styles.btn}>{btn}</button>
    </div>
  )
}

export default Hero