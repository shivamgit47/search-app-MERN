
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';
import { getads, searchads } from './service/api';

function App() {

  const[ads,setAd]=useState([]);
  console.log(ads);
  useEffect(()=>{
    getAdInfo();
  },[]);

  const getAdInfo = async () => {
    const response = await getads();
    console.log(response.data);
    setAd(response.data);
  }

  const searchHandle = async(e)=>
    {
      let key = e.target.value;
      let result = await searchads(key);
      let adData = result.data;
      console.log(adData);
      if(adData)
      {
        setAd(adData);
      }
      else{
        getAdInfo();
      }
    }

  return (
    <div className="App">
      <h2 className='search-app-heading'>Search Ads App</h2>
      <div>
        <input type="text" className='search-ads-box' placeholder='Search Ads' onChange={searchHandle}/>
      </div>
      <div>
      <Card addata={ads}/>
      </div>      
    </div>
  );
}

export default App;
