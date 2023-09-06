// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//Comando customizado para adicionar um novo usuário.
Cypress.Commands.add("usuario", (nome, usuarioLogin, usuarioSenha) => {
  cy.request({
    method: "POST",
    url: "/v2/usuarios",
    body: {
      usuarioNome: nome,
      usuarioLogin: usuarioLogin,
      usuarioSenha: usuarioSenha,
    },
  });
});

//Comando customizado para obter token do usuário.
Cypress.Commands.add("login", (login, senha) => {
  cy.request({
    method: "Post",
    url: "/v2/login",
    body: {
      usuarioLogin: login,
      usuarioSenha: senha,
    },
  });
});

//Comando customizado para limpar dados do usuário.

Cypress.Commands.add("limparDados", () => {
  cy.request({
    method: "Delete",
    url: "/v2/dados",
    headers: {
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvaWQiOiIxNjgzNCIsInVzdWFyaW9sb2dpbiI6ImRvcm5lbGFzMjAiLCJ1c3Vhcmlvbm9tZSI6Imp1bmlvcjEifQ.q_aHmNW3LwHKO4YrPNrb_oo116SiNBYZ2lZgVefhD3s",
    },
  });
});

//Comando customizado para adicionar um novo produto.
Cypress.Commands.add(
  "AdcProduto",
  (
    produtoNome,
    produtoValor,
    produtoCor,
    componenteNome,
    componenteQuantidade
  ) => {
    cy.request({
      method: "Post",
      url: "/v2/produtos",
      body: {
        produtoNome: produtoNome,
        produtoValor: produtoValor,
        produtoCores: produtoCor,
        produtoUrlMock: "string",
        componentes: [
          {
            componenteNome: componenteNome,
            componenteQuantidade: componenteQuantidade,
          },
        ],
      },
      headers: {
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvaWQiOiIxNjgzMyIsInVzdWFyaW9sb2dpbiI6ImRvcm5lbGFzMTIzIiwidXN1YXJpb25vbWUiOiJqdW5pb3IifQ.kwovN6Pydst9NkXOFHrKTcKTstFe8bUtb767Et-PNPk",
      },
    });
  }
);

//Comando customizado para buscar os produtos do usuário.
Cypress.Commands.add("BuscarProdutos", () => {
  cy.request({
    method: "Get",
    url: "/v2/produtos",
    headers: {
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvaWQiOiIxNjgzMyIsInVzdWFyaW9sb2dpbiI6ImRvcm5lbGFzMTIzIiwidXN1YXJpb25vbWUiOiJqdW5pb3IifQ.kwovN6Pydst9NkXOFHrKTcKTstFe8bUtb767Et-PNPk",
    },
  });
});

//Comando customizado para buscar produtos por id.
Cypress.Commands.add("BuscarProdutosId", () => {
  cy.request({
    method: "Get",
    url: "/v2/produtos/919624",
    headers: {
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvaWQiOiIxNjgzMyIsInVzdWFyaW9sb2dpbiI6ImRvcm5lbGFzMTIzIiwidXN1YXJpb25vbWUiOiJqdW5pb3IifQ.kwovN6Pydst9NkXOFHrKTcKTstFe8bUtb767Et-PNPk",
    },
  });
});

//Comando customizado para alterar informações de um produtos.
Cypress.Commands.add(
  "Alterarproduto", (produtoNome2, produtoValor2, produtoCor2, componenteNome2, componenteQuantidade2) => {
    cy.request({
      method: "Put",
      url: "/v2/produtos/919624",
      body: {
        produtoNome: produtoNome2,
        produtoValor: produtoValor2,
        produtoCores: produtoCor2,
        produtoUrlMock: "string",
        componentes: [
          {
            componenteNome: componenteNome2,
            componenteQuantidade: componenteQuantidade2,
          },
        ],
      },
      headers: {
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvaWQiOiIxNjgzMyIsInVzdWFyaW9sb2dpbiI6ImRvcm5lbGFzMTIzIiwidXN1YXJpb25vbWUiOiJqdW5pb3IifQ.kwovN6Pydst9NkXOFHrKTcKTstFe8bUtb767Et-PNPk",
      },
    });
  }
);

//Comando customizado para remover um produto.
Cypress.Commands.add("Removerproduto",() => {
    cy.request({
      method: "Delete",
      url: "/v2/produtos/919615",
      headers: {
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvaWQiOiIxNjgzMyIsInVzdWFyaW9sb2dpbiI6ImRvcm5lbGFzMTIzIiwidXN1YXJpb25vbWUiOiJqdW5pb3IifQ.kwovN6Pydst9NkXOFHrKTcKTstFe8bUtb767Et-PNPk",
      },
    });
  }
);

//Comando customizado para adicionar um novo componente ao

Cypress.Commands.add('AdcNovoComponente', (nomeComponente, quantidadeComponente) => { 
  cy.request({
    method: "post",
    url: "/v2/produtos/919624/componentes",
    body: {
      "componenteNome": nomeComponente,
      "componenteQuantidade": quantidadeComponente
    },
    headers: {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvaWQiOiIxNjgzMyIsInVzdWFyaW9sb2dpbiI6ImRvcm5lbGFzMTIzIiwidXN1YXJpb25vbWUiOiJqdW5pb3IifQ.kwovN6Pydst9NkXOFHrKTcKTstFe8bUtb767Et-PNPk"}
  })
})

//Comando customizado para buscar todos os componentes de um produto.
Cypress.Commands.add('BuscarComponentes', () => { 
  cy.request({
    method: "get",
    url: "/v2/produtos/919624/componentes",
    headers: {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvaWQiOiIxNjgzMyIsInVzdWFyaW9sb2dpbiI6ImRvcm5lbGFzMTIzIiwidXN1YXJpb25vbWUiOiJqdW5pb3IifQ.kwovN6Pydst9NkXOFHrKTcKTstFe8bUtb767Et-PNPk"}
  })
})

//Comando customizado para buscar um componente de um produto.
Cypress.Commands.add('buscarUmComponente', () => { 
  cy.request({
    method: "get",
    url: "/v2/produtos/919624/componentes/942124",
    headers: {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvaWQiOiIxNjgzMyIsInVzdWFyaW9sb2dpbiI6ImRvcm5lbGFzMTIzIiwidXN1YXJpb25vbWUiOiJqdW5pb3IifQ.kwovN6Pydst9NkXOFHrKTcKTstFe8bUtb767Et-PNPk"}
  })
})

//Comando customizado para alterar informações de um componente de produto.
Cypress.Commands.add('AlterarInfoComponente', (componenteNomeInfo, componenteQntInfo) => { 
  cy.request({
    method: "put",
    url: "/v2/produtos/919624/componentes/942094",
    body: {
      "componenteNome": componenteNomeInfo,
      "componenteQuantidade": componenteQntInfo
    },
    headers: {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvaWQiOiIxNjgzMyIsInVzdWFyaW9sb2dpbiI6ImRvcm5lbGFzMTIzIiwidXN1YXJpb25vbWUiOiJqdW5pb3IifQ.kwovN6Pydst9NkXOFHrKTcKTstFe8bUtb767Et-PNPk"}
  })
})

//Comando customizado para remover um componente de um produto.
Cypress.Commands.add('RemoveComponente', () => { 
  cy.request({
    method: "delete",
    url: "/v2/produtos/919624/componentes/942063",
    headers: {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvaWQiOiIxNjgzMyIsInVzdWFyaW9sb2dpbiI6ImRvcm5lbGFzMTIzIiwidXN1YXJpb25vbWUiOiJqdW5pb3IifQ.kwovN6Pydst9NkXOFHrKTcKTstFe8bUtb767Et-PNPk"}
  })
})