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
			this._grid[x][y] = val;
	},

	get: function(x, y) {
		return this._grid[x][y];

	}
}

var snake = {

	direction: null,
	last: 		 null,
	_queue: 	 null, 

	init: function(d, x, y) {
		this.direction = d;

		this._queue = [];
		this.insert(x, y);
	},

	insert: function(x, y) {
		this._queue.unshift({x:x, y:y});
		this.last = this._queue[0];
	},

	remove: function() {
		return this._queue.pop();
	}
}

function setFood() {
	var empty = [];
	for (var x=0; x < grid.width; x++) {
		for (var y=0; y < grid.height; y++) {
			if (grid.get(x, y) === EMPTY) {
				empty.push(x:x, y:y});
			}
		}
	}
	var randpos = empty[Math.floor(Math.random()*empty.length)];
	grid.set(FRUIT, randpos.x, randpos.y) 
}

function main() {

}

function init(){}

function loop() {}

function update() {}

function draw() {}

main();

