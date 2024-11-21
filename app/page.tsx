'use client';
import React from 'react';
import Navbar from '@/public/components/NavBar';
import { Button } from '@/components/ui/button';
import Pay from '@/components/Pay';

export default function Home() {
  const paymentDetails = {
    event_id: '1',
    event_name: 'Event Name',
    event_date: '2022-12-12',
    event_time: '12:00',
    event_location: 'Event Location',
    event_description: 'Event Description',
    event_image: 'https://via.placeholder.com/150',
    items: 'Event Name',
    oder_id: '1',
    fullAmount: '1000',
    currency: 'LKR',
    first_name: 'First Name',
    last_name: 'Last Name',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
  };

  const eventId = {
    event_id: paymentDetails.event_id,
    event_name: paymentDetails.event_name,
    event_date: paymentDetails.event_date,
    event_time: paymentDetails.event_time,
    event_location: paymentDetails.event_location,
    event_description: paymentDetails.event_description,
    event_image: paymentDetails.event_image,
  };

  return (
    <div>
      <Navbar />
      {/* <Button> */}
      <Pay
        eventDetails={eventId}
        item={paymentDetails?.items}
        orderId={paymentDetails?.oder_id}
        amount={paymentDetails.fullAmount}
        currency={paymentDetails?.currency}
        first_name={paymentDetails?.first_name}
        last_name={paymentDetails?.last_name}
        email={paymentDetails?.email}
        phone={paymentDetails?.phone}
        address={paymentDetails?.address}
        city={paymentDetails?.city}
        country={paymentDetails?.country}
      />
      {/* </Button> */}
    </div>
  );
}
