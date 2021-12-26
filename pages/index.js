import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

const Home = (props) => (
  <>
    <div>{props.title}</div>
    <img src={props.imageUrl} />
  </>
)

export async function getStaticProps() {
  const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
  const data = await res.json();

  return {
    props: {
      title: data.title,
      imageUrl: data.url,
    },
  };
}

export default Home;
