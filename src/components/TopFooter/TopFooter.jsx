import './TopFooter.css'

const TopFooter = ({title , subTitle ,icons }) => {
  return (
    <div className="top">
    <div>
       <h1>{title}</h1>
       <p>{subTitle}</p>
    </div>
    <div className="icons">
            {icons?.map((item , index) => {
                return(
                    <div key={index}>{item?.icon}</div>
                )
            })}
        </div>
    </div>
  )
}

export default TopFooter