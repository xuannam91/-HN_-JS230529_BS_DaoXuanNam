// Bài 4 : Viết một chương sắp xếp các phần tử trong mảng theo thứ tự GIẢM DẦN 
// bằng 2 cách: sử dụng và không sử dụng hàm sort


let numbers = [3, 25, 38, 49, 12, -7, 45, 98];

// Không sử dụng hàm sort.

let support = 0;

for (let i = 0; i < numbers.length; i++) {
    for (let j = i+1; j < numbers.length; j++) {
      if(numbers[j] > numbers[i]){
        support = numbers[j]; 
        numbers[j] = numbers[i];
        numbers[i] = support;
      }
    }
    
}
console.log(numbers);





// Sử dụng Hàm sort.

numbers.sort(
  function(a,b){
    return b - a; 
  }
);
console.log(numbers);