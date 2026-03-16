# Review Request Process

## Purpose

Send a follow-up review request email after a completed repair visit without exposing a public admin interface.

## API endpoint

- `POST /api/review-request`
- Authorization header required:
  - `Authorization: Bearer <REVIEW_REQUEST_BEARER_TOKEN>`

## Payload

```json
{
  "customerName": "Jane Doe",
  "customerEmail": "jane@example.com",
  "serviceType": "Refrigerator Repair",
  "city": "Folsom",
  "completedAt": "2025-02-03"
}
```

## Intended callers

- Manual internal operations
- Zapier or Make automation
- Future repair-completion workflow

## Expected behavior

1. Validate the bearer token.
2. Validate the JSON payload.
3. Send a branded thank-you email with the Google review link.
4. Include a fallback call/text link in case the customer still needs help.

## Operational notes

- Use `REVIEW_REQUEST_FROM_EMAIL` as the sender when configured.
- Keep the Google review link pointed at `siteConfig.googleReviewUrl`.
- If the email provider fails, the endpoint returns `500` and should be retried by the caller.
