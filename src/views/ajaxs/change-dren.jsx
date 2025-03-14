import { useEffect, useState } from "react"
import { Verification } from "../../services/VerificationApi"

export const ChangeDren = ( {codeDren} ) => {
    const [resCisco,setResCisco] = useState([]);
    const dataCisco = Verification.getCisco(codeDren);

    useEffect(() => {
        if(codeDren !== 0){
            dataCisco.then((res) => { setResCisco(res.data); });
        }
    }, [dataCisco]);

    return <>
                { resCisco ? resCisco.map((cisco) => (
                    <option key={cisco.code_cisco} value={cisco.code_cisco}>{cisco.cisco}</option>
                )) : []}
           </>
}