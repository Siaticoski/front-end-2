const itensMenu = [
    { nome: 'Inicio', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html'}
];

const menu = () => {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const body = document.querySelector('body');
    nav.appendChild(ul);
    header.appendChild(nav);
    body.appendChild(header);
}

function adicionarli() {
    const ul = document.querySelector('ul');
    itensMenu.forEach(item =>{
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', item.url);
        a.textContent = item.nome.toLocaleUpperCase();
        a.style.textDecoration = 'none';
        a.style.color = '#fff'
        li.appendChild(a)
        ul.appendChild(li)
    })
}

menu()
adicionarli()