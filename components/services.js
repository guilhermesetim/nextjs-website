import { style } from "@mui/system"



export default function Services(){
    const price={cut: 35, barber: 30, cutbarber: 60}
    return (
        
        < >
            <div className="main">
                <div>
                    <h3>Corte</h3>
                    <img src="img/services/hair.jpg" />
                    <p>{price.cut.toLocaleString('pt-br', {style:'currency',currency:'BRL'})}</p>
                </div>
                <div>
                    <h3>Barba</h3>
                    <img src="img/services/barber.jpg" />
                    <p>{price.barber.toLocaleString('pt-br', {style:'currency',currency:'BRL'})}</p>
                </div>
                <div>
                    <h3>Corte & Barba</h3>
                    <img src="img/services/hair-and-barber.jpg" />
                    <p>{price.cutbarber.toLocaleString('pt-br', {style:'currency',currency:'BRL'})}</p>
                </div>
            </div>


            <style jsx>{`
            .main {
                display: flex; 
                flex-flow: row wrap; 
                justify-content: center;
                gap: 20px;
                margin-top: 30px;
            }

            .main > div {
                flex-flow: column nowrap;
                align-content: center;
                border: 8px solid black;
                border-radius: 30px;
            }

            h3 {
                font-size: 40px;
                text-align: center;
            }
            p {
                font: normal bold 70px black;
                text-align: center;
            }

            img{
                width: 300px;
                height: 400px;
            }

        `}</style>


        </>
        
        
    )
    
}