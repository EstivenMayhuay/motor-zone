import './index.css';

export const ButtonSocial = ({
    type
}) => {
    let imgElem = null;
    let link = null;

    if(type == 'facebook') {
        imgElem = <img src="./images/icon-facebook.svg" alt="Facebook Motor Zone" width={24} />;
        link = 'https://www.facebook.com/MotorsZonePeru?mibextid=LQQJ4d';
    } else if (type == 'instagram'){
        imgElem = <img src="./images/icon-instagram.svg" alt="Instagram Motor Zone" width={24} />;
        link = 'https://www.instagram.com/motorszoneperu/?igshid=YTQwZjQ0NmI0OA%3D%3D';
    }

    return <a className="btnSocial" href={`${link}`} rel='noreferrer' target='_blank' title='Facebook Motor Zone'>{imgElem}</a>
}