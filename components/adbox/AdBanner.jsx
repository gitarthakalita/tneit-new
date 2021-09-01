 
import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
   
     <ins className="adsbygoogle adbanner-customize"  style={{
        display: "block"
      }}
      data-adtest="on"
      data-ad-client="ca-pub-XXXXXXXXXXXXX"
      data-ad-slot="XXXXXXXXXXX"
    />
   
  );
};

export default AdBanner;