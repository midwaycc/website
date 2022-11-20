export default {
  widgets: [
    {
      name: 'gatsby',
      options: { sites: [{ siteUrl: 'https://midwaycc-preview.fly.dev' }] },
      layout: {
        width: 'medium',
        height: 'small'
      }
    },
    {
      name: 'netlify-deployment',
      options: {
        site: {
          title: 'Production',
          name: 'midwaycc',
          id: 'c096d1f2-899d-4c18-ad5b-211790e57ad8',
          buildHookId: '5eaf63e5fe9df1ed9f68ee6c'
        }
      },
      layout: {
        width: 'large',
        height: 'full'
      }
    },
    {
      name: 'documentation',
      layout: {
        width: 'large',
        height: 'full'
      }
    }
  ]
}
