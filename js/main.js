
var animations = ['translateytop', 'scale', 'translateybottom'];

$(document).ready(function()
{
	$.each($('.row'),function()
	{
		if ($(this).inView())
		{
			if ($(this).attr('data') == '0')
			{
				$(this).attr('data','1');

				$.each($(this).find('.box'),function(index)
				{
					var box = $(this);
					$(box).attr('data','1').addClass('box-full').addClass(animations[index]);
					setTimeout(function(){  $(box).removeClass('scale'); }, 1000);
				});
			}
		}
		else
		{
			$(this).attr('data','0');
		}
	});	
});


$(document).scroll(function()
{
	$.each($('.row'),function()
	{
		if ($(this).inView(150))
		{
			if ($(this).attr('data') == '0')
			{
				$(this).attr('data','1');

				$.each($(this).find('.box'),function(index)
				{
					var box = $(this);
					$(box).addClass('box-full').addClass(animations[index]);
					setTimeout(function(){  $(box).removeClass(animations[index]); }, 1000);
				});
			}
		}
		
		if ($(this).inView() == false)
		{
			if ($(this).attr('data') == '1')
			{
				$(this).attr('data','0');
				$.each($(this).find('.box'),function()
				{
					$(this).removeClass('box-full');
				});				
			}
		}
	});	

});