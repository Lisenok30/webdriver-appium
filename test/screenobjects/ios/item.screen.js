class ItemScreen {

   get createItem(){
    return $('//*[@name="Create item"]');
   }

   get title(){
    return $('//*[@value="Title"]');
   }

   get dueDate(){
    return $('//*[@value="Due"]');
   }

   get datePicker(){
    return $('~Date Picker');
   }

   get createBtn(){
    return $('~Create');
   }

   get secondWindow(){
    return $('//XCUIElementTypeWindow[@index=2]');
   }

    accesibId(name) {
        return $(`~${name}`);

   }
}

export default new ItemScreen();
//export default new ItemScreen();