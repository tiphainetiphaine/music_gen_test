const response = {
    audio_renders: [
        {
            id: 'fKRDsYE7UFPRlgFhdGXg31EntO4w',
            timeline: {
                spans: [
                    {
                        span_type: 'metered',
                        time: 0,
                        id: 111,
                        tempo: 76,
                        regions: [
                            {
                                id: 222,
                                region: 'music',
                                descriptor: 'cinematic_minimal_tense',
                                beat: 0,
                                end_type: {beat: 34, event: 'ending', type: 'ringout'},
                                key: {
                                    tonic_note: 'c',
                                    tonic_accidental: 'natural',
                                    tonic_quality: 'natural_minor'
                                }
                            }
                        ],
                        instrument_groups: [
                            {
                                instrument_group: 'planetary_wind',
                                statuses: [
                                    {beat: 0, status: 'active'},
                                    {beat: 38, status: 'inactive'}
                                ]
                            },
                            {
                                instrument_group: 'vortex_swirl_synth_pad',
                                statuses: [
                                    {beat: 0, status: 'active'},
                                    {beat: 38, status: 'inactive'}
                                ]
                            },
                            {
                                instrument_group: 'cathedral_hotrods_tick',
                                statuses: [
                                    {beat: 0, status: 'active'},
                                    {beat: 38, status: 'inactive'}
                                ]
                            },
                            {
                                instrument_group: 'pop_grand_piano',
                                statuses: [
                                    {beat: 0, status: 'active'},
                                    {beat: 38, status: 'inactive'}
                                ]
                            },
                            {
                                instrument_group: 'synth_lofi_glass',
                                statuses: [
                                    {beat: 0, status: 'active'},
                                    {beat: 38, status: 'inactive'}
                                ]
                            },
                            {
                                instrument_group: 'cathedral_classic_kick_soft',
                                statuses: [
                                    {beat: 0, status: 'active'},
                                    {beat: 38, status: 'inactive'}
                                ]
                            },
                            {
                                instrument_group: 'low_gong',
                                statuses: [
                                    {beat: 0, status: 'active'},
                                    {beat: 38, status: 'inactive'}
                                ]
                            },
                            {
                                instrument_group: 'cathedral_sticky_tick',
                                statuses: [
                                    {beat: 0, status: 'active'},
                                    {beat: 38, status: 'inactive'}
                                ]
                            }
                        ]
                    },
                    {span_type: 'unmetered', time: 30}
                ]
            },
            status: 'CREATED',
            preset: 'MASTER_MP3',
            progress_percent: 100,
            files: [
                {
                    filename: 'my_custom_audio',
                    bits_sample: 16,
                    content_type: 'audio/mp3',
                    download_url: 'https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2023/04/26/amper-api-fKRDsYE7UFPRlgFhdGXg31EntO4w/0.mp3',
                    frequency_hz: 44100,
                    kbits_second: 192,
                    size_bytes: 721673,
                    tracks: ['master']
                },
                {
                    filename: 'render.json',
                    bits_sample: 0,
                    content_type: 'application/vnd.amper.waveform+json',
                    download_url: 'https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2023/04/26/amper-api-fKRDsYE7UFPRlgFhdGXg31EntO4w/1.json',
                    frequency_hz: 42,
                    kbits_second: 0,
                    size_bytes: 7444,
                    tracks: ['master']
                }
            ],
            created_date: '2023-04-26T09:32:16.000Z',
            updated_date: '2023-04-26T09:32:28.000Z'
        }
    ]
}