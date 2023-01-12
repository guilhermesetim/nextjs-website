export default function Start(){

    return(
    <>
        <header>
            <div>
                
                <p>Uma barbearia moderna,<br/> com o formato clássico</p>
            </div>
        </header>
        <style jsx>{`
            header {
                height: 100vh;
                background:  #a0882b url('/img/header.jpg') center top;
                background-size: cover;
                background-attachment: fixed;
            }
            .imagem {
                position: absolute;
                border-radius: 50%;
                top: 5%;
                left: 5%;
                box-shadow: 0px 0px 3px rgb(0, 0, 0);
                height: 150px;
                width: 150px;
                border: solid 2px rgba(255, 255, 255, 0.322);
            }
            
            
            p {
                position: absolute;
                top: 10%;
                right: 5%;
                color: white;
                font: italic 600 1.6em 'Vollkorn', serif;
            }
        `}</style>

    </>
    );
};