import { useContext, useState } from 'react';
import { AddCircle } from '@material-ui/icons';
import '../../sass/sass_component/_addCity.scss'
import axios from 'axios';
import { useHistory } from 'react-router';
import { ThemeContext } from '../context/ThemeContext';
import { ConstContext } from '../context/ConstContext';

const AddCity = ({ handleIsCity, id }) => {
    const { theme } = useContext(ThemeContext)
    const { currentCity, handleCitys } = useContext(ConstContext)
    const history = useHistory()
    const [newCity, setNewCity] = useState()
    const handleNewCity = (e) => {
        setNewCity(e.target.value)
        // console.log(newCity)
        console.log('current city', currentCity)
    }
    const handleSubmitCity = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/addCity', {
            city: newCity
        }).then((response) => {
            handleCitys()
            handleIsCity()
            // history.push(-1)
            // console.log(response)
        })
    }

    return (
        <aside className="modalBg">
            <section className={"addCity " + (theme ? "addCity--light" : "addCity--dark")}>
                <label className={"addCity__label " + (theme ? "" : "addCity__label--dark")}><AddCircle className="addCity__label__icon" /> Add a new city</label>
                <input type="text" className={"addCity__input " + (theme ? "addCity__input--light" : "addCity__input--dark")} onChange={handleNewCity} placeholder="my new city..." />
                <div className="addCity__btns">
                    <button className="addCity__btns__btn addCity__btns__add" onClick={handleSubmitCity}>Add</button>
                    <button className="addCity__btns__btn addCity__btns__cancel" onClick={handleIsCity}>Cancel</button>
                </div>
            </section>
        </aside>
    );
}

export default AddCity;