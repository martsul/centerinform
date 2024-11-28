$(document).ready(function(){
	$('.news-item-container').slice(1).each(function() {
		$(this).hide();
	});
	
	showMobileNews($($('.news-footer-points__item')[0]).data('news-id'))
	
	$('.news-directions__left').mousedown(function(){
		if($(this).hasClass('news-directions__disabled')){
			return false;
		}
		
		let news_container_ids = [];
		
		$('.news-item-container').each(function(){
			news_container_ids.push($(this).attr('id'))
		})
		
		let active_news_container_id = $('.news-item-container:visible').attr('id');
		let new_active_news_container_id = '';
		
		if(news_container_ids.indexOf(active_news_container_id) < 0){
			new_active_news_container_id = news_container_ids[0];
		}else if(news_container_ids.indexOf(active_news_container_id) !== 0){
			new_active_news_container_id = news_container_ids[news_container_ids.indexOf(active_news_container_id) - 1];
		}else{
			new_active_news_container_id = active_news_container_id;
		}
		
		$('#' + active_news_container_id).animate(
			{marginLeft: '100%'},
			{
				duration:300,
				complete: function(){
					$(this).hide();
					$('#' + new_active_news_container_id).css({'margin-left': '-100%'}).show().animate({marginLeft: '0'}, {duration:300});
				}
			}
		);
		
		if(news_container_ids.indexOf(new_active_news_container_id) === 0){
			$(this).addClass('news-directions__disabled');
		}else{
			$(this).removeClass('news-directions__disabled');
		}
		
		if(news_container_ids.indexOf(new_active_news_container_id) === (news_container_ids.length - 1)){
			$('.news-directions__right').addClass('news-directions__disabled');
		}else{
			$('.news-directions__right').removeClass('news-directions__disabled');
		}
	});
	
	$('.news-directions__right').mousedown(function(){
		if($(this).hasClass('news-directions__disabled')){
			return false;
		}
		
		let news_container_ids = [];
		
		$('.news-item-container').each(function(){
			news_container_ids.push($(this).attr('id'))
		})
		
		let active_news_container_id = $('.news-item-container:visible').attr('id');
		let new_active_news_container_id = '';
		
		if(news_container_ids.indexOf(active_news_container_id) < 0){
			new_active_news_container_id = news_container_ids[0];
		}else if(news_container_ids.indexOf(active_news_container_id) !== (news_container_ids.length - 1)){
			new_active_news_container_id = news_container_ids[news_container_ids.indexOf(active_news_container_id) + 1];
		}else{
			new_active_news_container_id = active_news_container_id;
		}
		
		$('#' + active_news_container_id).animate(
			{marginLeft: '-100%'},
			{
				duration:300,
				complete: function(){
					$(this).hide();
					$('#' + new_active_news_container_id).css({'margin-left': '100%'}).show().animate({marginLeft: '0'}, {duration:300});
				}
			}
		);
		
		if(news_container_ids.indexOf(new_active_news_container_id) === (news_container_ids.length - 1)){
			$(this).addClass('news-directions__disabled');
		}else{
			$(this).removeClass('news-directions__disabled');
		}
		
		if(news_container_ids.indexOf(new_active_news_container_id) === 0){
			$('.news-directions__left').addClass('news-directions__disabled');
		}else{
			$('.news-directions__left').removeClass('news-directions__disabled');
		}
	});
	
	$( '.news-item-container__mobile').on( "swipeleft", function(){
		let mobile_news = $('.news-item-container__mobile .news-item');
		
		if(mobile_news.length){
			let news_id = [];
			let active_news = '';
			
			mobile_news.each(function(){
				if($(this).is(':visible')){
					active_news = parseInt($(this).data('news-id'));
				}
				
				news_id.push(parseInt($(this).data('news-id')));
			});
			
			if(news_id.indexOf(active_news) < (news_id.length - 1)){
				showMobileNews(news_id[news_id.indexOf(active_news) + 1])
			}
		}
	});
	
	$( '.news-item-container__mobile').on( "swiperight", function(){
		let mobile_news = $('.news-item-container__mobile .news-item');
		
		if(mobile_news.length){
			let news_id = [];
			let active_news = '';
			
			mobile_news.each(function(){
				if($(this).is(':visible')){
					active_news = parseInt($(this).data('news-id'));
				}
				
				news_id.push(parseInt($(this).data('news-id')));
			});
			
			if(news_id.indexOf(active_news) > 0){
				showMobileNews(news_id[news_id.indexOf(active_news) - 1])
			}
		}
	});
});

function showMobileNews(news_id){
	let active_news = $('.news-item-container__mobile .news-item:visible');
	
	if(active_news.length){
		let marginLeftActive = '0';
		let marginLeftNew = '0';
		
		if(parseInt(active_news.data('news-id')) > news_id){
			marginLeftActive = '100%';
			marginLeftNew = '-100%';
		}else{
			marginLeftActive = '-100%';
			marginLeftNew = '100%';
		}
		
		active_news.animate(
			{marginLeft: marginLeftActive},
			{
				duration:300,
				complete: function(){
					$(this).hide();
					$(' .news-item-container__mobile .news-item[data-news-id="' + news_id + '"]').css({'margin-left': marginLeftNew}).show().animate({marginLeft: '0'}, {duration:300});
				}
			}
		);
	}else{
		$('.news-item-container__mobile .news-item[data-news-id="' + news_id + '"]').css({'margin-left': '100%'}).show().animate({marginLeft: '0'}, {duration:300});
	}
	
	$('.news-item-container__mobile').find('.news-item').each(function(){
		let current_news_id = parseInt($(this).data('news-id'))

		if(current_news_id === parseInt(news_id)){
			$('.news-footer-points__item[data-news-id="' + current_news_id + '"]').addClass('news-footer-points__item-active')
		}else{
			$('.news-footer-points__item[data-news-id="' + current_news_id + '"]').removeClass('news-footer-points__item-active')
		}
	})
}

