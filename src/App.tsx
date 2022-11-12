import { useState } from "react";
import Depth from "./components/Depth";

function App() {
  return (
    <div className="container">
      <Depth
        imageInfo={{
          img1: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2329663.jpg&f=1&nofb=1&ipt=dbd89af7d7ab37e3a7a7bcfb3379085ba1071c4732f78a680aa7130482605049&ipo=images",
            imgDesc: "depressed anime pic",
            imgClassName: "pageOne--img1",
          },

          img2: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5d%2F75%2F3d%2F5d753db300ddcbba490edf1ce4acf5ad.jpg&f=1&nofb=1&ipt=d76a8f997290571f21898388c6c09f837d94abf66c891fa7552164f05cd746ff&ipo=images",
            imgDesc: "any sort of matching pfp",
            imgClassName: "pageOne--img2",
          },

          img3: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.repol.copl.ulaval.ca%2Fwp-content%2Fuploads%2F2019%2F01%2Fdefault-user-icon.jpg%3Ffit%3D300%252C300&f=1&nofb=1&ipt=a9f56cc247c502a6e7336d66040d052972ba4a5bb977c2b8fafe984c03ba8dfa&ipo=images",
            imgDesc: "default user pfp (emo)",
            imgClassName: "pageOne--img3",
          },
          img4: {
            imgLink: "http://ecx.images-amazon.com/images/I/11bf9ZhaVGL.jpg",
            imgDesc: "dark pfp (once more an emo ahh staple)",
            imgClassName: "pageOne--img4",
          },
          img5: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F4%2F3gnqzq.jpg&f=1&nofb=1&ipt=4c304901b07faa97872cf745c31da0725a8934641cbcc0657280a7dbd4c41ac0&ipo=images",
            imgDesc: "any sort of soyjak,wojak etc",
            imgClassName: "pageOne--img5",
          },
          img6: {
            imgLink:
              "https://instagram.fgyd20-2.fna.fbcdn.net/v/t51.2885-15/314930980_1558466201268236_5849517789987281718_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fgyd20-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=qJvkVvFzvXIAX_J03y8&edm=ABJHkxYAAAAA&ccb=7-5&ig_cache_key=Mjk2OTM4ODIyNDc4NjUwNzU0Mw%3D%3D.2-ccb7-5&oh=00_AfDWj34Y3NE-5pfBdtv5JFsFThhLkU5MknwSUvGrZLwfOw&oe=637416F0&_nc_sid=fa978c",
            imgDesc: "cats",
            imgClassName: "pageOne--img6",
          },
          img7: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe4%2Fc4%2F00%2Fe4c40097308fdae13d398f848dd159e7.jpg&f=1&nofb=1&ipt=400b493c8fc106b85bf8f3a66853cafc0dcb58783a9c3fd33a2d3ff7a9ea42f2&ipo=images",
            imgDesc: "selfies",
            imgClassName: "pageOne--img7",
          },
          img8: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnewwallpapershd.com%2Fwp-content%2Fuploads%2F2016%2F02%2FAzerbaijan-Flag.gif&f=1&nofb=1&ipt=607502bec2c99f8363631efd6b798b37898a68ea28b62a40171c220f7027f83f&ipo=images",
            imgDesc: "ur countries flag",
            imgClassName: "pageOne--img8",
          },
          img9: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmelmagazine.com%2Fwp-content%2Fuploads%2F2021%2F01%2F66f-1-267x300.jpg&f=1&nofb=1&ipt=b9f8bdcf052871570473753cb224ef9cbf626128788c69e9f2b6d99883ca5956&ipo=images",
            imgDesc: "gigachad",
            imgClassName: "pageOne--img9",
          },
          img10: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Fed%2F24%2F85%2Fed2485fe54061c53174bd700c61bf2dc.jpg%3Fnii%3Dt&f=1&nofb=1&ipt=e6ec3501868126f58fa9649ee10a8e3462c4b3a012f010ae3a09e4beca9ce6b3&ipo=images",
            imgDesc: "this bitchass dog pfp",
            imgClassName: "pageOne--img10",
          },
          img11: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pennlive.com%2Fresizer%2F6D2Lvv6TYmsnjOXIienffbPwEww%3D%2F1280x0%2Fsmart%2Fadvancelocal-adapter-image-uploads.s3.amazonaws.com%2Fimage.pennlive.com%2Fhome%2Fpenn-media%2Fwidth2048%2Fimg%2Fnews%2Fphoto%2F2016%2F09%2F29%2Fpepepng-cfe5c4a0b7de2eb6.png&f=1&nofb=1&ipt=d2719d07e10b1ff7b6048a00e1ae733d11d76f03a30f0e13847ce5fc3638058e&ipo=images",
            imgDesc: "pepe the frog",
            imgClassName: "pageOne--img11",
          },
        }}
      />
      <Depth
        imageInfo={{
          img1: {
            imgLink:
              "https://pbs.twimg.com/profile_images/1472808065766506504/PDaRT9_k_400x400.jpg",
            imgDesc: "bored ape nft (SCREENSHOTTED)",
            imgClassName: "pageTwo--img1",
          },

          img2: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fberserk%2Fimages%2Ff%2Ff7%2FGuts_armor_manga.jpg%2Frevision%2Flatest%3Fcb%3D20170629022500%26path-prefix%3Des&f=1&nofb=1&ipt=c7330acc85c2d9e92ec5450f9ab01e304b0f280546dd1212f2fb0a64423908f8&ipo=images",
            imgDesc:
              "seinen pic (vagabond berserk or rarely vinland saga(they dont know any other seinen))",
            imgClassName: "",
          },

          img3: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2329663.jpg&f=1&nofb=1&ipt=dbd89af7d7ab37e3a7a7bcfb3379085ba1071c4732f78a680aa7130482605049&ipo=images",
            imgDesc: "depressed anime pic",
            imgClassName: "",
          },
          img4: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2329663.jpg&f=1&nofb=1&ipt=dbd89af7d7ab37e3a7a7bcfb3379085ba1071c4732f78a680aa7130482605049&ipo=images",
            imgDesc: "depressed anime pic",
            imgClassName: "",
          },
        }}
      />
      <Depth
        imageInfo={{
          img1: {
            imgLink:
              "https://pbs.twimg.com/profile_images/1472808065766506504/PDaRT9_k_400x400.jpg",
            imgDesc: "bored ape nft (SCREENSHOTTED)",
            imgClassName: "pageThree--img1",
          },

          img2: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2329663.jpg&f=1&nofb=1&ipt=dbd89af7d7ab37e3a7a7bcfb3379085ba1071c4732f78a680aa7130482605049&ipo=images",
            imgDesc: "depressed anime pic",
            imgClassName: "",
          },

          img3: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheancestory.com%2Fwp-content%2Fuploads%2F2022%2F08%2FQuandale-Dingle-300x300.jpg&f=1&nofb=1&ipt=742c032a1f76010caa706508507cbdc3093a98e1eb39c90ea0d4bc67bb5e0f1a&ipo=images",
            imgDesc: " quandale dingle",
            imgClassName: "",
          },
          img4: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vippng.com%2Fpng%2Ffull%2F62-625739_laughing-emoji-png-transparent.png&f=1&nofb=1&ipt=339ddd47bce23b7d5354a5925fa1ab46988e1cd9eb5841be4581c2cf2c9c17c7&ipo=images",
            imgDesc: "laughjing",
            imgClassName: "",
          },
        }}
      />
      <Depth
        imageInfo={{
          img1: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2329663.jpg&f=1&nofb=1&ipt=dbd89af7d7ab37e3a7a7bcfb3379085ba1071c4732f78a680aa7130482605049&ipo=images",
            imgDesc: "depressed anime pic",
            imgClassName: "",
          },

          img2: {
            imgLink:
              "https://instagram.fgyd20-1.fna.fbcdn.net/v/t51.2885-15/315459212_910053289985447_4074549065981799396_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fgyd20-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Tj9eyKOlVnIAX9ENvva&edm=ABJHkxYAAAAA&ccb=7-5&ig_cache_key=Mjk2OTk3NDY5MTAwMjg1Mzc0NA%3D%3D.2-ccb7-5&oh=00_AfBVoZyqmHBHNWHFqD_q5r8QR6w25kFBWXJzPcy7-8rZ1Q&oe=63758256&_nc_sid=fa978c",
            imgDesc: "depressed anime pic",
            imgClassName: "",
          },

          img3: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2329663.jpg&f=1&nofb=1&ipt=dbd89af7d7ab37e3a7a7bcfb3379085ba1071c4732f78a680aa7130482605049&ipo=images",
            imgDesc: "depressed anime pic",
            imgClassName: "",
          },
          img4: {
            imgLink:
              "https://www.anime-planet.com/images/characters/yotsuba-koiwai-4597.jpg?t=1267227083",
            imgDesc: "yotsuba",
            imgClassName: "",
          },
        }}
      />
      <Depth
        imageInfo={{
          img1: {
            imgLink:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2329663.jpg&f=1&nofb=1&ipt=dbd89af7d7ab37e3a7a7bcfb3379085ba1071c4732f78a680aa7130482605049&ipo=images",
            imgDesc: "depressed anime pic",
            imgClassName: "",
          },

          img2: {
            imgLink: "https://i.ytimg.com/vi/0PW5ZrZ3JCw/maxresdefault.jpg",
            imgDesc: "[REDACTED]",
            imgClassName: "",
          },
        }}
      />
    </div>
  );
}

export default App;
