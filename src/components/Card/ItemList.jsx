import React from 'react'
import Item from './item'

export default function ItemList() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 bg-terciary">
        <div className="row">
            <div className="col-md-4">
                <Item/>    
            </div>
            <div className="col-md-4">
                <Item/>    
            </div>
            <div className="col-md-4">
                <Item/>    
            </div>
        </div>
    </div>
)
}

