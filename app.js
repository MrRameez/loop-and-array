let matrix1 = [
    [2, 3, 4],
    [2, 5, 6],
    [3, 4, 3],
];
let matrix2 = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
];

let result = [];

for (let i = 0; i < matrix1.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix1[i].length; j++) {
        let Sum = matrix1[i][j] + matrix2[i][j];
        result[i].push(Sum);
    }
}

console.log(result);


let matrix3 = [
    [2, 3, 4, 5, 3, 6, 7, 8, 9],
    [2, 4, 3, 1, 4],
    [2, 12, 3, 42],
    [3, 5, 3, 32, ],
    [3, 1,],
    [9],
    [10, 12, 14],
    [13, 9, 0, 1],
]

for (let i = 0; i < matrix3.length; i++) {
    console.log(matrix3[i]);
    for (let j = 0; j < matrix3[i].length; j++) {
        
    }
    
    // console.log(matrix3[i].length);
}

