import React from 'react';
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='header bg-primary'>
      <Link to="/">
        <h1 className='text-white bg-primary'>OKUNMUŞ PİRİNÇ</h1>
      </Link>
      <div className='link'>
          <Link to="/item-create" className='new-text'>
            YENİ YAZI EKLE
          </Link>
      </div>
    </div>
  )
}
