
import { faker } from '@faker-js/faker';

describe('Envio de Formulário de Cadastro', () => {
  let nome, email, senha, genero, endereco, dataNascimento, dia, mes, ano, dataFormatada,telefone;

  const estadosECidades = {
    'Acre': ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira', 'Tarauacá', 'Feijó', 'Brasiléia'],
    'Alagoas': ['Maceió', 'Arapiraca', 'Palmeira dos Índios', 'Amajari', 'Delmiro Gouveia', 'Penedo'],
    'Amapá': ['Macapá', 'Santana', 'Oiapoque', 'Laranjal do Jari', 'Mazagão', 'Porto Grande'],
    'Amazonas': ['Manaus', 'Parintins', 'Itacoatiara', 'Manacapuru', 'Tabatinga', 'Tefé'],
    'Bahia': ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Itabuna', 'Juazeiro', 'Camaçari'],
    'Ceará': ['Fortaleza', 'Juazeiro do Norte', 'Sobral', 'Caucaia', 'Crato', 'Maracanaú'],
    'São Paulo': ['São Paulo', 'Campinas', 'Santos', 'Sorocaba', 'Ribeirão Preto', 'São Bernardo do Campo'],
    'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Petrópolis', 'Nova Iguaçu', 'Campos dos Goytacazes', 'Duque de Caxias'],
    'Paraná': ['Curitiba', 'Londrina', 'Maringá', 'Foz do Iguaçu', 'Ponta Grossa', 'Cascavel'],
    'Pernambuco': ['Recife', 'Olinda', 'Caruaru', 'Petrolina', 'Jaboatão dos Guararapes', 'Garanhuns'],
    'Goiás': ['Goiânia', 'Anápolis', 'Rio Verde', 'Aparecida de Goiânia', 'Luziânia', 'Catalão'],
    'Minas Gerais': ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora', 'Contagem', 'Betim', 'Montes Claros'],
    'Espírito Santo': ['Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Linhares', 'Guarapari']
  };

  beforeEach(() => {
    cy.visit('/cadastro-simples.html');
  });

  it('Deve exibir o formulário corretamente', () => {
    cy.contains('Nome').should('be.visible');
  });

  it('Submeter formulario', () => {
    nome = faker.person.fullName()
    email = faker.internet.email()
    senha = faker.internet.password()
    genero = Cypress._.sample(['Masculino', 'Feminino', 'Outro']);
    endereco = faker.location.streetAddress();
    dataNascimento = faker.date.birthdate({ min: 18, max: 90, mode: 'age' });
    telefone = faker.phone.number('9#########').replace(/\D/g, '');
    dia = new Intl.DateTimeFormat('pt-BR').format(dataNascimento).split('/')[0];
    mes = new Intl.DateTimeFormat('pt-BR').format(dataNascimento).split('/')[1];
    ano = new Intl.DateTimeFormat('pt-BR').format(dataNascimento).split('/')[2];
    dataFormatada = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
    const estado = Cypress._.sample(Object.keys(estadosECidades)); 
    const cidade = Cypress._.sample(estadosECidades[estado]);

    cy.get('#name').type(nome);
    cy.get('#email').type(email);
    cy.get('#password').type(senha);
    cy.get('#gender').select(genero);
    cy.get('#address').type(endereco);
    cy.get('#phone').type(telefone);
    cy.get('#birthdate').type(dataFormatada);
    cy.get('#state').select(estado);
    cy.get('#city').select(cidade);
    cy.get('#terms').click(); 
    cy.wait(1000);
    cy.get('#cadastroForm button[type="submit"]').click();
    cy.contains('Cadastro realizado com sucesso!', { timeout: 10000 }).should('be.visible');
  });
});
