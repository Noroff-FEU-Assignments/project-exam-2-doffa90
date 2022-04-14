import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Home() {
    return  (
      <div>
        <Head>
          <title>Holidaze | Book Now!</title>
          <meta name='description' content='Book your Bergen adventure today! Hotels, Guesthouses and B&Bs. Booking accommodations has never been easier!'/>
          <meta name='keywords' content='bergen, hotels, rooms, B&Bs, bookings, easy, lastminute, travel'/>
        </Head>

        <h1>Holidaze</h1>
      </div>
    )
}