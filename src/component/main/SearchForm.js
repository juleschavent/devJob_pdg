import "../../sass/sass_component/_searchForm.scss"
// import "../../sass/sass_component/_searchForm--dark.scss"
import Import from '../../assets/Import'
import MediaQuery from 'react-responsive'
import SearchFormModal from "./SearchFormModal"

const SearchForm = () => {

    return (
        <aside className="search">
            <MediaQuery maxWidth={767}>
                <form className="search__form">
                    <input type="text" className="search__form__input" placeholder="Filter by title..." />
                    <div className="search__form__buttons">
                        <img src={Import("icon-filter.svg", "mobile/")} alt="filter icon" className="search__form__buttons__filter" />
                        <svg className="search__form__buttons__loupe" width="24" height="24"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="currentColor" /></svg>
                    </div>
                </form>
                <SearchFormModal />
            </MediaQuery>

            <MediaQuery minWidth={768}>
                <form className="search__form">
                    <div className="search__form__inputs">
                        <svg width="24" height="24" className="search__form__inputs__icon"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" /></svg>
                        <MediaQuery maxWidth={1439}>
                            <input type="text" placeholder="Filter by title..." className="search__form__inputs__input" />
                        </MediaQuery>
                        <MediaQuery minWidth={1440}>
                            <input type="text" placeholder="Filter by title, companies, technologies" className="search__form__inputs__input" />
                        </MediaQuery>
                    </div>
                    <div className="search__form__inputs">
                        <svg width="17" height="24" className="search__form__inputs__icon"><path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" /></svg>
                        <input type="text" placeholder="Filter by location..." className="search__form__inputs__input" />
                    </div>
                    <div className="search__form__inputs">
                        <input type="checkbox" className="search__form__inputs__check" />
                        <label className="search__form__inputs__checkLabel">Full Time <MediaQuery minWidth={1440}>Only</MediaQuery></label>
                    </div>
                    <button className="search__form__btn">Search</button>
                </form>
            </MediaQuery>
        </aside>
    );
}

export default SearchForm;