/* makeExtend: Smallest code for extending classes in javascript.
 * version: 0.1
 * By Ali Najafizadeh, http://morezilla.net
 * MIT Licensed.
 */
var makeExtend = function(obj, base) {
    if('function' === typeof obj) return obj;
    var func = obj.initialize || function(){};
    if(base) {
        func.prototype = new base();
        func.prototype.constructor = func;
        func.prototype.parent = base.prototype;
    }
    for(prop in obj)
        if(prop !== 'initialize')
            func.prototype[prop] = obj[prop];
    return func;
};
