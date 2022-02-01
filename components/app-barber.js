export default function AppBarber(){
    return (
        <>
        <h2>💈 Agende pelo nosso app 💈</h2>
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

            h2 {
                text-align: center;
                font: normal bold 3em black;
                margin-top: 30px;
            }

            .container {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                align-items: center;
                margin: 80px 10% 0px 10%;
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
                margin-bottom: 30px;
            }
            .app > p {
                font: normal normal 1.5em black;
                text-indent: 20px;
                line-height: 1.5em;
            }

            img {
                width: 100px;
                height: 100px;
            }

            .cell-phone {
                display: flex;
                flex-flow: column nowrap;
                width: 200px;
                margin: auto;
                margin-top: 30px
                align-items: stretch;
            }
            .link-app {width: 200px; height: 60px;}
        `}</style>
        </>
        
    )
}

