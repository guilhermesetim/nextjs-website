import Services from '../components/services';
import Header from  '../components/header';
import AppBarber from '../components/app-barber';
import BasicSpeedDial from '../components/acess-fast';
import Footer from '../components/footer';



    
export default function HomePage() {

    return (
        <>
            <BasicSpeedDial/>
            <Logo/>
            <Header/>
            <AppBarber/>
            <Services/>
            <Footer/>
            
           
            
            
        </>
    )

}
  
function Logo (){
    return(
    <>
        <img src="./logo.jpg" alt='logo'/>
        <style jsx>{`
            img {
                position: absolute;
                border-radius: 50%;
            }
        `}</style>
    </>
    )
}