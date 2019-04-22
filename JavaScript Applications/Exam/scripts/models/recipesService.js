let recipesService = (() => {
    function loadRecipes() {
        return requester.get('appdata', 'recipes', 'kinvey');
    }

    function loadRecipeDetails(recipeId) {
        return requester.get('appdata', 'recipes/' + recipeId, 'kinvey');
    }


    function edit(meal, ingredientsInput, prepMethod, description, foodImageURL, category, likesCounter, recipeId) {
        const categoryImages = {
            'Vegetables and legumes/beans' : 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg',
            'Grain Food' : 'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg',
            'Fruits' : 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg',
            'Milk, cheese, eggs and alternatives' : 'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg',
            'Lean meats and poultry, fish and alternatives' : 'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg',
        }
        debugger;
        let categoryImageURL = categoryImages[category];
        let ingredients = ingredientsInput.split(', ');
        let recipeData = {
            meal,
            ingredients,
            prepMethod,
            description,
            foodImageURL,
            categoryImageURL,
            category,
            likesCounter : likesCounter,
        };

        return requester.update('appdata', 'recipes/' + recipeId, 'kinvey', recipeData);
    }

    function createRecipe(meal, ingredientsInput, prepMethod, description, foodImageURL, category) {
        const categoryImages = {
            'Vegetables and legumes/beans' : 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg',
            'Grain Food' : 'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg',
            'Fruits' : 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg',
            'Milk, cheese, eggs and alternatives' : 'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg',
            'Lean meats and poultry, fish and alternatives' : 'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg',
        }
        let categoryImageURL = categoryImages[category];
        let ingredients = ingredientsInput.split(', ');
        let recipeData = {
            meal,
            ingredients,
            prepMethod,
            description,
            foodImageURL,
            categoryImageURL,
            category,
            likesCounter : 0,
        };
        
        return requester.post('appdata', 'recipes', 'kinvey', recipeData);
    }

    function deleteRecipe(recipeId){
        return requester.remove('appdata','recipes/' + recipeId, 'kinvey');
    }

    async function likeRecipe(recipeId){
        let recipe = await loadRecipeDetails(recipeId)
        recipe.likesCounter++;
        return requester.update('appdata', 'recipes/' + recipeId, 'kinvey', recipe);
    }

    return {
        loadRecipes,
        loadRecipeDetails,
        edit,
        createRecipe,
        deleteRecipe,
        likeRecipe
    }
})()