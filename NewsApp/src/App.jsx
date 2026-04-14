import './App.css'
import Navbar from './Component/Navbar'
import News from './Page/News'
import Category from './Component/Category'
import Footer from './Component/Footer'
function App() {
  
  return (
    <>
    <Navbar className={'sticky top-0 z-10'}/>
    <Category/>
    <News/>
    <Footer className={'py-10'}/>
    </>
  )
}

export default App
