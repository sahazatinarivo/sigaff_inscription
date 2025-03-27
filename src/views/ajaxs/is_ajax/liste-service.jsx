
export const ListeService = ({listServ}) => {

    return <>
                { listServ ? listServ.map((ser) => (
                    <option key={ser.code_service} value={ser.code_service}>({ser.code_service})-{ser.service}</option>
                )) : []}
           </>
}