
export const ListeCrinfpPosteAcuel = ( {listeCrinfp} ) => {
    return <>
                { listeCrinfp ? listeCrinfp.map((crinfp) => (
                    <option key={crinfp.code_crinfp} value={crinfp.code_crinfp}>{crinfp.crinfp}</option>
                )) : []}
           </>
}