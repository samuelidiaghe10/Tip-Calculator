import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Form } from "./newsletter-sign-up-with-success-message-main/components/Form"
import { ThankYou } from "./newsletter-sign-up-with-success-message-main/components/ThankYou"


function App() {
  
  const [email, setEmail] =  useState("")

  return (
    <div className="lg:min-h-screen flex items-center lg:bg-Dark-Slate-Grey lg:py-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form  email={email} setEmail={setEmail}/>}/>
          <Route path="ThankYou" element={<ThankYou  email={email}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
