
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import Card from './Components/Card/Card';
import { useEffect, useState } from 'react';

function App() {
  const [coffeesInfo, setCoffeesInfo] = useState([])

  const coffeeInfo = useLoaderData()



  useEffect(() => {
    setCoffeesInfo(coffeeInfo)
  }, [coffeeInfo])


  return (
    <div className='text-center'>
      <Link to={'/add_coffee'}><button className='btn btn-primary'>Add Coffee</button></Link>
      <div className='grid grid-cols-2 gap-6 max-w-[1320px] mx-auto'>
        {
          coffeesInfo?.map(coffee => <Card
            setCoffeesInfo={setCoffeesInfo}
            coffeesInfo={coffeesInfo}
            coffee={coffee}
            key={coffee._id}
          ></Card>)
        }
      </div>
    </div>
  )
}

export default App
