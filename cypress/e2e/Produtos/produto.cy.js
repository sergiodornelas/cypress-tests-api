/// <reference types="Cypress"/>
const produto = require('../../fixtures/produto.json')

describe("Funcionalidade produto", () => {
  it("Adicionar um novo produto", () => {
    cy.AdcProduto(produto[0].produto1, produto[0].valor1, produto[0].cor1, produto[0].componente1, produto[0].quantidade1).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal("Produto adicionado com sucesso");
    });
  });

  it("Buscar os produtos do usuário", () => {
    cy.BuscarProdutos().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal(
        "Listagem de produtos realizada com sucesso"
      );
    });
  });

  it("Buscar produtos por id", () => {
    cy.BuscarProdutosId().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Detalhando dados do produto");
    });
  });

  it("Alterar informações de um produto", () => {
    cy.Alterarproduto(produto[1].produto2, produto[1].valor2, produto[1].cor2, produto[1].componente2, produto[1].quantidade2).then(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal("Produto alterado com sucesso");
      }
    );
  });

  it("Remover um produto", () => {
    cy.Removerproduto().then((response) => {
      expect(response.status).to.equal(204);
    });
  });
});
