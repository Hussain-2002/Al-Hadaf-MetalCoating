// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Al-Hadaf Metal Coating LLC",
      description:
        "We specialize in delivering top-quality surface finishing solutions with precision and durability. Explore our wide range of services trusted by industries across UAE.",
      readMore: "Read More",
      viewWork: "View Our Work",

      services: {
        powder: "Powder Coating",
        galvanizing: "Galvanizing",
        electroplating: "Electroplating",
        tin: "Tin Plating",
        metal: "Metal Plating",
        antique: "Antique Finish",
      },

      nav: {
        home: "Home",
        services: "Services",
        about: "About Us",
        gallery: "Gallery",
        videos: "Videos",
        testimonials: "Testimonials",
        contact: "Contact Us",
      },

      header: {
        location: "Al-Hadaf Metal Coating LLC",
        announcement: "🎉 EID-MILAD-UN-NABI – Get 20% Off On All Services! 🎉",
        enquireNow: "Enquire Now",
        menu: "Menu",
      },

      footer: {
        usefulLinks: "Useful Links",
        privacy: "Privacy Policy",
        more: "More",
        contact: "Contact",
        connect: "Connect",
        changeLang: "Change Language",
        whatsapp: "WhatsApp",
        address: "Industrial Area 15 - Sharjah, UAE",
        company: "Al Hadaf Metal Coating LLC",
        rights: "All Rights Reserved.",
      },

      contact: {
        title: "Contact Us",
        getInTouch: "Get in Touch",
        name: "Name",
        namePlaceholder: "Enter your name",
        email: "Email",
        emailPlaceholder: "Enter your email",
        phone: "Contact",
        phonePlaceholder: "Enter your contact number",
        requirements: "Requirements",
        requirementsPlaceholder: "Enter your requirements",
        submit: "Submit",
        sending: "Sending...",
        success: "✅ Your message has been sent successfully!",
        error: "❌ Something went wrong, please try again.",
        failed: "❌ Failed to send message.",
      },
    },
  },

  ar: {
    translation: {
      welcome: "مرحبا بكم في الهدف لطلاء المعادن ذ.م.م",
      description:
        "نحن متخصصون في تقديم حلول تشطيب الأسطح عالية الجودة بدقة ومتانة. اكتشف مجموعتنا الواسعة من الخدمات الموثوقة من قبل الصناعات عبر الإمارات.",
      readMore: "اقرأ المزيد",
      viewWork: "شاهد أعمالنا",

      services: {
        powder: "الطلاء بالمسحوق",
        galvanizing: "الجلفنة",
        electroplating: "الطلاء الكهربائي",
        tin: "طلاء بالقصدير",
        metal: "طلاء المعادن",
        antique: "تشطيب عتيق",
      },

      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "معلومات عنا",
        gallery: "معرض الصور",
        videos: "مقاطع الفيديو",
        testimonials: "آراء العملاء",
        contact: "اتصل بنا",
      },

      header: {
        location: "الهدف لطلاء المعادن ذ.م.م",
        announcement: "🎉 المولد النبوي الشريف – خصم 20٪ على جميع الخدمات! 🎉",
        enquireNow: "استفسر الآن",
        menu: "القائمة",
      },

      footer: {
        usefulLinks: "روابط مفيدة",
        privacy: "سياسة الخصوصية",
        more: "المزيد",
        contact: "اتصل",
        connect: "تواصل",
        changeLang: "تغيير اللغة",
        whatsapp: "واتساب",
        address: "المنطقة الصناعية 15 - الشارقة، الإمارات",
        company: "شركة الهدف لطلاء المعادن ذ.م.م",
        rights: "جميع الحقوق محفوظة.",
      },

      contact: {
        title: "اتصل بنا",
        getInTouch: "تواصل معنا",
        name: "الاسم",
        namePlaceholder: "أدخل اسمك",
        email: "البريد الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        phone: "رقم الاتصال",
        phonePlaceholder: "أدخل رقم هاتفك",
        requirements: "المتطلبات",
        requirementsPlaceholder: "أدخل متطلباتك",
        submit: "إرسال",
        sending: "جارٍ الإرسال...",
        success: "✅ تم إرسال رسالتك بنجاح!",
        error: "❌ حدث خطأ، حاول مرة أخرى.",
        failed: "❌ فشل في إرسال الرسالة.",
      },
    },
  },

  hi: {
    translation: {
      welcome: "अल-हदफ मेटल कोटिंग एलएलसी में आपका स्वागत है",
      description:
        "हम उच्च गुणवत्ता वाली सतह फिनिशिंग समाधान प्रदान करने में विशेषज्ञ हैं। सटीकता और स्थायित्व के साथ। पूरे यूएई में उद्योगों द्वारा विश्वसनीय हमारी विस्तृत सेवाओं का अन्वेषण करें।",
      readMore: "और पढ़ें",
      viewWork: "हमारा काम देखें",

      services: {
        powder: "पाउडर कोटिंग",
        galvanizing: "गैल्वनाइजिंग",
        electroplating: "इलेक्ट्रोप्लेटिंग",
        tin: "टिन प्लेटिंग",
        metal: "मेटल प्लेटिंग",
        antique: "एंटीक फिनिश",
      },

      nav: {
        home: "होम",
        services: "सेवाएं",
        about: "हमारे बारे में",
        gallery: "गैलरी",
        videos: "वीडियो",
        testimonials: "प्रशंसापत्र",
        contact: "संपर्क करें",
      },

      header: {
        location: "अल-हदफ मेटल कोटिंग एलएलसी",
        announcement: "🎉 ईद-मिलाद-उन-नबी – सभी सेवाओं पर 20% की छूट! 🎉",
        enquireNow: "अभी पूछताछ करें",
        menu: "मेन्यू",
      },

      footer: {
        usefulLinks: "उपयोगी लिंक",
        privacy: "गोपनीयता नीति",
        more: "अधिक",
        contact: "संपर्क",
        connect: "जुड़ें",
        changeLang: "भाषा बदलें",
        whatsapp: "व्हाट्सएप",
        address: "इंडस्ट्रियल एरिया 15 - शारजाह, यूएई",
        company: "अल हदफ मेटल कोटिंग एलएलसी",
        rights: "सभी अधिकार सुरक्षित।",
      },

      contact: {
        title: "संपर्क करें",
        getInTouch: "हमसे संपर्क करें",
        name: "नाम",
        namePlaceholder: "अपना नाम दर्ज करें",
        email: "ईमेल",
        emailPlaceholder: "अपना ईमेल दर्ज करें",
        phone: "संपर्क",
        phonePlaceholder: "अपना फ़ोन नंबर दर्ज करें",
        requirements: "आवश्यकताएँ",
        requirementsPlaceholder: "अपनी आवश्यकताएँ दर्ज करें",
        submit: "सबमिट",
        sending: "भेजा जा रहा है...",
        success: "✅ आपका संदेश सफलतापूर्वक भेजा गया!",
        error: "❌ कुछ गलत हो गया, कृपया पुनः प्रयास करें।",
        failed: "❌ संदेश भेजने में विफल।",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
