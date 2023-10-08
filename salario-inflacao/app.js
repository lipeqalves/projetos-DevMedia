import entradaDados from "readline-sync";
let salarioMinimo = [
  { ano: 2010, salario: 510.0 },
  { ano: 2011, salario: 545.0 },
  { ano: 2012, salario: 622.0 },
  { ano: 2013, salario: 678.0 },
  { ano: 2014, salario: 724.0 },
  { ano: 2015, salario: 788.0 },
  { ano: 2016, salario: 880.0 },
  { ano: 2017, salario: 937.0 },
  { ano: 2018, salario: 954.0 },
  { ano: 2019, salario: 998.0 },
  { ano: 2020, salario: 1045.0 },
];
let inflacoes = [
  { ano: 2011, ipca: 5.91 },
  { ano: 2012, ipca: 6.5 },
  { ano: 2013, ipca: 5.84 },
  { ano: 2014, ipca: 5.91 },
  { ano: 2015, ipca: 6.41 },
  { ano: 2016, ipca: 10.67 },
  { ano: 2017, ipca: 6.29 },
  { ano: 2018, ipca: 2.95 },
  { ano: 2019, ipca: 3.75 },
  { ano: 2020, ipca: 4.31 },
  { ano: 2010, ipca: 4.52 },
];

console.log("Aplicação de salário x inflação\n");
console.log("Escolha uma das alternativas: \n");

console.log("1 - Listar os salários minimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let escolha = entradaDados.question("Digite o numero da sua escolha: ");
escolha = Number(escolha);
console.log("Opção Escolhida: " + escolha + "\n");

let labelAno = "Ano: ";
let labelSalario = "Salário: ";
let labelIpca = "Inflação IPCA: ";
let labelCrescimento = "Crescimento Salarial: ";

if (escolha === 1) {
  for (let salarioMin of salarioMinimo) {
    let ano = salarioMin.ano;
    let salario = salarioMin.salario;

    console.log(labelAno.padEnd(20, ".") + ano);
    console.log(
      labelSalario.padEnd(20, ".") +
        "R$ " +
        salario.toFixed(2).replace(".", ",") +
        "\n"
    );
  }
} else if (escolha === 2) {
  for (let inflacao of inflacoes) {
    let ano = inflacao.ano;
    let ipca = inflacao.ipca;
    console.log(labelAno.padEnd(30, ".") + ano);
    console.log(
      labelIpca.padEnd(30, ".") + ipca.toFixed(2).replace(".", ",") + "%" + "\n"
    );
  }
} else if (escolha === 3) {
  let tamanhoLista = salarioMinimo.length;
  for (let i = 0; i < tamanhoLista; i++) {
    let ano = salarioMinimo[i].ano;
    let salario = salarioMinimo[i].salario;
    let ipca = inflacoes[i].ipca;

    if (ano > 2010) {
      let salarioAnterior = salarioMinimo[i - 1].salario;
      let diferenca = salario - salarioAnterior;
      let crescimemto = (diferenca / salarioAnterior) * 100;

      console.log(labelAno.padEnd(30, ".") + ano);
      console.log(
        labelSalario.padEnd(30, ".") +
          "R$ " +
          salario.toFixed(2).replace(".", ",")
      );
      console.log(
        labelCrescimento.padEnd(30, ".") +
          crescimemto.toFixed(2).replace(".", ",") +
          "%"
      );
      console.log(
        labelIpca.padEnd(30, ".") +
          ipca.toFixed(2).replace(".", ",") +
          "%" +
          "\n"
      );
    } else {
      console.log(labelAno.padEnd(30, ".") + ano);
      console.log(
        labelSalario.padEnd(30, ".") +
          "R$ " +
          salario.toFixed(2).replace(".", ",")
      );
      console.log(labelCrescimento.padEnd(30, ".") + "-");
      console.log(
        labelIpca.padEnd(30, ".") +
          ipca.toFixed(2).replace(".", ",") +
          "%" +
          "\n"
      );
    }
  }
} else {
  console.log("Opção Invalida!!");
}
