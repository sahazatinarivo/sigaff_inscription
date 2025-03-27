
export const ListeServiceDrenPosteAcuel = ( {listeServiceDren} ) => {

    return <>
                { listeServiceDren ? listeServiceDren.map((serv) => (
                    <option key={serv.code_service_d} value={serv.code_service_d}>({serv.code_service_d})-{serv.service_d}</option>
                )) : []}
           </>
}