import UnstyledTabsCustomized from '../components/nav-tab-menu';
import Image from 'next/image'




function Header(){
    

   return(
    <>
        <header>
        <img src="logo.jpg"/>
            
        </header>
        <style jsx>{`
        header{
            display: flex;
            height: 15vh;
            justify-content: center;
        }


        `}</style>
    </>
    

   )
   
}



export default function HomePage() {

    return (
        <>
            <Header/>
            <UnstyledTabsCustomized/>
            
        </>
    )

}
  