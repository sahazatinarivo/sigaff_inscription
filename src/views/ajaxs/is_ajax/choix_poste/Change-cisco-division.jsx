import { useEffect, useState } from "react"
import { Verification } from "../../../../services/VerificationApi";

export const ChangeCiscosDivisionChoix = () => {
    const [resDiv,setResDiv] = useState([]);
    const dataDiv = Verification.getDiv();

    useEffect(() => {
        dataDiv.then((res) => { setResDiv(res.data); });
    }, [dataDiv]);

    return <>
                { resDiv ? resDiv.map((div) => (
                    <option key={div.code_division_c} value={div.code_division_c}>({div.code_division_c})-{div.division_c}</option>
                )) : []}
           </>
}