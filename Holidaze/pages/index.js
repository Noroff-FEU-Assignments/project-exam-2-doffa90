import Head from 'next/head';
import Layout from '../components/layout/layout';
import Image from 'next/image';
import heroBanner from '../public/historical-building-bergen-morning.jpg';
import BookingDetails from '../components/form/bookingDetails';


export default function Home() {
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
              >
            </Image>
              <div className='card-img-overlay'>
                <h1>Visit City Of The Seven Mountains</h1>
                <h2>Book Now!</h2>
              <div className='card-body bg-light'>
             <BookingDetails/>
              </div>
            </div>          
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  </div>
      </Layout>
  </>
  );
}