
export const ListeDivisionPosteActuel = ( {listeDiv} ) => {

    return <>
                { listeDiv ? listeDiv.map((div) => (
                    <option key={div.code_division_c} value={div.code_division_c}>({div.code_division_c})-{div.division_c}</option>
                )) : []}
            </>
}