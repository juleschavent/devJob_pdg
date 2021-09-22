import '../../sass/sass_component/_jobCreate.scss';

import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';
import TechnoChoice from '../main/TechnoChoice';
import ToolChoice from '../main/ToolChoice';

import { AddCircle } from '@material-ui/icons';

const JobCreate = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <form className="form">
            <h2 className="form__title"><AddCircle className="form__title__icon" /> Add a new company</h2>
                <div className="form__inputs">
                    {/* Company name */}
                    <input type="text" required placeholder="Company name..." className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} />
                    {/* Website */}
                    <input type="text" required placeholder="Web site..." className="form__inputs__input" />
                    {/* Address */}
                    <input type="text" required placeholder="Address..." className="form__inputs__input" />
                    {/* Description */}
                    <textarea rows="10" required placeholder="Description..." className="form__inputs__input form__inputs__input--textArea" />
                    {/* Contact */}
                    <input type="text" required placeholder="Contact..." className="form__inputs__input" />

                    <div className="form__inputs__checks">
                        {/* Frontend */}
                        <h3 className="form__inputs__checks">Frontend</h3>
                        {/* Backend */}
                        <h3 className="form__inputs__checks">Backend</h3>
                        {/* Remote */}
                        <h3 className="form__inputs__checks">Remote</h3>
                    </div>
                    {/* City */}
                        <div className="form__inputs__city">
                            <h3 className="form__inputs__city__title">Chose a city :</h3>
                            <select className="form__inputs__city__options">
                                    <option className="form__inputs__city__options__option" >bleeeh</option>
                                    <option className="form__inputs__city__options__option" >bleeeh</option>
                                    <option className="form__inputs__city__options__option" >bleeeh</option>
                            </select>
                            <AddCircle className="form__inputs__city__addCity" />
                            {/* {isCity && <AddCity />} */}
                        </div>
                    {/* Techno */}
                    {/* <TechnoChoice className="technoChoice" /> */}
                    {/* Tool */}
                    {/* <ToolChoice className="toolChoice" /> */}
                </div>
            <div className="form__btns">
                <button id="test" className="form__btns__btn form__btns__btn--create">Create</button>
                <button className="form__btns__btn form__btns__btn--cancel">Cancel</button>
            </div>
        </form>
    );
}

export default JobCreate;