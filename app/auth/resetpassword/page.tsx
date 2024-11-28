import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Apple, ArrowRight, Gift, Heart, Package, ShoppingBag } from 'lucide-react';
import Image from 'next/image';


const ResetPassword = () => {
  return (
    <>
     <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left Section */}
        <div className="flex flex-1 flex-col justify-between bg-[#d5f0e4] p-10 lg:p-20">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-medium">Forgot your password?</h1>
              <h2 className="text-3xl font-medium">Don&apos;t worry!</h2>
              <h2 className="text-3xl font-medium">We&apos;ve got you covered.</h2>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-bold mt-4">Reset</h2>
              <h2 className="text-4xl font-bold">Password</h2>
            </div>
            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <ShoppingBag className="h-6 w-6" />
                <span>Secure your account effortlessly</span>
              </div>
              <div className="flex items-center gap-4">
                <Heart className="h-6 w-6" />
                <span>Regain access to your saved items</span>
              </div>
              <div className="flex items-center gap-4">
                <Package className="h-6 w-6" />
                <span>Keep your orders on track</span>
              </div>
              <div className="flex items-center gap-4">
                <Gift className="h-6 w-6" />
                <span>Restore loyalty discounts</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 self-end mt-4">
            <span className="text-lg font-medium text-green-600">Remembered it?</span>
            <Button variant="outline" className="bg-green-600 text-white hover:bg-green-700">
              Log In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 flex-col p-10 lg:p-20">
          <div className="flex justify-end gap-2">
            <div className="flex w-full">
              <Button className="flex-1 bg-green-600 hover:bg-green-700">
                Reset Password
              </Button>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-md border-gray-300 px-4 py-6"
              />
            </div>
            <Button className="w-full bg-green-600 py-6 text-lg hover:bg-green-700">
              Send Reset Link
            </Button>

            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">OR</span>
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
                Reset via Google
              </Button>
              <Button variant="outline" className="relative w-full py-6 text-lg">
                <Apple className="absolute left-4 h-5 w-5" />
                Reset via Apple
              </Button>
            </div>

            <p className="text-center text-sm text-gray-500">
            By resetting, you agree to FreshMart&apos;s Terms of Use and Privacy Policy and Bolt&apos;s Terms of Use and Privacy Policy.
            </p>

          </div>
        </div>
      </div>
    </>
  )
};

export default ResetPassword;
