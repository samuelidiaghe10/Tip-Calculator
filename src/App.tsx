import { Aside } from "./news-homepage-main/components/Aside"
import { Main } from "./news-homepage-main/components/Main"
import { Navbar } from "./news-homepage-main/components/Navbar"


function App() {

  return (
    <div className="lg:p-10 p-5 flex flex-col gap-20">
      <Navbar/>
      <Main/>
      <Aside/>
    </div>
  )
}

export default App
