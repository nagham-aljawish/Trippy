
import AboutContainer from "../components/aboutContainer/aboutContainer"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Section from "../components/Section/Section"


const About = () => {
  
  return (
    <div>
    <Header>
    <Hero bgImage="/assets/img/night.jpg" title="About" />
    </Header>
    <Section>
     <AboutContainer title="Our History" subTitle="Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. rippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence." />
     <AboutContainer title="Our Mission" subTitle="Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness." />
     <AboutContainer title="Our Vision" subTitle="To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients." />
     </Section>
    </div>
  )
}

export default About