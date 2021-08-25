function isInstanceof(instance, constructor){
    // 프로토타입 취득
    const prototype = Object.getPrototypeOf(instance);

    // 재귀탈출조건
    // prototype 이 null 이면 프로토 타입 체인의 종점에 다다른것
    if(prototype === null ) return false;

    // 프로토타입이 생성자 함수의 prototype 프로
    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(me, Person));
console.log(isInstanceof(me,Object));
console.log(isInstanceof(me, Array));