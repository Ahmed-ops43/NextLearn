export default async function Profile({ params, searchParams }) {
  const { profile } = await params;
  const { name } = await searchParams;
  const { product } = await searchParams;

  return (
    <div>
      <h1>
        Profile Page {profile[1]} and {profile[2]} and {name} and other product
        is {product}
      </h1>
    </div>
  );
}
