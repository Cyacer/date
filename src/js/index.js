let votoSim = window.document.getElementById('sim');
let votoNao = window.document.getElementById('nao');

let parceiro = prompt('Seu nome?');
document.querySelector('.conteudo__titulo').innerHTML += parceiro + ' ?';

const alerta = () => {
  alert(`Mal posso espera pelo dia ${parceiro} 💞`);
  location.href = "https://www.youtube.com/watch?v=LMqyOfn_Shw&ab_channel=D.HEADZ";
};

const zoeira = () => {
  votoNao.style.position = 'absolute';
  votoNao.style.top = (Math.random() * window.innerHeight) + 'px';
  votoNao.style.left = (Math.random() * window.innerWidth) + 'px';
};

votoSim.addEventListener('click', alerta);
votoNao.addEventListener('mouseover', zoeira);