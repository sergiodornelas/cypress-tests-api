/// <reference types="Cypress"/>

describe("Funcionalidade produto", () => {
  it.only("Adicionar um novo produto", () => {
    cy.AdcProduto("bola", "200.0", "preto", "pito", "2").then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal("Produto adicionado com sucesso");
    });
  });

  it.only("Buscar os produtos do usuário", () => {
    cy.BuscarProdutos().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal(
        "Listagem de produtos realizada com sucesso"
      );
    });
  });

  it.only("Buscar produtos por id", () => {
    cy.BuscarProdutosId().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Detalhando dados do produto");
    });
  });

  it.only("Alterar informações de um produto", () => {
    cy.Alterarproduto("play2", "300.0", "rosa", "controle", "3").then(
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
