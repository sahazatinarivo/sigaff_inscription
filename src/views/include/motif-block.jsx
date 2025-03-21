import { useEffect, useState } from "react";
import { MotifApi } from "../../services/MotifApi";
// import { ChangeMotifs } from "../ajaxs/localite/type-motif";

export const MotifBlock = ({formData,setFormData}) => {
    const [motif,setMotif] = useState(0);
    const [vrMotif,setVrMotif] = useState(false);
    const [resMotif,setResMotif] = useState([]);
    MotifApi.getMotif(setMotif);

    const ChangeMotif = (e) => {
        setMotif(e.target.value !== 0 ? parseInt(e.target.value.split(']')[0].replace('[','')) : 0 );
        setVrMotif(true);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    // const ChangeTypeMotif = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // }
    
    return <>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="container-fluid">
                            <select className="form-control" id="select-motif" name="id_motif" value={formData.id_motif} style={{ textAlign:'center' }} onChange={ChangeMotif}>
                                <option value="0">---MOTIF----</option>
                                { motif.data ? motif.data.map((motif) => (
                                    <option key={motif.id_motif ? motif.id_motif :0 } value={motif.id_motif && motif ? '['+motif.id_motif+']['+motif.motif+']' : 0}>{motif.motif ? motif.motif : ""}</option>
                                )) : []}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 container-fluid">
                        <div className="container-fluid">
  
                        </div>
                    </div>
                </div>
            </>
}