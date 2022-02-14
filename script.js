// Aba Habilidades
function habilidades() {
    var conteudo = document.getElementById('conteudo')
    var botaoH = document.getElementById('botaoH')

    botaoH.style.background="rgb(21, 22, 24)"
    botaoP.style.background="rgb(179, 46, 41)"
    botaoE.style.background="rgb(179, 46, 41)"
    botaoC.style.background="rgb(179, 46, 41)"

    conteudo.innerHTML = 
    `<center><h1>Habilidades</h1></center>
    <strong><a style="font-size: 18px">Ferramentas que sei utilizar e meu nível de maestria:</a></strong>
    <ul>
    <li><strong>Front-end: HTML/CSS/JS (Básico)</strong></li>
    <li><strong>Back-end: Python (Básico e POO)</strong></li>
    <li><strong>Banco de Dados: Oracle (Básico)</strong></li>
    <li><strong>Versionamento: Git (Básico)</strong></li>
    </ul>`
}

// Aba de Historico Profissional
function historicoProfissional() {
    var conteudo = document.getElementById('conteudo')
    var botaoP = document.getElementById('botaoP')

    botaoH.style.background="rgb(179, 46, 41)"
    botaoP.style.background="rgb(21, 22, 24)"
    botaoE.style.background="rgb(179, 46, 41)"
    botaoC.style.background="rgb(179, 46, 41)"

    conteudo.innerHTML = 
    `<center><h1>Histórico Profissional</h1></center>
    <strong><a style="font-size: 18px">Auxiliar Administrativo (2021 - Presente): </a></strong>
    <br>
    <p align="justify"><strong>Sou responsável por organizar arquivos, fichas de
funcionários e orçamentos com auxílio de ferramentas
Google, entre elas o Google Drive e Documentos Google na empresa de construção civil Marcecar.</strong></p>`
}

// Aba de Historico Educacional
function historicoEducacional() {
    var conteudo = document.getElementById('conteudo')
    var botaoE = document.getElementById('botaoE')

    botaoH.style.background="rgb(179, 46, 41)"
    botaoP.style.background="rgb(179, 46, 41)"
    botaoE.style.background="rgb(21, 22, 24)"
    botaoC.style.background="rgb(179, 46, 41)"

    conteudo.innerHTML = 
    `<center><h1>Histórico Educacional</h1></center>
    <p><strong>E.E.E.M André Leão Puente: </strong>
    <strong>Formado em 2019.</strong></p>
    <p><strong>Universidade La Salle: </strong>
    <strong>Bacharel em Ciência da Computação (2020 - Presente).</strong></p>
    `
}

// Aba de Contatos
function contatos() {
    var conteudo = document.getElementById('conteudo')
    var botaoC = document.getElementById('botaoC')

    botaoH.style.background="rgb(179, 46, 41)"
    botaoP.style.background="rgb(179, 46, 41)"
    botaoE.style.background="rgb(179, 46, 41)"
    botaoC.style.background="rgb(21, 22, 24)"

    conteudo.innerHTML = 
    `<center><h1>Contatos</h1></center>
    <strong><a style="font-size: 18px">Caso tenha interesse em me contactar ou ver meus projetos, os seguintes links:</a></strong>
    <ul>
    <li><a style="font-weight: bold">Email:</a> <a href="mailto:gui.a.vasconcelos@gmail.com" style="text-decoration:none; color: rgb(179, 46, 41); font-weight: bold">gui.a.vasconcelos@gmail.com</li>
    <li><a style="font-weight: bold">Linkedin:</a> <a href="https://www.linkedin.com/in/guilherme-vasconcelos-b85320207/" style="text-decoration:none; color: rgb(179, 46, 41); font-weight: bold">Guilherme Vasconcelos</a></li>
    <li><a style="font-weight: bold">GitHub:</a> <a href="https://github.com/HiroVasconcelos" style="text-decoration:none; color: rgb(179, 46, 41); font-weight: bold">HiroVasconcelos</a></li>
    </ul>`
}

//Aba Principal
function menu() {
    var  conteudo = document.getElementById('conteudo')

    botaoH.style.background="rgb(179, 46, 41)"
    botaoP.style.background="rgb(179, 46, 41)"
    botaoE.style.background="rgb(179, 46, 41)"
    botaoC.style.background="rgb(179, 46, 41)"

    conteudo.innerHTML = `<center><h1>Bem Vindo!</h1></center>
    <strong><p>Bem vindo ao meu Currículo Online, para me conhecer melhor é só clicar em uma dessas abas acima.</p></strong>`
}