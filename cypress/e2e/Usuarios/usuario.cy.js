/// <reference types="Cypress"/>
const perfil = require("../../fixtures/perfil.json");
const usuario = require('../../fixtures/usuario.json')

describe("Funcionalidade usuário", () => {
  it("Adicionar um novo usuário", () => {
    cy.usuario(usuario.nome, usuario.user, usuario.senha);
  });

  it("Obter token do usuário", () => {
    cy.login(perfil[1].login2, perfil[1].senha2).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Sucesso ao realizar o login");
    });
  });

  it("Limpar todos os dados do usuario", () => {
    cy.limparDados().then((response) => {
      expect(response.status).to.equal(204);
    });
  });
});
