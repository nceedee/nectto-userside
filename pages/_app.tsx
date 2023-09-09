// import { Header } from "@/components/Header/Header";
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { Fragment } from "react";

// const App = ({ Component, pageProps }: AppProps) => {
//   return (
//     <div>
//       <Header />
//       <div className="m-auto h-full w-full  max-w-7xl">
//         <Component {...pageProps} />
//       </div>
//     </div>
//   );
// };
// export default App;

import { Header } from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment, useEffect, useState } from "react";
import { TopHeader } from "@/components/Header/MobileHeader/TopHeade/TopHeader";
import { BottomHeader } from "@/components/Header/MobileHeader/BottomHeader/BottomHeader";
const App = ({ Component, pageProps }: AppProps) => {
  // Define a breakpoint for mobile screens (adjust as needed)
  const MOBILE_BREAKPOINT = 991; // For example, consider screens with width <= 768px as mobile

  // Initialize state to track whether it's a mobile screen or not
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen width is less than or equal to the mobile breakpoint
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    // Initial check
    checkIsMobile();

    // Listen for window resize events and update the state accordingly
    window.addEventListener("resize", checkIsMobile);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      {isMobile ? (
        // Mobile layout
        <Fragment>
          <TopHeader /> {/* Show at the top */}
          <Component {...pageProps} />
          <BottomHeader /> {/* Show at the bottom */}
        </Fragment>
      ) : (
        // Desktop layout
        <div>
          <Header />
          <div className="m-auto h-full w-full  max-w-7xl">
            <Component {...pageProps} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
