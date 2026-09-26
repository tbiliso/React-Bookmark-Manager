import { useState, useEffect } from "react"
import BookmarkCard from "../components/BookmarkCard"
function Home() {
    const [bookmarks, setBookmarks] = useState([])
    useEffect(() => {
        async function localData() {
            const response = await fetch("/data/bookmarks.json")
            const data = await response.json()
            setBookmarks(data)
            console.log(data)
            
        }
        localData()
    }, [])
    console.log(bookmarks)
    return (
        <div>
            {
                bookmarks.map((item)=>{
                    return (
                        <BookmarkCard key={item.id} bookmark={item}/>
                      
                    )
                })
            }
        </div>
        
    )
}

export default Home