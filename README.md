# Trabalho de Algoritmos

Este projeto foi desenvolvido como atividade acadêmica com o objetivo de implementar diferentes algoritmos utilizando as linguagens Java e JavaScript.

Os códigos foram desenvolvidos no Visual Studio Code e o projeto utiliza o EditorConfig para manter a padronização da formatação dos arquivos.

## Linguagens utilizadas

- Java
- JavaScript

## Algoritmos implementados

### Número Primo
Verifica se um número inteiro positivo é primo.

Um número é considerado primo quando é divisível apenas por 1 e por ele mesmo.

### Somatório
Realiza a soma dos valores presentes em um conjunto de números.

### Fibonacci
Gera a sequência de Fibonacci.

A sequência começa com:

0, 1, 1, 2, 3, 5, 8, 13...

Cada novo termo é obtido através da soma dos dois termos anteriores.

### Máximo Divisor Comum - MDC
Calcula o máximo divisor comum entre dois números inteiros.

Foi utilizado o Algoritmo de Euclides.

### QuickSort
Realiza a ordenação dos valores de um vetor utilizando o algoritmo QuickSort.

### Contagem
Realiza a contagem dos valores inteiros de um conjunto de dados que atendem ao intervalo definido no problema.

O primeiro elemento da lista define o limite inferior e o segundo argumento da função define o limite superior. Ambos são inclusivos.

## Como executar os testes

Instale o Node.js com npm (projeto testado com Node.js 24). No VS Code, abra a pasta que contém o arquivo `package.json`. Em **Terminal → Novo Terminal**, execute:

```sh
npm install
npm test
```

O Jest executa os arquivos da pasta `tests/`. Cada algoritmo JavaScript tem uma suíte com exemplos de uso, casos de borda e entradas inválidas. Para executar apenas Fibonacci:

```sh
npm test -- Fibonacci
```

## Como executar um exemplo da atividade 1

```sh
node JavaScript/Contagem.js
```

O exemplo imprime `Quantidade de valores: 4`. Os valores 2, 5, 3 e 4 pertencem ao intervalo de 2 a 6.

## Organização e validação

- `Java/` contém as implementações originais em Java.
- `JavaScript/` contém as funções exportadas e os exemplos executáveis.
- `tests/` contém uma suíte Jest para cada um dos seis algoritmos.
- `JavaScript/validacao.js` reúne as verificações de inteiros seguros e listas numéricas.
- Fibonacci aceita de 0 a 79 termos para garantir resultados inteiros exatos. O MDC aceita negativos e adota zero como resultado para dois zeros.
- Entradas de tipo inválido geram `TypeError`. Quantidades de Fibonacci fora do intervalo e somas que excedem a faixa finita geram `RangeError`.
