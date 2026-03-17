import { View } from 'react-native';
import React from 'react';
import CheckoutForm from '../../components/shared/form/CheckoutForm';
import ShippedInfo from './ShippedInfo';

export default function Checkout() {
  return (
    <View>
      <ShippedInfo />
      <CheckoutForm />
    </View>
  );
}

