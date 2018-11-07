// to transport the whole constructor we need module.exports 
var calculations = module.exports = function(){
  console.log("calculation constructor")
}
calculations.prototype.addNumbers = function(a, b){
  return a + b
}
