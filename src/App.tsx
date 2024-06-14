import { BasePage } from "./project-tracking/components/BasePage"

function App() {

  return (
    <div className="flex flex-col  gap-10">
      <div className=" bg-Light-Grayish-Blue relative self-end -z-10 w-[15rem]  lg:w-[42rem] rounded-bl-[70px] h-[30rem]"></div>

      <div className="absolute  lg:px-0 pt-10">
        <BasePage/>
      </div>
      
    </div>  
  )
}

export default App
