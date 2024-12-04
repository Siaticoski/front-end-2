export default function listas() {
    const nomes = ['sim', 'talvez', 'não', 'se quiser sim', 'será'];
    const carros = [

            {
                id: 1,
                modelo: 'Fusca', 
                ano: 1975,
                cor: 'Preto',
            },

            {
                id: 2,
                modelo: 'Opala', 
                ano: 1985,
                cor: 'vermelho',
            },

            {
                id: 3,
                modelo: 'Fusca', 
                ano: 1995,
                cor: 'azul',
            },

            {
                id: 4,
                modelo: 'Fusca', 
                ano: 1955,
                cor: 'amarelo',
            },

            {
                id: 5,
                modelo: 'Fusca', 
                ano: 1965,
                cor: 'sim',
            },

    ]

    return(
        <div>
            <h1>Listas</h1>
            <div>
                <h2>Lista Comum</h2>
                <ul style={{marginLeft: '50px'}}>
                {nomes.map((nome, id) =>(
                    <li key={id}>{id+1}-{nome}</li>
                ))}
            </ul>

            </div>
            <div>
                <h2>Lista Objetos</h2>
                
                {
                carros.map((carro) =>(
                    <div key={carro.id}>
                        <h3>{carro.id} - {carro.modelo} - {carro.ano} - {carro.cor}</h3>
                        
                    </div>
                ))
                }
            </div>
        </div>
    )
}