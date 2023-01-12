import InstagramIcon from '@mui/icons-material/Instagram';
import PixIcon from '@mui/icons-material/Pix';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CreditCardIcon from '@mui/icons-material/CreditCard';


export default function Footer(){
    return (
        <>
            <section>
                <div className='social-media'>
                    <h4>Siga no instagram</h4>
                    <a href="https://www.instagram.com/"><InstagramIcon fontSize=''/></a>
                    <p>@xxxxxxxxxxxxxxxx</p>
                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31798508.19070108!2d-73.14434231022466!3d-13.371787985088494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1673481962956!5m2!1spt-BR!2sbr" width="300" height="225"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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