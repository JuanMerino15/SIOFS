import React from 'react'; // Explicit import for TypeScript
import Image from "next/image";
import Link from "next/link";
import HermanoForm from './components/forms/HermanoForm';

export default function Home() {
  return (
    <div className="flex h-screen bg-[#4D1F0F] text-brown-500">
      {/* TODO: OTP Verification | PasskeyModal*/}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px] p-4">
          <Image
            src="/assets/icons/logo-full.svg"
            height={100}
            width={100}
            alt="SIOFS Logo"
            className="mx-auto mb-4"
          />

          <HermanoForm /> {/* Ensure this path is correct */}

          <div className="text-center mt-4">
            <Link href="#" className="text-white hover:underline">¿Olvido su contraseña?</Link> {/* Replaced 'a' with Next.js 'Link' */}
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="logo"
        className="side-img max-w-[50%] order-first"
      />
    </div>
  );
}
