import '../css/bootstrap.min.css';
import React from "react";

export  default  function App({Component, pageProps}) {
    return <Component {...pageProps}/>
}