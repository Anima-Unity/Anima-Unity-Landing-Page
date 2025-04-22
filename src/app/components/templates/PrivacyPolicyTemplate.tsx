// app/privacy-policy/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Anima Unity",
  description: "Our commitment to protecting your privacy at Anima Unity.",
};

export default function PrivacyPolicyTemplate() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At Anima Unity, we are committed to protecting your privacy. This Privacy Policy
        outlines how your personal information is collected, used, and shared when you use
        our platform.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect information such as your name, email address, and usage data when
        you interact with our service.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Information</h2>
      <p className="mb-4">
        Your data helps us improve our services, provide support, and communicate updates
        or offers.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing & Disclosure</h2>
      <p className="mb-4">
        We do not sell your personal information. We only share data with third-party
        services necessary to operate our platform (e.g., analytics, hosting).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your information by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Contact Us</h2>
      <p>
        If you have questions about this policy, email us at{" "}
        <a
          href="mailto:support@animaunity.com"
          className="text-blue-500 underline"
        >
          support@animaunity.com
        </a>.
      </p>
    </main>
  );
}