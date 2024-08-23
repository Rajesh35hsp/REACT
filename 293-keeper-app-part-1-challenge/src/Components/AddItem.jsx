import { useState } from "react"

export default function AddItem({ onItemAdded }) {

    const [item, setItem] = useState("");

    function handleSubmit() {
        console.log(item);
        onItemAdded(item);
        setItem("");
    }

    return <>
        <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter Item text"
        ></input>
        <button onClick={handleSubmit}>Add to List</button>
    </>
}
