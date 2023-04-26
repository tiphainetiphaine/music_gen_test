const sstk = require('shutterstock-api');
import {Promise as Bluebird} from 'bluebird';
// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);
const api = new sstk.CustomMusicApi();

export default async function (req, res) {
    const renderId = req.query.id;

    if (renderId.trim().length === 0) {
        return res.status(400).json({
            error: {
                message: "No render id",
            }
        });
    }

    const handleTimeout = () => {
        return res.status(500).json({
            error: {
                message: "Timed out",
            }
        });
    }

    let status;
    let downloadLink;
    let timeElapsed = 0;
    let timeout = 60 * 2; //timeout set at 2 minutes
    do {
        await api.fetchRenders([renderId])
            .then(async (data) => {
                console.log(data);
                status = data.audio_renders[0].status;
                if (status === 'FAILED_CREATE') {
                    return res.status(500).json({
                        error: {
                            message: "Failed to create render",
                        }
                    });
                }
                await Bluebird.delay(4000);
                timeElapsed = timeElapsed + 4;
                console.log(`time elapsed is ${timeElapsed}`);
            })
            .catch((error) => {
                console.error(error);
            });
    } while ((status !== 'CREATED') && (timeout > timeElapsed));
    if (timeElapsed === timeout) {
        return handleTimeout();
    } else {
        await api.fetchRenders([renderId])
            .then(async (data) => {
                console.log(data);
                console.log(data.audio_renders[0].files[0].download_url);
                status = data.audio_renders[0].status;
                downloadLink = data.audio_renders[0].files[0].download_url;
                return res.status(200).json({downloadLink});
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
