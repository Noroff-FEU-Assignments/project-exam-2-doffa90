import Head from "next/head";
import Layout from "../components/layout/layout";
import Hotel from "./hotels/hotel";
const URL = process.env.STRAPIBASEURL

export default function Hotels({hotels}) {
    return(
        <div>
        <Head>
          <title>Holidaze | Book Now!</title>
          <meta name='description' content='Book your Bergen adventure today! Hotels, Guesthouses and B&Bs. Booking accommodations has never been easier!'/>
          <meta name='keywords' content='bergen, hotels, rooms, B&Bs, bookings, easy, lastminute, travel'/>
        </Head>
      <Layout>
      {hotels.data.map((hotel,i) => {
        const {id,attributes} = hotel;
        return (
          <Hotel alternativeText={attributes.media.data[0].attributes.alternativeText} subTitle={attributes.subTitle} url={attributes.media.data[0].attributes.url} body={attributes.body} title={attributes.title} description={attributes.description} slug={attributes.slug} id={id} key={i} />
          );
      })}
      </Layout>
  </div>
    )
}


export async function getStaticProps() {
    const hotels = await fetch(URL +'/api/hotels?populate=*').then(r => r.json());
    return {
        props: {
            hotels,
            revalidate: 10
        }
    };
}
