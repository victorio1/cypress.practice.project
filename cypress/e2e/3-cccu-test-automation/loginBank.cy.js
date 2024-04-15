describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1280, 720)
    cy.visit('https://stgdigital.calcoastcu.org/apps/CCOLB/#_frmLogin')
    cy.wait(3000)
    cy.get('#frmLogin_main_flxUserName').type('TOH5122')
    cy.get('#frmLogin_main_flxPassword').type('Password$01')
    cy.get('#frmLogin_main_btnLogin').click()
  })
})