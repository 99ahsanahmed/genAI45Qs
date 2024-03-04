//45
function carInfo(manu:string,mode:string,obj:{[key:string]:any}){
    var car ={
        manufacturar:manu,
        model:mode,
        ...obj,
    }
    return car;
}

console.log(carInfo('toyota','2020',{car:'color',condition:'genuine'}));