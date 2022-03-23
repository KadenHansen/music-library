import { useEffect, useRef, useState } from "react"
import { DataContext } from "./context/DataContext"
import { SearchContext } from "./context/SearchContext"
import Gallery from "./components/Gallery"
import SearchBar from "./components/SearchBar"

function App() {
  let [message, setMessage] = useState("Search for Music!")
  let [data, setData] = useState([])
  let searchInput = useRef("")

  useEffect(() => {
  })
  
  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} music`
      const res = await fetch(`https://itunes.apple.com/search?term=the%20grateful%20dead`)
      const resData = await res.json()
      if ( resData.results.length > 0 ) {
        setData(resData.results)
      } else {
        setMessage("Not Found")
      }
    }
    fetchData()
  }

  return (
    <div className="App">
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  )
}

export default App;