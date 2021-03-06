# Leap Motion to Arduino communication
### Simple communication between the Leap Motion Controller and Arduino via Cylon

4 LEDs represents 4 directions, forward, backward, left and right. LEDs light up depends on your palm gesture.
[![Leap Motion & Arduino gesture](https://i.ytimg.com/vi/vXvvcjSzRsA/hqdefault.jpg)](https://www.youtube.com/watch?v=vXvvcjSzRsA "Leap Motion & Arduino gesture")

### Required Hardware
- [Leap Motion Controller](https://www.leapmotion.com/)
- [Arduino](https://www.arduino.cc/)

### Required Packages
- [Node](https://nodejs.org/en/):
`brew install npm`
- [Cylon.js](https://cylonjs.com/):
`npm install cylon cylon-leapmotion cylon-firmata`
- [Gort](http://gort.io/):
`brew install hybridgroup/tools/gort`


### How-to Run
- Plug-in the Leap Motion Controller and Arduino with LED at pin 3
- (Optional) Scan Arduino port path, execute `gort scan serial`
- (Optional) Upload Firmata to Arduino, execute `gort arduino upload firmata </path/to/Arduino>`
- In terminal, execute `node leap2arduino.js`
