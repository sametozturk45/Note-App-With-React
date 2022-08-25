import React from 'react'
import { useState } from 'react';

export default function ItemCreate() {
        const [baslik,setBaslik] = useState(null);
        const [aciklama,setAciklama] = useState(null);
        const handleSubmit = (e)=>{
          e.preventDefault();
          const item = {baslik,aciklama};
    
            fetch("http://localhost:8000/yazilar/",{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(item)
            }).then(()=>{
                alert("Başarılı");
            })
          }
  return (
    <div className='item-create'>
        <form className='item-create-form' onSubmit={handleSubmit}>
            <label for="baslik">Başlık</label>
            <input type="text" id="baslik" placeholder='Başlık Giriniz...' value={baslik} onChange={e=>{setBaslik(e.target.value)}} required/>
            <label for="aciklama">Açıklama</label>
            <textarea type="text" id="aciklama" placeholder='Başlık Giriniz...' value={aciklama} onChange={e=>{setAciklama(e.target.value)}} required/>
            <button className='bg-primary text-white submit-button'>Ekle</button>
        </form>
    </div>
  )
}
