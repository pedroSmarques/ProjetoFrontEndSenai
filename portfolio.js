//EVENTO PARA SCROLAR PARA UM LOCAL DA PAGINA
function eventosScroll() {
    document.getElementById('homeBtn').addEventListener('click', function () {
        document.getElementById('home').scrollIntoView({
        });
    });
    document.getElementById('sobreBtn').addEventListener('click', function () {
        document.getElementById('sobre').scrollIntoView({
        });
    });
    document.getElementById('projetosBtn').addEventListener('click', function () {
        document.getElementById('projetos').scrollIntoView({
        });
    });
    document.getElementById('contatosBtn').addEventListener('click', function () {
        document.getElementById('contatos').scrollIntoView({
        });
    });
};
eventosScroll('click');

// EVENTOS ONDE A PESSO CLICAR ELE SERÁ REDIRECIONADO PARA ALGUNS DO LINKS EM UMA NOVA ABA
function links() {
    document.getElementById('githubBtn').addEventListener('click', function () {
        window.open('https://github.com/pedroSmarques', '_blank');
    });
    document.getElementById('instagramBtn').addEventListener('click', function () {
        window.open('https://www.instagram.com/pedroszmarques/', '_blank');
    });

    document.getElementById('linkedinBtn').addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/pedrosmarquess/', '_blank');
    });
    document.getElementById('gmailBtn').addEventListener('click', function () {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=pedromarquess2006@gmail.com', '_blank');
    });
};
links('click');









