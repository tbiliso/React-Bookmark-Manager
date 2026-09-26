import logos from "../assets/js/logos.js"
import '.././assets/css/BookmarkCard.css'
function BookmarkCard({bookmark}){

    return(
        <div className="card">
            <header className="card-header">
                <img src={logos[bookmark.title]} 
                    alt={bookmark.title} 
                    className="card-header-logo"/>
                <div className="card-header-content">
                    <h2>{bookmark.title}</h2>
                    <p>{bookmark.url}</p>
                </div>
                <img className="card-header-menu" src="/icon/card-menu-light.svg" alt="menu" />
            </header>
            <div className="card-body">
                <article>{bookmark.description}</article>
                <div className="card-body-btns">
                    <button>CSS</button>
                    <button>Practice</button>
                    <button>Layout</button>
                </div>
            </div>
            <footer></footer>
        </div>
    )
}

export default BookmarkCard
