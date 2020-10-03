function Value(){
    y = document.getElementById("converter").value;
    return y;
}

function Calculate(){
    y = Value();
    
    x = document.getElementById("value1").value;
        if(x == ""){
            document.getElementById("value2").value = "";
        }else{
            switch(y){
                case "Gram":
                    document.getElementById("value2").value = x / 1000;
                break;
                    
                case "Pound":
                    document.getElementById("value2").value = x * 0.45359237;
                break;
                    
                case "Ounce":
                    document.getElementById("value2").value = x * 0.02834952;
                break;
                    
                case "Tonne":
                    document.getElementById("value2").value = x * 1000;
                break;
                    
                case "Milligram":
                    document.getElementById("value2").value = x / 1e+6;
                break;
                    
                 case "Microgram":
                    document.getElementById("value2").value = x / 1e+9;
                break;
                    
            }
        }
}
