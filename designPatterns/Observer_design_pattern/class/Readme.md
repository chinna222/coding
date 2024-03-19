# Interesting points about class

## Prototype approach

```
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea = function() {
        return this.height * this.width;
    };
}

const myRectangle1 = new Rectangle(10, 5);
console.log(myRectangle1.getArea()); // Outputs the perimeter for myRectangle1: 30

```

## Instance Approach

```
class Rectangle {
    constructor(height, width) {
    this.height = height;
    this.width = width;
    this.getArea = function() {
      return this.height * this.width;
    }; // Defining getArea within the constructor

}
}

```

In both cases, you create a Rectangle object and call myRectangle.getArea() to get the area. The difference lies in how the getArea function is attached to the Rectangle object and the implications of that difference:

Prototype Method: With the method defined outside the constructor (the first example), getArea is on Rectangle's prototype. This means all instances of Rectangle share the same getArea function. It's memory efficient, as there's only one copy of the function regardless of how many instances are created.

Instance Method: With the method defined inside the constructor (the second example), each instance of Rectangle gets its own copy of getArea. This can lead to higher memory usage if many instances are created because each instance has its own separate copy of the function.

Despite these differences, the way you call the method doesn't change. The choice between these two approaches depends on your specific needs, including considerations of memory efficiency, the desire for instance-specific behavior, and object-oriented design principles.

When a method is defined on the prototype, changing it dynamically will affect all instances of that class, because they all share the same prototype. However, when methods are defined within the constructor (the instance approach), they are specific to each instance, so changing the method on one instance won't affect the others.

EX:

```
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
    return this.height \* this.width;
    }
}

```

// Change the getArea method for all instances
Rectangle.prototype.getArea = function() {
return 2 \* (this.height + this.width);
};

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.getArea()); // Now outputs the perimeter instead: 30`

If you define the method inside the constructor and later change the method on one instance, it will not affect other instances, since each instance has its own copy of the method.

```
class Rectangle {
    constructor(height, width) {
    this.height = height;
    this.width = width;
    this.getArea = function() {
      return this.height * this.width;
    };
    }
}

```

```
const myRectangle1 = new Rectangle(10, 5);
const myRectangle2 = new Rectangle(3, 2);

// Change the getArea method only for myRectangle1
myRectangle1.getArea = function() {
    return 2 \* (this.height + this.width);
};

```

console.log(myRectangle1.getArea()); // Outputs the perimeter for myRectangle1: 30
console.log(myRectangle2.getArea()); // Still outputs the area for myRectangle2: 6`
