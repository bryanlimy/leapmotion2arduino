"use strict";

var Cylon = require("cylon");

Cylon.robot({
	connections: {
		leap: { adaptor: "leapmotion"},
		arduino: { adaptor: "firmata", port: "/dev/cu.usbmodem1411"}
	},
	devices: {
		led: { driver: 'led', pin: 3, connection: "arduino"},
		leapmotion: {driver: "leapmotion", connection: "leap"}
	},
	work: function(my) {
		var brightness = 0, delta = 2;

		my.leapmotion.on('hand', function(hand) {

			var velocity = hand.palmVelocity[1];
			if (Math.abs(velocity) > 20) {
				if (velocity > 0) {
					if (brightness < 255) {
						brightness += delta;
					}
					console.log("Z axis: " + velocity + ", brightening");
				} else {
					if (brightness > 0) {
						brightness -= delta;
					}
					console.log("Z axis: " + velocity + ", dimming");
				}
				my.led.brightness(brightness);
			}
		});
	}
}).start();