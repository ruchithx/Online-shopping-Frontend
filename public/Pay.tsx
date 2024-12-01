// 'use client';
// import React, { useEffect, useRef } from 'react';

// import crypto from 'crypto';
// // import Head from 'next/head';
// // // import axios from 'axios';
// // import Script from 'next/script';
// // import Image from 'next/image';
// // import axios from 'axios';
// // import { Button } from './ui/button';
// // import { generateQRCodeImage } from '@/util/helper';
// // import { error, success } from '@/util/Toastify';

// declare global {
//   interface Window {
//     payhere: any;
//   }
// }

// const Pay = (props: any) => {
//   const scriptRef = useRef<any>();
//   // const [hashKey, setHashKey] = React.useState('');
//   // const key = 'updatable';
//   const orderId = props.orderId;
//   const name = props.item;
//   const amount = props.amount;
//   const merchantId = '1226229';
//   const merchantSecret = 'MTMxMjk0NDc1MDI0MTc3Mjk2MDAxMjA5MTYwNTU4Njg4MTM2NTQ3';
//   const currency = props.currency || 'LKR';

//   // async function generateHash() {
//   //   try {
//   //     const payload = {
//   //       merchantId: merchantId,
//   //       orderId: orderId,
//   //       amount: amount,
//   //       currency: currency,
//   //       merchantSecret: merchantSecret,
//   //     };
//   //     const hash = await axios.post(
//   //       'http://localhost:8084/api/v1/payment/generate-hash',
//   //       payload,
//   //     );
//   //     console.log(hash.data);

//   //     setHashKey(hash.data);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }

//   // useEffect(() => {
//   //   generateHash();
//   // }, [orderId, amount, currency]);

//   const hashedSecret = crypto
//     .createHash('md5')
//     .update(merchantSecret)
//     .digest('hex')
//     .toUpperCase();
//   let amountFormatted = parseFloat(amount)
//     .toLocaleString('en-us', { minimumFractionDigits: 2 })
//     .replaceAll(',', '');

//   const hash = crypto
//     .createHash('md5')
//     .update(merchantId + orderId + amountFormatted + currency + hashedSecret)
//     .digest('hex')
//     .toUpperCase();

//   // console.log(hash);

//   // const hashedSecret = md5(merchantSecret).toString().toUpperCase();
//   // let amountFormated = parseFloat(amount)
//   //   .toLocaleString("en-us", { minimumFractionDigits: 2 })
//   //   .replaceAll(",", "");

//   // const hash = md5(
//   //   merchantId + orderId + amountFormated + currency + hashedSecret
//   // )
//   //   .toString()
//   //   .toUpperCase();

//   var payment = {
//     sandbox: true, // if the account is sandbox or real
//     merchant_id: merchantId, // Replace your Merchant ID
//     // return_url: 'https://events-now.vercel.app/',
//     // cancel_url: 'https://events-now.vercel.app/',
//     // notify_url: 'https://events-now.vercel.app/',
//     return_url: 'http://localhost:3000/',
//     cancel_url: 'http://localhost:3000/',
//     notify_url: 'http://localhost:3000/',
//     order_id: orderId,
//     items: name,
//     amount: amount,
//     currency: currency,
//     first_name: props.first_name,
//     last_name: props.last_name,
//     email: props.email,
//     phone: props.phone,
//     address: props.address,
//     city: props.city,
//     country: props.country,
//     hash: hash,
//   };

//   // console.log(hashKey);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://www.payhere.lk/lib/payhere.js';
//     script.async = true;

//     script.onload = () => {
//       // PayHere script is loaded, initialize event listeners
//       window.payhere.onCompleted = async function onCompleted() {
//         console.log('Payment completed successfully');
//       };

//       window.payhere.onDismissed = function onDismissed() {
//         // error('Payment dismissed');
//         console.log('Payment dismissed');
//       };

//       window.payhere.onError = function onError(e: string) {
//         // error(e);
//         console.log('error');
//       };
//     };
//     scriptRef.current = script;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [props.eventDetails]);

//   function pay() {
//     window.payhere.startPayment(payment);
//   }

//   return (
//     <>
//       {/* <Head>
//         <script src="https://www.payhere.lk/lib/payhere.js" async />
//       </Head> */}

//       <button
//         onClick={pay}
//         className="flex button w-20 p-[1px] bg-[#D47151] rounded-2xl items-center  "
//       >
//         <div className="font-medium xl:text-lg text-md text-white text-left leading-tight ml-4">
//           Pay
//         </div>
//       </button>

//       {/* <Button onClick={generateHash}>click</Button> */}
//     </>
//   );
// };

// export default Pay;
