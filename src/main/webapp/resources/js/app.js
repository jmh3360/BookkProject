/**
 * 
 */

var app = app || {}

app = {init:x=>{
	$.getScript(x+'/resources/js/router.js',()=>{
		$.extend(new Router(x));
		app.bookk.onCreate();
	})
}}

app.bookk = (()=>{
	var $content,$header,$footer,view,image,context;
	var onCreate=()=>{
		$content = $('#content');
		context = $.context();
		view = $.javascript()+'/view.js';
		setContentView();
	};
	var setContentView = ()=>{
		$.getScript(view,()=>{
			
			$content.html(createDiv({
				id:'header',clazz:'',
				val:createHTag({size:'1',val:'머리'})}));
			$content.append(createDiv({
				id:'body',clazz:'',
				val:createHTag({size:'1',val:'몸통'})}));
			$('#div-body').html(createDiv({id:'body-category',clazz:'',val:''}))
			$('#div-body-category').html(createUl({id:'body-category',clazz:'list-inline'}))
			$('#ul-body-category').html(createMultiLi({
				id:'body-category',
				aClazz:'a-body-category',
				clazz:'li-body-category',
				arr:['전체분야','시 에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타']}))
			$('#li-body-category-0').html(createDiv({id:'all-category',
				clazz:'dropdown',
				val:createButton({id:'all-category',clazz:'dropbtn',val:'전체분야'})}));
			$('#div-all-category').append(createDiv({id:'all-category-in',clazz:'dropdown-content',val:''}));
			$('#div-all-category-in').append(createMultiATag({
				id:'all-category',
				arr:['시·에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타','무료 체험판']}))
			$content.append(createDiv({
				id:'footer',clazz:'',
				val:createHTag({size:'1',val:'다리'})}));
			
			
				
			
		});
	}
	return{onCreate:onCreate}
})(); 

app.mall = {cart:x=>{
	alert('카트로 오나?');
	$.getScript(x.view,()=>{
		x.content.html(createForm({
			id:'cart',
			clazz:'container'}))
		$('#form-cart').append(createDiv({
			id:'root',
			clazz:'',
			val:createUl({id:'root',clazz:'list-inline'})}))
			$('#ul-root').append(createMultiLi({
				id:'root',arr:['HOME>','서점>','장바구니']}));
		
	});
	
}}
