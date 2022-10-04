const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  { name: "dog", sound: "woof" }
];

// //Destructuring Arrays
// console.log(animals);
// const [cat, dog] = animals;
// console.log(cat);

// //Destructuring Objects
// const {name, sound} = cat;
// //Here we are giving each element its on name we can use
// const {name:catName, sound:catSound} = cat;
// const {feedRequirements: {food, water}} = cat;
// //this accesses the food element directly
// console.log(food)

//Set State function
//this can be imported as a use state and destructured
// function useAnimals(animal){
//   return[
//     animal,
//     function(){
//       return animal.sound
//     }
//   ]
// }

export default animals;
//export {useAnimals}
