import React from "react";
import "./css-files/Depth.css";
import Pfp from "./Pfp";
import { nanoid } from "nanoid";

// type DepthProps = {
//   name: string;
//   imageInfo: {
//     img1: { imgLink: string; imgDesc: string; imgClassName: string };
//     img2: { imgLink: string; imgDesc: string; imgClassName: string };
//     img3: { imgLink: string; imgDesc: string; imgClassName: string };
//     img4: { imgLink: string; imgDesc: string; imgClassName: string };
//     img5: { imgLink: string; imgDesc: string; imgClassName: string };
//     img6: { imgLink: string; imgDesc: string; imgClassName: string };
//     img7: { imgLink: string; imgDesc: string; imgClassName: string };
//     img8: { imgLink: string; imgDesc: string; imgClassName: string };
//     img9: { imgLink: string; imgDesc: string; imgClassName: string };
//     img10: { imgLink: string; imgDesc: string; imgClassName: string };
//   } |
// }

function Depth(props: any) {
  console.log(props.imageInfo);

  return (
    <section>
      <Pfp
        image={props.imageInfo.img1.imgLink}
        imgDescription={props.imageInfo.img1.imgDesc}
        imgClassName={props.imageInfo.img1.imgClassName}
      />
      <Pfp
        image={props.imageInfo.img2.imgLink}
        imgDescription={props.imageInfo.img2.imgDesc}
        imgClassName={props.imageInfo.img2.imgClassName}
      />
      {props.imageInfo.img3 ? (
        <Pfp
          image={props.imageInfo.img3.imgLink}
          imgDescription={props.imageInfo.img3.imgDesc}
          imgClassName={props.imageInfo.img3.imgClassName}
        />
      ) : (
        ""
      )}

      {props.imageInfo.img4 ? (
        <Pfp
          image={props.imageInfo.img4.imgLink}
          imgDescription={props.imageInfo.img4.imgDesc}
          imgClassName={props.imageInfo.img4.imgClassName}
        />
      ) : (
        ""
      )}

      {props.imageInfo.img5 ? (
        <Pfp
          image={props.imageInfo.img5.imgLink}
          imgDescription={props.imageInfo.img5.imgDesc}
          imgClassName={props.imageInfo.img5.imgClassName}
        />
      ) : (
        ""
      )}

      {props.imageInfo.img6 ? (
        <Pfp
          image={props.imageInfo.img6.imgLink}
          imgDescription={props.imageInfo.img6.imgDesc}
          imgClassName={props.imageInfo.img6.imgClassName}
        />
      ) : (
        ""
      )}

      {props.imageInfo.img7 ? (
        <Pfp
          image={props.imageInfo.img7.imgLink}
          imgDescription={props.imageInfo.img7.imgDesc}
          imgClassName={props.imageInfo.img7.imgClassName}
        />
      ) : (
        ""
      )}

      {props.imageInfo.img8 ? (
        <Pfp
          image={props.imageInfo.img8.imgLink}
          imgDescription={props.imageInfo.img8.imgDesc}
          imgClassName={props.imageInfo.img8.imgClassName}
        />
      ) : (
        ""
      )}

      {props.imageInfo.img9 ? (
        <Pfp
          image={props.imageInfo.img9.imgLink}
          imgDescription={props.imageInfo.img9.imgDesc}
          imgClassName={props.imageInfo.img9.imgClassName}
        />
      ) : (
        ""
      )}

      {props.imageInfo.img10 ? (
        <Pfp
          image={props.imageInfo.img10.imgLink}
          imgDescription={props.imageInfo.img10.imgDesc}
          imgClassName={props.imageInfo.img10.imgClassName}
        />
      ) : (
        ""
      )}
      {props.imageInfo.img11 ? (
        <Pfp
          image={props.imageInfo.img11.imgLink}
          imgDescription={props.imageInfo.img11.imgDesc}
          imgClassName={props.imageInfo.img11.imgClassName}
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default Depth;
