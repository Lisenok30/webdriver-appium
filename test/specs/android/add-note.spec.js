
describe('Add Notes', () => {
    it('Skip tutorial', async () => {
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

    //assertion
    await expect ($('//*[@text="Add note"]')).toBeDisplayed();

    });

    it('Add a note, save changes & verify note', async () => {

        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        .addValue("Fave Anime List");

        // add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        .addValue("Naruto\nOnePiece\nAOT");

        // save the changes

        await driver.back();
        await driver.back();

        // assertion
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();

        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOnePiece\nAOT");
        
    });
});