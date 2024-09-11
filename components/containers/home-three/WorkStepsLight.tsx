// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import YoutubeEmbed from "../../../components/youtube/YoutubeEmbed";
// import videoframe from "../../../public/images/video-frame.png";

// const WorkStepsLight = () => {
//   const [hover, setHover] = useState(1);
//   const [videoActive, setVideoActive] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       if (typeof window !== "undefined") {
//         const deviceWidth = window.innerWidth;

//         if (deviceWidth > 576) {
//           const workImgItems = document.querySelectorAll<HTMLElement>(
//             ".work-steps__single"
//           );

//           workImgItems.forEach((item) => {
//             const contentBox = item.getBoundingClientRect();
//             const dx = event.clientX - contentBox.x;
//             if (item.children[2] instanceof HTMLElement) {
//               item.children[2].style.transform = `translateX(${dx}px)`;
//             }
//           });
//         }
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       <section className="section work-steps fade-wrapper work-steps-light light">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="section__header--secondary">
//                 <div className="row gaper align-items-center">
//                   <div className="col-12 col-lg-5 col-xxl-5">
//                     <div className="section__header text-center text-lg-start mb-0">
//                       <span className="sub-title">
//                         working steps
//                         <i className="fa-solid fa-arrow-right"></i>
//                       </span>
//                       <h2 className="title title-anim">Our Work Process</h2>
//                     </div>
//                   </div>
//                   <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
//                     <div className="text-center text-lg-start">
//                       <p>
//                         Bring to the table win-win survival strategies to ensure
//                         proactive domination. At the end of the day, going
//                         forward, a new normal that has evolved from generation
//                         on the runway heading towards
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-12 col-sm-6 col-xl-3">
//               <div
//                 className={
//                   "work-steps__single fade-top" +
//                   (hover === 0 ? " work-steps__single-active" : " ")
//                 }
//                 onMouseEnter={() => setHover(0)}
//               >
//                 <span>
//                   25
//                   <br />%
//                 </span>
//                 <h5>Discover & Strategy.</h5>
//                 <div
//                   className="work-thumb-hover d-none d-md-block"
//                   style={{
//                     backgroundImage: "url('/images/work/thumb-one.png')",
//                   }}
//                 ></div>
//               </div>
//             </div>
//             <div className="col-12 col-sm-6 col-xl-3">
//               <div
//                 className={
//                   "work-steps__single fade-top work-two" +
//                   (hover === 1 ? " work-steps__single-active" : " ")
//                 }
//                 onMouseEnter={() => setHover(1)}
//               >
//                 <span>
//                   50
//                   <br />%
//                 </span>
//                 <h5>Wireframes & User-flows</h5>
//                 <div
//                   className="work-thumb-hover d-none d-md-block"
//                   style={{
//                     backgroundImage: "url('/images/work/thumb-one.png')",
//                   }}
//                 ></div>
//               </div>
//             </div>
//             <div className="col-12 col-sm-6 col-xl-3">
//               <div
//                 className={
//                   "work-steps__single fade-top work-three" +
//                   (hover === 2 ? " work-steps__single-active" : " ")
//                 }
//                 onMouseEnter={() => setHover(2)}
//               >
//                 <span>
//                   75
//                   <br />%
//                 </span>
//                 <h5>Hi-Fidelity design</h5>
//                 <div
//                   className="work-thumb-hover d-none d-md-block"
//                   style={{
//                     backgroundImage: "url('/images/work/thumb-one.png')",
//                   }}
//                 ></div>
//               </div>
//             </div>
//             <div className="col-12 col-sm-6 col-xl-3">
//               <div
//                 className={
//                   "work-steps__single fade-top work-four" +
//                   (hover === 3 ? " work-steps__single-active" : " ")
//                 }
//                 onMouseEnter={() => setHover(3)}
//               >
//                 <span>
//                   100
//                   <br />%
//                 </span>
//                 <h5>Development Phase</h5>
//                 <div
//                   className="work-thumb-hover d-none d-md-block"
//                   style={{
//                     backgroundImage: "url('/images/work/thumb-one.png')",
//                   }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button
//           className="video-frame video-btn d-none d-md-flex"
//           onClick={() => setVideoActive(true)}
//         >
//           <Image src={videoframe} alt="Image" />
//           <i className="fa-sharp fa-solid fa-play"></i>
//         </button>
//       </section>
//       <div
//         className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
//         onClick={() => setVideoActive(false)}
//       >
//         <div className="video-inner">
//           <div
//             className="video-container"
//             onClick={(e: any) => e.stopPropagation()}
//           >
//             {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
//             <button
//               aria-label="close video popup"
//               className="close-video-popup"
//               onClick={() => setVideoActive(false)}
//             >
//               <i className="fa-solid fa-xmark"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WorkStepsLight;
