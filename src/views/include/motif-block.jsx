import { useEffect, useState } from "react";
import { MotifApi } from "../../services/MotifApi";
import { ChangeMotifs } from "../ajaxs/localite/type-motif";

export const MotifBlock = ({formData,setFormData}) => {
    const [listeMotif,setListeMotif] = useState(0);
    const [valeurMotif,setValeurMotif] = useState(0);
    const [listeTypeMotif,setlisteTypeMotif] = useState(0);
    const [valeurTypeMotif,setValeurTypeMotif] = useState(0);
    const dataMotif = MotifApi.getMotif();

    const ChangeMotif = (e) => {
        setValeurMotif(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const ChangeTypeMotif = (e) => {
        setValeurTypeMotif(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        dataMotif.then((res) => { 
            if(res){
                setListeMotif(res.data); 
            }
        });
    }, []);

    useEffect(() => {
        if(valeurMotif){
            MotifApi.getTypeMotif(valeurMotif.split('][')[0].replace('[','')).then((res) => { setlisteTypeMotif(res.data); });
        }
    }, [valeurMotif]);
    
    return <>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="container-fluid">
                            <select className="form-control" id="select-motif" name="id_motif" value={valeurMotif} style={{ textAlign:'center' }} onChange={ChangeMotif}>
                                <option value="0">---MOTIF----</option>
                                { listeMotif ? listeMotif.map((motif) => (
                                    <option key={motif.id_motif ? motif.id_motif :0 } value={motif.id_motif && motif ? '['+motif.id_motif+']['+motif.motif+']' : 0}>{motif.motif ? motif.motif : ""}</option>
                                )) : []}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 container-fluid">
                        <div className="container-fluid">
                            <select className="form-control" id="select-motif" name="id_motif" value={valeurTypeMotif} style={{ textAlign:'center' }} onChange={ChangeTypeMotif}>
                                <option value="0">---TYPE MOTIF----</option>
                                { listeTypeMotif ? listeTypeMotif.map((typemotif) => (
                                    <option key={typemotif.id_type ? typemotif.id_type :0 } value={typemotif.id_type}>{typemotif.type_motif ? typemotif.type_motif : ""}</option>
                                )) : []}
                            </select>
                        </div>
                    </div>
                </div>
            </>
}