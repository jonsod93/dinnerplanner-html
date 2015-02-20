//ExampleViewController Object constructor
var SelectedViewController = function(view, model ) {

 view.backsies.click(function(){
 	
    $("#specificDish").hide();
    $("#SideBar").show();
    $("#AllDishes").show();

});

view.confirmed.click(function(){
 	alert("Dish added to menu!");
 	model.addDishToMenu(model.getCurrentDish());
 	model.notifyObservers();
    $("#specificDish").hide();
    $("#SideBar").show();
    $("#AllDishes").show();

});


}