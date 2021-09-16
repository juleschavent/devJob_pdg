import '../../sass/sass_component/_jobUpdate.scss'

import { useContext, useEffect, useState } from "react";
import { ConstContext } from "../context/ConstContext";
import axios from 'axios';
import { useHistory } from 'react-router';
import TechnoChoice from '../main/TechnoChoice';

const JobUpdate = () => {
    const { companyDetails, citys, handleCitys, listTechno, handleListTechno, toolList, handleToolList, currentTechno } = useContext(ConstContext)

    // const [companyId, setCompanyId] = useState()
    const [companyName, setCompanyName] = useState(companyDetails[0].company_name)
    const [companyWebsite, setCompanyWebsite] = useState(companyDetails[0].company_website)
    const [companyLogo, setCompanyLogo] = useState(companyWebsite.replace('https://', '').replace('www.', '').replace('/fr', ''))
    const [companyContact, setCompanyContact] = useState(companyDetails[0].company_contact)
    const [companyAdress, setCompanyAdress] = useState(companyDetails[0].company_adress)
    const [companyDesc, setCompanyDesc] = useState(companyDetails[0].company_description)
    const [companyFront, setCompanyFront] = useState(0)
    const [companyBack, setCompanyBack] = useState(0)
    const [companyRemote, setCompanyRemote] = useState(0)
    const [companyCity, setCompanyCity] = useState(companyDetails[0].city_id)

    const history = useHistory();

    const handleUpdate = (e) => {
        e.preventDefault()

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
            console.log('update company', response)
            axios.delete(`http://localhost:3001/deleteTechno/${companyDetails[0].company_id}`).then((response) => {
                console.log('delete techno', response)
                currentTechno.forEach(element => {
                    axios.put('http://localhost:3001/updateTechno', {
                        id: companyDetails[0].company_id,
                        value: element
                    }).then((response) => {
                        // history.push(`/jobdetails/${companyDetails[0].company_id}`)
                        console.log('insert techno', response)
                    })
                });
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
                    <input required placeholder="Company name..." defaultValue={el.company_name} onChange={e => setCompanyName(e.target.value)} className="form__inputs__input" />
                    {/* Website */}
                    <input required placeholder="Web site..." defaultValue={el.company_website} onChange={e => setCompanyWebsite(e.target.value)} className="form__inputs__input" />
                    {/* Address */}
                    <input required placeholder="Address..." defaultValue={el.company_adress} onChange={e => setCompanyAdress(e.target.value)} className="form__inputs__input" />
                    {/* Description */}
                    <input required placeholder="Description..." defaultValue={el.company_description} onChange={e => setCompanyDesc(e.target.value)} className="form__inputs__input" />
                    {/* Contact */}
                    <input required placeholder="Contact..." defaultValue={el.company_contact} onChange={e => setCompanyContact(e.target.value)} className="form__inputs__input" />
                    {/* Frontend */}
                    <label>Frontend</label>
                    {el.company_front === 1 ? <input type="checkbox" defaultChecked onClick={() => setCompanyFront(0)} /> : <input type="checkbox" onClick={() => setCompanyFront(1)} />}
                    {/* Backend */}
                    <label>Backend</label>
                    {el.company_back === 1 ? <input type="checkbox" defaultChecked onClick={() => setCompanyBack(0)} /> : <input type="checkbox" onClick={() => setCompanyBack(1)} />}
                    {/* Remote */}
                    <label>Remote</label>
                    {el.company_remote === 0 ? <input type="checkbox" defaultChecked onClick={() => setCompanyRemote(0)} /> : <input type="checkbox" onClick={() => setCompanyRemote(1)} />}
                    {/* City */}
                    <select defaultValue={el.city_id} onChange={(e) => setCompanyCity(e.target.value)}>
                        {citys && citys.map((el, id) => (
                            <option key={id} value={el.city_id}>{el.city_name}</option>
                        ))}
                    </select>
                    {/* Techno */}
                    <TechnoChoice id={companyDetails[0].company_id} />

                    <button type="submit">Update</button>
                </div>
            ))}
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