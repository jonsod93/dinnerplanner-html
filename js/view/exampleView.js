//ExampleView Object constructor
var ExampleView = function (container, model) { //This view is for the first and second pages
	$("#SideBar").hide();
    $("#AllDishes").hide();
    $("#specificDish").hide();
    $("#secondHeader").hide();
    $("#presentedMenu").hide();
    $("#finalMenu").hide();
    $(".Loading").hide();
    $(".Error").hide();
	
	//$("#page1").hide();
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
				for (var g=0;g<FullMenu.length;g++){
					var food = FullMenu[g];
					things += '<button id="';
					things += food.RecipeID+'" class="delete"><span class="glyphicon glyphicon-remove"></span></button> '+food.Title.substr(0, 20)+'<br />';
				}
		return things;
		}

		this.dishName.html(this.getName());

	this.remove = container.find(".delete");
	var totalPrice = 0;
		//this.dishPrice.html(model.getPrice(model.getCurrentDish()));
		this.getMoney = function()
		{	//var totalPrice = 0;
			var things = '';
			var FullMenu = model.getFullMenu();

				for (var g=0;g<FullMenu.length;g++){
					var food = FullMenu[g];
					var id = food.RecipeID;
					var singleCost = Math.ceil(model.getPriceDish(id));
					things += singleCost+'</br>';

					totalPrice += singleCost;
				}

			return things;
		}

		this.dishPrice.html(this.getMoney());
		//this.dishName.html(model.getDishName(model.getCurrentDish()));
		this.numberOfGuests.html(model.getNumberOfGuests);
		this.totalPrice.html(totalPrice);

		this.tryShit = function(){ //since the controller doesn't exists yet the first time the view is runned
			try{
				exampleViewController.refresh();
			}
			catch(err){

			}
		}
		this.tryShit();
		
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