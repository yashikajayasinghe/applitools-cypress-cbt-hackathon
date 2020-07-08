///<reference types="Cypress">

// Get the browser, viewport and device info from a variable like below or from a file or environment variable.
const browser = "Chrome";
const viewport = "768x700";
const device = "Tablet";


/**
 * A Helper to print the test result in the following format:
 * Task: <Task Number>, Test Name: <Test Name>, DOM Id:: <id>, Browser: <Browser>, Viewport: <Width x Height>, Device<Device type>, Status: <Pass | Fail>
 * 
 * Example: Task: 1, Test Name: Search field is displayed, DOM Id: DIV__customsear__41, Browser: Chrome, Viewport: 1200 x 700, Device: Laptop, Status: Pass
 * 
 * @param task                    int - 1, 2 or 3
 * @param testName.               string - Something meaningful. E.g. 1.1 Search field is displayed
 * @param domId                   string - DOM ID of the element
 * @param comparisonResult        boolean - The result of comparing the "Expected" value and the "Actual" value.
 * @return                        boolean - returns the same comparison result back so that it can be used for further Assertions in the test code.
 */

function hackathonReporter(task, testName, domId, comparisonResult){
    cy.writeFile('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`, { flag: 'a+' });    
 }
 
 function shouldBeVisible(task, testName, domId){
   
     cy.get("body").then($body => {
         if ($body.find(domId).length > 0) {   
         //evaluates as true if button exists at all
             cy.get(domId).then($element => {
             if ($element.is(':visible')){
                 //you get here only if element EXISTS and is VISIBLE
                 hackathonReporter(task, testName, domId, true);
             } else {
                 //you get here only if element EXISTS but is INVISIBLE
                 hackathonReporter(task, testName, domId, false);
             }
             });
         } else {
         //you get here if the element DOESN'T EXIST
         hackathonReporter(task, testName, domId, false);
         }
     });   
      
 }


describe('Task 1 - Cross-Device Elements Test', function() {
     before(()=>{
       cy.visit("https://demo.applitools.com/gridHackathonV1.html");
     });
    //test-1
    it('Site logo should be visible', () => {              
        shouldBeVisible(1, "Site logo is displayed", '#IMG____9');        
    });
    //test-2
    it('Sub menu should be visible', () => {              
        shouldBeVisible(1, "Sub menu item Home is visible", '#LI__submenu__22');        
    });
    //test-3
    it('Search field should be displayed',  () => {
        shouldBeVisible(1, "Search field is displayed", '#DIV__customsear__41');        
    });
    //test-4
    it('Search Icon should be displayed', () => {              
        shouldBeVisible(1, "Search icon is displayed", '#BUTTONsubmit____43');        
    });

    //test-5 
    it('User profile access link should be visiblle', () => {              
        shouldBeVisible(1, "User profile access link is displayed", '#A__accesslink__56');    
    });

    //test-5
    it('Wishlist icon should be visible', () => {              
        shouldBeVisible(1, "Wishlist icon is displayed", '#A__wishlist__52');
    
    });

    //test-6
    it('Sidebar filters should be displayed', () => {              
        shouldBeVisible(1, "Sidebar filters are visible", '#sidebar_filters');
        
    });

    //test-7
    it('Top Banner image should be visible', () => {              
        shouldBeVisible(1, "Search icon bla bla", '#DIV__topbanner__187');
        
    });

    //test-8
    it('Grid view icon should be displayed', () => {              
        shouldBeVisible(1, "Grid view icon is displayed", '#A____201');
        
    });

    //test-9
    it('List view icon should be displayed', () => {              
        shouldBeVisible(1, "List view icon is displayed", '#A____203');
        
    });

    //test-10
    it('Open filters icon should be displayed', () => {              
        shouldBeVisible(1, "Open filters icon is displayed", '#A__openfilter__206');
        
    });

    //test-11
    it('Item grid should be displayed', () => {              
        shouldBeVisible(1, "First item in the Items grid is displayed", '#product_1');
        
    });

    //test-12
    it('Quick access icons for Add to fav, wishlist and cart should be displayed', () => {              
        shouldBeVisible(1, "Add to favourite icon is displayed", '#I__tiheart__225');
        
    });

    //test-13
    it('Footer Quick links section should be displayed', () => {              
        shouldBeVisible(1, "Footer Quick links section is displayed", '#UL____423');
        
    });

    //test-14
    it('Footer Contacts section should be displayed', () => {              
        shouldBeVisible(1, "Footer Contacts section is displayed", '#UL____439');
        
    });

    //test-15
    it('Footer Keep in touch section should be displayed', () => {              
        shouldBeVisible(1, "Footer text box for email is displayed", '#email_newsletter');
        
    });

    //test-16
    it('Footer bottm row should be displayed', () => {              
        shouldBeVisible(1, "Footer language dropdown is displayed", '#SELECTselect-one____460');
        
    });
});