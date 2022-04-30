import React from 'react'
import Link from 'next/link'

const URL = process.env.STRAPIBASEURL

export default function Admin({landing}) {
    console.log(landing);
    return (
        <Layout>
            <Link href="/">
                <a className="nav">Home</a>
            </Link>
            <Link href="/contact">
                <a className="nav">Contact</a>
            </Link>
            <Link href="/login">
                <a className="nav">Login</a>
            </Link>
            <Link href="/admin">
                <a className="nav">Admin</a>
            </Link>
            <h1>Admin page</h1>    
                <h2>{landing.data[0].attributes.title}</h2>
                <p>{landing.data[0].attributes.description}</p>
        </Layout>
    )
}



export async function getServerSideProps(ctx) {

    const jwt = parseCookies(ctx).jwt
    

    const res = await fetch(URL+`/api/user`,{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
    })
    const landing = await res.json();
    return{
        props:{
landing:landing
        },
    };
}