/*var myIndex = 0;
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}*/

function Enviar() {
 
    var nome = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
 
    if (nome.value != "" & email.value != "" & subject.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
 
}