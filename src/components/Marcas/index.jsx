import './index.css';

// eslint-disable-next-line react/prop-types
const Icon = ({filename, size}) => {
    return (
        <section>
            <img src={`./images/${filename}`}  width={`${size}px`} height={"auto"}/>
        </section>
    )
}

export const Marcas = () => {
    const images = ['icon-car-toyota.svg', 'icon-car-hyundai.svg', 'icon-car-bmw.svg', 'icon-car-jeep.svg', 'icon-car-volkswagen.svg', 'icon-car-jaguar.svg', 'icon-car-peugeot.svg', 'icon-car-mercedes.svg'];

    return (
        <div className="px-4" id="marcas">
            <h6 className="title text-center fw-bold">Marcas que nos apoyan</h6>

            <div className="marcas__icon d-flex flex-wrap gap-5 justify-content-center align-items-center px-4">
                {
                    images &&
                    images.map((img, iter) => (
                        <Icon key={iter} filename={img} size={64} />
                    ))
                }
            </div>
        </div>
    )
}