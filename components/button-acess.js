import {useState} from 'react'
import ReactDOM from 'react-dom'

import DirectionsIcon from '@mui/icons-material/Directions';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function showBox(valueBool){
    var result;
    valueBool === true ? result = "flex" : result = "none";
    return (document.getElementById("list-links").style.display = `${result}`)
}



export default function ButtonAcess(){
    
    const infoLinks = [
        {address: 'https://google.com.br', icon: <DirectionsIcon fontSize='40'/>},
        {address: 'https://api.whatsapp.com/send?phone="5541997492373"', icon: <WhatsAppIcon fontSize='40'/>},
        {address: 'https://youtube.com.br', icon: <EventAvailableIcon fontSize='40'/>}
    ]

    const [visibility, setVisibility] = useState(!false)

    return (
        <>
            <div id='list-links'>
                {infoLinks.map(  (link)=> (
                     <div className='item'>
                        <a className='icon' target={'_blanck'} href={link.address}> {link.icon} </a>
                    </div>
                ))}
            </div>
        
            <div className="botton-box"
                onClick={()=>{ setVisibility(!visibility) , showBox(visibility) }} 
            >
            <ArrowCircleUpIcon fontSize='large'/>
            </div>
            <style jsx>{`
                .botton-box {
                    position: fixed;
                    bottom: 5%;
                    right: 2%;
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    border: 2px solid black;
                    background-color: #D6B740;
                }
                #list-links {
                    position: fixed;
                    display: none;
                    flex-flow: column nowrap;
                    bottom: 20%;
                    right: 3.5%;
                    width: auto;
                    height: auto;
                    z-index: 100;
                }
                .item {
                    position: relative;
                    height: 50px;
                    width: 50px;
                    background-color: #FFE066;
                    border-radius: 50%;
                    margin-top: 20px;
                    box-shadow: 1px 1px 5px black;
                }
    
                .icon {
                    position: absolute;
                    font-size: 40px;
                    height: 60px;
                    width: 60px;
                    text-align: center;
                    transform: translate(-8%, 8%);
                }

            `}</style>
        </>

    )
}

    

    

