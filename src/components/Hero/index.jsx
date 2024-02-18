export const Hero = ({title, img}) => {
    const imgSrc = `/images/${img}`

    console.log(imgSrc)

    return <>
        <div style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.5) 50%), url('${imgSrc}')`, minHeight: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center top' }} className="d-flex align-items-center justify-content-center">
            <h1 className="text-white text-center fw-bold">{title}</h1>
        </div>
    </>
}