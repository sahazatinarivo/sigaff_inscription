
export const ListeEtabsPosteAcuel = ( {listeEtabs} ) => {

    return <>
                { listeEtabs ? listeEtabs.map((etab) => (
                    <option key={etab.code_etab} value={etab.code_etab}>{etab.etab}</option>
                )) : []}
           </>
}