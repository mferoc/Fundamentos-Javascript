/**
 * baseado na teoria dos conjuntos e tabela verdade
 * e - duas proposicoes verdadeiras para gerar true
 * ou - uma ou outra proposicao verdadeira para gerar um true
 * nao - negacao de true é false - negacao de false é true
 */
/**
 * no javascript:
 * ---FALSE---
 * false
 * 0
 * []
 * ""
 * ''
 * null
 * undefined
 * NaN
 * ---TRUE---
 * 1
 * -1
 * 0.5
 * "0" - strings
 */
//const podePilotar = false;
const podePilotar = true;
//se podePilotar for true o q esta dentro do if sera exibido, se for false, nao
if (podePilotar) {
  console.log("A pessoa pode pilotar!!!!");
}
const saldoEmConta = 0; //aqui é false
//usei a negação, ou seja, o contrário de false
if (!saldoEmConta) {
  console.log("não tem saldo, pobrezao!!!!");
}
console.log(!true); //negação 
console.log(!!true); //negação da negação
const boolComString = "eaee hackerzao";
//em javascript !! converte um valor para o tipo boolean
if (!!boolComString) {
  console.log("Voctê é muito hackeer!");
}
//negação + forçar o boolean
if (!(!(!!boolComString))) {
  console.log("Isso é coisa de expert eim...");
}
