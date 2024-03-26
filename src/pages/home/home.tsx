import Navbar from '../components/navbar/navbar'
import './home.css'

export default function Home() {
    return (
        <div className='container'>
            <div className='navbar-container'>
                <div className='logo' />
                <hr />
                <Navbar home='selected' destination='not-selected' crew='not-selected' technology='not-selected' />
                <button id='btn-mobile' onClick={()=>{
                    document.getElementById('navbar')?.classList.remove('hide');
                    document.getElementById('btn-mobile')?.classList.add('hide');
                }} className='menu-img'></button>
            </div>
            <div className='second-container'>
                <div className='second-container-text'>
                    <div className='text-container'>
                        <h2>
                            SO, YOU WANT TO TRAVEL TO<br /><span>SPACE</span>
                        </h2>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                </div>
                <div className='second-container-button'>
                    <div className='button-hover'>
                        <button>EXPLORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}