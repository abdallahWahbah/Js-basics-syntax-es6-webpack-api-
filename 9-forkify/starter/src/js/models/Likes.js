export default class Likes
{
    constructor ()
    {
        this.likes = [];
    }

    addLike(id, title, actors, img)
    {
        const like={id, title, actors, img} // object >>>> id:id, title:title .........
        this.likes.push(like);

        // Persist data in the local storaga
        this.persistData();

        return like;
    }

    deleteLike(id)
    {
        const index = this.likes.findIndex(el => el.id === id)
        this.likes.splice(index, 1);

        // Persist data in the local storaga
        this.persistData();
    }

    isLiked(id)
    {
        return this.likes.findIndex(el => el.id === id) !== -1
    }

    getNumLikes()
    {
        return this.likes.length;
    }


    persistData()
    {
      localStorage.setItem("likes", JSON.stringify(this.likes)); // converts the array to string, cause you can't save anything except string    
    }

    readStorage()
    {
        const storage = JSON.parse(localStorage.getItem('likes'));// converts the string to the data structure that it was before
        if(storage) this.likes = storage; // restoring the likes from the storage
    }
}