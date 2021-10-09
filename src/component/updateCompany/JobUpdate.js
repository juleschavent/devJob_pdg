import '../../sass/sass_component/_jobUpdate.scss';

import { useContext, useEffect, useState } from "react";
import { ConstContext } from "../context/ConstContext";
import axios from 'axios';
import { useHistory } from 'react-router';
import TechnoChoice from '../main/TechnoChoice';
import { AddCircle } from '@material-ui/icons';
import ToolChoice from '../main/ToolChoice';
import { ThemeContext } from '../context/ThemeContext';
import EditIcon from '@material-ui/icons/Edit';
import AddCity from '../main/AddCity';

const JobUpdate = () => {

    const { theme } = useContext(ThemeContext)

    const { companyDetails, citys, handleCitys, isCity, handleIsCity, handleListTechno, handleToolList, currentTechno, currentTool } = useContext(ConstContext)

    // const [companyId, setCompanyId] = useState()
    const [companyName, setCompanyName] = useState(companyDetails[0].company_name)
    const [companyWebsite, setCompanyWebsite] = useState(companyDetails[0].company_website)
    const [companyContact, setCompanyContact] = useState(companyDetails[0].company_contact)
    const [companyAdress, setCompanyAdress] = useState(companyDetails[0].company_adress)
    const [companyDesc, setCompanyDesc] = useState(companyDetails[0].company_description)
    const [companyFront, setCompanyFront] = useState(companyDetails[0].company_front)
    const [companyBack, setCompanyBack] = useState(companyDetails[0].company_back)
    const [companyRemote, setCompanyRemote] = useState(companyDetails[0].company_remote)
    const [companyCity, setCompanyCity] = useState(companyDetails[0].city_id)

    const history = useHistory();

    const handleUpdate = (e) => {
        e.preventDefault()
        const companyLogo = companyWebsite.replace('https://', '').replace('www.', '').replace('/fr', '')

        axios.put('https://server-devjob.chvt.me/updateCompany', {
            id: companyDetails[0].company_id,
            name: companyName,
            website: companyWebsite,
            logo: companyLogo,
            contact: companyContact,
            adress: companyAdress,
            desc: companyDesc,
            front: companyFront,
            back: companyBack,
            remote: companyRemote,
            city: companyCity
        }).then((response) => {
            // console.log('update company', response)
            axios.delete(`https://server-devjob.chvt.me/deleteTechno/${companyDetails[0].company_id}`)
            axios.delete(`https://server-devjob.chvt.me/deleteTool/${companyDetails[0].company_id}`).then((response) => {
                // console.log('delete techno', response) 
                if (currentTechno) {
                    currentTechno.forEach(element => {
                        console.log(companyDetails[0].company_id)
                        console.log(element)
                        axios.put('https://server-devjob.chvt.me/updateTechno', {
                            idCompany: companyDetails[0].company_id,
                            idTechno: element
                        }).then((response) => {
                            console.log('insert techno', response)
                        })
                    })
                    if (currentTool) {
                        currentTool.forEach(element => {
                            console.log(companyDetails[0].company_id)
                            console.log(element)
                            axios.put('https://server-devjob.chvt.me/updateTool', {
                                idCompany: companyDetails[0].company_id,
                                idTool: element
                            }).then((response) => {
                                console.log('insert tool', response)
                            });
                        });
                    }
                }
                history.push(`/jobdetails/${companyDetails[0].company_id}`)
            })
        })
    }

    useEffect(() => {
        handleCitys()
        handleListTechno()
        handleToolList()
    }, [citys])

    return (
        companyDetails &&
        <form className="form" onSubmit={handleUpdate}>
            <h2 className="form__title"><EditIcon className="form__title__icon" /> Update company details</h2>
            {companyDetails && companyDetails.map((el, id) => (
                <div key={id} className="form__inputs">
                    {/* Company name */}
                    <input type="text" required placeholder="Company name..." defaultValue={el.company_name} onChange={e => setCompanyName(e.target.value)} className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} />
                    {/* Website */}
                    <input type="text" required placeholder="Web site..." defaultValue={el.company_website} onChange={e => setCompanyWebsite(e.target.value)} className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} />
                    {/* Address */}
                    <input type="text" required placeholder="Address..." defaultValue={el.company_adress} onChange={e => setCompanyAdress(e.target.value)} className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} />
                    {/* Description */}
                    <textarea rows="10" required placeholder="Description..." defaultValue={el.company_description} onChange={e => setCompanyDesc(e.target.value)} className={"form__inputs__input form__inputs__input--textArea " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} />
                    {/* Contact */}
                    <input type="text" required placeholder="Contact..." defaultValue={el.company_contact} onChange={e => setCompanyContact(e.target.value)} className={"form__inputs__input " + (theme ? "form__inputs__input--light" : "form__inputs__input--dark")} />

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
                            <select name="choose a city=" label="Choix de la ville" className={"form__inputs__city__options " + (theme ? "" : "form__inputs__city__options--dark")} defaultValue={el.city_id} onChange={(e) => setCompanyCity(e.target.value)}>
                                {citys.map((el, id) => (
                                    <option className="form__inputs__city__options__option" key={id} value={el.city_id}>{el.city_name}</option>
                                ))}
                            </select>
                            <AddCircle onClick={handleIsCity} className="form__inputs__city__addCity" />
                            {isCity && <AddCity handleIsCity={handleIsCity} id={companyDetails[0].company_id} />}
                        </div>}
                    {/* Techno */}
                    <TechnoChoice id={companyDetails[0].company_id} className="technoChoice" />
                    {/* Tool */}
                    <ToolChoice id={companyDetails[0].company_id} className="toolChoice" />
                </div>
            ))}
            <div className="form__btns">
                <button type="submit" className="form__btns__btn form__btns__btn--update">Update</button>
                <button className="form__btns__btn  form__btns__btn--cancel">Cancel</button>
            </div>
        </form>
    );
}

export default JobUpdate;