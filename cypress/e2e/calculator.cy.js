describe("Calculator", () => {


  beforeEach(() => {
    cy.visit("http://localhost:3000");
    

  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should have working add operator', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '8');
  });

  it('should have working divide operator', () => {
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '2');


  });

  it('should have working multiply operator', () => {

    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '8');
    

  });

  it('should have working subtract operator', () => {

    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '2');
    

  });

  it('should allow for chain arithmetical operations', () => {

    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();



    cy.get('#operator-equals').click();



    cy.get('.display').should('contain', '8');
    

  });

  it('should be able to handle decimal numbers', () => {
    
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();

    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '0.5');


  })

  it('should be able to handle negative numbers', () => {
    
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();

    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '-1');


  })


  it('should be able to handle large numbers', () => {
    
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();


    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '333');


  })


  it('should return undefined when divided by zero', () => {

    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();

    cy.get(".display").should('contain', 'undefined');


    
  });








})