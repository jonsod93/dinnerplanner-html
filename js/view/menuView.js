//ExampleView Object constructor
var MenuView = function (container, model) { //The view for presenting the menu

		var People = container.find("#numberOfGuestsMenu")
		var ChosenMenu = container.find("#ChosenMenu");

	this.updateView = function(){ //The function called to update everything
		var total = model.getTotalMenuPrice(); 

		this.getMenu = function(){ //Gets the menu that is currently selected
			
			var stuff = '';
			var menu = model.getFullMenu();
			var menuList = [];

			if('starter' in menu){
				menuList.push(model.getSelectedDish('starter'));
			}
			if('main' in menu){
				menuList.push(model.getSelectedDish('main'));
			}
			if('dessert' in menu){
				menuList.push(model.getSelectedDish('dessert'));
			}

			stuff += "<div class='col-md-3'></div>"

			for (l=0;l<menuList.length;l++){ //Goes through the menuList to get all the dishes and present them
					var dish = menuList[l];
					var price = model.getPrice(dish.id);
					stuff += "<div class='col-md-2'><center><img src=images/"+dish.image+' width=150px height=150px"><br/><h4>';
			  		stuff += dish.name;
			  		stuff += "</br>"+price+" SEK</h4>";
			  		stuff += '</center></div>';
		  	}
			stuff += "<div class='col-md-12'><center><h3>Total: "+total+" SEK</h3>";
			stuff+= "<button id='printing' class='btn btn-default' style='background:#428bca;'>Print Full Recipe</button></center></div>";
		  	return stuff; //Returns the string "stuff" that contains the html code
		}
		People.html(model.getNumberOfGuests());
		ChosenMenu.html(this.getMenu);
		this.printing = container.find("#printing");


		this.tryShit = function(){ //since the controller doesn't exists yet the first time the view is runned
			try{
				menuViewController.refresh();
			}
			catch(err){

			}
		}
		this.tryShit();
	}
	this.back = container.find("#back");
	this.updateView();
 	model.addObserver(this);
 
}