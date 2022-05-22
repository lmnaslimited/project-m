
import Footer from '../footer/footer'
import Meta from '../meta'
import Navbar from '../navbar/navbar'
export default function Index({ children }) {
  return (
    <>
      <div className="bg-th-background">
        <Navbar />
        <Meta />
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}