// Bài 2 : Viết 1 chương trình chuẩn hóa một câu: loại bỏ các khoảng trắng (space) ở đầu và cuối
// câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác
// trong từ viết thường

let text = " heLlo riKKei acaDemy ";
let textNew = text.trim();
console.log(textNew);

let textNewLower = textNew.toLowerCase();
console.log(textNewLower);

let arrayText = textNewLower.split(" ");
console.log(arrayText);

for (let i = 0; i < arrayText.length; i++) {
  arrayText[i] =
    arrayText[i][0].toUpperCase() + arrayText[i].slice(1).toLowerCase();
}

console.log(arrayText);
let result =arrayText.join(" ");
console.log(result);