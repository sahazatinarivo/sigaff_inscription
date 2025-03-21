import { useEffect, useState } from "react"
import { Verification } from "../../../../services/VerificationApi";

export const ChangeServiceDrenPosteAcuel = () => {
    const [resServ,setResServ] = useState([]);
    const dataServ = Verification.getServ();

    useEffect(() => {
        dataServ.then((res) => { setResServ(res.data) });
    }, [resServ]);

    return <>
                { resServ ? resServ.map((serv) => (
                    <option key={serv.code_service_d} value={serv.code_service_d}>({serv.code_service_d})-{serv.service_d}</option>
                )) : []}
           </>
}