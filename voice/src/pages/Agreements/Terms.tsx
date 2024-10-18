import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Terms = () => {
  const brand = localStorage.getItem('brand');
  
  return (
    <main>
      <header className="flex justify-between items-center mx-10 my-5">
        <Link to="/">
          <img src={Logo} alt="" className="w-[100px]" />
        </Link>

        <Link to="/privacy-policy" className="text-white">
          Privacy Policy
        </Link>
      </header>

      <section className="px-[15%] text-white">
        <h1 className="text-center text-6xl my-10">
          <b>{brand ?? "One2One AI"} Terms and Agreements</b>
        </h1>
        <hr />
        <p className="text-justify my-5">Last updated October 21, 2023</p>

        <h1 className="text-3xl my-10">AGREEMENT TO OUR LEGAL TERMS</h1>
        <p className="text-justify my-5">
          We are Twenty one Bots Infratech Pvt Ltd ("Company," "we," "us,"
          "our"), a company registered in India at P/NO J-13,MAGH SECTOR ,
          BHUJBAL FARM , CIDCO , Cidco Colony (Nashik), Nashik, Nashik- 422009,
          Maharashtra, Nashik, Maharashtra 422009. Our VAT number is NSKT05963G.
          <br /> <br />
          We operate the website{" "}
          <a href="https://www.one2one.ai">https://www.one2one.ai</a> (the
          "Site"), as well as any other related products and services that refer
          or link to these legal terms (the "Legal Terms") (collectively, the
          "Services"). <br /> <br /> You can contact us by phone at
          +91-7798794199, email at ajinkya@one2one.ai, or by mail to P/NO
          J-13,MAGH SECTOR , BHUJBAL FARM , CIDCO , Cidco Colony (Nashik),
          Nashik, Nashik- 422009, Maharashtra, Nashik, Maharashtra 422009,
          India. <br /> <br /> These Legal Terms constitute a legally binding
          agreement made between you, whether personally or on behalf of an
          entity ("you"), and Twenty one Bots Infratech Pvt Ltd, concerning your
          access to and use of the Services. You agree that by accessing the
          Services, you have read, understood, and agreed to be bound by all of
          these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS,
          THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
          DISCONTINUE USE IMMEDIATELY. <br /> <br /> We will provide you with
          prior notice of any scheduled changes to the Services you are using.
          The modified Legal Terms will become effective upon posting or
          notifying you by One2OneAI@one2one.ai, as stated in the email message.
          By continuing to use the Services after the effective date of any
          changes, you agree to be bound by the modified terms. <br /> <br />
          The Services are intended for users who are at least 13 years of age.
          All users who are minors in the jurisdiction in which they reside
          (generally under the age of 18) must have the permission of, and be
          directly supervised by, their parent or guardian to use the Services.
          If you are a minor, you must have your parent or guardian read and
          agree to these Legal Terms prior to you using the Services. <br />
          <br /> We recommend that you print a copy of these Legal Terms for
          your records.
        </p>
        <h1 className="text-2xl my-10">TABLE OF CONTENTS</h1>
        <ol>
          <li>
            <a href="#1">1. OUR SERVICES</a>
          </li>
          <li>
            <a href="#2">2. INTELLECTUAL PROPERTY RIGHTS</a>
          </li>
          <li>
            <a href="#3">3. USER REPRESENTATIONS</a>
          </li>
          <li>
            <a href="#4">4. USER REGISTRATION</a>
          </li>
          <li>
            <a href="#5">5. PURCHASES AND PAYMENT</a>
          </li>
          <li>
            <a href="#6">6. CANCELLATION</a>
          </li>
          <li>
            <a href="#7">7. PROHIBITED ACTIVITIES</a>
          </li>
          <li>
            <a href="#8">8. USER GENERATED CONTRIBUTIONS</a>
          </li>
          <li>
            <a href="#9">9. CONTRIBUTION LICENSE</a>
          </li>
          <li>
            <a href="#10">10. SOCIAL MEDIA</a>
          </li>
          <li>
            <a href="#11">11. THIRD-PARTY WEBSITES AND CONTENT</a>
          </li>
          <li>
            <a href="#12">12. ADVERTISERS</a>
          </li>
          <li>
            <a href="#13">13. SERVICES MANAGEMENT</a>
          </li>
          <li>
            <a href="#14">14. PRIVACY POLICY</a>
          </li>
          <li>
            <a href="#15">15. COPYRIGHT INFRINGEMENTS </a>
          </li>
          <li>
            <a href="#16">16. TERM AND TERMINATION</a>
          </li>
          <li>
            <a href="#17">17. MODIFICATIONS AND INTERRUPTIONS</a>
          </li>
          <li>
            <a href="#18">18. GOVERNING LAW </a>
          </li>
          <li>
            <a href="#19">19. DISPUTE RESOLUTION</a>
          </li>
          <li>
            <a href="#20">20. CORRECTIONS</a>
          </li>
          <li>
            <a href="#21">21. DISCLAIMER</a>
          </li>
          <li>
            <a href="#22">22. LIMITATIONS OF LIABILITY</a>
          </li>
          <li>
            <a href="#23">23. INDEMNIFICATION</a>
          </li>
          <li>
            <a href="#24">24. USER DATA</a>
          </li>
          <li>
            <a href="#25">
              25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </a>
          </li>
          <li>
            <a href="#26">26. CALIFORNIA USERS AND RESIDENTS</a>
          </li>
          <li>
            <a href="#27">27. MISCELLANEOUS</a>
          </li>
          <li>
            <a href="#28">28. CONTACT US</a>
          </li>
        </ol>

        <h1 className="text-3xl my-10" id="1">
          1. OUR SERVICES
        </h1>
        <p className="text-justify my-5">
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Services from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable. <br />
          <br /> The Services are not tailored to comply with industry-specific
          regulations (Health Insurance Portability and Accountability Act
          (HIPAA), Federal Information Security Management Act (FISMA), etc.),
          so if your interactions would be subjected to such laws, you may not
          use the Services. You may not use the Services in a way that would
          violate the Gramm-Leach-Bliley Act (GLBA).
        </p>

        <h1 className="text-3xl my-10" id="2">
          2. INTELLECTUAL PROPERTY RIGHTS
        </h1>
        <h2 className="text-xl my-5 font-bold"> Our intellectual property </h2>
        <p className="text-justify my-5">
          We are the owner or the licensee of all intellectual property rights
          in our Services, including all source code, databases, functionality,
          software, website designs, audio, video, text, photographs, and
          graphics in the Services (collectively, the "Content"), as well as the
          trademarks, service marks, and logos contained therein (the "Marks").{" "}
          <br />
          <br />
          Our Content and Marks are protected by copyright and trademark laws
          (and various other intellectual property rights and unfair competition
          laws) and treaties in the United States and around the world. <br />
          <br /> The Content and Marks are provided in or through the Services
          "AS IS" for your personal, non-commercial use or internal business
          purpose only.
        </p>
        <h2 className="text-xl my-5 font-bold"> Your use of our Services</h2>
        <p className="text-justify my-5">
          Subject to your compliance with these Legal Terms, including the
          <a href="#7" className="underline">
            {" "}
            "PROHIBITED ACTIVITIES"{" "}
          </a>
          section below, we grant you a non-exclusive, non-transferable,
          revocable license to: <br />
          <br />
          <li className="list-disc mx-10">access the Services; and</li>
          <li className="list-disc mx-10">
            download or print a copy of any portion of the Content to which you
            have properly gained access.
          </li>{" "}
          <br />
          solely for your personal, non-commercial use or internal business
          purpose. <br />
          <br /> Except as set out in this section or elsewhere in our Legal
          Terms, no part of the Services and no Content or Marks may be copied,
          reproduced, aggregated, republished, uploaded, posted, publicly
          displayed, encoded, translated, transmitted, distributed, sold,
          licensed, or otherwise exploited for any commercial purpose
          whatsoever, without our express prior written permission. <br />
          <br /> If you wish to make any use of the Services, Content, or Marks
          other than as set out in this section or elsewhere in our Legal Terms,
          please address your request to: ajinkya@one2one.ai. If we ever grant
          you the permission to post, reproduce, or publicly display any part of
          our Services or Content, you must identify us as the owners or
          licensors of the Services, Content, or Marks and ensure that any
          copyright or proprietary notice appears or is visible on posting,
          reproducing, or displaying our Content. <br />
          <br /> We reserve all rights not expressly granted to you in and to
          the Services, Content, and Marks. <br />
          <br />
          Any breach of these Intellectual Property Rights will constitute a
          material breach of our Legal Terms and your right to use our Services
          will terminate immediately.
        </p>
        <h2 className="text-xl my-5 font-bold">
          Your submissions and contributions
        </h2>
        <p className="text-justify my-5">
          Please review this section and the{" "}
          <a href="#7" className="underline">
            {" "}
            "PROHIBITED ACTIVITIES"{" "}
          </a>{" "}
          section carefully prior to using our Services to understand the (a)
          rights you give us and (b) obligations you have when you post or
          upload any content through the Services. <br />
          <br />
          <span className="font-semibold">Submissions:</span> By directly
          sending us any question, comment, suggestion, idea, feedback, or other
          information about the Services ("Submissions"), you agree to assign to
          us all intellectual property rights in such Submission. You agree that
          we shall own this Submission and be entitled to its unrestricted use
          and dissemination for any lawful purpose, commercial or otherwise,
          without acknowledgment or compensation to you. <br />
          <br />
          <span className="font-semibold">Contributions:</span> The Services may
          invite you to chat, contribute to, or participate in blogs, message
          boards, online forums, and other functionality during which you may
          create, submit, post, display, transmit, publish, distribute, or
          broadcast content and materials to us or through the Services,
          including but not limited to text, writings, video, audio,
          photographs, music, graphics, comments, reviews, rating suggestions,
          personal information, or other material ("Contributions"). Any
          Submission that is publicly posted shall also be treated as a
          Contribution. <br />
          <br /> You understand that Contributions may be viewable by other
          users of the Services and possibly through third-party websites.{" "}
          <br />
          <br />{" "}
          <span className="font-semibold">
            {" "}
            When you post Contributions, you grant us a license (including use
            of your name, trademarks, and logos):
          </span>{" "}
          By posting any Contributions, you grant us an unrestricted, unlimited,
          irrevocable, perpetual, non-exclusive, transferable, royalty-free,
          fully-paid, worldwide right, and license to: use, copy, reproduce,
          distribute, sell, resell, publish, broadcast, retitle, store, publicly
          perform, publicly display, reformat, translate, excerpt (in whole or
          in part), and exploit your Contributions (including, without
          limitation, your image, name, and voice) for any purpose, commercial,
          advertising, or otherwise, to prepare derivative works of, or
          incorporate into other works, your Contributions, and to sublicense
          the licenses granted in this section. Our use and distribution may
          occur in any media formats and through any media channels. <br />
          <br /> This license includes our use of your name, company name, and
          franchise name, as applicable, and any of the trademarks, service
          marks, trade names, logos, and personal and commercial images you
          provide. <br />
          <br />{" "}
          <span className="font-semibold">
            You are responsible for what you post or upload:
          </span>{" "}
          By sending us Submissions and/or posting Contributions through any
          part of the Services or making Contributions accessible through the
          Services by linking your account through the Services to any of your
          social networking accounts, you: <br />
          <br />
          <li className="list-disc mx-10">
            confirm that you have read and agree with our{" "}
            <a href="#7" className="underline">
              {" "}
              "PROHIBITED ACTIVITIES"{" "}
            </a>{" "}
            and will not post, send, publish, upload, or transmit through the
            Services any Submission nor post any Contribution that is illegal,
            harassing, hateful, harmful, defamatory, obscene, bullying, abusive,
            discriminatory, threatening to any person or group, sexually
            explicit, false, inaccurate, deceitful, or misleading;
          </li>
          <li className="list-disc mx-10">
            to the extent permissible by applicable law, waive any and all moral
            rights to any such Submission and/or Contribution;
          </li>
          <li className="list-disc mx-10">
            warrant that any such Submission and/or Contributions are original
            to you or that you have the necessary rights and licenses to submit
            such Submissions and/or Contributions and that you have full
            authority to grant us the above-mentioned rights in relation to your
            Submissions and/or Contributions; and
          </li>
          <li className="list-disc mx-10">
            warrant and represent that your Submissions and/or Contributions do
            not constitute confidential information.
          </li>
          <br />
          You are solely responsible for your Submissions and/or Contributions
          and you expressly agree to reimburse us for any and all losses that we
          may suffer because of your breach of (a) this section, (b) any third
          party’s intellectual property rights, or (c) applicable law. <br />
          <br />
          <span className="font-semibold">
            We may remove or edit your Content:
          </span>{" "}
          Although we have no obligation to monitor any Contributions, we shall
          have the right to remove or edit any Contributions at any time without
          notice if in our reasonable opinion we consider such Contributions
          harmful or in breach of these Legal Terms. If we remove or edit any
          such Contributions, we may also suspend or disable your account and
          report you to the authorities.
        </p>
        <h2 className="text-xl my-5 font-bold">Copyright infringement</h2>
        <p className="text-justify my-5">
          We respect the intellectual property rights of others. If you believe
          that any material available on or through the Services infringes upon
          any copyright you own or control, please immediately refer to the
          <a href="#15" className="underline">
            {" "}
            "COPYRIGHT INFRINGEMENT"{" "}
          </a>{" "}
          section below.
        </p>

        <h1 className="text-3xl my-10" id="3">
          3. OUR SERVICES
        </h1>
        <p className="text-justify my-5">
          By using the Services, you represent and warrant that: (1) all
          registration information you submit will be true, accurate, current,
          and complete; (2) you will maintain the accuracy of such information
          and promptly update such registration information as necessary; (3)
          you have the legal capacity and you agree to comply with these Legal
          Terms; (4) you are not under the age of 13; (5) you are not a minor in
          the jurisdiction in which you reside, or if a minor, you have received
          parental permission to use the Services; (6) you will not access the
          Services through automated or non-human means, whether through a bot,
          script or otherwise; (7) you will not use the Services for any illegal
          or unauthorized purpose; and (8) your use of the Services will not
          violate any applicable law or regulation. <br />
          <br /> If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Services
          (or any portion thereof).
        </p>
        <h1 className="text-3xl my-10" id="4">
          4. USER REGISTRATION
        </h1>
        <p className="text-justify my-5">
          You may be required to register to use the Services. You agree to keep
          your password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable.
        </p>
        <h1 className="text-3xl my-10" id="5">
          5. PURCHASES AND PAYMENT
        </h1>
        <p className="text-justify my-5">
          We accept the following forms of payment: <br />
          <br />
          <li className="mx-10 list-none">- Visa</li>{" "}
          <li className="mx-10 list-none"> - Mastercard </li>{" "}
          <li className="mx-10 list-none"> - UPI </li> You agree to provide
          current, complete, and accurate purchase and account information for
          all purchases made via the Services. You further agree to promptly
          update account and payment information, including email address,
          payment method, and payment card expiration date, so that we can
          complete your transactions and contact you as needed. Sales tax will
          be added to the price of purchases as deemed required by us. We may
          change prices at any time. All payments shall be in Rupees. <br />
          <br /> You agree to pay all charges at the prices then in effect for
          your purchases and any applicable shipping fees, and you authorize us
          to charge your chosen payment provider for any such amounts upon
          placing your order. If your order is subject to recurring charges,
          then you consent to our charging your payment method on a recurring
          basis without requiring your prior approval for each recurring charge,
          until such time as you cancel the applicable order. We reserve the
          right to correct any errors or mistakes in pricing, even if we have
          already requested or received payment. <br />
          <br /> We reserve the right to refuse any order placed through the
          Services. We may, in our sole discretion, limit or cancel quantities
          purchased per person, per household, or per order. These restrictions
          may include orders placed by or under the same customer account, the
          same payment method, and/or orders that use the same billing or
          shipping address. We reserve the right to limit or prohibit orders
          that, in our sole judgment, appear to be placed by dealers, resellers,
          or distributors. <br />
          <br />
          <h1 className="font-bold text-lg">
            ALL ITEMS OR SERVICES PURCHASED FROM ONE2ONE AI ARE NON-REFUNDABLE
            UNLESS OTHERWISE SPECIFIED IN WRITING BY ONE2ONE AI
          </h1>
        </p>
        <h1 className="text-3xl my-10" id="6">
          6. CANCELLATION
        </h1>
        <p className="text-justify my-5">
          All purchases are non-refundable. You can cancel your subscription at
          any time by contacting us using the contact information provided
          below. Your cancellation will take effect at the end of the current
          paid term. <br />
          <br /> If you are unsatisfied with our Services, please email us at
          ajinkya@one2one.ai or call us at +91-7798794199.
        </p>
        <h1 className="text-3xl my-10" id="7">
          7. PROHIBITED ACTIVITIES
        </h1>
        <p className="text-justify my-5">
          You may not access or use the Services for any purpose other than that
          for which we make the Services available. The Services may not be used
          in connection with any commercial endeavors except those that are
          specifically endorsed or approved by us. <br />
          <br />
          As a user of the Services, you agree not to: <br />
          <li className="mb-1 mx-5">
            Systematically retrieve data or other content from the Services to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us.
          </li>
          <li className="mb-1 mx-5">
            Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords.
          </li>
          <li className="mb-1 mx-5">
            Circumvent, disable, or otherwise interfere with security-related
            features of the Services, including features that prevent or
            restrict the use or copying of any Content or enforce limitations on
            the use of the Services and/or the Content contained therein.
          </li>
          <li className="mb-1 mx-5">
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            Services.
          </li>
          <li className="mb-1 mx-5">
            Use any information obtained from the Services in order to harass,
            abuse, or harm another person.
          </li>
          <li className="mb-1 mx-5">
            Make improper use of our support services or submit false reports of
            abuse or misconduct.
          </li>
          <li className="mb-1 mx-5">
            Use the Services in a manner inconsistent with any applicable laws
            or regulations.
          </li>
          <li className="mb-1 mx-5">
            Engage in unauthorized framing of or linking to the Services.
          </li>
          <li className="mb-1 mx-5">
            Upload or transmit (or attempt to upload or to transmit) viruses,
            Trojan horses, or other material, including excessive use of capital
            letters and spamming (continuous posting of repetitive text), that
            interferes with any party’s uninterrupted use and enjoyment of the
            Services or modifies, impairs, disrupts, alters, or interferes with
            the use, features, functions, operation, or maintenance of the
            Services.
          </li>
          <li className="mb-1 mx-5">
            Engage in any automated use of the system, such as using scripts to
            send comments or messages, or using any data mining, robots, or
            similar data gathering and extraction tools.
          </li>
          <li className="mb-1 mx-5">
            Delete the copyright or other proprietary rights notice from any
            Content.
          </li>
          <li className="mb-1 mx-5">
            Attempt to impersonate another user or person or use the username of
            another user.
          </li>
          <li className="mb-1 mx-5">
            Upload or transmit (or attempt to upload or to transmit) any
            material that acts as a passive or active information collection or
            transmission mechanism, including without limitation, clear graphics
            interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or
            other similar devices (sometimes referred to as "spyware" or
            "passive collection mechanisms" or "pcms").
          </li>
          <li className="mb-1 mx-5">
            Interfere with, disrupt, or create an undue burden on the Services
            or the networks or services connected to the Services.
          </li>
          <li className="mb-1 mx-5">
            Harass, annoy, intimidate, or threaten any of our employees or
            agents engaged in providing any portion of the Services to you.
          </li>
          <li className="mb-1 mx-5">
            Attempt to bypass any measures of the Services designed to prevent
            or restrict access to the Services, or any portion of the Services.
          </li>
          <li className="mb-1 mx-5">
            Copy or adapt the Services' software, including but not limited to
            Flash, PHP, HTML, JavaScript, or other code.
          </li>
          <li className="mb-1 mx-5">
            Except as permitted by applicable law, decipher, decompile,
            disassemble, or reverse engineer any of the software comprising or
            in any way making up a part of the Services.
          </li>
          <li className="mb-1 mx-5">
            Except as may be the result of standard search engine or Internet
            browser usage, use, launch, develop, or distribute any automated
            system, including without limitation, any spider, robot, cheat
            utility, scraper, or offline reader that accesses the Services, or
            use or launch any unauthorized script or other software.
          </li>
          <li className="mb-1 mx-5">
            Use a buying agent or purchasing agent to make purchases on the
            Services.
          </li>
          <li className="mb-1 mx-5">
            Make any unauthorized use of the Services, including collecting
            usernames and/or email addresses of users by electronic or other
            means for the purpose of sending unsolicited email, or creating user
            accounts by automated means or under false pretenses.
          </li>
          <li className="mb-1 mx-5">
            Use the Services as part of any effort to compete with us or
            otherwise use the Services and/or the Content for any
            revenue-generating endeavor or commercial enterprise.
          </li>
          <li className="mb-1 mx-5">
            Sell or otherwise transfer your profile.
          </li>
        </p>

        <h1 className="text-3xl my-10" id="8">
          8. OUR SERVICES
        </h1>
        <p className="text-justify my-5">
          The Services may invite you to chat, contribute to, or participate in
          blogs, message boards, online forums, and other functionality, and may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the Services, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,
          "Contributions"). Contributions may be viewable by other users of the
          Services and through third-party websites. As such, any Contributions
          you transmit may be treated as non-confidential and non-proprietary.
          When you create or make available any Contributions, you thereby
          represent and warrant that: <br />
          <br />
          <li className="mb-1 mx-5">
            The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral rights of any third party.
          </li>
          <li className="mb-1 mx-5">
            You are the creator and owner of or have the necessary licenses,
            rights, consents, releases, and permissions to use and to aut us,
            the Services, and other users of the Services to use your
            Contributions in any manner contemplated by the Services and these
            Legal Terms.
          </li>
          <li className="mb-1 mx-5">
            You have the written consent, release, and/or permission of each and
            every identifiable individual person in your Contributions to use
            the name or likeness of each and every such identifiable individual
            person to enable inclusion and use of your Contributions any manner
            contemplated by the Services and these Legal Term.
          </li>
          <li className="mb-1 mx-5">
            Your Contributions are not false, inaccurate, or misleading.
          </li>
          <li className="mb-1 mx-5">
            Your Contributions are not unsolicited or unauthorized advertising,
            promotional materials, pyramid schemes, chain letters, spam, mass
            mailings, or other forms of solicitation.
          </li>
          <li className="mb-1 mx-5">
            Your Contributions are obscene, lewd, lascivious, filthy, violent,
            harassing, libelous, slanderous, or other wise objectionable (as
            determined by us).
          </li>
          <li className="mb-1 mx-5">
            Your Contributions do not ridicule, mock, disparage, intimidate, or
            abuse anyone.
          </li>
          <li className="mb-1 mx-5">
            Your Contributions are not used to harass or threaten (in th against
            ae ese of those terms) any other person and to promote violenc
            against as pecific person or class of people.
          </li>
          <li className="mb-1 mx-5">
            Your Contribution do not violate any applicable law, regulation, or
            rule.
          </li>
          <li className="mb-1 mx-5">
            Your Contributions do not violate the privacy or publicity rights of
            a third party.
          </li>
          <li className="mb-1 mx-5">
            Your Contributions do not violate any applicable law concerning
            child pornography, or otherwise intended to protect the health or
            well-being of minors.
          </li>
          <li className="mb-1 mx-5">
            Your Contributions do not include offensive comments that are
            connected to race, national origin, gender, sexual preference, or
            physical handicap.
          </li>
          <li className="mb-1 mx-5">
            Your Contribution do not otherwise violate, or link to material that
            violates, any provision of these Legal Terms, or any applicable law
            or regulation.
          </li>
          <br />
          Any use of the Services in violation of the foregoing violates th
          Legal Terms and ma y result in, among other things, termination or
          suspension of your rights to use the Services.
        </p>
        <h1 className="text-3xl my-10" id="9">
          9. CONTRIBUTION LICENSE
        </h1>
        <p className="text-justify my-5">
          By posting your Contributions to any part of the Services or making
          Contributions accessible to the Services by linking your account from
          the Services to any of your social networking accounts, you
          automatically grant, and you represent and warrant that you have the
          right to grant, to us an unrestricted, unlimited, irrevocable,
          perpetual, non-exclusive, transferable, royalty-free, fully-paid,
          worldwide right, and license to host, use, copy, reproduce, disclose,
          sell, resell, publish, broadcast, retitle, archive, store, cache,
          publicly perform, publicly display, reformat, translate, transmit,
          excerpt (in whole or in part), and distribute such Contributions
          (including, without limitation, your image and voice) for any purpose,
          commercial, advertising, or otherwise, and to prepare derivative works
          of, or incorporate into other works, such Contributions, and grant and
          authorize sublicenses of the foregoing. The use and distribution may
          occur in any media formats and through any media channels. <br />
          <br /> This license will apply to any form, media, or technology now
          known or hereafter developed, and includes our use of your name,
          company name, and franchise name, as applicable, and any of the
          trademarks, service marks, trade names, logos, and personal and
          commercial images you provide. You waive all moral rights in your
          Contributions, and you warrant that moral rights have not otherwise
          been asserted in your Contributions. <br />
          <br /> We do not assert any ownership over your Contributions. You
          retain full ownership of all of your Contributions and any
          intellectual property rights or other proprietary rights associated
          with your Contributions. We are not liable for any statements or
          representations in your Contributions provided by you in any area on
          the Services. You are solely responsible for your Contributions to the
          Services and you expressly agree to exonerate us from any and all
          responsibility and to refrain from any legal action against us
          regarding your Contributions. <br />
          <br /> We have the right, in our sole and absolute discretion, (1) to
          edit, redact, or otherwise change any Contributions; (2) to
          re-categorize any Contributions to place them in more appropriate
          locations on the Services; and (3) to pre-screen or delete any
          Contributions at any time and for any reason, without notice. We have
          no obligation to monitor your Contributions.
        </p>
        <h1 className="text-3xl my-10" id="10">
          10. SOCIAL MEDIA
        </h1>
        <p className="text-justify my-5">
          As part of the functionality of the Services, you may link your
          account with online accounts you have with third-party service
          providers (each such account, a "Third-Party Account") by either: (1)
          providing your Third-Party Account login information through the
          Services; or (2) allowing us to access your Third-Party Account, as is
          permitted under the applicable terms and conditions that govern your
          use of each Third-Party Account. You represent and warrant that you
          are entitled to disclose your Third-Party Account login information to
          us and/or grant us access to your Third-Party Account, without breach
          by you of any of the terms and conditions that govern your use of the
          applicable Third-Party Account, and without obligating us to pay any
          fees or making us subject to any usage limitations imposed by the
          third-party service provider of the Third-Party Account. By granting
          us access to any Third-Party Accounts, you understand that (1) we may
          access, make available, and store (if applicable) any content that you
          have provided to and stored in your Third-Party Account (the "Social
          Network Content") so that it is available on and through the Services
          via your account, including without limitation any friend lists and
          (2) we may submit to and receive from your Third-Party Account
          additional information to the extent you are notified when you link
          your account with the Third-Party Account. Depending on the
          Third-Party Accounts you choose and subject to the privacy settings
          that you have set in such Third-Party Accounts, personally
          identifiable information that you post to your Third-Party Accounts
          may be available on and through your account on the Services. Please
          note that if a Third-Party Account or associated service becomes
          unavailable or our access to such Third-Party Account is terminated by
          the third-party service provider, then Social Network Content may no
          longer be available on and through the Services. You will have the
          ability to disable the connection between your account on the Services
          and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR
          RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH
          YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH
          SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any
          Social Network Content for any purpose, including but not limited to,
          for accuracy, legality, or non-infringement, and we are not
          responsible for any Social Network Content. You acknowledge and agree
          that we may access your email address book associated with a
          Third-Party Account and your contacts list stored on your mobile
          device or tablet computer solely for purposes of identifying and
          informing you of those contacts who have also registered to use the
          Services. You can deactivate the connection between the Services and
          your Third-Party Account by contacting us using the contact
          information below or through your account settings (if applicable). We
          will attempt to delete any information stored on our servers that was
          obtained through such Third-Party Account, except the username and
          profile picture that become associated with your account.
        </p>
        <h1 className="text-3xl my-10" id="11">
          11. THIRD-PARTY WEBSITES AND CONTENT
        </h1>
        <p className="text-justify my-5">
          The Services may contain (or you may be sent via the Site) links to
          other websites ("Third-Party Websites") as well as articles,
          photographs, text, graphics, pictures, designs, music, sound, video,
          information, applications, software, and other content or items
          belonging to or originating from third parties ("Third-Party
          Content"). Such Third-Party Websites and Third-Party Content are not
          investigated, monitored, or checked for accuracy, appropriateness, or
          completeness by us, and we are not responsible for any Third-Party
          Websites accessed through the Services or any Third-Party Content
          posted on, available through, or installed from the Services,
          including the content, accuracy, offensiveness, opinions, reliability,
          privacy practices, or other policies of or contained in the
          Third-Party Websites or the Third-Party Content. Inclusion of, linking
          to, or permitting the use or installation of any Third-Party Websites
          or any Third-Party Content does not imply approval or endorsement
          thereof by us. If you decide to leave the Services and access the
          Third-Party Websites or to use or install any Third-Party Content, you
          do so at your own risk, and you should be aware these Legal Terms no
          longer govern. You should review the applicable terms and policies,
          including privacy and data gathering practices, of any website to
          which you navigate from the Services or relating to any applications
          you use or install from the Services. Any purchases you make through
          Third-Party Websites will be through other websites and from other
          companies, and we take no responsibility whatsoever in relation to
          such purchases which are exclusively between you and the applicable
          third party. You agree and acknowledge that we do not endorse the
          products or services offered on Third-Party Websites and you shall
          hold us blameless from any harm caused by your purchase of such
          products or services. Additionally, you shall hold us blameless from
          any losses sustained by you or harm caused to you relating to or
          resulting in any way from any Third-Party Content or any contact with
          Third-Party Websites.
        </p>
        <h1 className="text-3xl my-10" id="12">
          12. ADVERTISERS
        </h1>
        <p className="text-justify my-5">
          We allow advertisers to display their advertisements and other
          information in certain areas of the Services, such as sidebar
          advertisements or banner advertisements. We simply provide the space
          to place such advertisements, and we have no other relationship with
          advertisers.
        </p>
        <h1 className="text-3xl my-10" id="13">
          13. SERVICES MANAGEMENT
        </h1>
        <p className="text-justify my-5">
          We reserve the right, but not the obligation, to: (1) monitor the
          Services for violations of these Legal Terms; (2) take appropriate
          legal action against anyone who, in our sole discretion, violates the
          law or these Legal Terms, including without limitation, reporting such
          user to law enforcement authorities; (3) in our sole discretion and
          without limitation, refuse, restrict access to, limit the availability
          of, or disable (to the extent technologically feasible) any of your
          Contributions or any portion thereof; (4) in our sole discretion and
          without limitation, notice, or liability, to remove from the Services
          or otherwise disable all files and content that are excessive in size
          or are in any way burdensome to our systems; and (5) otherwise manage
          the Services in a manner designed to protect our rights and property
          and to facilitate the proper functioning of the Services.
        </p>
        <h1 className="text-3xl my-10" id="14">
          14. PRIVACY POLICY
        </h1>
        <p className="text-justify my-5">
          We care about data privacy and security.{" "}
          <span className="font-bold">
            By using the Services, you agree to be bound by our Privacy Policy,
            which is incorporated into these Legal Terms. Please be advised the
            Services are hosted in the United States. If you access the Services
            from any other region of the world with laws or other requirements
            governing personal data collection, use, or disclosure that differ
            from applicable laws in the United States, then through your
            continued use of the Services, you are transferring your data to the
            United States, and you expressly consent to have your data
            transferred to and processed in the United States. Further, we do
            not knowingly accept, request, or solicit information from children
            or knowingly market to children. Therefore, in accordance with the
            U.S. Children’s Online Privacy Protection Act, if we receive actual
            knowledge that anyone under the age of 13 has provided personal
            information to us without the requisite and verifiable parental
            consent, we will delete that information from the Services as
            quickly as is reasonably practical.
          </span>
        </p>
        <h1 className="text-3xl my-10" id="15">
          15. COPYRIGHT INFRINGEMENTS
        </h1>
        <p className="text-justify my-5">
          We respect the intellectual property rights of others. If you believe
          that any material available on or through the Services infringes upon
          any copyright you own or control, please immediately notify us using
          the contact information provided below (a "Notification"). A copy of
          your Notification will be sent to the person who posted or stored the
          material addressed in the Notification. Please be advised that
          pursuant to applicable law you may be held liable for damages if you
          make material misrepresentations in a Notification. Thus, if you are
          not sure that material located on or linked to by the Services
          infringes your copyright, you should consider first contacting an
          attorney.
        </p>
        <h1 className="text-3xl my-10" id="16">
          16. TERM AND TERMINATION
        </h1>
        <p className="text-justify my-5">
          These Legal Terms shall remain in full force and effect while you use
          the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL
          TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
          NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
          BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
          REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
          WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY
          APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
          PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT
          OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR
          SOLE DISCRETION. <br />
          <br /> If we terminate or suspend your account for any reason, you are
          prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil,
          criminal, and injunctive redress.
        </p>
        <h1 className="text-3xl my-10" id="17">
          17. MODIFICATIONS AND INTERRUPTIONS
        </h1>
        <p className="text-justify my-5">
          We reserve the right to change, modify, or remove the contents of the
          Services at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Services. <br />
          <br /> We will not be liable to you or any third party for any
          modification, price change, suspension, or discontinuance of the
          Services. We cannot guarantee the Services will be available at all
          times. We may experience hardware, software, or other problems or need
          to perform maintenance related to the Services, resulting in
          interruptions, delays, or errors. We reserve the right to change,
          revise, update, suspend, discontinue, or otherwise modify the Services
          at any time or for any reason without notice to you. You agree that we
          have no liability whatsoever for any loss, damage, or inconvenience
          caused by your inability to access or use the Services during any
          downtime or discontinuance of the Services. Nothing in these Legal
          Terms will be construed to obligate us to maintain and support the
          Services or to supply any corrections, updates, or releases in
          connection therewith.
        </p>
        <h1 className="text-3xl my-10" id="18">
          18. GOVERNING LAW
        </h1>
        <p className="text-justify my-5">
          These Legal Terms shall be governed by and defined following the laws
          of India. Twenty one Bots Infratech Pvt Ltd and yourself irrevocably
          consent that the courts of India shall have exclusive jurisdiction to
          resolve any dispute which may arise in connection with these Legal
          Terms.
        </p>
        <h1 className="text-3xl my-10" id="19">
          19. DISPUTE RESOLUTION
        </h1>
        <p className="text-justify my-5">
          You agree to irrevocably submit all disputes related to these Legal
          Terms or the legal relationship established by these Legal Terms to
          the jurisdiction of the India courts. Twenty one Bots Infratech Pvt
          Ltd shall also maintain the right to bring proceedings as to the
          substance of the matter in the courts of the country where you reside
          or, if these Legal Terms are entered into in the course of your trade
          or profession, the state of your principal place of business.
        </p>
        <h1 className="text-3xl my-10" id="20">
          20. CORRECTIONS
        </h1>
        <p className="text-justify my-5">
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </p>
        <h1 className="text-3xl my-10" id="21">
          21. DISCLAIMER
        </h1>
        <p className="text-justify my-5">
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
          AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE
          FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
          OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF,
          INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
          ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF
          ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL
          ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
          INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY
          DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND
          USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR
          SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR
          FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
          CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS,
          VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
          THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
          OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF
          ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
          TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT
          WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT
          OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
          SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
          APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL
          NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
          TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
          SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY
          MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND
          EXERCISE CAUTION WHERE APPROPRIATE.
        </p>
        <h1 className="text-3xl my-10" id="22">
          22. LIMITATIONS OF LIABILITY
        </h1>
        <p className="text-justify my-5">
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
          HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS
          OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER
          OF THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH
          PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING OR RUPEES. CERTAIN US
          STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED
          WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE
          LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS
          MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
        </p>
        <h1 className="text-3xl my-10" id="23">
          23. INDEMNIFICATION
        </h1>
        <p className="text-justify my-5">
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys’ fees and expenses,
          made by any third party due to or arising out of: (1) your
          Contributions; (2) use of the Services; (3) breach of these Legal
          Terms; (4) any breach of your representations and warranties set forth
          in these Legal Terms; (5) your violation of the rights of a third
          party, including but not limited to intellectual property rights; or
          (6) any overt harmful act toward any other user of the Services with
          whom you connected via the Services. Notwithstanding the foregoing, we
          reserve the right, at your expense, to assume the exclusive defense
          and control of any matter for which you are required to indemnify us,
          and you agree to cooperate, at your expense, with our defense of such
          claims. We will use reasonable efforts to notify you of any such
          claim, action, or proceeding which is subject to this indemnification
          upon becoming aware of it.
        </p>
        <h1 className="text-3xl my-10" id="24">
          24. USER DATA
        </h1>
        <p className="text-justify my-5">
          We will maintain certain data that you transmit to the Services for
          the purpose of managing the performance of the Services, as well as
          data relating to your use of the Services. Although we perform regular
          routine backups of data, you are solely responsible for all data that
          you transmit or that relates to any activity you have undertaken using
          the Services. You agree that we shall have no liability to you for any
          loss or corruption of any such data, and you hereby waive any right of
          action against us arising from any such loss or corruption of such
          data.
        </p>
        <h1 className="text-3xl my-10" id="25">
          25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
        </h1>
        <p className="text-justify my-5">
          Visiting the Services, sending us emails, and completing online forms
          constitute electronic communications. You consent to receive
          electronic communications, and you agree that all agreements, notices,
          disclosures, and other communications we provide to you
          electronically, via email and on the Services, satisfy any legal
          requirement that such communication be in writing. YOU HEREBY AGREE TO
          THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
          RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS
          OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You
          hereby waive any rights or requirements under any statutes,
          regulations, rules, ordinances, or other laws in any jurisdiction
          which require an original signature or delivery or retention of
          non-electronic records, or to payments or the granting of credits by
          any means other than electronic means.
        </p>
        <h1 className="text-3xl my-10" id="26">
          26. CALIFORNIA USERS AND RESIDENTS
        </h1>
        <p className="text-justify my-5">
          If any complaint with us is not satisfactorily resolved, you can
          contact the Complaint Assistance Unit of the Division of Consumer
          Services of the California Department of Consumer Affairs in writing
          at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834
          or by telephone at (800) 952-5210 or (916) 445-1254.
        </p>
        <h1 className="text-3xl my-10" id="27">
          27. MISCELLANEOUS
        </h1>
        <p className="text-justify my-5">
          These Legal Terms and any policies or operating rules posted by us on
          the Services or in respect to the Services constitute the entire
          agreement and understanding between you and us. Our failure to
          exercise or enforce any right or provision of these Legal Terms shall
          not operate as a waiver of such right or provision. These Legal Terms
          operate to the fullest extent permissible by law. We may assign any or
          all of our rights and obligations to others at any time. We shall not
          be responsible or liable for any loss, damage, delay, or failure to
          act caused by any cause beyond our reasonable control. If any
          provision or part of a provision of these Legal Terms is determined to
          be unlawful, void, or unenforceable, that provision or part of the
          provision is deemed severable from these Legal Terms and does not
          affect the validity and enforceability of any remaining provisions.
          There is no joint venture, partnership, employment or agency
          relationship created between you and us as a result of these Legal
          Terms or use of the Services. You agree that these Legal Terms will
          not be construed against us by virtue of having drafted them. You
          hereby waive any and all defenses you may have based on the electronic
          form of these Legal Terms and the lack of signing by the parties
          hereto to execute these Legal Terms.
        </p>
        <h1 className="text-3xl my-10" id="28">
          28. CONTACT US
        </h1>
        <p className="text-justify my-5">
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact us
          at: <br />
          <br />
          <h3 className="font-semibold">Twenty one Bots Infratech Pvt Ltd</h3>
          <h3 className="font-semibold">
            P/NO J-13,MAGH SECTOR , BHUJBAL FARM , CIDCO , Cidco Colony
            (Nashik), Nashik, Nashik- 422009, Maharashtra
          </h3>
          <h3 className="font-semibold">Nashik, Maharashtra 422009</h3>
          <h3 className="font-semibold">India</h3>
          <h3 className="font-semibold">Phone: +91-7798794199</h3>
          <h3 className="font-semibold">ajinkya@one2one.ai</h3>
        </p>
      </section>
    </main>
  );
};

export default Terms;
