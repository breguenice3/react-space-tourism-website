import { useState } from "react"
import Navbar from "../components/navbar/navbar"
import './crew.css'

export default function Crew() {

    const crew = [
        {
            function: "COMMANDER",
            name: "DOUGLAS HURLEY",
            bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            function: "MISSION SPECIALIST",
            name: "MARK SHUTTLEWORTH",
            bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            function: "PILOT",
            name: "VICTOR GLOVER",
            bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
        },
        {
            function: "FLIGHT ENGINEER",
            name: "ANOUSHEH ANSARI",
            bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
        }
    ]

    const [number, setNumber] = useState(0);

    function changeCrew(imgc: string, imgc1: string, imgc2: string, imgc3: string, btnId:string, btn1Id:string, btn2Id:string, btn3Id:string, numberState: number) {
        document.getElementById(imgc)?.classList.remove('noneImg');
        document.getElementById(imgc1)?.classList.add('noneImg');
        document.getElementById(imgc2)?.classList.add('noneImg');
        document.getElementById(imgc3)?.classList.add('noneImg');

        document.getElementById(btnId)?.classList.add('selected-circle');
        document.getElementById(btn1Id)?.classList.remove('selected-circle');
        document.getElementById(btn2Id)?.classList.remove('selected-circle');
        document.getElementById(btn3Id)?.classList.remove('selected-circle');
        setNumber(numberState);
    }

    return (
        <div className="page-crew-container">
            <div className='navbar-container'>
                <div className='logo' />
                <hr />
                <Navbar home='not-selected' destination='not-selected' crew='selected' technology='not-selected' />
            </div>
            <div className="content">
                <div className="tittle">
                    <h2 className="title-pag"><span>02</span> MEET YOUR CREW</h2>
                </div>
                <div className="crew-page">
                    <div className="text-crew">
                        <div>
                            <h3>{crew[number].function}</h3>
                            <h2>{crew[number].name}</h2>
                            <div className="text-paragraph">
                                <p>{crew[number].bio}</p>
                            </div>
                        </div>
                        <div className="container-btn">
                            <button className="circle selected-circle" id="btn-0" onClick={() => {
                                changeCrew("commander", "specialist", "pilot", "engineer","btn-0", "btn-1", "btn-2","btn-3", 0);
                            }}></button>
                            <button className="circle" id="btn-1" onClick={() => {
                                changeCrew("specialist", "commander", "pilot", "engineer","btn-1","btn-0","btn-2", "btn-3", 1);
                            }}></button>
                            <button className="circle" id="btn-2" onClick={() => {
                                changeCrew("pilot", "commander", "specialist", "engineer","btn-2","btn-0","btn-1","btn-3", 2);
                            }}></button>
                            <button className="circle" id="btn-3" onClick={() => {
                                changeCrew("engineer", "commander", "pilot", "specialist","btn-3", "btn-0", "btn-1", "btn-2", 3);
                            }}></button>
                        </div>
                    </div>
                    <div className="imgs-carousel">
                        <div className="img" id="commander"></div>
                        <div className="img1 noneImg" id="specialist"></div>
                        <div className="img2 noneImg" id="pilot"></div>
                        <div className="img3 noneImg" id="engineer"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}