import itemImage1 from './assets/item1.jfif'
import itemImage2 from './assets/item2.jfif'
import itemImage3 from './assets/item3.jfif'
import itemImage4 from './assets/item4.jfif'
import itemImage5 from './assets/item5.jfif'
import itemImage6 from './assets/item6.jfif'
import itemImage7 from './assets/item7.jfif'

const imageItems = [
    itemImage1,
    itemImage2,
    itemImage3,
    itemImage4,
    itemImage5,
    itemImage6,
    itemImage7
  ]
  
  // [0, 1] -> 0.903485
  const listItems = Array(Math.round(Math.random() * 1000)).fill(null).map((item, index) => {
    const price = Math.round(Math.random() * 1000000) + 100000
    return {
      id: index,
      name: 'محصول شماره ' + (index + 1),
      info: 'توضیحات محصول مدل - ' + Math.round(Math.random() * 1000),
      price: price,
      sellPrice: Math.round(price / 3) /*discount 30%*/,
      mojodi: Math.round(Math.random() * 100),
      image: imageItems[Math.floor(Math.random() * imageItems.length)]
    }
  })

  export default listItems