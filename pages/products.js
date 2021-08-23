import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import HeroSection from '../components/products/HeroSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { getDriveDownloadUrl } from '../lib/get-download-url';
import setUTM from '../lib/conversions';

const Products = ({
  metatagsDescriptions, langJson, cardDescriptions, navbarLang, footerLang, downloadUrl
}) => {
  const [consentCookie, setConsentCookie] = useState(true);
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  const handleAcceptCookies = () => {
    localStorage.setItem('CookieConsent', 'true');
    setConsentCookie(true);
  };

  useEffect(() => {
    AOS.init();
    const cookie = localStorage.getItem('CookieConsent');
    setUTM();

    if (!cookie) setConsentCookie(false);
  }, []);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="products">
      <div className="heroSection">
        <Navbar textContent={navbarLang}/>
        <HeroSection textContent={langJson["HeroSection"]} download={downloadUrl}/>
      </div>
      <Footer textContent={footerLang}/>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const downloadUrl = await getDriveDownloadUrl(ctx);

  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/home.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      downloadUrl, metatagsDescriptions, langJson, navbarLang, footerLang, cardDescriptions,
    },
  };
}

export default Products;
