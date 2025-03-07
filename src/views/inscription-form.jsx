import 'bootstrap/dist/css/bootstrap.css';
import { MEDIA_URL } from '../config/config';
import { useEffect } from 'react';
import { useState } from 'react';
import { Verification } from '../services/VerificationApi';
import { HeaderInscription } from './include/head-ins';
import { BodyInscription } from './include/body-ins';
const logo = MEDIA_URL+"src/assets/images/men_icon.png";

export const InscriptionFormMethod = () => {

    const _params = new URLSearchParams(window.location.search);
    const encodeIms = _params.get("_ipers");
    const encodeCin = _params.get("_cins");
    const decodeIms = encodeIms ? atob(encodeIms) : null;
    const decodeCin = encodeCin ? atob(encodeCin) : null;
    const [_im,setIms] = useState(0);
    const [cin,setCin] = useState(0);
    const _resIms = Verification.getCin(decodeIms,decodeCin);

    useEffect(() => {
        setIms(decodeIms);
        setCin(decodeCin);

        _resIms.then((res) => {
            if(res._status == 'ko'){
                window.location.href="/";
            }
        });

    }, []);

    return  <>
                <HeaderInscription datas={_resIms}/>
                <br /><br />
                <BodyInscription datas={_resIms}/>
                <input type="hidden" value={_im} onChange={setIms}/>
                <input type="hidden" value={cin} onChange={setCin}/>
            </>
}