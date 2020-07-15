import { StringManipulationService } from "./app-service";

class ArrayManipulations implements StringManipulationService {
  arrayFindMultiples(myArray: any): Array<Number> {
    let a = [];
    let i = 0;
    let j = 0;
    for (i = 0; i < myArray.length; i++) {
      if (myArray[i] % 5 == 0 || myArray[i] % 10 == 0) {
        a[j] = myArray[i];
        j++;
      }
    }
    return a;
  }
  arraySeparate(myArray: any): Array<String> {
    let a = [];
    let j = 0;
    let i = 0;
    for (i = 0; i < myArray.length; i++) {
      if (typeof myArray[i] == "string") {
        a[j] = myArray[i];
        j++;
      }
    }
    return a;
  }
  arraySplit(myArray: any): Array<String> {
    let a: any[];
    return a;
  }
  arraySort(myArray: any): Array<String> {
    myArray.sort();
    return myArray;
  }
  arrayReplace(myArray: any): Array<Number> {
    let i = 0;
    for (i = 0; i < myArray.length; i++) {
      if (myArray[i] % 3 == 0) {
        myArray[i] = 5;
      }
    }
    return myArray;
  }
}
let myArray: any[] = [2, 5, 10, "nandan", 44, 25, 46, 80, 96, "string"];
let array = new ArrayManipulations();

console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
