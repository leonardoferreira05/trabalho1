let tabela = document.querySelector('table');

let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    let inputNome = document.querySelector('input[name=nome]');
    let nome = inputNome.value;
    let textNome = document.createTextNode(nome);
    let inputTitulos = document.querySelector('input[name=titulos');
    let titulos = inputTitulos.value;
    let textTitulos = document.createTextNode(titulos);
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    let linkExcluir = document.createElement('a');
    linkExcluir.setAttribute('href', '#');
    linkExcluir.appendChild(document.createTextNode('Excluir'));
    td.appendChild(textNome);
    td.appendChild(linkExcluir);
    tr.appendChild(td);
    td2.appendChild(textTitulos);
    td2.appendChild(linkExcluir);
    tr.appendChild(td2);
    tabela.appendChild(tr);
    inputNome.value = '';
    inputTitulos.value = '';
    linkExcluir.addEventListener('click', function(e){
        e.preventDefault();
        td.parentNode.remove(tr);
    })
})

