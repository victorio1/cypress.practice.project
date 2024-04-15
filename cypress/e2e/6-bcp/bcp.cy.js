describe('template spec', () => {
    it('passes', () => {
        cy.viewport(1280, 720)
        cy.visit('https://www.viabcp.com/')
        cy.wait(3000)

    })
})