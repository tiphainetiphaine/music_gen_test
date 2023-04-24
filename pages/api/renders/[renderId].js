const sstk = require('shutterstock-api');
import {Promise as Bluebird} from 'bluebird';
// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);
const api = new sstk.CustomMusicApi();

export default async function getServerSideProps(context) {
    const renderId = context.query.renderId || '';
    console.log(`id has been passed in as: ${renderId}`);

    if (renderId.trim().length === 0) {
        return context.res.status(400).json({
            error: {
                message: "No render id",
            }
        });
    }

    const handleTimeout = () => {
        return context.res.status(500).json({
            error: {
                message: "Timed out",
            }
        });
    }

    let status;
    let downloadLink;
    let timeElapsed = 0;
    let timeout = 60 * 5; //timeout set at 5 minutes
    do {
        // handleNoId();
        await api.fetchRenders([renderId])
            .then(async (data) => {
                console.log(data);
                status = data.audio_renders[0].status;
                if (status === 'FAILED_CREATE') {
                    return context.res.status(500).json({
                        error: {
                            message: "Failed to create render",
                        }
                    });
                }
                await Bluebird.delay(5000);
                timeElapsed = timeElapsed + 5;
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
                // return context.res.status(200).json({downloadLink});
                // return res.redirect(307, '/', {downloadLink});
                context.res.statusCode = 200;
                context.res.end(JSON.stringify(downloadLink));
            })
            .catch((error) => {
                console.error(error);
            });
    }
}