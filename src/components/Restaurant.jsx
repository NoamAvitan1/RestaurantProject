import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import {singleRestaurant } from '../fetuares/testSlice/test';

export default function Restaurant() {
  const { id } = useParams();
  const restaurant = useSelector((state) => state.singleRestaurant);
  const dispatch = useDispatch();
  console.log(id);
  console.log(restaurant);

  useEffect(() => {
    dispatch(singleRestaurant(id));
  }, [id, dispatch]);

  return (
    <div>{restaurant && <h1>{restaurant.name}</h1>}</div>
  );
}