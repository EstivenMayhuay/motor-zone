import './index.css';

export const ListBrands = () => {
    const brands = ['icon-car-jaguar.svg', 'icon-car-jeep.svg', 'icon-car-toyota.svg', 'icon-car-mercedes.svg'];

    return <>
        <ul className="w-100 d-flex flex-wrap p-0 m-0 listBrands">
            {
                brands &&
                brands.map((brand, iter) => (
                    <li key={iter}>
                        <img src={`./images/${brand}`} alt="Motor Zone Servicios" />
                    </li>
                ))
            }
        </ul>
    </>
}