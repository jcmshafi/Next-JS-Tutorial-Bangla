import React, {Component} from 'react';
import Link from "next/link";
import Head from "next/head";

import Style from '../css/Style.module.css';

class Index extends Component {
    render() {
        return (
            <div>

                <Head>
                    <title>Home</title>
                    <meta name="description" content="প্রোগ্রামিং, ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপ ডেভেলপমেন্ট ভালো কিছু শিখুন এবং আরও ভাল কিছু করুন। Learn With Rabbil Hasan"/>
                    <meta name="keywords" content="Rabbil Hasan,Learn With Rabbil Hasan,Mobile App Development Tutorial Bangla, Web Development Tutorial Bangla, Software Development Tutorial Bangla,Laravel Tutorial bangla, React Tutorial Bangla, Android Tutorial Bangla, React Native Tutorial Bangla, Programming Tutorial Bangla, JavaScript Tutorial Bangla"/>
                     <link rel="canonical" href="http://rabbil.com/"/>
                     <meta property="og:title" content="লার্ন উইথ রাব্বিল হাসান" />
                     <meta property="og:description" content="প্রোগ্রামিং, ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপ ডেভেলপমেন্ট ভালো কিছু শিখুন এবং আরও ভাল কিছু করুন। Learn With Rabbil Hasan" />
                    <meta property="og:site_name" content="লার্ন উইথ রাব্বিল হাসান" />
                     <meta property="og:url" content="http://rabbil.com/" />
                    <meta property="og:image" content="http://rabbil.com/storage/Learn_With_Rabbil_Hasan.png" />
                </Head>


                <ul>
                    <li><Link href="/">Home</Link>  </li>
                    <li><Link href="/contact">Contact</Link>  </li>
                    <li><Link href="/login">Login</Link>  </li>
                    <li><Link href="/about">About</Link>  </li>
                </ul>
                <button className="btn btn-primary">My Btn</button>
                <h1 className={Style.myText}>This is home page</h1>


                <img src="images/flag.jpg"/>
            </div>
        );
    }
}

export default Index;