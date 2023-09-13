///<reference types="Cypress"/>
const componente = require('../../fixtures/componente.json')

describe("Funcionalidade componente.", () => {
  it("Adicionar um novo componente ao produto", () => {
    cy.AdcNovoComponente(componente[0].componenteProduto1, componente[0].quandidadeProduto1).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal(
        "Componente de produto adicionado com sucesso"
      );
    });
  });

  it("Buscar todos os componentes de um produto.", () => {
    cy.BuscarComponentes().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal(
        "Listagem de componentes de produto realizada com sucesso"
      );
    });
  });

  it("Buscar um componente de um produto.", () => {
    cy.buscarUmComponente().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Detalhando dados do componente de produto")
    })
  });

  it("Alterar informações de um componente de produto.", () => {
    cy.AlterarInfoComponente(componente[1].componenteProduto2, componente[1].quandidadeProduto2).then((response) => {
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
