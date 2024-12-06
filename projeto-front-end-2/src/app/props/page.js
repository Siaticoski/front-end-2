import Card from '@/components/Card'

export default function props() {

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
            <h1>Props</h1>
            {
                carros.map((carro) => (
                
                <Card key={carro.id}
                    id={carro.id}
                    modelo={carro.modelo}
                    ano={carro.ano}
                    cor={carro.cor}
                />
                ))}
        </div>
    );
};