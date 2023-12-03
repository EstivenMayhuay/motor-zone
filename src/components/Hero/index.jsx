import './index.css';

export const Hero = () => {
    return <>
        <div id="hero">
            <div className='info px-4 py-5 d-flex gap-4 flex-column align-items-center justify-content-center'>
                <h3 className='title p-0 m-0 text-white fw-bold text-center' style={{fontStyle: "italic"}}>Los mejores servicios para tu Auto</h3>
                <div>
                    <p className='paragraph text-center text-break text-white'>En Motor Zone buscamos ofrecerte los mejores beneficios para tu Auto</p>
                </div>
            </div>
            <div className="image"></div>
        </div>
    </>
}