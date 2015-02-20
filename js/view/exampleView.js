//ExampleView Object constructor
var ExampleView = function (container, model) {
	

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.dishPrice = container.find("#dishPrice");
	this.totalPrice = container.find("#totalPrice");
	this.dishName = container.find("#dishName");
	this.Dishes = container.find("#Dishes");
	this.Start = container.find("#Start");
	this.Confirm = container.find("#Confirm");
	

	this.updateView = function(){
		this.getName = function()
		{	

			var things = '';
			var FullMenu = model.getFullMenu();
		if('starter' in FullMenu){
			var startid = FullMenu.starter;
			var starter = model.getDish(startid);
			//things += starter.name;
			things += '<button id="removeStarter" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-remove"></span></button> '+starter.name.substr(0, 30)+'<br />';
		}
		if('main' in FullMenu){
			var mainid = FullMenu.main;
			var main = model.getDish(mainid);
			things += '<button class="removeMain btn btn-default btn-xs"><span class="glyphicon glyphicon-remove"></span></button> '+main.name.substr(0, 30)+'<br />';
		}
		if('dessert' in FullMenu){
			var dessertid = FullMenu.dessert;
			var dessert = model.getDish(dessertid);
			things += '<button id="removeDessert" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-remove"></span></button> '+dessert.name.substr(0, 30)+'<br />';
		}
		return things;
	}

		this.dishName.html(this.getName());

	this.removeStarter = container.find("#removeStarter");
	this.removeMain = container.find("#removeMain");
	this.removeDessert = container.find("#removeDessert");
		//this.dishPrice.html(model.getPrice(model.getCurrentDish()));
		this.getMoney = function()
		{	

			var things = '';
			var FullMenu = model.getFullMenu();
		if('starter' in FullMenu){
			var startid = FullMenu.starter;
			var startprice = model.getPrice(startid);
			//things += starter.name;
			things += startprice+'</br>';
		}
		if('main' in FullMenu){
			var mainid = FullMenu.main;
			var mainprice = model.getPrice(mainid);
			things += mainprice+'</br>';
		}
		if('dessert' in FullMenu){
			var dessertid = FullMenu.dessert;
			var dessertprice = model.getPrice(dessertid);
			things += dessertprice+'</br>';
		}
		return things;
	}

		this.dishPrice.html(this.getMoney());
		//this.dishName.html(model.getDishName(model.getCurrentDish()));
		this.numberOfGuests.html(model.getNumberOfGuests);
		this.totalPrice.html(model.getTotalMenuPrice());

	}

	this.updateView();
 	model.addObserver(this);
}
		//	for (h=0;h<FullMenu.length();h++){
		//		var types = FullMenu[h];
		//		alert(FullMenu.starter);
		//		var current = model.getSelectedDish(types);
		//		things += '<div class="row"><div class="col-md-12">'+model.getDishName(current);
		//		things += " "+model.getPrice(current)+'</div></div>';
		//	}
		//	alert(FullMenu[0]);
		//	return things;
		//}
		//alert("2");