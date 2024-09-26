// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/swiper-bundle.css";
// import three from "../../../public/images/blog/three1.png";
// import four from "../../../public/images/blog/four.png";
// import five from "../../../public/images/blog/five.png";

// const HomeTwoBlogLight = () => {
//   return (
//     <section className="section blog blog-two light blog-two-light">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="section__header--secondary">
//               <div className="row gaper align-items-center">
//                 <div className="col-12 col-lg-8">
//                   <div className="section__header text-center text-lg-start mb-0">
//                     <span className="sub-title">
//                       news & Blog
//                       <i className="fa-solid fa-arrow-right"></i>
//                     </span>
//                     <h2 className="title title-anim">
//                       what&apos;s new in blog
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="col-12 col-lg-4">
//                   <div className="slide-group justify-content-center justify-content-lg-end">
//                     <button
//                       aria-label="previous item"
//                       className="slide-btn prev-blog"
//                     >
//                       <i className="fa-light fa-angle-left"></i>
//                     </button>
//                     <button
//                       aria-label="next item"
//                       className="slide-btn next-blog"
//                     >
//                       <i className="fa-light fa-angle-right"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="blog-two__slider-w">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           slidesPerGroup={1}
//           speed={800}
//           loop={true}
//           roundLengths={false}
//           centeredSlides={true}
//           centeredSlidesBounds={false}
//           modules={[Autoplay, Navigation]}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           navigation={{
//             nextEl: ".next-blog",
//             prevEl: ".prev-blog",
//           }}
//           breakpoints={{
//             992: {
//               slidesPerView: 3,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//           }}
//           className="blog-two__slider"
//         >
//           <SwiperSlide>
//             <div className="blog-two__slider-single topy-tilt">
//               <div className="blog__single-thumb">
//                 <Link href="blog-single">
//                   <Image src={three} alt="Image" />
//                 </Link>
//               </div>
//               <div className="blog__single-content">
//                 <h4>
//                   <Link href="blog-single">
//                     A Simple Social Media Marketing Checklist
//                   </Link>
//                 </h4>
//                 <div className="blog__single-meta">
//                   <Link href="blog" className="sub-title">
//                     creative
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </Link>
//                   <p>December 02, 2021</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="blog-two__slider-single topy-tilt">
//               <div className="blog__single-thumb">
//                 <Link href="blog-single">
//                   <Image src={four} alt="Image" />
//                 </Link>
//               </div>
//               <div className="blog__single-content">
//                 <h4>
//                   <Link href="blog-single">
//                     Transforming Challenges into Opportunities
//                   </Link>
//                 </h4>
//                 <div className="blog__single-meta">
//                   <Link href="blog" className="sub-title">
//                     creative
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </Link>
//                   <p>July 18, 2022</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="blog-two__slider-single topy-tilt">
//               <div className="blog__single-thumb">
//                 <Link href="blog-single">
//                   <Image src={five} alt="Image" />
//                 </Link>
//               </div>
//               <div className="blog__single-content">
//                 <h4>
//                   <Link href="blog-single">
//                     A Simple Social Media Marketing Checklist
//                   </Link>
//                 </h4>
//                 <div className="blog__single-meta">
//                   <Link href="blog" className="sub-title">
//                     creative
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </Link>
//                   <p>June 03, 2023</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="blog-two__slider-single topy-tilt">
//               <div className="blog__single-thumb">
//                 <Link href="blog-single">
//                   <Image src={three} alt="Image" />
//                 </Link>
//               </div>
//               <div className="blog__single-content">
//                 <h4>
//                   <Link href="blog-single">
//                     A Simple Social Media Marketing Checklist
//                   </Link>
//                 </h4>
//                 <div className="blog__single-meta">
//                   <Link href="blog" className="sub-title">
//                     creative
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </Link>
//                   <p>MARCH 23, 2023</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="blog-two__slider-single topy-tilt">
//               <div className="blog__single-thumb">
//                 <Link href="blog-single">
//                   <Image src={four} alt="Image" />
//                 </Link>
//               </div>
//               <div className="blog__single-content">
//                 <h4>
//                   <Link href="blog-single">
//                     Transforming Challenges into Opportunities
//                   </Link>
//                 </h4>
//                 <div className="blog__single-meta">
//                   <Link href="blog" className="sub-title">
//                     creative
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </Link>
//                   <p>MARCH 23, 2023</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="blog-two__slider-single topy-tilt">
//               <div className="blog__single-thumb">
//                 <Link href="blog-single">
//                   <Image src={five} alt="Image" />
//                 </Link>
//               </div>
//               <div className="blog__single-content">
//                 <h4>
//                   <Link href="blog-single">
//                     A Simple Social Media Marketing Checklist
//                   </Link>
//                 </h4>
//                 <div className="blog__single-meta">
//                   <Link href="blog" className="sub-title">
//                     creative
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </Link>
//                   <p>MARCH 23, 2023</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="blog-two__slider-single topy-tilt">
//               <div className="blog__single-thumb">
//                 <Link href="blog-single">
//                   <Image src={three} alt="Image" />
//                 </Link>
//               </div>
//               <div className="blog__single-content">
//                 <h4>
//                   <Link href="blog-single">
//                     A Simple Social Media Marketing Checklist
//                   </Link>
//                 </h4>
//                 <div className="blog__single-meta">
//                   <Link href="blog" className="sub-title">
//                     creative
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </Link>
//                   <p>MARCH 23, 2023</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="blog-two__slider-single topy-tilt">
//               <div className="blog__single-thumb">
//                 <Link href="blog-single">
//                   <Image src={four} alt="Image" />
//                 </Link>
//               </div>
//               <div className="blog__single-content">
//                 <h4>
//                   <Link href="blog-single">
//                     Transforming Challenges into Opportunities
//                   </Link>
//                 </h4>
//                 <div className="blog__single-meta">
//                   <Link href="blog" className="sub-title">
//                     creative
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </Link>
//                   <p>MARCH 23, 2023</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="blog-two__slider-single topy-tilt">
//               <div className="blog__single-thumb">
//                 <Link href="blog-single">
//                   <Image src={five} alt="Image" />
//                 </Link>
//               </div>
//               <div className="blog__single-content">
//                 <h4>
//                   <Link href="blog-single">
//                     A Simple Social Media Marketing Checklist
//                   </Link>
//                 </h4>
//                 <div className="blog__single-meta">
//                   <Link href="blog" className="sub-title">
//                     creative
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </Link>
//                   <p>MARCH 23, 2023</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default HomeTwoBlogLight;
