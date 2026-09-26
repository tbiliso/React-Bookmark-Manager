import logos from "../assets/js/logos.js"
function BookmarkCard({bookmark}){

    return(
        <div className="card">
            <header>
                <img src={logos[bookmark.title]} alt={bookmark.title} />
                <div>
                    <h2>{bookmark.title}</h2>
                    <p>{bookmark.url}</p>
                </div>
                <img src="/icon/burger-menu.png" alt="menu" />
            </header>
            <div>
                <article>{bookmark.description}</article>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <footer></footer>
        </div>
    )
}

export default BookmarkCard
