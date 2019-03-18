export const state = () => ({
  feeds: [
    {id:'sdghkssg653g36s4gdh55', imageUrl: 'https://techfluxe.netlify.com/img/feeds/f1.png', title: `Foursquare’s Hypertrending helps you spy on the coolest local happenings`, source: 'Recode', date: '30 mins ago'},
    {id:'sdghkssg653g36s4gsfer4', imageUrl: 'https://techfluxe.netlify.com/img/feeds/f2.jpg', title: `Starling Bank to open second UK office, creating up to 150 tech and support jobs in Southampton`, source: 'TechCrunch', date: '30 mins ago'},
    {id:'sdghkssg653g36s4g444ggew', imageUrl: 'https://techfluxe.netlify.com/img/feeds/f3.jpg', title: `Hulu and Spotify launch an even more steeply discount`, source: 'Bloomberg', date: '55 mins ago'},
    {id:'sdghkssg653g36s4gegg44', imageUrl: 'https://techfluxe.netlify.com/img/feeds/f4.png', title: `Forbit trims the fat to inspire to inspire all tech industries`, source: 'Techmeme', date: '30 mins ago'},
    {id:'sdghkssg653g36s4gge4579', imageUrl: 'https://techfluxe.netlify.com/img/feeds/f5.jpg', title: `IphoneX launch in PaloAlto amazes customers.`, source: 'TechFluxe', date: '20 mins ago'},
    {id:'sdghkssg653g36s4gwter768', imageUrl: 'https://techfluxe.netlify.com/img/feeds/f7.jpg', title: `Pluto is travel insurance aimed at millennials`, source: 'Crunchbase', date: '24 hours ago'}
  ]
})

export const getters = {
  feeds(state) {
    return state.feeds
  }
}
