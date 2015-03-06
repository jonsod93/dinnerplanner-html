//ExampleViewController Object constructor
var SelectedViewController = function(view, model ) {

this.refresh = function(){
 view.backsies.click(function(){
 	
    $("#specificDish").hide();
    $("#SideBar").show();
    $("#AllDishes").show();

});

view.confirmed.click(function(){
 	alert("Dish added to menu!");
 	model.addDishToMenu(model.getOneRecipe().RecipeID);
 	//model.notify();
    $("#specificDish").hide();
    $("#SideBar").show();
    $("#AllDishes").show();
    console.log(model.getFullMenu());

});
}

}