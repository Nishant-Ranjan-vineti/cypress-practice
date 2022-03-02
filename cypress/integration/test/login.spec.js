/// <reference types="cypress" />

describe('launch the website', () => {


    it('navigate to home page', () => {
   
        cy.visit('http://automationpractice.com')
        
        cy.get('.login').click();

        cy.contains('Sign in')

        cy.get('#email').click().type('cepegoc138@vapaka.com')
        cy.get('#passwd').click().type('Pa$$w0rd!')
        cy.get('#SubmitLogin > span').click()
    
    })

    it('verify elements on my account page', () => {
        cy.get('.logo')
        cy.get('#search_query_top')
        cy.get('[title="View my shopping cart"]')
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]')
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul')
        cy.get('.sf-menu > :nth-child(3) > a')
        cy.get('.home')
        cy.get('.navigation_page').should('contain', 'My account')
        cy.get('.page-heading').contains('MY ACCOUNT')
        cy.get('.info-account').contains('Welcome to your account. Here you can manage all of your personal information and orders.')
    })
})