class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Triangle {
    constructor(a, b, c, precision = 6) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.precision = precision
    }

    perimeter() {
        try {
            let side_a_b = Math.sqrt(Math.pow(this.a.x - this.b.x, 2) + Math.pow(this.a.y - this.b.y, 2));
            let side_b_c = Math.sqrt(Math.pow(this.b.x - this.c.x, 2) + Math.pow(this.b.y - this.c.y, 2));
            let side_a_c = Math.sqrt(Math.pow(this.a.x - this.c.x, 2) + Math.pow(this.a.y - this.c.y, 2));
            return parseFloat((side_a_b + side_b_c + side_a_c).toFixed(this.precision));
        } catch (err) {
            console.log(err)
            return -1
        }
    }


}

function trianglePerimeter(triangle){
    try {
        if (triangle instanceof Triangle) {
            return triangle.perimeter()
        }
    } catch (err) {
        console.log(err)
        return -1
    }
}

module.exports = {Point, Triangle};