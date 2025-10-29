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
        ralchart: "RAL Color Chart",
        blog : "Blogs And Project",
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
          "Al Hadaf Metal Coating L.L.C was established on 2022. We offer a variety of the latest plating solutions with high-quality and budget-friendly options.",
        short2:
          "Our engineers always keep an eye on the latest trends and prioritize customer satisfaction, making us a trusted name worldwide.",
        short3:
          "The interests of our customers are always top priority, and we hope you enjoy our products as much as we enjoy providing them.",
        experience: "12+ Years of Experience in Metal Coating",
        heroTitle: "About Al-Hadaf Metal Coating LLC",
        heroDescription: "Delivering excellence in surface finishing and metal coating solutions since our establishment in 2022 — backed by over 15 years of hands-on experience in the industry.",
        whoWeAreTitle: "Who We Are",
        whoWeAreDescription: "Established in 2022, Al-Hadaf Metal Coating LLC has quickly become one of the leading providers of surface finishing and metal coating services in the UAE. With over 15 years of experience in the metal coating industry, we pride ourselves on precision, durability, and top-quality craftsmanship.",
        whoWeAreDescription2: "Our team specializes in a wide range of coating technologies, ensuring that every project — from industrial applications to architectural finishes — meets the highest international standards. We believe in combining innovation, sustainability, and customer satisfaction to deliver results that stand the test of time.",
        founderMessageTitle: "A Message from Our Founder",
        founderMessage: "At Al-Hadaf Metal Coating, our mission is simple — to redefine surface perfection through technology and craftsmanship. Every coating we apply reflects our dedication to quality, sustainability, and long-term partnerships with our clients.",
        founderMessage2: "With over 15 years of experience in this field, I take pride in leading a team that shares the same passion for excellence and innovation. Our journey is built on trust, precision, and commitment to deliver unmatched results.",
        founderSignature: "— Al-Hadaf, Founder & CEO",
        meetTeamTitle: "Meet Our Team",
        missionTitle: "Our Mission",
        missionDescription: "To provide innovative and sustainable metal coating solutions that exceed customer expectations.",
        visionTitle: "Our Vision",
        visionDescription: "To be a global leader in metal coating solutions, recognized for our commitment to quality and sustainability.",
        coreValuesTitle: "Our Core Values",
        coreValues: {
          quality: {
            title: "Quality Excellence",
            description: "Delivering superior coating solutions with unmatched precision"
          },
          integrity: {
            title: "Integrity",
            description: "Honest and transparent business practices in everything we do"
          },
          innovation: {
            title: "Innovation",
            description: "Continuous improvement through modern techniques and technology"
          },
          customer: {
            title: "Customer Focus",
            description: "Exceeding customer expectations with dedicated service"
          }
        },
        teamMembers: {
          hussain: {
            name: "Hussain",
            role: "Founder & CEO",
          },
          mannan: {
            name: "Mannan Moiyedi",
            role: "Operations Manager",
          },
          saleh: {
            name: "Mohammed Saleh",
            role: "Production Engineer",
          },
          aisha: {
            name: "Aisha Kareem",
            role: "Quality Supervisor",
          },
        },
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

      servicePage: {
        heading: "Surface Alchemy — Premium Finishes",
        sub: "Choose a service to learn more about our capabilities.",
        quoteBtn: "Get Quote",
      },

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
        ralchart: "مخطط ألوان رال",
        blog : "المدونات والمشاريع",
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
          "تأسست شركة الهدف لطلاء المعادن ذ.م.م في 2022 نحن نقدم مجموعة متنوعة من أحدث حلول الطلاء بجودة عالية وأسعار مناسبة.",
        short2:
          "مهندسونا يواكبون دائمًا أحدث الاتجاهات ويضعون رضا العملاء أولاً، مما يجعلنا اسمًا موثوقًا به عالميًا.",
        short3:
          "مصالح عملائنا دائمًا أولوية قصوى، ونأمل أن تستمتعوا بمنتجاتنا كما نستمتع بتقديمها لكم.",
        experience: "أكثر من 12 عامًا من الخبرة في طلاء المعادن",
        heroTitle: "حول الهدف لطلاء المعادن ذ.م.م",
        heroDescription: "تقديم التميز في حلول التشطيب السطحي وطلاء المعادن منذ تأسيسنا في عام 2022 — مدعومًا بأكثر من 15 عامًا من الخبرة العملية في الصناعة.",
        whoWeAreTitle: "من نحن",
        whoWeAreDescription: "تأسست شركة الهدف لطلاء المعادن ذ.م.م في عام 2022، وسرعان ما أصبحت واحدة من كبار مقدمي خدمات التشطيب السطحي وطلاء المعادن في الإمارات. مع أكثر من 15 عامًا من الخبرة في صناعة طلاء المعادن، نفخر بالدقة والمتانة والحرفية عالية الجودة.",
        whoWeAreDescription2: "يتخصص فريقنا في مجموعة واسعة من تقنيات الطلاء، مما يضمن أن كل مشروع — من التطبيقات الصناعية إلى التشطيبات المعمارية — يلبي أعلى المعايير الدولية. نحن نؤمن بالجمع بين الابتكار والاستدامة ورضا العملاء لتقديم نتائج تصمد أمام اختبار الزمن.",
        founderMessageTitle: "رسالة من المؤسس",
        founderMessage: "في الهدف لطلاء المعادن، مهمتنا بسيطة — إعادة تعريف الكمال السطحي من خلال التكنولوجيا والحرفية. كل طلاء نطبقه يعكس تفانينا في الجودة والاستدامة والشراكات طويلة الأجل مع عملائنا.",
        founderMessage2: "مع أكثر من 15 عامًا من الخبرة في هذا المجال، أفخر بقيادة فريق يشاركني نفس الشغف بالتميز والابتكار. رحلتنا مبنية على الثقة والدقة والالتزام بتقديم نتائج لا مثيل لها.",
        founderSignature: "— المؤسس والرئيس التنفيذي",
        meetTeamTitle: "تعرف على فريقنا",
        missionTitle: "مهمتنا",
        missionDescription: "تقديم حلول طلاء مبتكرة ومستدامة تتجاوز توقعات العملاء.",
        visionTitle: "رؤيتنا",
        visionDescription: "أن نكون رائدين عالميين في حلول طلاء المعادن، معترف بهم لالتزامنا بالجودة والاستدامة.",
        coreValuesTitle: "قيمنا الأساسية",
        coreValues: {
          quality: {
            title: "التميز في الجودة",
            description: "تقديم حلول طلاء فائقة بدقة لا مثيل لها"
          },
          integrity: {
            title: "النزاهة",
            description: "ممارسات تجارية صادقة وشفافة في كل ما نقوم به"
          },
          innovation: {
            title: "الابتكار",
            description: "التحسين المستمر من خلال التقنيات والأساليب الحديثة"
          },
          customer: {
            title: "التركيز على العميل",
            description: "تجاوز توقعات العملاء من خلال خدمة مخصصة ومتفانية"
          }
        },

        

        teamMembers: {
          hussain: {
            name: "حسين",
            role: "المؤسس والرئيس التنفيذي",
          },
          mannan: {
            name: "منان مؤيدي",
            role: "مدير العمليات",
          },
          saleh: {
            name: "محمد صالح",
            role: "مهندس الإنتاج",
          },
          aisha: {
            name: "عائشة كريم",
            role: "مشرفة الجودة",
          },
        },
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
        ralchart: "आरएएल रंग चार्ट",
        blog : "ब्लॉग्स और परियोजनाएँ",
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
          "अल हदफ मेटल कोटिंग एल.एल.सी की स्थापना 2022 को हुई थी। हम उच्च गुणवत्ता और बजट-अनुकूल नवीनतम प्लेटिंग समाधान प्रदान करते हैं।",
        short2:
          "हमारे इंजीनियर नवीनतम रुझानों पर नज़र रखते हैं और ग्राहक संतुष्टि को प्राथमिकता देते हैं, जिससे हम विश्व स्तर पर एक विश्वसनीय नाम बन गए हैं।",
        short3:
          "ग्राहकों की रुचि हमेशा हमारी शीर्ष प्राथमिकता है, और हमें आशा है कि आप हमारे उत्पादों का उतना ही आनंद लेंगे जितना हम उन्हें उपलब्ध कराते हैं।",
        experience: "धातु कोटिंग में 12+ वर्षों का अनुभव",
        heroTitle: "अल-हदफ मेटल कोटिंग एलएलसी के बारे में",
        heroDescription: "2022 में हमारी स्थापना के बाद से सतह फिनिशिंग और धातु कोटिंग समाधान में उत्कृष्टता प्रदान करना — उद्योग में 15 से अधिक वर्षों के व्यावहारिक अनुभव द्वारा समर्थित।",
        whoWeAreTitle: "हम कौन हैं",
        whoWeAreDescription: "2022 में स्थापित, अल-हदफ मेटल कोटिंग एलएलसी यूएई में सतह फिनिशिंग और धातु कोटिंग सेवाओं के अग्रणी प्रदाताओं में से एक बन गया है। धातु कोटिंग उद्योग में 15 से अधिक वर्षों के अनुभव के साथ, हम सटीकता, स्थायित्व और शीर्ष-गुणवत्ता शिल्प कौशल पर गर्व करते हैं।",
        whoWeAreDescription2: "हमारी टीम कोटिंग प्रौद्योगिकियों की एक विस्तृत श्रृंखला में विशेषज्ञता रखती है, यह सुनिश्चित करते हुए कि प्रत्येक परियोजना — औद्योगिक अनुप्रयोगों से लेकर वास्तुशिल्प फिनिश तक — उच्चतम अंतर्राष्ट्रीय मानकों को पूरा करती है। हम समय की कसौटी पर खरे उतरने वाले परिणाम देने के लिए नवाचार, स्थिरता और ग्राहक संतुष्टि को मिलाने में विश्वास करते हैं।",
        founderMessageTitle: "हमारे संस्थापक का संदेश",
        founderMessage: "अल-हदफ मेटल कोटिंग में, हमारा मिशन सरल है — प्रौद्योगिकी और शिल्प कौशल के माध्यम से सतह की पूर्णता को फिर से परिभाषित करना। हम जो भी कोटिंग लगाते हैं वह गुणवत्ता, स्थिरता और हमारे ग्राहकों के साथ दीर्घकालिक साझेदारी के प्रति हमारे समर्पण को दर्शाती है।",
        founderMessage2: "इस क्षेत्र में 15 से अधिक वर्षों के अनुभव के साथ, मुझे एक ऐसी टीम का नेतृत्व करने पर गर्व है जो उत्कृष्टता और नवाचार के लिए समान जुनून साझा करती है। हमारी यात्रा विश्वास, सटीकता और बेजोड़ परिणाम देने की प्रतिबद्धता पर बनी है।",
        founderSignature: "— हुसैन अल-हदफ, संस्थापक और सीईओ",
        meetTeamTitle: "हमारी टीम से मिलें",
        missionTitle: "हमारा मिशन",
        missionDescription: "नवीन और स्थायी धातु कोटिंग समाधान प्रदान करना जो ग्राहक की अपेक्षाओं से परे हो।",
        visionTitle: "हमारा दृष्टिकोण",
        visionDescription: "धातु कोटिंग समाधान में एक वैश्विक नेता बनना, गुणवत्ता और स्थिरता के प्रति हमारी प्रतिबद्धता के लिए मान्यता प्राप्त।",
        coreValuesTitle: "हमारे मूल मूल्य",
        coreValues: {
          quality: {
            title: "गुणवत्ता उत्कृष्टता",
            description: "उत्कृष्टता के प्रति हमारी प्रतिबद्धता हर परियोजना में परिलक्षित होती है।"
          },
          integrity: {
            title: "ईमानदारी",
            description: "हम अपने ग्राहकों और भागीदारों के साथ ईमानदार और पारदर्शी संबंध बनाने में विश्वास करते हैं।"
          },
          innovation: {
            title: "नवाचार",
            description: "हम नवीनतम तकनीकों और प्रक्रियाओं को अपनाने के लिए प्रतिबद्ध हैं।"
          },
          customer: {
            title: "ग्राहक केंद्रितता",
            description: "हमारी प्राथमिकता हमारे ग्राहकों की आवश्यकताओं को समझना और उन्हें पूरा करना है।"
          }
        },

        teamMembers: {
          hussain: {
            name: "हुसैन",
            role: "संस्थापक और सीईओ",
          },
          mannan: {
            name: "मन्नान मोइयेदी",
            role: "ऑपरेशन्स मैनेजर",
          },
          saleh: {
            name: "मोहम्मद सालेह",
            role: "प्रोडक्शन इंजीनियर",
          },
          aisha: {
            name: "आइशा करीम",
            role: "गुणवत्ता पर्यवेक्षक",
          },
        },
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

  ml: {
    translation: {
      welcome: "അൽ-ഹദഫ് മെറ്റൽ കോട്ടിംഗ് എൽഎൽസിയിലേക്ക് സ്വാഗതം",
      description:
        "ഉയർന്ന നിലവാരമുള്ള ഉപരിതല ഫിനിഷിംഗ് സൊല്യൂഷനുകൾ കൃത്യതയോടും ദൃഢതയോടും കൂടി നൽകുന്നതിൽ ഞങ്ങൾ വൈദഗ്ധ്യം നേടിയിട്ടുണ്ട്. യുഎഇയിലുടനീളമുള്ള വ്യവസായങ്ങൾ വിശ്വസിക്കുന്ന ഞങ്ങളുടെ വിപുലമായ സേവനങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക.",
      readMore: "കൂടുതൽ വായിക്കുക",
      viewWork: "ഞങ്ങളുടെ ജോലി കാണുക",

      services: {
        powder: "പൗഡർ കോട്ടിംഗ്",
        galvanizing: "ഗാൽവനൈസിംഗ്",
        electroplating: "ഇലക്ട്രോപ്ലേറ്റിംഗ്",
        tin: "ടിൻ പ്ലേറ്റിംഗ്",
        metal: "മെറ്റൽ പ്ലേറ്റിംഗ്",
        antique: "പുരാതന ഫിനിഷ്",
      },

      nav: {
        home: "ഹോം",
        services: "സേവനങ്ങൾ",
        about: "ഞങ്ങളെക്കുറിച്ച്",
        ralchart: "ആർ.എ.എൽ കളർ ചാർട്ട്",
        videos: "വീഡിയോകൾ",
        blog : "ബ്ലോഗുകളും പദ്ധതികളും",
        testimonials: "അഭിപ്രായങ്ങൾ",
        contact: "ബന്ധപ്പെടുക",
      },

      header: {
        location: "അൽ-ഹദഫ് മെറ്റൽ കോട്ടിംഗ് എൽഎൽസി",
        announcement: "🎉 ഈദ്-മിലാദ്-ഉൻ-നബി – എല്ലാ സേവനങ്ങൾക്കും 20% ഓഫ്! 🎉",
        enquireNow: "ഇപ്പോൾ അന്വേഷിക്കുക",
        menu: "മെനു",
      },

      footer: {
        usefulLinks: "ഉപയോഗപ്രദമായ ലിങ്കുകൾ",
        privacy: "സ്വകാര്യതാ നയം",
        more: "കൂടുതൽ",
        contact: "ബന്ധപ്പെടുക",
        connect: "ബന്ധിപ്പിക്കുക",
        changeLang: "ഭാഷ മാറ്റുക",
        whatsapp: "വാട്ട്സ്ആപ്പ്",
        address: "ഇൻഡസ്ട്രിയൽ ഏരിയ 15 - ഷാർജ, യുഎഇ",
        company: "അൽ ഹദഫ് മെറ്റൽ കോട്ടിംഗ് എൽഎൽസി",
        rights: "എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
      },

      contact: {
        title: "ബന്ധപ്പെടുക",
        getInTouch: "ഞങ്ങളുമായി ബന്ധപ്പെടുക",
        name: "പേര്",
        namePlaceholder: "നിങ്ങളുടെ പേര് നൽകുക",
        email: "ഇമെയിൽ",
        emailPlaceholder: "നിങ്ങളുടെ ഇമെയിൽ നൽകുക",
        phone: "ബന്ധപ്പെടാനുള്ള നമ്പർ",
        phonePlaceholder: "നിങ്ങളുടെ ഫോൺ നമ്പർ നൽകുക",
        requirements: "ആവശ്യകതകൾ",
        requirementsPlaceholder: "നിങ്ങളുടെ ആവശ്യകതകൾ നൽകുക",
        submit: "സമർപ്പിക്കുക",
        sending: "അയയ്ക്കുന്നു...",
        success: "✅ നിങ്ങളുടെ സന്ദേശം വിജയകരമായി അയച്ചു!",
        error: "❌ എന്തോ കുഴപ്പം സംഭവിച്ചു, ദയവായി വീണ്ടും ശ്രമിക്കുക.",
        failed: "❌ സന്ദേശം അയയ്ക്കുന്നതിൽ പരാജയപ്പെട്ടു.",
      },

      about: {
        title: "ഞങ്ങളെക്കുറിച്ച്",
        description:
          "നവീകരണവും അഭിനിവേശവും കൂടി ഉയർന്ന നിലവാരമുള്ള സേവനങ്ങൾ നൽകാൻ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്.",
        ourTeam: "ഞങ്ങളുടെ ടീം",
        team: {
          ceo: "ചീഫ് എക്സിക്യൂട്ടീവ് ഓഫീസർ",
          manager: "ഓപ്പറേഷൻസ് മാനേജർ",
          engineer: "ലീഡ് എഞ്ചിനീയർ",
          designer: "ക്രിയേറ്റീവ് ഡിസൈനർ",
        },
        short1:
          "അൽ ഹദഫ് മെറ്റൽ കോട്ടിംഗ് എൽ.എൽ.സി 2022-ൽ സ്ഥാപിതമായി. ഉയർന്ന നിലവാരവും ബജറ്റ് സൗഹൃദവുമായ ഏറ്റവും പുതിയ പ്ലേറ്റിംഗ് സൊല്യൂഷനുകൾ ഞങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു.",
        short2:
          "ഞങ്ങളുടെ എഞ്ചിനീയർമാർ എപ്പോഴും ഏറ്റവും പുതിയ പ്രവണതകൾ നിരീക്ഷിക്കുകയും ഉപഭോക്തൃ സംതൃപ്തിക്ക് മുൻഗണന നൽകുകയും ചെയ്യുന്നു, ഇത് ഞങ്ങളെ ലോകമെമ്പാടും വിശ്വസ്തമായ ഒരു പേരാക്കി മാറ്റുന്നു.",
        short3:
          "ഞങ്ങളുടെ ഉപഭോക്താക്കളുടെ താൽപ്പര്യങ്ങൾ എപ്പോഴും മുൻഗണനയാണ്, ഞങ്ങൾ ഉൽപ്പന്നങ്ങൾ നൽകുന്നത് ആസ്വദിക്കുന്നതുപോലെ നിങ്ങളും അവ ആസ്വദിക്കുമെന്ന് ഞങ്ങൾ പ്രതീക്ഷിക്കുന്നു.",
        experience: "മെറ്റൽ കോട്ടിംഗിൽ 12+ വർഷത്തെ അനുഭവം",
        heroTitle: "അൽ-ഹദഫ് മെറ്റൽ കോട്ടിംഗ് എൽഎൽസിയെ കുറിച്ച്",
        heroDescription: "2022-ൽ ഞങ്ങളുടെ സ്ഥാപനം മുതൽ ഉപരിതല ഫിനിഷിംഗ്, മെറ്റൽ കോട്ടിംഗ് സൊല്യൂഷനുകളിൽ മികവ് നൽകുന്നു — വ്യവസായത്തിൽ 15 വർഷത്തിലേറെ പ്രായോഗിക അനുഭവത്താൽ പിന്തുണയ്ക്കപ്പെടുന്നു.",
        whoWeAreTitle: "ഞങ്ങൾ ആരാണ്",
        whoWeAreDescription: "2022-ൽ സ്ഥാപിതമായ അൽ-ഹദഫ് മെറ്റൽ കോട്ടിംഗ് എൽഎൽസി യുഎഇയിലെ ഉപരിതല ഫിനിഷിംഗ്, മെറ്റൽ കോട്ടിംഗ് സേവനങ്ങളുടെ മുൻനിര ദാതാക്കളിൽ ഒന്നായി വേഗത്തിൽ മാറിയിരിക്കുന്നു. മെറ്റൽ കോട്ടിംഗ് വ്യവസായത്തിൽ 15 വർഷത്തിലേറെ പരിചയത്തോടെ, കൃത്യത, ദൃഢത, ഉയർന്ന നിലവാരമുള്ള കരകൗശലത്തിൽ ഞങ്ങൾ അഭിമാനിക്കുന്നു.",
        whoWeAreDescription2: "വ്യാവസായിക ആപ്ലിക്കേഷനുകൾ മുതൽ വാസ്തുവിദ്യാപരമായ ഫിനിഷുകൾ വരെ ഓരോ പ്രോജക്ടും ഉയർന്ന അന്താരാഷ്ട്ര മാനദണ്ഡങ്ങൾ പാലിക്കുന്നുവെന്ന് ഉറപ്പാക്കുന്ന വിപുലമായ കോട്ടിംഗ് സാങ്കേതികവിദ്യകളിൽ ഞങ്ങളുടെ ടീം വൈദഗ്ധ്യം നേടിയിട്ടുണ്ട്. കാലത്തിന്റെ പരീക്ഷയിൽ നിലനിൽക്കുന്ന ഫലങ്ങൾ നൽകുന്നതിന് നവീകരണവും സുസ്ഥിരതയും ഉപഭോക്തൃ സംതൃപ്തിയും സംയോജിപ്പിക്കുന്നതിൽ ഞങ്ങൾ വിശ്വസിക്കുന്നു.",
        founderMessageTitle: "ഞങ്ങളുടെ സ്ഥാപകനിൽ നിന്നുള്ള സന്ദേശം",
        founderMessage: "അൽ-ഹദഫ് മെറ്റൽ കോട്ടിംഗിൽ, ഞങ്ങളുടെ ദൗത്യം ലളിതമാണ് — സാങ്കേതികവിദ്യയിലൂടെയും കരകൗശലത്തിലൂടെയും ഉപരിതല പൂർണതയെ പുനർനിർവചിക്കുക. ഞങ്ങൾ പ്രയോഗിക്കുന്ന ഓരോ കോട്ടിംഗും ഗുണനിലവാരം, സുസ്ഥിരത, ഞങ്ങളുടെ ക്ലയന്റുകളുമായുള്ള ദീർഘകാല പങ്കാളിത്തം എന്നിവയോടുള്ള ഞങ്ങളുടെ സമർപ്പണത്തെ പ്രതിഫലിപ്പിക്കുന്നു.",
        founderMessage2: "ഈ മേഖലയിൽ 15 വർഷത്തിലേറെ പരിചയത്തോടെ, മികവിനും നവീകരണത്തിനും വേണ്ടി അതേ അഭിനിവേശം പങ്കിടുന്ന ഒരു ടീമിനെ നയിക്കുന്നതിൽ ഞാൻ അഭിമാനിക്കുന്നു. വിശ്വാസം, കൃത്യത, അതുല്യമായ ഫലങ്ങൾ നൽകാനുള്ള പ്രതിബദ്ധത എന്നിവയിലാണ് ഞങ്ങളുടെ യാത്ര നിർമ്മിച്ചിരിക്കുന്നത്.",
        founderSignature: "— അൽ-ഹദഫ്, സ്ഥാപകനും സിഇഒയും",
        meetTeamTitle: "ഞങ്ങളുടെ ടീമിനെ കാണുക",
        missionTitle: "ഞങ്ങളുടെ ദൗത്യം",
        missionDescription: "ഉപഭോക്താക്കളുടെ പ്രതീക്ഷകൾ മറികടക്കുന്ന നവീനവും സുസ്ഥിരവുമായ മെറ്റൽ കോട്ടിംഗ് സൊല്യൂഷനുകൾ നൽകുക.",
        visionTitle: "ഞങ്ങളുടെ ദർശനം",
        visionDescription: "മെറ്റൽ കോട്ടിംഗ് സൊല്യൂഷനുകളിൽ ഒരു ആഗോള നേതാവാകുക, ഗുണനിലവാരത്തിനും സുസ്ഥിരതയ്ക്കും വേണ്ടി ഞങ്ങളുടെ പ്രതിബദ്ധതയ്ക്ക് അംഗീകാരം ലഭിക്കുക.",
        coreValuesTitle: "ഞങ്ങളുടെ മൗലിക മൂല്യങ്ങൾ",
        coreValues: {
          quality: {
            title: "ഗുണനിലവാരത്തിലെ മികവ്",
            description: "പ്രതിയൊരു പ്രോജക്ടിലും മികവിനോടുള്ള ഞങ്ങളുടെ പ്രതിബദ്ധത പ്രതിഫലിക്കുന്നു."
          },
          integrity: {
            title: "നിഷ്‌ഠ",
            description: "ഞങ്ങൾ ഞങ്ങളുടെ ഉപഭോക്താക്കളുമായും പങ്കാളികളുമായും നിഷ്‌ഠയുള്ള, പരദർശിയായ ബന്ധങ്ങൾ നിർമ്മിക്കുന്നതിൽ വിശ്വസിക്കുന്നു."
          },
          innovation: {
            title: "നവീകരണം",
            description: "നവീന സാങ്കേതികവിദ്യകളും പ്രക്രിയകളും സ്വീകരിക്കാൻ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്."
          },
          customer: {
            title: "ഉപഭോക്തൃ കേന്ദ്രീകൃതത",
            description: "ഞങ്ങളുടെ പ്രാഥമികത ഞങ്ങളുടെ ഉപഭോക്താക്കളുടെ ആവശ്യകതകൾ മനസ്സിലാക്കുകയും അവ നിറവേറ്റുകയും ചെയ്യുകയാണ്."
          }
        },
        teamMembers: {
          hussain: {
            name: "ഹുസൈൻ",
            role: "സ്ഥാപകനും സിഇഒയും",
          },
          mannan: {
            name: "മന്നാൻ മൊയ്യേദി",
            role: "ഓപ്പറേഷൻസ് മാനേജർ",
          },
          saleh: {
            name: "മുഹമ്മദ് സാലിഹ്",
            role: "പ്രൊഡക്ഷൻ എഞ്ചിനീയർ",
          },
          aisha: {
            name: "ആയിഷ കരീം",
            role: "ക്വാളിറ്റി സൂപ്പർവൈസർ",
          },
        },
      },

      serviceSection: {
        heading: "ഞങ്ങളുടെ സേവനങ്ങൾ",
        description: "ഞങ്ങൾ വാഗ്ദാനം ചെയ്യുന്ന ഉയർന്ന നിലവാരമുള്ള സേവനങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക.",
        viewMore: "കൂടുതൽ കാണുക",
        items: {
          powder: {
            title: "പൗഡർ കോട്ടിംഗ്",
            description: "എല്ലാ ലോഹങ്ങൾക്കും ഉയർന്ന നിലവാരമുള്ള പൗഡർ കോട്ടിംഗ്.",
            shortDesc: "ദൃഢവും ദീർഘകാലം നിലനിൽക്കുന്നതുമായ ഫിനിഷ്.",
          },
          galvanizing: {
            title: "ഗാൽവനൈസിംഗ്",
            description: "നിങ്ങളുടെ ലോഹത്തെ നാശത്തിൽ നിന്ന് സംരക്ഷിക്കുക.",
            shortDesc: "ദീർഘകാല ദൃഢതയ്ക്കായി സിങ്ക് കോട്ടിംഗ്.",
          },
          electroplating: {
            title: "ഇലക്ട്രോപ്ലേറ്റിംഗ്",
            description: "മിനുസമാർന്ന ഫിനിഷോടെ ലോഹ പ്രതലങ്ങൾ മെച്ചപ്പെടുത്തുക.",
            shortDesc: "വ്യാവസായികവും അലങ്കാരപരവുമായ ഉപയോഗത്തിന് അനുയോജ്യം.",
          },
          tin: {
            title: "ടിൻ പ്ലേറ്റിംഗ്",
            description: "നാശ പ്രതിരോധ ടിൻ പ്ലേറ്റിംഗ് സൊല്യൂഷനുകൾ.",
            shortDesc: "ഭക്ഷ്യ-ഗ്രേഡ് ലോഹങ്ങൾക്ക് സുരക്ഷിതവും ശുചിത്വവും.",
          },
          goldsilver: {
            title: "സ്വർണ്ണ & വെള്ളി പ്ലേറ്റിംഗ്",
            description: "പ്രീമിയം ഉൽപ്പന്നങ്ങൾക്കായി ആഡംബര ലോഹ പ്ലേറ്റിംഗ്.",
            shortDesc: "ഉയർന്ന നിലവാരമുള്ള വിലയേറിയ ലോഹ ഫിനിഷ്.",
          },
          metal: {
            title: "മെറ്റൽ പ്ലേറ്റിംഗ്",
            description: "കസ്റ്റം മെറ്റൽ പ്ലേറ്റിംഗ് സേവനങ്ങൾ.",
            shortDesc: "നിങ്ങളുടെ പ്രത്യേക പ്രോജക്ട് ആവശ്യങ്ങൾക്കായി രൂപകൽപ്പന ചെയ്തത്.",
          },
          antique: {
            title: "പുരാതന ഫിനിഷ്",
            description: "ലോഹങ്ങൾക്ക് കാലാതീതമായ രൂപം നൽകുക.",
            shortDesc: "അലങ്കാര ആവശ്യങ്ങൾക്കായി ക്ലാസിക് പുരാതന ശൈലി.",
          },
        },
      },

      servicePage: {
        heading: "ഉപരിതല രസതന്ത്രം — പ്രീമിയം ഫിനിഷുകൾ",
        sub: "ഞങ്ങളുടെ കഴിവുകളെക്കുറിച്ച് കൂടുതലറിയാൻ ഒരു സേവനം തിരഞ്ഞെടുക്കുക.",
        quoteBtn: "ക്വോട്ട് നേടുക",
      },

      powderPage: {
        heading: "പൗഡർ കോട്ടിംഗ്",
        tagline: "ദൃഢം. ചടുലം. ദീർഘകാലം നിലനിൽക്കുന്നത് — ഒരു കോട്ടിംഗ് വിപ്ലവം.",
        tabs: {
          gallery: "ഗാലറി",
          video: "വീഡിയോ",
          comment: "അഭിപ്രായം",
        },
        tooltips: {
          gallery: "ഞങ്ങൾ ചെയ്ത പ്രവർത്തനങ്ങൾ",
          video: "നിങ്ങളുടെ സ്വന്തം കണ്ണുകളാൽ പ്രക്രിയ അനുഭവിക്കുക",
          comment: "ഒരു അഭിപ്രായമോ അന്വേഷണമോ നൽകുക",
        },
        form: {
          title: "ഒരു അഭിപ്രായമോ അന്വേഷണമോ നൽകുക",
          name: "നിങ്ങളുടെ പേര്",
          contact: "ബന്ധപ്പെടാനുള്ള വിശദാംശങ്ങൾ",
          message: "നിങ്ങളുടെ അഭിപ്രായമോ അന്വേഷണമോ",
          submit: "സന്ദേശം അയയ്ക്കുക",
          success: "നിങ്ങളുടെ സന്ദേശം വിജയകരമായി അയച്ചു!",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;