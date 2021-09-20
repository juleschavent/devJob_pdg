import '../../sass/sass_component/_jobDelete.scss'

import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router';
import { ConstContext } from '../context/ConstContext';
import { ThemeContext } from '../context/ThemeContext';


const JobDelete = ({ handleOpenModal }) => {

    const { theme } = useContext(ThemeContext);
    const { id } = useParams();
    const { setCompanyList } = useContext(ConstContext);

    // variable de redirection (~headers)
    const history = useHistory();
    // delete les détails de l'entreprise ciblée
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteTechno/${id}`).then((response) => {
            // console.log('techno deleted successfully', response)
            axios.delete(`http://localhost:3001/deleteTool/${id}`).then((response) => {
                // console.log('tools deleted successfully', response);
                axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
                    // console.log('company deleted successfully', response);
                    axios.get("http://localhost:3001/companyList").then((response) => {
                        setCompanyList(response.data);
                        // console.log(response.data);
                        history.push('/');
                    });
                });
            });
        });
    }

    return (
        <aside className="deleteModalBg">
            <section className={"jobDelete " + (theme ? "jobDelete--light" : "jobDelete--dark")}>
                <div className="jobDelete__cross"><button className="jobDelete__cross__icon" onClick={handleOpenModal}> X </button></div>
                <div className="jobDelete__header">
                    <h1 className="jobDelete__header_title">Are you sure you want to continue ?</h1>
                </div>
                <div className="jobDelete__body">
                    <div className="jobDelete__body__text">This action is irreversible !</div>
                </div>
                <div className="jobDelete__footer">
                    <button className="jobDelete__footer__btn" onClick={handleOpenModal}>Cancel</button>
                    <button className="jobDelete__footer__btn" onClick={() => handleDelete(id)}>Delete</button>
                </div>
            </section>
        </aside>
    );
}

export default JobDelete;