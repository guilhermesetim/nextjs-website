export default function AppBarber(){
    return (
        <>
        <h3>Agende pelo nosso app</h3>
        <div className="container">
        
            <div className="app">
                <img src="./img/home/app-barber.png"/>
                <p>Preparamos uma maneira muito prática para marcar o seu horário, baixe o aplicativo AppBarber em seu celular e cadastre-se na nossa barbearia.</p>
                <p>Disponível para Android e iOS. Clique em seu sistema correspondente para instalar.</p>
                
            </div>

            <div className="cell-phone">
                <a href="#"><img className="link-app" src="img/home/google-play.png"/></a>
                <a href="#"><img className="link-app" src="img/home/app-store.png"/></a>
            </div>


            <div className="hour-func">
                <table>
                    <thead>
                        <tr>
                            <td>Dia</td>
                            <td>Horário</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Segunda</td>
                            <td>09 a 18</td>
                        </tr>
                        <tr>
                            <td>Segunda</td>
                            <td>09 a 18</td>
                        </tr>
                        <tr>
                            <td>Segunda</td>
                            <td>09 a 18</td>
                        </tr>
                        <tr>
                            <td>Segunda</td>
                            <td>09 a 18</td>
                        </tr>
                        <tr>
                            <td>Segunda</td>
                            <td>09 a 18</td>
                        </tr>
                        <tr>
                            <td>Segunda</td>
                            <td>09 a 18</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <style jsx>{`
            .container {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
                align-items: center;
                
            }
            

            h3 {
                text-align: center;
                font-size: 60px;
            }

            .app {
                display:flex;
                flex-flow: column nowrap;
                aling-items: center;
                width: 600px;
                text-align: justify;
            }
            .app > img {
                margin: auto;
            }

            img {
                width: 100px;
                height: 100px;
            }

            .cell-phone {
                display: flex;
                flex-flow: column nowrap;
            }
            .link-app {width: 300px; height: 90px;}
        `}</style>
        </>
        
    )
}

