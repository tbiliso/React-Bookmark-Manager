import '../assets/css/homeHeader.css'

function HomeHeader(){

    return(
        <div className="home-header">
            <div id='menu'>
                <img src="/icon/menu-buttons.svg" alt="menu" />
            </div>
            <div className="search-box">
                <img src="/icon/search-icon.svg" alt="search" />
                <input type="search" placeholder="Search by title"/>
            </div>
            <img src="/icon/add-buttons.svg" alt="add" />
            <img src="/icon/profile-avatar.svg" alt="avatar" />
        </div>
    )
}
export default HomeHeader