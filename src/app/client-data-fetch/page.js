"use client";

import { useEffect, useState } from "react";

export default function ClientDataFetch() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function FetchData() {
      try {
        setLoading(true);
        const data = await fetch("https://dummyjson.com/users");
        const resdata = await data.json();

        if (resdata?.users) {
          setLoading(false);
          setUsers(resdata.users);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setUsers([]);
      }
    }
    FetchData();
  }, []);

  // const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)

  //   if (error) return <div>failed to load</div>

  if (loading) return <h1 className=" text-[50px] font-bold">Loading ....</h1>;

  return (
    <div className=" flex min-h-screen flex-col items-center justify-center gap-5 p-5 cursor-pointer">
      {users.map((one, i) => (
        <div key={i} className="border border-white p-4 rounded-2xl">
          <li>{one.firstName}</li>
        </div>
      ))}
    </div>
  );
}

// "use client"
// import { useEffect, useState } from "react"

// export default function ClientDataFetch(){

//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const fetchlistofusers = async() => {
//                 try {
//                     setLoading(true);
//                     const data = await fetch("https://dummyjson.com/users");
//                     const jsonformat = await data.json();

//                         if(jsonformat?.users){
//                             setUsers(jsonformat.users);
//                             setLoading(false);

//                         }

//                 } catch (error) {
//                    console.log(error);
//                    setUsers([])
//                    setLoading(false);

//                 }
//     }

//     useEffect(() => {
//         fetchlistofusers();
//     }, []);

//     if(loading) return <h1 className=" font-bold text-[40px]">Loading</h1>

//     return (
//         <div className=" flex min-h-screen flex-col justify-center items-center gap-4 p-5 cursor-pointer">
//             {
//                 users.map((user, i) => (
//                     <div key={i}>
//                     <li>
//                         {user.firstName}
//                     </li>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }
