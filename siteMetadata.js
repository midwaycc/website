module.exports = {
  church: {
    address: ['3365 Francis Road', 'Alpharetta, Georgia 30004'],
    googleMapsEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.1631574932317!2d-84.25972768427316!3d34.142167680581515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59d9a9a74d32b%3A0xdb8ea9e1a4101e6f!2sMidway+Community+Church!5e0!3m2!1sen!2sus!4v1554078488436!5m2!1sen!2sus'
  },
  text: {
    title: 'Welcome!',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  navigation: [
    { text: 'New Here?', link: '/new' },
    { text: 'About', link: '/about' },
    { text: 'Events', link: '/events' },
    {
      text: 'Ministries',
      link: '/ministries',
      items: [
        { text: 'One', link: '/one' },
        { text: 'Two', link: '/two' },
        { text: 'Three', link: '/three' }
      ]
    },
    { text: 'Giving', link: '/giving' }
  ]
}
