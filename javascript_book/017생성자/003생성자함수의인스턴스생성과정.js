function Circle(radius) {
    // 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩 된다.


    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius
    };

    // 3. 암묵적으로 this를 반환한다.
    // 명시적으로 원시값을 반환 하면 원시값 반환은 무시되고 this가 반환된다.
    return 100;
}

const circle = new Circle(10);
console.log(circle);