const calculateTemp = () =>{
    const inputTemp  = document.getElementById("Value").value;
    const display= document.getElementById("result");
    const tempSelected = document.getElementById("unit");

    if(tempSelected.value == "cel"){
        console.log(inputTemp, "C to F", tempSelected.value);
        let F= inputTemp *(9/5)+32;
        display.innerHTML = F.toFixed(2)+ "F";
    }
    else{
        console.log(inputTemp, "F to C", tempSelected.value)
        let c= (inputTemp-32)*(5/9);
        display.innerHTML = c.toFixed(2)+ "C";
    }
}
