import UnstyledTabsCustomized from '../components/nav-tab-menu';


function Header(){
    

   return(
    <>
        <header>
            <h1>Barbearia Fernandes</h1>
        </header>
        <style jsx>{`
        header{
            height: 200px;
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
  