console.log("this is modules")
function average(array){
    let sum = 0
    array.forEach(element => {
        sum += element
        
    });
    return sum/array.length
}

// modules.exports = {
//     avg : average,
//     name : "satish",
//     repo: "github"
// }

module.exports.name = "satish"