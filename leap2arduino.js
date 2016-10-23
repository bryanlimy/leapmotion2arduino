"use strict";

var Cylon = require("cylon");

Cylon.robot({
	connections: {
		leap: { adaptor: "leapmotion"},
		arduino: { adaptor: "firmata", port: "/dev/tty.usbmodem1411"}
	},
	devices: {
		front: {driver: "led", pin: 11, connection: "arduino"},
		back: {driver: "led", pin: 5, connection: "arduino"},
		left: {driver: "led", pin: 3, connection: "arduino"},
		right: {driver: "led", pin: 6, connection: "arduino"},
		leapmotion: {driver: "leapmotion", connection: "leap"}
	},
	work: function(my) {
		var brightness = 0, delta = 2;

		// pitch forward 
		my.leapmotion.on('hand', function(hand) {
			console.log("pitch: " + hand.pitch() + ", roll: " + hand.roll());

			if (Math.abs(hand.pitch()) > 0.5) {
				if (hand.pitch() < 0) {
					// pitch up, go forward
					my.front.turnOn();
					my.back.turnOff();
					my.left.turnOff();
					my.right.turnOff();
				} else {
					// pitch down, go backward
					my.front.turnOff();
					my.back.turnOn();
					my.left.turnOff();
					my.right.turnOff();
				}
			}  else if (Math.abs(hand.roll()) > 0.5) {
				if (hand.roll() < 0) {
					// roll right, go right
					my.front.turnOff();
					my.back.turnOff();
					my.left.turnOff();
					my.right.turnOn();
				} else {
					// roll left, go left
					my.front.turnOff();
					my.back.turnOff();
					my.left.turnOn();
					my.right.turnOff();
				}
			} else {
				// hand is flat, turn everything off 
				my.front.turnOff();
				my.back.turnOff();
				my.left.turnOff();
				my.right.turnOff();
			}
		});
	}
}).start();