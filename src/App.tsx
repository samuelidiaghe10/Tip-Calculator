import { Aside } from "./clipboard-landing-page-master/components/Aside"
import { Footer } from "./clipboard-landing-page-master/components/Footer"
import { Header } from "./clipboard-landing-page-master/components/Header"
import { Main } from "./clipboard-landing-page-master/components/Main"


function App() {

  return (
    <div className="flex flex-col gap-40">
      <Header/>
      <Main/>
      <Aside/>
      <Footer/>
    </div>
  )
}

export default App
