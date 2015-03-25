$(document).ready(function(){
	
	$("#menu").mmenu();


	$('.annotations').bind("touchstart click" , function(){
		$('#menu').trigger("close.mm");
		mflyCommands.showAnnotations(500,500,500,500);
	})

	$('.second-screen').bind("touchstart click" , function(){
		$('#menu').trigger("close.mm");
		mflyCommands.showSecondScreen();
	})

	$('.collections').bind("touchstart click" , function(){
		$('#menu').trigger("close.mm");
		mflyCommands.showAddToCollection("f7e484d0e3ee4e87901ee34fe2fcbe1aproduct163510", 1, 1, 1, 1);
	})

	$('.email').bind("touchstart click" , function(){
		$('#menu').trigger("close.mm");
		mflyCommands.email("f7e484d0e3ee4e87901ee34fe2fcbe1aproduct163510");
	})

	// Ticketed to add API call for comments and notes

	// $('.comments').bind("touchstart click" , function(){
	// 	$('#menu').trigger("close.mm");
	// })

	// $('.notes').bind("touchstart click" , function(){
	// 	$('#menu').trigger("close.mm");
	// })

	$('.previous').bind("touchstart click", function(){
		mflyCommands.previous();
	})

	$('.next').bind("touchstart click", function(){
		mflyCommands.next();
	})

	$('.close-btn').bind("touchstart click" , function(){
		$('#menu').trigger("close.mm");
		console.log('closed');
		mflyCommands.close();
	})


});