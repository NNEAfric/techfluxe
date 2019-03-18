export const state = () => ({
  items:[
    {
      src: 'https://techfluxe.netlify.com/img/b1.jpg'
    },
    {
      src: 'https://techfluxe.netlify.com/img/b2.png'
    },
    {
      src: 'https://techfluxe.netlify.com//img/events/ms.jpg'
    },
    {
      src: 'https://techfluxe.netlify.com/img/b4.png'
    }
  ]
})

export const getters = {
  load(state) {
    return state.items
  }
}