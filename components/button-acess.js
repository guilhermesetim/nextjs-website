import {useState} from 'react'
import ReactDOM from 'react-dom'

import DirectionsIcon from '@mui/icons-material/Directions';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

function showBox(valueBool){
    var result;
    valueBool === true ? result = "flex" : result = "none";
    return (document.getElementById("list-links").style.display = `${result}`)
}



export default function ButtonAcess(){
    const [visibility, setVisibility] = useState(!false)

    return (
        <>
            <div id='list-links'>
                <div className='item'><a className='icon' target={'_blanck'} href='https://google.com.br'>< DirectionsIcon fontSize='40'/></a></div>
                <div className='item'><a className='icon' target={'_blanck'} href='https://facebook.com'><WhatsAppIcon fontSize='40'/></a></div>
                <div className='item'><a className='icon' target={'_blanck'} href='https://youtube.com.br'><EventAvailableIcon fontSize='40'/></a></div>
            </div>
        
            <div className="botton-box"
                onClick={()=>{ setVisibility(!visibility) , showBox(visibility) }} 
            >
            

            </div>
            <style jsx>{`
                .botton-box {
                    position: fixed;
                    bottom: 5%;
                    right: 2%;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    border: 2px solid black;
                    background-color: yellow;
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
                    background-color: gray;
                    border-radius: 50%;
                    margin-top: 20px;
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

    

    

