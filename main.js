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
	menutab[0].addEventListener("click",function(){
	  ajax(1);
	  coloring(menutab[0],0);
	  
	});
	menutab[1].addEventListener("click",function(){
	  ajax(2);
	  coloring(menutab[1],1);
	});
	
	menutab[2].addEventListener("click",function(){
	  ajax(3);
	  coloring(menutab[2],2);
	});
	menutab[3].addEventListener("click",function(){
	  ajax(4);
	  coloring(menutab[3],3);
	});

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





