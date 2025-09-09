// src/Pages/ContactForm.jsx
import { useForm } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

function ContactForm() {
  const form = useForm()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const onSubmit = async (data) => {
    setLoading(true)
    setSuccess(null)
    try {
      const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL_HERE", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })

      const result = await response.json()
      if (result.status === "success") {
        setSuccess("✅ Your message has been sent successfully!")
        form.reset()
      } else {
        setSuccess("❌ Something went wrong, please try again.")
      }
    } catch (error) {
      console.error(error)
      setSuccess("❌ Failed to send message.")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[400px] w-screen overflow-hidden">
        {/* Desktop Background */}
        <div
          className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('assets/hero-desktop.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Mobile Background */}
        <div
          className="block md:hidden absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('assets/hero-mobile.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Overlay with Title (same opacity as LandingPage) */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gray-100">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            Get in Touch
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
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
                    <FormLabel>Contact</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your contact number"
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
                    <FormLabel>Requirements</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your requirements"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Sending..." : "Submit"}
              </Button>
            </form>
          </Form>
          {success && <p className="mt-4 text-center text-sm">{success}</p>}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactForm
