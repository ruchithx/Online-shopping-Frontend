'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Apple,
  ArrowRight,
  Gift,
  Heart,
  Package,
  ShoppingBag,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { registerUser } from '@/services/userService';
import Link from 'next/link';

const Signup = () => {
  const router = useRouter();
  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const userData = {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        contactNumber: formData.contactNumber,
        street: formData.street,
        locality: formData.city,
        region: formData.state,
        postal_code: formData.zip,
        country: formData.country,
      };

      await registerUser(userData);

      toast.success(
        'Registration successful. Redirecting to the sign-in page...',
      );

      setFormData(initialFormState);

      router.push('/auth/login');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Registration failed',
      );
    }
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Section */}
      <div className="flex flex-1 flex-col justify-between bg-[#d5f0e4] p-10 lg:p-20 lg:justify-start lg:gap-20">
        <div className="flex flex-1 flex-col justify-between bg-[#d5f0e4] p-10 lg:p-20 lg:justify-start lg:gap-20">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-medium">Unlock the best</h1>
              <h2 className="text-3xl font-medium">shopping experience</h2>
            </div>
            <div className="space-y-2 mb-4">
              <h2 className="text-4xl font-bold">Welcome</h2>
              <h2 className="text-4xl font-bold">to</h2>
              <h2 className="text-4xl font-bold text-green-600">FreshMart</h2>
            </div>
            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <ShoppingBag className="h-6 w-6" />
                <span>Check out faster with saved info</span>
              </div>
              <div className="flex items-center gap-4">
                <Heart className="h-6 w-6" />
                <span>Enjoy our personalized journey</span>
              </div>
              <div className="flex items-center gap-4">
                <Package className="h-6 w-6" />
                <span>Keep your orders on track</span>
              </div>
              <div className="flex items-center gap-4">
                <Gift className="h-6 w-6" />
                <span>Get loyalty discounts</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 self-end">
            <span className="text-lg font-medium text-green-600">
              Here before?
            </span>
            <Button
              variant="outline"
              className="bg-green-600 text-white hover:bg-green-700"
              onClick={() => router.push('/auth/login')}
            >
              Log In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col p-10 lg:p-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User information */}
          {[
            { id: 'firstName', placeholder: 'First Name' },
            { id: 'lastName', placeholder: 'Last Name' },
            { id: 'email', placeholder: 'Your email', type: 'email' },
            {
              id: 'contactNumber',
              placeholder: 'Your Contact Number',
              type: 'tel',
            },
            { id: 'password', placeholder: 'Password', type: 'password' },
            {
              id: 'confirmPassword',
              placeholder: 'confirmPassword',
              type: 'password',
            },
            { id: 'street', placeholder: 'Street Address' },
            { id: 'city', placeholder: 'City' },
            { id: 'state', placeholder: 'State/Province' },
            { id: 'zip', placeholder: 'Zip/Postal Code' },
            { id: 'country', placeholder: 'Country' },
          ].map(({ id, placeholder, type = 'text' }) => (
            <div key={id} className="space-y-2">
              <Input
                name={id}
                type={type}
                placeholder={placeholder}
                value={formData[id as keyof typeof formData]}
                onChange={handleChange}
                className="rounded-md border-gray-300 px-4 py-6"
              />
            </div>
          ))}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-green-600 py-6 text-lg hover:bg-green-700"
          >
            Continue to Create
          </Button>

          {/* Existing social login options */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                OR
              </span>
            </div>
          </div>

          {/* Social buttons */}
          <div className="space-y-4">
            <Button variant="outline" className="relative w-full py-6 text-lg">
              <Image
                src="/google.svg"
                alt="Google"
                width={20}
                height={20}
                className="absolute left-4"
              />
              Continue with Google
            </Button>
            <Button variant="outline" className="relative w-full py-6 text-lg">
              <Apple className="absolute left-4 h-5 w-5" />
              Continue with Apple
            </Button>
          </div>

          <p className="text-center text-sm text-gray-500">
            By continuing, you agree to FreshMart&apos;s Terms of Use and
            Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
