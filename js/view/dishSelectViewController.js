//ExampleViewController Object constructor
var DishSelectViewController = function(view, model ) {

this.refresh = function (){

	 view.buttons.click(function(){
	 	
	    $("#page1").hide();
	    $("#specificDish").show();
	    $("#SideBar").show();
	    $("#secondHeader").hide();
	    $("#presentedMenu").hide();
	    $("#finalMenu").hide();
	    $("#AllDishes").hide();
	    model.setCurrentDish(this.getAttribute("id"));

	});
}
 view.dropdown.click(function(){
    model.setCurrentType(this.getAttribute("id"));
});
view.search.click(function(){
	model.searched = $("#search").val();
	model.notifyObservers();
	
});


this.refresh();

}