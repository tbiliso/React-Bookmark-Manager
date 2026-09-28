import { useState, useEffect } from "react"
import BookmarkCard from "../components/BookmarkCard"
import '../assets/css/home.css'
import HomeHeader from "../components/HomeHeader"
function Home() {
    const [bookmarks, setBookmarks] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
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
        <div className="home">
            <header>
                <HomeHeader />
            </header>
            <div className="home-cards">
            {
                bookmarks.map((item)=>{
                    return (
                        <BookmarkCard key={item.id} bookmark={item}/>
                      
                    )
                })
            }
        </div>
        </div>
        
        
    )
}

export default Home