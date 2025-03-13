import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { ChangeLoc } from '../ajaxs/change-loc';

export const BodyInscription = ({datas}) => {
    const [isdata, setIsData] = useState([]);
    const [numPhone, setNumPhone] = useState('');
    const [email,setEmail] = useState('');
    const [pstActuel,sePstActuel] = useState('');
    const [isLoc,setIsLoc] = useState(false);

    const [matricule,setMatricule] = useState('');
    const [nomPrenom,setNomPrenom] = useState('');
    const [cins, setCins] = useState('');
    const [dateNaissance,setDateNaissance] = useState('');
    const [corps, setCorps] = useState('');
    const [grade,setGrade] = useState('');
    const [priseServ, setPriseServ] = useState('');


    const changeLocalite = (e) => { 
        sePstActuel(e.target.value);
        setIsLoc(true);
    }

    useEffect(() => {
        datas.then((res) => {
            res.data.map((persInfo) => {
                setNomPrenom(persInfo.nom_prenoms);
                setMatricule(persInfo.matricule);
                setDateNaissance(persInfo.date_naiss);
                setCins(persInfo.cin);
                setCorps(persInfo.corps);
                setGrade(persInfo.grade);
                setPriseServ(persInfo.date_premier_poste);
            });
        });
    }, []);

    return  <>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 col-xs-12'>
                            <table className="table table-striped table-bordered table-lg">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className='text-center'>INFORMATIONS PERSONNELLES DE L'AGENT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign:'right' }}>IM</td>
                                        <td>{matricule ? matricule : ''}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign:'right' }}>NOM ET PRENOMS</td>
                                        <td>{nomPrenom ? nomPrenom : ''}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign:'right' }}>CIN</td>
                                        <td>{cins ? cins : ''}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign:'right' }}>DATE DE NAISSANCE </td>
                                        <td>{dateNaissance ? dateNaissance : ''}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign:'right' }}>CORPS</td>
                                        <td>{corps ? corps :'' }</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign:'right' }}>GRADE</td>
                                        <td>{grade ? grade : ''}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign:'right' }}>DATE D'ENTREE DANS L'ADMINISTRATION</td>
                                        <td>{priseServ ? priseServ : ''}</td>
                                    </tr>
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
                                            <select className="form-control tloc-choise" style={{ textAlign:'center' }} name="type_loc0" data-nposte="0" value={pstActuel} onChange={(e) => changeLocalite(e) }>
                                                <option value="0">---TYPE LOC---</option>
                                                <optgroup label="ETABLISSEMENT SCOLAIRE">
                                                    <option value="etab|7|0">PRESCO</option>
                                                    <option value="etab|8|1">PRIMAIRE</option>
                                                    <option value="etab|9|2">COLLEGE</option>
                                                    <option value="etab|10|3">LYCEE</option>
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
                                    { isLoc ? <ChangeLoc typeLoc={pstActuel} /> : "" }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
}