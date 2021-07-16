import React from "react";

const Adbox = ({image_url, height}) => {
  return (
    <section className="adbox-section">
      <div className="ad" style={{
          backgroundImage:`url(${image_url})`,
          height: `${height}`
      }}>
        <p>Advertisement</p>
      </div>
    </section>
  );
};

export default Adbox;
