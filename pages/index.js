import Clients from "../components/clients/clients";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/navbar";
import Services from "../components/services/services";
import Technologies from "../components/technologies/technologies";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Technologies/>
      <Clients/>
      <Footer/>
    </>
  )
}