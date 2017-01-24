function addMouseupEvent(){
	var mydiv=document.querySelector("#area");
	console.log(mydiv);

	mydiv.addEventListener("mouseup",show);
	//mydiv.addEventListener("mousedown",show);
	function show(evt){
		var url="http://jsonplaceholder.typicode.com/posts/1";
		if(evt.type==="click");
		ajaxtest(url);
	    //console.log(""+evt.type);
	}	
}

//jquery 이벤트 에서는 $(document).ready()를 사용 
document.addEventListener("DOMContentLoaded",function(){
	addMouseupEvent();
	console.log("dom load");
});

function $(ele){
	return document.querySelector(ele);
}

function ajaxtest(url){
	function reqListener () {
	  console.log(this.responseText); //JSON.parse(this.responseText)
	  var abc=JSON.parse(this.responseText);
	  var area=$("#area");
	  var text=abc.title;
	  area.innerHTML=text;	  

	}  //this는 XMLhttpRequest객체 / responseText는 객체이기때문에 JSON parse
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", url);
	oReq.send();
}