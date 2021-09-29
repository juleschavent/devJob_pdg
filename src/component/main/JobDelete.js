import '../../sass/sass_component/_jobDelete.scss'

import axios from 'axios';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ConstContext } from '../context/ConstContext';
import { ThemeContext } from '../context/ThemeContext';
import { DeleteForever } from '@material-ui/icons';
import { useEffect } from 'react';


const JobDelete = ({ handleOpenModal, companyDetails }) => {

    const { theme } = useContext(ThemeContext);
    const { id } = useParams();
    const { setCompanyList } = useContext(ConstContext);

    const [confirmDelete, setConfirmDelete] = useState('');
    const [confirmDeleteMsg, setConfirmDeleteMsg] = useState('')
    const [confirmDeleteValid, setConfirmDeleteValid] = useState(false);
    const handleConfirmDelete = () => {
        if (confirmDelete === 'DELETE') {
            setConfirmDeleteValid(true);
            setConfirmDeleteMsg("IT'S A MATCH !");
        } else {
            setConfirmDeleteValid(false);
            setConfirmDeleteMsg("DOESN'T MATCH !");
        }
    };

    useEffect(() => {
        handleConfirmDelete()
    }, [confirmDelete])

    // variable de redirection (~headers)
    const history = useHistory();
    // delete les détails de l'entreprise ciblée
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteTechno/${id}`).then((response) => {
            // console.log('techno deleted successfully', response);
            axios.delete(`http://localhost:3001/deleteTool/${id}`).then((response) => {
                // console.log('tools deleted successfully', response);
                axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
                    // console.log('company deleted successfully', response);
                    axios.get("http://localhost:3001/companyList").then((response) => {
                        setCompanyList(response.data);
                        history.push('/');
                    });
                });
            });
        });
    }

    return (
        companyDetails && companyDetails.map((el, index) => (
            <aside className="deleteModalBg" key={index}>
                <section className={"jobDelete " + (theme ? "jobDelete" : "jobDelete--dark")}>
                    <div className="jobDelete__cross"><button className={"jobDelete__cross__icon " + (theme ? "jobDelete__cross__icon" : "jobDelete__cross__icon--dark")} onClick={handleOpenModal}> X </button></div>
                    <div className="jobDelete__header">
                        <DeleteForever className="jobDelete__header__icon" /><h1 className={"jobDelete__header__title " + (theme ? "jobDelete__header__title" : "jobDelete__header__title--dark")}>Are you sure you want to delete {el.company_name} ?</h1>
                    </div>
                    <div className="jobDelete__body">
                        <div className={"jobDelete__body__text " + (theme ? "jobDelete__body__text" : "jobDelete__body__text--dark")}><p>Type " DELETE " to confirm.</p></div>
                        <input type="text" className={"jobDelete__body__input " + (theme ? "jobDelete__body__input" : "jobDelete__body__input--dark")} required placeholder="DELETE" value={confirmDelete} onChange={(e) => setConfirmDelete(e.target.value)} />
                        <div className={"jobDelete__body__response " + (theme ? "jobDelete__body__response" : "jobDelete__body__response--dark")}><p>{confirmDeleteMsg}</p></div>
                    </div>
                    <div className="jobDelete__footer">
                        {!confirmDeleteValid && <button disabled className={"jobDelete__footer__btn jobDelete__footer__btn__delete--disabled " + (theme ? "jobDelete__footer__btn jobDelete__footer__btn__delete--disabled" : "jobDelete__footer__btn jobDelete__footer__btn__delete--disabled--dark")} onClick={() => handleDelete(id)}>Delete</button>}
                        {confirmDeleteValid && <button className="jobDelete__footer__btn jobDelete__footer__btn__delete" onClick={() => handleDelete(id)}>DELETE</button>}
                        <button className="jobDelete__footer__btn jobDelete__footer__btn__cancel" onClick={handleOpenModal}>Cancel</button>
                    </div>
                </section>
            </aside>
        ))
    );
}

export default JobDelete;