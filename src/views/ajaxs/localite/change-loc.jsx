import { useEffect,useState } from "react";
import { Verification } from "../../../services/VerificationApi";
import { ListeCiscoPosteActuel } from "../is_ajax/poste_actuel/liste-cisco";
import { ChangeCiscosDivisionPosteAcuel } from "../is_ajax/poste_actuel/Change-cisco-division";
import { ChangeServiceDrenPosteAcuel } from "../is_ajax/poste_actuel/Change-service-dren";
import { ChangeCinfpDrenPosteAcuel } from "../is_ajax/poste_actuel/change-crinfp-dren";
import { ListeEtabsPosteAcuel } from "../is_ajax/poste_actuel/liste-etabs";
import { ListeServicePosteAcuel } from "../is_ajax/poste_actuel/liste-service";

export const ChangeLoc = ({ typeLoc,formData,setFormData }) => {
    let message;
    const dataFonct = Verification.getFunction(typeLoc.split('|')[1]);
    const dataDren = Verification.getDren();
    const dataDir = Verification.getDir();
    
    const [valeurDren,setValeurDren] = useState(0);
    const [valeurService,setValeurService] = useState(0);

    const [listDir,setListDir] = useState(null);
    const [listFonct,setListFonct] = useState(null);
    const [listDren,setListDren] = useState(null);
    const [dataCisco,setDataCisco] = useState(null);
    const [listCisco,setListCisco] = useState(null);
    const [dataEtabs,setDataEtabs] = useState(null);
    const [listeEtabs,setListeEtabs] = useState(null);
    const [dataServ,setDataServ] = useState(null);
    const [listeServ,setListeServ] = useState(null);


    const ChangeDrenToCisco = (e) => { 
        setValeurDren(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setDataCisco(Verification.getCisco(e.target.value));
    }

    const ChangeCiscoToEtab = (e) => { 
        const isNivoSelected = typeLoc.split('|')[2];

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setDataEtabs(Verification.getEtab(valeurDren,e.target.value,isNivoSelected));
    }

    const ChangeFonction = (e) => { 
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeEtab = (e) => { 
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeDirToService = (e) => { 
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setDataServ(Verification.getService(e.target.value));
    }

    const ChangeService = (e) => { 
        setValeurService(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        dataFonct.then((res) => { setListFonct(res.data); });
        dataDren.then((res) => { setListDren(res.data); });
        dataDir.then((res) => { setListDir(res.data); });
    }, []);

    dataCisco ? dataCisco.then((res) => { setListCisco(res.data); }) : null;
    dataEtabs ? dataEtabs.then((res) => { setListeEtabs(res.data); }) : null;
    dataServ ? dataServ.then((res) => { setListeServ(res.data); }) : null;

    switch (typeLoc.split('|')[0]) {
        case 'etab':
          message = <>
                        <tr>
                            <td style={{ textAlign:'right' }}>DREN</td>
                            <td>
                                <select className="form-control" name="p0_dren" style={{ textAlign:"center" }} value={formData.p0_dren} onChange={ (e) => ChangeDrenToCisco(e) }>
                                    <option value="0" >---DREN---</option>
                                    {listDren ? listDren.map((dren) => (
                                        <option key={dren.code_dren} value={dren.code_dren} >{dren.dren}</option>
                                    )) : []}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>CISCO</td>
                            <td>
                                <select className="form-control" name="p0_cisco" style={{ textAlign:"center" }} value={formData.p0_cisco} onChange={ (e) => ChangeCiscoToEtab(e) }>
                                    <option value="0" >---CISCO---</option>
                                    { listCisco ? <ListeCiscoPosteActuel listCisco={listCisco} /> : <></> }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>ETABLISSEMENT SCOLAIRE</td>
                            <td>
                                <select className="form-control" name="p0_etab" value={formData.p0_etab} style={{ textAlign:"center" }} onChange={ (e) => ChangeEtab(e) }>
                                    <option value="0" >---ETABLISSEMENT---</option>
                                    { listeEtabs ? <ListeEtabsPosteAcuel listeEtabs={listeEtabs} /> : <></> }
                                </select>
                            </td>
                        </tr>
                    </>;
          break;
        case 'direction':
            message = <>
                        <tr>
                            <td style={{ textAlign:'right' }}>DIRECTION</td>
                            <td>
                                <select className="form-control" name="p0_direction" style={{ textAlign:"center" }} value={formData.p0_direction} onChange={ (e) => ChangeDirToService(e) }>
                                    <option value="0" >---DIRECTION---</option>
                                    { listDir ? listDir.map((dir) => (
                                        <option key={dir.code_direction} value={dir.code_direction}>({dir.code_direction})-{dir.direction}</option>
                                    )) : []}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>SERVICE</td>
                            <td>
                                <select className="form-control" name="p0_service" value={formData.p0_service} style={{ textAlign:"center" }} onChange={ (e) => ChangeService(e) }>
                                    <option value="0" >---SERVICE---</option>
                                    { listeServ ?  <ListeServicePosteAcuel listServ={listeServ} /> : <></> }
                                </select>
                            </td>
                        </tr>
                      </>;
          break;
        case 'cisco':
            message = <>
                        <tr>
                            <td style={{ textAlign:'right' }}>DREN</td>
                            <td>
                                <select className="form-control" name="p0_dren" style={{ textAlign:"center" }} value={formData.p0_dren} onChange={ (e) => ChangeDrens(e) }>
                                    <option value="0" >---DREN---</option>
                                    {resDren.map((dren) => (
                                        <option key={dren.code_dren} value={dren.code_dren}>{dren.dren}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>CISCO</td>
                            <td>
                                <select className="form-control" name="p0_cisco" style={{ textAlign:"center" }} value={formData.p0_cisco} onChange={ (e) => ChangeCisco(e) }>
                                    <option value="0" >---CISCO---</option>
                                    { vrDren ?  <ChangeDrenPosteAcuel codeDren={isDren}/> : <></> }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>DIVISION</td>
                            <td>
                                <select className="form-control" name="p0_division_c" value={formData.p0_division_c} style={{ textAlign:"center" }} onChange={ (e) => ChangeDivCisco(e) }>
                                    <option value="0" >---DIVISION---</option>
                                    { vrCisco ? <ChangeCiscosDivisionPosteAcuel /> : <></> }
                                </select>
                            </td>
                        </tr>
                      </>;
          break;
        case 'dren':
            message = <>
                        <tr>
                            <td style={{ textAlign:'right' }}>DREN</td>
                            <td>
                                <select className="form-control" name="p0_dren" style={{ textAlign:"center" }} value={formData.p0_dren} onChange={ (e) => ChangeDrens(e) }>
                                    <option value="0" >---DREN---</option>
                                    {resDren.map((dren) => (
                                        <option key={dren.code_dren} value={dren.code_dren}>{dren.dren}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>SERVICE</td>
                            <td>
                                <select className="form-control" name="p0_service_d" style={{ textAlign:"center" }} value={formData.p0_cisco} onChange={ (e) => ChangeCisco(e) }>
                                    <option value="0" >---SERVICE---</option>
                                    { vrDren ?  <ChangeServiceDrenPosteAcuel /> : <></> }
                                </select>
                            </td>
                        </tr>
                      </>;
          break;
        case 'crinfp':
            message = <>
                        <tr>
                            <td style={{ textAlign:'right' }}>DREN</td>
                            <td>
                                <select className="form-control" name="p0_dren" style={{ textAlign:"center" }} value={formData.p0_dren} onChange={ (e) => ChangeDrens(e) }>
                                    <option value="0" >---DREN---</option>
                                    {resDren.map((dren) => (
                                        <option key={dren.code_dren} value={dren.code_dren}>{dren.dren}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>CRINFP</td>
                            <td>
                                <select className="form-control" name="p0_crinfp" style={{ textAlign:"center" }} value={formData.p0_crinfp} onChange={(e) => ChangeCrinfp(e) }>
                                    <option value="0" >---CRINFP---</option>
                                    { vrDren ?  <ChangeCinfpDrenPosteAcuel codeDren={isDren}/> : <></> }
                                </select>
                            </td>
                        </tr>
                      </>;
          break;
        default:
          message = <></>;
          break;
      }

    return  <>
                <tr>
                    <td style={{ textAlign:'right' }}>FONCTION</td>
                    <td>
                        <select className="form-control" name="p0_fonction" value={formData.p0_fonction} style={{ textAlign:"center" }} onChange={ (e) => ChangeFonction(e) }>
                            <option value="0" >---FONCTION---</option>
                        { listFonct ? listFonct.map((func) => (
                            <option key={func.id_fonction} value={func.id_fonction}>{func.fonction}</option>
                        )) : []}
                        </select>
                    </td>
                </tr>
                { message }
                <tr>
                    <td style={{ textAlign:'right' }}>POSTE</td>
                    <td>
                        <input type="text" className="form-control" 
                                            placeholder="Preciser votre poste" 
                                            value={formData.p0_poste} 
                                            onChange={(e) => ChangeLocForm(e) }
                                            name="p0_poste"/>
                    </td>
                </tr>
            </>
}