"use client";
import Layout from "../../../components/Layout/layout";
import { usePathname, useRouter, useParams } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const path = params.syllabus;

  if (path && path.length > 3) {
    router.push("/not-found");
    return null; // Return null instead of false to avoid rendering issues
  }

  const design = (
    <>
      <Layout>
        <h1>{pathname}</h1>
        <h1>Syllabus Details</h1>
      </Layout>
    </>
  );

  return design;
};

export default Page;
