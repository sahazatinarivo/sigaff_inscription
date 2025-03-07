import { MEDIA_URL } from "../../config/config";
const logo = MEDIA_URL+"src/assets/images/men_icon.png";

export const HeaderPg = () => {

    return  <>
                <center>
                    <img src={logo} width="100"/>
                </center>
                <br />
                <h4>Demande d'affectation</h4>
                <br />
            </>
}