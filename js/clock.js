const bigHand = document.querySelector(".clock__bighand")
const middleHand = document.querySelector(".clock__middlehand")
const smallHand = document.querySelector(".clock__smallhand")

let rotateBigHand = 0;
let rotateMiddleHand = 0;
let rotateSmallHand = 0;

const rotateBigHandFun = () => {
    switch(rotateBigHand){
        case 360:
            rotateBigHand = 0;
            default:
                rotateBigHand += 0.6;
    }

    bigHand.style.transform = `translate(-50%, -50%) rotate(${rotateBigHand}deg)`
}

const rotateMiddleHandFun = () => {
    switch(rotateMiddleHand){
        case 360:
            rotateMiddleHand = 0;
            default:
                rotateMiddleHand += 6;
    }

    middleHand.style.transform = `translate(-50%, -50%) rotate(${rotateMiddleHand}deg)`
}

const rotateSmallHandFun = () => {
    switch(rotateSmallHand){
        case 360:
            rotateSmallHand = 0;
            default:
                rotateSmallHand += 60;
    }

    smallHand.style.transform = `translate(-50%, -50%) rotate(${rotateSmallHand}deg)`
}

setInterval(() => {
    rotateBigHandFun()
    rotateMiddleHandFun()
    rotateSmallHandFun()
}, 1000)