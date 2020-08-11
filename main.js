// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numberArray.length; i++) {
//   console.log(numberArray[i]);
// }
const favoriteFoods = {
  breakfast: "bacon & eggs",
  lunch: "cheddar bowls",
  dinner: "pizza",
  dessert: "brownies"
};

console.log(favoriteFoods.dinner);
// const breakfastCard = `
// <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">${characters[i].name</h5>
//     <h6 class="card-subtitle mb-2 text-muted">${characters[i].location//</h6>
//     <p class="card-text">I love ${characters[i].loves</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>
// `;
const characters = [
  {
    name: "Leslie Knope",
    location: "Pawnee, India",
    loves: "waffles"
  },
  {
    name: "Ron Swanson",
    location: "Pawnee, India",
    loves: "silence"
  },
  {
    name: "April Ludgate",
    location: "Pawnee, India",
    loves: "Halloween"
  },
  {
    name: "Tom Haverford",
    location: "Pawnee, India",
    loves: "coconut water"
  }
];
for (let i = 0; i < characters.length; i++) {
  const characterCard = `
<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${characters[i].name}</h5><h6 class="card-subtitle mb-2 text-muted">${characters[i].location}</h6><p class="card-text">I love ${characters[i].loves}.</p></div></div> 
 `;
  $(".col").append(characterCard);
}
// $(".col").append(breakfastCard);
// console.log(favoriteFood.breakfast);
