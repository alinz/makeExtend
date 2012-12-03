makeExtend
==========

Description
----------------
This is an implementation of inheritance for JavaScript.

How to use it?
--------------------
load the script in whatever you like, for example by using

    <script type="text/javascript" src="makeExtend.js"></script>


Now you can use extend the JavaScript classes in an easier way.
For example:

    var Base = makeExtend({
        initialize: function() {
            this.message = 'hello';
        },
        getMessage: function() {
            return this.message;
        }
    });

    var Child = makeExtend({
        getMessage: function() {
            return this.parent.getMessage.call(this) + ' World!';
        }
    }, Base);

    var obj = new Child();
    console.log(obj.getMessage());

The concept is easy, makeExtend gets an JavaScript object and convert it into proper class definition.

There is only one function responsible for creating class and extending it.`makeExtend()`.
The first argument passes into `makeExtend` is your implementation of your class.

For example:

    var MyClass = makeExtend({
        initialize: function(message)
            this.message = 'Hello';
        },
        getMessage: function() {
            return this.message;
        }
    });

as you may already know, `initialize` function will act as out constructor. if you don't define it, the `makeExtend` will make one for your class.

Now let's say we want to extend our class. That's why the second argument of `makeExtend` comes into play. I didn't like to add extend to class since I don't want to introduce new keywords.

So we are going to extend `MyClass`.

    var ExtendMyClass = makeExtend({
        getMessage() {
            return 'This is extend version of MyClass';
        }
    }, MyClass);

    var obj = new ExtendMyClass();
    console.log(obj.getMessage);

So the out put will be

    This is extend version of MyClass

Now, let's say you want to call the `MyClass` implementation of `getMessage` in your `ExtendMyClass`. In order to do it you have to use `parent` scope. during the extending, I put the implementation of `MyClass` into parent scope. So if you want to access it you have to use `parent`. For example

    var ExtendMyClass = makeExtend({
        getMessage() {
            return this.parent.getMessage.call(this) + ' World!';
        }
    }, MyClass);

    var obj = new ExtendMyClass();
    console.log(obj.getMessage);

So as you can see, we call the `parent` and `getMessage`. However, we need to do an extra work and use the `call` method to pass the current context. So now we get call the `parent` implementation of `getMessage` and change it in our `ExtendMyClass`.

Questions
--------------
if you have any questions, comments or etc. drop me a message at `a[dot]najafizadeh[at]gmail.com`.
