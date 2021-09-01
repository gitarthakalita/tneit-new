import { Button } from "@material-ui/core";
import React from "react";

// import Image from "next/image";

// import accidentImage from  '../../public/assets/accident.png';

const EditorsPick = () => {
  return (
    <div className="editors-pick-card">
      <Button className="editorial-label">Editor's Pick</Button>
      <div className="editors-pick-wrapper">
        <h3>
          Driver Rams Into Officers at Capitol, Killing One and Injuring Another into a devasting scene
        </h3>
        {/* <Image src={accidentImage} /> */}

        <div className="editors-pick-image">

        </div>

        <ul className="excerpt-box">
          <li>
            Less than three months after the Jan. 6 riot, a Capitol Police
            officer was killed when a man slammed his car into him and another
            officer.
          </li>
          <li>
            The suspect, a 25-year-old man who was alone and armed with a knife,
            was shot and killed.
          </li>
          <li>
            The attack shocked a Capitol slowly returning to normalcy, raising
            new questions about securing the complex.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EditorsPick;
