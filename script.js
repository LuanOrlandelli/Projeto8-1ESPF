//declarando as variaveis

let p1 = prompt("Digite seu nome");
let p2 = prompt("Digite seu poder");
let p3 = prompt("Digite o nome de um vilão");
let p4 = prompt("Digite um lugar");
let msg = document.getElementById("msg");

msg.innerHTML = `OLA ${p1}, O SEU PODER É ${p2} E VOCÊ VAI ENFRENTAR O(A) ${p3} NO ${p4}.`
