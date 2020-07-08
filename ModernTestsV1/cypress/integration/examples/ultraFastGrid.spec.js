///<reference types="Cypress">

/**
 * The baseline is a unique combination of the following parameters:
    -OS
    -Viewport Size
    -Browser
    -Application name
    -Test name
 */

describe('Cross Browser Testing Hakathon', ()=>{
    beforeEach(()=>{
        cy.visit('/gridHackathonV1.html');
    });
    afterEach(()=>{
        cy.eyesClose();
    });    
    
    it('Cross-Device Elements Test v1', ()=>{
        
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Task 1'    
           
        });
        
        cy.eyesCheckWindow({
            tag: "Items List Only",
            target: 'window',
            fully: true
        });

       /**  cy.get('.grid_item').first().trigger('mouseover').then(()=>{
            cy.wait(3000);
            cy.eyesCheckWindow({
                tag: "Items List with toggle icons",
                target: 'window',
                fully: true
            });
        }); */
        
    });
    
    it('Filter Results V1', ()=>{
        
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Task 2'            
        });

        cy.get('ul.clearfix li a.open_filters').click().then(()=>{
        
            cy.get('#filter_col div#sidebar_filters div#filter_1 ul li').first().click().then(()=>{
                
                cy.get('button#filterBtn').click().then(()=>{

                    cy.eyesCheckWindow({
                        tag: "Items List with toggle icons",
                        target: 'region',
                        selector: '#product_grid'
                    });

                });
                
            });  
        });   
        
    });     
    
    it('Product Details test v1', ()=>{
         cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Task 3'
         });
                
        cy.get('.grid_item').first().click().then(()=>{
            cy.eyesCheckWindow({
                tag: "Product Details page",
                target: 'window',
                fully: true
            });

        });        
        

    });   

    
});