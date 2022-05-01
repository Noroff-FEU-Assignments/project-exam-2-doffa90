import Head from 'next/head';
import Layout from '../components/layout/layout';
import ContactForm from '../components/form/contactForm';
import axios from 'axios';



export default function Contact() {
    return ( 
    <>
        <Head>
        <title> Holidaze | Book Now! </title> 
        <meta name = 'description' content = 'Book your Bergen adventure today! Hotels, Guesthouses and B&Bs. Booking accommodations has never been easier!'/>
        <meta name = 'keywords'content = 'bergen, hotels, rooms, B&Bs, bookings, easy, lastminute, travel'/>
        </Head> 
    <Layout>
 <ContactForm/>
    </Layout> 
</>
    );
}