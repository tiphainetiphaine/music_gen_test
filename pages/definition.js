export const RENDERS = (renderTime) => {
    return {
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
                            "time": parseInt(renderTime)
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
                            "time": parseInt(renderTime)
                        }
                    ]
                }
            }
        ]
    }
};