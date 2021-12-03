import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import api from '@/services/api';
import {addNewProduct} from '@/store/modules/cart/actions'

import {IProduct} from '@/types'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  const [list, setList] = useState<IProduct[]>([]);

  useEffect( () => {
    api.get('products').then(
      res => setList(res.data)
    ).catch( e => console.error(e) );
  }, [])

  const handleAddCart = (item: IProduct) => {
    dispatch(addNewProduct(item))
  }

  return(
    <div>
      { list?.map( item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
          <h3>{Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL"}).format(item.price)}</h3>
          <button onClick={ () => handleAddCart(item) }> Adicionar ao carrinho </button>
        </div>
      )) }
    </div>
  )
}

export default Home;