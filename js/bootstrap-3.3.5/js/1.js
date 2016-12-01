"use strict"

$(function(){
	// 左侧菜单加收缩展开图标
	var aMenu = $('#accordion > .panel-default');
	var aMenuT = $('.panel-collapse');
	$("#accordion .panel-default").each(function(i){
		$(this).click(function(){
			if($(this).find('.panel-collapse').hasClass('in')) {
				$(aMenu[i]).find('span').removeClass('retract').addClass('spread');
			} else {
				for(var j = 0; j <= aMenuT.length; j ++){
					$(aMenu[j]).find('span').removeClass('retract').addClass('spread');
				}
				$(aMenu[i]).find('span').removeClass('spread').addClass('retract');
			}
		});
	});
})