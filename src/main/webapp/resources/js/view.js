/**
 * 
 */
var createMultiATag = x=>{
	var temp = '';
	$.each(x.arr,(i,j)=>{
		temp+='<a id="a-'+x.id+'-'+i+'" href="#">'+j+'</a>'
	});
	return temp;
}
var createMultiLi = x=>{
	var temp = '';
	$.each(x.arr,(i,j)=>{
		temp +='<li id ="li-'+x.id+'-'+i+'" class="'+x.clazz+'"><a href="#" class="'+x.aClazz+'">'+j+'</a></li>'
	})
	return temp;
}
var createForm = x=>{
	return '<form id ="form-'+x.id+'" class="'+x.clazz+'"></form>'
}
var createLi = x=>{
	return '<li id = "li-'+x.id+'" class ="'+x.clazz+'"></li>'
}
var createUl = x=>{
	return '<ul id="ul-'+x.id+'" class="'+x.clazz+'"></ul>'
}
var createDiv = x=>{
	return '<div id="div-'+x.id+'" class="'+x.clazz+'">'+x.val+'</div>'
}
var createViewTr=x=>{
	var tmep ='';
	
	$.each(x.trNum,(i,j)=>{
		
		temp +='<tr id="tr-'+x.id+'-'+j+'" class="'+x.clazz+'">'
		+createViewTd({
			tdNum:x.tdNum,
			tdClazz:x.tdClazz,
			id:x.id
			
		})+'</tr>';
	});
	return temp;
}
var createViewTd=x=>{
	
	var temp ='';
	$.each(x.tdNum,(i,j)=>{
		temp +='<td id ="td-'+x.id+'-'+j+'" class ="'+x.tdClazz+'"></td>'
	});
	return temp;
}
var createTable=x=>{
	return tab ='<table id ="'+x.id+'" class = "'+x.clazz+'"></table>'
}
var createATag=x=>{
	return '<a id ="'+x.id+'" href="'+x.link+'"> '+x.val+'</a>';
}
var createSpan=x=>{
	return '<span id="'+x.id+'" class="glyphicon '+x.clazz+'"  aria-hidden="true">&nbsp'+x.val+'</span>';
}
var createHTag=x=>{
	return '<h'+x.size+'>'+x.val+'</h'+x.size+'>';
}
var createButton =x=>{
	return '<button id = "btn-'+x.id+'" class = "'+x.clazz+'">'+x.val+'</button>';
}
var createInput = x=>{
	return '<input id = "'+x.id+'" value="'+x.val+'" class="'+x.clazz+'" type = "'+x.type+'"/>'
}