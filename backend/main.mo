import Float "mo:base/Float";
import Func "mo:base/Func";

import Array "mo:base/Array";
import Debug "mo:base/Debug";

actor Calculator {
    // Function to add two numbers
    public func add(a: Float, b: Float) : async Float {
        return a + b;
    };

    // Function to subtract two numbers
    public func subtract(a: Float, b: Float) : async Float {
        return a - b;
    };

    // Function to multiply two numbers
    public func multiply(a: Float, b: Float) : async Float {
        return a * b;
    };

    // Function to divide two numbers
    public func divide(a: Float, b: Float) : async Float {
        if (b == 0.0) {
            Debug.print("Division by zero error");
            return 0.0; // Handle division by zero
        };
        return a / b;
    };
};
