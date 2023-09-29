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
let token = Cypress.env('token')

  cy.request({
    method: "Delete",
    url: "/v2/dados",
    headers: {
      token: token
    },
  });
});

//Comando customizado para adicionar um novo produto.
let token = Cypress.env('token')

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
        token: token
      },
    });
  }
);

//Comando customizado para buscar os produtos do usuário.
Cypress.Commands.add("BuscarProdutos", () => {
  let token = Cypress.env('token')

  cy.request({
    method: "Get",
    url: "/v2/produtos",
    headers: {
      token: token
    },
  });
});

//Comando customizado para buscar produtos por id.
Cypress.Commands.add("BuscarProdutosId", () => {
  let token = Cypress.env('token')

  cy.request({
    method: "Get",
    url: "/v2/produtos/919624",
    headers: {
      token: token
    },
  });
});

//Comando customizado para alterar informações de um produtos.
Cypress.Commands.add(
  "Alterarproduto", (produtoNome2, produtoValor2, produtoCor2, componenteNome2, componenteQuantidade2) => {
    let token = Cypress.env('token')

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
        token: token
      },
    });
  }
);

//Comando customizado para remover um produto.
Cypress.Commands.add("Removerproduto",() => {
  let token = Cypress.env('token')

    cy.request({
      method: "Delete",
      url: "/v2/produtos/919615",
      headers: {
        token: token
      },
    });
  }
);

//Comando customizado para adicionar um novo componente ao

Cypress.Commands.add('AdcNovoComponente', (nomeComponente, quantidadeComponente) => { 
  let token = Cypress.env('token')

  cy.request({
    method: "post",
    url: "/v2/produtos/919624/componentes",
    body: {
      "componenteNome": nomeComponente,
      "componenteQuantidade": quantidadeComponente
    },
    headers: {token: token}
  })
})

//Comando customizado para buscar todos os componentes de um produto.
Cypress.Commands.add('BuscarComponentes', () => { 
  let token = Cypress.env('token')

  cy.request({
    method: "get",
    url: "/v2/produtos/919624/componentes",
    headers: {token: token}
  })
})

//Comando customizado para buscar um componente de um produto.
Cypress.Commands.add('buscarUmComponente', () => { 
  let token = Cypress.env('token')

  cy.request({
    method: "get",
    url: "/v2/produtos/919624/componentes/942124",
    headers: {token: token}
  })
})

//Comando customizado para alterar informações de um componente de produto.
Cypress.Commands.add('AlterarInfoComponente', (componenteNomeInfo, componenteQntInfo) => { 
let token = Cypress.env('token')

  cy.request({
    method: "put",
    url: "/v2/produtos/919624/componentes/942094",
    body: {
      "componenteNome": componenteNomeInfo,
      "componenteQuantidade": componenteQntInfo
    },
    headers: {token: token}
  })
})

//Comando customizado para remover um componente de um produto.
Cypress.Commands.add('RemoveComponente', () => { 
  let token = Cypress.env('token')

  cy.request({
    method: "delete",
    url: "/v2/produtos/919624/componentes/942063",
    headers: {token: token}
  })
})