// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Al-Hadaf Metal Coating LLC",
      description:
        "We specialize in delivering top-quality surface finishing solutions with precision and durability. Trusted experts serving Dubai, Sharjah, Abu Dhabi, and across UAE.",
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
        blog: "Blogs And Project",
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

        address: "Industrial Area 15, Near National Paints - Sharjah, UAE",
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
        heroTitle: "About Al-Hadaf Metal Coating LLC",
        heroDescription: "Delivering excellence in surface finishing and metal coating solutions since our establishment in 2022 – backed by over 15 years of hands-on experience in the industry.",
        
        companyOverviewTitle: "About Al-Hadaf Metal Coating LLC",
        companyOverviewP1: "Al-Hadaf Metal Coating LLC is a premier metal coating company in the UAE, specializing in advanced powder coating services and surface finishing solutions. With state-of-the-art facilities and cutting-edge technology, we deliver superior metal coating services that exceed industry standards and customer expectations.",
        companyOverviewP2: "Our comprehensive metal coating services include powder coating, sandblasting, zinc coating, electrostatic coating, and specialized protective coatings for diverse industrial applications. We serve clients across Dubai, Sharjah, Ajman, and throughout the United Arab Emirates with professional metal finishing solutions.",
        
        whoWeAreTitle: "Who We Are",
        whoWeAreDescription: "Established in 2022, Al-Hadaf Metal Coating LLC has quickly become one of the leading providers of surface finishing and metal coating services in the UAE. With over 15 years of experience in the metal coating industry, we pride ourselves on precision, durability, and top-quality craftsmanship.",
        whoWeAreDescription2: "Our team specializes in a wide range of coating technologies, ensuring that every project – from industrial applications to architectural finishes – meets the highest international standards. We believe in combining innovation, sustainability, and customer satisfaction to deliver results that stand the test of time.",
        
        industryExpertiseTitle: "Leading the Metal Coating Industry in UAE",
        powderCoatingTechTitle: "Advanced Powder Coating Technology",
        powderCoatingTechP1: "Our powder coating facility utilizes electrostatic spray deposition technology to apply dry powder particles onto metal surfaces. The powder coating process involves electrostatically charging the powder particles, which are then attracted to grounded metal objects. After application, the coated items are cured in high-temperature ovens, creating a durable, uniform finish that surpasses traditional liquid paint in performance and longevity.",
        powderCoatingTechP2: "We offer an extensive range of powder coating finishes including glossy, matte, textured, metallic, and specialized effects. Our metal coating services provide superior corrosion resistance, UV protection, chemical resistance, and exceptional durability for both indoor and outdoor applications.",
        
        surfacePreparationTitle: "Comprehensive Surface Preparation",
        surfacePreparationP1: "Quality metal coating begins with proper surface preparation. Our advanced pre-treatment processes include sandblasting, chemical cleaning, degreasing, phosphating, and surface profiling. We utilize automated shot blasting equipment and multi-stage pre-treatment systems to ensure optimal adhesion and coating performance.",
        surfacePreparationP2: "Our metal surface treatment capabilities handle aluminum, steel, stainless steel, galvanized metal, and various alloy substrates. Each material receives specialized preparation protocols to achieve maximum coating adhesion, durability, and aesthetic appeal.",
        
        powderVsPaintTitle: "Why Powder Coating is Superior to Traditional Paint",
        powderVsPaintP1: "Powder coating offers significant advantages over conventional liquid paint systems. Unlike wet paint that requires solvents and emits volatile organic compounds (VOCs), powder coating is an environmentally friendly finishing method that produces minimal waste and harmful emissions. The powder overspray can be recovered and reused, making it a sustainable and cost-effective metal coating solution.",
        powderVsPaintP2: "The durability of powder coated surfaces far exceeds traditional paint. Powder coating creates a thicker, more uniform coating that resists chipping, scratching, fading, and wear. This enhanced durability translates to longer product lifecycles, reduced maintenance costs, and superior protection against harsh environmental conditions including extreme temperatures, humidity, salt exposure, and UV radiation.",
        powderVsPaintP3: "Our powder coating services provide exceptional finish quality with smooth, professional-grade aesthetics. The electrostatic application process ensures complete coverage, even on complex geometries and hard-to-reach areas. The high-temperature curing process creates a chemically bonded surface that delivers unmatched adhesion and performance characteristics.",
        
        industriesServedTitle: "Industries Served by Our Metal Coating Services",
        architecturalTitle: "Architectural Metal Coating",
        architecturalDesc: "Premium powder coating services for windows, doors, facades, and structural elements",
        automotiveTitle: "Automotive Metal Coating",
        automotiveDesc: "Durable coatings for vehicle parts, chassis, wheels, and custom automotive applications",
        industrialTitle: "Industrial Metal Coating",
        industrialDesc: "Heavy-duty protective coatings for machinery, equipment, and manufacturing components",
        furnitureTitle: "Furniture Metal Coating",
        furnitureDesc: "Decorative and protective finishes for indoor and outdoor furniture pieces",
        
        qualityAssuranceTitle: "Quality Assurance & Technical Capabilities",
        coatingFacilityTitle: "State-of-the-Art Coating Facility",
        coatingFacility1: "Automated conveyor powder coating system with precision application controls",
        coatingFacility2: "High-efficiency electrostatic spray guns for uniform powder distribution",
        coatingFacility3: "Industrial curing ovens with precise temperature control and monitoring",
        coatingFacility4: "Advanced dust collection and powder recovery systems",
        coatingFacility5: "Multi-stage chemical pre-treatment tanks for optimal surface preparation",
        coatingFacility6: "Automated shot blasting machines for heavy-duty surface profiling",
        
        qualityControlTitle: "Quality Control Standards",
        qualityControl1: "Rigorous coating thickness measurement and verification procedures",
        qualityControl2: "Adhesion testing using cross-hatch and pull-off methods",
        qualityControl3: "Color matching and consistency verification with spectrophotometry",
        qualityControl4: "Salt spray testing for corrosion resistance validation",
        qualityControl5: "UV exposure testing for outdoor durability assessment",
        qualityControl6: "Complete documentation and traceability for all coating batches",
        
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
        
        environmentalTitle: "Environmental Responsibility in Metal Coating",
        environmentalP1: "Al-Hadaf Metal Coating LLC is committed to environmentally sustainable metal finishing practices. Our powder coating processes significantly reduce environmental impact compared to traditional wet paint systems. We operate with zero VOC emissions, minimal waste generation, and comprehensive powder recovery systems that recycle overspray material.",
        environmentalP2: "Our facility implements water conservation measures, energy-efficient curing ovens, and responsible chemical management protocols. We partner with certified powder coating manufacturers who prioritize eco-friendly formulations and sustainable production methods. Our commitment to environmental stewardship extends throughout our operations, from material sourcing to waste disposal.",
        environmentalP3: "By choosing our powder coating services, clients contribute to reducing industrial pollution while receiving superior coating performance. Our green metal coating solutions help businesses meet sustainability goals without compromising quality, durability, or aesthetic requirements.",
        
        founderMessageTitle: "A Message from Our Founder",
        founderMessage: "At Al-Hadaf Metal Coating, our mission is simple – to redefine surface perfection through technology and craftsmanship. Every coating we apply reflects our dedication to quality, sustainability, and long-term partnerships with our clients.",
        founderMessage2: "With over 15 years of experience in this field, I take pride in leading a team that shares the same passion for excellence and innovation. Our journey is built on trust, precision, and commitment to deliver unmatched results.",
        founderSignature: "– Al-Hadaf, Founder & CEO",
        
        visionTitle: "Our Vision",
        visionDescription: "To be a global leader in metal coating solutions, recognized for our commitment to quality and sustainability.",
        
        missionTitle: "Our Mission",
        missionDescription: "To provide innovative and sustainable metal coating solutions that exceed customer expectations.",
        
        whyChooseUsTitle: "Why Choose Al-Hadaf for Metal Coating Services",
        expertProfessionalsTitle: "Expert Metal Coating Professionals",
        expertProfessionalsDesc: "Our team comprises highly trained powder coating specialists with extensive experience in metal surface finishing. We ensure every project meets the highest quality standards through meticulous attention to detail and technical expertise.",
        
        fastTurnaroundTitle: "Fast Turnaround Time",
        fastTurnaroundDesc: "We understand the importance of project timelines. Our efficient powder coating processes and streamlined workflows ensure quick turnaround times without compromising quality. Same-day and express coating services available for urgent requirements.",
        
        customColorTitle: "Custom Color Matching",
        customColorDesc: "Access to thousands of RAL, Pantone, and custom powder coating colors. Our color matching capabilities ensure perfect consistency across batches. We provide color samples and can match any existing finish specification.",
        
        competitivePricingTitle: "Competitive Pricing",
        competitivePricingDesc: "We offer cost-effective powder coating solutions without sacrificing quality. Transparent pricing, no hidden fees, and volume discounts available for large-scale projects. Get a free quote for your metal coating requirements.",
        
        guaranteedDurabilityTitle: "Guaranteed Durability",
        guaranteedDurabilityDesc: "All our powder coated finishes come with durability warranties. Proven resistance to weathering, corrosion, chemicals, and mechanical damage. Long-lasting protection that maintains appearance for years.",
        
        customerCentricTitle: "Customer-Centric Service",
        customerCentricDesc: "Dedicated account managers, free consultations, pickup and delivery services available. We work closely with clients to understand requirements and deliver customized metal coating solutions that exceed expectations.",
        
        applicationsTitle: "Powder Coating Applications & Capabilities",
        architecturalComponentsTitle: "Architectural Components",
        architecturalComponent1: "• Aluminum window frames and profiles",
        architecturalComponent2: "• Metal doors and door frames",
        architecturalComponent3: "• Curtain wall systems and facades",
        architecturalComponent4: "• Railings, handrails, and balusters",
        architecturalComponent5: "• Cladding panels and louvers",
        architecturalComponent6: "• Structural steel components",
        architecturalComponent7: "• Decorative metalwork and grilles",
        
        industrialManufacturingTitle: "Industrial & Manufacturing",
        industrialManufacturing1: "• Machinery housings and enclosures",
        industrialManufacturing2: "• Control panels and electrical cabinets",
        industrialManufacturing3: "• Storage racks and shelving systems",
        industrialManufacturing4: "• Conveyor components and guards",
        industrialManufacturing5: "• HVAC equipment and ductwork",
        industrialManufacturing6: "• Manufacturing equipment parts",
        industrialManufacturing7: "• Safety barriers and protective guards",
        
        consumerCommercialTitle: "Consumer & Commercial",
        consumerCommercial1: "• Office and outdoor furniture",
        consumerCommercial2: "• Automotive parts and accessories",
        consumerCommercial3: "• Bicycle frames and components",
        consumerCommercial4: "• Appliance housings and panels",
        consumerCommercial5: "• Lighting fixtures and poles",
        consumerCommercial6: "• Signage and display systems",
        consumerCommercial7: "• Playground equipment and structures",
        
        readyToTransformTitle: "Ready to Transform Your Metal Surfaces?",
        readyToTransformDesc: "Contact Al-Hadaf Metal Coating LLC today for professional powder coating services in UAE. Our experts are ready to discuss your project requirements and provide customized solutions for all your metal finishing needs.",
        getFreeQuote: "Get Free Quote",
        viewServices: "View Services",
        
        meetTeamTitle: "Meet Our Team",
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
        heading: "Surface Alchemy – Premium Finishes",
        sub: "Choose a service to learn more about our capabilities.",
        quoteBtn: "Get Quote",
      },

      powderPage: {
        heading: "Powder Coating",
        tagline: "Durable. Vibrant. Long-lasting – a coating revolution.",
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
        blog: "المدونات والمشاريع",
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
        sending: "جار الإرسال...",
        success: "✅ تم إرسال رسالتك بنجاح!",
        error: "❌ حدث خطأ، حاول مرة أخرى.",
        failed: "❌ فشل في إرسال الرسالة.",
      },

      about: {
        title: "معلومات عنا",
        heroTitle: "حول الهدف لطلاء المعادن ذ.م.م",
        heroDescription: "تقديم التميز في حلول التشطيب السطحي وطلاء المعادن منذ تأسيسنا في عام 2022 – مدعومًا بأكثر من 15 عامًا من الخبرة العملية في الصناعة.",
        
        companyOverviewTitle: "حول الهدف لطلاء المعادن ذ.م.م",
        companyOverviewP1: "الهدف لطلاء المعادن ذ.م.م هي شركة رائدة في طلاء المعادن في الإمارات، متخصصة في خدمات الطلاء بالمسحوق المتقدمة وحلول التشطيب السطحي. مع مرافق حديثة وتكنولوجيا متطورة، نقدم خدمات طلاء معادن فائقة تتجاوز معايير الصناعة وتوقعات العملاء.",
        companyOverviewP2: "تشمل خدماتنا الشاملة لطلاء المعادن الطلاء بالمسحوق، السفع الرملي، طلاء الزنك، الطلاء الكهروستاتيكي، والطلاءات الواقية المتخصصة للتطبيقات الصناعية المتنوعة. نخدم العملاء في دبي والشارقة وعجمان وجميع أنحاء الإمارات بحلول تشطيب معادن احترافية.",
        
        whoWeAreTitle: "من نحن",
        whoWeAreDescription: "تأسست شركة الهدف لطلاء المعادن ذ.م.م في عام 2022، وسرعان ما أصبحت واحدة من كبار مقدمي خدمات التشطيب السطحي وطلاء المعادن في الإمارات. مع أكثر من 15 عامًا من الخبرة في صناعة طلاء المعادن، نفخر بالدقة والمتانة والحرفية عالية الجودة.",
        whoWeAreDescription2: "يتخصص فريقنا في مجموعة واسعة من تقنيات الطلاء، مما يضمن أن كل مشروع – من التطبيقات الصناعية إلى التشطيبات المعمارية – يلبي أعلى المعايير الدولية. نحن نؤمن بالجمع بين الابتكار والاستدامة ورضا العملاء لتقديم نتائج تصمد أمام اختبار الزمن.",
        
        industryExpertiseTitle: "الريادة في صناعة طلاء المعادن في الإمارات",
        powderCoatingTechTitle: "تقنية الطلاء بالمسحوق المتقدمة",
        powderCoatingTechP1: "تستخدم منشأة الطلاء بالمسحوق لدينا تقنية الترسيب بالرش الكهروستاتيكي لتطبيق جزيئات المسحوق الجافة على الأسطح المعدنية. تتضمن عملية الطلاء بالمسحوق شحن جزيئات المسحوق كهروستاتيكيًا، والتي تنجذب بعد ذلك إلى الأجسام المعدنية المؤرضة. بعد التطبيق، يتم معالجة العناصر المطلية في أفران عالية الحرارة، مما يخلق تشطيبًا متينًا وموحدًا يتفوق على الطلاء السائل التقليدي في الأداء والعمر الافتراضي.",
        powderCoatingTechP2: "نقدم مجموعة واسعة من تشطيبات الطلاء بالمسحوق بما في ذلك اللامع، والمطفي، والمحكم، والمعدني، والتأثيرات المتخصصة. توفر خدمات طلاء المعادن لدينا مقاومة فائقة للتآكل، والحماية من الأشعة فوق البنفسجية، والمقاومة الكيميائية، ومتانة استثنائية للتطبيقات الداخلية والخارجية.",
        
        surfacePreparationTitle: "التحضير الشامل للسطح",
        surfacePreparationP1: "يبدأ طلاء المعادن عالي الجودة بالتحضير السليم للسطح. تشمل عمليات المعالجة المسبقة المتقدمة لدينا السفع الرملي، والتنظيف الكيميائي، وإزالة الشحوم، والفسفتة، وتحديد معالم السطح. نستخدم معدات السفع بالكرات الأوتوماتيكية وأنظمة المعالجة المسبقة متعددة المراحل لضمان الالتصاق الأمثل وأداء الطلاء.",
        surfacePreparationP2: "تتعامل قدرات معالجة الأسطح المعدنية لدينا مع الألومنيوم والصلب والفولاذ المقاوم للصدأ والمعادن المجلفنة والركائز السبائكية المختلفة. تتلقى كل مادة بروتوكولات تحضير متخصصة لتحقيق أقصى قدر من التصاق الطلاء والمتانة والجاذبية الجمالية.",
        
        powderVsPaintTitle: "لماذا الطلاء بالمسحوق أفضل من الطلاء التقليدي",
        powderVsPaintP1: "يوفر الطلاء بالمسحوق مزايا كبيرة مقارنة بأنظمة الطلاء السائل التقليدية. على عكس الطلاء الرطب الذي يتطلب مذيبات وينبعث منه مركبات عضوية متطايرة (VOCs)، فإن الطلاء بالمسحوق هو طريقة تشطيب صديقة للبيئة تنتج الحد الأدنى من النفايات والانبعاثات الضارة. يمكن استرداد الرش الزائد للمسحوق وإعادة استخدامه، مما يجعله حلاً مستدامًا وفعالاً من حيث التكلفة لطلاء المعادن.",
        powderVsPaintP2: "تفوق متانة الأسطح المطلية بالمسحوق بكثير الطلاء التقليدي. ينشئ الطلاء بالمسحوق طبقة أكثر سمكًا وموحدة تقاوم التقشر والخدش والبهتان والتآكل. تترجم هذه المتانة المعززة إلى دورات حياة أطول للمنتج، وانخفاض تكاليف الصيانة، وحماية فائقة ضد الظروف البيئية القاسية بما في ذلك درجات الحرارة الشديدة، والرطوبة، والتعرض للملح، والأشعة فوق البنفسجية.",
        powderVsPaintP3: "توفر خدمات الطلاء بالمسحوق لدينا جودة تشطيب استثنائية بمظهر جمالي ناعم وعالي الجودة. تضمن عملية التطبيق الكهروستاتيكي تغطية كاملة، حتى على الأشكال الهندسية المعقدة والمناطق التي يصعب الوصول إليها. تخلق عملية المعالجة عالية الحرارة سطحًا مرتبطًا كيميائيًا يوفر التصاقًا وخصائص أداء لا مثيل لها.",
        
        industriesServedTitle: "الصناعات التي تخدمها خدمات طلاء المعادن لدينا",
        architecturalTitle: "طلاء المعادن المعمارية",
        architecturalDesc: "خدمات طلاء مسحوق متميزة للنوافذ والأبواب والواجهات والعناصر الهيكلية",
        automotiveTitle: "طلاء المعادن للسيارات",
        automotiveDesc: "طلاءات متينة لقطع غيار السيارات والهيكل والعجلات والتطبيقات السيارات المخصصة",
        industrialTitle: "طلاء المعادن الصناعية",
        industrialDesc: "طلاءات واقية فائقة التحمل للآلات والمعدات ومكونات التصنيع",
        furnitureTitle: "طلاء المعادن للأثاث",
        furnitureDesc: "تشطيبات زخرفية ووقائية لقطع الأثاث الداخلي والخارجي",
        
        qualityAssuranceTitle: "ضمان الجودة والقدرات التقنية",
        coatingFacilityTitle: "منشأة طلاء حديثة",
        coatingFacility1: "نظام طلاء مسحوق ناقل أوتوماتيكي مع ضوابط تطبيق دقيقة",
        coatingFacility2: "مسدسات رش كهروستاتيكية عالية الكفاءة لتوزيع المسحوق الموحد",
        coatingFacility3: "أفران معالجة صناعية مع تحكم ومراقبة دقيقة لدرجة الحرارة",
        coatingFacility4: "أنظمة متقدمة لجمع الغبار واسترداد المسحوق",
        coatingFacility5: "خزانات معالجة كيميائية متعددة المراحل للتحضير الأمثل للسطح",
        coatingFacility6: "آلات السفع بالكرات الأوتوماتيكية لتحديد معالم السطح فائق التحمل",
        
        qualityControlTitle: "معايير مراقبة الجودة",
        qualityControl1: "إجراءات قياس والتحقق من سمك الطلاء الصارمة",
        qualityControl2: "اختبار الالتصاق باستخدام طرق الفتحة المتقاطعة والسحب",
        qualityControl3: "مطابقة اللون والتحقق من الاتساق مع قياس الطيف الضوئي",
        qualityControl4: "اختبار رذاذ الملح للتحقق من مقاومة التآكل",
        qualityControl5: "اختبار التعرض للأشعة فوق البنفسجية لتقييم المتانة الخارجية",
        qualityControl6: "توثيق كامل وإمكانية التتبع لجميع دفعات الطلاء",
        
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
        
        environmentalTitle: "المسؤولية البيئية في طلاء المعادن",
        environmentalP1: "الهدف لطلاء المعادن ذ.م.م ملتزمة بممارسات التشطيب المعدني المستدامة بيئيًا. تقلل عمليات الطلاء بالمسحوق لدينا بشكل كبير من التأثير البيئي مقارنة بأنظمة الطلاء الرطب التقليدية. نعمل مع انبعاثات VOC صفرية، وتوليد الحد الأدنى من النفايات، وأنظمة استرداد المسحوق الشاملة التي تعيد تدوير مواد الرش الزائد.",
        environmentalP2: "تطبق منشأتنا تدابير الحفاظ على المياه، وأفران المعالجة الموفرة للطاقة، وبروتوكولات إدارة المواد الكيميائية المسؤولة. نتعاون مع مصنعي الطلاء بالمسحوق المعتمدين الذين يعطون الأولوية للصيغ الصديقة للبيئة وطرق الإنتاج المستدامة. يمتد التزامنا بالإشراف البيئي في جميع عملياتنا، من تحديد مصادر المواد إلى التخلص من النفايات.",
        environmentalP3: "من خلال اختيار خدمات الطلاء بالمسحوق لدينا، يساهم العملاء في تقليل التلوث الصناعي مع الحصول على أداء طلاء فائق. تساعد حلول طلاء المعادن الخضراء لدينا الشركات على تحقيق أهداف الاستدامة دون المساس بالجودة أو المتانة أو المتطلبات الجمالية.",
        
        founderMessageTitle: "رسالة من المؤسس",
        founderMessage: "في الهدف لطلاء المعادن، مهمتنا بسيطة – إعادة تعريف الكمال السطحي من خلال التكنولوجيا والحرفية. كل طلاء نطبقه يعكس تفانينا في الجودة والاستدامة والشراكات طويلة الأجل مع عملائنا.",
        founderMessage2: "مع أكثر من 15 عامًا من الخبرة في هذا المجال، أفخر بقيادة فريق يشاركني نفس الشغف بالتميز والابتكار. رحلتنا مبنية على الثقة والدقة والالتزام بتقديم نتائج لا مثيل لها.",
        founderSignature: "– المؤسس والرئيس التنفيذي",
        
        visionTitle: "رؤيتنا",
        visionDescription: "أن نكون رائدين عالميين في حلول طلاء المعادن، معترف بهم لالتزامنا بالجودة والاستدامة.",
        
        missionTitle: "مهمتنا",
        missionDescription: "تقديم حلول طلاء مبتكرة ومستدامة تتجاوز توقعات العملاء.",
        
        whyChooseUsTitle: "لماذا تختار الهدف لخدمات طلاء المعادن",
        expertProfessionalsTitle: "متخصصون خبراء في طلاء المعادن",
        expertProfessionalsDesc: "يتألف فريقنا من متخصصين مدربين تدريباً عالياً في الطلاء بالمسحوق مع خبرة واسعة في تشطيب الأسطح المعدنية. نضمن أن كل مشروع يلبي أعلى معايير الجودة من خلال الاهتمام الدقيق بالتفاصيل والخبرة الفنية.",
        
        fastTurnaroundTitle: "وقت تسليم سريع",
        fastTurnaroundDesc: "نحن ندرك أهمية الجداول الزمنية للمشروع. تضمن عمليات الطلاء بالمسحوق الفعالة وسير العمل المبسط لدينا أوقات تسليم سريعة دون المساس بالجودة. خدمات الطلاء في نفس اليوم والخدمات السريعة متاحة للمتطلبات العاجلة.",
        
        customColorTitle: "مطابقة الألوان المخصصة",
        customColorDesc: "الوصول إلى آلاف ألوان RAL و Pantone والطلاء بالمسحوق المخصص. تضمن قدراتنا على مطابقة الألوان الاتساق المثالي عبر الدفعات. نقدم عينات الألوان ويمكننا مطابقة أي مواصفات تشطيب موجودة.",
        
        competitivePricingTitle: "أسعار تنافسية",
        competitivePricingDesc: "نقدم حلول طلاء مسحوق فعالة من حيث التكلفة دون التضحية بالجودة. أسعار شفافة، بدون رسوم مخفية، وخصومات الحجم متاحة للمشاريع واسعة النطاق. احصل على عرض أسعار مجاني لمتطلبات طلاء المعادن الخاصة بك.",
        
        guaranteedDurabilityTitle: "متانة مضمونة",
        guaranteedDurabilityDesc: "تأتي جميع تشطيبات الطلاء بالمسحوق لدينا مع ضمانات المتانة. مقاومة مثبتة للعوامل الجوية والتآكل والمواد الكيميائية والأضرار الميكانيكية. حماية طويلة الأمد تحافظ على المظهر لسنوات.",
        
        customerCentricTitle: "خدمة تتمحور حول العملاء",
        customerCentricDesc: "مديرو حسابات متخصصون، استشارات مجانية، خدمات الاستلام والتوصيل متاحة. نعمل عن كثب مع العملاء لفهم المتطلبات وتقديم حلول طلاء معدنية مخصصة تتجاوز التوقعات.",
        
        applicationsTitle: "تطبيقات وقدرات الطلاء بالمسحوق",
        architecturalComponentsTitle: "المكونات المعمارية",
        architecturalComponent1: "• إطارات النوافذ الألومنيوم والملفات الشخصية",
        architecturalComponent2: "• الأبواب المعدنية وإطارات الأبواب",
        architecturalComponent3: "• أنظمة الستائر الجدارية والواجهات",
        architecturalComponent4: "• الدرابزين والقضبان والبلاستر",
        architecturalComponent5: "• ألواح الكسوة والستائر الهوائية",
        architecturalComponent6: "• مكونات الفولاذ الهيكلي",
        architecturalComponent7: "• الأعمال المعدنية الزخرفية والشبكات",
        
        industrialManufacturingTitle: "الصناعية والتصنيع",
        industrialManufacturing1: "• هياكل الآلات والأغلفة",
        industrialManufacturing2: "• لوحات التحكم والخزائن الكهربائية",
        industrialManufacturing3: "• رفوف التخزين وأنظمة الرفوف",
        industrialManufacturing4: "• مكونات الناقل والحراس",
        industrialManufacturing5: "• معدات HVAC والقنوات",
        industrialManufacturing6: "• أجزاء معدات التصنيع",
        industrialManufacturing7: "• حواجز السلامة والحراس الواقية",
        
        consumerCommercialTitle: "الاستهلاكية والتجارية",
        consumerCommercial1: "• أثاث المكاتب والأثاث الخارجي",
        consumerCommercial2: "• قطع غيار السيارات والملحقات",
        consumerCommercial3: "• إطارات الدراجات والمكونات",
        consumerCommercial4: "• هياكل الأجهزة واللوحات",
        consumerCommercial5: "• تركيبات الإضاءة والأعمدة",
        consumerCommercial6: "• أنظمة اللافتات والعرض",
        consumerCommercial7: "• معدات الملاعب والهياكل",
        
        readyToTransformTitle: "هل أنت مستعد لتحويل أسطحك المعدنية؟",
        readyToTransformDesc: "اتصل بالهدف لطلاء المعادن ذ.م.م اليوم للحصول على خدمات الطلاء بالمسحوق الاحترافية في الإمارات. خبراؤنا مستعدون لمناقشة متطلبات مشروعك وتقديم حلول مخصصة لجميع احتياجاتك في تشطيب المعادن.",
        getFreeQuote: "احصل على عرض أسعار مجاني",
        viewServices: "عرض الخدمات",
        
        meetTeamTitle: "تعرف على فريقنا",
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
            shortDesc: "نمط كلاسيكي عتيق لأغراض الزينة.",
          },
        },
      },

      servicePage: {
        heading: "سحر السطح – تشطيبات فاخرة",
        sub: "اختر خدمة لمعرفة المزيد عن قدراتنا.",
        quoteBtn: "احصل على عرض سعر",
      },

      powderPage: {
        heading: "الطلاء بالمسحوق",
        tagline: "متين. نابض بالحياة. طويل الأمد – ثورة في الطلاء.",
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
        blog: "ब्लॉग्स और परियोजनाएं",
        videos: "वीडियो",
        testimonials: "प्रशंसापत्र",
        contact: "संपर्क करें",
      },

      header: {
        location: "अल-हदफ मेटल कोटिंग एलएलसी",
        announcement: "🎉 ईद-मिलाद-उन-नबी – सभी सेवाओं पर 20% की छूट! 🎉",
        enquireNow: "अभी पूछताछ करें",
        menu: "मेनू",
      },

      footer: {
        usefulLinks: "उपयोगी लिंक",
        privacy: "गोपनीयता नीति",
        more: "अधिक",
        contact: "संपर्क",
        connect: "जुड़ें",
        changeLang: "भाषा बदलें",
        whatsapp: "व्हाट्सऐप",
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
        requirements: "आवश्यकताएं",
        requirementsPlaceholder: "अपनी आवश्यकताएं दर्ज करें",
        submit: "सबमिट",
        sending: "भेजा जा रहा है...",
        success: "✅ आपका संदेश सफलतापूर्वक भेजा गया!",
        error: "❌ कुछ गलत हो गया, कृपया पुनः प्रयास करें।",
        failed: "❌ संदेश भेजने में विफल।",
      },

      about: {
        title: "हमारे बारे में",
        heroTitle: "अल-हदफ मेटल कोटिंग एलएलसी के बारे में",
        heroDescription: "2022 में हमारी स्थापना के बाद से सतह फिनिशिंग और धातु कोटिंग समाधान में उत्कृष्टता प्रदान करना – उद्योग में 15 से अधिक वर्षों के व्यावहारिक अनुभव द्वारा समर्थित।",
        
        companyOverviewTitle: "अल-हदफ मेटल कोटिंग एलएलसी के बारे में",
        companyOverviewP1: "अल-हदफ मेटल कोटिंग एलएलसी यूएई में एक प्रमुख मेटल कोटिंग कंपनी है, जो उन्नत पाउडर कोटिंग सेवाओं और सतह फिनिशिंग समाधानों में विशेषज्ञता रखती है। अत्याधुनिक सुविधाओं और अत्याधुनिक तकनीक के साथ, हम बेहतर मेटल कोटिंग सेवाएं प्रदान करते हैं जो उद्योग मानकों और ग्राहक अपेक्षाओं को पार करती हैं।",
        companyOverviewP2: "हमारी व्यापक मेटल कोटिंग सेवाओं में पाउडर कोटिंग, सैंडब्लास्टिंग, जिंक कोटिंग, इलेक्ट्रोस्टैटिक कोटिंग और विविध औद्योगिक अनुप्रयोगों के लिए विशेष सुरक्षात्मक कोटिंग्स शामिल हैं। हम दुबई, शारजाह, अजमान और संपूर्ण संयुक्त अरब अमीरात में ग्राहकों को पेशेवर मेटल फिनिशिंग समाधान प्रदान करते हैं।",
        
        whoWeAreTitle: "हम कौन हैं",
        whoWeAreDescription: "2022 में स्थापित, अल-हदफ मेटल कोटिंग एलएलसी यूएई में सतह फिनिशिंग और मेटल कोटिंग सेवाओं के अग्रणी प्रदाताओं में से एक बन गया है। मेटल कोटिंग उद्योग में 15 से अधिक वर्षों के अनुभव के साथ, हम सटीकता, स्थायित्व और शीर्ष-गुणवत्ता शिल्प कौशल पर गर्व करते हैं।",
        whoWeAreDescription2: "हमारी टीम कोटिंग प्रौद्योगिकियों की एक विस्तृत श्रृंखला में विशेषज्ञता रखती है, यह सुनिश्चित करते हुए कि औद्योगिक अनुप्रयोगों से लेकर वास्तुशिल्प फिनिश तक हर परियोजना उच्चतम अंतर्राष्ट्रीय मानकों को पूरा करती है। हम समय की कसौटी पर खरे उतरने वाले परिणाम देने के लिए नवाचार, स्थिरता और ग्राहक संतुष्टि को मिलाने में विश्वास करते हैं।",
        
        industryExpertiseTitle: "यूएई में मेटल कोटिंग उद्योग का नेतृत्व",
        powderCoatingTechTitle: "उन्नत पाउडर कोटिंग प्रौद्योगिकी",
        powderCoatingTechP1: "हमारी पाउडर कोटिंग सुविधा धातु सतहों पर सूखे पाउडर कणों को लागू करने के लिए इलेक्ट्रोस्टैटिक स्प्रे डिपोजिशन तकनीक का उपयोग करती है। पाउडर कोटिंग प्रक्रिया में पाउडर कणों को इलेक्ट्रोस्टैटिक रूप से चार्ज करना शामिल है, जो फिर ग्राउंडेड मेटल ऑब्जेक्ट्स की ओर आकर्षित होते हैं। आवेदन के बाद, लेपित वस्तुओं को उच्च-तापमान ओवन में ठीक किया जाता है, एक टिकाऊ, समान फिनिश बनाता है जो प्रदर्शन और दीर्घायु में पारंपरिक तरल पेंट को पार करता है।",
        powderCoatingTechP2: "हम चमकदार, मैट, बनावट, धातु और विशेष प्रभावों सहित पाउडर कोटिंग फिनिश की एक विस्तृत श्रृंखला प्रदान करते हैं। हमारी मेटल कोटिंग सेवाएं इनडोर और आउटडोर दोनों अनुप्रयोगों के लिए बेहतर जंग प्रतिरोध, यूवी सुरक्षा, रासायनिक प्रतिरोध और असाधारण स्थायित्व प्रदान करती हैं।",
        
        surfacePreparationTitle: "व्यापक सतह तैयारी",
        surfacePreparationP1: "गुणवत्ता मेटल कोटिंग उचित सतह तैयारी से शुरू होती है। हमारी उन्नत पूर्व-उपचार प्रक्रियाओं में सैंडब्लास्टिंग, रासायनिक सफाई, डीग्रीजिंग, फॉस्फेटिंग और सतह प्रोफाइलिंग शामिल है। हम इष्टतम आसंजन और कोटिंग प्रदर्शन सुनिश्चित करने के लिए स्वचालित शॉट ब्लास्टिंग उपकरण और बहु-चरण पूर्व-उपचार प्रणालियों का उपयोग करते हैं।",
        surfacePreparationP2: "हमारी धातु सतह उपचार क्षमताएं एल्यूमीनियम, स्टील, स्टेनलेस स्टील, जस्ती धातु और विभिन्न मिश्र धातु सब्सट्रेट को संभालती हैं। प्रत्येक सामग्री को अधिकतम कोटिंग आसंजन, स्थायित्व और सौंदर्य अपील प्राप्त करने के लिए विशेष तैयारी प्रोटोकॉल प्राप्त होता है।",
        
        powderVsPaintTitle: "पाउडर कोटिंग पारंपरिक पेंट से बेहतर क्यों है",
        powderVsPaintP1: "पाउडर कोटिंग पारंपरिक तरल पेंट प्रणालियों की तुलना में महत्वपूर्ण लाभ प्रदान करती है। गीले पेंट के विपरीत जिसमें सॉल्वैंट्स की आवश्यकता होती है और वाष्पशील कार्बनिक यौगिक (VOCs) उत्सर्जित होते हैं, पाउडर कोटिंग एक पर्यावरण के अनुकूल फिनिशिंग विधि है जो न्यूनतम अपशिष्ट और हानिकारक उत्सर्जन उत्पन्न करती है। पाउडर ओवरस्प्रे को पुनर्प्राप्त और पुन: उपयोग किया जा सकता है, जिससे यह एक टिकाऊ और लागत प्रभावी मेटल कोटिंग समाधान बन जाता है।",
        powderVsPaintP2: "पाउडर कोटेड सतहों की स्थायित्व पारंपरिक पेंट से कहीं अधिक है। पाउडर कोटिंग एक मोटी, अधिक समान कोटिंग बनाती है जो चिपिंग, खरोंच, फीका और पहनने का प्रतिरोध करती है। यह बढ़ी हुई स्थायित्व लंबे उत्पाद जीवनचक्र, कम रखरखाव लागत और चरम तापमान, आर्द्रता, नमक जोखिम और यूवी विकिरण सहित कठोर पर्यावरणीय परिस्थितियों के खिलाफ बेहतर सुरक्षा में परिवर्तित होती है।",
        powderVsPaintP3: "हमारी पाउडर कोटिंग सेवाएं चिकने, पेशेवर-ग्रेड सौंदर्यशास्त्र के साथ असाधारण फिनिश गुणवत्ता प्रदान करती हैं। इलेक्ट्रोस्टैटिक एप्लिकेशन प्रक्रिया पूर्ण कवरेज सुनिश्चित करती है, यहां तक कि जटिल ज्यामिति और पहुंचने में कठिन क्षेत्रों पर भी। उच्च-तापमान इलाज प्रक्रिया एक रासायनिक रूप से बंधी सतह बनाती है जो बेजोड़ आसंजन और प्रदर्शन विशेषताओं को प्रदान करती है।",
        
        industriesServedTitle: "हमारी मेटल कोटिंग सेवाओं द्वारा सेवा किए गए उद्योग",
        architecturalTitle: "आर्किटेक्चरल मेटल कोटिंग",
        architecturalDesc: "खिड़कियों, दरवाजों, मुखौटों और संरचनात्मक तत्वों के लिए प्रीमियम पाउडर कोटिंग सेवाएं",
        automotiveTitle: "ऑटोमोटिव मेटल कोटिंग",
        automotiveDesc: "वाहन भागों, चेसिस, पहियों और कस्टम ऑटोमोटिव अनुप्रयोगों के लिए टिकाऊ कोटिंग्स",
        industrialTitle: "औद्योगिक मेटल कोटिंग",
        industrialDesc: "मशीनरी, उपकरण और विनिर्माण घटकों के लिए हेवी-ड्यूटी सुरक्षात्मक कोटिंग्स",
        furnitureTitle: "फर्नीचर मेटल कोटिंग",
        furnitureDesc: "इनडोर और आउटडोर फर्नीचर टुकड़ों के लिए सजावटी और सुरक्षात्मक फिनिश",
        
        qualityAssuranceTitle: "गुणवत्ता आश्वासन और तकनीकी क्षमताएं",
        coatingFacilityTitle: "अत्याधुनिक कोटिंग सुविधा",
        coatingFacility1: "सटीक अनुप्रयोग नियंत्रण के साथ स्वचालित कन्वेयर पाउडर कोटिंग प्रणाली",
        coatingFacility2: "समान पाउडर वितरण के लिए उच्च-दक्षता इलेक्ट्रोस्टैटिक स्प्रे गन",
        coatingFacility3: "सटीक तापमान नियंत्रण और निगरानी के साथ औद्योगिक इलाज ओवन",
        coatingFacility4: "उन्नत धूल संग्रह और पाउडर रिकवरी प्रणाली",
        coatingFacility5: "इष्टतम सतह तैयारी के लिए बहु-चरण रासायनिक पूर्व-उपचार टैंक",
        coatingFacility6: "हेवी-ड्यूटी सतह प्रोफाइलिंग के लिए स्वचालित शॉट ब्लास्टिंग मशीन",
        
        qualityControlTitle: "गुणवत्ता नियंत्रण मानक",
        qualityControl1: "कठोर कोटिंग मोटाई माप और सत्यापन प्रक्रियाएं",
        qualityControl2: "क्रॉस-हैच और पुल-ऑफ विधियों का उपयोग करके आसंजन परीक्षण",
        qualityControl3: "स्पेक्ट्रोफोटोमेट्री के साथ रंग मिलान और स्थिरता सत्यापन",
        qualityControl4: "जंग प्रतिरोध सत्यापन के लिए नमक स्प्रे परीक्षण",
        qualityControl5: "बाहरी स्थायित्व मूल्यांकन के लिए यूवी एक्सपोजर परीक्षण",
        qualityControl6: "सभी कोटिंग बैचों के लिए पूर्ण दस्तावेज़ीकरण और ट्रेसेबिलिटी",
        
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
        
        environmentalTitle: "मेटल कोटिंग में पर्यावरणीय जिम्मेदारी",
        environmentalP1: "अल-हदफ मेटल कोटिंग एलएलसी पर्यावरणीय रूप से टिकाऊ मेटल फिनिशिंग प्रथाओं के लिए प्रतिबद्ध है। हमारी पाउडर कोटिंग प्रक्रियाएं पारंपरिक गीले पेंट प्रणालियों की तुलना में पर्यावरणीय प्रभाव को काफी कम करती हैं। हम शून्य VOC उत्सर्जन, न्यूनतम अपशिष्ट उत्पादन और व्यापक पाउडर रिकवरी प्रणालियों के साथ काम करते हैं जो ओवरस्प्रे सामग्री को पुनर्चक्रित करती हैं।",
        environmentalP2: "हमारी सुविधा जल संरक्षण उपाय, ऊर्जा-कुशल इलाज ओवन और जिम्मेदार रासायनिक प्रबंधन प्रोटोकॉल लागू करती है। हम प्रमाणित पाउडर कोटिंग निर्माताओं के साथ भागीदारी करते हैं जो पर्यावरण-अनुकूल फॉर्मूलेशन और टिकाऊ उत्पादन विधियों को प्राथमिकता देते हैं। पर्यावरणीय प्रबंधन के प्रति हमारी प्रतिबद्धता सामग्री सोर्सिंग से लेकर अपशिष्ट निपटान तक हमारे पूरे संचालन में फैली हुई है।",
        environmentalP3: "हमारी पाउडर कोटिंग सेवाओं को चुनकर, ग्राहक बेहतर कोटिंग प्रदर्शन प्राप्त करते हुए औद्योगिक प्रदूषण को कम करने में योगदान करते हैं। हमारे हरित मेटल कोटिंग समाधान व्यवसायों को गुणवत्ता, स्थायित्व या सौंदर्य आवश्यकताओं से समझौता किए बिना स्थिरता लक्ष्यों को पूरा करने में मदद करते हैं।",
        
        founderMessageTitle: "हमारे संस्थापक का संदेश",
        founderMessage: "अल-हदफ मेटल कोटिंग में, हमारा मिशन सरल है – प्रौद्योगिकी और शिल्प कौशल के माध्यम से सतह की पूर्णता को फिर से परिभाषित करना। हम जो भी कोटिंग लगाते हैं वह गुणवत्ता, स्थिरता और हमारे ग्राहकों के साथ दीर्घकालिक साझेदारी के प्रति हमारे समर्पण को दर्शाती है।",
        founderMessage2: "इस क्षेत्र में 15 से अधिक वर्षों के अनुभव के साथ, मैं एक ऐसी टीम का नेतृत्व करने पर गर्व करता हूं जो उत्कृष्टता और नवाचार के लिए समान जुनून साझा करती है। हमारी यात्रा विश्वास, सटीकता और बेजोड़ परिणाम देने की प्रतिबद्धता पर बनी है।",
        founderSignature: "– अल-हदफ, संस्थापक और सीईओ",
        
        visionTitle: "हमारा दृष्टिकोण",
        visionDescription: "मेटल कोटिंग समाधान में एक वैश्विक नेता बनना, गुणवत्ता और स्थिरता के प्रति हमारी प्रतिबद्धता के लिए मान्यता प्राप्त।",
        
        missionTitle: "हमारा मिशन",
        missionDescription: "नवीन और स्थिर मेटल कोटिंग समाधान प्रदान करना जो ग्राहक अपेक्षाओं से परे हो।",
        
        whyChooseUsTitle: "मेटल कोटिंग सेवाओं के लिए अल-हदफ क्यों चुनें",
        expertProfessionalsTitle: "विशेषज्ञ मेटल कोटिंग पेशेवर",
        expertProfessionalsDesc: "हमारी टीम अत्यधिक प्रशिक्षित पाउडर कोटिंग विशेषज्ञों से बनी है जिनके पास मेटल सतह फिनिशिंग में व्यापक अनुभव है। हम सावधानीपूर्वक विवरण पर ध्यान और तकनीकी विशेषज्ञता के माध्यम से सुनिश्चित करते हैं कि प्रत्येक परियोजना उच्चतम गुणवत्ता मानकों को पूरा करती है।",
        
        fastTurnaroundTitle: "तेज टर्नअराउंड समय",
        fastTurnaroundDesc: "हम परियोजना समय-सीमा के महत्व को समझते हैं। हमारी कुशल पाउडर कोटिंग प्रक्रियाएं और सुव्यवस्थित वर्कफ़्लो गुणवत्ता से समझौता किए बिना त्वरित टर्नअराउंड समय सुनिश्चित करते हैं। तत्काल आवश्यकताओं के लिए समान-दिन और एक्सप्रेस कोटिंग सेवाएं उपलब्ध हैं।",
        
        customColorTitle: "कस्टम रंग मिलान",
        customColorDesc: "हजारों RAL, Pantone और कस्टम पाउडर कोटिंग रंगों तक पहुंच। हमारी रंग मिलान क्षमताएं बैचों में पूर्ण स्थिरता सुनिश्चित करती हैं। हम रंग नमूने प्रदान करते हैं और किसी भी मौजूदा फिनिश विनिर्देश से मेल खा सकते हैं।",
        
        competitivePricingTitle: "प्रतिस्पर्धी मूल्य निर्धारण",
        competitivePricingDesc: "हम गुणवत्ता का त्याग किए बिना लागत प्रभावी पाउडर कोटिंग समाधान प्रदान करते हैं। पारदर्शी मूल्य निर्धारण, कोई छिपी हुई फीस नहीं, और बड़े पैमाने की परियोजनाओं के लिए वॉल्यूम छूट उपलब्ध है। अपनी मेटल कोटिंग आवश्यकताओं के लिए निःशुल्क उद्धरण प्राप्त करें।",
        
        guaranteedDurabilityTitle: "गारंटीकृत स्थायित्व",
        guaranteedDurabilityDesc: "हमारे सभी पाउडर कोटेड फिनिश स्थायित्व वारंटी के साथ आते हैं। मौसम, जंग, रसायनों और यांत्रिक क्षति के लिए सिद्ध प्रतिरोध। लंबे समय तक चलने वाली सुरक्षा जो वर्षों तक उपस्थिति बनाए रखती है।",
        
        customerCentricTitle: "ग्राहक-केंद्रित सेवा",
        customerCentricDesc: "समर्पित खाता प्रबंधक, मुफ्त परामर्श, पिकअप और डिलीवरी सेवाएं उपलब्ध। हम आवश्यकताओं को समझने और अनुकूलित मेटल कोटिंग समाधान प्रदान करने के लिए ग्राहकों के साथ मिलकर काम करते हैं जो अपेक्षाओं को पार करते हैं।",
        
        applicationsTitle: "पाउडर कोटिंग अनुप्रयोग और क्षमताएं",
        architecturalComponentsTitle: "आर्किटेक्चरल घटक",
        architecturalComponent1: "• एल्यूमीनियम खिड़की के फ्रेम और प्रोफाइल",
        architecturalComponent2: "• मेटल दरवाजे और दरवाजे के फ्रेम",
        architecturalComponent3: "• पर्दे की दीवार प्रणाली और मुखौटे",
        architecturalComponent4: "• रेलिंग, हैंड्रेल और बलस्टर",
        architecturalComponent5: "• क्लैडिंग पैनल और लुवर्स",
        architecturalComponent6: "• संरचनात्मक स्टील घटक",
        architecturalComponent7: "• सजावटी धातु का काम और ग्रिल्स",
        
        industrialManufacturingTitle: "औद्योगिक और विनिर्माण",
        industrialManufacturing1: "• मशीनरी हाउसिंग और एनक्लोजर",
        industrialManufacturing2: "• नियंत्रण पैनल और बिजली के कैबिनेट",
        industrialManufacturing3: "• भंडारण रैक और शेल्फ प्रणाली",
        industrialManufacturing4: "• कन्वेयर घटक और गार्ड",
        industrialManufacturing5: "• HVAC उपकरण और डक्टवर्क",
        industrialManufacturing6: "• विनिर्माण उपकरण भागों",
        industrialManufacturing7: "• सुरक्षा बाधाएं और सुरक्षात्मक गार्ड",
        
        consumerCommercialTitle: "उपभोक्ता और वाणिज्यिक",
        consumerCommercial1: "• कार्यालय और बाहरी फर्नीचर",
        consumerCommercial2: "• ऑटोमोटिव पार्ट्स और एक्सेसरीज़",
        consumerCommercial3: "• साइकिल फ्रेम और घटक",
        consumerCommercial4: "• उपकरण हाउसिंग और पैनल",
        consumerCommercial5: "• प्रकाश फिक्स्चर और पोल",
        consumerCommercial6: "• साइनेज और डिस्प्ले सिस्टम",
        consumerCommercial7: "• खेल का मैदान उपकरण और संरचनाएं",
        
        readyToTransformTitle: "अपनी धातु सतहों को बदलने के लिए तैयार हैं?",
        readyToTransformDesc: "यूएई में पेशेवर पाउडर कोटिंग सेवाओं के लिए आज ही अल-हदफ मेटल कोटिंग एलएलसी से संपर्क करें। हमारे विशेषज्ञ आपकी परियोजना आवश्यकताओं पर चर्चा करने और आपकी सभी मेटल फिनिशिंग जरूरतों के लिए अनुकूलित समाधान प्रदान करने के लिए तैयार हैं।",
        getFreeQuote: "मुफ्त उद्धरण प्राप्त करें",
        viewServices: "सेवाएं देखें",
        
        meetTeamTitle: "हमारी टीम से मिलें",
        teamMembers: {
          hussain: {
            name: "हुसैन",
            role: "संस्थापक और सीईओ",
          },
          mannan: {
            name: "मन्नान मोइयेदी",
            role: "ऑपरेशंस मैनेजर",
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
            description: "अपने धातु को जंग से बचाएं।",
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
            description: "प्रीमियम उत्पादों के लिए लक्जरी धातु प्लेटिंग।",
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
        heading: "सतह का जादू – प्रीमियम फिनिश",
        sub: "हमारी क्षमताओं के बारे में अधिक जानने के लिए एक सेवा चुनें।",
        quoteBtn: "कोटेशन प्राप्त करें",
      },

      powderPage: {
        heading: "पाउडर कोटिंग",
        tagline: "टिकाऊ. चमकदार. लंबे समय तक चलने वाला – एक कोटिंग क्रांति।",
        tabs: {
          gallery: "गैलरी",
          video: "वीडियो",
          comment: "टिप्पणी",
        },
        tooltips: {
          gallery: "हमारे द्वारा किया गया कार्य",
          video: "अपनी आंखों से प्रक्रिया का अनुभव करें",
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
        antique: "പ്രാതന ഫിനിഷ്",
      },

      nav: {
        home: "ഹോം",
        services: "സേവനങ്ങൾ",
        about: "ഞങ്ങളെക്കുറിച്ച്",
        ralchart: "ആർ.എ.എൽ കളർ ചാർട്ട്",
        blog: "ബ്ലോഗുകളും പദ്ധതികളും",
        videos: "വീഡിയോകൾ",
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
        privacy: "സ്വകാര്യത നയം",
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
        namePlaceholder: "നിങ്ങളുടെ പേര് നൽക്കുക",
        email: "ഇമെയിൽ",
        emailPlaceholder: "നിങ്ങളുടെ ഇമെയിൽ നൽക്കുക",
        phone: "ബന്ധപ്പെടാനുള്ള നമ്പർ",
        phonePlaceholder: "നിങ്ങളുടെ ഫോൺ നമ്പർ നൽക്കുക",
        requirements: "ആവശ്യകതകൾ",
        requirementsPlaceholder: "നിങ്ങളുടെ ആവശ്യകതകൾ നൽക്കുക",
        submit: "സമർപ്പിക്കുക",
        sending: "അയയ്ക്കുന്നു...",
        success: "✅ നിങ്ങളുടെ സന്ദേശം വിജയകരമായി അയച്ചു!",
        error: "❌ എന്തോ കുഴപ്പം സംഭവിച്ചു, ദയവായി വീണ്ടും ശ്രമിക്കുക.",
        failed: "❌ സന്ദേശം അയയ്ക്കുന്നതിൽ പരാജയപ്പെട്ടു.",
      },

      about: {
        title: "ഞങ്ങളെക്കുറിച്ച്",
        heroTitle: "അൽ-ഹദഫ് മെറ്റൽ കോട്ടിംഗ് എൽഎൽസിയെ കുറിച്ച്",
        heroDescription: "2022-ൽ ഞങ്ങളുടെ സ്ഥാപനം മുതൽ ഉപരിതല ഫിനിഷിംഗ്, മെറ്റൽ കോട്ടിംഗ് സൊല്യൂഷനുകളിൽ മികവ് നൽകുന്നു – വ്യവസായത്തിൽ 15 വർഷത്തിലേറെ പ്രായോഗിക അനുഭവത്താൽ പിന്തുണയ്ക്കപ്പെടുന്നു.",
        
        companyOverviewTitle: "അൽ-ഹദഫ് മെറ്റൽ കോട്ടിംഗ് എൽഎൽസിയെ കുറിച്ച്",
        companyOverviewP1: "അൽ-ഹദഫ് മെറ്റൽ കോട്ടിംഗ് എൽഎൽസി യുഎഇയിലെ ഒരു പ്രമുഖ മെറ്റൽ കോട്ടിംഗ് കമ്പനിയാണ്, നൂതന പൗഡർ കോട്ടിംഗ് സേവനങ്ങളിലും ഉപരിതല ഫിനിഷിംഗ് സൊല്യൂഷനുകളിലും വിശേഷജ്ഞത നേടിയിട്ടുണ്ട്. അത്യാധുനിക സൗകര്യങ്ങളും നൂതന സാങ്കേതികവിദ്യയും ഉപയോഗിച്ച്, വ്യവസായ മാനദണ്ഡങ്ങളും ഉപഭോക്തൃ പ്രതീക്ഷകളും കവിയുന്ന മികച്ച മെറ്റൽ കോട്ടിംഗ് സേവനങ്ങൾ ഞങ്ങൾ നൽകുന്നു.",
        companyOverviewP2: "ഞങ്ങളുടെ സമഗ്ര മെറ്റൽ കോട്ടിംഗ് സേവനങ്ങളിൽ പൗഡർ കോട്ടിംഗ്, സാൻഡ്ബ്ലാസ്റ്റിംഗ്, സിങ്ക് കോട്ടിംഗ്, ഇലക്ട്രോസ്റ്റാറ്റിക് കോട്ടിംഗ്, വൈവിധ്യമാർന്ന വ്യാവസായിക ആപ്ലിക്കേഷനുകൾക്കുള്ള പ്രത്യേക സംരക്ഷണ കോട്ടിംഗുകൾ എന്നിവ ഉൾപ്പെടുന്നു. ദുബായ്, ഷാർജ, അജ്മാൻ, സംയുക്ത അറബ് എമിറേറ്റ്സിലുടനീളം ഞങ്ങൾ പ്രൊഫഷണൽ മെറ്റൽ ഫിനിഷിംഗ് സൊല്യൂഷനുകളുമായി ക്ലയന്റുകളെ സേവിക്കുന്നു.",
        
        whoWeAreTitle: "ഞങ്ങൾ ആരാണ്",
        whoWeAreDescription: "2022-ൽ സ്ഥാപിതമായ അൽ-ഹദഫ് മെറ്റൽ കോട്ടിംഗ് എൽഎൽസി യുഎഇയിലെ ഉപരിതല ഫിനിഷിംഗ്, മെറ്റൽ കോട്ടിംഗ് സേവനങ്ങളുടെ മുൻനിര ദാതാക്കളിൽ ഒന്നായി വേഗത്തിൽ മാറിയിരിക്കുന്നു. മെറ്റൽ കോട്ടിംഗ് വ്യവസായത്തിൽ 15 വർഷത്തിലേറെ പരിചയത്തോടെ, കൃത്യത, ദൃഢത, ഉയർന്ന നിലവാരമുള്ള കരകൗശലതയിൽ ഞങ്ങൾ അഭിമാനിക്കുന്നു.",
        whoWeAreDescription2: "വ്യാവസായിക ആപ്ലിക്കേഷനുകൾ മുതൽ വാസ്തുവിദ്യാപരമായ ഫിനിഷുകൾ വരെ ഓരോ പ്രോജക്ടും ഉയർന്ന അന്തർരാഷ്ട്ര മാനദണ്ഡങ്ങൾ പാലിക്കുന്നുവെന്ന് ഉറപ്പാക്കുന്ന വിപുലമായ കോട്ടിംഗ് സാങ്കേതികവിദ്യകളിൽ ഞങ്ങളുടെ ടീം വൈദഗ്ധ്യം നേടിയിട്ടുണ്ട്. കാലത്തിന്റെ പരീക്ഷയിൽ നിലനിൽക്കുന്ന ഫലങ്ങൾ നൽകാൻ നവീകരണവും സുസ്ഥിരതയും ഉപഭോക്തൃ സംതൃപ്തിയും സംയോജിപ്പിക്കുന്നതിൽ ഞങ്ങൾ വിശ്വസിക്കുന്നു.",
        
        industryExpertiseTitle: "യുഎഇയിൽ മെറ്റൽ കോട്ടിംഗ് വ്യവസായത്തിന് നേതൃത്വം നൽകുന്നു",
        powderCoatingTechTitle: "നൂതന പൗഡർ കോട്ടിംഗ് സാങ്കേതികവിദ്യ",
        powderCoatingTechP1: "ഞങ്ങളുടെ പൗഡർ കോട്ടിംഗ് സൗകര്യം മെറ്റൽ പ്രതലങ്ങളിൽ ഉണങ്ങിയ പൗഡർ കണികകൾ പ്രയോഗിക്കാൻ ഇലക്ട്രോസ്റ്റാറ്റിക് സ്പ്രേ ഡിപ്പോസിഷൻ സാങ്കേതികവിദ്യ ഉപയോഗിക്കുന്നു. പൗഡർ കോട്ടിംഗ് പ്രക്രിയയിൽ പൗഡർ കണികകളെ ഇലക്ട്രോസ്റ്റാറ്റിക്കായി ചാർജ് ചെയ്യുന്നത് ഉൾപ്പെടുന്നു, അവ പിന്നീട് ഗ്രൗണ്ട് ചെയ്ത മെറ്റൽ വസ്തുക്കളിലേക്ക് ആകർഷിക്കപ്പെടുന്നു. പ്രയോഗത്തിനുശേഷം, പൂശിയ ഇനങ്ങൾ ഉയർന്ന-താപനില ഓവനുകളിൽ സുഖപ്പെടുത്തുന്നു, പരമ്പരാഗത ദ്രാവക പെയിന്റിനെ പ്രകടനത്തിലും ദീർഘായുസ്സിലും മറികടക്കുന്ന ഒരു മോടിയുള്ള, ഏകീകൃത ഫിനിഷ് സൃഷ്ടിക്കുന്നു.",
        powderCoatingTechP2: "തിളങ്ങുന്ന, മാറ്റ്, ടെക്സ്ചർ ചെയ്ത, മെറ്റാലിക്, പ്രത്യേക ഇഫക്റ്റുകൾ എന്നിവ ഉൾപ്പെടെ വിപുലമായ പൗഡർ കോട്ടിംഗ് ഫിനിഷുകൾ ഞങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു. ഞങ്ങളുടെ മെറ്റൽ കോട്ടിംഗ് സേവനങ്ങൾ ഇൻഡോർ, ഔട്ട്ഡോർ ആപ്ലിക്കേഷനുകൾക്കായി മികച്ച നാശന പ്രതിരോധം, യുവി സംരക്ഷണം, രാസ പ്രതിരോധം, അസാധാരണമായ ദൃഢത എന്നിവ നൽകുന്നു.",
        
        surfacePreparationTitle: "സമഗ്ര ഉപരിതല തയ്യാറാക്കൽ",
        surfacePreparationP1: "ഗുണനിലവാരമുള്ള മെറ്റൽ കോട്ടിംഗ് ശരിയായ ഉപരിതല തയ്യാറാക്കലിൽ തുടങ്ങുന്നു. ഞങ്ങളുടെ നൂതന പ്രീ-ട്രീറ്റ്മെന്റ് പ്രക്രിയകളിൽ സാൻഡ്ബ്ലാസ്റ്റിംഗ്, കെമിക്കൽ ക്ലീനിംഗ്, ഡിഗ്രീസിംഗ്, ഫോസ്ഫേറ്റിംഗ്, സർഫേസ് പ്രൊഫൈലിംഗ് എന്നിവ ഉൾപ്പെടുന്നു. ഒപ്റ്റിമൽ അഡീഷനും കോട്ടിംഗ് പ്രകടനവും ഉറപ്പാക്കാൻ ഞങ്ങൾ ഓട്ടോമേറ്റഡ് ഷോട്ട് ബ്ലാസ്റ്റിംഗ് ഉപകരണങ്ങളും മൾട്ടി-സ്റ്റേജ് പ്രീ-ട്രീറ്റ്മെന്റ് സിസ്റ്റങ്ങളും ഉപയോഗിക്കുന്നു.",
        surfacePreparationP2: "ഞങ്ങളുടെ മെറ്റൽ സർഫേസ് ട്രീറ്റ്മെന്റ് കഴിവുകൾ അലുമിനിയം, സ്റ്റീൽ, സ്റ്റെയിൻലെസ് സ്റ്റീൽ, ഗാൽവനൈസ്ഡ് മെറ്റൽ, വിവിധ അലോയ് സബ്സ്ട്രേറ്റുകൾ എന്നിവ കൈകാര്യം ചെയ്യുന്നു. പരമാവധി കോട്ടിംഗ് അഡീഷൻ, ദൃഢത, സൗന്ദര്യാത്മക ആകർഷണം എന്നിവ നേടാൻ ഓരോ മെറ്റീരിയലിനും പ്രത്യേക തയ്യാറാക്കൽ പ്രോട്ടോക്കോളുകൾ ലഭിക്കുന്നു.",
        
        powderVsPaintTitle: "പരമ്പരാഗത പെയിന്റിനേക്കാൾ പൗഡർ കോട്ടിംഗ് മികച്ചത് എന്തുകൊണ്ട്",
        powderVsPaintP1: "പരമ്പരാഗത ദ്രാവക പെയിന്റ് സിസ്റ്റങ്ങളെ അപേക്ഷിച്ച് പൗഡർ കോട്ടിംഗ് ഗണ്യമായ പ്രയോജനങ്ങൾ നൽകുന്നു. ലായകങ്ങൾ ആവശ്യമുള്ളതും അസ്ഥിര ഓർഗാനിക് സംയുക്തങ്ങൾ (VOC കൾ) പുറത്തുവിടുന്നതുമായ നനഞ്ഞ പെയിന്റിൽ നിന്ന് വ്യത്യസ്തമായി, പൗഡർ കോട്ടിംഗ് കുറഞ്ഞ മാലിന്യവും ദോഷകരമായ ഉദ്വമനങ്ങളും ഉത്പാദിപ്പിക്കുന്ന പരിസ്ഥിതി സൗഹൃദ ഫിനിഷിംഗ് രീതിയാണ്. പൗഡർ ഓവർസ്പ്രേ വീണ്ടെടുക്കാനും പുനരുപയോഗിക്കാനും കഴിയും, ഇത് സുസ്ഥിരവും ചെലവ് കുറഞ്ഞതുമായ മെറ്റൽ കോട്ടിംഗ് പരിഹാരമാക്കി മാറ്റുന്നു.",
        powderVsPaintP2: "പൗഡർ കോട്ട് ചെയ്ത പ്രതലങ്ങളുടെ ദൃഢത പരമ്പരാഗത പെയിന്റിനേക്കാൾ വളരെ കൂടുതലാണ്. പൗഡർ കോട്ടിംഗ് ചിപ്പിംഗ്, സ്ക്രാച്ചിംഗ്, മങ്ങൽ, തേയ്മാനം എന്നിവയെ പ്രതിരോധിക്കുന്ന കട്ടിയുള്ള, കൂടുതൽ ഏകീകൃത കോട്ടിംഗ് സൃഷ്ടിക്കുന്നു. ഈ മെച്ചപ്പെട്ട ദൃഢത ദൈർഘ്യമേറിയ ഉൽപ്പന്ന ജീവിതചക്രങ്ങൾ, കുറഞ്ഞ അറ്റകുറ്റപ്പണി ചെലവുകൾ, കഠിനമായ താപനില, ഈർപ്പം, ഉപ്പ് എക്സ്പോഷർ, യുവി റേഡിയേഷൻ എന്നിവ ഉൾപ്പെടെയുള്ള കഠിനമായ പരിസ്ഥിതി സാഹചര്യങ്ങൾക്കെതിരായ മികച്ച സംരക്ഷണം എന്നിവയിലേക്ക് വിവർത്തനം ചെയ്യുന്നു.",
        powderVsPaintP3: "ഞങ്ങളുടെ പൗഡർ കോട്ടിംഗ് സേവനങ്ങൾ മിനുസമാർന്ന, പ്രൊഫഷണൽ-ഗ്രേഡ് സൗന്ദര്യശാസ്ത്രത്തോടുകൂടിയ അസാധാരണമായ ഫിനിഷ് ഗുണനിലവാരം നൽകുന്നു. ഇലക്ട്രോസ്റ്റാറ്റിക് ആപ്ലിക്കേഷൻ പ്രക്രിയ സങ്കീർണ്ണമായ ജ്യാമിതികളിലും എത്തിച്ചേരാൻ പ്രയാസമുള്ള പ്രദേശങ്ങളിലും പോലും പൂർണ്ണമായ കവറേജ് ഉറപ്പാക്കുന്നു. ഉയർന്ന-താപനില ക്യൂറിംഗ് പ്രക്രിയ രാസപരമായി ബന്ധിപ്പിച്ച ഉപരിതലം സൃഷ്ടിക്കുന്നു, അത് സമാനതകളില്ലാത്ത അഡീഷനും പ്രകടന സവിശേഷതകളും നൽകുന്നു.",
        
        industriesServedTitle: "ഞങ്ങളുടെ മെറ്റൽ കോട്ടിംഗ് സേവനങ്ങൾ സേവിക്കുന്ന വ്യവസായങ്ങൾ",
        architecturalTitle: "ആർക്കിടെക്ചറൽ മെറ്റൽ കോട്ടിംഗ്",
        architecturalDesc: "ജാലകങ്ങൾ, വാതിലുകൾ, മുഖങ്ങൾ, ഘടനാപരമായ ഘടകങ്ങൾ എന്നിവയ്ക്കുള്ള പ്രീമിയം പൗഡർ കോട്ടിംഗ് സേവനങ്ങൾ",
        automotiveTitle: "ഓട്ടോമോട്ടീവ് മെറ്റൽ കോട്ടിംഗ്",
        automotiveDesc: "വാഹന ഭാഗങ്ങൾ, ഷാസി, ചക്രങ്ങൾ, കസ്റ്റം ഓട്ടോമോട്ടീവ് ആപ്ലിക്കേഷനുകൾ എന്നിവയ്ക്കുള്ള മോടിയുള്ള കോട്ടിംഗുകൾ",
        industrialTitle: "ഇൻഡസ്ട്രിയൽ മെറ്റൽ കോട്ടിംഗ്",
        industrialDesc: "യന്ത്രസാമഗ്രികൾ, ഉപകരണങ്ങൾ, നിർമ്മാണ ഘടകങ്ങൾ എന്നിവയ്ക്കുള്ള ഹെവി-ഡ്യൂട്ടി സംരക്ഷണ കോട്ടിംഗുകൾ",
        furnitureTitle: "ഫർണിച്ചർ മെറ്റൽ കോട്ടിംഗ്",
        furnitureDesc: "ഇൻഡോർ, ഔട്ട്ഡോർ ഫർണിച്ചർ കഷണങ്ങൾക്കുള്ള അലങ്കാരവും സംരക്ഷണവുമായ ഫിനിഷുകൾ",
        
        qualityAssuranceTitle: "ഗുണനിലവാര ഉറപ്പും സാങ്കേതിക കഴിവുകളും",
        coatingFacilityTitle: "അത്യാധുനിക കോട്ടിംഗ് സൗകര്യം",
        coatingFacility1: "കൃത്യമായ ആപ്ലിക്കേഷൻ നിയന്ത്രണങ്ങളുള്ള ഓട്ടോമേറ്റഡ് കൺവെയർ പൗഡർ കോട്ടിംഗ് സിസ്റ്റം",
        coatingFacility2: "ഏകീകൃത പൗഡർ വിതരണത്തിനുള്ള ഉയർന്ന-കാര്യക്ഷമതയുള്ള ഇലക്ട്രോസ്റ്റാറ്റിക് സ്പ്രേ തോക്കുകൾ",
        coatingFacility3: "കൃത്യമായ താപനില നിയന്ത്രണവും നിരീക്ഷണവുമുള്ള ഇൻഡസ്ട്രിയൽ ക്യൂറിംഗ് ഓവനുകൾ",
        coatingFacility4: "നൂതന പൊടി ശേഖരണവും പൗഡർ റിക്കവറി സിസ്റ്റങ്ങളും",
        coatingFacility5: "ഒപ്റ്റിമൽ ഉപരിതല തയ്യാറാക്കലിനുള്ള മൾട്ടി-സ്റ്റേജ് കെമിക്കൽ പ്രീ-ട്രീറ്റ്മെന്റ് ടാങ്കുകൾ",
        coatingFacility6: "ഹെവി-ഡ്യൂട്ടി സർഫേസ് പ്രൊഫൈലിങ്ങിനുള്ള ഓട്ടോമേറ്റഡ് ഷോട്ട് ബ്ലാസ്റ്റിംഗ് മെഷീനുകൾ",
        
        qualityControlTitle: "ഗുണനിലവാര നിയന്ത്രണ മാനദണ്ഡങ്ങൾ",
        qualityControl1: "കർശനമായ കോട്ടിംഗ് കനം അളക്കലും സാക്ഷ്യപ്പെടുത്തൽ നടപടിക്രമങ്ങളും",
        qualityControl2: "ക്രോസ്-ഹാച്ച്, പുൾ-ഓഫ് രീതികൾ ഉപയോഗിച്ച് അഡീഷൻ പരിശോധന",
        qualityControl3: "സ്പെക്ട്രോഫോട്ടോമെട്രി ഉപയോഗിച്ച് കളർ മാച്ചിംഗും സ്ഥിരത സാക്ഷ്യപ്പെടുത്തലും",
        qualityControl4: "നാശന പ്രതിരോധ സാധൂകരണത്തിനായി സാൾട്ട് സ്പ്രേ പരിശോധന",
        qualityControl5: "ഔട്ട്ഡോർ ദൃഢത വിലയിരുത്തലിനായി യുവി എക്സ്പോഷർ പരിശോധന",
        qualityControl6: "എല്ലാ കോട്ടിംഗ് ബാച്ചുകൾക്കും പൂർണ്ണമായ ഡോക്യുമെന്റേഷനും ട്രേസബിലിറ്റിയും",
        
        coreValuesTitle: "ഞങ്ങളുടെ മൗലിക മൂല്യങ്ങൾ",
        coreValues: {
          quality: {
            title: "ഗുണനിലവാരത്തിലെ മികവ്",
            description: "പ്രതിയൊരു പ്രോജക്ടിലും മികവിനോടുള്ള ഞങ്ങളുടെ പ്രതിബദ്ധത പ്രതിഫലിക്കുന്നു."
          },
          integrity: {
            title: "നിഷ്ഠ",
            description: "ഞങ്ങൾ ഞങ്ങളുടെ ഉപഭോക്താകളുമായും പങ്കാളികളുമായും നിഷ്ഠയുള്ള, പരദർശിയായ ബന്ധങ്ങൾ നിർമ്മിക്കുന്നതിൽ വിശ്വസിക്കുന്നു."
          },
          innovation: {
            title: "നവീകരണം",
            description: "നവീന സാങ്കേതികവിദ്യകളും പ്രക്രിയകളും സ്വീകരിക്കാൻ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്."
          },
          customer: {
            title: "ഉപഭോക്തൃ കേന്ദ്രീകൃതത",
            description: "ഞങ്ങളുടെ പ്രാഥമികത ഞങ്ങളുടെ ഉപഭോക്താകളുടെ ആവശ്യകതകൾ മനസ്സിലാക്കുകയും അവ നിറവേറ്റുകയും ചെയ്യുക എന്നതാണ്."
          }
        },
        
        environmentalTitle: "മെറ്റൽ കോട്ടിംഗിലെ പരിസ്ഥിതി ഉത്തരവാദിത്തം",
        environmentalP1: "അൽ-ഹദഫ് മെറ്റൽ കോട്ടിംഗ് എൽഎൽസി പരിസ്ഥിതി സുസ്ഥിര മെറ്റൽ ഫിനിഷിംഗ് രീതികൾക്ക് പ്രതിബദ്ധമാണ്. പരമ്പരാഗത നനഞ്ഞ പെയിന്റ് സിസ്റ്റങ്ങളുമായി താരതമ്യം ചെയ്യുമ്പോൾ ഞങ്ങളുടെ പൗഡർ കോട്ടിംഗ് പ്രക്രിയകൾ പരിസ്ഥിതി ആഘാതം ഗണ്യമായി കുറയ്ക്കുന്നു. ഞങ്ങൾ പൂജ്യം VOC ഉദ്വമനം, കുറഞ്ഞ മാലിന്യ ഉൽപാദനം, ഓവർസ്പ്രേ മെറ്റീരിയൽ റീസൈക്കിൾ ചെയ്യുന്ന സമഗ്ര പൗഡർ റിക്കവറി സിസ്റ്റങ്ങൾ എന്നിവയോടെയാണ് പ്രവർത്തിക്കുന്നത്.",
        environmentalP2: "ഞങ്ങളുടെ സൗകര്യം ജല സംരക്ഷണ നടപടികൾ, ഊർജ്ജ-കാര്യക്ഷമമായ ക്യൂറിംഗ് ഓവനുകൾ, ഉത്തരവാദിത്തമുള്ള കെമിക്കൽ മാനേജ്മെന്റ് പ്രോട്ടോക്കോളുകൾ എന്നിവ നടപ്പിലാക്കുന്നു. പരിസ്ഥിതി സൗഹൃദ ഫോർമുലേഷനുകൾക്കും സുസ്ഥിര ഉൽപാദന രീതികൾക്കും മുൻഗണന നൽകുന്ന സർട്ടിഫൈഡ് പൗഡർ കോട്ടിംഗ് നിർമ്മാതാക്കളുമായി ഞങ്ങൾ പങ്കാളിത്തം പുലർത്തുന്നു. മെറ്റീരിയൽ സോഴ്സിംഗ് മുതൽ മാലിന്യ നിർമ്മാർജ്ജനം വരെ ഞങ്ങളുടെ പ്രവർത്തനങ്ങളിലുടനീളം പരിസ്ഥിതി കാര്യനിർവ്വഹണത്തോടുള്ള ഞങ്ങളുടെ പ്രതിബദ്ധത വ്യാപിക്കുന്നു.",
        environmentalP3: "ഞങ്ങളുടെ പൗഡർ കോട്ടിംഗ് സേവനങ്ങൾ തിരഞ്ഞെടുക്കുന്നതിലൂടെ, മികച്ച കോട്ടിംഗ് പ്രകടനം ലഭിക്കുമ്പോൾ ക്ലയന്റുകൾ വ്യാവസായിക മലിനീകരണം കുറയ്ക്കുന്നതിന് സംഭാവന ചെയ്യുന്നു. ഗുണനിലവാരം, ദൃഢത, അല്ലെങ്കിൽ സൗന്ദര്യ ആവശ്യകതകളിൽ വിട്ടുവീഴ്ച ചെയ്യാതെ ബിസിനസ്സുകളെ സുസ്ഥിരത ലക്ഷ്യങ്ങൾ കൈവരിക്കാൻ ഞങ്ങളുടെ ഹരിത മെറ്റൽ കോട്ടിംഗ് സൊല്യൂഷനുകൾ സഹായിക്കുന്നു.",
        
        founderMessageTitle: "ഞങ്ങളുടെ സ്ഥാപകനിൽ നിന്നുള്ള സന്ദേശം",
        founderMessage: "അൽ-ഹദഫ് മെറ്റൽ കോട്ടിംഗിൽ, ഞങ്ങളുടെ ദൗത്യം ലളിതമാണ് – സാങ്കേതികവിദ്യയിലൂടെയും കരകൗശലത്തിലൂടെയും ഉപരിതല പൂർണത പുനർനിർവചിക്കുക. ഞങ്ങൾ പ്രയോഗിക്കുന്ന ഓരോ കോട്ടിംഗും ഗുണനിലവാരം, സുസ്ഥിരത, ഞങ്ങളുടെ ക്ലയന്റുകളുമായുള്ള ദീർഘകാല പങ്കാളിത്തം എന്നിവയോടുള്ള ഞങ്ങളുടെ സമർപ്പണത്തെ പ്രതിഫലിപ്പിക്കുന്നു.",
        founderMessage2: "ഈ മേഖലയിൽ 15 വർഷത്തിലേറെ പരിചയത്തോടെ, മികവിനും നവീകരണത്തിനും വേണ്ടി അതേ അഭിനിവേശം പങ്കിടുന്ന ഒരു ടീമിനെ നയിക്കുന്നതിൽ ഞാൻ അഭിമാനിക്കുന്നു. വിശ്വാസം, കൃത്യത, അതുല്യമായ ഫലങ്ങൾ നൽകാനുള്ള പ്രതിബദ്ധത എന്നിവയിലാണ് ഞങ്ങളുടെ യാത്ര നിർമിച്ചിരിക്കുന്നത്.",
        founderSignature: "– അൽ-ഹദഫ്, സ്ഥാപകനും സിഇഒയും",
        
        visionTitle: "ഞങ്ങളുടെ ദർശനം",
        visionDescription: "മെറ്റൽ കോട്ടിംഗ് സൊല്യൂഷനുകളിൽ ഒരു ആഗോള നേതാവാകുക, ഗുണനിലവാരത്തിനും സുസ്ഥിരതയ്കും വേണ്ടിയുള്ള ഞങ്ങളുടെ പ്രതിബദ്ധതയ്ക്ക് അംഗീകാരം ലഭിക്കുക.",
        
        missionTitle: "ഞങ്ങളുടെ ദൗത്യം",
        missionDescription: "ഉപഭോക്താകളുടെ പ്രതീക്ഷകൾ മറികടക്കുന്ന നവീനവും സുസ്ഥിരവുമായ മെറ്റൽ കോട്ടിംഗ് സൊല്യൂഷനുകൾ നൽകുക.",
        
        whyChooseUsTitle: "മെറ്റൽ കോട്ടിംഗ് സേവനങ്ങൾക്കായി അൽ-ഹദഫ് തിരഞ്ഞെടുക്കുന്നത് എന്തുകൊണ്ട്",
        expertProfessionalsTitle: "വിദഗ്ധ മെറ്റൽ കോട്ടിംഗ് പ്രൊഫഷണലുകൾ",
        expertProfessionalsDesc: "ഞങ്ങളുടെ ടീം മെറ്റൽ സർഫേസ് ഫിനിഷിംഗിൽ വിപുലമായ അനുഭവമുള്ള ഉയർന്ന പരിശീലനം ലഭിച്ച പൗഡർ കോട്ടിംഗ് വിദഗ്ധരാണ്. വിശദാംശങ്ങളോടുള്ള സൂക്ഷ്മമായ ശ്രദ്ധയിലൂടെയും സാങ്കേതിക വൈദഗ്ധ്യത്തിലൂടെയും ഓരോ പ്രോജക്ടും ഉയർന്ന ഗുണനിലവാര മാനദണ്ഡങ്ങൾ പാലിക്കുന്നുവെന്ന് ഞങ്ങൾ ഉറപ്പാക്കുന്നു.",
        
        fastTurnaroundTitle: "വേഗത്തിലുള്ള ടേൺഅറൗണ്ട് സമയം",
        fastTurnaroundDesc: "പ്രോജക്ട് സമയപരിധികളുടെ പ്രാധാന്യം ഞങ്ങൾ മനസ്സിലാക്കുന്നു. ഞങ്ങളുടെ കാര്യക്ഷമമായ പൗഡർ കോട്ടിംഗ് പ്രക്രിയകളും കാര്യക്ഷമമാക്കിയ വർക്ക്ഫ്ലോകളും ഗുണനിലവാരം വിട്ടുവീഴ്ച ചെയ്യാതെ വേഗത്തിലുള്ള ടേൺഅറൗണ്ട് സമയം ഉറപ്പാക്കുന്നു. അടിയന്തര ആവശ്യങ്ങൾക്കായി അതേ ദിവസവും എക്സ്പ്രസ് കോട്ടിംഗ് സേവനങ്ങളും ലഭ്യമാണ്.",
        
        customColorTitle: "കസ്റ്റം കളർ മാച്ചിംഗ്",
        customColorDesc: "ആയിരക്കണക്കിന് RAL, Pantone, കസ്റ്റം പൗഡർ കോട്ടിംഗ് നിറങ്ങളിലേക്ക് പ്രവേശനം. ഞങ്ങളുടെ കളർ മാച്ചിംഗ് കഴിവുകൾ ബാച്ചുകളിൽ തികഞ്ഞ സ്ഥിരത ഉറപ്പാക്കുന്നു. ഞങ്ങൾ കളർ സാമ്പിളുകൾ നൽകുന്നു, ഏത് നിലവിലുള്ള ഫിനിഷ് സ്പെസിഫിക്കേഷനും പൊരുത്തപ്പെടുത്താൻ കഴിയും.",
        
        competitivePricingTitle: "മത്സരാധിഷ്ഠിത വിലനിർണ്ണയം",
        competitivePricingDesc: "ഗുണനിലവാരം ത്യജിക്കാതെ ഞങ്ങൾ ചെലവ് കുറഞ്ഞ പൗഡർ കോട്ടിംഗ് സൊല്യൂഷനുകൾ വാഗ്ദാനം ചെയ്യുന്നു. സുതാര്യമായ വിലനിർണ്ണയം, മറഞ്ഞിരിക്കുന്ന ഫീസില്ല, വലിയ തോതിലുള്ള പ്രോജക്ടുകൾക്ക് വോളിയം ഡിസ്കൗണ്ടുകൾ ലഭ്യമാണ്. നിങ്ങളുടെ മെറ്റൽ കോട്ടിംഗ് ആവശ്യകതകൾക്കായി സൗജന്യ ഉദ്ധരണി നേടുക.",
        
        guaranteedDurabilityTitle: "ഉറപ്പുള്ള ദൃഢത",
        guaranteedDurabilityDesc: "ഞങ്ങളുടെ എല്ലാ പൗഡർ കോട്ട് ചെയ്ത ഫിനിഷുകളും ദൃഢത വാറന്റികളോടെയാണ് വരുന്നത്. കാലാവസ്ഥ, നാശം, രാസവസ്തുക്കൾ, മെക്കാനിക്കൽ കേടുപാടുകൾ എന്നിവയ്ക്കെതിരായ തെളിയിക്കപ്പെട്ട പ്രതിരോധം. വർഷങ്ങളോളം കാഴ്ച നിലനിർത്തുന്ന ദീർഘകാല സംരക്ഷണം.",
        
        customerCentricTitle: "ഉപഭോക്തൃ-കേന്ദ്രീകൃത സേവനം",
        customerCentricDesc: "സമർപ്പിത അക്കൗണ്ട് മാനേജർമാർ, സൗജന്യ കൺസൾട്ടേഷനുകൾ, പിക്കപ്പ്, ഡെലിവറി സേവനങ്ങൾ ലഭ്യമാണ്. ആവശ്യകതകൾ മനസ്സിലാക്കാനും പ്രതീക്ഷകൾ മറികടക്കുന്ന കസ്റ്റമൈസ്ഡ് മെറ്റൽ കോട്ടിംഗ് സൊല്യൂഷനുകൾ നൽകാനും ഞങ്ങൾ ക്ലയന്റുകളുമായി അടുത്ത് പ്രവർത്തിക്കുന്നു.",
        
        applicationsTitle: "പൗഡർ കോട്ടിംഗ് ആപ്ലിക്കേഷനുകളും കഴിവുകളും",
        architecturalComponentsTitle: "വാസ്തുവിദ്യാ ഘടകങ്ങൾ",
        architecturalComponent1: "• അലുമിനിയം വിൻഡോ ഫ്രെയിമുകളും പ്രൊഫൈലുകളും",
        architecturalComponent2: "• മെറ്റൽ വാതിലുകളും വാതിൽ ഫ്രെയിമുകളും",
        architecturalComponent3: "• കർട്ടൻ വാൾ സിസ്റ്റങ്ങളും മുഖങ്ങളും",
        architecturalComponent4: "• റെയിലിംഗുകൾ, ഹാൻഡ്‌റെയിലുകൾ, ബലസ്റ്ററുകൾ",
        architecturalComponent5: "• ക്ലാഡിംഗ് പാനലുകളും ലൂവറുകളും",
        architecturalComponent6: "• ഘടനാപരമായ സ്റ്റീൽ ഘടകങ്ങൾ",
        architecturalComponent7: "• അലങ്കാര ലോഹപ്പണികളും ഗ്രില്ലുകളും",
        
        industrialManufacturingTitle: "വ്യാവസായിക & നിർമ്മാണം",
        industrialManufacturing1: "• യന്ത്ര ഭവനങ്ങളും എൻക്ലോഷറുകളും",
        industrialManufacturing2: "• നിയന്ത്രണ പാനലുകളും വൈദ്യുത കാബിനറ്റുകളും",
        industrialManufacturing3: "• സംഭരണ റാക്കുകളും ഷെൽഫ് സിസ്റ്റങ്ങളും",
        industrialManufacturing4: "• കൺവെയർ ഘടകങ്ങളും ഗാർഡുകളും",
        industrialManufacturing5: "• HVAC ഉപകരണങ്ങളും ഡക്റ്റ്‌വർക്കും",
        industrialManufacturing6: "• നിർമ്മാണ ഉപകരണ ഭാഗങ്ങൾ",
        industrialManufacturing7: "• സുരക്ഷാ തടസ്സങ്ങളും സംരക്ഷണ ഗാർഡുകളും",
        
        consumerCommercialTitle: "ഉപഭോക്തൃ & വാണിജ്യ",
        consumerCommercial1: "• ഓഫീസ്, ഔട്ട്ഡോർ ഫർണിച്ചർ",
        consumerCommercial2: "• ഓട്ടോമോട്ടീവ് ഭാഗങ്ങളും ആക്സസറികളും",
        consumerCommercial3: "• സൈക്കിൾ ഫ്രെയിമുകളും ഘടകങ്ങളും",
        consumerCommercial4: "• ഉപകരണ ഭവനങ്ങളും പാനലുകളും",
        consumerCommercial5: "• ലൈറ്റിംഗ് ഫിക്സ്ചറുകളും പോളുകളും",
        consumerCommercial6: "• സൈനേജും ഡിസ്പ്ലേ സിസ്റ്റങ്ങളും",
        consumerCommercial7: "• കളിസ്ഥല ഉപകരണങ്ങളും ഘടനകളും",
        
        readyToTransformTitle: "നിങ്ങളുടെ മെറ്റൽ പ്രതലങ്ങൾ രൂപാന്തരപ്പെടുത്താൻ തയ്യാറാണോ?",
        readyToTransformDesc: "യുഎഇയിൽ പ്രൊഫഷണൽ പൗഡർ കോട്ടിംഗ് സേവനങ്ങൾക്കായി ഇന്ന് അൽ-ഹദഫ് മെറ്റൽ കോട്ടിംഗ് എൽഎൽസിയുമായി ബന്ധപ്പെടുക. നിങ്ങളുടെ പ്രോജക്ട് ആവശ്യകതകൾ ചർച്ച ചെയ്യാനും നിങ്ങളുടെ എല്ലാ മെറ്റൽ ഫിനിഷിംഗ് ആവശ്യങ്ങൾക്കും കസ്റ്റമൈസ്ഡ് സൊല്യൂഷനുകൾ നൽകാനും ഞങ്ങളുടെ വിദഗ്ധർ തയ്യാറാണ്.",
        getFreeQuote: "സൗജന്യ ഉദ്ധരണി നേടുക",
        viewServices: "സേവനങ്ങൾ കാണുക",
        
        meetTeamTitle: "ഞങ്ങളുടെ ടീമിനെ കാണുക",
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
            role: "ഗുണനിലവാര പര്യവേക്ഷകൻ",
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
            shortDesc: "മോടിയുള്ളതും ദീർഘകാലം നിലനിൽക്കുന്നതുമായ ഫിനിഷ്.",
          },
          galvanizing: {
            title: "ഗാൽവനൈസിംഗ്",
            description: "നിങ്ങളുടെ ലോഹത്തെ നാശത്തിൽ നിന്ന് സംരക്ഷിക്കുക.",
            shortDesc: "ദീർഘകാല മോടിയുള്ളതിനായി സിങ്ക് കോട്ടിംഗ്.",
          },
          electroplating: {
            title: "ഇലക്ട്രോപ്ലേറ്റിംഗ്",
            description: "മിനുസമാർന്ന ഫിനിഷോടെ ലോഹ പ്രതലങ്ങൾ മെച്ചപ്പെടുത്തുക.",
            shortDesc: "വ്യാവസായിക, അലങ്കാര ഉപയോഗത്തിന് അനുയോജ്യം.",
          },
          tin: {
            title: "ടിൻ പ്ലേറ്റിംഗ്",
            description: "നാശ പ്രതിരോധ ടിൻ പ്ലേറ്റിംഗ് സൊല്യൂഷനുകൾ.",
            shortDesc: "ഭക്ഷ്യ-ഗ്രേഡ് ലോഹങ്ങൾക്ക് സുരക്ഷിതവും ശുചിത്വവും.",
          },
          goldsilver: {
            title: "സ്വർണ് & വെള്ളി പ്ലേറ്റിംഗ്",
            description: "പ്രീമിയം ഉൽപ്പന്നങ്ങൾക്കായി ആഡംബര ലോഹ പ്ലേറ്റിംഗ്.",
            shortDesc: "ഉയർന്ന നിലവാരമുള്ള വിലയേറിയ ലോഹ ഫിനിഷ്.",
          },
          metal: {
            title: "മെറ്റൽ പ്ലേറ്റിംഗ്",
            description: "കസ്റ്റം മെറ്റൽ പ്ലേറ്റിംഗ് സേവനങ്ങൾ.",
            shortDesc: "നിങ്ങളുടെ പ്രത്യേക പ്രോജക്ട് ആവശ്യങ്ങൾക്കായി രൂപകൽപ്പന ചെയ്തത്.",
          },
          antique: {
            title: "പ്രാതന ഫിനിഷ്",
            description: "ലോഹങ്ങൾക്ക് കാലാതീതമായ രൂപം നൽകുക.",
            shortDesc: "അലങ്കാര ആവശ്യങ്ങൾക്കായി ക്ലാസിക് പ്രാതന ശൈലി.",
          },
        },
      },

      servicePage: {
        heading: "ഉപരിതല രസതന്ത്രം – പ്രീമിയം ഫിനിഷുകൾ",
        sub: "ഞങ്ങളുടെ കഴിവുകളെക്കുറിച്ച് കൂടുതലറിയാൻ ഒരു സേവനം തിരഞ്ഞെടുക്കുക.",
        quoteBtn: "ക്വോട്ട് നേടുക",
      },

      powderPage: {
        heading: "പൗഡർ കോട്ടിംഗ്",
        tagline: "മോടിയുള്ളത്. ചടുലം. ദീർഘകാലം നിലനിൽക്കുന്നത് – ഒരു കോട്ടിംഗ് വിപ്ലവം.",
        tabs: {
          gallery: "ഗാലറി",
          video: "വീഡിയോ",
          comment: "അഭിപ്രായം",
        },
        tooltips: {
          gallery: "ഞങ്ങൾ ചെയ്ത പ്രവർത്തനങ്ങൾ",
          video: "നിങ്ങളുടെ സ്വന്തം കണ്ണുകളാൽ പ്രക്രിയ അനുഭവിക്കുക",
          comment: "ഒരു അഭിപ്രായമോ അന്വേഷണമോ നൽക്കുക",
        },
        form: {
          title: "ഒരു അഭിപ്രായമോ അന്വേഷണമോ നൽക്കുക",
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