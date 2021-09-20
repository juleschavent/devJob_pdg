import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

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
        axios.get(`http://localhost:3001/details/${id}`, {}).then((response) => {
            setCompanyDetails(response.data)
            // console.log("get company", response.data);
        });
    }

    // get les technos de l'entreprise ciblée
    const [companyTechno, setCompanyTechno] = useState(null)
    const handleCompanyTechno = (id) => {
        axios.get(`http://localhost:3001/tool/${id}`, {}).then(
            (response) => {
                setCompanyTool(response.data);
                // console.log("get tool", response.data);
            }
        );
    }

    // get les tools de l'entreprise ciblée
    const [companyTool, setCompanyTool] = useState(null)
    const handleCompanyTool = (id) => {
        axios.get(`http://localhost:3001/techno/${id}`, {}).then(
            (response) => {
                setCompanyTechno(response.data);
                // console.log("get techno", response.data);
            }
        );
    }

    // get la liste des villes
    const [citys, setCitys] = useState(null)
    const handleCitys = () => {
        axios.get(`http://localhost:3001/citys`, {}).then(
            (response) => {
                setCitys(response.data);
                // console.log("get citys", response.data);
            }
        );
    }

    // get la liste des technos pour update
    const [listTechno, setListTechno] = useState(null)
    const handleListTechno = () => {
        axios.get(`http://localhost:3001/technoList`, {}).then(
            (response) => {
                setListTechno(response.data);
                // console.log("get liste techno pour update", response.data);
            }
        );
    }

    // get la liste des villes
    const [toolList, setToolList] = useState(null)
    const handleToolList = () => {
        axios.get(`http://localhost:3001/tools`, {}).then(
            (response) => {
                setToolList(response.data);
                // console.log("get liste tools pour update", response.data);
            }
        );
    }

    // delete les détails de l'entreprise ciblée
    const history = useHistory();
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            axios.get("http://localhost:3001/companyList").then((response) => {
                setCompanyList(response.data);
                history.push('/');
            })
        })
    }

    useEffect(() => {
        // Get la liste des entreprises, req principale
        axios.get("http://localhost:3001/companyList").then((response) => {
            // console.log(response.data);
            setCompanyList(response.data);
        });

        //get la liste des technos par entreprise, sert à boucler dans la boucle principale pour afficher chaque techno d'une entreprise
        axios.get("http://localhost:3001/techno").then((response) => {
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
            listTechno,
            handleListTechno,
            toolList,
            handleToolList,
            handleDelete
        }}>
            {props.children}
        </ConstContext.Provider>
    )
}

export default ConstContextProvider;