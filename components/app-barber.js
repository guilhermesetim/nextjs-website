
export default function AppBarber(){

    const func = [
        {day: 'Segunda', hour: '09:30 às 19:00'},
        {day: 'Terça', hour: '09:30 às 19:00'},
        {day: 'Quarta', hour: '09:30 às 19:00'},
        {day: 'Quinta', hour: '09:30 às 19:00'},
        {day: 'Sexta', hour: '09:30 às 19:00'},
        {day: 'Sábado', hour: '09:30 às 19:00'}
    ]

    return (
        <>
        <h2>Agende pelo nosso app</h2>
        <div className="container">
        
            <div className="app">
                <img src="img/app-barber.png"/>
                <p>Preparamos uma maneira muito prática para marcar o seu horário, baixe o aplicativo AppBarber em seu celular e cadastre-se na nossa barbearia.</p>
                
                
            </div>

            
            
            
            <div className="cell-phone">
                <a href="#"><img src="img/google-play.png"/></a>
                <a href="#"><img src="img/app-store.png"/></a>
            </div>


            <div className="hour-func">
                    <thead>
                        <tr>
                            <td>Dia</td>
                            <td>Horário</td>
                        </tr>
                    </thead>
                    <tbody>
                        {func.map((each) => (
                        <tr>
                            <td>{each.day}</td>
                            <td>{each.hour}</td>
                        </tr>
                        )
                        
                        )}

                        
                    </tbody>
                
            </div>
        </div>
        
        <style jsx>{`

            h2 {
                text-align: center;
                font: normal bold 3em 'Vollkorn', serif;
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
                font: normal normal 1.6em/1.5em 'Vollkorn', serif;
                text-indent: 20px;
            }

            

            .cell-phone {
                display: flex;
                flex-flow: column nowrap;
                width: 200px;
                margin: auto;
                margin-top: 30px
                align-items: stretch;
                gap: 30px;
            }
        `}</style>
        </>
        
    )
}
