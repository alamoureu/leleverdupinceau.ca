/**
 * Send form data to GoHighLevel inbound webhook
 * @param {Object} formData - The form data to send
 * @returns {Promise<Response>} - The fetch response
 */
export async function sendToGoHighLevel(formData) {
  const WEBHOOK_URL =
    'https://services.leadconnectorhq.com/hooks/jv3Oww982uHzfUFk9Ize/webhook-trigger/ef0194d2-00e9-4e31-95e5-4399c1f6d883';

  // Format data matching GoHighLevel contact field keys
  // Field names must match {{contact.field_name}} format
  const payload = {
    name: formData.name || '',
    email: formData.email || '',
    phone: formData.phone || formData.tel || '',
    address1: formData.address || '',
    city: '', // Can be parsed from address if needed
    postal_code: '', // Can be parsed from address if needed
    paintingType:
      formData.paintingType ||
      formData.typePeinture ||
      formData.projectType ||
      '',
    projectDetails:
      formData.projectDetails ||
      formData.message ||
      formData.description ||
      '',
    source: 'Website Form',
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Error sending to GoHighLevel webhook:', error);
    throw error;
  }
}

