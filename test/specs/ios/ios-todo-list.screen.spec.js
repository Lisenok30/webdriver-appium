const ListScreen = require("../../screenobjects/ios/list.screen").default;

describe('Todo List', () => {
    it('Create a Todo list', async () => {

        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do today");
        await ListScreen.createBtn.click();

        // assertion
        await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();

        await driver.pause(2000);

    });
});