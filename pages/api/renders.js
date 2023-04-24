const sstk = require("shutterstock-api");

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CustomMusicApi();
const generateUid = (max, min) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min;
}

const body = {
    "audio_renders": [
        {
            "preset": "MASTER_MP3",
            "filename": "custom_audio_1",
            "timeline": {
                "spans": [
                    {
                        "id": 111,
                        "span_type": "metered",
                        "time": 0,
                        "tempo": 76,
                        "regions": [
                            {
                                "id": 222,
                                "region": "music",
                                "descriptor": "cinematic_minimal_tense",
                                "beat": 0
                            }
                        ]
                    },
                    {
                        "span_type": "unmetered",
                        "time": 15.0
                    }
                ]
            }
        },
        {
            "preset": "MASTER_MP3",
            "filename": "custom_audio_2",
            "timeline": {
                "spans": [
                    {
                        "id": 111,
                        "span_type": "metered",
                        "time": 0,
                        "tempo": 76,
                        "regions": [
                            {
                                "id": 222,
                                "region": "music",
                                "descriptor": "documentary_underscore_heartfelt",
                                "beat": 0
                            }
                        ]
                    },
                    {
                        "span_type": "unmetered",
                        "time": 15.0
                    }
                ]
            }
        }
    ]
};

export default async function (req, res) {
    await api.createAudioRenders(body)
        .then((data) => {
            console.log(data);
            console.log(data.audio_renders[0]);
            console.log(data.audio_renders[0].id);
            const renderId1 = data.audio_renders[0].id;
            const renderId2 = data.audio_renders[1].id;
            res.status(200).json({result: [renderId1, renderId2]});
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
