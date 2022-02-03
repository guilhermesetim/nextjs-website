export default function Start(){

    return(
    <>
        <header>
            <div>
                <img src="img/logo.jpg" alt='logo'/>
                <p>Uma barbearia moderna,<br/> com aquela pegada clássica</p>
            </div>
        </header>
        <style jsx>{`
            header {
                height: 100vh;
                background: url('/img/header2.jpg') center top;
                background-size: cover;
                background-attachment: fixed;
            }
            img {
                position: absolute;
                border-radius: 50%;
                top: 5%;
                left: 5%;
                box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.521);
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