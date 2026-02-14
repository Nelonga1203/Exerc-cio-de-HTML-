var nome ="Jevalina"
var saudacao ="Ola," + nome +"!Seja Bem-vinda!";

console.log(saudacao);

function exibirSaudacao(){
   document.getElementById("mensagem").textContent = saudacao;

}
      
exibirSaudacao();