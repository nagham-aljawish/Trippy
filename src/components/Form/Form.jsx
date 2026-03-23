import './Form.css'

const Form = ({title ,fields, buttonText, onSubmit , footerText, footerLink, footerLinkText}) => {
  return (
    <div className="form-section">
        <h3>{title}</h3>
        <form onSubmit={onSubmit}>
        {fields.map((field, index) =>
        field.type === "textarea" ? (
            <textarea
            key={index}
            placeholder={field.placeholder}
            name={field.name}
            className="input message"
            />
        ) : (
        <input
        key={index}
        type={field.type}
        placeholder={field.placeholder}
        name={field.name}
        className="input"
        />
    )
)}
        <button type="submit">{buttonText}</button>
        {footerText && (
          <p className="form-footer">
            {footerText} <a href={footerLink}>{footerLinkText}</a>
          </p>
        )}
      </form>
    </div>
  )
}

export default Form