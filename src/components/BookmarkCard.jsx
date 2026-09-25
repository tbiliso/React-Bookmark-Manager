
function BookmarkCard({bookmark}){

    return(
        <div className="card">
            <header>
                <img src="" alt="" />
                <div>
                    <h2>{bookmark.title}</h2>
                    <p>{bookmark.url}</p>
                </div>
                <img src="" alt="" />
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