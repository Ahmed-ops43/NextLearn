import Link from "next/link";


const dummyjson = async () => {
  try {
    const data = await fetch("https://dummyjson.com/users");
    const jsonformat = await data.json();
    return jsonformat;
  } catch (error) {
    throw new Error(error);
  }
};

export default async function ServerDataFetch() {

    const listOfUsers = await dummyjson();
    
     
  return (
    <div className="flex min-h-screen flex-col gap-3 items-center justify-center p-5">
        <div>
            <h1 className=" font-bold text-2xl">Click on name of user to see the details</h1>
        </div>
      {
        listOfUsers.users.map((user, i) => (
            // <div key={i} className=" border border-white p-5 w-[500px] rounded-xl">
            //     <h1 className=" text-center font-medium">User No {i}</h1>
            // <li><span className=" text-blue-600">FirstName:</span> {user.firstName}</li>
            // <li><span className=" text-blue-600">LastName:</span> {user.lastName}</li>
            // <li><span className=" text-blue-600">Gender:</span> {user.gender}</li>
            // <li><span className=" text-blue-600">Age:</span> {user.age}</li>
            // <li><span className=" text-blue-600">Email:</span> {user.email}</li>
            // <li><span className=" text-blue-600">Phone:</span> {user.phone}</li>
            // <li><span className=" text-blue-600">Ip Address:</span> {user.ip}</li>
            // <li><span className=" text-blue-600">Address:</span> {user.address.address} || {user.address.state} || {user.address.city}</li>
            // <li><span className=" text-blue-600">Country:</span> {user.address.country}</li>
            // </div>
            <div key={i} className=" border border-white p-4 rounded-2xl cursor-pointer">
              <li>
                <Link href={`/server-data-fetch/${user.id}`}>User no: {user.id} {user.firstName}</Link>
              </li>
            </div>
        ))
      }
    </div>
  );
}
