import React from "react";

const Adbox = ({image_url, height}) => {
  return (
    <section className="adbox-section">
      <div className="ad" style={{
          backgroundImage:`url(${image_url})`,
          height: `${height}`
      }}>
        <div className="advert">Advertisement</div>
      </div>
    </section>
  );
};

export default Adbox;
