import {RENDERS} from "../definition";

const sstk = require("shutterstock-api");

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CustomMusicApi();

export default async function (req, res) {
    const length = req.query.length;

    const body = RENDERS(length);

    await api.createAudioRenders(body)
        .then((data) => {
            console.log(data);
            console.log(data.audio_renders[0]);
            console.log(data.audio_renders[0].id);
            const renderIds = data.audio_renders;
            res.status(200).json({results: renderIds});
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({
                error: {
                    message: 'An error occurred during your request.',
                }
            });
        });
}
