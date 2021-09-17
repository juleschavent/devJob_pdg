import '../../sass/sass_component/_jobUpdate.scss'

import { useContext, useEffect, useState } from "react";
import { ConstContext } from "../context/ConstContext";
import axios from 'axios';
import { useHistory } from 'react-router';
import TechnoChoice from '../main/TechnoChoice';
import { AddCircle, LocationCity } from '@material-ui/icons';
import ToolChoice from '../main/ToolChoice';

const JobUpdate = () => {
    const { companyDetails, citys, handleCitys, listTechno, handleListTechno, toolList, handleToolList, currentTechno, currentTool } = useContext(ConstContext)

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

        axios.put('http://localhost:3001/updateCompany', {
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
            axios.delete(`http://localhost:3001/deleteTechno/${companyDetails[0].company_id}`).then((response) => {
                // console.log('delete techno', response)
                currentTechno.forEach(element => {
                    axios.put('http://localhost:3001/updateTechno', {
                        id: companyDetails[0].company_id,
                        value: element
                    }).then((response) => {
                        // console.log('insert techno', response)
                        axios.delete(`http://localhost:3001/deleteTool/${companyDetails[0].company_id}`).then((response) => {
                            // console.log('delete tool', response)
                            currentTool.forEach(element => {
                                axios.put('http://localhost:3001/updateTool', {
                                    id: companyDetails[0].company_id,
                                    value: element
                                }).then((response) => {
                                    // console.log('insert tool', response)
                                    history.push(`/jobdetails/${companyDetails[0].company_id}`)
                                });
                            });
                        })
                    });
                })
            })
        })
    }

    useEffect(() => {
        handleCitys()
        handleListTechno()
        handleToolList()
    }, [])

    return (
        companyDetails &&
        <form className="form" onSubmit={handleUpdate}>
            {companyDetails && companyDetails.map((el, id) => (
                <div key={id} className="form__inputs">
                    {/* Company name */}
                    <input type="text" required placeholder="Company name..." defaultValue={el.company_name} onChange={e => setCompanyName(e.target.value)} className="form__inputs__input" />
                    {/* Website */}
                    <input type="text" required placeholder="Web site..." defaultValue={el.company_website} onChange={e => setCompanyWebsite(e.target.value)} className="form__inputs__input" />
                    {/* Address */}
                    <input type="text" required placeholder="Address..." defaultValue={el.company_adress} onChange={e => setCompanyAdress(e.target.value)} className="form__inputs__input" />
                    {/* Description */}
                    <textarea rows="10" required placeholder="Description..." defaultValue={el.company_description} onChange={e => setCompanyDesc(e.target.value)} className="form__inputs__input" />
                    {/* Contact */}
                    <input type="text" required placeholder="Contact..." defaultValue={el.company_contact} onChange={e => setCompanyContact(e.target.value)} className="form__inputs__input" />

                    <div className="form__inputs__checks">
                        {/* Frontend */}
                        <h3 className={companyFront === 1 ? "form__inputs__checks__checked" : ""} onClick={companyFront === 1 ? () => setCompanyFront(0) : () => setCompanyFront(1)}>Frontend</h3>

                        {/* Backend */}
                        <h3 className={companyBack === 1 ? "form__inputs__checks__checked" : ""} onClick={companyBack === 1 ? () => setCompanyBack(0) : () => setCompanyBack(1)}>Backend</h3>

                        {/* Remote */}
                        <h3 className={companyRemote === 1 ? "form__inputs__checks__checked" : ""} onClick={companyRemote === 1 ? () => setCompanyRemote(0) : () => setCompanyRemote(1)}>Remote</h3>
                    </div>
                    {/* City */}
                    <div className="form__inputs__city">
                        <h3 className="form__inputs__city__title">Chose a city :</h3>
                        <select className="form__inputs__city__options" defaultValue={el.city_id} onChange={(e) => setCompanyCity(e.target.value)}>
                            {citys && citys.map((el, id) => (
                                <option className="form__inputs__city__options__option" key={id} value={el.city_id}>{el.city_name}</option>
                            ))}
                        </select>
                        <AddCircle className="form__inputs__city__addCity" />
                    </div>
                    {/* Techno */}
                    <TechnoChoice id={companyDetails[0].company_id} />

                    <ToolChoice id={companyDetails[0].company_id} />
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

// ANCIENNE REQ POUR UPDATE COMPANY AVANT BORDEL TECHNO
// axios.put('http://localhost:3001/updateCompany', {
//     id: companyDetails[0].company_id,
//     name: companyName,
//     website: companyWebsite,
//     logo: companyLogo,
//     contact: companyContact,
//     adress: companyAdress,
//     desc: companyDesc,
//     front: companyFront,
//     back: companyBack,
//     remote: companyRemote,
//     city: companyCity
// }).then((response) => {
//     // history.push(`/jobdetails/${companyDetails[0].company_id}`)
//     console.log(response)
// })
