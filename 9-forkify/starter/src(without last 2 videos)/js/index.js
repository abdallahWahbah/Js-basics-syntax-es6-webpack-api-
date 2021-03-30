
import Search from './models/Search'
import Movie from './models/Movie'
import List from "./models/List";
import Likes from "./models/Likes";
import { elements, renderLoader, clearLoader } from "./views/base";
import * as searchView from './views/searchView';
import * as listView from './views/listView';
import * as likesView from "./views/likesView";
import * as movieView from "./views/movieView";

const state={};
window.state = state; // for testing purpose
/** 
 * SEARCH CONTROLLER 
 */
const controlSearch = async() =>
{
    // 1- Get query from the view
    const query = searchView.getInput();
    // console.log(query);

    if(query)
    {
        // 2- New search object and add to the state
        state.search = new Search(query);

        // 3- Prepare UI for results
        searchView.clearInput();
        searchView.clearResList();
        renderLoader(elements.searchRes);

        try
        {
            // 4- Search for drinks
            await state.search.getResults();

            // Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result)
            // console.log(state.search.result);    
        }
        catch(err)
        {
            alert("something went wrong with the search");
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener("submit", e =>
{
    e.preventDefault();
    controlSearch();
})

elements.searchResPages.addEventListener('click', e => // Delegation
{
    const btn = e.target.closest(".btn-inline");
    // console.log(btn);
    if(btn)
    {
        const gotoPage = parseInt(btn.dataset.goto, 10); // 10 is decimal
        console.log(gotoPage);
        searchView.clearResList();
        searchView.renderResults(state.search.result, gotoPage);
    }
})


/** 
 * Movie CONTROLLER 
 */


const controlMovie = async() =>
{
    // Get id from URL
    const id = window.location.hash.replace("#", ""); // window.locatio.hash >>>>> returns the id in the bar but with "#", so we must get rid of it................// replace the # with nothing
    // console.log(id);

    if(id)
    {
        // Prepare UI for changes
        movieView.clearMovie();
        renderLoader(elements.recipe);

        // Hightlight selected item
        if(state.movie) searchView.highlightSelected(id);

        // New movie object and add it to the state
        state.movie = new Movie(id);

        try {
            // Get movie data and parse ingredients
            await state.movie.getMovie();
            // console.log(state.movie.ingrediends);
            state.movie.parseIngredients();

            // Calculate servinds and time
            state.movie.calcTime();
            state.movie.calcServings();

            // Render movie
            clearLoader();
            movieView.renderMovie(state.movie, state.likes.isLiked(id));
            // console.log(state.movie);
        } catch (err) {
            console.log(err);
            alert("something went wrong with movie");
        }
    }
}

// window.addEventListener('hashchange', controlMovie);
// window.addEventListener('load', controlMovie);
// load event for refreshing the page.....without it, if you open the page with the id, it will not show the movie id
['load', 'hashchange'].forEach(event => window.addEventListener(event, controlMovie)); 


/**
 * LIST CONTROLLER
 */
const controlList = () =>
{
    // Create new list if there in none yet
    if(!state.list) state.list = new List();

    // Add each ingredient to the list and UI
    state.movie.ingredients.forEach(el =>
    {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}


// Handle delete and update list item events
elements.shopping.addEventListener('click', e =>
{
    const id = e.target.closest(".shopping__item").dataset.itemid; // related to listView module
    console.log(id)
    // Handle delete button
    if(e.target.matches(".shopping__delete, .shopping__delete *"))
    {
        // Delete from state
        state.list.deleteItem(id);

        //Delete from UI
        listView.deleteItem(id);
    }// handle count update
    else if (e.target.matches(".shopping__count-value"))
    {
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
})

/**
 * LIKE CONTROLLER
 */

 // For testing
 state.likes = new Likes();
 likesView.toogleLikeMenu(state.likes.getNumLikes());
 
const controlLike = () =>
{
    if(!state.likes) state.likes = new Likes();
    const currentID = state.movie.id;

    // User has NOT yet liked the movie
    if(!state.likes.isLiked(currentID))
    {
        // Add likes to the state
        const newLike = state.likes.addLike(
            currentID, 
            state.movie.title, 
            state.movie.actors, 
            state.movie.img);

        // Toggle the like button
        likesView.toggleLikeBtn(true);

        // Add like to UI
        likesView.renderLike(newLike)
    }
    // User HAS liked the movie
    else
    {
        // Remove likes from the state
        state.likes.deleteLike(currentID);

        // Toggle the like button
        likesView.toggleLikeBtn(false);

        // Remove like from UI
        likesView.deleteLike(currentID);

    }
    likesView.toogleLikeMenu(state.likes.getNumLikes());
}


// Handling recipe button clicks
elements.recipe.addEventListener('click', e => // Delegation
{
    if(e.target.matches('.btn-decrease, .btn-decrease *')) // * means its children
    {
        // Decrease button is clicked
        if(state.movie.servings > 1)
        {
            state.movie.updateServings('dec');
            movieView.updateServingsIngredients(state.movie);
        }
    }
    else if(e.target.matches('.btn-increase, .btn-increase *'))
    {
        // Increase button is clicked
        state.movie.updateServings('inc');
        movieView.updateServingsIngredients(state.movie);
    }
    // console.log(state.movie);
    else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *'))
    {
        // Add ingredients to shopping list
        controlList();
    }
    else if (e.target.matches('.recipe__love, .recipe__love * '))
    {
        controlLike();
    }
})

window.s = new List();




