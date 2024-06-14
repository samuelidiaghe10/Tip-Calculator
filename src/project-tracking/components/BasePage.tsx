import { Main } from './Main'
import { Navbar } from './Navbar'

export const BasePage = () => {
  return (
    <div className=' flex flex-col  lg:gap-32'>
        <Navbar/>
        <Main/>
    </div>
  )
}
