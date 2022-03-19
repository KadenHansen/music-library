import { useState } from 'react'

export default function GalleryItem(props){
    let [view, setView] = useState(false)

    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
        </div>
    )
}