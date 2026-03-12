import './BottomFooter.css'

const BottomFooter = ({title , items}) => {
  return (
    <div className="bottom">
        <div>
            <h4>{title}</h4>
            <ul>
            {items?.map((item , index) => {
                return(
                    <li key={index}> {item?.content}</li>
                )
            })}
        </ul>
        </div>
    </div>
  )
}

export default BottomFooter