import InstagramIcon from '@mui/icons-material/Instagram';
import PixIcon from '@mui/icons-material/Pix';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CreditCardIcon from '@mui/icons-material/CreditCard';

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
                    <p><LocalAtmIcon/>Dinheiro</p>
                    <p><CreditCardIcon/>Cartão Débito e Crédito</p>
                    <p><PixIcon/>Pix</p>
                </div>
            </section>

            <footer>
                <p>CNPJ: xx.xxxx.xx/0001-xx</p>
                <p>Desenvolvido por: <a href="https://github.com/guilhermesetim">Guilherme Setim</a></p>
            </footer>

            <style jsx>{`
                section {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-around; 
                    padding: 30px 0px;
                }

                footer {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-around;
                    padding: 10px 0px;
                    color: white;
                    background-color: black;
                }
                
            `}</style>
        </>
    )
}