const fetchEachUser = async (newid) => {
  try {
    const data = await fetch(`https://dummyjson.com/users/${newid}`);
    const resdata = await data.json();
    return resdata;
  } catch (error) {
    throw new Error(error);
  }
};

export default async function FullDetail({ params }) {
  const { fulldetail } = await params;

  const eachuser = await fetchEachUser(fulldetail);
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className=" border border-white p-5 rounded-2xl">
        <li>
          <span className=" text-blue-600">FirstName:</span>{" "}
          {eachuser.firstName}
        </li>
        <li>
          <span className=" text-blue-600">LastName:</span> {eachuser.lastName}
        </li>
        <li>
          <span className=" text-blue-600">Gender:</span> {eachuser.gender}
        </li>
        <li>
          <span className=" text-blue-600">Age:</span> {eachuser.age}
        </li>
        <li>
          <span className=" text-blue-600">Email:</span> {eachuser.email}
        </li>
        <li>
          <span className=" text-blue-600">Phone:</span> {eachuser.phone}
        </li>
        <li>
          <span className=" text-blue-600">Ip Address:</span> {eachuser.ip}
        </li>
        <li>
          <span className=" text-blue-600">Address:</span>{" "}
          {eachuser.address.address} || {eachuser.address.state} ||{" "}
          {eachuser.address.city}
        </li>
        <li>
          <span className=" text-blue-600">Country:</span>{" "}
          {eachuser.address.country}
        </li>
      </div>
    </div>
  );
}
