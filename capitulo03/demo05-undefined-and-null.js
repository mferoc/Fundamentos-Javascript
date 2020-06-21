/**
 * undefined significa q a variavel n foi definida
 * n foi inicializada e n tem um tipo definido
 * uma variavel criada sem inicializacao tera o tipo undefined
 */
let variavelSemInicializacao;
console.log(variavelSemInicializacao, typeof variavelSemInicializacao);
let variavelAgoraInicializada = "Hello World!";
console.log(variavelAgoraInicializada, typeof variavelAgoraInicializada);
/**
 * é possivel assinar uma variavel com undefined
 * mas n é uma boa prática fazer isso!!!
 * para dar um valor vazio a uma variavel,
 * usamos a palavra-chave null
 * indicando que a variavel foi assinada mas nao possui nenhum valor
 */
let variavelNull = null;
console.log(variavelNull, typeof variavelNull);
