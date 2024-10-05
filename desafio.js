/* 

Desenvolva um programa em JavaScript que permita ao usuário inserir os níveis de emissões de carbono de 
diferentes países (em toneladas por ano) e calcule o impacto cumulativo das emissões no aquecimento global. 
O programa deve:

1- Permitir a entrada do nome do país e das emissões anuais em toneladas de CO₂.

2- Continuar pedindo entradas até que o usuário digite "sair".

3- Exibir um relatório com a média das emissões de todos os países, o país com a maior e a menor emissão.

*/

/* Função principal
function calcularEmissoesCarbono() {
    let paises = [];
    let emissoes = [];
    let totalEmissoes = 0;
  
    while (true) {
      let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");
  
      if (pais.toLowerCase() === "sair") {
        break;
      }
  
      let emissao = parseFloat(prompt(`Digite as emissões de carbono de ${pais} em toneladas por ano:`));
  
      if (!isNaN(emissao)) {
        paises.push(pais);
        emissoes.push(emissao);
        totalEmissoes += emissao; 
      } else {
        alert("Por favor, insira um valor numérico válido para as emissões.");
      }
    }
  
    if (paises.length > 0) {
      let mediaEmissoes = totalEmissoes / emissoes.length;
  
      let maiorEmissao = emissoes[0];
      let menorEmissao = emissoes[0];
      let paisMaiorEmissao = paises[0];
      let paisMenorEmissao = paises[0];
  
      for (let i = 1; i < emissoes.length; i++) {
        if (emissoes[i] > maiorEmissao) {
          maiorEmissao = emissoes[i];
          paisMaiorEmissao = paises[i];
        }
        if (emissoes[i] < menorEmissao) {
          menorEmissao = emissoes[i];
          paisMenorEmissao = paises[i];
        }
      }
  
      alert(`Relatório de Emissões de Carbono:
      - Média de emissões: ${mediaEmissoes.toFixed(2)} toneladas/ano
      - País com maior emissão: ${paisMaiorEmissao} (${maiorEmissao} toneladas/ano)
      - País com menor emissão: ${paisMenorEmissao} (${menorEmissao} toneladas/ano)`);
    } else {
      alert("Nenhum dado de emissão foi inserido.");
    }
  }
  
  calcularEmissoesCarbono();*/

  /* Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. 
Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:
#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas
*/

function calcular_total_medalhas() {
  
    let paises = [];
    let medalhasporpais = [];
    let total_medalhas = 0;

    while (true) {
        let pais = prompt("Digite o nome de um país ou, caso não queira, digite 'sair': ");
        if (pais.toLowerCase() == "sair")  //toLowerCase para aceitar qualquer escrita de "SAIR","Sair"...
            break;
          
          let ouro = parseInt(prompt('Digite a quantidade de medalhas de ouro que o ${pais} tem:'));
          let prata = parseInt(prompt('Digite a quantidade de medalhas de prata que o ${pais} tem:'));
          let bronze = parseInt(prompt('Digite a quantidade de medalhas de bronze que o ${pais} tem:'));

          if (!isNaN(ouro) && !isNaN(prata) && !isNaN(bronze)) {
            let total_medalhas = ouro + prata + bronze; // se são números válidos ! is not a number

            if (medalhasporpais[pais]) {
              medalhasporpais[pais] += total_medalhas;
          } else {
              medalhasporpais[pais] = total_medalhas;
            }
          } else {
              alert("Por gentileza, insira números válidos para a quantidade de medalhas.");
          }

          let ranking = Object.entries(medalhasPorPais).sort((a, b) => b[1] - a[1]); 

          let resultado = "Ranking de medalhas:\n"; 
          for (let i = 0; i < ranking.length; i++) {
              let pais = ranking[i][0]; 
              let total_medalhas = ranking[i][1]; 
              resultado += pais + ": " + total_medalhas + " medalhas\n"; 
          }
          
          alert(resultado);
        }
      }        

        calcular_total_medalhas();
