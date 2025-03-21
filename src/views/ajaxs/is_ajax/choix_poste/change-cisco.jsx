import { useEffect, useState } from "react"
import { Verification } from "../../../../services/VerificationApi";

export const ChangeCiscosChoix = ( {codeDren,codeCisco,codeFonction} ) => {
    const [resEtab,setResEtab] = useState([]);
    const dataEtab = Verification.getEtab(codeDren,codeCisco,codeFonction);

    useEffect(() => {
        dataEtab.then((res) => { setResEtab(res.data); });
    }, [dataEtab]);

    return <>
                { resEtab ? resEtab.map((etab) => (
                    <option key={etab.code_etab} value={etab.code_etab}>{etab.etab}</option>
                )) : []}
           </>
}