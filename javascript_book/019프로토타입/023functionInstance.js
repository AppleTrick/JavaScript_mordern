function isInstanceof(instance, constructor){
    // 프로토타입 취득
    const prototype = Object.getPrototypeOf(instance);

    // 재귀탈출조건
    // prototype 이 null 이면 프로토 타입 체인의 종점에 다다른것
    if(prototype === null ) return false;

    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}
