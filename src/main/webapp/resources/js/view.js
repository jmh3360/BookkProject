/**
 * 
 */
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
var createMultiTr=x=>{
	var temp = '';
	$.each(x.arr,(i,j)=>{
		temp+='<tr id ="'+x.id+'-'+i+'"></tr>'
	});
	return temp;
}
var createMultiTh = x=>{
	var temp ='';
	$.each(x.arr,(i,j)=>{
		temp+='<th id="'+x.id+'-'+i+'" class="'+x.clazz+'"></th>'
	});
	return temp;
}
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
var createFont=x=>{
    return '<font>'+x.val+'</font>';
}
var textarea=x=>{
    return '<textarea id="'+x.id+'">'
}
var createSelect=x=>{
	return '<select id="'+x+'"></select>'
}
var createOption=x=>{
	return '<option value="'+x.val+'">'+x.txt+'</option>'
}
var createImg=x=>{
	return '<img id="'+x.id+'" alt="'+x.alt+'" src="'+x.src+'" class="'+x.clazz+'">'
}
var createForm = x=>{
	return '<form id ="form-'+x.id+'" class="'+x.clazz+'"></form>'
}
var createDiv = x=>{
	return '<div id="'+x.id+'" class="'+x.clazz+'"></div>'
}
var createTable=x=>{
	return tab ='<table id ="'+x.id+'" class = "'+x.clazz+'"></table>'
}
var createTr = x=>{
	return '<tr id ="'+x.id+'"></tr>'
}
var createTh = x=>{
	return '<th id="'+x.id+'" class="'+x.clazz+'"></th>';
}
var createTd = x=>{
	return '<td id="'+x.id+'" class="'+x.clazz+'"></td>'
}
//순서가 상관없는 list를 짤 때 씀..
var createUl = x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>'
}
//ol은 type에 알파벳 l을 넣어주면 로마숫자로 표기되어 순서대로 나열
//또는 start="5"라고 넣어주면 입력된 li값 앞에 5라고 표기되면서 순차적으로 나열
var createOL=x=>{
    return '<ol id="'+x.id+'"class="'+x.clazz+'"></ol>';
}
var createLi = x=>{
	return '<li id = "li-'+x.id+'" class ="'+x.clazz+'"></li>'
}
var createLabel=x=>{
	return '<label for="'+x.fo+'">'+x.val+'</label>'
}
var createButton =x=>{
	return '<button id = "'+x.id+'" class = "'+x.clazz+'">'+x.val+'</button>';
}
var createATag=x=>{
	return '<a id ="'+x.id+'" href="#"> '+x.val+'</a>';
}
var createSpan=x=>{
	return '<span id="span-'+x.id+'" class="'+x.clazz+'"></span>';
}
var createHTag=x=>{
	return '<h'+x.size+'>'+x.val+'</h'+x.size+'>';
}
var createInput = x=>{
	return '<input id = "'+x.id+'" class="'+x.clazz+'" type = "'+x.type+'"/>'
}