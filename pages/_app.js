function GlobalStyle(){
    return(
    <style global jsx>{`
    * {
    margin: 0;
	padding: 0;
	border: 0;
    box-sizing: border-box;
	font-size: 100%;
	text-decoration: none;
    }

    body {background-color: gray;}

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