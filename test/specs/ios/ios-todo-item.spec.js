describe('Todo Item', () => {
    it('Create a Todo Item', async () => {

        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Things to do");
        await $('~Create').click();

        // assertion
        await expect(await $("~Things to do")).toBeExisting();

        // Create Todo Item
        await $('~Things to do').click();
        await $('//*[@name="Create item"]').click();
        await $('//*[@value="Title"]').addValue("Buy groceries");
        await $('//*[@value="Due"]').click();
        await $('~Date Picker').click();
        await $('~Monday, October 10').click();
        await $('//XCUIElementTypeWindow[@index=2]').click();
        await $('~Create').click();

        // assertion
        await expect(await $('~Buy groceries')).toBeExisting();
        await expect(await $('~Due Tomorrow')).toBeExisting();

        await driver.pause(2000);

    });
});