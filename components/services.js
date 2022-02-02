export default function Services(){
    const price={cut: 35, barber: 30, cutbarber: 60}

    const serv = [
        {type: 'Corte', address: 'img/services/hair.jpg', price: 35},
        {type: 'Barba', address: 'img/services/barber.jpg', price: 30},
        {type: 'Corte & Barba', address: 'img/services/hair-and-barber.jpg', price: 60},
        
    ]


    return (
        
        < >
            <section className="container">
                <h2>Nossos Serviços</h2>
                <div className="main">

                    {serv.map((i)=>(
                        <div>
                            <h3>{i.type}</h3>
                            <img src={i.address} />
                            <p>{i.price.toLocaleString('pt-br', {style:'currency',currency:'BRL'})}</p>
                    </div>
                    ))}
                    
                </div>
            </section>


            <style jsx>{`
            .container {
                background: gray url('background.jpg') center top ;
                background-size: cover;
                background-attachment: fixed;
                margin-top: 70px;
                padding: 50px 0px;
            }

            h2 {
                text-align: center;
                font: normal bold 3em black;
                color: white;
            }

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
                border: 8px solid #8A741C;
                border-radius: 30px;
                background-color: white;
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

