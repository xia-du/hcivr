$(document).ready(function() {

	var $start = $('a-entity[data-src="#start"]');
	var $hci = $('a-entity[data-thumb="#hci-thumb"]');
	var $hci2 = $('a-entity[data-thumb="#hci-thumb2"]');
	var $train = $('a-entity[data-src="#train"]');
	var $lobby = $('a-entity[data-thumb="#lobby-thumb"]');
	var $lobby2 = $('a-entity[data-thumb="#lobby-thumb2"]');
	var $rest = $('a-entity[data-src="#rest"]');
	var $secondFloor = $('a-entity[data-src="#secondFloor"]');
	var $secondFloor2 = $('a-entity[data-src="#secondFloor2"]');
	// var $corridor = $('a-entity[data-src="#corridor"]');
	var $rooftop = $('a-entity[data-src="#rooftop"]');
	var $balcony = $('a-entity[data-src="#balcony"]');
	var $room1 = $('a-entity[data-src="#room1"]');
	var $room2 = $('a-entity[data-src="#room2"]');
	var $room3 = $('a-entity[data-src="#room3"]');
	var $room4 = $('a-entity[data-src="#room4"]');
	var $suite = $('a-entity[data-src="#suite"]');
	var $suite1 = $('a-entity[data-src="#suite1"]');
	var $exit = $('a-entity[data-thumb="#exit-thumb"]');

	var $thumbnails = $('.thumbnail');

	var show = function(el) {
		for (var i = 0; i < el.length; i++) {
			el[i].attr('visible', 'true');
		}
	};

	var setPos = function(el, x, z, ry) {
		el.attr('position', x + ' 0 ' + z);
		el.attr('rotation', '0 ' + ry + ' 0');
	};

	// var hide = function (el) {
	//   for (var i = 0; i < el.length; i++) {
	//     el[i].attr('visible', 'false');
	//   }
	// };

	var setScene = function(elToShow) {
		// $thumbnails.attr('visible', 'false');
		$thumbnails.each(function(index, el) {
			$(this).attr('visible', 'false');
		});

		show(elToShow);
	};

	// initialize
	show([$hci, $train]);

//   document.addEventListener('touchstart', function(e) {
//     e.preventDefault();
//     document.getElementById('intro').play();
//
// }, false);

	// document.getElementById('intro').addEventListener('ended', myHandler, false);
  //
	// function myHandler(e) {
  //   $('a-video[src="#intro"]').remove();
  //   $('#links').attr('visible', 'true');
  //   $('a-sky').attr('color', '');
  //   $('a-entity[camera]').attr('visible', 'true');
	// }

	$start.click(function(e) {
		setScene([$hci, $train]);
	});

	$train.click(function(e) {
		setScene([$hci]);
	});

	$hci.click(function(e) {
		setScene([$lobby, $train, $start]);
	});

	$hci2.click(function(e) {
		setScene([$lobby, $train, $start]);
	});

	$lobby.click(function(e) {
		setScene([$rest, $secondFloor, $hci2]);
	});

	$lobby2.click(function(e) {
		setScene([$rest, $secondFloor, $hci2]);
	});

	$rest.click(function(e) {
		setScene([$lobby]);
	});

	$secondFloor.click(function(e) {
		setScene([$rooftop, $balcony, $room1, $room2, $room3, $room4, $suite, $lobby2]);
	});

	$secondFloor2.click(function(e) {
		setScene([$rooftop, $balcony, $room1, $room2, $room3, $room4, $suite, $lobby2]);
	});

	$balcony.click(function(e) {
		setScene([$secondFloor2]);
	});

	$rooftop.click(function(e) {
		setScene([$secondFloor]);
	});

	$room1.click(function(e) {
		setScene([$exit]);
		setPos($exit, -7, 2, 100);
	});

	$room2.click(function(e) {
		setScene([$exit]);
		setPos($exit, 1.4, 10.8, 180);
	});

	$room3.click(function(e) {
		setScene([$exit]);
		setPos($exit, 4.5, 8, 230);
	});

	$room4.click(function(e) {
		setScene([$exit]);
		setPos($exit, -1.5, 10, 150);
	});

	$suite.click(function(e) {
		setScene([$exit, $suite1]);
		setPos($exit, -3.4, 8, 150);
		setPos($suite1, 2, 5.8, 225);
	});

	$suite1.click(function(e) {
		setScene([$suite]);
		setPos($suite, -7, 7, 120);
	});

	$exit.click(function(e) {
		setScene([$rooftop, $balcony, $room1, $room2, $room3, $room4, $suite, $lobby2]);
	});


});
