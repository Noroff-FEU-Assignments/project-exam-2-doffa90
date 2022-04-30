import Head from "next/head";
import Layout from "../../components/layout/layout";
import React from "react";
import ReactMarkdown from "react-markdown"


const URL = process.env.STRAPIBASEURL;

export async function getServerSideProps({query}){
    const { id } = query
    const hotel = await fetch(URL +`/api/hotels/${id}?populate=*`).then(r => r.json());
    return {
        props: {
            hotel,
            revalidate: 10
        }
    };
}


export default function Content({hotel}) {
    const {title,media,description,subTitle,amenitiesCard,famCard,proxCard,slug}= hotel.data.attributes;

    return(
        <div>
            <Head>
                <title>{slug}</title>
                <meta name='description' content={description}/>
            </Head>
            <Layout>
        <h2>{title}</h2>
        <img src={media.data[0].attributes.url} alt={media.data[0].attributes.alternativeText} />
    <p>{description}</p>
    <h3>{subTitle}</h3>
    <div className="card-group">
  <div className="card">
    <div className="card-body">
      <ReactMarkdown className="card-text">{amenitiesCard}</ReactMarkdown>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <ReactMarkdown className="card-text">{famCard}</ReactMarkdown>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <ReactMarkdown className="card-text">{proxCard}</ReactMarkdown>
    </div>
  </div>
</div>
        </Layout>
        </div>
    )}

