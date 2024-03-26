import { useState } from "react"
import Navbar from "../components/navbar/navbar"
import './technology.css'

export default function Technology() {

    const launchInfo = [
        {
            name: "LAUNCH VEHICLE",
            info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            name: "SPACEPORT",
            info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            name: "SPACE CAPSULE",
            info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]

    const [index, setIndex] = useState(0);

    function changeLaunch(image1:string, image2:string, image3:string, btn1:string, btn2:string, btn3:string, number: number){
        document.getElementById(image1)?.classList.remove('disapear');
        document.getElementById(image2)?.classList.add('disapear');
        document.getElementById(image3)?.classList.add('disapear');

        document.getElementById(btn1)?.classList.add('btn-launch-selected');
        document.getElementById(btn2)?.classList.remove('btn-launch-selected');
        document.getElementById(btn3)?.classList.remove('btn-launch-selected');

        setIndex(number);
    }

    return (
        <div className="tec-container">
            <div className='navbar-container'>
                <div className='logo' />
                <hr />
                <Navbar home='not-selected' destination='not-selected' crew='not-selected' technology='selected' />
                <button id='btn-mobile' onClick={()=>{
                    document.getElementById('navbar')?.classList.remove('hide');
                    document.getElementById('btn-mobile')?.classList.add('hide');
                }} className='menu-img'></button>
            </div>
            <div className="tittle">
                <h2 className="title-pag"><span>03</span> SPACE LAUNCH 101</h2>
            </div>
            <div className="space-launch-content">
                <div className="space-launch-content-child">
                    <div className="btns-launch">
                        <button id="btn1" className="btn-launch btn-launch-selected" onClick={()=>{
                            changeLaunch('image1','image2','image3', 'btn1', 'btn2', 'btn3', 0)
                        }}>1</button>
                        <button id="btn2" className="btn-launch" onClick={()=>{
                            changeLaunch('image2','image1','image3', 'btn2', 'btn1', 'btn3', 1)
                        }}>2</button>
                        <button id="btn3" className="btn-launch" onClick={()=>{
                            changeLaunch('image3','image2','image1', 'btn3', 'btn2', 'btn1', 2)
                        }}>3</button>
                    </div>
                    <div className="space-launch-content-text">
                        <p className="tittle-launch">THE TERMINOLOGY…</p>
                        <h2>{launchInfo[index].name}</h2>
                        <p className="info-launch">{launchInfo[index].info}</p>
                    </div>
                </div>
                <div className="launch-img-container">
                    <div className="launch-img" id="image1"></div>
                    <div className="launch-img-1 disapear" id="image2"></div>
                    <div className="launch-img-2 disapear" id="image3"></div>
                </div>
            </div>
        </div>
    )
}