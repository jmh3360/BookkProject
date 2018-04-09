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
	var $wrapper,$header,$footer,view,image,context;
	var onCreate=()=>{
		$wrapper = $('#wrapper');
		context = $.context();
		view = $.javascript()+'/view.js';
		setContentView();
	};
	var setContentView = ()=>{
		$.getScript(view,()=>{
			
			$wrapper.html(createDiv({
				id:'header',clazz:'header',
				}));
			$('#div-header').append(createDiv({id:'member-bar',clazz:''}));
			
			$(createATag({id:'cs',link:'#',val:'고객센터'})).appendTo('#div-member-bar')
			.on('click',()=>{
				alert('서비스 준비중..');
			});
			$('#div-member-bar').append(createSpan({id:'division',clazz:'division'}))
			$(createATag({id:'delivery-check',link:'#',val:'주문배송조회'})).appendTo('#div-member-bar')
			.on('click',()=>{
				alert('서비스 준비중..');
			});
			$('#div-member-bar').append(createSpan({id:'division',clazz:'division'}))
			$(createATag({id:'cart',link:'#',val:'장바구니'})).appendTo('#div-member-bar')
			.on('click',()=>{
				
				app.mall.cart({view:view,context:context});
			});
			$('#div-member-bar').append(createSpan({id:'division',clazz:'division'}))
			
			
			$wrapper.append(createDiv({
				id:'body',clazz:'',
				val:createHTag({size:'1',val:'몸통'})}));
			$('#div-body').html(createDiv({id:'body-category',clazz:'body'}))
			$('#div-body-category').html(createUl({id:'body-category',clazz:'list-inline'}))
			$('#ul-body-category').html(createMultiLi({
				id:'body-category',
				aClazz:'a-body-category',
				clazz:'li-body-category',
				arr:['전체분야','시 에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타']}))
				$('#ul-body-category').attr('style','background-color:#10b5cf');
			$('#li-body-category-0').html(createDiv({id:'all-category',
				clazz:'dropdown'
				}));
			$('#div-all-category').html(createButton({id:'all-category',clazz:'dropbtn',val:'전체분야'}))
			$('#div-all-category').append(createDiv({id:'all-category-in',clazz:'dropdown-content'}));
			$('#div-all-category-in').append(createMultiATag({
				id:'all-category',
				arr:['시·에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타','무료 체험판']}))
			$wrapper.append(createDiv({
				id:'footer',clazz:'',
				val:createHTag({size:'1',val:'다리'})}));
			
			
				
			
		});
	}
	return{onCreate:onCreate}
})(); 

app.mall = {cart:x=>{
	
	$.getScript(x.view,()=>{
		
		$('#div-content').remove();
		$('#div-body').append(createDiv({id:'content',clazz:'container cart-div'}));
		$('#div-content').html(createDiv({id:'wrap-root',clazz:'wrap-root'}));
		
		$('#div-wrap-root').append(createUl({id:'root',clazz:'list-inline root'}));
		//아래의 서점은 동적으로 들어 가게끔 꾸며야 함
		$('#ul-root').html(createMultiLi({
			id:'root',arr:['HOME>','서점>','장바구니']}))
			$('#div-content').append(createDiv({id:'cart-title',clazz:''}))
			$.ajax({
			url:x.context+'/cartcount/userid',
			method:'POST',
			data:JSON.stringify({userid:'장만호'}),
			dataType:'json',
			contentType:'application/json',
			success:x=>{
				
				$('#div-cart-title').html(createHTag({size:'2',val:'장바구니'+x.count+'건'}))
				$('#div-cart-title').attr('style','border-bottom:2px solid black; text-align: center')
			},
			error : (x,h,m)=>{
				alert('검색 실패 x='+x+', h='+h+', m='+m);
			}
			})
			
			
			
		
		
	});
	
}}
