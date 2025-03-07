import 'bootstrap/dist/css/bootstrap.css';
import { MEDIA_URL } from '../../config/config';
import { useEffect, useState } from 'react';
const logo = MEDIA_URL+"src/assets/images/men_icon.png";

export const HeaderInscription = ({datas}) => {
    const [isdata, setIsData] = useState([]);
    const [numPhone, setNumPhone] = useState('');
    const [email,setEmail] = useState('');

    useEffect(() => {
        datas.then((res) => {
            setIsData(res.data);
        });
    }, []);

    return  <>
                <div className='row' id='block-entete-form'>
                    <div className="col-md-4 col-sm-8 col-xs-8">
                        <div className='row'>
                            <div className='col-md-3 col-sm-3'>
                                <img src={logo} width="70"/>
                            </div>
                            <div className='col-md-9 col-sm-9 libelle-titre'>
                                <h4>DEMANDE D'AFFECTATION</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-1 col-xs-0"></div>
                    <div className="col-md-3 col-sm-3 col-xs-4 libelle-icone-user">
                    {isdata.map((user) => (
                        <h6 key={user.nom_prenoms}>{user.nom_prenoms}</h6>
                    ))}
                    </div>
                </div>
                <div className='row' id='sous-tete-form'>
                    <div className='col-md-8'>
                        {isdata.map((user) => (
                            <h4 key={user.nom_prenoms}><b><i>Bienvenue {user.nom_prenoms}</i></b></h4>
                        ))}
                    </div>
                    <div className='col-md-4'>
                        <div className="btn-group pull-right btn-annulation-permutation">
                            <a href="#" className="btn btn-info btn-sm pull-right">
                                <i className="fa fa-window-restore"></i> Permutation
                            </a>
                            <a href="#" className="btn btn-info btn-sm ">
                                <i className="fa fa-file-archive-o"></i> Demande d'annulation
                            </a>
                        </div>
                    </div>
                </div>
            </>
}