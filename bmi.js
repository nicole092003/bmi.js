document.getElementById("CalcBMI").adEventListener('click',doCalcBMI);

function doCalcBNI(){
    let theWeight = document.getElementById("myPounds").value;
    let theHeight = document.getElementById("myHeight").value;
    let myBMI = (theWeight / (theHeight * theHeight))*730
    myBMI = myBMI.toFixed(3);
    document.getElementById("bmiResult").INNERhtml = myOutput(myBMI)
}
function myOutput(getBMI){
    let theString = "Your body mass index (BMI) is: "  getBMI,
    return theString;
}
