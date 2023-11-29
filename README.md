## Cypress basics :tada: :rocket:

## Notes

- All cypress spec files should end with `.cy.js | .cy.ts` in order for cypress to know that these are spec files
- `cy.visit()` visits a particular url on which the tests have to be performed
- `cy.get()` selects all the occurences of an element or a class or an id on the web page
  - Example `cy.get('.class-name)` `cy.get('h1').contains('the text to be searched')`
