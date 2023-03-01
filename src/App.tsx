import './App.css'
import './index.css'
import {Header} from "./components/Header";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className={'mx-10'}>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default App
