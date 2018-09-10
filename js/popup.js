	var link = document.querySelector(".button-appointment");
	var popup = document.querySelector(".modal-search");
	var fieldCheckIn = popup.querySelector("[name=date-check-in]");
	var fieldCheckOut = popup.querySelector("[name=date-check-out]");
	var fieldQuantityAdult = popup.querySelector("[name=quantity-adult]");
	var fieldQuantityChildren = popup.querySelector("[name=quantity-children]");
	var form = popup.querySelector("form");
			
	link.addEventListener("click", function (evt) {
		evt.preventDefault(); 
		popup.classList.toggle("modal-show");
		popup.classList.remove("modal-error");
		fieldCheckIn.focus();
	});

	form.addEventListener("submit", function(evt) {
		if(!fieldCheckIn.value || !fieldCheckOut.value || !fieldQuantityAdult.value || !fieldQuantityChildren.value) {
			evt.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
		}
	});

	window.addEventListener("keydown", function(evt){
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
				popup.classList.remove("modal-error");
			}
		}
	});

	function plusCount(callLink){
		var idName=callLink.getAttribute("href");
			
		document.querySelector(idName).value<15 && document.querySelector(idName).value++;
	};
	
	function minusCount(callLink){
		var idName=callLink.getAttribute("href");
		
		document.querySelector(idName).value>0 && document.querySelector(idName).value--;
	};