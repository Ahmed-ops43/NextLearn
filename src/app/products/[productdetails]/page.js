export default async function ProductDetails({params, searchParams}){

    
    const {productdetails} = await params;
    const {name} = await searchParams;

    return (
        <div>
            <h1>Product Details page {productdetails} and {name}</h1>
        </div>
    )
}