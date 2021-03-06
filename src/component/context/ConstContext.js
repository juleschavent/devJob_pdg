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

    // toggle pour search form en mobile
    const [mobileSearch, setMobileSearch] = useState(false);
    const handleMobileSearch = () => {
        setMobileSearch(!mobileSearch);
        // console.log(mobileSearch)
    };

    // get les détails de l'entreprise ciblée
    const [companyDetails, setCompanyDetails] = useState(null)
    const handleCompanyDetails = (id) => {
        axios.get(`https://server-devjob.chvt.me/details/${id}`, {}).then((response) => {
            setCompanyDetails(response.data)
            // console.log("get company", response.data);
        });
    }

    // get les technos de l'entreprise ciblée
    const [companyTechno, setCompanyTechno] = useState(null)
    const handleCompanyTechno = (id) => {
        axios.get(`https://server-devjob.chvt.me/techno/${id}`, {}).then(
            (response) => {
                setCompanyTechno(response.data);
                console.log("get techno", response.data);
            }
        );
    }

    // get les tools de l'entreprise ciblée
    const [companyTool, setCompanyTool] = useState(null)
    const handleCompanyTool = (id) => {
        axios.get(`https://server-devjob.chvt.me/tool/${id}`, {}).then(
            (response) => {
                setCompanyTool(response.data);
                // console.log("get techno", response.data);
            }
        );
    }

    // get la liste des villes
    const [citys, setCitys] = useState(null)
    const handleCitys = () => {
        axios.get(`https://server-devjob.chvt.me/citys`, {}).then(
            (response) => {
                setCitys(response.data);
                // console.log("get citys", response.data);
            }
        );
    }

    // Toggle du modal AddCity
    const [isCity, setIsCity] = useState(false)
    const handleIsCity = () => {
        setIsCity(!isCity)
        console.log(isCity)
    }

    // get la liste des technos pour update
    const [listTechno, setListTechno] = useState(null)
    const [currentTechno, setCurrentTechno] = useState([])
    const handleListTechno = () => {
        axios.get(`https://server-devjob.chvt.me/technoList`, {}).then(
            (response) => {
                setListTechno(response.data);
                // console.log("get liste techno pour update", response.data);
            }
        );
    }
    const handleCurrentTechno = (value) => {
        if (currentTechno.some(el => el === value) === false) {
            if (currentTechno.length < 3) {
                setCurrentTechno(arr => [value, ...arr])
            } else alert('Too many technos')
        } else {
            let filterTechno = currentTechno.filter(item => item !== value)
            setCurrentTechno(filterTechno)
        }
        console.log('current techno', currentTechno)
    }


    // get la liste des tools pour companyTool
    const [toolList, setToolList] = useState(null)
    const [currentTool, setCurrentTool] = useState([])
    const handleToolList = () => {
        axios.get(`https://server-devjob.chvt.me/tools`, {}).then(
            (response) => {
                setToolList(response.data);
                // console.log("get liste tools pour update", response.data);
            }
        );
    }
    const handleCurrentTool = (value) => {
        if (currentTool.some(el => el === value) === false) {
            if (currentTool.length < 3) {
                setCurrentTool(arr => [value, ...arr])
            } else alert("Too many tools")

        } else {
            let filterTool = currentTool.filter(item => item !== value)
            setCurrentTool(filterTool)
        }
        // console.log('current Tool', currentTool)
    }

    useEffect(() => {
        // Get la liste des entreprises, req principale
        axios.get("https://server-devjob.chvt.me/companyList").then((response) => {
            // console.log(response.data);
            setCompanyList(response.data);
        });

        //get la liste des technos par entreprise, sert à boucler dans la boucle principale pour afficher chaque techno d'une entreprise
        axios.get("https://server-devjob.chvt.me/techno").then((response) => {
            // console.log(response);
            setTechnoList(response.data);
        });
    }, [companyDetails])

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
            handleMobileSearch,
            companyDetails,
            handleCompanyDetails,
            companyTechno,
            handleCompanyTechno,
            companyTool,
            handleCompanyTool,
            citys,
            handleCitys,
            isCity,
            handleIsCity,
            listTechno,
            handleListTechno,
            toolList,
            handleToolList,
            currentTechno,
            setCurrentTechno,
            currentTool,
            setCurrentTool,
            handleCurrentTechno,
            handleCurrentTool
        }}>
            {props.children}
        </ConstContext.Provider>
    )
}

export default ConstContextProvider;