
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import CvPage from "./Pages/CvPage"
import { Toaster } from "@/components/ui/toaster";


function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route  path="my-cv" element={<CvPage />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
