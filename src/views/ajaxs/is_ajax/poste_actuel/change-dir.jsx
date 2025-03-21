import { useEffect, useState } from "react"
import { Verification } from "../../../../services/VerificationApi";

export const ChangeDirsPosteAcuel = ({codeDir}) => {
    const [resService,setResService] = useState([]);
    const dataService = Verification.getService(codeDir);

    useEffect(() => {
        dataService.then((res) => { setResService(res.data); });
    }, [resService]);

    return <>
                { resService ? resService.map((ser) => (
                    <option key={ser.code_service} value={ser.code_service}>({ser.code_service})-{ser.service}</option>
                )) : []}
           </>
}