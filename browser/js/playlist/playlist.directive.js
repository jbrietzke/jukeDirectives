juke.directive('playlist', function(PlayerFactory) {
    return {
        restrict: 'E',
        scope: {
            songs: '='
        },
        templateUrl: '/js/playlist/templates/songs.html',
        link: function(scope, element, attrs) {
            scope.getCurrentSong = function() {
                return PlayerFactory.getCurrentSong();
            };

            scope.isPlaying = function(song) {
                return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
            };

            scope.toggle = function(song) {
                if (song !== PlayerFactory.getCurrentSong()) {
                    PlayerFactory.start(song, scope.songs);
                } else if (PlayerFactory.isPlaying()) {
                    PlayerFactory.pause();
                } else {
                    PlayerFactory.resume();
                }
            };
        }
    }
});

juke.directive('doubleClick', function(){
	return {
		restrict: 'A',
		scope: {
			doubleClick: '&'
	},
	link: function(scope, element) {
		element.on('dblclick', function() {
			scope.doubleClick();
			})
		}
	};
})
