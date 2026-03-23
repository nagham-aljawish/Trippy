import { Link, Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Section from "../components/Section/Section"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import Container from "../components/Container/Container"
import Card from "../components/Card/Card"


/*const Services = () => {
  return (
    <div>
        <Link to="/service/1/front">front service</Link>
        <Link to="/service/2/back">back service</Link>
        <Outlet />
    </div>
  )
}

export default Services*/

const Services = () => {
  return (
    <div>
        <Header>
        <Hero bgImage="/assets/img/services.jpg" title="Services" />
        </Header>
         <Section>
        <SectionTitle title="Recent Trips" subTilte="You can discover unique destination using Google Maps." />
        <Container>
          <Card image="/assets/img/2.jpg" title="Trip in Indonesia" description="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"/>
          <Card image="/assets/img/1.jpg" title="Trip in Malaysia" description="Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"  />
          <Card image="/assets/img/5.jpg" title="Trip in France" description="France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."/>
        </Container>
      </Section>
    </div>
  )
}

export default Services