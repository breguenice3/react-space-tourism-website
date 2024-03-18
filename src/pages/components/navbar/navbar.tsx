import './navbar.css'

interface Props {
    home: string,
    destination: string,
    crew: string,
    technology: string
}

export default function Navbar({ home, destination, crew, technology }: Props) {

    return (
        <div className='navbar'>
            <a href="/" className={home}><span className='number'>00</span> HOME</a>
            <a href="/destination" className={destination}><span className='number'>01</span> DESTINATION</a>
            <a href="" className={crew}><span className='number'>02</span> CREW</a>
            <a href="" className={technology}><span className='number'>03</span> TECHNOLOGY</a>
        </div>
    )
}