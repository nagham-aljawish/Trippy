import './BottomFooter.css'

const BottomFooter = ({footerLinks}) => {
  return (
    <div className="footer-links">

      {footerLinks?.map((item , index) => {
        return(
          <div key={index} className="bottom-column">

            <h3>{item.title}</h3>

            {item.links?.map((link , i) => {
              return <a key={i} href="/">{link}</a>
            })}

        </div>
        )
    })}
    </div>
  )
}

export default BottomFooter