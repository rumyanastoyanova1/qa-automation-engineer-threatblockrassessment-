describe("Assessment", () => {
  beforeEach(() => {
    //1. Load the page: https://www.wnba.com/standings/
    cy.visit("/standings/");
    cy.viewport(1280, 720);
  });

  

  it("Print the teams for season to 2018", () => {
    //2. Set the season to 2018
    cy.get('[name="Season"]').select("2018", { force: true });

    //3. Assert that the number of table records is 12
    cy.get("table tbody tr").should("have.length", 12);

    //4. Iterate over the table and print the team names in column 1 using cypress log API
    cy.wait(1000);
    cy.get("table tbody tr").each(($row, index) => {
      const teamName = $row.find("td:nth-child(1)").text().trim();
      cy.log(`Row ${index + 1} - Team Name: ${teamName}`);
    });
  });
});
