import "../../sass/sass_component/_searchForm.scss"
import SearchFormModal from "./SearchFormModal"

import Import from '../../assets/Import'
import MediaQuery from 'react-responsive'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react';
import { ConstContext } from "../context/ConstContext"

const SearchForm = () => {

    const { theme } = useContext(ThemeContext);

    const { handleCompanyName } = useContext(ConstContext);
    const { handleLocation } = useContext(ConstContext);
    const { handleRemote } = useContext(ConstContext);

    return (
        <aside className="search">

            {/* MOBILE */}
            <MediaQuery maxWidth={767}>
                <form className={theme ? "search__form search__form--light" : "search__form search__form--dark"}>
                    <input type="text" className={theme ? "search__form__input" : "search__form__input--dark"} placeholder="Filter by techno..." />
                    <div className="search__form__buttons">
                        <img src={Import("icon-filter.svg", "mobile/")} alt="filter icon" className="search__form__buttons__filter" />
                        <svg className="search__form__buttons__loupe" width="24" height="24"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="currentColor" /></svg>
                    </div>
                </form>
                {/* <SearchFormModal /> */}
            </MediaQuery>
            {/* MOBILE END*/}

            {/* DESKTOP */}
            <MediaQuery minWidth={768}>
                <form className={theme ? "search__form search__form--light" : "search__form search__form--dark"}>
                    <div className={theme ? "search__form__inputs" : "search__form__inputs search__form__inputs--dark"}>
                        <svg width="24" height="24" className="search__form__inputs__icon"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" /></svg>
                        <input type="text" placeholder="Filter by companies..." className="search__form__inputs__input" onChange={handleCompanyName} />
                    </div>
                    <div className={theme ? "search__form__inputs" : "search__form__inputs search__form__inputs--dark"}>
                        <svg width="17" height="24" className="search__form__inputs__icon"><path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" /></svg>
                        <input type="text" placeholder="Filter by location..." className="search__form__inputs__input" onChange={handleLocation} />
                    </div>
                    <div className={theme ? "search__form__inputs" : "search__form__inputs search__form__inputs--dark"}>
                        <input type="checkbox" className="search__form__inputs__check" onChange={handleRemote} />
                        <label className={theme ? "search__form__inputs__checkLabel" : "search__form__inputs__checkLabel search__form__inputs__checkLabel--dark"}>Remote <MediaQuery minWidth={1440}>Only</MediaQuery></label>
                    </div>
                </form>
            </MediaQuery>
            {/* DESKTOP END*/}
        </aside>
    );
}

export default SearchForm;