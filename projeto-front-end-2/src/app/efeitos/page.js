'use client'
import { useEffect, useState } from "react"
import { resolve } from "styled-jsx/css"

export default function efeitos() {
    const [ufs, setUfs] = useState([])
    const [estado, setEstado] = useState('')
    const [cidades, setCidades] = useState([])
    const [cidade, setCidade] = useState('')

    const getUfs = async () => {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        if (!response.ok){
            throw new Error('erro ao buscar:' + response.statusText);
        }
        const data = await response.json();
        setUfs(data)
    }
    useEffect(() => {
        getUfs()
    }, [])

    const getCidades = async () => {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios?orderBy=nome`)
        if (!response.ok) {
            throw new Error('Erro ao buscar:' + response.statusText);
        }
        const data = await response.json();
        setCidades(data)
        console.log(data)
    }

    useEffect(() => {
        getUfs();
    }, [])
    
    useEffect(() => {
        getCidades();
    }, [estado])
    
    return (
        <div>
            <h1>useEffect / efeitos colaterais</h1>
            <select
                onChange={(ev) => {setEstado(ev.target.value), setCidade('')}}
            >
                <option value=""> Selecione o estado</option>
                {ufs.map((uf) =>(
                    <option
                        value={uf.id}
                        key={uf.id}
                    >
                    
                        {uf.nome}
                </option>
                ))}
            </select>
    
            <select
                onChange={(ev) => setCidade(ev.target.value)}
            >
                <option value="">Selecione a cidade</option>
                {cidades.map((cidade) =>(
                    <option
                        value={cidade.nome}
                        key={cidade.id}
                    >
                        {cidade.nome}
                    </option>
                ))}
            </select>
            { cidade?<p>{cidade}</p>:<p>Escolha a cidade</p>}
    
        </div>
    )
}



