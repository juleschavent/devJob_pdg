import '../../sass/sass_component/_jobDelete.scss'

import axios from 'axios';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ConstContext } from '../context/ConstContext';
import { ThemeContext } from '../context/ThemeContext';
import { DeleteForever } from '@material-ui/icons';


const JobDelete = ({ handleOpenModal, companyDetails }) => {

    const { theme } = useContext(ThemeContext);
    const { id } = useParams();
    const { setCompanyList } = useContext(ConstContext);

    // variable de redirection (~headers)
    const history = useHistory();
    // delete les détails de l'entreprise ciblée
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteTechno/${id}`).then((response) => {
            console.log('techno deleted successfully', response);
            axios.delete(`http://localhost:3001/deleteTool/${id}`).then((response) => {
                console.log('tools deleted successfully', response);
                axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
                    console.log('company deleted successfully', response);
                    axios.get("http://localhost:3001/companyList").then((response) => {
                        setCompanyList(response.data);
                        history.push('/');
                    });
                });
            });
        });
    }

    return (
        companyDetails && companyDetails.map((el, id) => (
            <aside className="deleteModalBg" key={id}>
                <section className={"jobDelete " + (theme ? "jobDelete--light" : "jobDelete--dark")}>
                    <div className="jobDelete__cross"><button className={"jobDelete__cross__icon " + (theme ? "jobDelete__cross__icon--light" : "jobDelete__cross__icon--dark")} onClick={handleOpenModal}> X </button></div>
                    <div className="jobDelete__header">
                        <DeleteForever className="jobDelete__header__icon" /><h1 className={"jobDelete__header__title " + (theme ? "jobDelete__header__title--light" : "jobDelete__header__title--dark")}>Are you sure you want to delete {el.company_name} ?</h1>
                    </div>
                    <div className="jobDelete__body">
                        <div className={"jobDelete__body__text " + (theme ? "jobDelete__body__text--light" : "jobDelete__body__text--dark")}>Type " DELETE " to confirm.</div>
                        <input type="text" className={"jobDelete__body__input " + (theme ? "jobDelete__body__input--light" : "jobDelete__body__input--dark")} placeholder="DELETE" />
                    </div>
                    <div className="jobDelete__footer">
                        <button className="jobDelete__footer__btn jobDelete__footer__btn__delete" onClick={() => handleDelete(id)}>Delete</button>
                        <button className="jobDelete__footer__btn jobDelete__footer__btn__cancel" onClick={handleOpenModal}>Cancel</button>
                    </div>
                </section>
            </aside>
        ))
    );
}

export default JobDelete;