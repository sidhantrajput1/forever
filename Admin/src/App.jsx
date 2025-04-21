
import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="flex w-full">
        <SideBar />
      </div> 
    </div>
  )
}

export default App
