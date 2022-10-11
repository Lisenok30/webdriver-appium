const AddNoteScreen = require("./add-note.screen");

class EditNoteScreen {
    get firstNote () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreIcon (){
        return $('~More');
    }

    get deleteOption (){
        return $('//*[@text="Delete"]');
    }

    get navIcon (){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCan (){
        return $('//*[@text="Trash Can"]');
    }

    async skipTutorial() {
        // click skip button     
    await AddNoteScreen.skipBtn.click();

    //assertion
    await expect (AddNoteScreen.addNoteText).toBeDisplayed();
    }

    async addNoteAndSaveNote(noteTitle, noteBody){

        await AddNoteScreen.addNoteText.click();
        await AddNoteScreen.textOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();

        // add note title
        await AddNoteScreen.noteTitle.addValue(noteTitle);

        // add note body
        await AddNoteScreen.noteBody.addValue(noteBody);

        // save the changes
        await AddNoteScreen.saveNote();

        // assertion
        await expect (AddNoteScreen.editBtn).toBeDisplayed();
        await expect (AddNoteScreen.viewNote).toHaveText(noteBody);
    }
}

module.exports = new EditNoteScreen();
