/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_BUkd0ZXAj6m0q0jMyRgBxNns00PPtgvjjr');

export const bookTour = async ntourId =>{
  try{
       // 1) Get checkout session from API
  const session = await axios(`http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
  );

  console.log(session);


  // 2) Create checkout from + charge credit card
    await strip.redirectToCheckout({
      sessionId: session.data.session.Id
    })

  }catch(err){
    console.log(err);
    showAlert('error',err);

  }
 
}