import { useState } from "react";
import { Verification } from "../services/VerificationApi";
import { MEDIA_URL } from "../config/config";
const icharge = MEDIA_URL+"src/assets/images/loader.gif";

export const ImPages = () => {
    const [ims,setIms] = useState('');
    const [error,setError] = useState('');
    const [isError,setIsError] = useState(false);
    const [isCharge,setIsCharge] = useState(false);

    const runVerifIms = () => {
        setIsCharge(true);
        const _resIms = Verification.getIms(ims);

        _resIms.then((res) => {
            if(res._status == 'ok'){
                setIsCharge(false);
                window.location.href="/verification-cin.html?_ipers="+btoa(ims);
            }else{
                setIsError(true);
                setIsCharge(false);
                setError('IM inexiste ou non valide');
            }
        });
    }

    return <>
                <input type="text" value={ims}
                                   onChange={ (e) => setIms(e.target.value.replace(/[^0-9.]/g, "")) }
                                   placeholder="Tapez votre IM"
                                   maxLength='6'
                />

                <center style={{ color:'red' }}>{ isError ? error : "" }</center>
                <center>
                    {isCharge ? <img src={icharge} width='20'/> : ``}
                </center>
                <center>
                    <button type="button" id="btn-verification-im" className='btn btn-primary' onClick={ (e) =>runVerifIms() }>Verifier</button>
                </center>
           </>
}