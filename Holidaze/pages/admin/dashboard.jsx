import React from 'react'
const BaseUrl = 'http://localhost:1337'
import {parseCookies} from 'nookies'
import DashPosts from '../posts/dashPosts';



function Dashboard({adminDash}) {
    console.log(adminDash);
    return (
        <>
        {adminDash.data.map((dash,i) => {
            const {attributes} = dash;
            return (
              <DashPosts key={i} title={attributes.title} description={attributes.description} />
            );
          })}
      </>
      );
    }



export async function getServerSideProps(ctx) {
    
    const jwt = parseCookies(ctx).jwt

    const res = await fetch(BaseUrl+'/api/dashboards',{
            headers:{
            Authorization:`Bearer ${jwt}`
        }
    })
    const adminDash = await res.json();

    return{
        props:{
            adminDash:adminDash,
        },
    };
}

export default Dashboard;