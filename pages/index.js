import Clients from "../components/clients/clients";
import Layout from '../components/layout'
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/navbar";
import Services from "../components/services/services";
import Technologies from "../components/technologies/technologies";
import Container from "../components/container";




export default function Home() {
  return (
    <>

      <Layout>
        <Hero />
        <Container>
          <Services />
          <Technologies />
          <Clients />
        </Container>
      </Layout>

    </>
  )
}