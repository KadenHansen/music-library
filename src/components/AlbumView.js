import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AlbumView() {
    const [ albumData, setAlbumData ] = useState([])
    const { id } = useParams()

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Album View</p>
        </div>
    )
}