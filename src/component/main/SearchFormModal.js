import Import from '../../assets/Import'
import "../../sass/sass_component/_searchFormModal.scss"
// import "../../sass/sass_component/_searchFormModal--dark.scss"

const SearchFormModal = () => {
    return (
        <aside className="modalBackground">
            <form className="modalBackground__searchModal">
                <div className="modalBackground__searchModal__locationInput">
                    <img src={Import('icon-location.svg', 'desktop/')} alt="icon location" className="modalBackground__searchModal__locationInput__icon" />
                    <input type="text" placeholder="Filter by location..." className="modalBackground__searchModal__locationInput__input" />
                </div>
                <div className="modalBackground__searchModal__fullTimeInput">
                    <input type="checkbox" name="fullTime" className="modalBackground__searchModal__fullTimeInput__check" />
                    <label htmlFor="fullTime" className="modalBackground__searchModal__fullTimeInput__label">Full Time Only</label>
                </div>
                <button className="modalBackground__searchModal__btn">Search</button>
            </form>
        </aside>
    );
}

export default SearchFormModal;