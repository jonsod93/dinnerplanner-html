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
    $("#SideBar #AllDishes").show();

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
view.removeMain.click(function(){
    var FullMenu = model.getFullMenu();
    var dishid = FullMenu.main;
    $("#page1").show();
    $("#specificDish").hide();
    $("#secondHeader").show();
    $("#presentedMenu").show();
    $("#finalMenu").hide();
    $("#SideBar").hide();
    $("#AllDishes").hide();
    model.removeDishFromMenu(dishid);
});
}