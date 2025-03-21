import { useEffect, useState } from "react"
import { Verification } from "../../../../services/VerificationApi";

export const ChangeDrenPosteAcuel = ( {codeDren} ) => {
    const [resCisco,setResCisco] = useState([]);
    const dataCisco = Verification.getCisco(codeDren);

    useEffect(() => {
        dataCisco.then((res) => { setResCisco(res.data); });
    }, [resCisco]);

    return resCisco;
}