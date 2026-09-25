import { useState, useEffect } from "react"

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
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        {/* <p>{item.url}</p>
                        <p>{item.description}</p> */}
                    </div>
                    )
                })
            }
        </div>
        
    )
}

export default Home