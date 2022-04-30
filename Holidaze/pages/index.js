import Head from 'next/head';
import Layout from '../components/layout/layout';
import Image from 'next/image';
import heroBanner from '../public/historical-building-bergen-morning.jpg';
import BookingDetails from '../components/form/bookingDetails';
import Article from './posts/article';

const URL = process.env.STRAPIBASEURL

export default function Home({articles}) {
    return  (
      <>
        <Head>
          <title>Holidaze | Book Now!</title>
          <meta name='description' content='Book your Bergen adventure today! Hotels, Guesthouses and B&Bs. Booking accommodations has never been easier!'/>
          <meta name='keywords' content='bergen, hotels, rooms, B&Bs, bookings, easy, lastminute, travel'/>
        </Head>
      <Layout>
        <div className="hero">
            <Image 
              src={heroBanner}
              alt='Historical buildings Bergen, in the morning'
              objectFit='cover'
              height={500}
              width={414}
              layout="responsive"
              priority
              />

              <div className='card-img-overlay'>
                <h1>Visit City Of The Seven Mountains</h1>
                <h2>Book Now!</h2>
              <div className='card-body bg-light'>
             <BookingDetails/>
              </div>
            </div>          
        </div>
        {articles.data.map((article,i) => {
        const {id,attributes} = article;
        return (
          <Article url={attributes.splash.data.attributes.url} body={attributes.body} title={attributes.title} id={id} key={i}/>
        );
      })}
      </Layout>
  </>
  );
}


export async function getStaticProps() {
  const articles = await fetch(URL +'/api/articles?populate=*').then( r=> r.json());
  return {
      props: {
          articles,
          revalidate:10
      }
  };
}