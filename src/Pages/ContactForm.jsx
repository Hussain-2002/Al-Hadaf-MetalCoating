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
import { ToastProvider, Toast, ToastTitle } from "@radix-ui/react-toast";

function useToast() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  return {
    toast: (msg) => {
      setMessage(msg);
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    },
    ToastUI: (
      <ToastProvider swipeDirection="right">
        <Toast
          open={open}
          onOpenChange={setOpen}
          className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-[100]"
        >
          <ToastTitle className="text-gray-900 font-semibold">{message}</ToastTitle>
        </Toast>
      </ToastProvider>
    ),
  };
}

function ContactForm() {
  const form = useForm();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const { toast, ToastUI } = useToast();

  const scriptURL = "https://script.google.com/macros/s/AKfycbxWmoX0X6q1yPRv4_0coXAPELkXAdOAzcGquW9sXKT57u1-MOuU4m7YMTHFhkORIUnw/exec";

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // 👈 bypasses CORS locally and in production
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      toast("✅ Enquiry sent successfully! We'll reach out soon.");
      form.reset();
    } catch (error) {
      console.error(error);
      toast("⚠️ Network error. Please check your connection.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[400px] w-screen overflow-hidden">
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          poster="assets/hero-desktop.png"
        >
          <source src="assets/Contact-us.mp4" type="video/mp4" />
          <img src="assets/hero-desktop.png" alt="Contact Background" />
        </video>

        <video
          className="block md:hidden absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          poster="assets/hero-mobile.png"
        >
          <source src="assets/mobile-view-contact.mp4" type="video/mp4" />
          <img src="assets/hero-mobile.png" alt="Contact Background" />
        </video>

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
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.name")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("contact.namePlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.email")}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={t("contact.emailPlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.phone")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("contact.phonePlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="requirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.requirements")}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={t("contact.requirementsPlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? t("contact.sending") : t("contact.submit")}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {ToastUI}
      <Footer />
    </div>
  );
}

export default ContactForm;
