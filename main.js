    var menutab=[];
    menutab[0]=document.getElementById("position");
	menutab[1]=document.getElementById("friend");
	menutab[2]=document.getElementById("theme");
	menutab[3]=document.getElementById("news");

function ajax(page) {
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function() {
     console.log(this.responseText);
     var data=JSON.parse(oReq.responseText);
     goExec(data);
});
oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/"+page);
oReq.send();
}
	

document.addEventListener("DOMContentLoaded",function(){
	for(var i=0;i<menutab.length;i++){
		menutab[i].addEventListener("click",function(){
		    ajax(i+1);
		    coloring(menutab[i],i);
		});
	}
});
function coloring(tab,i){
     tab.setAttribute('class',"tab selectedTab");
     for(var j=0;j<menutab.length;j++){
     	if(i==j){
     		continue;
     	}else
     	  menutab[j].setAttribute('class',"tab");
     }
}
function goExec(content){

	var title=content.title;
	var body=content.body;
	console.log(body);
	var str = "<ul> <li> <div class='myName'>"+title+
	"</div> <div class='myDesc'>"+body+"</div> </li> </ul>";
	console.log(str);
    var section=document.getElementById("my_position");
    section.innerHTML=str;
}





