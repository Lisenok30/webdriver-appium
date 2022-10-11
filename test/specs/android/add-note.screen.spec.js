const AddNoteScreen = require("../../screenobjects/android/add-note.screen");


describe('Add Notes', () => {
    it('Skip tutorial', async () => {

    // click skip button     
    await AddNoteScreen.skipBtn.click();

    //assertion
    await expect (AddNoteScreen.addNoteText).toBeDisplayed();
    });

    it('Add a note, save changes & verify note', async () => {
        await AddNoteScreen.addNoteText.click();
        await AddNoteScreen.textOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();

        // add note title
        await AddNoteScreen.noteTitle.addValue("My Anime List");

        // add note body
        await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

        // save the changes
        await AddNoteScreen.saveNote();

        // assertion
        await expect (AddNoteScreen.editBtn).toBeDisplayed();
        await expect (AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
        
    });
});