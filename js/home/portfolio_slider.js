$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			{
			'title' : 'Screenshots',
			
			'thumbnail' : ['img/portfolio/small/1s.jpg', 'img/portfolio/small/2s.jpg', 'img/portfolio/small/3s.jpg'],
			'large' : ['img/portfolio/large/1s.jpg', 'img/portfolio/large/2s.jpg', 'img/portfolio/large/3s.jpg'],
			'button_list'   :
			[
			
			],
			'tags'  : ['All']
			},

			{
			'title' : 'Artwork',
			
			'thumbnail' : ['img/portfolio/small/1a.jpg', 'img/portfolio/small/2a.jpg', 'img/portfolio/small/3a.jpg'],
			'large' : ['img/portfolio/large/1a.jpg', 'img/portfolio/large/2a.jpg', 'img/portfolio/large/3a.jpg'],
			'button_list'   :
			[
			
			],
			'tags'  : ['All']
			},

			{
			'title' : 'Wallpapers',
			
			'thumbnail' : ['img/portfolio/small/1w.jpg', 'img/portfolio/small/2w.jpg', 'img/portfolio/small/3w.jpg'],
			'large' : ['img/portfolio/large/1w.jpg', 'img/portfolio/large/2w.jpg', 'img/portfolio/large/3w.jpg'],
			'button_list'   :
			[
			
			],
			'tags'  : ['All']
			},
			
		]
	});
});