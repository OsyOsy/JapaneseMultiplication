//Useful future resources
//https://koenvangilst.nl/blog/react-hooks-with-canvas

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Set origin to bottom left hand corner
//https://stackoverflow.com/questions/7707286/set-canvas-origin-to-the-lower-left-corner
ctx.translate(0, canvas.height);
ctx.scale(1, -1);

ctx.fillStyle = 'white';
ctx.fillRect(10, 10, 500, 500); // 

function drawlineBasic (initialX, initialY, finalX, finalY, color = 'black') {
    ctx.beginPath();  
    ctx.setLineDash([]);   
    ctx.moveTo(initialX, initialY);    
    ctx.lineTo(finalX, finalY);  
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke(); 
}

//This needs Refactoring into succinct function
function spreadAcrossInterval(number, intervalStart, intervalEnd) {
    const iL =  intervalEnd - intervalStart; //iL = interval Length
    if (number == 1) return [intervalStart+ (1/2)*iL];
    if (number == 2) return new Array(intervalStart, intervalEnd);
    if (number == 3) return new Array(intervalStart, intervalStart+ (1/2)*iL, intervalEnd);
    if (number == 4) return new Array(intervalStart, intervalStart+ (1/3)*iL, intervalStart+ (2/3)*iL, intervalEnd);
    if (number == 5) return new Array(intervalStart, intervalStart + (1/4)* iL,intervalStart+ (2/4)*iL, intervalStart+ (3/4)*iL, intervalEnd);
    if (number == 6) return new Array(intervalStart, intervalStart + (1/5)* iL, intervalStart + (2/5)* iL, intervalStart + (3/5)* iL,intervalStart + (4/5)* iL, intervalEnd);
    if (number == 7) return new Array(intervalStart, intervalStart+ (1/6)*iL,intervalStart+ (2/6)*iL,intervalStart+ (3/6)*iL,intervalStart+ (4/6)*iL,intervalStart+ (5/6)*iL,  intervalEnd);
    if (number == 8) return new Array(intervalStart,intervalStart+ (1/7)*iL, intervalStart+ (2/7)*iL,intervalStart+ (3/7)*iL,intervalStart+ (4/7)*iL,intervalStart+ (5/7)*iL,intervalStart+ (6/7)*iL,intervalEnd);
    if (number == 9) return new Array(intervalStart,intervalStart+ (1/8)*iL, intervalStart+ (2/8)*iL, intervalStart+ (3/8)*iL, intervalStart+ (4/8)*iL, intervalStart+ (5/8)*iL, intervalStart+ (6/8)*iL, intervalStart+ (7/8)*iL,  intervalEnd);
 }

function convertListsToNestedArr (xValuesInitial,yValuesInitial,xValuesFinal,yValuesFinal){
    let nestedArr = new Array();
    for (let i = 0; i<xValuesInitial.length; i++){
        let initial = new Array(xValuesInitial[i], yValuesInitial[i])
        let final = new Array(xValuesFinal[i], yValuesFinal[i])
        let combined = new Array(initial, final)
    
        nestedArr.push(combined)   
    }
    return nestedArr 

}

function drawMultiplicationLine1 (number1, draw = true) {
    //let xValuesInitial = [35,40,45,50,55,60,65,70,75]
    //let xValuesInitial = [35,40]
    let xValuesInitial =  spreadAcrossInterval(parseInt(number1), 35, 75) 
    const yValuesInitial = xValuesInitial.map(x => -x +250)
    const xValuesFinal = xValuesInitial.map(x => x +250)
    const yValuesFinal = xValuesFinal.map(x => -x +750)
   if (draw == true) {
    for (let i = 0; i < xValuesInitial.length; i++) {
        drawlineBasic (xValuesInitial[i], yValuesInitial[i] , xValuesFinal[i], yValuesFinal[i], color = 'black')
   }}
   if (draw == false) {
    return convertListsToNestedArr (xValuesInitial,yValuesInitial,xValuesFinal,yValuesFinal)
    }
}; 

function drawMultiplicationLine2 (number2, draw = true) {
    //let xValuesInitial = [175,180]
    //let xValuesInitial = [175,180,185,190,195,200,205,210,215]
    let xValuesInitial =  spreadAcrossInterval(parseInt(number2), 175, 215) 
    const yValuesInitial = xValuesInitial.map(x => -x +250)
    const xValuesFinal = xValuesInitial.map(x => x +250)
    const yValuesFinal = xValuesFinal.map(x => -x +750)
    if (draw == true) {
    for (let i = 0; i < xValuesInitial.length; i++) {
        drawlineBasic (xValuesInitial[i], yValuesInitial[i] , xValuesFinal[i], yValuesFinal[i], color = 'black')
    }};
    if (draw == false) {
        return convertListsToNestedArr (xValuesInitial,yValuesInitial,xValuesFinal,yValuesFinal)
    }
};

function drawMultiplicationLine3 (number3, draw = true) {
    //let xValuesInitial = [35,40]
    //let xValuesInitial = [35,40,45,50,55,60,65,70,75]
    let xValuesInitial =  spreadAcrossInterval(parseInt(number3), 35, 75) 
    const yValuesInitial = xValuesInitial.map(x => x + 250)
    const xValuesFinal = xValuesInitial.map(x => x +250)
    const yValuesFinal = xValuesFinal.map(x => x - 250)
    if (draw == true) {
        for (let i = 0; i < xValuesInitial.length; i++) {
            drawlineBasic (xValuesInitial[i], yValuesInitial[i] , xValuesFinal[i], yValuesFinal[i], color = 'black')
        }};
    if (draw == false) {
        return convertListsToNestedArr (xValuesInitial,yValuesInitial,xValuesFinal,yValuesFinal)
    }
};

function drawMultiplicationLine4 (number4, draw = true) {
    //let xValuesInitial = [175,180]
    //let xValuesInitial = [175,180,185,190,195,200,205,210,215]
    let xValuesInitial =  spreadAcrossInterval(parseInt(number4), 175, 215) 
    const yValuesInitial = xValuesInitial.map(x => x +250)
    const xValuesFinal = xValuesInitial.map(x => x +250)
    const yValuesFinal = xValuesFinal.map(x => x - 250)
    if (draw == true) {

    for (let i = 0; i < xValuesInitial.length; i++) {
        drawlineBasic (xValuesInitial[i], yValuesInitial[i] , xValuesFinal[i], yValuesFinal[i], color = 'black')
    }}
    if (draw == false) {
        return convertListsToNestedArr (xValuesInitial,yValuesInitial,xValuesFinal,yValuesFinal)
    }
};


function displayLines(number1, number2) {
    const numbera = parseInt((number1.toString())[0])
    const numberb = parseInt((number1.toString())[1])
    const numberc = parseInt((number2.toString())[0])
    const numberd = parseInt((number2.toString())[1])

    ctx.clearRect(0, 0, canvas.width, canvas.height); //This clears canvas when new calculation starts
   
    if (numbera != 0) drawMultiplicationLine1(numbera)
    if (numberb != 0) drawMultiplicationLine2(numberb)
    if (numberc != 0) drawMultiplicationLine3(numberc)
    if (numberd != 0) drawMultiplicationLine4(numberd)
}

//Example Multa = drawMultiplicationLine1 (number1, draw = false) 
function intercept2of4(Multa, Multb) {
    let intersectionArr = new Array();
    for (let i = 0; i< Multa.length;i++){
        for (let j = 0; j< Multb.length;j++){
            let point = calculateIntersection(Multa[i][0], Multa[i][1], Multb[j][0], Multb[j][1], draw = false)
            console.log(point)
            intersectionArr.push(point);
        }
    }
    return intersectionArr
}


function MiddletotalInterSection(number1, number2){
    const numbera = parseInt((number1.toString())[0])
    const numberb = parseInt((number1.toString())[1])
    const numberc = parseInt((number2.toString())[0])
    const numberd = parseInt((number2.toString())[1])

    let Mult1 = drawMultiplicationLine1(numbera , draw = false) ;
    let Mult2 = drawMultiplicationLine2(numberb, draw = false) ;
    let Mult3 = drawMultiplicationLine3(numberc, draw = false) ;
    let Mult4 = drawMultiplicationLine4(numberd, draw = false) ;

    let list2 = intercept2of4(Mult1, Mult4)
    let list3 = intercept2of4(Mult2, Mult3)

    let concated = Array.from([].concat.apply([], [list1, list2,list3, list4]))
    return concated

}

function totalInterSection (number1, number2, part){
    const numbera = parseInt((number1.toString())[0])
    const numberb = parseInt((number1.toString())[1])
    const numberc = parseInt((number2.toString())[0])
    const numberd = parseInt((number2.toString())[1])

    let Mult1 = drawMultiplicationLine1(numbera , draw = false) ;
    let Mult2 = drawMultiplicationLine2(numberb, draw = false) ;
    let Mult3 = drawMultiplicationLine3(numberc, draw = false) ;
    let Mult4 = drawMultiplicationLine4(numberd, draw = false) ;

    let list1 = intercept2of4(Mult1, Mult3)
    let list2 = intercept2of4(Mult1, Mult4)
    let list3 = intercept2of4(Mult2, Mult3)
    let list4 = intercept2of4(Mult2, Mult4)

    if (part == 'rhs') return list4 
    if (part == 'lhs') return list1
    if (part == 'middle') return list3.concat(list2)
    if (part == 'total') {
        let concated = Array.from([].concat.apply([], [list1, list2,list3, list4]))
        return concated
    }
} 

function drawPoint (pointX, pointY, size=3, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(pointX, pointY, size, 0 * Math.PI, 2 * Math.PI);
    ctx.fill();
}


function drawInterSections (number1, number2) {
    
    let middle = totalInterSection (number1, number2, 'middle')
    let rhs = totalInterSection (number1, number2, 'rhs')
    let lhs = totalInterSection (number1, number2, 'lhs')
    for (let coordinate of middle) {
        drawPoint (coordinate[0], coordinate[1], size=5, 'red')}
    for (let coordinate of rhs) {
        drawPoint (coordinate[0], coordinate[1], size=5, 'blue')}
    for (let coordinate of lhs) {
        drawPoint (coordinate[0], coordinate[1], size=5, 'green')
        ;}
}


function drawCurvedLines () {
    ctx.beginPath(); 
    ctx.setLineDash([5, 15]);
    ctx.moveTo(20,120)
    ctx.bezierCurveTo(240,120,240, 380, 20,380)
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'grey';
    
    ctx.stroke(); 

    ctx.beginPath();
    ctx.setLineDash([5, 15]); 
    ctx.moveTo(480,120)
    ctx.bezierCurveTo(260,120, 260,380, 480, 380)
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'grey';
    ctx.stroke(); 
}

const step1Btn = document.getElementById("Step1");

step1Btn.addEventListener("click", () => {displayLines(
    parseInt(document.getElementById('number1').value), 
    parseInt(document.getElementById('number2').value))}
    );

const step2Btn = document.getElementById("Step2");

step2Btn.addEventListener("click", () => drawCurvedLines()
    ); 

const step3Btn = document.getElementById("Step3");

step3Btn.addEventListener("click", () => {drawInterSections (
    parseInt(document.getElementById('number1').value), 
    parseInt(document.getElementById('number2').value))}
    );

function calculateIntersection(p1, p2, p3, p4) {
	
        // down part of intersection point formula
        var d1 = (p1[0] - p2[0]) * (p3[1] - p4[1]); // (x1 - x2) * (y3 - y4)
        var d2 = (p1[1] - p2[1]) * (p3[0] - p4[0]); // (y1 - y2) * (x3 - x4)
        var d  = (d1) - (d2);
    
   

        if(d == 0) {
          throw new Error('Number of intersection points is zero or infinity.');
      }
    
        // upper part of intersection point formula
        var u1 = (p1[0] * p2[1] - p1[1] * p2[0]); // (x1 * y2 - y1 * x2)
        var u4 = (p3[0] * p4[1] - p3[1] * p4[0]); // (x3 * y4 - y3 * x4)
        
        var u2x = p3[0] - p4[0]; // (x3 - x4)
        var u3x = p1[0]- p2[0]; // (x1 - x2)
        var u2y = p3[1] - p4[1]; // (y3 - y4)
        var u3y = p1[1] - p2[1]; // (y1 - y2)
    
        // intersection point formula
        
        var px = (u1 * u2x - u3x * u4) / d;
        var py = (u1 * u2y - u3y * u4) / d;
        
        var pxrounded = Math.round(px * 10) / 10
        var pyrounded = Math.round(py * 10) / 10


        var p = [pxrounded,pyrounded]
        return p
  }
  



function totalRHS (){
   /*  ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    //ctx.rotate(Math.PI*2/(Math.PI*6));
    ctx.fillText("Hello World", canvas.width/2, canvas.height/2); */
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.translate(100,100);  
    ctx.save();
    ctx.rotate(Math.PI);  
    ctx.fillText("TEST", 10, 10);
    ctx.restore();

}






// We write 4 functions to find intersection points of the 4 groups of lines




/* 

    function drawDiamond() {
        drawlineBasic (250, 0, 500, 250) 
        drawlineBasic (500, 250, 250, 500) 
        drawlineBasic (250, 500, 0, 250) 
        drawlineBasic (0, 250, 250, 0) 
        
        drawlineBasic (250, 0 + 70, 500 - 70, 250) 
        drawlineBasic (500 -70 , 250, 250, 500 - 70) 
        drawlineBasic (250, 500 -70 , 0 + 70, 250) 
        drawlineBasic (0 + 70, 250, 250, 0 + 70)  
        
        } */
        


//displayLines(34, 27) 

//displayLines(number1, number2) 


/* drawMultiplicationLine1(2)
drawMultiplicationLine2(5)
drawMultiplicationLine3(6)
drawMultiplicationLine4(7)

 */







/* var degreeToRadians = function (degree) {
    return degree * Math.PI / 180
  }

function drawlineAngle (initialX, initialY, length, angle = 45, color = 'black') {
    const changeX = length* Math.cos(degreeToRadians(angle));
    const changeY = length* Math.sin(degreeToRadians(angle));
    const finalX = initialX + changeX;
    const finalY = initialX - changeY;

    drawlineBasic(initialX, initialY, finalX, finalY, color) */


//length = Math.sqrt(2 * 250**2)
//drawlineAngle (0, 250, length = 0, angle = 0, color = 'red')




    
    //mylist.push(Array([list1[i],list2[i], Array(list2[i], list3[i])
    




//Adding text to canvas to display steps
/* /function addTextToCanvas () {
    

} 


ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);


const nextStepBtn = document.getElementById("next step");


nextStepBtn.addEventListener("click", () => {
    addTextToCanvas () 
}
    ); */

/* 
    function interMult1and4() {
        let Mult1 = drawMultiplicationLine1 (5, draw = false)
        let Mult4 = drawMultiplicationLine4 (5, draw = false)
        let intersectionArr = new Array();
        for (let i = 0; i< Mult1.length;i++){
            for (let j = 0; j< Mult4.length;j++){
                let point = calculateIntersection(Mult1[i][0], Mult1[i][1], Mult4[j][0], Mult4[j][1], draw = false)
                console.log(point)
                intersectionArr.push(point);
            }
        }
        return intersectionArr.length
    } */