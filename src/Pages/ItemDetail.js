import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Functions/useFetch';

export default function ItemDetail() {
    const {id} = useParams();
    const {data:yazi,loading,error} = useFetch("http://localhost:8000/yazilar/"+id);
    console.log(yazi);
  return (
    <div>
        {loading && <h2 className='text-primary'>Yükleniyor</h2>}
        {error && <h2 className='text-primary'>Veriler Çekilirken Bir Hata Oluştu</h2>}
        {yazi && (
            <div className='container'>
                <div className='yazi-container bg-white' key={yazi.id}>
                    <h3 className='yazi-baslik'>{yazi.baslik}</h3>
                    <p className='yazi-aciklama full-aciklama'>{yazi.aciklama}</p>
                </div>
            </div>
        )}
    </div>
  )
}
