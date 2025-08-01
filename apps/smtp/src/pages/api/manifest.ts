import { createManifestHandler } from "@saleor/app-sdk/handlers/next";
import { AppManifest } from "@saleor/app-sdk/types";
import { withSpanAttributes } from "@saleor/apps-otel/src/with-span-attributes";

import packageJson from "../../../package.json";

export default withSpanAttributes(
  createManifestHandler({
    async manifestFactory({ appBaseUrl }) {
      const iframeBaseUrl = process.env.APP_IFRAME_BASE_URL ?? appBaseUrl;
      const apiBaseURL = process.env.APP_API_BASE_URL ?? appBaseUrl;

      const manifest: AppManifest = {
        about:
          "SMTP App is a Saleor integration that allows you to send emails using your own SMTP server.",
        appUrl: iframeBaseUrl,
        author: "Saleor Commerce",
        brand: {
          logo: {
            default: `${apiBaseURL}/logo.png`,
          },
        },
        dataPrivacyUrl: "https://saleor.io/legal/privacy/",
        extensions: [
          /**
           * Optionally, extend Dashboard with custom UIs
           * https://docs.saleor.io/developer/extending/apps/extending-dashboard-with-apps
           */
        ],
        homepageUrl: "https://github.com/saleor/apps",
        id: "saleor.app.smtp",
        name: "SMTP",
        permissions: ["MANAGE_ORDERS", "MANAGE_USERS", "MANAGE_GIFT_CARD"],
        requiredSaleorVersion: ">=3.19 <4",
        supportUrl: "https://github.com/saleor/apps/discussions",
        tokenTargetUrl: `${apiBaseURL}/api/register`,
        version: packageJson.version,
      };

      return manifest;
    },
  }),
);
