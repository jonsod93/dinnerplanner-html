var MainController = function(model) {
	
var exampleView = new ExampleView($("#exampleView"),model);
window.exampleViewController = new ExampleViewController(exampleView,model);

var dishSelectView = new DishSelectView($("#dishSelectView"),model);
window.dishSelectViewController = new DishSelectViewController(dishSelectView,model);

var selectedDishView = new SelectedDishView($("#selectedDishView"),model);
window.selectedViewController = new SelectedViewController(selectedDishView,model);

var menuView = new MenuView($("#menuView"),model);
window.menuViewController = new MenuViewController(menuView,model);

var finalView = new FinalView($("#finalView"),model);

}