/// <reference types="Cypress"/>
const perfil = require("../fixtures/perfil.json");

describe("Funcionalidade usuário", () => {
  it("Adicionar um novo usuário", () => {
    cy.usuario("junior1", "dornelas20", "12334");
  });

  it.only("Obter token do usuário", () => {
    cy.login(perfil[1].login2, perfil[1].senha2).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Sucesso ao realizar o login");
    });
  });

  it.only("Limpar todos os dados do usuario", () => {
    cy.limparDados().then((response) => {
      expect(response.status).to.equal(204);
    });
  });
});
