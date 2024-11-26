//your JS code here. If required.

document.addEventListener('DOMContentLoaded',(event)=>

	{
		let btn=document.getElementById("incrementBtn");

btn.addEventListener("click",
					 function()
					 {
						 let pele=document.getElementById("counter");
						 let value=pele.textContent;
						 let val=parseInt(value);
						 alert(value);
						 pele.textContent=(val+1).toString();
					 })
	}
	);
