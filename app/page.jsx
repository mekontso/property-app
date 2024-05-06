import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">Welcome Home page</h1>
      <Link href="/properties">Show Properties</Link>
    </div>
  );
}

export default HomePage;
