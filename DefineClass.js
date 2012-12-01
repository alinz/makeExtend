function DefineClass(impl) {
	impl = impl || {};
	var _baseClass = impl.initialize || function(){};
	for(prop in impl) {
		_baseClass.prototype[prop] = impl[prop];
	}
	function extend(_impl) {
		_impl = _impl || {};
		var _driveClass = _impl.initialize || function(){};
		_driveClass.prototype = new _baseClass();
		_driveClass.prototype.constructor = _baseClass;
		_driveClass.prototype.parent = _baseClass.prototype;
		for(prop in _impl) {
			_driveClass.prototype[prop] = _impl[prop];
		}
		_driveClass.extend = extend;
		return _driveClass;
	}
	_baseClass.extend = extend;
	return _baseClass;
}

var class1 = DefineClass({
	initialize: function() {
		this.hello = 'WOW';
	},
	getName: function() {
		return 'class1';
	}
});

var class2 = class1.extend({
	getName: function() {
		return 'class2';
	}	
});

var class3 = class2.extend({
	getName: function() {
		return 'class3';
	}
});

var obj1 = new class1();
var obj2 = new class2();
var obj3 = new class3();

console.log(obj1.getName());
console.log(obj2.getName());
console.log(obj2.parent.getName());
console.log(obj3.parent.getName());
