export default function Services(){
    const price={cut: 35, barber: 30, cutbarber: 60}

    const serv = [
        {type: 'Corte', address: 'img/hair.jpg', price: 35},
        {type: 'Barba', address: 'img/barber.jpg', price: 30},
        {type: 'Corte & Barba', address: 'img/hair-and-barber.jpg', price: 60},
        
    ]


    return (
        
        <>
            <section className="container">
                <h2>💈 Nossos Serviços 💈</h2>
                <div className="main">

                    {serv.map((i)=>(
                        <div key={i.type}>
                            <h3>{i.type}</h3>
                            <img src={i.address} />
                            <p>{i.price.toLocaleString('pt-br', {style:'currency',currency:'BRL'})}</p>
                    </div>
                    ))}
                    
                </div>
            </section>


            <style jsx>{`
                .container {
                    background: gray url('img/background.jpg') center top ;
                    background-size: cover;
                    background-attachment: fixed;
                    margin-top: 70px;
                    padding: 50px 0px;
                }

                h2 {
                    text-align: center;
                    font: normal 800 3em 'Vollkorn', serif;
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
                    font:  normal 400 2.5em 'Vollkorn', serif;
                    text-align: center;
                }
                p {
                    font: italic 500 4em 'Vollkorn', serif;
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

