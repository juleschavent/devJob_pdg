import '../../sass/sass_component/_jobUpdate.scss';

import axios from 'axios';
import { useContext, useState, useEffect } from "react";
import { ConstContext } from '../context/ConstContext';
import { ThemeContext } from '../context/ThemeContext';
import AddCity from '../main/AddCity';
import TechnoChoice from '../main/TechnoChoice';
import ToolChoice from '../main/ToolChoice';

import { AddCircle } from '@material-ui/icons';

const JobCreate = () => {

    const { theme } = useContext(ThemeContext);

    const { citys, handleCitys, isCity, handleIsCity, handleListTechno, listTechno } = useContext(ConstContext)

    const [companyName, setCompanyName] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [companyAdress, setCompanyAdress] = useState('');
    const [companyContact, setCompanyContact] = useState('');
    const [companyDesc, setCompanyDesc] = useState('');
    const [companyRemote, setCompanyRemote] = useState(false);
    const [companyFront, setCompanyFront] = useState(false);
    const [companyBack, setCompanyBack] = useState(false);
    const [companyCity, setCompanyCity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(companyName, companyCity)

        console.log(companyRemote, companyBack, companyFront)

        const companyLogo = companyWebsite.replace('https://', '').replace('www.', '').replace('/fr', '')

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
            companyCity: companyCity
        })
            .then((response) => {
                console.log(response);
                alert("successfull insert !");
            });
    };

    useEffect(() => {
        handleCitys()
    }, [])

    return (
        <form className="form">
            <h2 className="form__title"><AddCircle className="form__title__icon" /> Add a new company</h2>
            <div className="form__inputs">
                {/* Company name */}
                <input type="text" required placeholder="Company name..." className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} />
                {/* Website */}
                <input type="text" required placeholder="Web site..." className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} />
                {/* Address */}
                <input type="text" required placeholder="Address..." className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} />
                {/* Description */}
                <textarea rows="10" required placeholder="Description..." className={"form__inputs__input form__inputs__input--textArea " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} />
                {/* Contact */}
                <input type="text" required placeholder="Contact..." className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} />

                <div className="form__inputs__checks">
                    {/* Frontend */}
                    <h3 className="form__inputs__checked">Frontend</h3>
                    {/* Backend */}
                    <h3 className="form__inputs__checked">Backend</h3>
                    {/* Remote */}
                    <h3 className="form__inputs__checked">Remote</h3>
                </div>
                {/* City */}
                <div className="form__inputs__city">
                    <h3 className={"form__inputs__city__title " + (theme ? "" : "form__inputs__city__title--dark")}>Chose a city :</h3>
                    <select className={"form__inputs__city__options " + (theme ? "" : "form__inputs__city__options--dark")}>
                        <option className="form__inputs__city__options__option" >bleeeh</option>
                        <option className="form__inputs__city__options__option" >bleeeh</option>
                        <option className="form__inputs__city__options__option" >bleeeh</option>
                    </select>
                    <AddCircle onClick={handleIsCity} className="form__inputs__city__addCity" />
                    {isCity && <AddCity handleIsCity={handleIsCity} />}
                </div>
                {/* Techno */}
                <TechnoChoice className="technoChoice" />
                {/* Tool */}
                <ToolChoice className="toolChoice" />
            </div>
            <div className="form__btns">
                <button id="test" className="form__btns__btn form__btns__btn--create">Create</button>
                <button className="form__btns__btn form__btns__btn--cancel">Cancel</button>
            </div>
        </form>
    );
}

export default JobCreate;