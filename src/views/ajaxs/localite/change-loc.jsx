import { useEffect,useState } from "react";
import { Verification } from "../../../services/VerificationApi";
import { ListeCiscoPosteActuel } from "../is_ajax/poste_actuel/liste-cisco";
import { ListeServiceDrenPosteAcuel } from "../is_ajax/poste_actuel/liste-service-dren";
import { ListeCrinfpPosteAcuel } from "../is_ajax/poste_actuel/liste-crinfp";
import { ListeEtabsPosteAcuel } from "../is_ajax/poste_actuel/liste-etabs";
import { ListeServicePosteAcuel } from "../is_ajax/poste_actuel/liste-service";
import { ListeDivisionPosteActuel } from "../is_ajax/poste_actuel/liste-division";


export const ChangeLoc = ({ typeLoc,formData,setFormData }) => {
    let message;
    const dataFonct = Verification.getFunction(typeLoc.split('|')[1]);
    const dataDren = Verification.getDren();
    const dataDir = Verification.getDir();
    
    const [valeurFonction,setValeurFonction] = useState(0);
    const [valeurDren,setValeurDren] = useState(0);
    const [valeurCisco,setValeurCisco] = useState(0);
    const [valeurDirs,setValeurDirs] = useState(0);
    const [valeurEtab,setValeurEtab] = useState(0);
    const [valeurService,setValeurService] = useState(0);
    const [valeurDivision,setValeurDivision] = useState(0);
    const [valeurServiceD,setValeurServiceD] = useState(0);
    const [valeurCrinfp,setValeurCrinfp] = useState(0);

    const [listDir,setListDir] = useState(null);
    const [listFonct,setListFonct] = useState(null);
    const [listDren,setListDren] = useState(null);
    const [dataCisco,setDataCisco] = useState(null);
    const [listCisco,setListCisco] = useState(null);
    const [dataEtabs,setDataEtabs] = useState(null);
    const [listeEtabs,setListeEtabs] = useState(null);
    const [dataServ,setDataServ] = useState(null);
    const [listeServ,setListeServ] = useState(null);
    const [dataDivC,setDataDivC] = useState(null);
    const [listeDivC,setListeDivC] = useState(null);
    const [dataServD,setDataServD] = useState(null);
    const [listeServD,setListeServD] = useState(null);
    const [dataCrinfp,setDataCrinfp] = useState(null);
    const [listeCrinfp,setListeCrinfp] = useState(null);


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
        setValeurCisco(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setDataEtabs(Verification.getEtab(valeurDren,e.target.value,isNivoSelected));
    }

    const ChangeFonction = (e) => { 
        setValeurFonction(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeEtab = (e) => { 
        setValeurEtab(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeDirToService = (e) => { 
        setValeurDirs(e.target.value);

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

    const ChangeCiscoToDiv = (e) => { 
        setValeurService(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setDataDivC(Verification.getDiv(e.target.value));
    }

    const ChangeDivCisco = (e) => { 
        setValeurDivision(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangePosteActuel = (e) => { 
        setValeurPosteActuel(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeDrenToService = (e) => { 
        setValeurDren(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setDataServD(Verification.getServ());
    }

    const ChangeServiceD = (e) => { 
        setValeurServiceD(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeDrenToCrinfp = (e) => { 
        setValeurCrinfp(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setDataCrinfp(Verification.getCrinfp(e.target.value));
    }

    useEffect(() => {
        dataFonct ? dataFonct.then((res) => { setListFonct(res.data); }) : null;
        dataDren ? dataDren.then((res) => { setListDren(res.data); }) : null;
        dataDir ? dataDir.then((res) => { setListDir(res.data); }) : null;
    }, []);

    dataCisco ? dataCisco.then((res) => { setListCisco(res.data); }) : null;
    dataEtabs ? dataEtabs.then((res) => { setListeEtabs(res.data); }) : null;
    dataServ ? dataServ.then((res) => { setListeServ(res.data); }) : null;
    dataDivC ? dataDivC.then((res) => { setListeDivC(res.data); }) : null;
    dataServD ? dataServD.then((res) => { setListeServD(res.data); }) : null;
    dataCrinfp ? dataCrinfp.then((res) => { setListeCrinfp(res.data); }) : null;

    switch (typeLoc.split('|')[0]) {
        case 'etab':
          message = <>
                        <tr>
                            <td style={{ textAlign:'right' }}>DREN</td>
                            <td>
                                <select className="form-control" name="p0_dren" style={{ textAlign:"center" }} value={valeurDren} onChange={ (e) => ChangeDrenToCisco(e) }>
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
                                <select className="form-control" name="p0_cisco" style={{ textAlign:"center" }} value={valeurCisco} onChange={ (e) => ChangeCiscoToEtab(e) }>
                                    <option value="0" >---CISCO---</option>
                                    { listCisco ? <ListeCiscoPosteActuel listCisco={listCisco} /> : <></> }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>ETABLISSEMENT SCOLAIRE</td>
                            <td>
                                <select className="form-control" name="p0_etab" value={valeurEtab} style={{ textAlign:"center" }} onChange={ (e) => ChangeEtab(e) }>
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
                                <select className="form-control" name="p0_direction" style={{ textAlign:"center" }} value={valeurDirs} onChange={ (e) => ChangeDirToService(e) }>
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
                                <select className="form-control" name="p0_service" value={valeurService} style={{ textAlign:"center" }} onChange={ (e) => ChangeService(e) }>
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
                                <select className="form-control" name="p0_dren" style={{ textAlign:"center" }} value={valeurDren} onChange={ (e) => ChangeDrenToCisco(e) }>
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
                                <select className="form-control" name="p0_cisco" style={{ textAlign:"center" }} value={valeurCisco} onChange={ (e) => ChangeCiscoToDiv(e) }>
                                    <option value="0" >---CISCO---</option>
                                    { listCisco ? <ListeCiscoPosteActuel listCisco={listCisco} /> : <></> }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>DIVISION</td>
                            <td>
                                <select className="form-control" name="p0_division_c" value={valeurDivision} style={{ textAlign:"center" }} onChange={ (e) => ChangeDivCisco(e) }>
                                    <option value="0" >---DIVISION---</option>
                                    { listeDivC ? <ListeDivisionPosteActuel listeDiv={listeDivC} /> : <></> }
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
                                <select className="form-control" name="p0_dren" style={{ textAlign:"center" }} value={valeurDren} onChange={ (e) => ChangeDrenToService(e) }>
                                    <option value="0" >---DREN---</option>
                                    {listDren ? listDren.map((dren) => (
                                        <option key={dren.code_dren} value={dren.code_dren} >{dren.dren}</option>
                                    )) : []}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>SERVICE</td>
                            <td>
                                <select className="form-control" name="p0_service_d" style={{ textAlign:"center" }} value={valeurServiceD} onChange={ (e) => ChangeServiceD(e) }>
                                    <option value="0" >---SERVICE---</option>
                                    { listeServD ?  <ListeServiceDrenPosteAcuel listeServiceDren={listeServD} /> : <></> }
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
                                <select className="form-control" name="p0_dren" style={{ textAlign:"center" }} value={valeurDren} onChange={ (e) => ChangeDrenToCrinfp(e) }>
                                    <option value="0" >---DREN---</option>
                                    {listDren ? listDren.map((dren) => (
                                        <option key={dren.code_dren} value={dren.code_dren}>{dren.dren}</option>
                                    )): []}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>CRINFP</td>
                            <td>
                                <select className="form-control" name="p0_crinfp" style={{ textAlign:"center" }} value={valeurCrinfp} onChange={(e) => ChangeCrinfp(e) }>
                                    <option value="0" >---CRINFP---</option>
                                    { listeCrinfp ?  <ListeCrinfpPosteAcuel listeCrinfp={listeCrinfp}/> : <></> }
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
                        <select className="form-control" name="p0_fonction" value={valeurFonction} style={{ textAlign:"center" }} onChange={ (e) => ChangeFonction(e) }>
                            <option value="0" >---FONCTION---</option>
                        { listFonct ? listFonct.map((func) => (
                            <option key={func.id_fonction} value={func.id_fonction}>{func.fonction}</option>
                        )) : []}
                        </select>
                    </td>
                </tr>
                { message }
            </>
}