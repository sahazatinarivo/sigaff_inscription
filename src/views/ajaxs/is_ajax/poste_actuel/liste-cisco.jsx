
export const ListeCiscoPosteActuel = ( {listCisco} ) => {

    return <>
                { listCisco ? listCisco.map((cisco) => (
                    <option key={cisco.code_cisco} value={cisco.code_cisco}>{cisco.cisco}</option>
                )) : []}
            </>
}