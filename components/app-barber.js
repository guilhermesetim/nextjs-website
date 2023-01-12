
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
                <p>Preparamos uma maneira muito prática para marcar o seu horário, baixe o aplicativo <strong>AppBarber</strong> em seu celular e cadastre-se na nossa barbearia.</p>
                <div className="cell-phone">
                    <a href="#"><img src="img/google-play.png"/></a>
                    <a href="#"><img src="img/app-store.png"/></a>
                </div>
                
            </div>

           
            <table>
                <thead>
                    <tr>
                        <th colSpan={2} >Horário de funcionamento</th>
                    </tr>
                </thead>
                <tbody>
                    {func.map((each) => (
                    <tr>
                        <td>{each.day}</td>
                        <td>{each.hour}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
        
        <style jsx>{`

            h2 {
                text-align: center;
                font: normal bold 3em 'Vollkorn', serif;
                margin-top: 30px;
                color: #212121;
            }
            strong {
                color: #a0882b;
                text-shadow: 0.7px 0.7px 0.7px rgba(0, 0, 0, 0.911);
            }
            .container {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-evenly;
                align-items: center;
                margin: 80px;
                gap: 50px;
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
                margin-top: 50px;
                align-items: stretch;
                gap: 30px;
            }
            .hour-func{
                margin: auto;
            }

            table { 
                font: normal 400 1.2em 'Vollkorn', serif; 
                margin-top: 30px;
            }
            th {
                height: 50px;
                background-color: #212121;
                color: white; 
            }
            td { 
                border: 1px solid #212121;
                padding: 15px;
            }
            tr:nth-child(even) {background-color: #ffe0661f}
        `}</style>
        </>
        
    )
}
