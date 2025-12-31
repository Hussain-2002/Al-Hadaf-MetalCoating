// src/utils/submitComment.js
export async function submitComment(formData, serviceName) {
  const url = "https://script.google.com/macros/s/AKfycbzcEoE1lcUx77df3_zl9nejh8J2jvruBd10zp80SckW8qoDVDN6WBWhgGHiY4N3GR8R0Q/exec";

  const payload = {
    name: formData.name,
    contact: formData.contact,
    message: formData.message,
    service_name: serviceName, // 🎯 This will populate "Service Chosen" column
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors", // ✅ prevents CORS blocking
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Since mode:no-cors returns opaque response
    console.log("✅ Form submitted successfully (no-cors mode)");
    return true;
  } catch (error) {
    console.error("❌ Error submitting comment:", error);
    throw error;
  }
}