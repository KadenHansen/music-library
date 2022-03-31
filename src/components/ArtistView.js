import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>{artistData}</p>
        </div>
    )
}