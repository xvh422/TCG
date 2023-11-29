//Task 1

for (let i = 1; i <= 12; i++) {
    console.log(`7 x ${i} = ${i * 7}`);
  }

//Tasks 2 & 3

const favouriteFoods = ['Lasagne', 'Burgers', 'Stir Fry', 'Fried Chicken', 'Macaroni', 'Chocolate Fudge Cake', 'Dumplings'];

for (const food of favouriteFoods) {
    console.log(food);
}

//Tasks 4 & 5

const favoriteRecipe = {
    title: 'Roasted aubergine with peanuts, chilli & lime',
    servings: 2,
    ingredients: ['2 aubergines, cut lengthways into eighths', '1 red pepper, roughly sliced', '170g baby corn', '3 cloves of garlic, grated', '5cm ginger, grated', '1 teaspoon sea salt flakes', '2 tablespoons sesame oil', 'Lots of freshly ground black pepper', '1 heaped tablespoon crunchy peanut butter (approx. 75g)', '2 tablespoons good soy sauce', '1 tablespoon sesame oil', '4 tablespoons water', '2-4 limes, juice only', '1 fresh red chilli, thinly sliced'],
    directions: "Preheat the oven to 180C fan/200°C/gas 6. Tip the aubergines, red pepper and corn into a tin large enough to hold them all in. one layer and mix through the garlic, ginger, salt. sesame oil and black pepper. Transfer to the oven and roast for 45 minutes. Meanwhile, mix together allthe Ingredients for the dressing and set aside. (You want a good spoonable consistency, something like double cream, so you may need to add a little more water to adjust the texture depending on your brand of peanut butter). Once the aubergines are cooked through, pour over the dressing, taste and adjust the sat as needed, scatter over the fresh coriander and serve hot with quick-cook rice or noodles.",
    letsCook(foodName) {
        console.log(`I'm hungry! Let's cook ${foodName}`);
    }
}

recipeSections = ['title', 'servings', 'ingredients', 'directions']

for (const section of recipeSections) {
    console.log(favoriteRecipe[section]);
}

favoriteRecipe.letsCook(favoriteRecipe.title);