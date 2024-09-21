"use client";
import Layout from "../../component/Layout/layout";
import Image from "next/image";
import useSWR from "swr";
import axios from "axios";
import Loader from "../../component/Loader/loader";
const Page = () => {

  const getData = async(api) => {
    try{
       const response = await axios({
        method : "get",
        url : api
       }); 
       return response.data;
    }
    catch(error)
    {
      throw error.response;
    }

  }
  // useSWR is use to fatch data from client component
  const {data,error} = useSWR("https://jsonplaceholder.typicode.com/posts",getData);
  if(!data && !error){
    return   <Loader />      //<h1>Loading....</h1>can write this
  }
  if(error){
    return <h1>Error Occurs</h1>
  }
  // const fetcher = (url) => axios.get(url).then((res) => res.data)
  const design = (
    <>
       <Layout>
          <h1>My First App</h1>
          <Image src="/beach.jpg" alt="This is beach with hills " width={1300} height={200}/>
       </Layout>
    </> 
  );
  return design; 

}
export default Page