import React from "react";
import "@/assets/styles/globals.css";
// metadata
export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find the perfect rental property for you",
  keywords: "rental, find rentals, find properties",
};
const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
