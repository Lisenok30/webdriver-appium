const ItemScreen = require("../../screenobjects/ios/item.screen").default;
const ListScreen = require("../../screenobjects/ios/list.screen").default;

describe('Todo Item', () => {
        before( async() => {
            // Create TODO List
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do today");
        await ListScreen.createBtn.click();
        await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();
        await ListScreen.listNameField("Things to do today").click();
    });

    beforeEach(async () => {

        console.log('BEFORE EACH HOOK!');
    });

    it('Create a Todo Item', async () => {
        // Create Todo Item
       
        await ItemScreen.createItem.click();
        await ItemScreen.title.addValue("Buy groceries");
        await ItemScreen.dueDate.click();
        await ItemScreen.datePicker.click();
        await ItemScreen.secondWindow.click();
        await ItemScreen.createBtn.click();

        // assertion
        await expect(await ItemScreen.accesibId('Buy groceries')).toBeExisting();
        await expect(await ItemScreen.accesibId('No due date')).toBeExisting();
        await driver.pause(2000);
    });
    it('Edit a to do item', async () =>{

      });
    });