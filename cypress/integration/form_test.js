// write tests here
describe('Quotes App', function()
{
    beforeEach(()=>{
        cy.visit('http://localhost:1234')
    })
    const nameInput = () => cy.get('input[name=name]')
const emailInput = () => cy.get('input[name=email]')
const passwordInput = () => cy.get('input[name=password]')
const submitBtn = () => cy.get('button[id"submitBtn"]')
const toppingsInput = () => cy.get('[type="checkbox"]')


// it('sanity check to make sure tests work', ()=>{
//     expect(1+2).to.equal(3)
//     expect(2+2).not.to.equal(5)
//     expect({}).not.to.equal({})
//     expect({}).not.to.eql({})
// })
// it('the proper elements are showing', ()=>{
//     textInput().should('exist')
//     foobarInput().should('not.exist')
//     authorInput().should('exist')
//     submitBtn().should('exist')
//     cancelBtn().should('exist')
//     cy.contains('Submit Quote').should('exist')
//     cy.contains(/submit quote/i).should('exist')
// })
describe('Filling out the inputs and cancelling', () => {
    it('can type in the inputs', () => {
        nameInput()
        .type('Be nice to the CSS expert')
        .should('have.value', 'Be nice to the CSS expert')
    })
    it('can type in the inputs', () => {
        emailInput()
        .type('Be nice to the CSS expert')
        .should('have.value', 'Be nice to the CSS expert')
    })
    it('can type in the inputs', () => {
        passwordInput()
        .type('Be nice to the CSS expert')
        .should('have.value', 'Be nice to the CSS expert')
    })
    it('can select multiple toppings', () => {
        // pepperoniInput()
        // .click()
        // .should('have.value', 'on');
        // extraCheeseInput()
        // .click()
        // .should('have.value', 'on');
        // sausageInput()
        // .click()
        // .should('have.value', 'on');
        // mushroomInput()
        // .click()
        // .should('have.value', 'on');
        toppingsInput().check().should('have.value', 'true')
    })
    it('the submit button enables when both inputs are filled out', () =>{
        authorInput().type('Kenan')
        textInput().type('Have fun')
        submitBtn().should('not.be.disabled')
    })
    it('the cancel button can reset the inputs and disable the submit button', () =>{
    authorInput().type('Kenan')
    textInput().type('Have fun')
    cancelBtn().click()
    textInput().should('have.value', '')
    textInput().should('have.value', '')
    submitBtn().should('be.disabled')
})
}
)
})
