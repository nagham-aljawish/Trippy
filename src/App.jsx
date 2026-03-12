import { FaCircleInfo, FaHouseChimneyUser } from "react-icons/fa6"
import NavBar from "./components/NavBar/NavBar"
import { MdOutlineHomeRepairService } from "react-icons/md"
import { BiSolidContact } from "react-icons/bi"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Section from "./components/Section/Section"
import SectionTitle from "./components/SectionTitle/SectionTitle"
import PopularContainer from "./components/PopularContainer/PopularContainer"
import Container from "./components/Container/Container"
import Card from "./components/Card/Card"

function App() {
  const items =[
    {
      icon :<FaHouseChimneyUser /> ,
      content: "Home"
    },
    {
      icon :<FaCircleInfo /> ,
      content: "About"
    },
    {
      icon :<MdOutlineHomeRepairService />,
      content: "Service"
    },
    {
      icon :<BiSolidContact />,
      content: "Contact"
    },
  ]
  return (
    <>
    <Header>
    <NavBar logo= "Trippy" items={items} btn="Sign Up"/>
    <Hero bgImage="/assets/img/herobg.jpg" title="Your Journey Your Story" description="Choose Your Favourite Destination." btn="Travel Now" />
    </Header>
    <main>
      <Section>
        <SectionTitle title="Popular Destinations" subTilte="Tours dive you the opportunity to see a lot, within a time frame." />
        <PopularContainer title="Mt. Daguldul, Batangas" description="One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!" firstImage="/assets/img/2.jpg" secImage="/assets/img/1.jpg"/>
        <PopularContainer title="Taal Volcano, Batangas" description="A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total." firstImage="/assets/img/3.jpg" secImage="/assets/img/4.jpg" reverse={true}/>
      </Section>
      <Section>
        <SectionTitle title="Recent Trips" subTilte="You can discover unique destination using Google Maps." />
        <Container>
          <Card image="/assets/img/2.jpg" title="Trip in Indonesia" description="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"/>
          <Card image="/assets/img/1.jpg" title="Trip in Malaysia" description="Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"  />
          <Card image="/assets/img/5.jpg" title="Trip in France" description="France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."/>
        </Container>
      </Section>
    </main>
    </>
  )
}

export default App
