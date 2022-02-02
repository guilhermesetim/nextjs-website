import Services from '../components/services';
import Start from  '../components/header';
import AppBarber from '../components/app-barber';
import Footer from '../components/footer';
import ButtonAcess from '../components/button-acess';


    
export default function HomePage() {

    return (
        <>
            
            <Logo/>
            <Start/>
            <AppBarber/>
            <Services/>
            <Footer/>
            <ButtonAcess/>
           
            
            
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
                border: 2px solid white;
            }
            p {
                position: absolute;
                top: 5%;
                right: 5%;
                color: white;
                font: normal bold 1.5em white;
            }
        `}</style>
    </>
    )
}