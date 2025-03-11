import Navbar from "./components/Navbar"
import SearchRec from "./components/SearchRec"
import FavMenus from "./sections/FavMenus"
import FoodList from "./sections/FoodList"
import Header from "./sections/Header"
import Iklan from "./sections/Iklan"
import Menus from "./sections/Menus"
import Footer from "./sections/Footer"
import Messages from "./sections/Messages"
import TimelineSection from "./sections/TimelineSection"

function App() {

  return (
    <div className="">
      <Navbar/>
      <Header/>
      <Menus />
      <SearchRec/>
      <FoodList/>
      <TimelineSection/>
      <FavMenus/>
      <Iklan/>
      <Messages/>
      <Footer />
    </div>
  )
}

export default App
