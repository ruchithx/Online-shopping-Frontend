'use client';
import React, { useEffect, useRef, useState } from 'react';
import { CartItem } from '../app/cart/types/cart';
import { useSession } from 'next-auth/react';
import crypto from 'crypto';
import axios from 'axios';
import toast from 'react-hot-toast';

type Order = {
  productId: number;
  quantity: number;
};

interface PayProps {
  orderId: string;
  item: string;
  amount: string;
  currency?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  userId: string;
  order: Order[]; // Specify the exact type if known
}

interface PaymentDetails {
  sandbox: boolean;
  merchant_id: string;
  return_url: string;
  cancel_url: string;
  notify_url: string;
  order_id: string;
  items: string;
  amount: string;
  currency: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  hash: string;
}

interface PayHere {
  onCompleted: () => void;
  onDismissed: () => void;
  onError: (error: string) => void;
  startPayment: (paymentDetails: Record<string, any>) => void;
}

declare global {
  interface Window {
    payhere: PayHere;
  }
}

const Pay = (props: PayProps) => {
  const { data: session } = useSession(); // Correctly typed from next-auth
  console.log(session?.user?.id);
  const userId = session?.user?.id;
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const [items, setItems] = useState<CartItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const orderId = props.orderId;
  const name = props.item;
  const amount = props.amount;
  const merchantId = '1226229';
  const merchantSecret = 'MTMxMjk0NDc1MDI0MTc3Mjk2MDAxMjA5MTYwNTU4Njg4MTM2NTQ3';
  const currency = props.currency || 'LKR';

  // async function generateHash() {
  //   try {
  //     const payload = {
  //       merchantId: merchantId,
  //       orderId: orderId,
  //       amount: amount,
  //       currency: currency,
  //       merchantSecret: merchantSecret,
  //     };
  //     const hash = await axios.post(
  //       'http://localhost:8084/api/v1/payment/generate-hash',
  //       payload,
  //     );
  //     console.log(hash.data);

  //     setHashKey(hash.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   generateHash();
  // }, [orderId, amount, currency]);

  const hashedSecret = crypto
    .createHash('md5')
    .update(merchantSecret)
    .digest('hex')
    .toUpperCase();
  const amountFormatted = parseFloat(amount)
    .toLocaleString('en-us', { minimumFractionDigits: 2 })
    .replaceAll(',', '');

  const hash = crypto
    .createHash('md5')
    .update(merchantId + orderId + amountFormatted + currency + hashedSecret)
    .digest('hex')
    .toUpperCase();

  // console.log(hash);

  // const hashedSecret = md5(merchantSecret).toString().toUpperCase();
  // let amountFormated = parseFloat(amount)
  //   .toLocaleString("en-us", { minimumFractionDigits: 2 })
  //   .replaceAll(",", "");

  // const hash = md5(
  //   merchantId + orderId + amountFormated + currency + hashedSecret
  // )
  //   .toString()
  //   .toUpperCase();

  const payment: PaymentDetails = {
    sandbox: true, // if the account is sandbox or real
    merchant_id: merchantId, // Replace your Merchant ID
    // return_url: 'https://events-now.vercel.app/',
    // cancel_url: 'https://events-now.vercel.app/',
    // notify_url: 'https://events-now.vercel.app/',
    return_url: 'http://localhost:3000/',
    cancel_url: 'http://localhost:3000/',
    notify_url: 'http://localhost:3000/',
    order_id: orderId,
    items: name,
    amount: amount,
    currency: currency,
    first_name: props.first_name,
    last_name: props.last_name,
    email: props.email,
    phone: props.phone,
    address: props.address,
    city: props.city,
    country: props.country,
    hash: hash,
  };

  // console.log(hashKey);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.payhere.lk/lib/payhere.js';
    script.async = true;

    script.onload = () => {
      // PayHere script is loaded, initialize event listeners
      window.payhere.onCompleted = async function onCompleted() {
        const data = {
          userId: props.userId,
          totalPrice: props.amount,
          status: 'completed',
          address: props.address,
          orderItems: props.order,
        };

        const response = await axios.post(
          'http://localhost:8081/api/v1/orders',
          data,
        );

        const order = response.data;
        console.log(order);

        if (order) {
          console.log(order);
          toast.success('order created successfully');
        }

        // Proceed to remove all items from cart
        if (props.userId) {
          try {
            await axios.delete(
              `http://localhost:8082/api/v1/cart/delete/all/${props.userId}`,
            );
            setItems([]); // Clear the cart items locally after successful deletion
            console.log(
              `All items for user ${props.userId} deleted successfully.`,
            );
            toast.success('Cart cleared successfully');
          } catch (err) {
            console.error('Error deleting all items:', err);
            setError('Failed to remove all items from cart.');
            toast.error('Failed to clear the cart');
          }
        }

        // console.log('Payment completed successfully');
      };

      window.payhere.onDismissed = function onDismissed() {
        // error('Payment dismissed');
        console.log('Payment dismissed');
      };

      window.payhere.onError = function onError() {
        // error(e);
        console.log('error');
      };
    };
    scriptRef.current = script;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [props.address, props.amount, props.order, props.userId]);

  function pay() {
    window.payhere.startPayment(payment);
  }

  return (
    <>
      {/* <Head>
        <script src="https://www.payhere.lk/lib/payhere.js" async />
      </Head> */}

      <button
        onClick={pay}
        // className={`w-full text-white font-bold py-2 rounded-lg ${
        //   isAddressSaved
        //     ? 'bg-[#ff686b] hover:bg-[#ff686b]'
        //     : 'bg-gray-400 cursor-not-allowed'
        // }`}
        className="w-full text-white font-bold py-2 rounded-lg bg-[#ff686b] hover:bg-[#ff686b]"
      >
        Proceed to checkout
      </button>

      {/* <Button onClick={generateHash}>click</Button> */}
    </>
  );
};

export default Pay;
