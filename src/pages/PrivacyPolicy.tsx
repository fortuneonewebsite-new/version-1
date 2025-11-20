import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDBBB] via-[#CCBEB1] to-[#997E67] text-[#664930] py-16 px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8 text-[#3A2E25]">
        Privacy Policy
      </h1>

      <div className="text-lg leading-relaxed space-y-6 text-[#3A2E25] max-w-4xl mx-auto">
          <p>
            Thank you for visiting www.fortuneone.co, the official website of Fortune One BuildCo Pvt. Ltd. We value your privacy and consider it a vital part of our commitment to transparency and trust. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>
            We do not collect personal information about you unless you choose to provide it. When you browse our website to read pages or download information, certain non-personal data is automatically gathered, such as:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>The type of browser and operating system used</li>
            <li>The name of your Internet Service Provider (ISP)</li>
            <li>The date and time of your visit</li>
            <li>The pages you access on our website</li>
          </ul>
          <p>
            This information helps us analyze user behavior and enhance your browsing experience by improving our website’s content and performance.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Personal Information</h2>
          <p>
            We collect personal information only when you voluntarily submit it through forms, inquiries, or service requests. This may include your name, contact number, email address, and interest in our projects or services.
          </p>
          <p>
            Your personal details are used solely for communication and to provide the services or information you have requested. We do not sell, rent, or share your personal data with any third party unless required by law.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Use of Information</h2>
          <p>The information you provide may be used to:</p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Respond to your inquiries or service requests</li>
            <li>Share updates, newsletters, and promotional materials related to Fortune One projects</li>
            <li>Improve user experience and customer engagement</li>
          </ul>
          <p>You may opt out of receiving promotional communications at any time.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            We take reasonable precautions to safeguard your personal data. However, please note that no method of online transmission or electronic storage is completely secure. While we strive to use industry-standard security measures, we cannot guarantee absolute protection.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Copyright Notice</h2>
          <p>
            All content on this website — including images, text, graphics, and other material — is the property of Fortune One BuildCo Pvt. Ltd. Unauthorized reproduction or use of any content without prior written permission is strictly prohibited.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Arbitration</h2>
          <p>
            Any disputes or differences related to this policy or the use of our website shall be referred to a sole arbitrator appointed by Fortune One BuildCo Pvt. Ltd., in accordance with the Arbitration and Conciliation Act, 1996.
          </p>
          <p>The courts of Bengaluru, Karnataka shall have exclusive jurisdiction for any related proceedings.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Policy Updates</h2>
          <p>
            This Privacy Policy is effective as of today’s date. We reserve the right to modify or update it at any time without prior notice. Any changes will be posted on this page and will take effect immediately upon publication.
          </p>
          <p>
            By continuing to use our website after such changes, you acknowledge and agree to the revised terms.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <div className="ml-6 space-y-2">
            <p>📧 info@fortuneone.co</p>
            <p>🏢 Fortune One BuildCo Pvt. Ltd.,</p>
            <p>1st Floor, Billor’s Palladium, No. 19/3, Cunningham Road, Bengaluru – 560052</p>
          </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
