var select = document.getElementById("selectcoders");
var coders = document.getElementsByClassName("coder-js");

select.onchange = function() {
	if (select.value === "generation4") {
		coders[0].classList.add("show");
    coders[0].classList.remove("hide");
		coders[1].classList.remove("show");
		coders[1].classList.add("hide");
		coders[2].classList.remove("show");
		coders[2].classList.add("hide");
	} else if (select.value === "generation5") {
		coders[1].classList.add("show");
    coders[1].classList.remove("hide");
		coders[0].classList.remove("show");
		coders[0].classList.add("hide");
		coders[2].classList.remove("show");
		coders[2].classList.add("hide");
	} else  {
		coders[2].classList.add("show");
    coders[2].classList.remove("hide");
		coders[1].classList.remove("show");
		coders[1].classList.add("hide");
		coders[0].classList.remove("show");
		coders[0].classList.add("hide");
	}
}
