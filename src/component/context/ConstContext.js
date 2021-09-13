import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ConstContext = createContext();

const ConstContextProvider = (props) => {

    const [companyList, setCompanyList] = useState(null)
    const [technoList, setTechnoList] = useState(null)

    const [companyName, setCompanyName] = useState("");
    const handleCompanyName = (e) => {
        setCompanyName(e.target.value.toLowerCase())
        // console.log("company", companyName)
    };

    const [location, setLocation] = useState("");
    const handleLocation = (e) => {
        setLocation(e.target.value.toLowerCase())
        // console.log("location", location)
    };

    const [remote, setRemote] = useState(1);
    const handleRemote = () => {
        if (remote === 0) {
            setRemote(1)
        } else {
            setRemote(0)
        }
    };

    const [mobileSearch, setMobileSearch] = useState(false);
    const handleMobileSearch = () => {
        setMobileSearch(!mobileSearch);
        // console.log(mobileSearch)
    };

    useEffect(() => {
        // Get la liste des entreprises, req principale
        axios.get("http://localhost:3001/companyList").then((response) => {
            // console.log(response);
            setCompanyList(response.data);
        });

        //get la liste des technos par entreprise, sert à boucler dans la boucle principale pour afficher chaque techno d'une entreprise
        axios.get("http://localhost:3001/techno").then((response) => {
            // console.log(response);
            setTechnoList(response.data);
        });
    }, [])

    return (
        <ConstContext.Provider value={{
            companyList, setCompanyList,
            technoList, setTechnoList,
            companyName, setCompanyName,
            handleCompanyName,
            location, setLocation,
            handleLocation,
            remote, setRemote,
            handleRemote,
            mobileSearch,
            handleMobileSearch
        }}>
            {props.children}
        </ConstContext.Provider>
    )
}

export default ConstContextProvider;