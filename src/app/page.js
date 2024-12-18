'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const Router = useRouter();

  function NavigateProduct() {
    Router.push('/products/13/13/31/1313?product1=Ahmed&product2=Burhan');
  };

  function NavigateAccount(){
    Router.push('account');
  };

  function GoForward(){
    Router.forward();
  };

  function GoBack(){
    Router.back();
  };

  return (
    <div className="flex cursor-pointer items-center flex-col justify-items-center min-h-screen p-8 pb-10 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Next js Course</h1>
        <Link href={'products'} className=" cursor-pointer">Using Link to navigate to Products page</Link>
        <h2 onClick={NavigateProduct} >Navigate to products page using useRouter</h2>
        <h2 onClick={NavigateAccount} >Navigate to account page using useRouter and it will redirect to profilepage </h2>
        <Link href={'/products/123?name=ahmed'}><h2>Navigate to products using dynamic route</h2></Link>
        <h2 onClick={GoForward}>Go to forward page</h2>
        <h2 onClick={GoBack}>Go to Back page (it will not work because i have used it on main page )</h2>
        <Link className=" bg-red-600 p-2 rounded-xl" href={'/server-data-fetch'}>Move to Server Data Fetch Section. It will request list of users from api and api will send the response</Link>
    </div>
  );
}
