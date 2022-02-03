function GlobalStyle(){
    return(
    <style global jsx>{`
    
    @import url('https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
    margin: 0;
	padding: 0;
	border: 0;
    box-sizing: border-box;
	font-size: 100%;
	text-decoration: none;
    }
    
    a {color: inherit;}
    
    `}</style>
    )
}

export default function MyApp({ Component, pageProps }) {
    
    return( 
    <>

    <GlobalStyle />
    
    <Component {...pageProps} />

    </>
    )
  }

function Title(props){
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`

            ${Tag}{
                font: normal bold 3em Ubuntu, sans-serif;
                color: red;
            }

            `}</style>
        </>
    )
}