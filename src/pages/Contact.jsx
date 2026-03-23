import Form from "../components/Form/Form"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"


const Contact = () => {
   const fields = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "subject", type: "text", placeholder: "Subject" },
    { name: "message", type: "textarea", placeholder: "Message" },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <div>
    <Header>
    <Hero bgImage="/assets/img/contact.jpg" title="Contact" />
    </Header>
    <Form
        title="Send a message to us!"
        fields={fields}
        buttonText="Send Message"
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Contact