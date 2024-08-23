import { useState } from "react";
import AddItem from "./AddItem";

function Notes() {

    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems([...items, item]);
    }

    return <div className="note">
        <h1>THis is heading</h1>
        <p>THis is paragraph</p>
        <AddItem onItemAdded={handleAddItems} ></AddItem>
        <ShowItems items={items}></ShowItems>
    </div>;
}

function ShowItems({ items }) {

    return <>
        <ul>
            {items.map((i) => <li>{i}</li>)}

        </ul>


    </>;

}



export default Notes;