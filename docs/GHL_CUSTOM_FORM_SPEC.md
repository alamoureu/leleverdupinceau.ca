# Go High Level – Custom Form Replacement Spec

Use this with ChatGPT (or GHL support) to align a **custom on-site form** with your Go High Level forms so data lands in the same place as the current iframe forms.

---

## 1. Current setup (iframe forms)

We embed two GHL forms via iframe (Marketermania / Lead Connector):

| Language | Form ID | Embed URL |
|----------|---------|-----------|
| French (FR) | `OjKxDBP4Q9vOx8pOvn7d` | `https://link.marketermania.com/widget/form/OjKxDBP4Q9vOx8pOvn7d` |
| English (EN) | `odZg4CGs76Lj7I4hoSa3` | `https://link.marketermania.com/widget/form/odZg4CGs76Lj7I4hoSa3` |

- Embed script: `https://link.marketermania.com/js/form_embed.js`
- Form titles in GHL: "Website Form FR" / "Website Form EN"

We need the **custom form** to send data into the **same** forms/workflows/contacts as these two forms (or equivalent pipelines in GHL).

---

## 2. GHL field mapping (from actual iframe submission)

From a real GHL form submission, the **exact** keys GHL expects:

### Standard contact fields (formData)

| GHL key       | Example value           | Our form field |
|---------------|-------------------------|----------------|
| `first_name`  | "Antoine Lamoureux"      | full name (Nom, Prénom) |
| `phone`       | "+15142458152"          | phone (Téléphone) |
| `email`       | "tony2002lol@gmail.com" | email |
| `address`     | "4044 Avenue Marcil"    | address (Adresse, Code postal) → GHL stores as `address_1` |

### Custom fields (GHL custom field IDs)

| GHL custom field ID     | Meaning                  | Values (FR)                    | Our form field |
|-------------------------|--------------------------|-------------------------------|----------------|
| `6LFScGe0fXKzH5ZI3x4S`  | Painting type (radio)    | "Peinture intérieure" / "Peinture extérieure" | paintingType |
| `xGRSLO7DGNCfFO4KZn5T`  | Project description     | free text                     | projectDetails (Description du projet) |

### Other keys GHL receives (iframe)

- `formId`: `"OjKxDBP4Q9vOx8pOvn7d"` (FR) or `"odZg4CGs76Lj7I4hoSa3"` (EN)
- `location_id`: `"jv3Oww982uHzfUFk9Ize"`
- `terms_and_conditions`: full consent text (optional to send from custom form)

Our custom form collects: name, email, phone, address, projectDetails, paintingType (interior/exterior), consent. We map these to the GHL keys above.

---

## 3. Webhook payload (custom form → GHL)

- **Webhook URL (inbound – used by custom form):**  
  `https://services.leadconnectorhq.com/hooks/jv3Oww982uHzfUFk9Ize/webhook-trigger/bde68bea-be14-4bf6-88e8-13acd1e05bdb`

- **Method:** POST  
- **Headers:** `Content-Type: application/json`  
- **Body (JSON)** – must match GHL "Create Contact" placeholders (`{{contact.name}}`, `{{contact.phone}}`, `{{contact.email}}`, `{{contact.description_du_projet}}`):
  - `name` and `first_name` (full name)
  - `phone`, `email`, `address`, `address_1`
  - `description_du_projet` (project description – same as custom field value)
  - `6LFScGe0fXKzH5ZI3x4S` → "Peinture intérieure" or "Peinture extérieure" (localized)
  - `xGRSLO7DGNCfFO4KZn5T` → project description text
  - `formId`, `location_id`, `source`, `submittedAt`
  - Nested `contact` object with the same fields so either top-level or `body.contact.xxx` mapping works. No null/undefined; empty strings for missing values.

---

## 4. Summary for ChatGPT / GHL

- **Current:** Two GHL forms embedded by iframe (FR form ID `OjKxDBP4Q9vOx8pOvn7d`, EN form ID `odZg4CGs76Lj7I4hoSa3`), location_id `jv3Oww982uHzfUFk9Ize`. Submission response shows exact `formData` and `contact` structure above.
- **Goal:** Replace iframe with a custom form that sends the same field keys and custom field IDs so contacts and workflows stay consistent.
- **We have:** Section 2 = exact GHL field mapping from a real submission. Section 3 = webhook URL and required payload shape. We will send `first_name`, `phone`, `email`, `address`/`address_1`, `6LFScGe0fXKzH5ZI3x4S` (painting type), `xGRSLO7DGNCfFO4KZn5T` (project description), `formId`, `location_id`.
- **Open point:** Does the **inbound webhook** accept this same payload (including custom field IDs as top-level keys), or does it expect a different structure (e.g. nested `customFields`)? If different, what exact JSON should we POST?

---

## 5. Troubleshooting

### Error: "Contact could not be Created/Updated as no value was found for any of the mapped fields"

This means the **Create Contact** action is reading from a source that has no data (e.g. "Contact" or a merge field that’s empty). The webhook payload has the values; Create Contact must use the **Inbound Webhook trigger** as the source.

**Fix:**

1. Open the workflow and click the **Create Contact** action that’s failing.
2. For **each mapped field** (Full Name, Phone, Email, Address, etc.):
   - Click the field’s value / mapping.
   - In the merge field or variable picker, **do not** choose "Contact" or "Workflow contact".
   - Choose the **webhook trigger** data, for example:
     - **Trigger** → **Inbound Webhook** → **Body** → **name** (for Full Name)
     - **Trigger** → **Inbound Webhook** → **Body** → **phone**
     - **Trigger** → **Inbound Webhook** → **Body** → **email**
     - **Trigger** → **Inbound Webhook** → **Body** → **address** (or **address_1**)
   - If you don’t see "Body", look for **Payload**, **Custom Data**, **Request body**, or **Input** under the Inbound Webhook trigger, then pick **name**, **phone**, **email**, **address** from that.
3. Save the action and run the workflow again.

Our payload sends these at the **top level** of the JSON body: `name`, `first_name`, `phone`, `email`, `address`, `address_1`. So in GHL the path is usually **Trigger → Inbound Webhook → Body → name** (and same for phone, email, address). If your trigger stores the body under another key (e.g. `payload` or `contact`), use that key instead of `Body`.

---

### Email shows empty (null) for name, phone, email

If the confirmation email or internal notification shows empty values for `{{contact.name}}`, `{{contact.phone}}`, `{{contact.email}}`, the email step is not getting data from the webhook. Fix it in GHL as follows.

### Option A – Use webhook payload in the email (recommended)

**Do not use** `{{contact.name}}` in the email. Use the **Inbound Webhook trigger** merge fields instead, so the email reads straight from the payload we send.

In the **Send Email** (or Send Internal Notification) step, in the merge field picker, choose:

- **Trigger** → **Inbound Webhook** → **Body** → **name** (for full name)
- **Trigger** → **Inbound Webhook** → **Body** → **phone**
- **Trigger** → **Inbound Webhook** → **Body** → **email**
- **Trigger** → **Inbound Webhook** → **Body** → **address**
- **Trigger** → **Inbound Webhook** → **Body** → **description_de_la_job**
- **Trigger** → **Inbound Webhook** → **Body** → **service_demand**

If your builder labels it differently, look for: **Webhook**, **Webhook payload**, **Request body**, or **Custom data** – then pick **name**, **phone**, **email**, etc. from that object.

**Example:**  
Subject: `NEW LEAD - [Trigger → Inbound Webhook → Body → name]`  
Body:  
`Name: [Body → name]`  
`Phone: [Body → phone]`  
`Email: [Body → email]`

Once these point to the trigger body, the email will no longer be empty.

### Option B – Fix “Create Contact” so `{{contact}}` is filled

If you prefer to keep using `{{contact.name}}`, `{{contact.phone}}`, etc., then **Create Contact** must get its values from the webhook, not from an existing contact.

In the **Create Contact** step, for each field:

- **Full Name** → set source to **Trigger** → **Inbound Webhook** → **Body** → **name** (or **first_name**)
- **Phone** → **Trigger** → **Inbound Webhook** → **Body** → **phone**
- **Email** → **Trigger** → **Inbound Webhook** → **Body** → **email**
- **Address** → **Trigger** → **Inbound Webhook** → **Body** → **address** (or **address_1**)

If any field is mapped to “Contact” or “Workflow contact” (the contact being created), it will be empty at that moment. Every field must come from **Trigger → Inbound Webhook → Body**.

### Quick check

1. Submit the custom form once, then in GHL open the workflow run (or webhook log) and confirm the **trigger body** contains `name`, `phone`, `email` with real values.
2. If the body is correct but the email is still empty, the email step is not using that body – switch to **Option A** (use trigger body in the email).

---

## 5. (Legacy) What we need from Go High Level

1. **Confirmation** that the custom form should submit to:
   - the existing webhook above, or  
   - a different webhook/API endpoint you specify.

2. **Exact payload format** GHL expects:
   - Required and optional keys.
   - Any IDs (e.g. form ID, location ID, pipeline ID) we must send.
   - How to indicate language (FR vs EN) if needed (e.g. field name and values).

3. **Field mapping** from our names to GHL contact/opportunity fields:
   - Our: `name`, `email`, `phone`, `address`, `projectDetails`, `paintingType`, `source`, `submittedAt`, `language`.
   - GHL: contact fields, custom fields, and any workflow/trigger keys.

4. **reCAPTCHA / security:**  
   If the iframe forms use reCAPTCHA or other server-side checks, how should we send or verify that from our custom form (e.g. token in payload, or no change needed)?

---

## 5. Summary for ChatGPT / GHL

- **Current:** Two GHL forms embedded by iframe (FR form ID `OjKxDBP4Q9vOx8pOvn7d`, EN form ID `odZg4CGs76Lj7I4hoSa3`).
- **Goal:** Replace iframe with a custom form on our site that sends the same (or equivalent) data into Go High Level so contacts and workflows stay consistent.
- **We have:** A custom form with the fields in section 2 and an existing webhook (section 3). We can change payload shape and endpoint if GHL requires it.
- **We need:** The exact endpoint, payload format, and field mapping so the custom form “matches the data in Go High Level” and behaves like the current iframe forms.
