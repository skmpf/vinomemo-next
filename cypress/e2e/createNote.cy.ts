import newNote from "../fixtures/note.json";

const NOTE_NAME = `${newNote.information.name} ${Date.now()}`;

beforeEach(() => {
  cy.login("cypress@vinomemo.com", "cypress123");
});

describe("Create note page", () => {
  it("creates a note", () => {
    cy.visit("/notes");
    cy.get("[data-cy=create-note]").click();

    // Fill in the note information using the fixture data
    cy.get("#name").type(NOTE_NAME);
    cy.get("#country").type(newNote.information.country);
    cy.get("#region").type(newNote.information.region);
    cy.get("#grapes").type(newNote.information.grapes);
    cy.get("#producer").type(newNote.information.producer);
    cy.get("#vintage").type(newNote.information.vintage.toString());
    cy.get("#alcohol").select(newNote.information.alcohol);

    // Fill in the appearance section
    cy.get(
      `[data-cy="appearance.intensity.${newNote.appearance.intensity}"]`
    ).click();
    cy.get(`#${newNote.appearance.color}`).click();
    cy.get(`#${newNote.appearance.variant}`).click();

    // Fill in the nose section
    cy.get(`[data-cy="nose.intensity.${newNote.nose.intensity}"]`).click();
    cy.get("#aromas").type(newNote.nose.aromas);

    // Fill in the palate section
    cy.get(`[data-cy="palate.sweetness.${newNote.palate.sweetness}"]`).click();
    cy.get(`[data-cy="palate.acidity.${newNote.palate.acidity}"]`).click();
    cy.get(`[data-cy="palate.tannin.${newNote.palate.tannin}"]`).click();
    cy.get(`[data-cy="palate.alcohol.${newNote.palate.alcohol}"]`).click();
    cy.get(`[data-cy="palate.body.${newNote.palate.body}"]`).click();
    cy.get(`[data-cy="palate.intensity.${newNote.palate.intensity}"]`).click();
    cy.get("#flavors").type(newNote.palate.flavors);
    cy.get(`[data-cy="palate.finish.${newNote.palate.finish}"]`).click();

    // Fill in the conclusions section
    cy.get("#quality").select(newNote.conclusions.quality);
    cy.get("#comments").type(newNote.conclusions.comments);

    // Submit the form
    cy.get("button[type=submit]").click();

    // Assert that the note has been created successfully
    cy.contains(
      "Your note was successfully saved, you can now view it in your notes."
    );
    cy.url().should("equal", Cypress.config().baseUrl + "/notes");

    // Check that the note is in the list
    cy.contains(NOTE_NAME).click();

    // Check information section
    cy.contains("Name").next().should("contain", NOTE_NAME);
    cy.contains("Country")
      .next()
      .should("contain", newNote.information.country);
    cy.contains("Region").next().should("contain", newNote.information.region);
    cy.contains("Grapes").next().should("contain", newNote.information.grapes);
    cy.contains("Producer")
      .next()
      .should("contain", newNote.information.producer);
    cy.contains("Vintage")
      .next()
      .should("contain", newNote.information.vintage);
    cy.contains("ABV").next().should("contain", newNote.information.alcohol);

    // Check appearance section
    cy.contains("Intensity")
      .next()
      .should("contain", newNote.appearance.intensity);
    cy.contains("Color")
      .next()
      .should(
        "contain",
        `${newNote.appearance.color}: ${newNote.appearance.variant}`
      );

    // Check nose section
    cy.contains("Intensity").next().should("contain", newNote.nose.intensity);
    cy.contains("Aroma characteristics")
      .next()
      .should("contain", newNote.nose.aromas);

    // Check palate section
    cy.contains("Sweetness").next().should("contain", newNote.palate.sweetness);
    cy.contains("Acidity").next().should("contain", newNote.palate.acidity);
    cy.contains("Tannin").next().should("contain", newNote.palate.tannin);
    cy.contains("Alcohol").next().should("contain", newNote.palate.alcohol);
    cy.contains("Body").next().should("contain", newNote.palate.body);
    cy.contains("Flavor intesity")
      .next()
      .should("contain", newNote.palate.intensity);
    cy.contains("Flavor characteristics")
      .next()
      .should("contain", newNote.palate.flavors);
    cy.contains("Finish").next().should("contain", newNote.palate.finish);

    // Check conclusions section
    cy.contains("Quality")
      .next()
      .should("contain", newNote.conclusions.quality);
    cy.contains("Comments")
      .next()
      .should("contain", newNote.conclusions.comments);
  });
});
