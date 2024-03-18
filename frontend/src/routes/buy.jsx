import Pricing from '../ui/Pricing';
import { useLoaderData } from 'react-router-dom';
import { fetchPricingData } from '../lib/loaders.js';

export async function loader() {
    let pricingData = await fetchPricingData();
    return pricingData;
}

export default function Buy() {
    const data = useLoaderData();

    return (
        <>

            <Pricing {...data}/>
            {/* <Pricing title={data.title} description={data.description} plans={data.plans}/> */}
        </>
  );
}