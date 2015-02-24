//ExampleViewController Object constructor
var DishSelectViewController = function(view, model ) {

this.refresh = function (){

	 view.buttons.click(function(){
	    $("#specificDish").show();
	    $("#SideBar").show();
	    $("#AllDishes").hide();
	    model.setCurrentDish(this.getAttribute("id"));

	});
}
 view.dropdown.click(function(){ //Sets the new type of dishes showed
    model.setCurrentType(this.getAttribute("id"));
});
view.search.click(function(){ //Sets the searched word as the value in the serachbar
	model.searched = $("#search").val();
	model.notifyObservers();
	
});
this.refresh();

}