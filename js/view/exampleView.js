//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.dishPrice = container.find("#dishPrice");
	this.dishName = container.find("#dishName");
	this.Dishes = container.find("#Dishes");

	this.dishPrice.html(model.getPrice(1));
	this.dishName.html(model.getDishName(1));
	this.numberOfGuests.html(model.getNumberOfGuests);
 
}