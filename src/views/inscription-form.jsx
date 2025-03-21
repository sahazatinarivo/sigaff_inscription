import 'bootstrap/dist/css/bootstrap.css';
import { MEDIA_URL } from '../config/config';
import { useEffect } from 'react';
import { useState } from 'react';
import { Verification } from '../services/VerificationApi';
import { HeaderInscription } from './include/head-ins';
import { BodyInscription } from './include/body-ins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { MotifBlock } from './include/motif-block';

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


    const [formData, setFormData] = useState({
        type_loc0: 0,
        p0_fonction: 0,
        p0_dren: 0,
        p0_cisco: 0,
        p0_etab: 0,
        p0_direction: 0,
        p0_service: 0,
        p0_division_c: 0,
        p0_service_d: 0,
        p0_crinfp: 0,
        p0_poste:"",
        id_motif:0,
        id_type_motif:0,
    });

    const EnvoieDemande = (e) => {
        console.log(formData);
    }

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
                <div className='container-fluid'>
                    <BodyInscription datas={_resIms} formData={formData} setFormData={setFormData}/>
                    <input type="hidden" value={_im} onChange={setIms}/>
                    <input type="hidden" value={cin} onChange={setCin}/>
                </div>
                <hr />
                <MotifBlock formData={formData} setFormData={setFormData}/>
                <hr />
                <center>
                    <button type='button' className='btn btn-success btn-sm' onClick={(e) => EnvoieDemande(e)}><FontAwesomeIcon icon={faPaperPlane} /> ENVOYER LA DEMANDE</button>
                </center>
            </>
}
