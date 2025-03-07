import { useEffect, useState } from "react";
import { Verification } from "../services/VerificationApi";
import { MEDIA_URL } from "../config/config";
const icharge = MEDIA_URL+"src/assets/images/loader.gif";

export const CinPages = () => {
    const [cin,setCin] = useState('');
    const [error,setError] = useState('');
    const [isError,setIsError] = useState(false);
    const [isCharge,setIsCharge] = useState(false);
    const _params = new URLSearchParams(window.location.search);
    const encodedValue = _params.get("_ipers");
    const decodedValue = encodedValue ? atob(encodedValue) : null;
    const [_im,setIms] = useState(0);

    useEffect(() => {
        setIms(decodedValue);

        const _resIms = Verification.getIms(decodedValue);
        _resIms.then((res) => {
            if(res._status == 'ko'){
                window.location.href="/";
            }
        });

    }, []);

    const runVerifCin = () => {
        setIsCharge(true);
        const _resIms = Verification.getCin(decodedValue,cin);
        _resIms.then((res) => {
            if(res._status == 'ok'){
                setIsCharge(false);
                window.location.href="/form-inscription.html?_ipers="+btoa(decodedValue)+"&_cins="+btoa(cin);
            }else{
                setIsError(true);
                setIsCharge(false);
                setError('CIN inexiste ou non valide');
            }
        });
    }

    return <>
                <input type="text" value={cin}
                                   onChange={ (e) => setCin(e.target.value.replace(/[^0-9.]/g, "")) }
                                   placeholder="Tapez votre CIN"
                                   maxLength='12'
                />
                <input type="hidden" value={_im} onChange={setIms}/>
                <center style={{ color:'red' }}>{ isError ? error : "" }</center>
                <center>
                    {isCharge ? <img src={icharge} width='20'/> : ``}
                </center>
                <center>
                    <button type="button" id="btn-verification-im" className='btn btn-primary' onClick={(e) =>runVerifCin() }>Verifier</button>
                </center>
           </>
}