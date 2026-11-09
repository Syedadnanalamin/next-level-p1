#Access Modifiers in TypeScript OOP

#Introduction

Access modifiers is an important concept in TypeScript OOP. It helps us control how properties and methods are accessed in a class.

#Detailed Body

TypeScript provides four access modifiers: public, private, protected, and readonly.

Public: Public properties can be accessed from anywhere. It is the default modifier.

class Student {
    public name = "Adnan";
}

Private: Private properties can only be accessed inside the same class. It helps hiding important data.

class Student {
    private age = 20;
}

Protected: Protected properties can be accessed inside the class and its child classes, but not from outside.

class Person {
    protected name = "Adnan";
}

class Student extends Person {
    showName() {
        return this.name;
    }
}

Readonly: Readonly properties cannot be changed after initialization or constructor assignment.

class Student {
    readonly id = 101;
}

#Conclusion

Access modifiers helps us control our class properties and methods. It makes our code more organized and easier to maintain.