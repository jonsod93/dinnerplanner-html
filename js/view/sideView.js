//ExampleView Object constructor
var SideView = function (container, model) {
	

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var Side = container.find("#Side");

//	this.numberOfGuests = container.find("#numberOfGuests");
//	this.plusButton = container.find("#plusGuest");
//	this.minusButton = container.find("#minusGuest");
//	this.dishPrice = container.find("#dishPrice");
//	this.totalPrice = container.find("#totalPrice");
//	this.dishName = container.find("#dishName");
//	this.Dishes = container.find("#Dishes");



	var SideMenu = function (){
		var sideBar = '';

		sideBar += '<div class="col-md-12" style="border-style:solid; background:#A6CAFC;"><h4>My Dinner</h4>';
  		sideBar += '<div>Guests: <button class="btn btn-default disabled" type="submit"><span id="numberOfGuests"></span></button>';
		sideBar += '<div class="btn-group-vertical">';
		sideBar += '<button id="plusGuest" class="btn btn-xs"><span class="glyphicon glyphicon-chevron-up"></span></button>';
        sideBar += '<button id="minusGuest" class="btn btn-xs"><span class="glyphicon glyphicon-chevron-down"></span></button>';
		sideBar += '</div>';
		sideBar += '</div>';
		sideBar += '<center>';
		sideBar += '<div class="row" style="margin-top:5%; margin-bottom:5%;">';
		sideBar += '<div class="col-md-12" style="background:lightgray; border-style:solid;">Dish Name______Cost</div>';
		sideBar += '</div>';
		sideBar += '<div class="row">';
		sideBar += '<div class="col-md-10 col-md-offset-1" style="border-style:solid; background:#B9EAFB;">';
		sideBar += '<span id="dishName" ></span><span id="dishPrice" style="float:right;"></span>';
		sideBar += '</div></div>';
		sideBar += 'SEK <span id="totalPrice" style="float:right; margin-right:23px;"></span>';
		sideBar += '<div class="row" style="margin-top:10%; margin-bottom:185%;">';
		sideBar += '<div class="col-md-10 col-md-offset-1" style="background:#428bca; border-style:solid;">Confirm dinner</div>';
		sideBar += '</div></center></div>';

		return sideBar;

	};

//	model.addDishToMenu(1);
//	this.dishPrice.html(model.getPrice(1));
//	this.dishName.html(model.getDishName(1));
//	this.numberOfGuests.html(model.getNumberOfGuests);
//	this.totalPrice.html(model.getTotalMenuPrice());
	Side.html("APA");
 
}