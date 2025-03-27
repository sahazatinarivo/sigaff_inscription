import { useEffect,useState } from "react";
import { Verification } from "../../../services/VerificationApi";
import { ListeCisco } from "../is_ajax/liste-cisco";
import { ListeServiceDren } from "../is_ajax/liste-service-dren";
import { ListeCrinfp } from "../is_ajax/liste-crinfp";
import { ListeEtabs } from "../is_ajax/liste-etabs";
import { ListeService } from "../is_ajax/liste-service";
import { ListeDivision } from "../is_ajax/liste-division";

export const ChangeLocChoix2 = ({ typeLoc,formData,setFormData,valeurFonction }) => {
    let message;

    const [valeurDren,setValeurDren] = useState(0);
    const [valeurCisco,setValeurCisco] = useState(0);
    const [valeurDirs,setValeurDirs] = useState(0);
    const [valeurEtab,setValeurEtab] = useState(0);
    const [valeurService,setValeurService] = useState(0);
    const [valeurDivision,setValeurDivision] = useState(0);
    const [valeurServiceD,setValeurServiceD] = useState(0);
    const [valeurCrinfp,setValeurCrinfp] = useState(0);
    const [valeurChoixUn,setValeurChoixUn] = useState("");

    const [listDir,setListDir] = useState(null);
    const [listDren,setListDren] = useState(null);
    const [listCisco,setListCisco] = useState(null);
    const [listeEtabs,setListeEtabs] = useState(null);
    const [listeServ,setListeServ] = useState(null);
    const [listeDivC,setListeDivC] = useState(null);
    const [listeServD,setListeServD] = useState(null);
    const [listeCrinfp,setListeCrinfp] = useState(null);

    const ChangeDrenToCisco = (e) => { 
        setValeurDren(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeCiscoToEtab = (e) => { 
        setValeurCisco(e.target.value);

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
    }

    const ChangeService = (e) => { 
        setValeurService(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeCiscoToDiv = (e) => { 
        setValeurCisco(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeDivCisco = (e) => { 
        setValeurDivision(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeChoixUn = (e) => { 
        setValeurChoixUn(e.target.value);

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
    }

    const ChangeServiceD = (e) => { 
        setValeurServiceD(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeDrenToCrinfp = (e) => { 
        setValeurDren(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeCrinfp = (e) => { 
        setValeurCrinfp(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        if(valeurFonction){
            if(typeLoc.split('|')[0] == 'direction'){
                Verification.getDir().then((res) => { setListDir(res.data); });
            }else{
                Verification.getDren().then((res) => { setListDren(res.data); });
            }
        }
    }, [valeurFonction]);

    useEffect(() => {
        if(valeurDren){
            if(typeLoc.split('|')[0] == 'dren'){
                Verification.getServ().then((res) => { setListeServD(res.data); });
            }else if(typeLoc.split('|')[0] == 'crinfp'){
                Verification.getCrinfp(valeurDren).then((res) => { setListeCrinfp(res.data); });
            }else{
                Verification.getCisco(valeurDren).then((res) => { setListCisco(res.data); });
            }
        }
    }, [valeurDren]);

    useEffect(() => {
        valeurDirs ? Verification.getService(valeurDirs).then((res) => { setListeServ(res.data); }) : null;
    }, [valeurDirs]);

    useEffect(() => {
        if(valeurCisco && valeurDren){
            if(typeLoc.split('|')[0] == 'etab'){
                Verification.getEtab(valeurDren,valeurCisco,typeLoc.split('|')[2]).then((res) => { setListeEtabs(res.data); });
            }else{
                Verification.getDiv().then((res) => { setListeDivC(res.data); });
            }
        }
    }, [valeurCisco,valeurDren]);

    switch (typeLoc.split('|')[0]) {
        case 'etab':
          message = <>
                        <tr>
                            <td style={{ textAlign:'right' }}>DREN</td>
                            <td>
                                <select className="form-control" name="p2_dren" style={{ textAlign:"center" }} value={valeurDren} onChange={ (e) => ChangeDrenToCisco(e) }>
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
                                <select className="form-control" name="p2_cisco" style={{ textAlign:"center" }} value={valeurCisco} onChange={ (e) => ChangeCiscoToEtab(e) }>
                                    <option value="0" >---CISCO---</option>
                                    { listCisco ? <ListeCisco listCisco={listCisco} /> : <></> }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>ETABLISSEMENT SCOLAIRE</td>
                            <td>
                                <select className="form-control" name="p2_etab" value={valeurEtab} style={{ textAlign:"center" }} onChange={ (e) => ChangeEtab(e) }>
                                    <option value="0" >---ETABLISSEMENT---</option>
                                    { listeEtabs ? <ListeEtabs listeEtabs={listeEtabs} /> : <></> }
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
                                <select className="form-control" name="p2_direction" style={{ textAlign:"center" }} value={valeurDirs} onChange={ (e) => ChangeDirToService(e) }>
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
                                <select className="form-control" name="p2_service" value={valeurService} style={{ textAlign:"center" }} onChange={ (e) => ChangeService(e) }>
                                    <option value="0" >---SERVICE---</option>
                                    { listeServ ?  <ListeService listServ={listeServ} /> : <></> }
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
                                <select className="form-control" name="p2_dren" style={{ textAlign:"center" }} value={valeurDren} onChange={ (e) => ChangeDrenToCisco(e) }>
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
                                <select className="form-control" name="p2_cisco" style={{ textAlign:"center" }} value={valeurCisco} onChange={ (e) => ChangeCiscoToDiv(e) }>
                                    <option value="0" >---CISCO---</option>
                                    { listCisco ? <ListeCisco listCisco={listCisco} /> : <></> }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>DIVISION</td>
                            <td>
                                <select className="form-control" name="p2_division_c" value={valeurDivision} style={{ textAlign:"center" }} onChange={ (e) => ChangeDivCisco(e) }>
                                    <option value="0" >---DIVISION---</option>
                                    { listeDivC ? <ListeDivision listeDiv={listeDivC} /> : <></> }
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
                                <select className="form-control" name="p2_dren" style={{ textAlign:"center" }} value={valeurDren} onChange={ (e) => ChangeDrenToService(e) }>
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
                                <select className="form-control" name="p2_service_d" style={{ textAlign:"center" }} value={valeurServiceD} onChange={ (e) => ChangeServiceD(e) }>
                                    <option value="0" >---SERVICE---</option>
                                    { listeServD ?  <ListeServiceDren listeServiceDren={listeServD} /> : <></> }
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
                                <select className="form-control" name="p2_dren" style={{ textAlign:"center" }} value={valeurDren} onChange={ (e) => ChangeDrenToCrinfp(e) }>
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
                                <select className="form-control" name="p2_crinfp" style={{ textAlign:"center" }} value={valeurCrinfp} onChange={(e) => ChangeCrinfp(e) }>
                                    <option value="0" >---CRINFP---</option>
                                    { listeCrinfp ?  <ListeCrinfp listeCrinfp={listeCrinfp}/> : <></> }
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
                { message }
                <tr>
                    <td style={{ textAlign:'right' }}>POSTE</td>
                    <td>
                        <input type="text" className="form-control" 
                                            placeholder="Preciser votre poste" 
                                            value={valeurChoixUn} 
                                            onChange={(e) => ChangeChoixUn(e) }
                                            name="p2_poste"/>
                    </td>
                </tr>
            </>
}