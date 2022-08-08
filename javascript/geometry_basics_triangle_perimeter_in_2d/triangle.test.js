const { Point, Triangle } = require('./triangle');

test('adds sides a + b + c equal 120', () => {
    let expect_perimeter = 120;
    let a = new Point(10, 10);
    let b = new Point(40, 10);
    let c = new Point(10, 50);
    let triangle = new Triangle(a, b, c );
    let actual_perimeter = triangle.perimeter();

    expect(actual_perimeter).toBe(expect_perimeter);
});

test('adds sides a + b + c equal 135.314734', () => {
    let expect_perimeter =  135.314734;
    let a = new Point(15, -10);
    let b = new Point(40, 20);
    let c = new Point(20, 50);
    let triangle = new Triangle(a, b, c );
    let actual_perimeter = triangle.perimeter();

    expect(actual_perimeter).toBe(expect_perimeter);
});
