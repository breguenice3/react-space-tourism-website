import Navbar from "../components/navbar/navbar"
import './technology.css'

export default function Technology(){
    return(
        <div className="tec-container">
             <div className='navbar-container'>
                <div className='logo' />
                <hr />
                <Navbar home='not-selected' destination='not-selected' crew='not-selected' technology='selected' />
            </div>
        </div>
    )
}