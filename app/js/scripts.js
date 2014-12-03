$(document).ready(function() {
	SC.initialize({
		client_id: '77501632d7efd636b1e3e0b88e040464',
		redirect_uri: 'http://localhost:1234/callback.html'
	});

	$('a.connect').click(function(e) {
		e.preventDefault();
		SC.connect(function(){
			SC.get('/me', function(me) {
				$('#username').html(', ' + me.username);
			});
			SC.get('/tracks', { genres: 'symphony' }, function(tracks) {
				var image;
				$(tracks).each(function(index, track) {
					if ( track.artwork_url != null ) {
						image = '<img src="' + track.artwork_url + '" />'
					}	else {
						image = null;
					}
					$('#tracks').append($('<li class="list-group-item"></li>').html(track.title + ' - ' + track.genre + image));
				});
			});
			SC.get('/users', { genres: 'symphony' }, function(users) {
				var city;
				$(users).each(function(index, user) {
					if ( user.city != null ) {
						city = user.city + ', '
					}	else {
						city = null;
					}
					$('#authors').append($('<li class="list-group-item"></li>').html(user.full_name + '<i> from </i>' + city + user.country + '<img src="' + user.avatar_url + '" />'));
				});
			});
		});
	});
});