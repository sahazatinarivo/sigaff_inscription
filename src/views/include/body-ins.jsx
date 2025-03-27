import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { ChangeLoc } from '../ajaxs/localite/change-loc';
import { ChangeLocChoix2 } from '../ajaxs/localite/change-choix-deux';
import { ChangeLocChoix1 } from '../ajaxs/localite/change-choix-un';
import { Verification } from '../../services/VerificationApi';

export const BodyInscription = ({datas,formData,setFormData}) => {
    const [numPhone, setNumPhone] = useState('');
    const [email,setEmail] = useState('');
    const [pstActuel,sePstActuel] = useState(0);
    const [isLoc,setIsLoc] = useState(false);
    const [choixUn,setChoixUn] = useState(0);
    const [isChoixUn,setIsChoixUn] = useState(false);
    const [choixDeux,setChoixDeux] = useState(0);choixDeux
    const [isChoixDeux,setIsChoixDeux] = useState(false);
    const [valeurFonction,setValeurFonction] = useState(0);
    const [listFonct,setListFonct] = useState(null);

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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const changeChoixUn= (e) => { 
        setChoixUn(e.target.value);
        setIsChoixUn(true);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const changeChoixDeux = (e) => {
        setChoixDeux(e.target.value);
        setIsChoixDeux(true);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangePhone = (e) => {
        setNumPhone(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    
    const ChangeEmail = (e) => {
        setEmail(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeFonction = (e) => { 
        setValeurFonction(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if(typeLoc !== '0'){
            if(typeLoc.split('|')[0] == 'direction'){
                setDataDir(Verification.getDir());
            }else{
                
                setDataDren(Verification.getDren());
            }   
        }
    }

    useEffect(() => {
        pstActuel ? Verification.getFunction(pstActuel.split('|')[1]).then((res) => { setListFonct(res.data); }) : null;
    }, [pstActuel]);

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
                        <div className='col-md-6 col-sm-12 col-xs-12' style={{ border: '3px dotted',borderRadius:'15px' }}>
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
                                                           onChange={(e) => ChangePhone(e) } 
                                                           className='form-control'
                                                           placeholder='Tapez votre numero telephone'
                                                           name='num_phone'/>
                                    </td>
                                </tr>
                    
                                <tr>
                                    <td style={{ textAlign:'right' }}>ADRESSE MAIL</td>
                                    <td>
                                        <input type="text" value={email} 
                                                            onChange={(e) => ChangeEmail(e) } 
                                                            className='form-control'
                                                            placeholder='Tapez votre adresse mail'
                                                            name='email'/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='col-md-6 col-sm-12 col-xs-12' style={{ border: '3px dotted',borderRadius:'15px' }}>
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
                                            <select className="form-control tloc-choise" style={{ textAlign:'center' }} name="type_loc0" data-nposte="0" value={pstActuel} onChange={(e) => changeLocalite(e)}>
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
                                    <tr>
                                        <td style={{ textAlign:'right' }}>FONCTION</td>
                                        <td>
                                            <select className="form-control" name="p0_fonction" value={valeurFonction} style={{ textAlign:"center" }} onChange={ (e) => ChangeFonction(e) }>
                                                <option value="0" >---FONCTION---</option>
                                            { listFonct ? listFonct.map((func) => (
                                                <option key={func.id_fonction} value={func.id_fonction}>{func.fonction}</option>
                                            )) : []}
                                            </select>
                                        </td>
                                    </tr>
                                    { isLoc ? <ChangeLoc typeLoc={pstActuel} formData={formData} setFormData={setFormData} valeurFonction={valeurFonction}/> : "" }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 col-xs-12'  style={{ border: '3px dotted',borderRadius:'15px' }}>
                            <table className="table table-striped table-bordered table-lg">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className='text-center'>POSTE DEMANDE(1ere CHOIX)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign:'right' }}>TYPE LOCALITE</td>
                                        <td >
                                            <select className="form-control tloc-choise" style={{ textAlign:'center' }} name="type_loc1" data-nposte="0" value={choixUn} onChange={(e) => changeChoixUn(e) }>
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
                                    <tr>
                                        <td style={{ textAlign:'right' }}>FONCTION</td>
                                        <td>
                                            <select className="form-control" name="p1_fonction" value={valeurFonction} style={{ textAlign:"center" }} onChange={ (e) => ChangeFonction(e) }>
                                                <option value="0" >---FONCTION---</option>
                                            { listFonct ? listFonct.map((func) => (
                                                <option key={func.id_fonction} value={func.id_fonction}>{func.fonction}</option>
                                            )) : []}
                                            </select>
                                        </td>
                                    </tr>
                                    {/* { isChoixUn ? <ChangeLocChoix1 typeLoc={choixUn} formData={formData} setFormData={setFormData} /> : "" } */}
                                </tbody>
                            </table>
                        </div>
                        <div className='col-md-6 col-sm-12 col-xs-12'  style={{ border: '3px dotted',borderRadius:'15px' }}>
                            <table className="table table-striped table-bordered table-lg">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className='text-center'>POSTE DEMANDE(2ème CHOIX)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign:'right' }}>TYPE LOCALITE</td>
                                        <td >
                                            <select className="form-control tloc-choise" style={{ textAlign:'center' }} name="type_loc2" data-nposte="0" value={choixDeux} onChange={(e) => changeChoixDeux(e) }>
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
                                    <tr>
                                        <td style={{ textAlign:'right' }}>FONCTION</td>
                                        <td>
                                            <select className="form-control" name="p2_fonction" value={valeurFonction} style={{ textAlign:"center" }} onChange={ (e) => ChangeFonction(e) }>
                                                <option value="0" >---FONCTION---</option>
                                            { listFonct ? listFonct.map((func) => (
                                                <option key={func.id_fonction} value={func.id_fonction}>{func.fonction}</option>
                                            )) : []}
                                            </select>
                                        </td>
                                    </tr>
                                    {/* { isChoixDeux ? <ChangeLocChoix2 typeLoc={choixDeux} formData={formData} setFormData={setFormData} /> : "" } */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
}