import { useState } from "react";

export default function SearchBar (props) {
    let [searchTerm, setSearchTerm] = useState("")

    return (
        <form>
            <input type="text" placeholder="Enter a search term here" />
            <input type="submit" />
        </form>
    )
}