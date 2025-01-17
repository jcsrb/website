import React from 'react';
import HeroSection from '../components/privacy/HeroSection';
import ManifestoSection from '../components/privacy/ManifestoSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

const Privacy = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  lang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'privacy');

  return (

    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Privacy">

      <Navbar
        textContent={navbarLang}
        lang={lang}
        cta={['default']}
        fixed={false}
        darkMode
      />

      <HeroSection
        textContent={langJson.HeroSection}
      />

      <ManifestoSection
        textContent={langJson.ManifestoSection}
      />

      <Footer
        textContent={footerLang}
        lang={lang}
        darkMode
      />

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/privacy.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, metatagsDescriptions, langJson, navbarLang, footerLang
    },
  };
}

export default Privacy;
