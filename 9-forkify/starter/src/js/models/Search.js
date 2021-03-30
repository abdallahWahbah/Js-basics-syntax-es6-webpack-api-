import axios from 'axios';

export default class Search 
{
    constructor(query)
    {
        this.query=query;
    }

    async  getResults() // you can use the database provided in the project(videos) file if you got errors while using the api
    {   
        try
        {
            // const crossOrigin = "https://crossorigin.me/";
            const key = "450c748"
            const res = await axios(`http://www.omdbapi.com/?apikey=${key}&s=${this.query}`); // movie api website : http://www.omdbapi.com/
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