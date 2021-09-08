import "../../sass/sass_component/_searchFormModal.scss"
import Import from '../../assets/Import'

import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react';

const SearchFormModal = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <aside className="modalBackground">
            <form className={"modalBackground__searchModal " + (theme ? 'modalBackground__searchModal--light' : 'modalBackground__searchModal--dark')}>
                <div className={"modalBackground__searchModal__locationInput " + (theme ? "modalBackground__searchModal__locationInput--light" : "modalBackground__searchModal__locationInput--dark")}>
                    <img src={Import('icon-location.svg', 'desktop/')} alt="icon location" className="modalBackground__searchModal__locationInput__icon" />
                    <input type="text" placeholder="Filter by location..." className={"modalBackground__searchModal__locationInput__input " + (theme ? "" : "modalBackground__searchModal__locationInput__input--dark")} />
                </div>
                <div className="modalBackground__searchModal__fullTimeInput">
                    <input type="checkbox" name="fullTime" className="modalBackground__searchModal__fullTimeInput__check" />
                    <label htmlFor="fullTime" className={"modalBackground__searchModal__fullTimeInput__label " + (theme ? "" : "modalBackground__searchModal__fullTimeInput__label--dark")}>Full Time Only</label>
                </div>
                <button className="modalBackground__searchModal__btn">Search</button>
            </form>
        </aside >
    );
}

export default SearchFormModal;