export const Hero = ({title, img, phrase = null}) => {
    const imgSrc = `/images/${img}`

    return <>
        <div style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.5) 50%), url('${imgSrc}')`, minHeight: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: `${img === "bg_promociones.jpeg" ? 'contain' : 'cover'}`, backgroundPosition: 'center' }} className="d-flex align-items-center justify-content-center flex-column">
            <h1 className="text-center fw-bold title">{title}</h1>
            {
                phrase &&
                <div className="d-block w-100 d-flex justify-content-center">{phrase}</div>
            }
        </div>
    </>
}