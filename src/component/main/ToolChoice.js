// import '../../sass/sass_component/_toolChoice.scss'
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


const ToolChoice = ({ id }) => {

    const classes = useStyles();

    const { theme } = useContext(ThemeContext)

    const { toolList, handleToolList, companyTool, currentTool, setCurrentTool } = useContext(ConstContext)

    const handleCurrentTool = (value) => {
        if (currentTool.some(el => el === value) === false) {
            setCurrentTool(arr => [value, ...arr])
        } else {
            let filterTool = currentTool.filter(item => item !== value)
            setCurrentTool(filterTool)
        }
        console.log('current Tool', currentTool)
    }

    useEffect(() => {
        handleToolList()
        setCurrentTool([])
        if (companyTool) {
            for (const el of companyTool) {
                setCurrentTool(arr => [el.tool_id, ...arr])
            }
        }

        // console.log('company Tool', companyTool)
        console.log('current Tool', currentTool)
    }, [])

    return (
        <section className="technoChoice">
            <Accordion className={"technoChoice__accordion " + (theme ? "" : classes.rootDark)}>
                {/* Accordion crée une erreur dans la console, ne pas prendre un compte, se règle seul lors du passage en prod et sera corrigé lors de la prochaine MAJ materialUi */}
                <AccordionSummary expandIcon={<ExpandMoreIcon className={"technoChoice__accordion__summary__icon " + (theme ? "" : "technoChoice__accordion__summary__icon--dark")} />} aria-controls="panel1a-content" className="technoChoice__accordion__summary">
                    <h2 className="technoChoice__accordion__summary__title">Tool List</h2>
                </AccordionSummary>
                <AccordionDetails className="technoChoice__accordion__details">
                    {toolList && toolList.map((el, id) => (
                        <p key={id} className={"technoChoice__accordion__details__techno " + (currentTool.some(ele => ele === el.tool_id) === false ? "" : "technoChoice__accordion__details__techno--active")} onClick={() => handleCurrentTool(el.tool_id)}>{el.tool_name}</p>
                    ))}
                </AccordionDetails>
            </Accordion>
        </section>
    );
}

export default ToolChoice;