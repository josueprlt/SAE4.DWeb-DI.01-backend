import { useLoaderData, defer, Await } from "react-router-dom";
import Teams from '../ui/Team';
import Testimonial from '../ui/Testimonial';
import TeamSkeleton from '../ui/Team/TeamSkeleton.jsx';
import { Suspense } from 'react';
import { fetchOurTeams, fetchTestimonialData } from '../lib/loaders'; 

export async function loader( {params} ) {
    /* console.log(params); */
    let teamData = fetchOurTeams(params.teamName);
    let testimonialData = await fetchTestimonialData(params.teamName);
    return defer({ team:teamData, testimonial:testimonialData});
}

export default function OurTeams(){
    const data = useLoaderData();

    return(
        <>
        <section>
            <Suspense fallback={<TeamSkeleton />}>
                <Await resolve={data.team} errorElement={<div>Failed to load team</div>}>
                    {teamData => <Teams {...teamData} />}
                </Await>
            </Suspense>
        </section>
            <Testimonial data={data.testimonial}/>
        </>
    )
}