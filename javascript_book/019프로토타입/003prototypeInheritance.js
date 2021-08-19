function Circle(radius){
    this.radius = radius;
}

//Circle 객체 안에 공유해서 사용할 수 있는 프로토 타입을 추가
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩
Circle.prototype.getArea = () => {
    return Math.PI * this.radius**2;
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea);