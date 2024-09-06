package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Renderer {
    private Shape shape;
    
    Renderer(Shape shape) {
        this.shape = shape;
    }

    void draw() {
        String shapeType = shape.getType();
        double area = shape.getArea();
        System.out.println(shapeType + " printed\n" + "Its area is " + area);
    }
}
