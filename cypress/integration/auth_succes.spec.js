
describe('Succesfully log in', () => {
    it("login", () => {
      cy.visit("/login");
    })
  
    it("adds a valid email", () => {
      cy.get('input[type=text]').type('test@cypress.com')
    })
  
    it("adds a password", () => {
      cy.get('input[type=password]').type('testing1')
    })
  
    it("login", () => {
      cy.get('input[type=submit').click();
    })
  
    it("redirects to dashboard", () => {
      cy.url().should('include', '/dashboard');
    })
  })

  describe('Successful Logout', () => {
    it("click the burgermenu", () => {
      cy.get('button').click();
    })
  
    it("clicks logout", () => {
      cy.contains('Logout').click();
    })
  
    it("redirects user to login", () => {
      cy.url().should('include', '/login');
    })
  
    it("cannot access dashboard", () => {
      cy.url().should('include', '/login');
    })
  })