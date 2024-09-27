/*const titulo = document.querySelector('h1');

console.log('innerHTML:',titulo.innerHTML);
console.log('innerText:',titulo.innerText);
console.log('textContent:',titulo.textContent)
*/

const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.textContent = 'Meu Link';
ancora.setAttribute('href','https://www.ifro.edu.br');
ancora.setAttribute("target", "_blanck");
body.appendChild(ancora);