
describe('template spec', () => {
    it('passes', () => {
        cy.viewport(1280, 720)
        cy.visit('https://www.bancolombia.com/personas')
        cy.wait(3000)

    })
})