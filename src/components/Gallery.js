import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import GalleryItem from "./GalleryItem";

export default function Gallery () {
    const data = useContext(DataContext)

    const dataDisplay = data.map((item, i) => {
        return (
            <GalleryItem key={i} item={item} />
        )
    })

    return (
        <div>
            {dataDisplay}
        </div>
    )
}