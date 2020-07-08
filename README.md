# applitools-cypress-cbt-hackathon

### Applitools Cross Browser Testing Hackathon

#### How to execute Projects:

###### Pre-requisites: 
    1. For all projects: 
        - Install Node (with npm) (https://nodejs.org​)        
        - Install chrome browser (https://www.google.com/chrome/)
    2. For modern test Projects:
        - Create Free Applitools account to get an Applitools API KEY (https://auth.applitools.com/users/login)
        - Add the Applitools API KEY to Environment variavbles. (https://applitools.com/tutorials/cypress.html) 

#### Project: ModernTestsV1

- Run the command  ```npm install``` to import dependencies for the project
- Next to run the tests  ```npm run test```
- Test results can be found in your Applitools account https://eyes.applitools.com/app/test-results/ 
(this project includes the tests to create the baseline images)

#### Project: ModernTestsV2

- run the command ```npm install```
- to run the tests  ```npm run test```
- test results can be found in your Applitools account https://eyes.applitools.com/app/test-results/ 
(this project includes the tests to create the checkpoint images)

#### Project: TraditionalTestsV1

- run the command ```npm install```
- to run the tests  ```npm run test```
- test results will be logged in ```TraditionalTestV1\Traditional-V1-TestResults.txt```

#### Project: TraditionalTestsV2

- run the command ```npm install```
- to run the tests  ```npm run test```
- test results will be logged in ```TraditionalTestV2\Traditional-V2-TestResults.txt```

 ##### Alternatively: to run the projects TraditionalTestsV1 and V2
  - after running ```npm install``` command, then run ``` npm run cypress:open ``` to open the test files in the cypress test runner and manually execute the tests by double clicking on ```HackathonReporter-v*.spec.js```

##### Eyes Batch Results URL:
1. Direct URL to final results: https://eyes.applitools.com/app/test-results/00000251808230371373?accountId=N21qSFxwbU63_711iyOOSA~~&display=collaboration&top=00000251808230371373%282%29

2. Baseline tests: https://eyes.applitools.com/app/test-results/00000251808230607366?accountId=N21qSFxwbU63_711iyOOSA~~&display=details&top=00000251808230371373%282%29


3. Checkpoint tests: https://eyes.applitools.com/app/test-results/00000251808230371373?accountId=N21qSFxwbU63_711iyOOSA~~&display=details&top=00000251808230371373%282%29

#### References:
- Learn cypress: https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io
- Applitools eyes for cypress: https://www.npmjs.com/package/@applitools/eyes-cypress
- Cypress ref: https://docs.cypress.io/api/api/table-of-contents.html
- Cypress viewports: https://docs.w3cub.com/cypress/api/commands/viewport/
- Custom function to check element visibility: https://stackoverflow.com/questions/57737783/cypress-how-to-know-if-element-is-visible-or-not-in-using-if-condition
- Reporter other ref: https://gist.github.com/rajaraodv/152da1053ac101736ce22449aa5dee72#
- Hackathon Instructions: https://applitools.com/cross-browser-testing-hackathon-v20-1-instructions