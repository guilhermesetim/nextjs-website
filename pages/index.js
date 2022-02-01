import Services from '../components/services';
import Start from  '../components/header';
import AppBarber from '../components/app-barber';
import BasicSpeedDial from '../components/acess-fast';
import Footer from '../components/footer';



    
export default function HomePage() {

    return (
        <>
            <BasicSpeedDial/>
            <Logo/>
            <Start/>
            <AppBarber/>
            <Services/>
            <Footer/>
            
           
            
            
        </>
    )

}
  
function Logo (){
    return(
    <>
        <header>
            <img src="./logo.jpg" alt='logo'/>
            <p>Uma barbearia moderna,<br/> com aquela pegada clássica</p>
        </header>
        <style jsx>{`
            img {
                position: absolute;
                border-radius: 50%;
                top: 2%;
                left: 2%;
            }
            p {
                position: absolute;
                top: 2%;
                right: 2%;
                color: white;
                font: normal bold 1.2em white;
            }
        `}</style>
    </>
    )
}