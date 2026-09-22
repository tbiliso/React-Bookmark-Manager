import { useState, useEffect } from "react"

function Home() {
    const [bookmarks, setBookmarks] = useState([])
    useEffect(() => {
        async function localData() {
            const response = await fetch("/data/bookmarks.json")
            const data = await response.json()
            setBookmarks(data)
        }
        localData()
    }, [])
    
    return (
        
    )
}

export default Home