// import Header from "./Header";

// export default function CommonLayout({ children }) {
//     return (
//         <>

//             <div className="p-3">
//                 <Header />
//                 <div className="mt-3">
//                     {children}
//                 </div>
//             </div>
//         </>
//     )
// }

"use client"

import { Suspense } from "react";
import Header from "./Header";
import PageLoader from "../loader/PageLoader";

export default function CommonLayout({ children }) {
  return (
    <div className="p-3">

      <Header />

      <div className="mt-3">
        <Suspense fallback={<PageLoader />}>
          {children}
        </Suspense>
      </div>

    </div>
  );
}