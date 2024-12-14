describe('Meu Primeiro teste', () => {
    it('Verificar o site do cypress', () => {
        cy.visit('https://www.cypress.io');
        cy.contains('cypress').should('be.visible');
    });
});