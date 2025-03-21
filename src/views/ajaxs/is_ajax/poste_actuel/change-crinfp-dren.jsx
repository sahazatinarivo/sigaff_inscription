import { useEffect, useState } from "react"
import { Verification } from "../../../../services/VerificationApi";

export const ChangeCinfpDrenPosteAcuel = ( {codeDren} ) => {
    const [resCrinfp,setresCrinfp] = useState([]);
    const dataCinfp = Verification.getCrinfp(codeDren);

    useEffect(() => {
        dataCinfp.then((res) => { setresCrinfp(res.data); });
    }, [resCrinfp]);

    return <>
                { resCrinfp ? resCrinfp.map((crinfp) => (
                    <option key={crinfp.code_crinfp} value={crinfp.code_crinfp}>{crinfp.crinfp}</option>
                )) : []}
           </>
}