import React from "react";
import Layout from "./layout";

function TermsOfUse() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          <p className="font-semibold mb-2">Legal</p>
          <p className="font-semibold mb-2">Copyright Issues</p>
          <p className="mb-4">
            Content on the Crescenz website may be protected by U.S. and
            international copyright laws. Reproduction or transmission beyond
            fair use requires written permission from the copyright owners.
          </p>
          <p className="font-semibold mb-2">Disclaimers</p>
          <p className="mb-4">
            This website provides information for visitor convenience. Crescenz
            strives for accuracy but cannot guarantee the reliability of
            third-party information. Crescenz is not responsible for actions
            taken based on this information or for any resulting consequences.
          </p>
          {/* <p className="mb-4">External Links</p> */}
          <p className="mb-4">
            Crescenz’s website may include links to external sites maintained by
            other organizations. These links are provided to offer relevant
            information to visitors. The presence of a link does not imply
            endorsement by Crescenz. Links may be removed or updated at any time
            without notice.
          </p>
          <p className="font-semibold mb-2">External Links</p>
          <p className="mb-4">
            If issues arise with linked external sites, please contact the
            respective organizations. Crescenz is not responsible for the
            content or functionality of external websites.
          </p>
          {/* <p className="mb-4">
            Additionally, links may be provided for informational purposes where
            the linked external website offers useful information or is required
            or authorized by law. Gradeage reserves the right to determine
            whether the external website aligns with the purpose of this web
            portal or serves the specified informational needs.
          </p>
          <p className="mb-4">
            Please note that inclusion of a hypertext link to an external
            website does not constitute an endorsement of any product, service,
            or organization referenced therein, nor does it imply agreement with
            any views expressed on the linked website. Hypertext links to
            external websites and pages may be removed or replaced at the
            discretion of Gradeage, without prior notice.
          </p>
          <p className="mb-4">
            If you encounter any issues regarding the format, accuracy,
            timeliness, or completeness of a linked external website, please
            contact the organization responsible for that website. Gradeage does
            not exercise control over, nor assume responsibility for, the
            content of linked external websites or pages.
          </p> */}
        </div>
      </div>
    </Layout>
  );
}

export default TermsOfUse;
