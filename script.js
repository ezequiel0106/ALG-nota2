// Solicitar nota do aluno

 let nota = parseFloat(prompt("Qual foi sua nota?"))

 // Verificar se foi aprovado, reprovado ou em recuperação

 if (nota >= 7) {
    alert("Aprovado");
 }else if(nota >= 5) {
    alert("Recuperação");
 }else {
    alert("Reprovado");
 }