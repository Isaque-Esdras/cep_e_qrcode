import React from "react";
import QRCode from "react-qr-code";
import QRCodeLink from 'qrcode'
import { useState } from "react";
import './style.css'


export default function Qrcode(params) {

    const [link, setLink] = useState('')
    const [ qrcodeLink, setQrcodeLink] = useState('')

    function baixarQrcode(Link_url) {
        QRCodeLink.toDataURL(Link_url,{width:600, margin:5}, function (err, url) {
            setQrcodeLink(url)
        })
    }

    function gerarQrcode(e) {
        setLink(e.target.value)
        baixarQrcode(e.target.value)
    }

    return(
        <main id="mainQr">
        

        <article id="articleQr">
        <header id="quebraPagina">Digite seu Link e gere seu Qr-Code</header>
        <QRCode value={link}/> 
        <input id='inputQr' placeholder="Digite algo para gerar" value={link} onChange={(e) => gerarQrcode(e)}></input>
        <a href={qrcodeLink} download={'qrcode.pnj'}>Baixar Qrcode</a>

        </article>






        </main>
    )
}