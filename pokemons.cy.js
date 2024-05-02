describe('Покупка аватара', function () {                               
    it('e2e тест на покупку нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.me/login');                          
         cy.get('input[type="email"]').type('dmitrrr84@yandex.ru');      
         cy.get('input[type="password"]').type('999666TpV');    
         cy.get('button[type="submit"]').click();                        
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get(':nth-child(1) > .shop__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4444 4444 4444 4448');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Dmitry Kazin');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');

 });
})