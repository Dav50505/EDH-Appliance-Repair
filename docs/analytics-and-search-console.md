# Analytics and Search Console Setup

## Environment variables

- `NEXT_PUBLIC_GTM_ID`
- `GOOGLE_SITE_VERIFICATION`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `LEAD_NOTIFICATION_EMAIL`
- `REVIEW_REQUEST_FROM_EMAIL`
- `REVIEW_REQUEST_BEARER_TOKEN`

## GTM and GA4

1. Create or open the Google Tag Manager container for the site.
2. Set `NEXT_PUBLIC_GTM_ID` in the deployment environment.
3. Publish a GA4 configuration tag inside GTM.
4. Create GA4 event tags or conversions for:
   - `click_to_call`
   - `schedule_service_click`
   - `lead_submit_success`
   - `lead_submit_error`
   - `article_cta_click`
5. Use GTM preview mode to confirm that event payloads include:
   - `event_label`
   - `page_type`
   - `content_slug` when available

## Search Console

1. Verify the production domain in Google Search Console.
2. Set `GOOGLE_SITE_VERIFICATION` in the deployment environment.
3. Confirm the verification meta tag renders in the page source.
4. Submit `/sitemap.xml` after deploy.
5. Request indexing for:
   - `/resources`
   - all `/services/[slug]`
   - all `/service-areas/[slug]`

## Lead flow verification

1. Submit the booking form successfully.
2. Confirm the on-page success state appears.
3. Confirm the internal notification email is received.
4. If an email address was entered, confirm the customer confirmation email is received.
5. Confirm `lead_submit_success` appears in GTM preview.
