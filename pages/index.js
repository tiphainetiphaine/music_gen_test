import Head from "next/head";
import {useState} from "react";
import styles from '../styles/Home.module.css';
import Player from "./player";

export default function Home() {
    const [promptInput, setPromptInput] = useState('');
    const [renderIds, setRenderIds] = useState(['mQ8LS7vvybEG1BJkuML0V0wXzqcF','FrsHA7K3TS4fS6ep88tbaTxh9PqL']);
    const [downloadLink, setDownloadLink] = useState('https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2023/04/26/amper-api-7NeQKNS7MnhPx1wDw7nZRrak0fgn/0.mp3');

    async function getRenders() {
        const res = await fetch(`/api/renders`);
        return res.json();
    }

    async function getDownloads(renderId) {
        // const res = await fetch(`/api/renders/${renderId}`);
        console.log('entered getDownloads');
        const res = await fetch(`/api/render?id=${renderId}`);
        return res.json();
    }

    async function onSubmit(event) {
        event.preventDefault();
        const renders = await getRenders();
        setRenderIds(renders.result);
        console.log(renders.result[0]);
        const downloads = await getDownloads(renders.result[0]);
        setDownloadLink(downloads.downloadLink);
    }

    return (
        <div>
            <Head>
                <title>Test Music Gen</title>
            </Head>

            <main className={styles.main}>
                <h3>What style of music</h3>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="prompt"
                        placeholder="Enter a music style"
                        value={promptInput}
                        onChange={(e) => setPromptInput(e.target.value)}
                    />
                    <input type="submit" value="Generate music"/>
                </form>
                <div className={styles.result}>{renderIds.toString()}</div>
                <div className={styles.result}>{downloadLink}</div>
                <Player url={downloadLink}/>
            </main>
        </div>
    );
}
