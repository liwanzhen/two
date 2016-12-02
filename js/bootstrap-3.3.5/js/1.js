"use strict"

$(function(){
	// 左侧菜单加收缩展开图标
	var aMenu = $('#accordion > .panel-default');
	var aMenuT = $('.panel-collapse');
	$("#accordion .panel-default .panel-heading").each(function(i){
		$(this).find('a').click(function(){
			if($(this).parents('.panel-default').find('.panel-collapse').hasClass('in')) {
				$(aMenu[i]).find('i.change').removeClass('icon-triangle-down').addClass('icon-triangle-right');
			} else {
				for(var j = 0; j <= aMenuT.length; j ++){
					$(aMenu[j]).find('i.change').removeClass('icon-triangle-down').addClass('icon-triangle-right');
				}
				$(aMenu[i]).find('i.change').removeClass('icon-triangle-right').addClass('icon-triangle-down');
			}
		});
	});
})