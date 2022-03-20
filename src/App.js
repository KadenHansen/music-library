import { useEffect, useState } from "react"
import { DataContext } from "./context/DataContext"
import Gallery from "./components/Gallery"
import SearchBar from "./components/SearchBar"

function App() {
  let [search, setSearch] = useState("")
  let [message, setMessage] = useState("Search for Music!")
  let [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} music`
      const res = await fetch(`https://itunes.apple.com/search?term=the%20grateful%20dead`)
      const resData = await res.json()
      if ( resData.results.length > 0 ) {
        setData(resData.results)
      } else {
        setMessage("Not Found")
      }
    }
    fetchData()
  })

  return (
    <div className="App">
      <SearchBar />
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  )
}

export default App;