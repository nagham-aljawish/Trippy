import './Form.css'

const Form = ({title ,fields, buttonText, onSubmit}) => {
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
      </form>
    </div>
  )
}

export default Form