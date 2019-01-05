var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
console.log(1);
// Write a while loop that prints out the contents of ingredients:
var i = 0;
while(i < ingredients.length){
    console.log(ingredients[i]);
    i++;
}
console.log(2);
// Write a for loop that prints out the contents of ingredients:
for(j = 0; j < ingredients.length; j++){
    console.log(ingredients[j]);
}
console.log(3);
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(k = ingredients.length - 1; k >= 0; k--){
    console.log(ingredients[k]);
}