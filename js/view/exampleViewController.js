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
    $("#SideBar").show();
    $("#AllDishes").show();

});

view.Confirm.click(function(){
    $("#specificDish").hide();
    $("#secondHeader").show();
    $("#presentedMenu").show();
    $("#SideBar").hide();
    $("#AllDishes").hide();
    $("#finalMenu").hide();
});

this.refresh = function(){
    view.remove.click(function(){
        
        //var dish = model.getSelectedDish('starter');
        //var dishid = dish.id;
        model.removeDishFromMenu(this.getAttribute("id"));
    });
}

this.refresh();
}