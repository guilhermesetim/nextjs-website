import InstagramIcon from '@mui/icons-material/Instagram';
import PixIcon from '@mui/icons-material/Pix';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MyComponent from './maps'


export default function Footer(){
    return (
        <>
            <section>
                <div className='social-media'>
                    <h4>Siga no instagram</h4>
                    <a href="https://www.instagram.com/barbeariafernandes58/"><InstagramIcon fontSize=''/></a>
                    <p>@barbeariafernandes58</p>
                </div>


                <div className='map'>
                    <MyComponent/>
                    
                </div>


                <div className='payment'>
                    <h4>Formas de pagamento</h4>
                    <div><LocalAtmIcon/><p>Dinheiro</p></div>
                    <div><CreditCardIcon/><p>Cartão Débito e Crédito</p></div>
                    <div><PixIcon/><p>Pix</p></div>
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
                    font: normal normal 1.2em 'Vollkorn', serif;
                }
                .social-media {
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: center;
                }
                .social-media > h4 {
                    font:  normal 400 1.5em 'Vollkorn', serif;
                }
                .social-media > a {
                    margin-top: 20px;
                    font-size: 4em;
                }

                .payment{
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: stretch;
                }
                .payment > h4 {
                    font:  normal 400 1.5em 'Vollkorn', serif;
                    margin-bottom: 20px;
                }
                .payment > div {
                    margin-top: 10px;
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                }
                .payment > div > p {
                    margin-left: 10px;
                }

               


                footer {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-around;
                    padding: 10px 0px;
                    color: white;
                    background-color: black;
                    font: normal normal 0.9em 'Vollkorn', serif;
                }
                footer  a {
                    font-weight: bolder;
                    font-size: 1.1em
                }
                footer a:hover {
                    text-decoration: underline;
                }
                
            `}</style>
        </>
    )
}