//ExampleViewController Object constructor
var ExampleViewController = function(view, model ) {
 
 view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });
 
 view.minusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });

 view.Start.click(function(){
    $("#page1").hide();
    $("#specificDish").hide();
    $("#secondHeader").hide();
    $("#presentedMenu").hide();
    $("#finalMenu").hide();
    $("#SideBar").show();
    $("#AllDishes").show();

});

view.Confirm.click(function(){
    $("#page1").hide();
    $("#specificDish").hide();
    $("#secondHeader").show();
    $("#presentedMenu").show();
    $("#finalMenu").hide();
    $("#SideBar").hide();
    $("#AllDishes").hide();
});

this.refresh = function(){
    view.removeStarter.click(function(){
        
        var dish = model.getSelectedDish('starter');
        var dishid = dish.id;
        model.removeDishFromMenu(dishid);
    });
    view.removeMain.click(function(){
        
        var dish = model.getSelectedDish('main');
        var dishid = dish.id;
        model.removeDishFromMenu(dishid);
    });
    view.removeDessert.click(function(){
        
        var dish = model.getSelectedDish('dessert');
        var dishid = dish.id;
        model.removeDishFromMenu(dishid);
    });
}

this.refresh();
}