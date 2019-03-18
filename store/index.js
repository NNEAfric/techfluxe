export const state = () => ({
  items:[
    {
      src: '/img/b1.jpg',
      title: `Foursquare’s Hypertrending helps you spy on the coolest local happenings`
    },
    {
      src: '/img/b2.png',
      title: `Starling Bank to open second UK office, creating up to 150 tech and support jobs in Southampton`
    },
    {
      src: '/img/events/ms.jpg',
      title: `Hulu and Spotify launch an even more steeply discount`
    },
    {
      src: '/img/b4.png',
      title: `Forbit trims the fat to inspire to inspire all tech industries`
    }
  ]
})

export const getters = {
  load(state) {
    return state.items
  }
}