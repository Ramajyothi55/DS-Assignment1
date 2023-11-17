function customReverse(originalArray) {

    let leftIndex = 0;
    let rightIndex = originalArray.length - 1;
  
    while (leftIndex < rightIndex) {
  
      // Swap the elements with temp variable
      let temp = originalArray[leftIndex];
      originalArray[leftIndex] = originalArray[rightIndex];
      originalArray[rightIndex] = temp;
  

      leftIndex++;
      rightIndex--;
    }
  }
  let originalArray = [1, 2, 3, 4, 5];

customReverse(originalArray);

console.log(originalArray);
