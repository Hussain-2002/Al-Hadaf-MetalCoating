// src/Pages/ContactForm.jsx
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const form = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess(null);
    try {
      const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL_HERE", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      if (result.status === "success") {
        setSuccess(t("contact.success"));
        form.reset();
      } else {
        setSuccess(t("contact.error"));
      }
    } catch (error) {
      console.error(error);
      setSuccess(t("contact.failed"));
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[400px] w-screen overflow-hidden">
        {/* Desktop Video with Fallback Poster */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          poster="assets/hero-desktop.png"
        >
          <source src="assets/Contact-us.mp4" type="video/mp4" />
          {/* Fallback Image if video tag not supported */}
          <img
            src="assets/hero-desktop.png"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Mobile Video with Fallback Poster */}
        <video
          className="block md:hidden absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          poster="assets/hero-mobile.png"
        >
          <source src="assets/mobile-view-contact.mp4" type="video/mp4" />
          {/* Fallback Image if video tag not supported */}
          <img
            src="assets/hero-mobile.png"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Overlay with Title */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {t("contact.title")}
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gray-100">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            {t("contact.getInTouch")}
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.name")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.namePlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.email")}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t("contact.emailPlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Contact */}
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.phone")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.phonePlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Requirements */}
              <FormField
                control={form.control}
                name="requirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.requirements")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("contact.requirementsPlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? t("contact.sending") : t("contact.submit")}
              </Button>
            </form>
          </Form>
          {success && <p className="mt-4 text-center text-sm">{success}</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactForm;
