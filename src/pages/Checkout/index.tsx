import React, { FC, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { resetCart } from '../../store/actions';
import { Store } from '../../models';
import "./styles.css";

import image from '../../assets/images/purchase.png';

const Checkout: FC = () => {
  const history = useHistory();
  const state: any = useSelector<Store>(state => state);
  const dispatch = useDispatch();
  const total = useMemo(() => state.product
    .cart.map((product: any) => product.price).reduce((prev: any, value: any) => prev + value, 0), [state.product.cart]);

  return (
    <div className="card">
      <h2>{state?.user?.name},</h2>
      <p>Sua compora no valor
        <strong>R$ {total}</strong>
        foi finalizada com sucesso
      </p>
      <img src={image} alt="checkout " />
      <button className="new-buy" onClick={() => {
        history.push("/");
        dispatch(resetCart());
      }}>INICIAR NOVA COMPRA</button>
    </div>
  );
}

export default Checkout;
