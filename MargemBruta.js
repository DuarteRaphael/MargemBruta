let MargemBruta;
let ReceitaLiquidaDeVendas = 0;
let CustoDosProdutosVendidos = 0;

ReceitaLiquidaDeVendas = parseFloat(prompt("Digite o valor da receita de vendas: "));
CustoDosProdutosVendidos = parseFloat(prompt("Digite o custos dos produtos vendidos: "));

let LucroBruto = ReceitaLiquidaDeVendas - CustoDosProdutosVendidos;

MargemBruta = (LucroBruto / ReceitaLiquidaDeVendas) * 100;

console.log("Margem Bruta " + MargemBruta + "%");
