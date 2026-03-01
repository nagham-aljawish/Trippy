import "./SectionTitle.css"

const SectionTitle = ({title,subTilte}) => {
  return (
    <div className="title">
        <h1>{title}</h1>
        <p>{subTilte}</p>
    </div>
  )
}

export default SectionTitle