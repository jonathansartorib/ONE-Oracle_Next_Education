O primeiro caractere é um espaço branco.
\t é um tab.
\r é carriage return.
\n é newline.
\f é form feed.

O símbolo + é um outro atalho para definir a quantidade e agora já conhecemos todos:

? - zero ou uma vez.
* - zero ou mais vezes.
+ - uma ou mais vezes.
{n} - exatamente n vezes.
{n,} - no mínimo n vezes.
{n,m} - no mínimo n vezes, no máximo m vezes.


Para descrever o mês, devemos usar uma nova classe de letras, seguem alguns exemplos:

[A-Z] significa de A até Z, sempre maiúscula.
[a-z] significa de a até z, sempre minúscula,
[A-Za-z] significa A-Z ou a-z.
[abc] significa a, b ou c.


O que aprendemos?
Podemos definir facilmente a classe de qualquer caractere com o [A-Z].

Conhecemos todos os quantifiers como ?, +, * e {n}.

\s significa whitespace e é um atalho para [ \t\r\n\f].

\w significa word char e é uma atalho para [A-Za-z0-9_].


file:///Users/nico/Downloads/regex/index.html
^file.+html

Non-Capturing group - (?:de\s+) (não deve devolver o grupo formado pela preposição de e por um \s)
Quantifier - [a-z]? (a classe deve ocorrer zero ou uma vez)

Lembrando que temos os seguintes quantifiers:

? (zero ou um caractere)
+ (um ou mais caracteres)
* (zero ou mais caracteres)
{n,m} (min n, max m caracteres)