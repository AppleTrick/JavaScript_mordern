// 생성자 함수 선언

function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

// 인스턴스 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());