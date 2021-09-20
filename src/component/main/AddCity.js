import { useState } from 'react';
import { AddCircle } from '@material-ui/icons';
import '../../sass/sass_component/_addCity.scss'
import axios from 'axios';
import { useHistory } from 'react-router';

const AddCity = ({ handleIsCity, id }) => {
    const history = useHistory()
    const [newCity, setNewCity] = useState()
    const handleNewCity = (e) => {
        setNewCity(e.target.value)
        console.log(newCity)
    }
    const handleSubmitCity = (e) => {
        e.preventDefault()

        axios.put('http://localhost:3001/addCity', {
            city: newCity
        }).then((response) => {
            handleIsCity()
            history.push(`/jobupdate`)
            console.log(response)
        })
    }

    return (
        <aside className="modalBg">
            <section className="addCity">
                <label className="addCity__label"><AddCircle className="addCity__label__icon" /> Add a new city</label>
                <input type="text" className="addCity__input" onChange={handleNewCity} placeholder="my new city..." />
                <div className="addCity__btns">
                    <button className="addCity__btns__btn addCity__btns__add" onClick={handleSubmitCity}>Add</button>
                    <button className="addCity__btns__btn addCity__btns__cancel" onClick={handleIsCity}>Cancel</button>
                </div>
            </section>
        </aside>
    );
}

export default AddCity;