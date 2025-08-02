const student =  {
	name: "aman",
	marks: 95,
	prop: this, //global scope or the window obeject
	getName: function() {
		console.log(this); //local scope here student object
		return this.name;
	},

	getMarks: () => { //arrow function points to the global scope 
		console.log(this); //parent's scope -> window
		return this.marks;
	},

	getInfo1: function()  {
		setTimeout( () => { //as here the arrow function can access the setTimeout from the window object it works.
			console.log(this); //student 
		}, 1000);
	},

	getInfo2: function() {
		setTimeout(function() { 
			console.log(this); //window
		}, 2000);
	}
};



