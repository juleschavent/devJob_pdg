import '../../sass/sass_component/_technoChoice.scss'
import { useContext, useEffect } from "react";
import { ConstContext } from "../context/ConstContext";
import { ThemeContext } from "../context/ThemeContext";

//Import et fonction de style pour l'accordion
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    rootDark: {
        color: 'white',
        backgroundColor: '#19202D',
    },
}));
//FIN Import et fonction pour accordion

const TechnoChoice = ({ id }) => {

    const classes = useStyles();

    const { theme } = useContext(ThemeContext)

    const { listTechno, handleListTechno, companyTechno, handleCompanyTechno, currentTechno, setCurrentTechno } = useContext(ConstContext)

    const handleCurrentTechno = (value) => {
        if (currentTechno.some(el => el === value) === false) {
            setCurrentTechno(arr => [value, ...arr])
        } else {
            let filterTechno = currentTechno.filter(item => item !== value)
            setCurrentTechno(filterTechno)
        }
        console.log('current techno', currentTechno)
    }

    useEffect(() => {
        handleCompanyTechno(id)
        handleListTechno()
        setCurrentTechno([])
        for (const el of companyTechno) {
            setCurrentTechno(arr => [el.technology_id, ...arr])
        }
        // console.log('company techno', companyTechno)
        console.log('current techno', currentTechno)
    }, [])

    return (
        <section className="technoChoice">
            <Accordion className={"technoChoice__accordion " + (theme ? "" : classes.rootDark)}>
                {/* Accordion crée une erreur dans la console, ne pas prendre un compte, se règle seul lors du passage en prod et sera corrigé lors de la prochaine MAJ materialUi */}
                <AccordionSummary expandIcon={<ExpandMoreIcon className={"technoChoice__accordion__summary__icon " + (theme ? "" : "technoChoice__accordion__summary__icon--dark")} />} aria-controls="panel1a-content" className="technoChoice__accordion__summary">
                    <h2 className="technoChoice__accordion__summary__title">Techno List</h2>
                </AccordionSummary>
                <AccordionDetails className="technoChoice__accordion__details">
                    {listTechno && listTechno.map((el, id) => (
                        <p key={id} className={"technoChoice__accordion__details__techno " + (currentTechno.some(ele => ele === el.technology_id) === false ? "" : "technoChoice__accordion__details__techno--active")} onClick={() => handleCurrentTechno(el.technology_id)}>{el.technology_name}</p>
                    ))}
                </AccordionDetails>
            </Accordion>
        </section>
    );
}

export default TechnoChoice;