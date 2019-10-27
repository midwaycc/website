export default {
  type: 'object',
  name: 'videoEmbed',
  title: 'YouTube Embed',
  fields: [
    {
      type: 'string',
      name: 'videoId',
      title: 'Video ID',
      description:
        'The video ID appears in the URL, usually at the end (v=<video_id>).'
    }
  ]
}
