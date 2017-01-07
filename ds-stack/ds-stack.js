/*### Stack
* [ ] Implement a stack class.
  * You can use an array for storage, and delegate to its methods
  * The stack should only have `.add` and `.remove`, 
  no other properties or methods (you can test this by calling Object.keys() on your stack instance).*/

var Stack = function() {
	this.storage=[];
	this.size=0
};

//var StackMethod ={} ;

Stack.prototype.add = function (value) {
    this.storage.push(value) ;
    this.size++
};

Stack.prototype.remove = function () { 
	if(this.size===0) {
		return 'null'
	}
	this.storage.pop()
};
