document.getElementById("applicationForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const transactions = formData.getAll("transactions");

  const payload = {
    properties: {
      company: formData.get("businessName"),
      website: formData.get("website"),
      country: formData.get("country"),
      transaction_types: transactions.join(", "),
      volume_start: formData.get("volume_start"),
      volume_year_1: formData.get("volume_year_1"),
      volume_year_2: formData.get("volume_year_2")
    }
  };

  try {
    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_HUBSPOT_PRIVATE_APP_TOKEN"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("HubSpot submission failed");
    }

    alert("Application submitted successfully!");
    form.reset();
  } catch (error) {
    console.error(error);
    alert("There was an error submitting the application.");
  }
});
