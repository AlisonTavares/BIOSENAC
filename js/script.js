
document.addEventListener('contextmenu',event=>event.preventDefault());



var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });
  

                    

$(document).ready(function(){$(".button-collapse").sideNav();$('.parallax').parallax();var telaAlt=($(window).height())+64;$('.home').css('height',telaAlt);$('.ancora').click(function(){var alvo=$(this).attr('href').split('#').pop();$('html, body').animate({scrollTop:$('#'+alvo).offset().top},1000);return false;});});

// campo de validação HORA e DATA //

var dt = document.getElementById('data');
var data = new Date();
var dia = new Array ("Dominngo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")
var mes = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", )

dt.innerHTML = dia[data.getDay()] + ", " + data.getDate() + " de " + mes[data.getMonth()] + " de " + data.getFullYear() + ".";

// final do campo de validação HORA E DATA//

// validação do campo de nome. e-mail e telefone //

function validar () {
  var nome = form2.name.value;
  var email = form2.inputEmail.value;
  var tel = form2.inputTel.value;
  var msg = form2.mensagem.value;

  if (nome.length == '') {
      alert('Por favor, preencha o campo de nome.');
      form2.nome.focus;
      return false
  } else if (email.length == '') {
      alert('Por favor informe um endereço de email.')
      form2.email.focus;
      return false
  } else if (tel.length == '') {
      alert('Por favor, digite o númedo de telefone');
      form2.tel.focus;
      return false
  } else if (msg.length == '') {
      alert('Por favot, digite a mensagem');
      form2.msg.focus;
      return false
  } else {
      alert('Sua mensagem foi enviada, obrigado!')
  }
}

// final da validação do nome, e-mail e telefone //

// teste carrossel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
       
