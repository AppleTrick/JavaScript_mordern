const circle = {
    radius : 5,

    getDiameter(){
        return 2 * this.radius;
    },

    getPerimeter(){
        return 2 * this.radius * Math.PI ;
    },

    getArea(){
        return Math.PI * this.radius ** 2;
    }
};

console.log(circle);

console.log(circle.getArea());
console.log(circle.getDiameter());
console.log(circle.getPerimeter());