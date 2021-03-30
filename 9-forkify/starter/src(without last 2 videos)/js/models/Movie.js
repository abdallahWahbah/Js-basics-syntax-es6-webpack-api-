import axios from 'axios';

export default class Movie
{
    constructor(id)
    {
        this.id=id;
    }

    async getMovie()
    {
        try
        {
            const res = await axios(`http://www.omdbapi.com/?apikey=450c748&i=${this.id}`);
            // console.log(res);
            this.title = res.data.Title;
            this.actors = res.data.Actors;
            this.img = res.data.Poster;
            this.year = res.data.Year;
            this.movieID = res.data.imdbID;
            this.ingredients = ["1/2 cups of water", "2 tbsp olive oil", "1 teaspoon sugar", "4 ounces cheese", "4 teaspoon sauce", "feta cheese", "1 .5 ounces of sugar", "cup susage", "1 ounce sugar", "76 tablespoon"];
            // console.log(this.title, this.actors, this.img, this.year, this.movieID)
            // console.log(this);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    calcTime()
    {
        const numRatings = this.ingredients.length; 
        const period = Math.ceil(numRatings / 2);
        this.time = period * 15;
    }

    calcServings()
    {
        this.servings = 400;
    }

    parseIngredients()
    {
        const unitsLong = ["tablespoons", "tablespoon", "ounces", "ounce", "teaspoons", "teaspoon", "cups", "pounds"];
        const unitsShort=["tbsp", "tbsp", "oz", "oz", "tsp", "tsp", "cup", "pound"];

        const newIngredients = this.ingredients.map(el =>
        {
            // Uniform units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) =>
            {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });

            // Remove parantheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

            // Parse ingredient into count, unit and ingredient
            const arrIngredient = ingredient.split(" ");
            const unitIndex = arrIngredient.findIndex( el2 => unitsShort.includes(el2));

            let objIng;
            if(unitIndex > -1)
            {
                // There is a unit
                // Ex. 4 1/2 cups, arrCount is [4, 1/2] --> eval("4+1/2") --> 4.5
                // Ex. 4 cups, arrCount is [4]
                const arrCount = arrIngredient.slice(0, unitIndex);

                let count;
                if(arrCount.length === 1)
                {
                    count = eval(arrIngredient[0].replace("-", "+"));
                }
                else
                {
                    count = eval(arrIngredient.slice(0, unitIndex).join("+"));
                }

                objIng =
                {
                    count,
                    unit : arrIngredient[unitIndex],
                    ingredient: arrIngredient.slice(unitIndex + 1).join(" ")
                }

            }
            else if (parseInt(arrIngredient[0], 10)) // 10 is decimal
            {
                // No unit, but 1st element is a number
                objIng = 
                {
                    count : parseInt(arrIngredient[0], 10),
                    unit : "",
                    ingredient : arrIngredient.split(1).join(" ")
                }
            }
            else if(unitIndex === -1)
            {
                // No unit and no number in the first position
                objIng = 
                {
                    count : 1,
                    unit :"",
                    ingredient // ingredient :ingredient
                }
            }

            return objIng;
        });
        this.ingredients = newIngredients;
    }

    updateServings(type)
    {
        // Servings
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

        // Ingredients
        this.ingredients.forEach(ing =>
        {
            ing.count = ing.count * (newServings / this.servings);  
        });

        this.servings = newServings;
    }

     
}