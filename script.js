//your JS code here. If required.
let btn=document.getElementById("incrementBtn");

btn.addEventListener("click",
					 function()
					 {
						 let pele=document.getElementById("counter");
						 let value=pele.textContent;
						 let val=parseInt(value);
						 alert(value);
						 pele.textContent=toString((val+1));
					 })