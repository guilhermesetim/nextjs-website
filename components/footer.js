import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    return (
        <>
            <section>
                <div>
                    <h3>Siga no instagram</h3>
                    <a href="https://www.instagram.com/barbeariafernandes58/"><InstagramIcon/></a>
                </div>


                <div>
                    <h3>Mapa</h3>
                </div>


                <div>
                    <h4>Formas de pagamento</h4>
                    <p>Dinheiro</p>
                    <p>Cartão Débito e Crédito</p>
                    <p>Pix</p>
                    <p>PicPay</p>
                </div>
            </section>

            <style jsx>{`
                section {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-around; 
                }
            `}</style>
        </>
    )
}