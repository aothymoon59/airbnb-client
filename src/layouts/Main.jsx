import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar/Navbar"
import Footer from "../components/shared/Footer/Footer"

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-20 min-h-[calc(100vh-85px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
