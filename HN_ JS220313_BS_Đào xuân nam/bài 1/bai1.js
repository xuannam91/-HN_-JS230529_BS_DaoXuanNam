// đề bài: Cho 1 mảng các phần tử in ra phần tử lớn nhất trong mảng 

let numbers = [-3,5,88,99,76,8,4,5,85,63];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max){
        max = numbers[i]
    }
}
console.log('giá trị cao nhất ' + max);