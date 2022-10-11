describe('Android Element Tests', async () =>{
    it('Find element by accesibility id', async () =>{
      // find element by accessibility id
    const appOption = await $('~App');

      //click on element
      await appOption.click();

      // assertion  
      const actionBar = await $('~Action Bar');
      await expect(actionBar).toBeExisting();
    })

    it('Find element by class name', async () => {
      // find element my class name
      const className = await $('android.widget.TextView');

      console.log(await className.getText());

      // Assertion

      await expect(className).toHaveText("API Demos");
    
    });

    it('Find element by xpath', async () => {

      // find element by xpath (//tagname[@attribute=value])

      await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    
    //find by resourceId

      await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

      //find by text

      await $('//android.widget.TextView[@text="Command two"]').click();

      //find by class

      const textAssertion = await $('//android.widget.TextView');
      await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });

  it('find elements by UIAutomator', async () => {
    // find by text contains

    await $('android=new UiSelector().textContains("App")').click();
  });

  it('find multiple elements', async() => {

    // find multiple elements
    const expectedList = [
      'API Demos', "Access'ibility",'Accessibility', 
      'Animation', 'App', 'Content', 'Graphics', 'Media',
      'NFC', 'OS',
      'Preference', 'Text',
      'Views'
    ]

    const actualList = []

    const textList = await $$('android.widget.TextView');

    // loop through the text
    for (const element of textList){
      actualList.push(await element.getText());
    }
    // assert the list

    await expect(actualList).toEqual(expectedList);

  });

  it.only('Working with text field', async () => {

    // access the auto complete screen
    await $('~Views').click();
    await $('//*[@text="Auto Complete"]').click();
    await $('//*[@content-desc="1. Screen Top"]').click();

    // enter the country name
    const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
    await textField.addValue('Canada');

    //verify the country name
    await expect(textField).toHaveText('Canada');

  });

});
