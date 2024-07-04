import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import LOGO from './assets/logo.png'
import Basket from './assets/basket.png'
import Menu from './assets/menu.png'
import Slider1 from './assets/slider1.jpg'
import Slider2 from './assets/slider2.jpg'
import { list } from 'postcss'
import listItems from './itemList'

function App() {
  const [basketList, setBasketList] = useState([])

  const addBasket = (item) => {
    setBasketList([...basketList, item])
  }

  const delBasket = (item) => {
    const findItemIndex = basketList.findIndex(basketItem => basketItem === item)
    if (findItemIndex === -1) return
    basketList.splice(findItemIndex, 1)
    setBasketList([...basketList])
  }

  const groupBasketList = () => {
    const list = []
    basketList.forEach(item => {
      const finded = list.find(i => i.item === item)
      if(finded) {
        finded.count++
      } else {
        list.push({count : 1, item})
      }
    })
    return list
  }

  const bagCount = basketList.length

  return <div className='bg-stone-200'>

    {/* header-site */}
    <div className='flex items-center gap-2 py-1 px-2'>
      <img className='w-8' src={Menu} alt="" />
      <img className='w-12' src={LOGO} alt="" />
      <span className='font-semibold font-mono'>فراوین</span>
      <div className='flex-1' />
      <div className='relative'>
        <img className='w-12' src={Basket} alt="" />
        {
          bagCount > 0 && <span className={`absolute w-[18px] h-[18px] rounded-full
            bg-red-500 text-white text-center
             text-xs top-0.5 right-0.5`}>{bagCount}</span>
        }
      </div>
    </div>

    {/* divider */}
    <div className='h-[1px] bg-stone-400 mx-2' />

    {/* slider */}
    <div className='p-2'>
      <img className='h-[150px] w-full rounded-lg'
        src={Math.random() > .5 ? Slider1 : Slider2} alt="" />
    </div>

    {/* products */}
    <div className='flex gap-1 mx-2 flex-wrap'>
      {listItems.map(item => {
        const itemCount = basketList.filter(row => row === item).length
        return <div key={item.id} className='border border-slate-300 rounded-2xl overflow-hidden w-52'>
          <div className='h-52'>
            <img className='h-full w-full m-auto' src={item.image} alt="" />
          </div>
          <div className='p-3 bg-white'>
            <h4 className='font-bold leading-6 text-xs'>{item.name}<span className='text-[10px] text-blue-500 mr-1'>(موجودی کالا: {item.mojodi})</span></h4>
            <p className='font-light leading-6 text-xs'>{item.info}</p>
            <p className='text-left line-through text-sm text-gray-400 mt-11'>{item.price.toLocaleString('fa-ir')}</p>
            <p className='text-left font-semibold'>{item.sellPrice.toLocaleString('fa-ir')} تومان</p>
            {
              itemCount === 0 && <button className='w-full bg-slate-500 text-white text-xs mt-3 disabled:bg-slate-300'
                onClick={() => addBasket(item)} disabled={item.mojodi === 0}>خرید کالا</button>
            }
            {
              itemCount !== 0 && <div className='flex gap-1'>
                <button className='bg-red-500 text-white mt-3' onClick={() => delBasket(item)}>-</button>
                <button className='w-full bg-slate-500 text-white text-xs mt-3'
                >{itemCount}</button>
                <button className='bg-green-500 text-white mt-3' onClick={() => {
                  itemCount < item.mojodi && addBasket(item)
                }}>+</button>
              </div>
            }
          </div>
        </div>
      })}
    </div>

    {/* basket dialog */}
    <div className='fixed top-0 right-0 w-full h-full bg-zinc-600 bg-opacity-80'>
      <div className={`bg-slate-100 shadow-slate-700 shadow-md border border-slate-500
         rounded-lg h-96 w-4/5 fixed top-[33vh] left-0 right-0 m-auto p-4`}>
        <h4 className='text-center font-bold font-mono text-lg text-slate-700 border-b-2 pb-1'>
          سبد خرید
        </h4>
        <div>
          {groupBasketList().map(row => (
            <div key={row.item.id} className='flex gap-2 mt-3 bg-white rounded-2xl border'>
              <img className='w-14 rounded-2xl' src={row.item.image} alt="" />
              <div>
                <p className='text-sm py-1'>{row.item.name} <span className='mr-7'>تعداد : {row.count} </span></p>
                <p className='text-sm py-1'>قیمت کل : <span className='font-bold mr-1'>{(row.item.sellPrice * row.count).toLocaleString('fa-ir')} تومان</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
}

export default App
