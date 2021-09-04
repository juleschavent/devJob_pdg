import Import from '../../assets/Import'
import "../../sass/sass_component/_searchFormModal.scss"
// import "../../sass/sass_component/_searchFormM odal--dark.scss"

const SearchFormModal = () => {
    return (
        <aside className="modalBackground">
            <form className="searchModal">
                <div className="locationInput">
                    <img src={Import('icon-location.svg', 'desktop/')} alt="icon location" className="locationInput__icon" />
                    <input type="text" placeholder="Filter by location..." className="locationInput__input" />
                </div>
                <div className="fullTimeInput">
                    <input type="checkbox" name="fullTime" className="fullTimeInput__check" />
                    <label htmlFor="fullTime" className="fullTimeInput__label">Full Time Only</label>
                </div>
                <button className="searchModal__btn">Search</button>
            </form>
        </aside>
    );
}

export default SearchFormModal;