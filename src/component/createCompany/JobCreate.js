import '../../sass/sass_component/_jobUpdate.scss';

import axios from 'axios';
import { useContext, useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { ConstContext } from '../context/ConstContext';
import { ThemeContext } from '../context/ThemeContext';
import AddCity from '../main/AddCity';
import TechnoChoice from '../main/TechnoChoice';
import ToolChoice from '../main/ToolChoice';

import { AddCircle } from '@material-ui/icons';
import MyDate from '../../assets/MyDate';

const JobCreate = () => {

    const { theme } = useContext(ThemeContext);
    const history = useHistory();

    const { citys, handleCitys, isCity, handleIsCity, handleListTechno, handleToolList, currentTechno, setCurrentTechno, currentTool, setCurrentTool, currentCity } = useContext(ConstContext)

    const [companyName, setCompanyName] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [companyAdress, setCompanyAdress] = useState('');
    const [companyContact, setCompanyContact] = useState('');
    const [companyDesc, setCompanyDesc] = useState('');
    const [companyRemote, setCompanyRemote] = useState(0);
    const [companyFront, setCompanyFront] = useState(0);
    const [companyBack, setCompanyBack] = useState(0);
    const [companyCity, setCompanyCity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        let companyId = 0;
        let today = MyDate();
        const companyLogo = companyWebsite.replace('https://', '').replace('www.', '').replace('/fr', '');

        axios.put("http://localhost:3001/create", {
            companyName: companyName,
            companyLogo: companyLogo,
            companyWebsite: companyWebsite,
            companyAdress: companyAdress,
            companyContact: companyContact,
            companyDesc: companyDesc,
            companyRemote: companyRemote,
            companyFront: companyFront,
            companyBack: companyBack,
            companyCity: companyCity,
            companyDate: today
        }).then((response) => {
            // console.log(response.config.data)
            axios.get(`http://localhost:3001/companyId/${companyName}`, {
            }).then((response) => {
                companyId = response.data[0].company_id;
                // console.log('companyId: ', companyId);
                currentTechno.forEach(element => {
                    axios.put('http://localhost:3001/updateTechno', {
                        idCompany: companyId,
                        idTechno: element
                    }).then((response) => {
                        // console.log('Techno inserted successfully', response);
                    })
                })
                currentTool.forEach(element => {
                    axios.put('http://localhost:3001/updateTool', {
                        idCompany: companyId,
                        idTool: element
                    }).then((response) => {
                        // console.log('Tools inserted successfully', response);
                        history.push(`/jobdetails/${companyId}`);
                    })
                })
            })
        })
    }

    useEffect(() => {
        setCurrentTechno([]);
        setCurrentTool([]);
        handleCitys()
        handleListTechno()
        handleToolList()
    }, [])

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__title"><AddCircle className="form__title__icon" /> Add a new company</h2>
            <div className="form__inputs">
                {/* Company name */}
                <input type="text" required placeholder="Company name..." className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} onChange={(e) => setCompanyName(e.target.value)} />
                {/* Website */}
                <input type="text" required placeholder="Web site..." className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} onChange={(e) => setCompanyWebsite(e.target.value)} />
                {/* Address */}
                <input type="text" required placeholder="Address..." className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} onChange={(e) => setCompanyAdress(e.target.value)} />
                {/* Description */}
                <textarea rows="10" required placeholder="Description..." className={"form__inputs__input form__inputs__input--textArea " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} onChange={(e) => setCompanyDesc(e.target.value)} />
                {/* Contact */}
                <input type="text" required placeholder="Contact..." className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} onChange={(e) => setCompanyContact(e.target.value)} />

                <div className="form__inputs__checks">
                    {/* Frontend */}
                    <h3 className={companyFront === 1 ? "form__inputs__checks__checked" : companyFront === 0 && theme === false ? "form__inputs__checks--dark" : ""} onClick={companyFront === 1 ? () => setCompanyFront(0) : () => setCompanyFront(1)}>Frontend</h3>
                    {/* Backend */}
                    <h3 className={companyBack === 1 ? "form__inputs__checks__checked" : companyBack === 0 && theme === false ? "form__inputs__checks--dark" : ""} onClick={companyBack === 1 ? () => setCompanyBack(0) : () => setCompanyBack(1)}>Backend</h3>
                    {/* Remote */}
                    <h3 className={companyRemote === 1 ? "form__inputs__checks__checked" : companyRemote === 0 && theme === false ? "form__inputs__checks--dark" : ""} onClick={companyRemote === 1 ? () => setCompanyRemote(0) : () => setCompanyRemote(1)}>Remote</h3>
                </div>
                {/* City */}
                {citys &&
                    <div className="form__inputs__city">
                        <h3 className={"form__inputs__city__title " + (theme ? "" : "form__inputs__city__title--dark")}>Choose a city :</h3>
                        <select className={"form__inputs__city__options " + (theme ? "" : "form__inputs__city__options--dark")} defaultValue={currentCity} onChange={(e) => setCompanyCity(e.target.value)}>
                            {citys.map((el, id) => (
                                <option className="form__inputs__city__options__option" key={id} value={el.city_id}>{el.city_name}</option>
                            ))}
                        </select>
                        <AddCircle onClick={handleIsCity} className="form__inputs__city__addCity" />
                        {isCity && <AddCity handleIsCity={handleIsCity} />}
                    </div>}
                {/* Techno */}
                <TechnoChoice className="technoChoice" />
                {/* Tool */}
                <ToolChoice className="toolChoice" />
            </div>
            <div className="form__btns">
                <button className="form__btns__btn form__btns__btn--create">Create</button>
                <button className="form__btns__btn form__btns__btn--cancel" onClick={() => history.push('/')}>Cancel</button>
            </div>
        </form>
    );
}

export default JobCreate;