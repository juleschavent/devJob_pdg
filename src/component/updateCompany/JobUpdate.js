import '../../sass/sass_component/_jobUpdate.scss'

import { useContext, useEffect, useState } from "react";
import { ConstContext } from "../context/ConstContext";
import axios from 'axios';
import { useHistory } from 'react-router';

const JobUpdate = () => {
    const { companyDetails, citys, handleCitys, listTechno, handleListTechno, toolList, handleToolList } = useContext(ConstContext)

    const [companyId, setCompanyId] = useState()
    const [companyName, setCompanyName] = useState()
    const [companyWebsite, setCompanyWebsite] = useState()
    const [companyLogo, setCompanyLogo] = useState()
    const [companyContact, setCompanyContact] = useState()
    const [companyAdress, setCompanyAdress] = useState()
    const [companyDesc, setCompanyDesc] = useState()
    const [companyFront, setCompanyFront] = useState(0)
    const [companyBack, setCompanyBack] = useState(0)
    const [companyRemote, setCompanyRemote] = useState(0)
    const [companyPostedAt, setCompanyPostedAt] = useState(0)
    const [companyCity, setCompanyCity] = useState(0)

    const history = useHistory();

    const handleUpdate = (e) => {
        e.preventDefault()
        console.log(companyName)

        axios.put('http://localhost:3001/update', {
            name: companyName,
            id: companyDetails[0].company_id
        }).then((response) => {
            history.push(`/jobdetails/${companyDetails[0].company_id}`)
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
                    <input defaultValue={el.company_name} onChange={e => setCompanyName(e.target.value)} className="form__inputs__input" />
                    <input defaultValue={el.company_website} onChange={e => setCompanyWebsite(e.target.value)} className="form__inputs__input" />
                    <input defaultValue={el.company_adress} onChange={e => setCompanyAdress(e.target.value)} className="form__inputs__input" />
                    <input defaultValue={el.company_description} onChange={e => setCompanyDesc(e.target.value)} className="form__inputs__input" />
                    <input defaultValue={el.company_contact} onChange={e => setCompanyContact(e.target.value)} className="form__inputs__input" />
                    <label>Frontend</label>
                    {el.company_front === 1 ? <input type="checkbox" defaultChecked /> : <input type="checkbox" />}
                    <label>Backend</label>
                    {el.company_back === 1 ? <input type="checkbox" defaultChecked /> : <input type="checkbox" />}
                    <label>Remote</label>
                    {el.company_remote === 0 ? <input type="checkbox" defaultChecked /> : <input type="checkbox" />}

                    <select defaultValue={el.city_name}>
                        {citys && citys.map((el, id) => (
                            <option key={id} value={el.city_name}>{el.city_name}</option>
                        ))}
                    </select>

                    <div>
                        <h2>Techno List</h2>
                        {listTechno && listTechno.map((el, id) => (
                            <p key={id}>{el.technology_name}</p>
                        ))}
                    </div>

                    <div>
                        <h2>Tool List</h2>
                        {toolList && toolList.map((el, id) => (
                            <p key={id}>{el.tool_name}</p>
                        ))}
                    </div>

                    <button type="submit">Update</button>
                </div>
            ))}
        </form>
    );
}

export default JobUpdate;