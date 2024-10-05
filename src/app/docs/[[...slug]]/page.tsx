export default function Docs({ params }: {
    params: {
        slug: string[];
    }
}) {
    if (params.slug?.length === 2) {
        return <div>Docs {params.slug.join('/')}</div>
    } else if (params.slug?.length === 1) {
        return <div>Docs {params.slug[0]}</div>
    }
    return <div>{params.slug.toString()}</div>
}