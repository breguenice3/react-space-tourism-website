import './navbar.css'

export default function Navbar(){
    return(
        <div className='navbar'>
            <a href="/"><span>00</span> HOME</a>
            <a href="/destination"><span>01</span> DESTINATION</a>
            <a href=""><span>02</span> CREW</a>
            <a href=""><span>03</span> TECHNOLOGY</a>
        </div>
    )
}