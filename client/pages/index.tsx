import Head from 'next/head';
import Hero from './components/Hero';
import HowItWorks from './components/HowitWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';


export default function Home() {
  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Head>
        <title>SoftSell – Resell Your Unused Software Licenses</title>
        <meta name="description" content="Resell your unused software licenses securely with SoftSell. Fast. Easy. Secure." />
        <link rel="icon" href="/fev.jpg" />
      </Head>
      <main className="space-y-20">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        
      </main>
    </div>
  );
}