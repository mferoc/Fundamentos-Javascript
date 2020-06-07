/* linhas em js podem terminar ou n com ; desde q a linha esteja visivelmente clara */
/**
 * var x = 10;
 * var x = 16;
 * variaveis com var n devem mais ser usadas pois tem comportamento indefinido
 * aceitam re-declaracoes além de re-assinaturas e isso pode causar varios
 * problemas durante o fluxo do programa
**/
let variable; //declarando uma variavel
variable = "eu sou uma variavel"; //inicializando uma variavel
let name = "batman"; //uma variavel pode ou nao ser inicializada na declaracao
let age = 24;
let power = "high inteligence and money";
let unique_name = "ZZZ"; //variaveis criadas com let podem ser re-assinadas
//let unique_name; //mas nao podem ser re-declaradas
const unique_meaning = "unique"; //nao pode ser redeclarado ou re-assinado, é unico
const hello_world = "Hello World!!!"

console.log(
`${hello_world}\n
Nome: ${name}\n
Idade: ${age}\n
Poder: ${power}\n
`
)