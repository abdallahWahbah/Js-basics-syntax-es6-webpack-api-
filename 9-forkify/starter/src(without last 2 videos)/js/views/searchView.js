
import {elements} from './base'

export const getInput = ()=> elements.searchInput.value;
export const clearInput = ()=> elements.searchInput.value ="";
export const clearResList = () => 
{
    elements.searchResList.innerHTML="";
    elements.searchResPages.innerHTML="";
}

export const highlightSelected = id =>
{
    const resultsArr = Array.from(document.querySelectorAll(".results__link"));
    resultsArr.forEach(el =>
    {
        el.classList.remove("results__link--active");
    })
    document.querySelector(`.results__link[href="#${id}"]`).classList.add("results__link--active");
}

/*
// 'Pasta with tomato and spinach'
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']
*/

export const limitMovieTitle = (title, limit = 17) =>
{
    const newTitle=[];
    if(title.length > limit)
    {
        title.split(' ').reduce((acc, cur) =>
        {
            if(acc + cur.length <= limit)
            {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0)
        return `${newTitle.join(" ")} ...`;
    }
    return title;
}

const renderMovie = (movie) =>
{
    const markup = `
        <li>
            <a class="results__link" href="#${movie.imdbID}">
                <figure class="results__fig">
                    <img src="${movie.Poster}" alt="${movie.Title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitMovieTitle(movie.Title)}</h4>
                    <p class="results__author">${movie.Type}</p>
                </div>
            </a>
        </li>
        `;

        elements.searchResList.insertAdjacentHTML("beforeend", markup);
}

// type : 'prev' or 'next'
const createButton = (page, type) =>
{
    // data-goto is related to html5
    return  `
                <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page-1 : page+1}> 
                    <span>Page ${type === 'prev' ? page-1 : page+1}</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
                    </svg>
                </button>
            `;
}

const renderButton = (page, numResults, resPerPage) =>
{
    const pages = Math.ceil ( numResults / resPerPage);
    let button;

    if(page === 1 && pages > 1)
    {
        // Show only one button pointing to the next page (right)
        button = createButton(page, 'next')
    }
    else if (page < pages)
    {
        // Show 2 button, next and prev
        button =
        `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `
    }
    else if (page === pages && pages > 1)
    {
        // Show one button to prev
        button = createButton(page, 'prev')
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (movies, page = 1, resPerPage = 6) =>
{
    // render results od the current page
    const start = (page-1) * resPerPage;
    const end = page * resPerPage;

    movies.slice(start, end).forEach((el) => renderMovie(el));

    // Render pagination button
    renderButton(page, movies.length, resPerPage);
}