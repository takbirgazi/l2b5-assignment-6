import { Outlet } from "react-router";
import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";



function App() {

  return (
    <main>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default App
