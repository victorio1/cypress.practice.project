describe('template spec', () => {
    it('passes', () => {
      cy.viewport(1280, 720)
      cy.visit('https://www.falabella.com.pe/falabella-pe')
      cy.wait(3000)

    })
  })