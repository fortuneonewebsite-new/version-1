import React, { useEffect } from 'react';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDBBB] via-[#CCBEB1] to-[#997E67] text-[#664930] py-16 px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8 text-[#3A2E25]">
        Disclaimer
      </h1>

      <div className="text-lg leading-relaxed space-y-6 text-[#3A2E25] max-w-4xl mx-auto">
          <p>
            Thank you for visiting the White Lotus Lifescapes (WLL) Group website.
          </p>
          <p>
            Please be informed that by using or accessing the Website you agree with the Disclaimer without any qualification or limitation. WLL Group including all its companies, partnerships, affiliates and all its associates reserve the right to add, alter or delete material from the Website at any time and may, at any time, revise these Terms without notifying you. You are bound by any such amendments and WLL therefore advises you to periodically visit this page to review the current Terms.
          </p>

          <p>
            The websites and all its contents are provided with all faults on an "as is" and "as available" basis. No information given in this website creates a warranty or expands the scope of any warranty that cannot be disclaimed under the applicable laws. Your use of the website is solely at your own risk. This website is for guidance only. It does not constitute part of an offer or contract. Design and specifications are subject to change without prior notice. Computer generated images are the artist's impression and are an indicative of the actual designs. Further the actual design / construction may vary in fit and finish from the one displayed in the information and material displayed on this website.
          </p>

          <p>
            You are therefore, required to verify all the details, including area, amenities, services, terms of sales, payments and other relevant terms independently with WLL prior to concluding any decision for buying any unit(s) in any of our projects/developments. Till such time the details are fully updated, the said information will not be construed as an advertisement. To find out more about our projects / developments, please call our enquiry helpline or visit our sales office and speak to our authorized sales representatives.
          </p>

          <p>
            In no event will WLL, its management, its associate companies, its affiliates, and /or its employees will be liable for claims made by the users including seeking any cancellation for any of the inaccuracies in the information provided in this website, though all efforts have to be made to ensure accuracy. WLL under no circumstances will be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website.
          </p>

          <p>
            This website is currently being updated. While enough care is taken by WLL to ensure that information in the website is up to date, accurate and correct, readers are requested to make their independent enquiry before relying upon the same. All content including brochures are purely for general informational purposes only. It is not meant to constitute an offer or solicitation. No furniture or accessories or any other item of personalized nature shown in any of the visuals are provided with the unit. All intending purchaser/s in any of the projects shall be governed by the terms and conditions envisaged under The Real Estate (Regulation and Development) Act 2016. Nothing on the website should be misconstrued as advertising, marketing, booking, selling or an offer for sale or invitation to purchase a unit in any project by the company/firm. WLL is not responsible for the consequences of any action taken by the viewer relying on such material/information on this website. To find out more about projects/developments, please call 9538338888 or visit our sales office during working hours and get in touch with authorized sales representatives.
          </p>
      </div>
    </div>
  );
};

export default Disclaimer;
