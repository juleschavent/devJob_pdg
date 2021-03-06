import "../../sass/sass_component/_searchForm.scss"

import MediaQuery from 'react-responsive'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react';
import { ConstContext } from "../context/ConstContext"

const SearchForm = () => {

    const { theme } = useContext(ThemeContext);

    const { handleCompanyName } = useContext(ConstContext);
    const { handleLocation } = useContext(ConstContext);
    const { handleRemote } = useContext(ConstContext);

    const { mobileSearch } = useContext(ConstContext);
    const { handleMobileSearch } = useContext(ConstContext);

    return (
        <aside className="search">

            {/* MOBILE */}
            <MediaQuery maxWidth={767}>
                <form className={"search__form " + (theme ? "search__form--light" : "search__form--dark")}>
                    <input type="text" className={"search__form__input " + (theme ? "" : "search__form__input--dark")} placeholder="Filter by company..." onChange={handleCompanyName} />
                    {mobileSearch ?
                        <svg onClick={handleMobileSearch} width="20" height="20" className="search__form__plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#5964E0" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg> :
                        <svg data-prefix="fas" data-icon="plus" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={handleMobileSearch} className="search__form__plus"><path fill="#5964E0" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>}
                    {mobileSearch &&
                        <div className="search__form__options">
                            <input type="text" className={"search__form__options__input " + (theme ? "" : "search__form__options__input--dark")} placeholder="Filter by city..." onChange={handleLocation} />
                            <div className="search__form__options__remote">
                                <input type="checkbox" className="search__form__options__remote__check" onChange={handleRemote} />
                                <label className="search__form__options__remote__checkLabel">Remote</label>
                            </div>
                        </div>
                    }

                </form>
            </MediaQuery>
            {/* MOBILE END*/}

            {/* DESKTOP */}
            <MediaQuery minWidth={768}>
                <form className={theme ? "search__form search__form--light" : "search__form search__form--dark"}>
                    <div className={theme ? "search__form__inputs" : "search__form__inputs search__form__inputs--dark"}>
                        <svg width="24" height="24" className="search__form__inputs__icon"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" /></svg>
                        <input type="text" placeholder="Filter by companies..." className={"search__form__inputs__input " + (theme ? "" : "search__form__inputs__input--dark")} onChange={handleCompanyName} />
                    </div>
                    <div className={theme ? "search__form__inputs" : "search__form__inputs search__form__inputs--dark"}>
                        <svg width="17" height="24" className="search__form__inputs__icon"><path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" /></svg>
                        <input type="text" placeholder="Filter by location..." className={"search__form__inputs__input " + (theme ? "" : "search__form__inputs__input--dark")} onChange={handleLocation} />
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