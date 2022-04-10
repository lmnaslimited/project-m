import Clients from "../components/clients/clients";
import Layout from '../components/layout'
import Hero from "../components/hero/hero";
import Services from "../components/services/services";
import Technologies from "../components/technologies/technologies";
import Container from "../components/container";
import Partners from '../components/partners'
import {getHomePageData} from '../lib/api'

export default function Home({homeData}) {
  return (
    <>
      <Layout>
        <Hero />
        <Container>
          <Services services={homeData.services} />
          <Technologies technologies={homeData.technologies}/>
          <Clients clients={homeData.clients}/>
          <Partners partners={homeData.partners}/>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const homeData = await getHomePageData()
  return{ 
    props: { homeData}
  }
}