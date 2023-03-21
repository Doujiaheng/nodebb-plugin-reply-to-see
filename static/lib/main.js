// "use strict";
// $('document').ready(function() {

// 	$(window).on('action:composer.loaded', function(err, data) {
// 		if (data.hasOwnProperty('composerData') && !data.composerData.isMain) {
// 			return;
// 		}
// 		// console.log(data)
// 		var item = $('<button class="btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap reply2see" data-action="reply2see"><i class="fa fa-comments"></i><span class="d-none d-md-inline show-text">AlwaysSee</span></button>');
// 		$('.action-bar .composer-discard').after(item);
// 		item.on('click', function() {
// 			$('.reply2see .show-text').text(function(i, oldText) {
// 				return $.trim(oldText) == 'Reply2See' ? 'AlwaysSee' : 'Reply2See'
// 			});
// 			if ($('.reply2see .show-text').text() == 'Reply2See') {
// 				console.log("reply")

// 			} else {
// 				console.log("always")


// 			}
// 		});

// 	});
// });
