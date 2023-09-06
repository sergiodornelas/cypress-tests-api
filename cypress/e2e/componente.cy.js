///<reference types="Cypress"/>

describe("Funcionalidade componente.", () => {
  it.only("Adicionar um novo componente ao produto", () => {
    cy.AdcNovoComponente("carrinhos", "23").then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal(
        "Componente de produto adicionado com sucesso"
      );
    });
  });

  it.only("Buscar todos os componentes de um produto.", () => {
    cy.BuscarComponentes().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal(
        "Listagem de componentes de produto realizada com sucesso"
      );
    });
  });

  it.only("Buscar um componente de um produto.", () => {
    cy.buscarUmComponente().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Detalhando dados do componente de produto")
    })
  });

  it("Alterar informações de um componente de produto.", () => {
    cy.AlterarInfoComponente("carrinho", "3").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal(
        "Componente de produto alterado com sucesso"
      );
    });
  });

  it("Remover um componente do produto", () => {
    cy.RemoveComponente().then((response) => {
      expect(response.status).to.equal(204);
    });
  });
});
