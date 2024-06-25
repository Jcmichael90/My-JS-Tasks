const side1 = 3

const side2 = 2

const side3 = 1

if(side1 === side2 && side2 === side3) {
    console.log('Equalateral triangle')

}else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log('Isosceles triangle')

}else {
    console.log('scalene triangle')
}