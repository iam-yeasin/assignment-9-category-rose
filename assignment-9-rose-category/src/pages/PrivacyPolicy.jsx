import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="privacy-policy"
      style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}
    >
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> [31/12/2025]
      </p>

      <p>
        Warm Paw Pet Care (“Warm Paw,” “we,” “us,” or “our”) is committed to
        protecting your privacy and safeguarding the personal information of our
        clients and website visitors. This Privacy Policy explains how we
        collect, use, disclose, and protect your information when you visit our
        website, contact us, or use our pet care services.
      </p>

      <p>
        By using our website or services, you agree to the practices described
        in this Privacy Policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect personal and non-personal information in a variety of
        ways, including when you visit our website, submit a form, book
        services, or communicate with us.
      </p>

      <h3>a. Personal Information</h3>
      <p>Personal information may include, but is not limited to:</p>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Home or service address</li>
        <li>Emergency contact information</li>
        <li>
          Pet names, breed, age, medical needs, behavior notes, and care
          instructions
        </li>
        <li>Any other information you voluntarily provide</li>
      </ul>
      <p>
        Providing personal information is optional; however, certain services
        may not be available without it.
      </p>

      <h3>b. Automatically Collected Information</h3>
      <p>
        When you visit our website, we may automatically collect information
        such as your IP address, browser type, device type, pages visited,
        referring website, and the date and time of your visit. This information
        is used to analyze website performance and improve user experience.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide and manage pet care services</li>
        <li>To respond to inquiries and customer support requests</li>
        <li>To schedule appointments and communicate about bookings</li>
        <li>To maintain client and pet records</li>
        <li>To send service-related notifications or updates</li>
        <li>
          To improve our website, services, and overall customer experience
        </li>
        <li>To comply with legal or regulatory requirements</li>
      </ul>
      <p>We do not sell, rent, or trade your personal information.</p>

      <h2>3. Legal Basis for Processing Information</h2>
      <p>
        Depending on your location, we process personal information based on
        consent, performance of a contract, compliance with legal obligations,
        or legitimate business interests such as ensuring safety and improving
        services.
      </p>

      <h2>4. Sharing and Disclosure of Information</h2>
      <p>We may share your information only in the following situations:</p>
      <ul>
        <li>
          <strong>Service Providers:</strong> With trusted third parties who
          help operate our website, manage bookings, process payments, or
          provide communication tools.
        </li>
        <li>
          <strong>Legal Requirements:</strong> When required by law, regulation,
          or legal process.
        </li>
        <li>
          <strong>Business Protection:</strong> To protect the rights, safety,
          or property of Warm Paw Pet Care, our clients, pets, or others.
        </li>
      </ul>

      <h2>5. Cookies and Tracking Technologies</h2>
      <p>
        Our website may use cookies or similar tracking technologies to enhance
        functionality, analyze traffic, and understand visitor behavior. You can
        disable cookies through your browser settings, though this may affect
        site performance.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We take reasonable administrative, technical, and physical measures to
        protect your personal information. However, no method of transmission or
        storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain personal information only as long as necessary to provide
        services, maintain business records, comply with legal obligations, and
        resolve disputes. Information that is no longer needed is securely
        deleted or anonymized.
      </p>

      <h2>8. Your Privacy Rights</h2>
      <p>
        Depending on your location, you may have the right to request access to,
        correction of, or deletion of your personal information, withdraw
        consent, or object to certain processing activities.
      </p>

      <h2>9. Children’s Privacy</h2>
      <p>
        Warm Paw Pet Care does not knowingly collect personal information from
        children under the age of 13. If such information is discovered, it will
        be deleted promptly.
      </p>

      <h2>10. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of those websites.
      </p>

      <h2>11. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>

      <h2>12. Contact Information</h2>
      <p>
        If you have questions or concerns about this Privacy Policy, please
        contact us:
      </p>
      <p>
        <strong>Warm Paws Pet Care</strong>
        <br />
        Email: [info@WarmPaws.com]
        <br />
        Phone: [+1 234 567 890]
        <br />
        Location: [123 Pet Street, Animal City]
      </p>
    </div>
  );
};

export default PrivacyPolicy;
