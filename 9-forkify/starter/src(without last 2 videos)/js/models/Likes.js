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
        return like;
    }

    deleteLike(id)
    {
        const index = this.likes.findIndex(el => el.id === id)
        this.likes.splice(index, 1);
    }

    isLiked(id)
    {
        return this.likes.findIndex(el => el.id === id) !== -1
    }

    getNumLikes()
    {
        return this.likes.length;
    }
}