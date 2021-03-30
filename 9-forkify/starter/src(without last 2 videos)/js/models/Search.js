import axios from 'axios';

export default class Search 
{
    constructor(query)
    {
        this.query=query;
    }

    async  getResults() // the query is only by the first letter of the drink
    {   
        try
        {
            // const crossOrigin = "https://crossorigin.me/";
            const res = await axios(`http://www.omdbapi.com/?apikey=450c748&s=${this.query}`); // movie api website : http://www.omdbapi.com/
            console.log(res);
            this.result = res.data.Search;
            // console.log(this.result);
        }
        catch(error)
        {
            console.log(error);
        }
}
}