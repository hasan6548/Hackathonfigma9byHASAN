import Link from "next/link";
import Hero from "./SignupHero"
import React from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <>
    <Hero />

      <div className="min-h-screen bg-white">  
      {/* Signup Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-self-start gap-2 items-center mb-4">
              <Input type="checkbox" className="focus:ring-yellow-300" />
              <span className="text-nowrap flex">Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign Up
            </button>
            <p className="text-center mt-4">
              <Link href="#" className=" hover:text-blue-500 text-yellow-500">Forgot password?</Link> or
              <Link href="/login" className="text-yellow-500 hover:text-blue-500"> Sign In</Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <Button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/google.png" alt="Google" className="w-[20px] h-[20px] left-[16px] mr-2" width={20} height={20} />
              Sign up with Google
            </Button>
            <Button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/apple.png" alt="Apple" className="w-[24px] h-[24px] left-[16px] mr-2"  width={20} height={20} />
              Sign up with Apple
            </Button>
          </div>
        </div>
      </section>
    </div>
 </>
  );
}