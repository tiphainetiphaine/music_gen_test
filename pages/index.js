import Head from "next/head";
import {useState} from "react";
import styles from '../styles/Home.module.css';
import Player from "./player";

export default function Home() {
    const [audioLength, setAudioLength] = useState('');
    const [renderIds, setRenderIds] = useState(['']);
    const [downloadLinks, setDownloadLinks] = useState(['']);

    async function getRenders() {
        const res = await fetch(`/api/renders?length=${audioLength}`);
        return res.json();
    }

    async function getDownloads(renderId) {
        const res = await fetch(`/api/render?id=${renderId}`);
        return res.json();
    }

    async function onSubmit(event) {
        event.preventDefault();
        const renders = await getRenders();
        let ids = [];
        let downloads = []
        for (const result of renders.results) {
            ids.push(result.id);
            const data = await getDownloads(result.id);
            downloads.push(data.downloadLink);
        }
        setRenderIds(ids);
        setDownloadLinks(downloads);
    }

    return (
        <div>
            <Head>
                <title>Test Music Gen</title>
            </Head>

            <main className={styles.main}>
                <h3>Enter the audio length, in a format like 6.0</h3>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="prompt"
                        placeholder="Enter the audio length"
                        value={audioLength}
                        onChange={(e) => setAudioLength(e.target.value)}
                    />
                    <input type="submit" value="Generate music"/>
                </form>
                <div className={styles.result}>{renderIds.toString()}</div>
                <div className={styles.result}>{downloadLinks.toString()}</div>
                {downloadLinks[0] !== '' &&
                    <Player url={downloadLinks[0]}/>
                }
                {downloadLinks[0] !== '' &&
                    <Player url={downloadLinks[1]}/>
                }
            </main>
        </div>
    );
}
