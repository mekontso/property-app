"use client";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

function PropertyPage() {
  return <div>PropertyPage</div>;
  // const router = useRouter();
  // const { id } = useParams();
  // const searchParams = useSearchParams();
  // const name = searchParams.get("name");
  // const pathName = usePathname();
  // return (
  //   <div>
  //     <button onClick={() => router.push("/")} className="bg-blue-500 p-2">
  //       Go Home {id} name {name} path {pathName}
  //     </button>
  //   </div>
  // );
}

export default PropertyPage;
