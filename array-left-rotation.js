function rotateLeft(d, arr) {
   let newArray = []
   for (let i = d; i < arr.length; i++) {
    newArray.push(arr[i])
   }
   let sliced = arr.slice(0, arr.length - newArray.length)
//    console.log(newArray.concat(arr.slice(0, arr.length - newArray.length)))
console.log(newArray.concat(sliced))

}

rotateLeft(2, [1, 2, 3, 4, 5])
rotateLeft(4, [1, 2, 3, 4, 5])