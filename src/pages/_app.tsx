import React, { Suspense } from "react";
import type { AppProps } from "next/app";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 6
import "../../public/icons/font-awesome/css/all.css";

import "../../public/images/award-thumb.jpeg";

// custom icons
import "../../public/images/cta-two-bg.png";

// main scss
import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...pageProps} />
    </Suspense>
  );
}
