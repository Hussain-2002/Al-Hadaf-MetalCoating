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

      about: {
        title: "About Us",
        description:
          "We are committed to delivering high-quality services with innovation and passion.",
        ourTeam: "Our Team",
        team: {
          ceo: "Chief Executive Officer",
          manager: "Operations Manager",
          engineer: "Lead Engineer",
          designer: "Creative Designer",
        },
        short1:
          "Al Hadaf Metal Coating L.L.C was established on 11.09.2022. We offer a variety of the latest plating solutions with high-quality and budget-friendly options.",
        short2:
          "Our engineers always keep an eye on the latest trends and prioritize customer satisfaction, making us a trusted name worldwide.",
        short3:
          "The interests of our customers are always top priority, and we hope you enjoy our products as much as we enjoy providing them.",
        experience: "12+ Years of Experience in Metal Coating",
      },

      serviceSection: {
        heading: "Our Services",
        description: "Explore the high-quality services we offer.",
        viewMore: "View More",
        items: {
          powder: {
            title: "Powder Coating",
            description: "High-quality powder coating for all metals.",
            shortDesc: "Durable and long-lasting finish.",
          },
          galvanizing: {
            title: "Galvanizing",
            description: "Protect your metal from corrosion.",
            shortDesc: "Zinc coating for long-term durability.",
          },
          electroplating: {
            title: "Electroplating",
            description: "Enhance metal surfaces with a sleek finish.",
            shortDesc: "Perfect for industrial and decorative use.",
          },
          tin: {
            title: "Tin Plating",
            description: "Corrosion-resistant tin plating solutions.",
            shortDesc: "Safe and hygienic for food-grade metals.",
          },
          goldsilver: {
            title: "Gold & Silver Plating",
            description: "Luxury metal plating for premium products.",
            shortDesc: "High-quality precious metal finish.",
          },
          metal: {
            title: "Metal Plating",
            description: "Custom metal plating services.",
            shortDesc: "Tailored for your specific project needs.",
          },
          antique: {
            title: "Antique Finish",
            description: "Give metals a timeless look.",
            shortDesc: "Classic antique style for decorative purposes.",
          },
        },
      },
      // 🔹 Service Page (new)
      servicePage: {
        heading: "Surface Alchemy — Premium Finishes",
        sub: "Choose a service to learn more about our capabilities.",
        quoteBtn: "Get Quote",
    },
    // 🔹 Powder Coating Page (new)
      powderPage: {
        heading: "Powder Coating",
        tagline: "Durable. Vibrant. Long-lasting — a coating revolution.",
        tabs: {
          gallery: "Gallery",
          video: "Video",
          comment: "Comment",
        },
        tooltips: {
          gallery: "Work done by us",
          video: "Experience the process with your own eyes",
          comment: "Leave a comment or enquiry",
        },
        form: {
          title: "Leave a Comment or Enquiry",
          name: "Your Name",
          contact: "Contact Details",
          message: "Your Comment or Enquiry",
          submit: "Send Message",
          success: "Your message has been sent successfully!",
        },
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

      about: {
        title: "معلومات عنا",
        description: "نحن ملتزمون بتقديم خدمات عالية الجودة مع الابتكار والشغف.",
        ourTeam: "فريقنا",
        team: {
          ceo: "المدير التنفيذي",
          manager: "مدير العمليات",
          engineer: "المهندس الرئيسي",
          designer: "المصمم الإبداعي",
        },
        short1:
          "تأسست شركة الهدف لطلاء المعادن ذ.م.م في 11.09.2022. نحن نقدم مجموعة متنوعة من أحدث حلول الطلاء بجودة عالية وأسعار مناسبة.",
        short2:
          "مهندسونا يواكبون دائمًا أحدث الاتجاهات ويضعون رضا العملاء أولاً، مما يجعلنا اسمًا موثوقًا به عالميًا.",
        short3:
          "مصالح عملائنا دائمًا أولوية قصوى، ونأمل أن تستمتعوا بمنتجاتنا كما نستمتع بتقديمها لكم.",
        experience: "أكثر من 12 عامًا من الخبرة في طلاء المعادن",
      },

      serviceSection: {
        heading: "خدماتنا",
        description: "اكتشف الخدمات عالية الجودة التي نقدمها.",
        viewMore: "عرض المزيد",
        items: {
          powder: {
            title: "الطلاء بالمسحوق",
            description: "طلاء عالي الجودة لجميع المعادن.",
            shortDesc: "تشطيب متين وطويل الأمد.",
          },
          galvanizing: {
            title: "الجلفنة",
            description: "حماية المعادن من التآكل.",
            shortDesc: "طلاء الزنك للمتانة الطويلة.",
          },
          electroplating: {
            title: "الطلاء الكهربائي",
            description: "تحسين أسطح المعادن بمظهر أنيق.",
            shortDesc: "مثالي للاستخدام الصناعي والزخرفي.",
          },
          tin: {
            title: "طلاء بالقصدير",
            description: "حلول طلاء مقاومة للتآكل.",
            shortDesc: "آمن وصحي للمعادن الغذائية.",
          },
          goldsilver: {
            title: "طلاء الذهب والفضة",
            description: "طلاء المعادن الفاخرة للمنتجات المميزة.",
            shortDesc: "تشطيب عالي الجودة للمعادن الثمينة.",
          },
          metal: {
            title: "طلاء المعادن",
            description: "خدمات طلاء المعادن المخصصة.",
            shortDesc: "مصمم لمتطلبات مشروعك الخاصة.",
          },
          antique: {
            title: "تشطيب عتيق",
            description: "منح المعادن مظهرًا خالدًا.",
            shortDesc: "نمط كلاسيكي لأغراض الزينة.",
          },
        },
      },
      servicePage: {
        heading: "سحر السطح — تشطيبات فاخرة",
        sub: "اختر خدمة لمعرفة المزيد عن قدراتنا.",
        quoteBtn: "احصل على عرض سعر",
      },
      powderPage: {
        heading: "الطلاء بالمسحوق",
        tagline: "متين. نابض بالحياة. طويل الأمد — ثورة في الطلاء.",
        tabs: {
          gallery: "المعرض",
          video: "فيديو",
          comment: "تعليق",
        },
        tooltips: {
          gallery: "الأعمال التي قمنا بها",
          video: "شاهد العملية بعينيك",
          comment: "اترك تعليقًا أو استفسارًا",
        },
        form: {
          title: "اترك تعليقًا أو استفسارًا",
          name: "اسمك",
          contact: "معلومات الاتصال",
          message: "تعليقك أو استفسارك",
          submit: "إرسال الرسالة",
          success: "تم إرسال رسالتك بنجاح!",
        },
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

      about: {
        title: "हमारे बारे में",
        description:
          "हम उच्च गुणवत्ता वाली सेवाएं नवाचार और जुनून के साथ प्रदान करने के लिए प्रतिबद्ध हैं।",
        ourTeam: "हमारी टीम",
        team: {
          ceo: "मुख्य कार्यकारी अधिकारी",
          manager: "ऑपरेशन्स मैनेजर",
          engineer: "लीड इंजीनियर",
          designer: "क्रिएटिव डिज़ाइनर",
        },
        short1:
          "अल हदफ मेटल कोटिंग एल.एल.सी की स्थापना 11.09.2022 को हुई थी। हम उच्च गुणवत्ता और बजट-अनुकूल नवीनतम प्लेटिंग समाधान प्रदान करते हैं।",
        short2:
          "हमारे इंजीनियर नवीनतम रुझानों पर नज़र रखते हैं और ग्राहक संतुष्टि को प्राथमिकता देते हैं, जिससे हम विश्व स्तर पर एक विश्वसनीय नाम बन गए हैं।",
        short3:
          "ग्राहकों की रुचि हमेशा हमारी शीर्ष प्राथमिकता है, और हमें आशा है कि आप हमारे उत्पादों का उतना ही आनंद लेंगे जितना हम उन्हें उपलब्ध कराते हैं।",
        experience: "धातु कोटिंग में 12+ वर्षों का अनुभव",
      },

      serviceSection: {
        heading: "हमारी सेवाएं",
        description: "उच्च गुणवत्ता वाली सेवाओं का अन्वेषण करें जो हम प्रदान करते हैं।",
        viewMore: "और देखें",
        items: {
          powder: {
            title: "पाउडर कोटिंग",
            description: "सभी धातुओं के लिए उच्च गुणवत्ता वाली पाउडर कोटिंग।",
            shortDesc: "टिकाऊ और दीर्घकालिक फिनिश।",
          },
          galvanizing: {
            title: "गैल्वनाइजिंग",
            description: "अपने धातु को जंग से बचाएँ।",
            shortDesc: "दीर्घकालिक टिकाऊपन के लिए जिंक कोटिंग।",
          },
          electroplating: {
            title: "इलेक्ट्रोप्लेटिंग",
            description: "धातु की सतहों को चिकना फिनिश दें।",
            shortDesc: "औद्योगिक और सजावटी उपयोग के लिए उपयुक्त।",
          },
          tin: {
            title: "टिन प्लेटिंग",
            description: "जंग-प्रतिरोधी टिन प्लेटिंग समाधान।",
            shortDesc: "फूड-ग्रेड धातुओं के लिए सुरक्षित और स्वच्छ।",
          },
          goldsilver: {
            title: "गोल्ड और सिल्वर प्लेटिंग",
            description: "प्रीमियम उत्पादों के लिए लक्ज़री धातु प्लेटिंग।",
            shortDesc: "उच्च गुणवत्ता वाला कीमती धातु फिनिश।",
          },
          metal: {
            title: "मेटल प्लेटिंग",
            description: "कस्टम धातु प्लेटिंग सेवाएं।",
            shortDesc: "आपकी विशिष्ट परियोजना आवश्यकताओं के लिए तैयार।",
          },
          antique: {
            title: "एंटीक फिनिश",
            description: "धातुओं को कालातीत रूप दें।",
            shortDesc: "सजावटी उद्देश्यों के लिए क्लासिक एंटीक स्टाइल।",
          },
        },
      },
      servicePage: {
        heading: "सतह का जादू — प्रीमियम फिनिश",
        sub: "हमारी क्षमताओं के बारे में अधिक जानने के लिए एक सेवा चुनें।",
        quoteBtn: "कोटेशन प्राप्त करें",
      },
      powderPage: {
        heading: "पाउडर कोटिंग",
        tagline: "टिकाऊ। चमकदार। लंबे समय तक चलने वाला — एक कोटिंग क्रांति।",
        tabs: {
          gallery: "गैलरी",
          video: "वीडियो",
          comment: "टिप्पणी",
        },
        tooltips: {
          gallery: "हमारे द्वारा किया गया कार्य",
          video: "अपनी आँखों से प्रक्रिया का अनुभव करें",
          comment: "टिप्पणी या पूछताछ छोड़ें",
        },
        form: {
          title: "टिप्पणी या पूछताछ छोड़ें",
          name: "आपका नाम",
          contact: "संपर्क विवरण",
          message: "आपकी टिप्पणी या पूछताछ",
          submit: "संदेश भेजें",
          success: "आपका संदेश सफलतापूर्वक भेजा गया!",
        },
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
