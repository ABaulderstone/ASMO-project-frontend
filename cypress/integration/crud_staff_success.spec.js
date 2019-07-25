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

  describe('Create Staff', () => {
    it("login", () => {
      cy.visit("/staff");
    })
  
    it("adds a valid name", () => {
      cy.get('input[type=text]').type('John')
    })

    it("Click create", () => {
        cy.get('input[type=submit]').click();
      })
      
    it("User appears", () => {
        cy.contains("John");
      });
 
  })

  describe('Edit Staff', () => {
    it("click edit", () => {
    
        cy.get(".card:first").within(() => {
            cy.get('a').click();
          });
    });
    
    it("adds a valid name", () => {
        cy.get('input[type=text]').type('Max')
      })
    it("Click create", () => {
        cy.get('input[type=submit]').click();
      })
    it("User appears", () => {
        cy.contains("Max");
      });

  });

  describe('Delete Staff', () => {
    it("click edit", () => {
    
        cy.get(".card:first").within(() => {
            cy.get('a').click();
          });
    });
    
  
    it("Click Delete", () => {
        cy.get('.ui.red.button').click();
      })
      it("redirects to staff", () => {
        cy.url().should('include', '/staff');
      })
    

  });

