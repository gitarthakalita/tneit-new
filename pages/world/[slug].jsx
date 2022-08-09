import React from "react";
import Adbox from "../../components/adbox/Adbox";

import Layout from "../../components/layout/Layout";

const NewsPost = ({ data }) => {
  const {
    story_title,
    story_sub_heading,
    story_author,
    story_date,
    story_header_image,
    story_header_image_caption,
    story_content
  } = data;

  return (
    <Layout showAds="true">
      {/* <section className="story-header-section">
        <div className="story-header-wrapper">
          <div className="story-type">
            Featured <span>|</span> World
          </div>
          <h3>{story_title}</h3>
          <p className="subheading">{story_sub_heading}</p>
          <div className="story-data-box">
            <div className="story-author">By {story_author}</div>
            <span>|</span>
            <div className="story-date">{story_date}</div>
          </div>

          <div className="story-header-image-box">
            <div
              className="image"
              style={{
                backgroundImage: `url(${story_header_image})`,
              }}
            ></div>
            <div className="image-caption">
              {story_header_image_caption}
            </div>
          </div>
        </div>
      </section>

      <div className="story-content-section">
        <div className="story-content-wrapper" dangerouslySetInnerHTML={{__html: story_content}} >         
        </div>
        
      </div>

      <Adbox image_url='https://picsum.photos/700/500' height='30vh' />   */}
    </Layout>
  );
};

export default NewsPost;

// export async function getServerSideProps(context) {
//   const { slug } = context.query;

//   console.log(slug);

//   // const res = await fetch(`http://localhost:3000/api/stories/${slug}`);
//   const res = await fetch(`https://tneit.vercel.app//api/stories/${slug}`);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
