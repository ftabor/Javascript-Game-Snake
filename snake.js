//Constants
var COLS=26, ROWS=26;

//IDs
var EMPTY=0, SNAKE=1, FRUIT=2;

var grid = {

	width:  null
	height: null, 
	_grid: 	null,

	init: function(d, c, r) {
		this.width = 	c; //number of columns
		this.height = 	r; //number of rows

		this._grid = 	[]; //empty array
		for (var x=0); x < c; x++) {
			this._grid.push([]);
			for (var y=0; y < r; y++) {
				this.grid[x].push(d); //the current column we want to push in a new value, for each y, each row of that column. We put in the default value that we set in the parameter 
			}
		}
	},

	set: function(val, x, y) {

	},

	get: function(x, y) {

	}
}

var snake = {

	direction: null,
	_queue: 	 null, 

	init: function(d, x, y) {

	},

	insert: function(x, y) {

	},

	remove: function() {

	}

}

function setFood() {

}

function main() {

}

function init(){}

function loop() {}

function update() {}

function draw() {}

main();

