const form = document.getElementById('form');
const nomeAluno = document.getElementById('nome-aluno');
let formValido = false;

function validaNota(notaA, notaB) {
    return notaA < notaB;
}

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >=2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const notaA = document.getElementById('nota-a');
    const notaB = document.getElementById('nota-b');
    const mensagemSucesso = `Notas do aluno <b>${nomeAluno.value}</b>, enviadas com sucesso.`

    formValido = validaNota(notaA.value, notaB.value), validaNome(nomeAluno.value);
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.message-sucess');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeAluno.value = '';
        notaA.value = '';
        notaB.value = '';

    } else {
        notaA.style.border = '1px solid red';
        document.querySelector('.message-erro').style.display = 'block'
    }
})

nomeAluno.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formValido = validaNota(notaA.value, notaB.value);

    if (!formValido) {
        notaA.classList.add('error');
        document.querySelector('.message-erro').style.display = 'block'
    } else {
        notaA.classList.remove('error');
        document.querySelector('.message-erro').style.display = 'none'
    }
})

/*  Nesse mesmo exercício gostaria de validar o NOME também, porém não estou conseguindo validar a segunda função que seria o NOME,
    como posso fazer isso, além disso a minha mensagem de erro na Nota 'A', não some quando arrumo, também não consegui arrumar esse erro. 

    OBG =)
*/

