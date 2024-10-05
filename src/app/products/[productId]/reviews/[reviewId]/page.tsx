import { notFound } from "next/navigation";

export default function Review({ params }:
    {
        params: {
            productId: string,
            reviewId: string
        }
    }) {
    if (parseInt(params.reviewId) > 100) {
        return notFound();
    }
    return <h1>{params.reviewId}. review of product {params.productId}</h1>
}