import './navbar.css'

interface Props {
    home: string,
    destination: string,
    crew: string,
    technology: string
}

export default function Navbar({ home, destination, crew, technology }: Props) {

    return (
        <div className='navbar hide' id='navbar'>
            <div className='container-x'>
                <button className='img-x' onClick={()=>{
                    document.getElementById('btn-mobile')?.classList.remove('hide');
                    document.getElementById('navbar')?.classList.add('hide');
                }}>
                </button>
            </div>
            <a href="/" className={home}><span className='number'>00</span> HOME</a>
            <a href="/destination" className={destination}><span className='number'>01</span> DESTINATION</a>
            <a href="/crew" className={crew}><span className='number'>02</span> CREW</a>
            <a href="/technology" className={technology}><span className='number'>03</span> TECHNOLOGY</a>
        </div>
    )
}