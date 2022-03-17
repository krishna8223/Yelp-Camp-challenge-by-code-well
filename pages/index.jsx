import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yelp-Camp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="left flex flex-col">
          <div className="logo">
            <Image src="/Logo.svg" alt="Logo" width={110} height={110} />
          </div>
          <div className="heading pr-24 mt-40   ">
            <h1 className="text-9xl font-bold">
              Explore the best camps on Earth
            </h1>
            <p className="text-3xl mt-6 text-gray-600">
              YelpCamp is a curated list of the best camping spots on
              Earth.Unfilterd and unbiased reviews.
            </p>
            <ul className="mt-6">
              <li className="text-gray-600 flex text-3xl  mt-10">
                <Image src="/Checkmark.svg" alt="Logo" width={25} height={25} />
                <p className="ml-3"> Add your own Camp suggestions.</p>
              </li>
              <li className="text-gray-600 flex text-3xl  mt-10">
                <Image src="/Checkmark.svg" alt="Logo" width={25} height={25} />
                <p className="ml-3"> Leave reviews for all camps.</p>
              </li>
              <li className="text-gray-600 flex text-3xl  mt-10">
                <Image src="/Checkmark.svg" alt="Logo" width={25} height={25} />
                <p className="ml-3"> See locations for all camps</p>
              </li>
            </ul>
            <Link href='/home'>
            <button className="button mt-10">Vie Campgrounds</button>
            </Link>
            <p className="partners_with text-3xl text-gray-600 mt-10">
              Partnered With:
            </p>
            <div className="partners flex gap-7">
              <Image src="/Airbnb.svg" alt="Logo" width={150} height={100} />
              <Image src="/Booking.svg" alt="Logo" width={150} height={100} />
              <Image
                src="/Plum Guide.svg"
                alt="Logo"
                width={150}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="right">
          <img src="/Hero Image.jpg" alt="Image" />
        </div>
      </header>
    </>
  );
}
