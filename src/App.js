import {FiSearch} from "react-icons/fi";
import { useState } from "react";
import { Routes, Route, Link} from 'react-router-dom'
import Index from './Rotas/index'
import api from "./servicos/api";
import './style.css'





function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

async function iniciarPesquisa() {
    if (input==='') {
      alert('Digite um CEP para realizar a Pesquisa.')
    }

    try{

      const esperarConfirmacao = await api.get(`${input}/json`)
      setCep(esperarConfirmacao.data)
      setInput('')

    }catch{

      alert('Ops, erro ao buscar por este CEP.')
      setInput('')
    }



  }

  return (


    <main id="primeiraMain">
   
     
   <header id="headerPrincipal"> <h3>Clique aqui e Gere seu Qrcode</h3> <Link to="/Qrcode">Gerador de QR Code</Link></header>

   

      <article id="conteiner">

      
      <h1 id="titulo">Buscador de CEP</h1>
      <section id="parteInput">
      <input type="text" placeholder="Digite um CEP..." value={input}
      onChange={(e) => setInput(e.target.value)}/>  
      <button id="botaoPesquisa"><FiSearch color="#F0F8FF" onClick={iniciarPesquisa}/></button>
      
      </section>
      
    
      {Object.keys(cep).length > 0 && (
        <section id="parteInformacao">
        
        <h2>CEP: {cep.cep} </h2>
        
        <p>{cep.logradouro}</p>
        <p>{cep.bairro}</p>
        <p>{cep.localidade}</p>
        <p>{cep.uf}</p>
       

        </section>

        
        
      )}
      
      
      </article>
      <footer>Todos os Direitos Reservados</footer>
    
    <Routes>
    <Route path='/Qrcode' element={<Index/>}/>  
    </Routes>

    </main>
      
      
  );
}

export default App;
