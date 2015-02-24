//ExampleViewController Object constructor
var MenuViewController = function(view, model ) {

this.refresh = function (){ //This function is needed for the buttons that are generated in the view

	view.printing.click(function(){ //Goes to the final page
	    $("#presentedMenu").hide();
	    $("#finalMenu").show();

	});
}
this.refresh();

 view.back.click(function(){ //Goes back to the second page so you can edit the dinnerparty
 	$("#secondHeader").hide();
    $("#presentedMenu").hide();
    $("#SideBar").show();
    $("#AllDishes").show();

});

}