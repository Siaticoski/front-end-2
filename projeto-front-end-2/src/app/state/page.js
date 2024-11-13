'use client'
import { useState } from "react"

export default function State() {
    const [msg, setMsg] = useState('Boa tarde!');
    const [mostrarDiv, setMostrarDiv] = useState(true);

    //const alterarMsg = () => {
    //    setMsg('Bom dia!');
    //    console.log('msg: '+msg);
    //}

    const manipularInput = (evento) => {
        console.log(evento.target.value)
        setMsg(evento.target.value)
    }


    return(
        <div>
            <p>{msg}</p>
            <button /* onClick={alterarMsg}*/ >alterar</button>
            <p>Sua mensagem: {msg}</p>
            <input type="text" onChange={manipularInput} />

            <button onClick={()=>setMostrarDiv(!mostrarDiv)} >{mostrarDiv?'Esconder':'mostrar'}</button>
            {mostrarDiv && (
                <div>
                <p>paragrafo dinâmico</p>
            </div>
            )
            }
        </div>
    )
}