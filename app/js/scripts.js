$(document).ready(function() {
	SC.initialize({
		client_id: '77501632d7efd636b1e3e0b88e040464',
		redirect_uri: 'http://localhost:5000/callback.html'
	});

	// SC.connect(function() {
	// 	console.log('connected');
	// 	SC.get('/me', function(me) {
	// 		console.log('Hello, ' + me.username);
	// 	});
	// });

	$('a.connect').click(function(e) {
		e.preventDefault();
		SC.connect(function(){
				console.log('connected');
			SC.get('/tracks', { genres: 'dub' }, function(tracks) {
				$(tracks).each(function(index, track) {
				$('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
				});
			});
		});
	});
});