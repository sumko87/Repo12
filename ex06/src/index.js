function myNes() {
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };
    // Only change code below this line
    var gloveBoxContent = myStorage.car.inside["glove box"];
    return gloveBoxContent
    // Only change code above this line
}
console.log(myNes());
module.exports = myNes;