import uniqid from "uniqid";

export default class List 
{
    constructor ()
    {
        this.items = [];
    }

    addItem (count, unit, ingredient)
    {
        const item =
        {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }

    deleteItem(id)
    {
        const index = this.items.findIndex (el => el.id === id);
        // [2, 4 ,8] splice(1, 2) (start, num of elements) --> returns [4, 8], original array = [2]
        // [2, 4, 4] slice(1, 2) (start, end) --> returns 4 because the end in excluded, original array = [2, 4, 8]
        this.items.splice(index, 1);
    }

    updateCount(id, newCount)
    {
      this.items.find((el) => el.id === id).count = newCount; // this.items.find(el => el.id===id) returns the whole item(count, unit, ingredient)
    }
}