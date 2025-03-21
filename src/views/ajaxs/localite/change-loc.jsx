import { useEffect,useState } from "react";
import { Verification } from "../../../services/VerificationApi";
import { ChangeDrenPosteAcuel } from "../is_ajax/poste_actuel/change-dren";
import { ChangeCiscosPosteAcuel } from "../is_ajax/poste_actuel/change-cisco";
import { ChangeDirsPosteAcuel } from "../is_ajax/poste_actuel/change-dir";
import { ChangeCiscosDivisionPosteAcuel } from "../is_ajax/poste_actuel/Change-cisco-division";
import { ChangeServiceDrenPosteAcuel } from "../is_ajax/poste_actuel/Change-service-dren";
import { ChangeCinfpDrenPosteAcuel } from "../is_ajax/poste_actuel/change-crinfp-dren";

export const ChangeLoc = ({ typeLoc,formData,setFormData }) => {
    let message;
    const [resFonct,setResFonct] = useState([]);
    const [resDren,setresDren] = useState([]);
    const [resDir,setResDir] = useState([]);

    const [isDren,setIsDren] = useState(0);
    const [vrDren,setVrDren] = useState(false);

    const [isCisco,setIsCisco] = useState(0);
    const [vrCisco,setVrCisco] = useState(false);

    const [isDir,setIsDir] = useState(0);
    const [vrDir,setVrDir] = useState(false);

    const [isCrinfp,setIsCrinfp] = useState(0);
    const [etabs,setEtabs] = useState(0);
    const [fonction,setFonction] = useState(0);
    const [divCisco,setDivCisco] = useState(0);
    const [presPost,setPresPost] = useState("");

    const dataFonct = Verification.getFunction(typeLoc.split('|')[1]);
    const dataDren = Verification.getDren();
    const dataDir = Verification.getDir();
    const [dataCisco,setdataCisco] = useState(null);
    const codeFonction = typeLoc.split('|')[0] ? typeLoc.split('|')[2] : null;

    const ChangeDrens = (e) => { 
        setIsDren(e.target.value);
        setVrDren(true)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setdataCisco(Verification.getCisco(e.target.value));
    }

    const ChangeCisco = (e) => { 
        setIsCisco(e.target.value);
        setVrCisco(true);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const changePoste = (e) => { 
        setPresPost(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeDir = (e)  => { 
        setIsDir(e.target.value);
        setVrDir(true);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeEtab = (e)  => { 
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeFonction = (e)  => { 
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeDivCisco = (e)  => { 
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeCrinfp = (e)  => { 
        setIsCrinfp(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }


    useEffect(() => {
        dataFonct.then((res) => { setResFonct(res.data); });
        dataDren.then((res) => { setresDren(res.data); });
        dataDir.then((res) => { setResDir(res.data); });
    }, []);

    dataCisco ? dataCisco.then((res) => { setIsCisco(res.data); }) : null;

    switch (typeLoc.split('|')[0]) {
        case 'etab':
          message = <>
                        <tr>
                            <td style={{ textAlign:'right' }}>DREN</td>
                            <td>
                                <select className="form-control" name="p0_dren" style={{ textAlign:"center" }} value={formData.p0_dren} onChange={ (e) => ChangeDrens(e) }>
                                    <option value="0" >---DREN---</option>
                                    {resDren ? resDren.map((dren) => (
                                        <option key={dren.code_dren} value={dren.code_dren}>{dren.dren}</option>
                                    )) : []}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>CISCO</td>
                            <td>
                                <select className="form-control" name="p0_cisco" style={{ textAlign:"center" }} value={formData.p0_cisco} onChange={ (e) => ChangeCisco(e) }>
                                    <option value="0" >---CISCO---</option>
                                    {vrDren && isCisco ? isCisco.map((cisco) => (
                                        <option key={cisco.code_cisco} value={cisco.code_cisco}>{cisco.cisco}</option>
                                    )) : []}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>ETABLISSEMENT SCOLAIRE</td>
                            <td>
                                <select className="form-control" name="p0_etab" value={formData.p0_etab} style={{ textAlign:"center" }} onChange={ (e) => ChangeEtab(e) }>
                                    <option value="0" >---ETABLISSEMENT---</option>
                                    { vrCisco ? <ChangeCiscosPosteAcuel codeDren={isDren} codeCisco={isCisco} codeFonction={codeFonction}/> : <></> }
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
                                <select className="form-control" name="p0_direction" style={{ textAlign:"center" }} value={formData.p0_direction} onChange={ (e) => ChangeDir(e) }>
                                    <option value="0" >---DIRECTION---</option>
                                    { resDir ? resDir.map((dir) => (
                                        <option key={dir.code_direction} value={dir.code_direction}>({dir.code_direction})-{dir.direction}</option>
                                    )) : []}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>SERVICE</td>
                            <td>
                                <select className="form-control" name="p0_service" value={formData.p0_service_d} style={{ textAlign:"center" }}>
                                    <option value="0" >---SERVICE---</option>
                                    { vrDir ?  <ChangeDirsPosteAcuel codeDir={isDir}/> : <></> }
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
                        {resFonct.map((func) => (
                            <option key={func.id_fonction} value={func.id_fonction}>{func.fonction}</option>
                        ))}
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
                                            onChange={(e) => changePoste(e) }
                                            name="p0_poste"/>
                    </td>
                </tr>
            </>
}