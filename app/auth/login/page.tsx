'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import {
  Apple,
  ArrowRight,
  Gift,
  Heart,
  Package,
  ShoppingBag,
} from 'lucide-react';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(res.error);
      } else {
        router.push('/');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Section */}
      <div className="flex flex-1 flex-col justify-between bg-[#d5f0e4] p-10 lg:p-20">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium">Ready to shop?</h1>
            <h2 className="text-3xl font-medium">Your</h2>
            <h2 className="text-3xl font-medium">cart awaits</h2>
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
        <div className="flex items-center gap-2 self-end mt-4">
          <span className="text-lg font-medium text-green-600">
            First time here?
          </span>
          <Button
            variant="outline"
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Sign Up
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col p-10 lg:p-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              className="flex-1 rounded-r-none border-r-0"
            >
              Sign Up
            </Button>
            <Button
              type="submit"
              className="flex-1 rounded-l-none bg-green-600 hover:bg-green-700"
            >
              Log In
            </Button>
          </div>

          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 py-6 text-lg hover:bg-green-700"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Continue to account'}
          </Button>

          {error && <p className="text-red-500 text-sm">{error}</p>}

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
            By continuing, you agree to create or log in to an account under
            FreshMart&apos;s Terms of Use and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
