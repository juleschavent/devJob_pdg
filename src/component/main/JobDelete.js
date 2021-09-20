import '../../sass/sass_component/_jobDelete.scss'

import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router';
import { ConstContext } from '../context/ConstContext';


const JobDelete = () => {

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
        <div className="modalBackground">
            <div className="modalContainer">
                <button> X </button>
                <div className="modalTitle">
                    <h1>Are you sure you want to continue ?</h1>
                </div>
                <div className="modalBody">
                    <p>This action is irreversible !</p>
                </div>
                <div className="modalFooter">
                    <button>Cancel</button>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default JobDelete;