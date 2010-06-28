jQuery.fn.drawer = function(params){

	//parameters and references
 	var speed  = params['speed'] || 200,
			dist   = params['distance'],
			cookie = params['cookie'],
			handle = params['handle'] || this,
			attr   = params['attribute'] || 'marginLeft',
			elem   = this,
			orig   = elem.css(attr);

	function hide(){
 		opt={}; opt[attr]=dist;
		elem.animate(opt,speed, function(){
			if(cookie){$.cookie(cookie, 1);}
		});
	}
	
	function show(){
		opt={}; opt[attr]=orig;
		elem.animate(opt,speed, function(){
			if(cookie){$.cookie(cookie, 0);}
		});
	}
	
	function hidden(){
		return elem.css(attr) != orig;
	}

	if(cookie && $.cookie(cookie)==1){ hide(); }

	handle.click(function(){
		elem.parent().css('overflow','hidden');
		(hidden() == true ? show() : hide());
		return handle;
	});
	
}
