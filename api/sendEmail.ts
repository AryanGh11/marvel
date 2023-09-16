"use client";

import { apiUrl } from "./apiUrl";

export default function sendEmail(
  to?: string,
  subject?: string,
  text?: string
) {
  const path = "/email";
  const data = {
    to: to,
    subject: subject,
    text: text,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const url = `${apiUrl}${path}`;
  async function postData() {
    try {
      const response = await fetch(url, options);
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return postData();
}
