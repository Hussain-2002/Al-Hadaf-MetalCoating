// ✅ src/utils/submitComment.js
export const submitComment = async (formData, serviceName) => {
  try {
    const payload = {
      ...formData,
      service_name: serviceName,
    };

    const response = await fetch(
  "https://script.google.com/macros/s/AKfycbyZFFgbYcmE2e_jScvadmkDdeR4C3myKjkDreRbdIAAzUGYzIbdZYvV1Nlj1QqZNr0V/exec",
  {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }
);


    const result = await response.json();
    return result;
  } catch (error) {
    console.error("❌ Error submitting comment:", error);
    throw error;
  }
};
