import React from 'react'
import useFetch from '../Functions/useFetch'
import ItemList from './ItemList';

export default function Index() {
    const {data:yazilar,loading,error} = useFetch("http://localhost:8000/yazilar");
    console.log(yazilar);
    return (
    <div className='container'>
        {loading && <h2 className='text-primary'>Yükleniyor</h2>}
        {error && <h2 className='text-primary'>Veriler Çekilirken Bir Hata Oluştu</h2>}
        {yazilar && <ItemList data={yazilar} />}
    </div>
  )
}
