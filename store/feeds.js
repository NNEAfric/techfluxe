export const state = () => ({
  feeds: [
    {id:'0001', imageUrl: '/img/feeds/f1.png', title: `Foursquare’s Hypertrending helps you spy on the coolest local happenings`, source: 'Recode', date: '30 mins ago', category: 'startups', day: '15', month: '3', year: '2019'},
    {id:'0002', imageUrl: '/img/feeds/f2.jpg', title: `Starling Bank to open second UK office, creating up to 150 tech and support jobs in Southampton`, source: 'TechCrunch', date: '30 mins ago', category: 'apps', day: '15', month: '3', year: '2019'},
    {id:'0003', imageUrl: '/img/feeds/f3.jpg', title: `Hulu and Spotify launch an even more steeply discount`, source: 'Bloomberg', date: '55 mins ago', category: 'devices', day: '15', month: '3', year: '2019'},
    {id:'0004', imageUrl: '/img/feeds/f4.png', title: `Forbit trims the fat to inspire to inspire all tech industries`, source: 'Techmeme', date: '30 mins ago', category: 'people', day: '15', month: '3', year: '2019'},
    {id:'0005', imageUrl: '/img/feeds/f5.jpg', title: `IphoneX launch in PaloAlto amazes customers.`, source: 'TechFluxe', date: '20 mins ago', category: 'africa', day: '15', month: '3', year: '2019'},
    {id:'0006', imageUrl: '/img/feeds/f7.jpg', title: `Pluto is travel insurance aimed at millennials`, source: 'Crunchbase', date: '24 hours ago', category: 'startups', day: '15', month: '3', year: '2019'}
  ]
})

export const getters = {
  feeds(state) {
    return state.feeds
  },
  loadedFeed (state) {
    return (feedId) => {
      return state.feeds.find((feed) => {
        return feed.id === feedId
      })
    }
  },
  startups (state) {
    return state.feeds.filter(feed => {
     return feed.category === "startups"
    })
  },
  apps (state) {
    return state.feeds.filter(feed => {
     return feed.category === "apps"
    })
  },
  devices (state) {
    return state.feeds.filter(feed => {
     return feed.category === "devices"
    })
  },
  people (state) {
    return state.feeds.filter(feed => {
     return feed.category === "people"
    })
  },
  africa (state) {
    return state.feeds.filter(feed => {
     return feed.category === "africa"
    })
  }
}
