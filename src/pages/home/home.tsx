import Navbar from '../components/navbar/navbar'
import './home.css'

export default function Home() {
    return (
        <div className='container'>
            <div className='navbar-container'>
                <div className='logo'/>
                <hr />
                <Navbar />
            </div>
            <div>
                <h2>
                    so, you want to travel to <br /><span>SPACE</span>
                </h2>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
        </div>
    )
}