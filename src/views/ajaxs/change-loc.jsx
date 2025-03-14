import { useEffect,useState } from "react";
import { Verification } from "../../services/VerificationApi";
import { ChangeDren } from "./change-dren";
import { ChangeCiscos } from "./change-cisco";
import { ChangeDirs } from "./change-dir";

export const ChangeLoc = ({ typeLoc }) => {
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

    const [presPost,setpresPost] = useState("");

    const dataFonct = Verification.getFunction(typeLoc.split('|')[1]);
    const dataDren = Verification.getDren();
    const dataDir = Verification.getDir();
    const codeFonction = typeLoc.split('|')[0] ? typeLoc.split('|')[2] : null;

    const ChangeDrens = (e) => { 
        setIsDren(e.target.value);
        setVrDren(true)
    }

    const ChangeCisco = (e) => { 
        setIsCisco(e.target.value);
        setVrCisco(true)
    }

    const changePoste = (e) => { 
        setpresPost(e.target.value);
    }

    const ChangeDir = (e)  => { 
        setIsDir(e.target.value);
        setVrDir(true);
    }

    useEffect(() => {
        dataFonct.then((res) => { setResFonct(res.data); });
        dataDren.then((res) => { setresDren(res.data); });
        dataDir.then((res) => { setResDir(res.data); });
    }, []);


    switch (typeLoc.split('|')[0]) {
        case 'etab':
          message = <>
                        <tr>
                            <td style={{ textAlign:'right' }}>FONCTION</td>
                            <td>
                                <select className="form-control" style={{ textAlign:"center" }}>
                                    <option value="0" >---FONCTION---</option>
                                {resFonct.map((func) => (
                                    <option key={func.id_fonction} value={func.id_fonction}>{func.fonction}</option>
                                ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>DREN</td>
                            <td>
                                <select className="form-control" style={{ textAlign:"center" }} value={isDren} onChange={ (e) => ChangeDrens(e) }>
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
                                <select className="form-control" style={{ textAlign:"center" }} value={isCisco} onChange={ (e) => ChangeCisco(e) }>
                                    <option value="0" >---CISCO---</option>
                                    { vrDren ?  <ChangeDren codeDren={isDren}/> : <></> }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>ETABLISSEMENT SCOLAIRE</td>
                            <td>
                                <select className="form-control" style={{ textAlign:"center" }}>
                                    <option value="0" >---ETABLISSEMENT---</option>
                                    { vrCisco ? <ChangeCiscos codeDren={isDren} codeCisco={isCisco} codeFonction={codeFonction}/> : <></> }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>POSTE</td>
                            <td>
                                <input type="text" className="form-control" 
                                                   placeholder="Preciser votre poste" 
                                                   value={presPost} 
                                                   onChange={changePoste}/>
                            </td>
                        </tr>
                    </>;
          break;
        case 'direction':
            message = <>
                        <tr>
                            <td style={{ textAlign:'right' }}>FONCTION</td>
                            <td>
                                <select className="form-control" style={{ textAlign:"center" }}>
                                    <option value="0" >---FONCTION---</option>
                                {resFonct.map((func) => (
                                    <option key={func.id_fonction} value={func.id_fonction}>{func.fonction}</option>
                                ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>DIRECTION</td>
                            <td>
                                <select className="form-control" style={{ textAlign:"center" }} value={isDir} onChange={ (e) => ChangeDir(e) }>
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
                                <select className="form-control" style={{ textAlign:"center" }}>
                                    <option value="0" >---SERVICE---</option>
                                    { vrDir ?  <ChangeDirs codeDir={isDir}/> : <></> }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign:'right' }}>POSTE</td>
                            <td>
                                <input type="text" className="form-control" 
                                                   placeholder="Preciser votre poste" 
                                                   value={presPost} 
                                                   onChange={changePoste}/>
                            </td>
                        </tr>
                      </>;
          break;
        case 'cisco':
            message = <>
                        <tr>
                            <td style={{ textAlign:'right' }}>cisco</td>
                            <td>tsara ny tompo</td>
                        </tr>
                      </>;
          break;
        case 'dren':
            message = <>
                        <tr>
                            <td style={{ textAlign:'right' }}>cisco</td>
                            <td>tsara ny tompo</td>
                        </tr>
                      </>;
          break;
        case 'crinfp':
            message = <>
                        <tr style={{ textAlign:'right' }}>
                            <td>crinfp</td>
                            <td>tsara ny tompo</td>
                        </tr>
                      </>;
          break;
        default:
          message = <></>;
          break;
      }

    return  <>
                { message }
            </>
}