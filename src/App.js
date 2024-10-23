import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Popular from "./components/Popular"
import Recommended from "./components/Recommended"
import SalesImage from "./components/SalesImage"
import Topics from "./components/Topics"

function App(){
    return(<>
    <Navbar></Navbar>
    <Categories></Categories>
    <SalesImage></SalesImage>
    <Recommended></Recommended>
    <Topics></Topics>
    <Popular></Popular>
    <Footer></Footer>

    </>)
}

export default App