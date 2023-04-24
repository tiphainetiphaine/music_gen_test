async function getRenders() {
    const res = await fetch(`/api/renders`);
    return res.json();
}

async function getDownloads(renderId) {
    const res = await fetch(`/api/renders/${renderId}`);
    return res.json();
}

async function Downloads({ renderID }) {
    // Wait for the playlists
    const downloads = await getDownloads(renderID);

    return (
        <ul>
            {downloads.map((download) => (
                <li key={download.id}>{download.name}</li>
            ))}
        </ul>
    );
}

export default async function Generate() {
    // Wait for the finished renders
    const renders = await getRenders();

    return (
        <>
            <h1>{renders.result}</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Downloads renderID={renders.result[0]} />
            </Suspense>
        </>
    );
}