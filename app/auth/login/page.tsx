import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Apple, ArrowRight, Gift, Heart, Package, ShoppingBag } from 'lucide-react'

const Login = () => {
  return(
    <>
     <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Section */}
      <div className="flex flex-1 flex-col justify-between bg-[#d5f0e4] p-10 lg:p-20">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium">Ready to shop ?</h1>
            <h2 className="text-3xl font-medium">Your</h2>
            <h2 className="text-3xl font-medium">cart awaits</h2>
          </div>
          <div className="space-y-2">
          <h2 className="text-4xl font-bold mt-4">Welcome</h2>
          <h2 className="text-4xl font-bold">Back</h2>
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
              <span>Get loyality discounts</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 self-end mt-4">
          <span className="text-lg font-medium text-green-600">First time here ?</span>
          <Button variant="outline" className="bg-green-600 text-white hover:bg-green-700">
            Sign Up
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col p-10 lg:p-20">
        <div className="flex justify-end gap-2">
          <div className="flex w-full">
            <Button variant="outline" className="flex-1 rounded-r-none border-r-0">
              Sign Up
            </Button>
            <Button className="flex-1 rounded-l-none bg-green-600 hover:bg-green-700">
              Log In
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
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              className="rounded-md border-gray-300 px-4 py-6"
            />
          </div>
          <Button className="w-full bg-green-600 py-6 text-lg hover:bg-green-700">
            Continue to account
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">OR</span>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="relative w-full py-6 text-lg"
          
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="absolute left-4 h-5 w-5"
              />
              Continue with google
            </Button>
            <Button
              variant="outline"
              className="relative w-full py-6 text-lg"
             
            >
              <Apple className="absolute left-4 h-5 w-5" />
              Continue with Apple
            </Button>
          </div>

          <p className="text-center text-sm text-gray-500">
            By continuing you agree to create or log in to an account under FreshMart Terms of Use and
            Privacy Policy and Bolt's Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
