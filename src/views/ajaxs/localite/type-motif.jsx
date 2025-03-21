import { useEffect, useState } from "react"
import { MotifApi } from "../../../services/MotifApi";

export const ChangeMotifs = ({motif}) => {
    const [resTypeMotif,setResTypeMotif] = useState([]);
    const dataTypeMotif = MotifApi.getTypeMotif(motif);

    useEffect(() => {
        dataTypeMotif.then((res) => { setResTypeMotif(res.data); });
    }, [dataTypeMotif]);

    return <>
                { resTypeMotif ? resTypeMotif.map((typeMotif) => (
                    <option key={typeMotif.id_type ? typeMotif.id_type : 0} value={typeMotif.id_type && typeMotif.type_motif ? [typeMotif.id_type][typeMotif.type_motif] : 0}>{typeMotif.type_motif ? typeMotif.type_motif : ""}</option>
                )) : []}
           </>
}