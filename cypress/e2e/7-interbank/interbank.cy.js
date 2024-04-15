describe('template spec', () => {
    it('passes', () => {
        cy.viewport(1280, 720)
        cy.visit('https://interbank.pe/')
        cy.wait(3000)

    })
})