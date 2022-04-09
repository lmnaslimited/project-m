import Clients from "../components/clients/clients";
import Layout from '../components/layout'
import Hero from "../components/hero/hero";
import Services from "../components/services/services";
import Technologies from "../components/technologies/technologies";
import Container from "../components/container";
import Partners from '../components/partners'

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Container>
          <Services />
          <Technologies />
          <Clients />
          <Partners />
        </Container>
      </Layout>
    </>
  )
}