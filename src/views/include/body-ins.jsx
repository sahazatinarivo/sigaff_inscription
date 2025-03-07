import 'bootstrap/dist/css/bootstrap.css';
import { MEDIA_URL } from '../../config/config';
import { useEffect, useState } from 'react';
const logo = MEDIA_URL+"src/assets/images/men_icon.png";

export const BodyInscription = ({datas}) => {
    const [isdata, setIsData] = useState([]);
    const [numPhone, setNumPhone] = useState('');
    const [email,setEmail] = useState('');
    const [pstActuel,sePstActuel] = useState('');

    const changeLocalite = (e) => { 
        sePstActuel(e.target.value);
        alert(e.target.value);
    }

    useEffect(() => {
        datas.then((res) => {
            setIsData(res.data);
        });
    }, []);

    return  <>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 col-xs-12'>
                            <table className="table table-striped table-bordered table-lg" style={{ border:"3px dotted",borderRadius:"5", }}>
                                <thead>
                                    <tr>
                                        <th colSpan={2} className='text-center'>INFORMATIONS PERSONNELLES DE L'AGENT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {isdata.map((user) => (
                                    <tr>
                                        <td style={{ textAlign:'right' }}>IM</td>
                                        <td key={user.matricule}>{user.matricule}</td>
                                    </tr>
                                ))}
                                {isdata.map((user) => (
                                    <tr>
                                        <td style={{ textAlign:'right' }}>NOM ET PRENOMS</td>
                                        <td key={user.nom_prenoms}>{user.nom_prenoms}</td>
                                    </tr>
                                ))}
                                {isdata.map((user) => (
                                    <tr>
                                        <td style={{ textAlign:'right' }}>CIN</td>
                                        <td key={user.cin}>{user.cin}</td>
                                    </tr>
                                ))}
                                {isdata.map((user) => (
                                    <tr>
                                        <td style={{ textAlign:'right' }}>DATE DE NAISSANCE </td>
                                        <td key={user.date_naiss}>{user.date_naiss}</td>
                                    </tr>
                                ))}
                                {isdata.map((user) => (
                                    <tr>
                                        <td style={{ textAlign:'right' }}>CORPS</td>
                                        <td key={user.corps}>{user.corps}</td>
                                    </tr>
                                ))}
                                {isdata.map((user) => (
                                    <tr>
                                        <td style={{ textAlign:'right' }}>GRADE</td>
                                        <td key={user.grade}>{user.grade}</td>
                                    </tr>
                                ))}
                                {isdata.map((user) => (
                                    <tr>
                                        <td style={{ textAlign:'right' }}>DATE D'ENTREE DANS L'ADMINISTRATION</td>
                                        <td key={user.date_premier_poste}>{user.date_premier_poste}</td>
                                    </tr>
                                ))}
                       
                                <tr>
                                    <td style={{ textAlign:'right' }}>N° TELEPHONE</td>
                                    <td>
                                        <input type="text" value={numPhone} 
                                                           onChange={setNumPhone} 
                                                           className='form-control'
                                                           placeholder='Tapez votre numero telephone'/>
                                    </td>
                                </tr>
                    
                                <tr>
                                    <td style={{ textAlign:'right' }}>ADRESSE MAIL</td>
                                    <td>
                                        <input type="text" value={email} 
                                                            onChange={setEmail} 
                                                            className='form-control'
                                                            placeholder='Tapez votre adresse mail'/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='col-md-6 col-sm-12 col-xs-12'>
                        <table className="table table-striped table-bordered table-lg">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className='text-center'>POSTE ACTUEL DE L'AGENT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign:'right' }}>TYPE LOCALITE</td>
                                        <td >
                                            <select className="form-control tloc-choise" name="type_loc0" data-nposte="0" value={pstActuel} onChange={(e) => changeLocalite(e) }>
                                                <option value="0">---TYPE LOC---</option>
                                                <optgroup label="ETABLISSEMENT SCOLAIRE">
                                                    <option value="etab|7">PRESCO</option>
                                                    <option value="etab|8">PRIMAIRE</option>
                                                    <option value="etab|9">COLLEGE</option>
                                                    <option value="etab|10">LYCEE</option>
                                                </optgroup>
                                                    <optgroup label="MEN CENTRAL">
                                                    <option value="direction|5">DIRECTION</option>
                                                </optgroup>
                                                    <optgroup label="BUREAU DREN / BUREAU CISCO / CRINFP">
                                                    <option value="cisco|3">CISCO</option>
                                                    <option value="crinfp|4">CRINFP</option>
                                                    <option value="dren|2">DREN</option>
                                                </optgroup>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
}