import Navbar from "../components/navbar/navbar";
import './destination.css'
import { SetStateAction, useState } from "react";


export default function Destination() {

    const destinationContent = [
        {
            name: "MOON",
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 km",
            time: "3 DAYS",
            url: "../../assets/destination/image-moon.png"
        },
        {
            name: "MARS",
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 MIL. km",
            time: "9 MONTHS",
            url: "../../assets/destination/image-europa.png"
        },
        {
            name: "EUROPA",
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 MIL. km",
            time: "3 YEARS"
        },
        {
            name: "TITAN",
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 BIL. km",
            time: "7 YEARS"
        }
    ]

    const [planet, setPlanet] = useState(0);

    const [btnsActive, setBtnsActive] = useState("")


    return (
        <div className="page-container">
            <div className='navbar-container'>
                <div className='logo' />
                <hr />
                <Navbar home='not-selected' destination='selected' crew='not-selected' technology='not-selected' />
            </div>

            <div className="tittle">
                <h2 className="title-pag"><span>01</span> PICK YOUR DESTINATION</h2>
            </div>
            <div className="container-imgs">
                <div>
                    <div className="imgMoon" id="img">
                    </div>
                    <div className="imgMars none" id="img1">
                    </div>
                    <div className="imgEuropa none" id="img2">
                    </div>
                    <div className="imgTitan none" id="img3">
                    </div>
                </div>
                <div>
                    <div className='buttons' id="btns">
                        <button className='btn active' id='moon' key={'moon'} onClick={() => {
                            
                            document.getElementById('moon')?.classList.add('active');
                            document.getElementById('img')?.classList.remove('none');
                            document.getElementById('europa')?.classList.remove('active');
                            document.getElementById('img1')?.classList.add('none');
                            document.getElementById('mars')?.classList.remove('active');
                            document.getElementById('img2')?.classList.add('none');
                            document.getElementById('titan')?.classList.remove('active');
                            document.getElementById('img3')?.classList.add('none');
                            return setPlanet(0)
                        }
                        }>MOON</button>
                        <button className='btn' id='mars' key={'mars'} onClick={() => {
                            document.getElementById('mars')?.classList.add('active');
                            document.getElementById('img2')?.classList.add('none');
                            document.getElementById('europa')?.classList.remove('active');
                            document.getElementById('img3')?.classList.add('none');
                            document.getElementById('moon')?.classList.remove('active');
                            document.getElementById('img')?.classList.add('none');
                            document.getElementById('titan')?.classList.remove('active');
                            document.getElementById('img1')?.classList.remove('none');
                            
                            return setPlanet(1)
                        }
                        }>MARS</button>
                        <button className='btn' key={'europa'} id="europa"
                        onClick={() => {
                            document.getElementById('europa')?.classList.add('active');
                            document.getElementById('img')?.classList.add('none');
                            document.getElementById('mars')?.classList.remove('active');
                            document.getElementById('img1')?.classList.add('none');
                            document.getElementById('moon')?.classList.remove('active');
                            document.getElementById('img2')?.classList.remove('none');
                            document.getElementById('titan')?.classList.remove('active');
                            document.getElementById('img3')?.classList.add('none');
                            return setPlanet(2)
                        }
                        }
                        >EUROPA</button>
                        <button className='btn' key={'titan'} id="titan"
                        onClick={() => {
                            document.getElementById('titan')?.classList.add('active');
                            document.getElementById('img')?.classList.add('none');
                            document.getElementById('europa')?.classList.remove('active');
                            document.getElementById('img1')?.classList.add('none');
                            document.getElementById('moon')?.classList.remove('active');
                            document.getElementById('img2')?.classList.add('none');
                            document.getElementById('mars')?.classList.remove('active');
                            document.getElementById('img3')?.classList.remove('none');
                            return setPlanet(3)
                        }
                        }
                        >TITAN</button>
                    </div>
                    <div className="text-imgs">
                        <h1>{destinationContent[planet].name}</h1>
                        <p className="imgs-infos">{destinationContent[planet].description}</p>
                        <hr />
                        <div className="container-data-infos">
                            <div>
                                <p className="tag">AVG. DISTANCE</p>
                                <p className="info">{destinationContent[planet].distance}</p>
                            </div>
                            <div>
                                <p className="tag">EST. TRAVEL TIME</p>
                                <p className="info">{destinationContent[planet].time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}