$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);
	var dishSelectView = new DishSelectView($("#dishSelectView"),model);
	var selectedDishView = new SelectedDishView($("#selectedDishView"),model);
	var menuView = new MenuView($("#menuView"),model);
	var finalView = new FinalView($("#finalView"),model);
	var exampleViewController = new ExampleViewController(exampleView,model);

});