import Link from "next/link";
// import { IoChevronForwardOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { Input } from "@/components/ui/input";
import Hero from "./LoginHero"
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <>
    <Hero />
    <div className="min-h-screen bg-white">
      {/* Signin Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
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
              <Input type="checkbox" className="" />
              <span className="text-nowrap">Remember me?</span>
            </div>
            <Button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign In
            </Button>
            <p className="text-center mt-4">
              <Link href="#" className="text-yellow-500 hover:text-blue-500">Forgot password?</Link> or <Link href="/signup" className=" hover:text-blue-500 text-yellow-500 hover:text-bue-500">Sign Up</Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <Button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            <FcGoogle className="h-6 mr-2" />
              Sign in with Google
            </Button>
            <Button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <ImAppleinc className="h-6 mr-2" />
              Sign in with Apple
            </Button>
          </div>
        </div>
      </section>

    </div>
  </>
  );
}