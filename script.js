/* =============================================
   GRAMEEN — Premium Rural Tourism Platform
   script.js — Master JavaScript
   Version: 1.0 | 2026
   ============================================= */

'use strict';

/* ===== TRANSLATIONS ===== */
const translations = {
  en: {
    // Nav
    navVillages: "Villages",
    navMarketplace: "Marketplace",
    navArtisans: "Artisans",
    navExperiences: "Experiences",
    navGallery: "Gallery",
    navContact: "Contact",
    navCta: "Plan Your Journey",

    // Hero
    heroBadge: "Authentic Rural India",
    heroTitle1: "Discover India's",
    heroTitle2: "Hidden Villages.",
    heroSubtitle: "Travel beyond destinations. Experience timeless traditions, handcrafted treasures and stories that have lived for generations.",
    heroCta1: "Explore Villages",
    heroCta2: "Shop Indigenous Goods",
    voiceSearchLabel: "Ask GRAMEEN",
    voiceSearchPlaceholder: "Try “pottery workshops in Rajasthan”",
    voiceSearchHint: "Tap the mic and tell us what you want to discover.",
    statVillages: "Villages",
    statArtisans: "Artisans",
    statStates: "States",
    scrollDown: "Scroll to explore",

    // Villages
    villagesTag: "Featured Destinations",
    villagesTitle1: "Every Village,",
    villagesTitle2: " A Different World",
    villagesSubtitle: "From the misty valleys of Meghalaya to the golden deserts of Rajasthan — each village holds centuries of story.",
    villagesBadge1: "Gujarat",
    villagesBadge2: "Kerala",
    villagesBadge3: "Odisha",
    villagesBadge4: "Meghalaya",
    village1Name: "Kutch, Gujarat",
    village1Craft: "✦ Bandhani Textile & Rogan Art",
    village1State: "Gujarat",
    village1Season: "Oct – Feb",
    village2Name: "Kumarakom, Kerala",
    village2Craft: "✦ Backwater Life & Coir Weaving",
    village2State: "Kerala",
    village2Season: "Nov – Mar",
    village3Name: "Raghurajpur, Odisha",
    village3Craft: "✦ Pattachitra Painting & Palm Craft",
    village3State: "Odisha",
    village3Season: "Oct – Jan",
    village4Name: "Mawlynnong, Meghalaya",
    village4Craft: "✦ Bamboo Weaving & Root Bridges",
    village4State: "Meghalaya",
    village4Season: "Sep – Apr",
    villageExplore: "Explore Village →",
    viewAllVillages: "View All 2,400+ Villages",

    // Marketplace
    marketplaceTag: "Indigenous Marketplace",
    marketplaceTitle1: "Crafted by Hands,",
    marketplaceTitle2: " Carried by Stories",
    marketplaceSubtitle: "Every product connects you directly to the artisan who made it. No middlemen. No factories. Only heritage.",
    productTag1: "Handloom",
    productTag2: "Pottery",
    productTag3: "Tribal Art",
    productTag4: "Bamboo Craft",
    artisan1Name: "Devki Bai",
    artisan1Village: "Bhujodi, Kutch",
    artisan2Name: "Ramesh Prajapati",
    artisan2Village: "Khurja, UP",
    artisan3Name: "Lakshmi Devi",
    artisan3Village: "Bastar, Chhattisgarh",
    artisan4Name: "Meitei Weavers",
    artisan4Village: "Manipur Village",
    product1Name: "Kutchi Handloom Shawl",
    product1Story: "Woven on a 200-year-old loom using natural dyes from pomegranate rinds.",
    product1Price: "₹ 3,200",
    product2Name: "Blue Pottery Tea Set",
    product2Story: "Handcrafted using 500-year-old Persian-influenced Jaipur blue pottery technique.",
    product2Price: "₹ 1,800",
    product3Name: "Bastar Dhokra Art",
    product3Story: "Lost-wax casting technique dating back 4,000 years — practiced by the Gond tribe.",
    product3Price: "₹ 5,500",
    product4Name: "Moirang Phee Textile",
    product4Story: "Hand-spun mulberry silk woven by women of Manipur with patterns passed down orally.",
    product4Price: "₹ 4,200",
    addToCart: "Add to Cart",

    // Artisans
    artisansTag: "Human Stories",
    artisansTitle1: "Meet The",
    artisansTitle2: " Artisans",
    artisansSubtitle: "Behind every craft is a life, a lineage, and a legacy. These are the keepers of India's living heritage.",
    artisanCard1Name: "Savitri Devi",
    artisanCard1Craft: "Master Potter · Rajasthan",
    artisanCard1Story: '"My grandmother taught me at age 7. The clay remembers everything my hands have told it." — 42 years of craft mastery.',
    artisanGen3: "3rd Generation",
    artisanCard2Name: "Abdul Rehman",
    artisanCard2Craft: "Master Weaver · Varanasi",
    artisanCard2Story: '"A Banarasi saree takes 15 days to complete. Each thread is a prayer." — Recipient of National Craft Award 2019.',
    artisanGen7: "7th Generation",
    artisanCard3Name: "Rupa Bai Shyam",
    artisanCard3Craft: "Gond Painter · Madhya Pradesh",
    artisanCard3Story: '"The forest, the river, the animals — they live in my paintings. I just give them color." — UNESCO heritage practitioner.',
    artisanGen5: "5th Generation",

    // Experiences
    experiencesTag: "Immersive Experiences",
    experiencesTitle1: "Live the",
    experiencesTitle2: " Village Life",
    experiencesSubtitle: "Not a tourist. A guest. Participate in daily village rhythms, learn ancient crafts, and taste food cooked by the earth itself.",
    exp1Title: "Village Cooking",
    exp1Desc: "Cook on mud chulhas, grind spices on stone, and taste the ancient recipes passed through grandmothers.",
    exp1Duration: "3 Hours · From ₹800",
    exp2Title: "Farming Experience",
    exp2Desc: "Plant paddy, harvest mustard, feed cattle and understand the ancient wisdom of Indian agriculture.",
    exp2Duration: "Full Day · From ₹1,200",
    exp3Title: "Pottery Workshop",
    exp3Desc: "Sit at a spinning wheel with a master potter and shape your own piece of clay into a story.",
    exp3Duration: "2 Hours · From ₹600",
    exp4Title: "Folk Dance Class",
    exp4Desc: "Learn Garba, Bihu, Ghoomar or Chhau — dance forms that tell stories of seasons, harvests and gods.",
    exp4Duration: "2 Hours · From ₹500",
    exp5Title: "Bullock Cart Ride",
    exp5Desc: "Cruise through golden fields at sunrise on a wooden cart, listening to the rhythm of hooves and birdsong.",
    exp5Duration: "1 Hour · From ₹400",
    exp6Title: "Nature Walk",
    exp6Desc: "Guided walks through forest paths, medicinal plant gardens and sacred groves with village elders.",
    exp6Duration: "Morning · From ₹350",
    exp7Title: "Handloom Experience",
    exp7Desc: "Sit beside a master weaver, thread a loom and weave your first row of cloth — pure meditative craft.",
    exp7Duration: "3 Hours · From ₹900",
    exp8Title: "Traditional Music",
    exp8Desc: "Learn the tabla, sitar or folk instruments under moonlight with musicians whose families have played for centuries.",
    exp8Duration: "Evening · From ₹700",

    // Sustainable
    sustainTag: "Our Impact",
    sustainTitle1: "Tourism That",
    sustainTitle2: " Gives Back",
    sustainSubtitle: "Every journey you take directly funds village communities, empowers women artisans, and preserves centuries of living heritage.",
    sustain1: "Artisans Supported",
    sustain2: "Villages Connected",
    sustain3: "Income Reaches Artisans",
    sustain4: "Women Empowered",
    pillar1: "Eco Travel",
    pillar2: "Women First",
    pillar3: "Fair Trade",
    pillar4: "Heritage Preservation",
    pillar5: "Zero Waste",

    // Festivals
    festivalTag: "Festival Calendar",
    festivalTitle1: "Celebrate With",
    festivalTitle2: " The Villages",
    festival1: "Makar Sankranti · Gujarat",
    festival1desc: "The sky fills with ten thousand kites in a riot of color. The most joyous sky festival in India.",
    festival2: "Holi · Mathura & Vrindavan",
    festival2desc: "Experience the world's most colorful festival at its spiritual home — a village celebration like no other.",
    festival3: "Baisakhi Harvest · Punjab",
    festival3desc: "Golden wheat harvest, Bhangra under open skies, and the spirit of community that feeds a nation.",
    festival4: "Pushkar Camel Fair · Rajasthan",
    festival4desc: "Ancient trading fair — camels, music, folk art and thousands of village traders under desert stars.",
    festival5: "Diwali · Varanasi & Jaipur",
    festival5desc: "Ten thousand oil lamps float on holy rivers. Village homes glow. The night becomes golden.",
    festival6: "Hornbill Festival · Nagaland",
    festival6desc: "Ten warrior tribes, one valley, ten days of song, craft, fire and ancient ritual performance.",

    // Testimonials
    storiesTag: "Traveler Stories",
    storiesTitle1: "Words From",
    storiesTitle2: " Our Travelers",
    testimonial1: '"Three days in Kutch changed my life. I sat with a 70-year-old woman who taught me more about beauty than any museum ever could. GRAMEEN is the most authentic experience I\'ve ever had."',
    testimonial2: '"I came as a photographer. I left as a believer. The Gond painting workshop was meditative, the food was extraordinary. I\'ve traveled 40 countries — Indian villages are incomparable."',
    testimonial3: '"हमारे गाँव की यात्रा ने मुझे अपनी जड़ों से फिर से जोड़ा। ग्रामीण ने जो अनुभव दिया, वह पैसों से नहीं खरीदा जा सकता।"',
    testimonial4: '"Woke up to rooster calls, made chai on a wood fire, learned Pattachitra painting with a 4th-generation master. This is travel at its most honest and most beautiful."',
    traveler1Name: "Priya Mehta",
    traveler1City: "Mumbai, India",
    traveler2Name: "James Whitfield",
    traveler2City: "London, UK",
    traveler3Name: "Ananya Singh",
    traveler3City: "Delhi, India",
    traveler4Name: "Sophie Laurent",
    traveler4City: "Paris, France",

    // Gallery
    galleryTag: "Visual Stories",
    galleryTitle1: "Through the",
    galleryTitle2: " Lens of India",
    galleryImg1: "Sunrise Villages",
    galleryImg2: "Artisan Hands",
    galleryImg3: "Potter's Clay",
    galleryImg4: "Field of Color",
    galleryImg5: "Golden Hills",
    galleryImg6: "Living Rituals",

    // FAQ
    faqTag: "Questions Answered",
    faqTitle1: "Common",
    faqTitle2: " Questions",
    faq1q: "How do I book a village experience?",
    faq1a: "Simply browse our village experiences, select your dates and preferred activities, and complete a simple 3-step booking. Our village liaison will reach you within 24 hours to personalize your itinerary.",
    faq2q: "Is the experience safe for solo travellers?",
    faq2a: "Absolutely. All our village hosts are verified, background-checked, and culturally sensitized. We have a 24/7 traveler support line. Thousands of solo travelers — especially women — have experienced our villages safely.",
    faq3q: "How does my purchase support artisans?",
    faq3a: "85% of every product sale goes directly to the artisan. We operate on a transparent fair-trade model. You can track exactly where your money went via our impact dashboard after each purchase.",
    faq4q: "Can I visit as a group or family?",
    faq4a: "Yes! We offer group packages for families, schools, corporate teams and photography groups. Entire villages can be arranged for private cultural immersion retreats. Contact us for bespoke group planning.",
    faq5q: "Are the products on the marketplace authentic?",
    faq5a: "Every product carries a digital authenticity certificate linked to the artisan, their village, their craft tradition, and GI tag (where applicable). You receive the full story alongside your product.",

    // Newsletter
    newsletterTag: "Stay Connected",
    newsletterTitle: "Receive Letters from the Villages",
    newsletterSubtitle: "Monthly stories of artisans, festival invitations, craft discoveries and travel guides — curated from the heart of rural India.",
    newsletterFeat1: "Monthly Village Stories",
    newsletterFeat2: "Artisan Spotlights",
    newsletterFeat3: "Festival Alerts",
    formName: "Your Name",
    formNamePlaceholder: "Priya Sharma",
    formEmail: "Email Address",
    formInterest: "I'm interested in",
    interestTravel: "Village Travel",
    interestCrafts: "Indigenous Crafts",
    interestBoth: "Both",
    formSubmit: "Join the Community",
    formNote: "No spam. Just stories. Unsubscribe anytime.",

    // Footer
    footerTagline: "Where Every Village Has a Story.",
    footerDesc: "A premium platform connecting conscious travelers with authentic Indian villages, indigenous artisans, and sustainable rural experiences.",
    footerExplore: "Explore",
    footerFestivals: "Festivals",
    footerMap: "Interactive Map",
    footerShop: "Shop",
    footerHandloom: "Handloom",
    footerPottery: "Pottery",
    footerTribal: "Tribal Art",
    footerOrganic: "Organic Goods",
    footerGiftSets: "Gift Sets",
    footerCompany: "Company",
    footerAbout: "About GRAMEEN",
    footerImpact: "Our Impact",
    footerPress: "Press",
    footerCopyright: "© 2026 GRAMEEN. Crafted with love for rural India.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerAccessibility: "Accessibility",
  },

  hi: {
    // Nav
    navVillages: "गाँव",
    navMarketplace: "बाज़ार",
    navArtisans: "कारीगर",
    navExperiences: "अनुभव",
    navGallery: "गैलरी",
    navContact: "संपर्क",
    navCta: "यात्रा बनाएँ",

    // Hero
    heroBadge: "प्रामाणिक ग्रामीण भारत",
    heroTitle1: "भारत के छुपे हुए",
    heroTitle2: "गाँवों की खोज करें।",
    heroSubtitle: "मंज़िलों से परे जाएँ। सदियों पुरानी परंपराओं, हस्तनिर्मित खज़ानों और पीढ़ियों की कहानियों का अनुभव करें।",
    heroCta1: "गाँव देखें",
    heroCta2: "हस्तशिल्प खरीदें",
    voiceSearchLabel: "ग्रामीण से पूछें",
    voiceSearchPlaceholder: "जैसे “राजस्थान में मिट्टी के बर्तन”",
    voiceSearchHint: "माइक्रोफ़ोन दबाएँ और बताएँ कि आप क्या खोजना चाहते हैं।",
    statVillages: "गाँव",
    statArtisans: "कारीगर",
    statStates: "राज्य",
    scrollDown: "नीचे स्क्रॉल करें",

    // Villages
    villagesTag: "विशेष गाँव",
    villagesTitle1: "हर गाँव,",
    villagesTitle2: " एक अलग दुनिया",
    villagesSubtitle: "मेघालय की धुंधली वादियों से लेकर राजस्थान के सुनहरे रेगिस्तान तक — हर गाँव में सदियों की कहानियाँ हैं।",
    villagesBadge1: "गुजरात",
    villagesBadge2: "केरल",
    villagesBadge3: "ओडिशा",
    villagesBadge4: "मेघालय",
    village1Name: "कच्छ, गुजरात",
    village1Craft: "✦ बंधनी वस्त्र और रोगन कला",
    village1State: "गुजरात",
    village1Season: "अक्टूबर – फरवरी",
    village2Name: "कुमारकोम, केरल",
    village2Craft: "✦ बैकवॉटर जीवन और कॉयर बुनाई",
    village2State: "केरल",
    village2Season: "नवंबर – मार्च",
    village3Name: "रघुराजपुर, ओडिशा",
    village3Craft: "✦ पट्टचित्र चित्रकला और ताड़ शिल्प",
    village3State: "ओडिशा",
    village3Season: "अक्टूबर – जनवरी",
    village4Name: "माव्लिनोंग, मेघालय",
    village4Craft: "✦ बाँस बुनाई और जड़ पुल",
    village4State: "मेघालय",
    village4Season: "सितंबर – अप्रैल",
    villageExplore: "गाँव देखें →",
    viewAllVillages: "सभी 2,400+ गाँव देखें",

    // Marketplace
    marketplaceTag: "स्वदेशी बाज़ार",
    marketplaceTitle1: "हाथों से बना,",
    marketplaceTitle2: " कहानियों से भरा",
    marketplaceSubtitle: "हर उत्पाद आपको सीधे उस कारीगर से जोड़ता है जिसने इसे बनाया। कोई बिचौलिया नहीं। कोई कारखाना नहीं। केवल विरासत।",
    productTag1: "हस्तकरघा",
    productTag2: "मिट्टी के बर्तन",
    productTag3: "जनजातीय कला",
    productTag4: "बाँस शिल्प",
    artisan1Name: "देवकी बाई",
    artisan1Village: "भुजोड़ी, कच्छ",
    artisan2Name: "रमेश प्रजापति",
    artisan2Village: "खुर्जा, उत्तर प्रदेश",
    artisan3Name: "लक्ष्मी देवी",
    artisan3Village: "बस्तर, छत्तीसगढ़",
    artisan4Name: "मेइतेई बुनकर",
    artisan4Village: "मणिपुर गाँव",
    product1Name: "कच्छी हस्तकरघा शॉल",
    product1Story: "अनार के छिलकों से प्राकृतिक रंगों का उपयोग कर 200 साल पुराने करघे पर बुनी गई।",
    product1Price: "₹ 3,200",
    product2Name: "ब्लू पॉटरी चाय सेट",
    product2Story: "500 साल पुरानी फारसी-प्रभावित जयपुर ब्लू पॉटरी तकनीक से हस्तनिर्मित।",
    product2Price: "₹ 1,800",
    product3Name: "बस्तर ढोकरा कला",
    product3Story: "4,000 साल पुरानी लॉस्ट-वैक्स कास्टिंग तकनीक — गोंड जनजाति द्वारा प्रचलित।",
    product3Price: "₹ 5,500",
    product4Name: "मोइरंग फी वस्त्र",
    product4Story: "मणिपुर की महिलाओं द्वारा मौखिक परंपरा से पारित पैटर्न के साथ हाथ से कती रेशम।",
    product4Price: "₹ 4,200",
    addToCart: "कार्ट में जोड़ें",

    // Artisans
    artisansTag: "मानवीय कहानियाँ",
    artisansTitle1: "मिलिए",
    artisansTitle2: " कारीगरों से",
    artisansSubtitle: "हर शिल्प के पीछे एक जीवन है, एक वंश है, एक विरासत है। ये भारत की जीवंत धरोहर के संरक्षक हैं।",
    artisanCard1Name: "सावित्री देवी",
    artisanCard1Craft: "उस्ताद कुम्हार · राजस्थान",
    artisanCard1Story: '"मेरी दादी ने मुझे 7 साल की उम्र में सिखाया। मिट्टी वह सब कुछ याद रखती है जो मेरे हाथों ने उसे बताया।" — 42 वर्षों की शिल्प महारत।',
    artisanGen3: "तीसरी पीढ़ी",
    artisanCard2Name: "अब्दुल रहमान",
    artisanCard2Craft: "उस्ताद बुनकर · वाराणसी",
    artisanCard2Story: '"एक बनारसी साड़ी को पूरा होने में 15 दिन लगते हैं। हर धागा एक प्रार्थना है।" — राष्ट्रीय शिल्प पुरस्कार 2019 विजेता।',
    artisanGen7: "सातवीं पीढ़ी",
    artisanCard3Name: "रूपा बाई श्याम",
    artisanCard3Craft: "गोंड चित्रकार · मध्य प्रदेश",
    artisanCard3Story: '"जंगल, नदी, जानवर — वे मेरी चित्रकारी में जीते हैं। मैं बस उन्हें रंग देती हूँ।" — यूनेस्को विरासत संरक्षक।',
    artisanGen5: "पाँचवीं पीढ़ी",

    // Experiences
    experiencesTag: "अनूठे अनुभव",
    experiencesTitle1: "जिएँ",
    experiencesTitle2: " ग्रामीण जीवन",
    experiencesSubtitle: "पर्यटक नहीं। मेहमान। रोज़ाना के गाँव की लय में भाग लें, प्राचीन शिल्प सीखें और धरती की पकाई भोजन का स्वाद लें।",
    exp1Title: "गाँव का खाना पकाना",
    exp1Desc: "मिट्टी के चूल्हे पर पकाएँ, पत्थर पर मसाले पीसें, और दादी-नानी की प्राचीन रेसिपी का स्वाद लें।",
    exp1Duration: "3 घंटे · ₹800 से",
    exp2Title: "खेती का अनुभव",
    exp2Desc: "धान रोपें, सरसों काटें, मवेशियों को चारा दें और भारतीय कृषि की प्राचीन बुद्धिमत्ता को समझें।",
    exp2Duration: "पूरा दिन · ₹1,200 से",
    exp3Title: "कुम्हारी कार्यशाला",
    exp3Desc: "एक उस्ताद कुम्हार के साथ चाक पर बैठें और मिट्टी के टुकड़े को अपनी कहानी में ढालें।",
    exp3Duration: "2 घंटे · ₹600 से",
    exp4Title: "लोकनृत्य कक्षा",
    exp4Desc: "गरबा, बिहू, घूमर या छाऊ सीखें — नृत्य जो ऋतुओं, फसल और देवताओं की कहानियाँ सुनाते हैं।",
    exp4Duration: "2 घंटे · ₹500 से",
    exp5Title: "बैलगाड़ी की सवारी",
    exp5Desc: "सूर्योदय पर लकड़ी की गाड़ी में सुनहरे खेतों से गुज़रें, खुरों और पक्षियों की लय सुनें।",
    exp5Duration: "1 घंटा · ₹400 से",
    exp6Title: "प्रकृति भ्रमण",
    exp6Desc: "जंगल के रास्तों, औषधीय पौधों के बगीचों और पवित्र कुंजों में गाँव के बुज़ुर्गों के साथ निर्देशित भ्रमण।",
    exp6Duration: "सुबह · ₹350 से",
    exp7Title: "हस्तकरघा अनुभव",
    exp7Desc: "एक उस्ताद बुनकर के पास बैठें, करघे में धागा डालें और कपड़े की पहली पंक्ति बुनें — शुद्ध ध्यान शिल्प।",
    exp7Duration: "3 घंटे · ₹900 से",
    exp8Title: "पारंपरिक संगीत",
    exp8Desc: "चाँदनी रात में तबला, सितार या लोक वाद्य सीखें उन संगीतकारों के साथ जिनके परिवार सदियों से बजाते आए हैं।",
    exp8Duration: "शाम · ₹700 से",

    // Sustainable
    sustainTag: "हमारा प्रभाव",
    sustainTitle1: "वह पर्यटन जो",
    sustainTitle2: " वापस देता है",
    sustainSubtitle: "आपकी हर यात्रा सीधे गाँव के समुदायों को फंड करती है, महिला कारीगरों को सशक्त बनाती है, और सदियों की जीवंत विरासत को संरक्षित करती है।",
    sustain1: "कारीगर समर्थित",
    sustain2: "गाँव जुड़े",
    sustain3: "आय कारीगरों तक पहुँचती है",
    sustain4: "महिलाएँ सशक्त",
    pillar1: "पर्यावरण यात्रा",
    pillar2: "महिला प्रथम",
    pillar3: "उचित व्यापार",
    pillar4: "विरासत संरक्षण",
    pillar5: "शून्य अपशिष्ट",

    // Festivals
    festivalTag: "उत्सव कैलेंडर",
    festivalTitle1: "गाँवों के साथ",
    festivalTitle2: " उत्सव मनाएँ",
    festival1: "मकर संक्रांति · गुजरात",
    festival1desc: "आकाश दस हज़ार पतंगों से रंगीन हो जाता है। भारत का सबसे आनंदमय आकाशीय उत्सव।",
    festival2: "होली · मथुरा और वृंदावन",
    festival2desc: "दुनिया के सबसे रंगीन त्योहार को उसके आध्यात्मिक घर पर अनुभव करें — एक अनूठा गाँव उत्सव।",
    festival3: "बैसाखी फसल · पंजाब",
    festival3desc: "सुनहरी गेहूँ की फसल, खुले आसमान के नीचे भांगड़ा, और समुदाय की वह भावना जो राष्ट्र को खिलाती है।",
    festival4: "पुष्कर ऊँट मेला · राजस्थान",
    festival4desc: "प्राचीन व्यापार मेला — ऊँट, संगीत, लोक कला और रेगिस्तानी तारों के नीचे हज़ारों गाँव व्यापारी।",
    festival5: "दीवाली · वाराणसी और जयपुर",
    festival5desc: "दस हज़ार दीपक पवित्र नदियों पर तैरते हैं। गाँव के घर जगमगाते हैं। रात सुनहरी हो जाती है।",
    festival6: "हॉर्नबिल उत्सव · नागालैंड",
    festival6desc: "दस योद्धा जनजातियाँ, एक घाटी, गीत, शिल्प, आग और प्राचीन अनुष्ठान प्रदर्शन के दस दिन।",

    // Testimonials
    storiesTag: "यात्री कहानियाँ",
    storiesTitle1: "हमारे",
    storiesTitle2: " यात्रियों के शब्द",
    testimonial1: '"कच्छ में तीन दिनों ने मेरी ज़िंदगी बदल दी। मैं एक 70 साल की महिला के साथ बैठा जिसने मुझे किसी भी संग्रहालय से अधिक सुंदरता के बारे में सिखाया। ग्रामीण सबसे प्रामाणिक अनुभव है।"',
    testimonial2: '"मैं एक फोटोग्राफर के रूप में आया। मैं एक विश्वासी के रूप में गया। गोंड पेंटिंग कार्यशाला ध्यानपूर्ण थी, खाना असाधारण था। मैंने 40 देशों की यात्रा की है — भारतीय गाँव अतुलनीय हैं।"',
    testimonial3: '"हमारे गाँव की यात्रा ने मुझे अपनी जड़ों से फिर से जोड़ा। ग्रामीण ने जो अनुभव दिया, वह पैसों से नहीं खरीदा जा सकता।"',
    testimonial4: '"मुर्गे की बाँग पर जागे, लकड़ी की आग पर चाय बनाई, चौथी पीढ़ी के उस्ताद के साथ पट्टचित्र चित्रकला सीखी। यही सबसे ईमानदार और सुंदर यात्रा है।"',
    traveler1Name: "प्रिया मेहता",
    traveler1City: "मुंबई, भारत",
    traveler2Name: "जेम्स व्हिटफील्ड",
    traveler2City: "लंदन, यूके",
    traveler3Name: "अनन्या सिंह",
    traveler3City: "दिल्ली, भारत",
    traveler4Name: "सोफी लॉरेंट",
    traveler4City: "पेरिस, फ्रांस",

    // Gallery
    galleryTag: "दृश्य कहानियाँ",
    galleryTitle1: "भारत के",
    galleryTitle2: " लेंस से",
    galleryImg1: "सूर्योदय गाँव",
    galleryImg2: "कारीगर हाथ",
    galleryImg3: "कुम्हार की मिट्टी",
    galleryImg4: "रंगों का खेत",
    galleryImg5: "सुनहरी पहाड़ियाँ",
    galleryImg6: "जीवंत अनुष्ठान",

    // FAQ
    faqTag: "प्रश्नों के उत्तर",
    faqTitle1: "अक्सर",
    faqTitle2: " पूछे जाने वाले प्रश्न",
    faq1q: "मैं गाँव का अनुभव कैसे बुक करूँ?",
    faq1a: "हमारे गाँव के अनुभव ब्राउज़ करें, अपनी तारीखें और पसंदीदा गतिविधियाँ चुनें, और 3-चरण की बुकिंग पूरी करें। हमारा गाँव संपर्क 24 घंटे के भीतर आपसे संपर्क करेगा।",
    faq2q: "क्या अकेले यात्रियों के लिए यह सुरक्षित है?",
    faq2a: "बिल्कुल। हमारे सभी गाँव मेज़बान सत्यापित, पृष्ठभूमि-जाँचे और सांस्कृतिक रूप से संवेदनशील हैं। हमारे पास 24/7 यात्री सहायता लाइन है।",
    faq3q: "मेरी खरीद कारीगरों का समर्थन कैसे करती है?",
    faq3a: "हर उत्पाद बिक्री का 85% सीधे कारीगर के पास जाता है। हम पारदर्शी निष्पक्ष व्यापार मॉडल पर काम करते हैं।",
    faq4q: "क्या मैं समूह या परिवार के साथ जा सकता हूँ?",
    faq4a: "हाँ! हम परिवारों, स्कूलों, कॉर्पोरेट टीमों और फोटोग्राफी समूहों के लिए समूह पैकेज प्रदान करते हैं। हमसे संपर्क करें।",
    faq5q: "क्या बाज़ार के उत्पाद प्रामाणिक हैं?",
    faq5a: "हर उत्पाद में एक डिजिटल प्रामाणिकता प्रमाण पत्र होता है जो कारीगर, उनके गाँव और जीआई टैग (जहाँ लागू हो) से जुड़ा होता है।",

    // Newsletter
    newsletterTag: "जुड़े रहें",
    newsletterTitle: "गाँवों से पत्र प्राप्त करें",
    newsletterSubtitle: "कारीगरों की मासिक कहानियाँ, उत्सव निमंत्रण, शिल्प खोज और यात्रा गाइड — ग्रामीण भारत के दिल से।",
    newsletterFeat1: "मासिक गाँव कहानियाँ",
    newsletterFeat2: "कारीगर स्पॉटलाइट",
    newsletterFeat3: "उत्सव अलर्ट",
    formName: "आपका नाम",
    formNamePlaceholder: "प्रिया शर्मा",
    formEmail: "ईमेल पता",
    formInterest: "मुझे रुचि है",
    interestTravel: "ग्राम यात्रा",
    interestCrafts: "स्वदेशी शिल्प",
    interestBoth: "दोनों",
    formSubmit: "समुदाय से जुड़ें",
    formNote: "कोई स्पैम नहीं। सिर्फ कहानियाँ। कभी भी सदस्यता रद्द करें।",

    // Footer
    footerTagline: "जहाँ हर गाँव की एक कहानी है।",
    footerDesc: "एक प्रीमियम प्लेटफ़ॉर्म जो जागरूक यात्रियों को प्रामाणिक भारतीय गाँवों, स्वदेशी कारीगरों और टिकाऊ ग्रामीण अनुभवों से जोड़ता है।",
    footerExplore: "खोजें",
    footerFestivals: "उत्सव",
    footerMap: "इंटरैक्टिव मानचित्र",
    footerShop: "खरीदें",
    footerHandloom: "हस्तकरघा",
    footerPottery: "मिट्टी के बर्तन",
    footerTribal: "जनजातीय कला",
    footerOrganic: "जैविक सामान",
    footerGiftSets: "उपहार सेट",
    footerCompany: "कंपनी",
    footerAbout: "ग्रामीण के बारे में",
    footerImpact: "हमारा प्रभाव",
    footerPress: "प्रेस",
    footerCopyright: "© 2026 ग्रामीण। ग्रामीण भारत के लिए प्यार से बनाया।",
    footerPrivacy: "गोपनीयता नीति",
    footerTerms: "उपयोग की शर्तें",
    footerAccessibility: "अभिगम्यता",
  }
};

/* ===== STATE ===== */
let currentLang = localStorage.getItem('grameen-lang') || 'en';
let currentTheme = localStorage.getItem('grameen-theme') || 'day';
let testimonialIndex = 0;
let testimonialAutoplay;
let countersDone = false;

/* ===== LOADER ===== */
function initLoader() {
  const canvas = document.getElementById('threadCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 400;

  const letters = document.querySelectorAll('.logo-letter');
  const tagline = document.getElementById('loaderTagline');
  const progressFill = document.getElementById('loaderProgress');
  const loader = document.getElementById('loader');

  let progress = 0;
  const progressInterval = setInterval(() => {
    progress = Math.min(progress + Math.random() * 4 + 1, 100);
    if (progressFill) progressFill.style.width = progress + '%';
    if (progress >= 100) clearInterval(progressInterval);
  }, 50);

  // Thread animation
  let threadProgress = 0;
  const threadPoints = generateThreadPath();

  function generateThreadPath() {
    const pts = [];
    // Wave pattern inspired by Indian textile motifs
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      const x = t * 600;
      const y = 200 + Math.sin(t * Math.PI * 6) * 40 * (1 - t * 0.3) + Math.cos(t * Math.PI * 3) * 20;
      pts.push({ x, y });
    }
    return pts;
  }

  function drawThread(progress) {
    ctx.clearRect(0, 0, 600, 400);

    const endIdx = Math.floor(progress * threadPoints.length);
    if (endIdx < 2) return;

    // Glow effect
    ctx.shadowBlur = 12;
    ctx.shadowColor = 'rgba(212,165,55,0.6)';

    // Thread gradient
    const grad = ctx.createLinearGradient(0, 0, 600, 0);
    grad.addColorStop(0, 'rgba(200,107,60,0.8)');
    grad.addColorStop(0.4, 'rgba(212,165,55,0.9)');
    grad.addColorStop(0.7, 'rgba(47,93,80,0.8)');
    grad.addColorStop(1, 'rgba(200,107,60,0.6)');

    ctx.beginPath();
    ctx.moveTo(threadPoints[0].x, threadPoints[0].y);
    for (let i = 1; i < endIdx; i++) {
      const cp = threadPoints[Math.max(0, i - 1)];
      ctx.quadraticCurveTo(cp.x, cp.y, threadPoints[i].x, threadPoints[i].y);
    }
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Decorative dots (simulating weave nodes)
    ctx.shadowBlur = 8;
    for (let i = 0; i < endIdx; i += 8) {
      const pt = threadPoints[i];
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(212,165,55,0.7)';
      ctx.fill();
    }
    ctx.shadowBlur = 0;
  }

  // Animate thread
  let threadStart = null;
  const threadDuration = 1200;

  function animateThread(ts) {
    if (!threadStart) threadStart = ts;
    threadProgress = Math.min((ts - threadStart) / threadDuration, 1);
    drawThread(threadProgress);

    if (threadProgress < 1) {
      requestAnimationFrame(animateThread);
    } else {
      // Reveal logo letters
      letters.forEach((l, i) => {
        setTimeout(() => l.classList.add('visible'), i * 80);
      });
      // Reveal tagline
      setTimeout(() => tagline && tagline.classList.add('visible'), letters.length * 80 + 200);

      // Hide loader
      setTimeout(() => {
        loader && loader.classList.add('hidden');
        document.body.style.overflow = '';
        const heroContent = document.querySelector('.hero-content');
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (heroContent) heroContent.classList.add('visible');
        if (scrollIndicator) scrollIndicator.classList.add('visible');
      }, letters.length * 80 + 1000);
    }
  }

  document.body.style.overflow = 'hidden';
  requestAnimationFrame(animateThread);
}

/* ===== PARTICLES ===== */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 4 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = Math.random() * 6 + 4;
    p.style.cssText = `
      position:absolute;
      left:${x}%;
      top:${y}%;
      width:${size}px;
      height:${size}px;
      border-radius:50%;
      background:rgba(212,165,55,${Math.random() * 0.5 + 0.1});
      animation: particleDrift ${duration}s ${delay}s ease-in-out infinite alternate;
      pointer-events:none;
    `;
    container.appendChild(p);
  }

  // Add keyframe
  if (!document.getElementById('particleStyle')) {
    const style = document.createElement('style');
    style.id = 'particleStyle';
    style.textContent = `
      @keyframes particleDrift {
        from { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
        to { transform: translateY(-30px) translateX(20px) scale(1.5); opacity: 0.8; }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ===== STARS (Night Mode) ===== */
function initStars() {
  const container = document.getElementById('starsContainer');
  if (!container || container.children.length > 0) return;

  for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 2.5 + 0.5;
    const x = Math.random() * 100;
    const y = Math.random() * 60;
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 2;
    star.style.cssText = `
      position:absolute;
      left:${x}%;
      top:${y}%;
      width:${size}px;
      height:${size}px;
      border-radius:50%;
      background:rgba(255,255,230,${Math.random() * 0.7 + 0.3});
      animation: starTwinkle ${duration}s ${delay}s ease-in-out infinite alternate;
    `;
    container.appendChild(star);
  }

  if (!document.getElementById('starStyle')) {
    const style = document.createElement('style');
    style.id = 'starStyle';
    style.textContent = `
      @keyframes starTwinkle {
        from { opacity: 0.2; transform: scale(1); }
        to { opacity: 1; transform: scale(1.4); }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ===== FIREFLIES (Night Mode) ===== */
function initFireflies() {
  const container = document.getElementById('fireflies');
  if (!container || container.children.length > 0) return;

  for (let i = 0; i < 20; i++) {
    const ff = document.createElement('div');
    const x = Math.random() * 100;
    const y = 60 + Math.random() * 40;
    const delay = Math.random() * 8;
    const duration = Math.random() * 4 + 3;
    ff.style.cssText = `
      position:absolute;
      left:${x}%;
      top:${y}%;
      width:4px;
      height:4px;
      border-radius:50%;
      background:#AAFF44;
      box-shadow: 0 0 8px 2px rgba(170,255,68,0.7);
      animation: fireflyMove ${duration}s ${delay}s ease-in-out infinite alternate;
    `;
    container.appendChild(ff);
  }

  if (!document.getElementById('fireflyStyle')) {
    const style = document.createElement('style');
    style.id = 'fireflyStyle';
    style.textContent = `
      @keyframes fireflyMove {
        0% { transform: translateX(0) translateY(0); opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 0.8; }
        100% { transform: translateX(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 60 + 20}px) translateY(-${Math.random() * 40 + 10}px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ===== THEME TOGGLE ===== */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  html.setAttribute('data-theme', currentTheme);
  document.body.className = currentTheme === 'night' ? 'night-mode' : 'day-mode';

  initStars();
  initFireflies();

  if (toggle) {
    toggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'day' ? 'night' : 'day';
      html.setAttribute('data-theme', currentTheme);
      document.body.className = currentTheme === 'night' ? 'night-mode' : 'day-mode';
      localStorage.setItem('grameen-theme', currentTheme);

      // Trigger floating leaf/star effects
      if (currentTheme === 'night') {
        spawnFloatingStars();
      } else {
        spawnFloatingLeaves();
      }
    });
  }
}

function spawnFloatingLeaves() {
  const leaves = ['🍃', '🌿', '🌱', '🍀'];
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'floating-leaf';
      el.textContent = leaves[Math.floor(Math.random() * leaves.length)];
      el.style.cssText = `
        left: ${Math.random() * 100}vw;
        top: -2rem;
        animation-duration: ${Math.random() * 3 + 3}s;
        font-size: ${Math.random() * 1 + 0.8}rem;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 6000);
    }, i * 150);
  }
}

function spawnFloatingStars() {
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.style.cssText = `
        position:fixed;
        left:${Math.random() * 100}vw;
        top:${Math.random() * 100}vh;
        width:${Math.random() * 3 + 1}px;
        height:${Math.random() * 3 + 1}px;
        background:rgba(255,255,200,0.9);
        border-radius:50%;
        pointer-events:none;
        z-index:9999;
        box-shadow: 0 0 6px rgba(255,255,200,0.8);
        animation: starPop 1s ease forwards;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1000);
    }, i * 80);
  }

  if (!document.getElementById('starPopStyle')) {
    const style = document.createElement('style');
    style.id = 'starPopStyle';
    style.textContent = `@keyframes starPop { 0%{opacity:0;transform:scale(0)} 50%{opacity:1;transform:scale(2)} 100%{opacity:0;transform:scale(0)} }`;
    document.head.appendChild(style);
  }
}

/* ===== LANGUAGE ===== */
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'hi' ? 'hi' : 'en');

  const els = document.querySelectorAll('[data-i18n]');
  els.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      // Fade transition
      el.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      el.style.opacity = '0';
      el.style.transform = 'translateY(4px)';
      setTimeout(() => {
        el.textContent = t[key];
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200);
    }
  });

  // Update placeholder attrs separately
  const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderEls.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });

  // Lang toggle visual
  const enBtn = document.getElementById('langEN');
  const hiBtn = document.getElementById('langHI');
  if (enBtn && hiBtn) {
    enBtn.classList.toggle('active', lang === 'en');
    hiBtn.classList.toggle('active', lang === 'hi');
  }

  // Update select options (re-render needed)
  const select = document.getElementById('newsletterInterest');
  if (select) {
    const opts = select.querySelectorAll('option');
    const keys = ['interestTravel', 'interestCrafts', 'interestBoth'];
    opts.forEach((opt, i) => { if (keys[i] && t[keys[i]]) opt.textContent = t[keys[i]]; });
  }
}

function initLanguage() {
  const toggle = document.getElementById('langToggle');
  applyLanguage(currentLang);

  if (toggle) {
    toggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'hi' : 'en';
      localStorage.setItem('grameen-lang', currentLang);
      applyLanguage(currentLang);
    });
  }
}

/* ===== NAVIGATION ===== */
function initNav() {
  const nav = document.getElementById('mainNav');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  let menuOpen = false;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav && nav.classList.add('scrolled');
    } else {
      nav && nav.classList.remove('scrolled');
    }
  }, { passive: true });

  hamburger && hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    hamburger.setAttribute('aria-expanded', menuOpen);
    if (menuOpen) {
      navLinks.classList.add('mobile-open');
      navLinks.style.display = 'flex';

      // Close button inside
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '&times;';
      closeBtn.style.cssText = `
        position:absolute; top:2rem; right:2rem;
        font-size:2.5rem; color:var(--text-primary);
        background:none; border:none; cursor:pointer;
        line-height:1;
      `;
      closeBtn.setAttribute('aria-label', 'Close menu');
      closeBtn.onclick = () => {
        menuOpen = false;
        navLinks.classList.remove('mobile-open');
        navLinks.style.display = '';
        hamburger.setAttribute('aria-expanded', false);
        closeBtn.remove();
      };
      navLinks.appendChild(closeBtn);
    } else {
      navLinks.classList.remove('mobile-open');
      navLinks.style.display = '';
    }
  });

  // Close mobile menu on nav link click
  navLinks && navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (menuOpen) {
        menuOpen = false;
        navLinks.classList.remove('mobile-open');
        navLinks.style.display = '';
        hamburger.setAttribute('aria-expanded', false);
        const closeBtn = navLinks.querySelector('button');
        closeBtn && closeBtn.remove();
      }
    });
  });
}

/* ===== SCROLL PROGRESS ===== */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    const current = window.scrollY;
    bar.style.width = `${(current / total) * 100}%`;
  }, { passive: true });
}

/* ===== PARALLAX ===== */
function initParallax() {
  const heroBg = document.getElementById('heroBgImg');

  window.addEventListener('scroll', () => {
    if (!heroBg) return;
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroBg.style.transform = `translateY(${scrollY * 0.35}px) scale(1.08)`;
    }
  }, { passive: true });
}

/* ===== CUSTOM CURSOR ===== */
function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  const glow = document.getElementById('mouseGlow');

  let fx = 0, fy = 0;
  let cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    cx = e.clientX;
    cy = e.clientY;
    if (cursor) {
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
    }
    if (glow) {
      glow.style.left = cx + 'px';
      glow.style.top = cy + 'px';
    }
  });

  function followCursor() {
    fx += (cx - fx) * 0.12;
    fy += (cy - fy) * 0.12;
    if (follower) {
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
    }
    requestAnimationFrame(followCursor);
  }
  followCursor();

  // Hover effects
  const hoverEls = document.querySelectorAll('a, button, [tabindex="0"], .village-card, .product-card, .exp-card, .gallery-item');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor && cursor.classList.add('hover');
      follower && follower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor && cursor.classList.remove('hover');
      follower && follower.classList.remove('hover');
    });
  });
}

/* ===== MAGNETIC BUTTONS ===== */
function initMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.3;
      const dy = (e.clientY - cy) * 0.3;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ===== RIPPLE EFFECT ===== */
function initRipple() {
  document.querySelectorAll('.btn-primary, .btn-hero-primary, .btn-outline').forEach(btn => {
    btn.addEventListener('click', e => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        width:${size}px;
        height:${size}px;
        left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
      `;
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
}

/* ===== REVEAL ON SCROLL ===== */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, (entry.target.dataset.revealDelay || 0));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  // Add stagger delays to grid children
  document.querySelectorAll('.villages-grid, .marketplace-grid, .experiences-grid, .sustain-grid').forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      el.dataset.revealDelay = i * 100;
    });
  });

  els.forEach(el => observer.observe(el));
}

/* ===== COUNTERS ===== */
function initCounters() {
  const counters = document.querySelectorAll('.counter-num');
  if (!counters.length || countersDone) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersDone) {
        countersDone = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          const suffix = counter.getAttribute('data-suffix') || '';
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            counter.textContent = current.toLocaleString('en-IN') + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target.toLocaleString('en-IN') + suffix;
            }
          }
          requestAnimationFrame(updateCounter);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const sustainSection = document.getElementById('sustainable');
  if (sustainSection) observer.observe(sustainSection);
}

/* ===== FAQ ACCORDION ===== */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const isOpen = item.getAttribute('aria-expanded') === 'true';
      // Close all
      items.forEach(i => {
        i.setAttribute('aria-expanded', 'false');
        const ans = i.querySelector('.faq-answer');
        if (ans) ans.style.height = '0';
      });
      // Open clicked (if not already open)
      if (!isOpen) {
        item.setAttribute('aria-expanded', 'true');
        const ans = item.querySelector('.faq-answer');
        if (ans) {
          ans.style.height = ans.scrollHeight + 'px';
        }
      }
    });

    // Keyboard support
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });
}

/* ===== TESTIMONIALS SLIDER ===== */
function initTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const cards = document.querySelectorAll('.testimonial-card');
  const dotsContainer = document.getElementById('testimonialsDots');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');

  if (!track || !cards.length) return;

  // Create dots
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'testimonials-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer && dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    testimonialIndex = (index + cards.length) % cards.length;
    track.style.transform = `translateX(-${testimonialIndex * 100}%)`;
    document.querySelectorAll('.testimonials-dot').forEach((d, i) => {
      d.classList.toggle('active', i === testimonialIndex);
    });
  }

  prevBtn && prevBtn.addEventListener('click', () => { clearInterval(testimonialAutoplay); goTo(testimonialIndex - 1); startAutoplay(); });
  nextBtn && nextBtn.addEventListener('click', () => { clearInterval(testimonialAutoplay); goTo(testimonialIndex + 1); startAutoplay(); });

  function startAutoplay() {
    testimonialAutoplay = setInterval(() => goTo(testimonialIndex + 1), 5500);
  }

  startAutoplay();

  // Touch/swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      clearInterval(testimonialAutoplay);
      goTo(testimonialIndex + (diff > 0 ? 1 : -1));
      startAutoplay();
    }
  });
}

/* ===== GALLERY LIGHTBOX ===== */
function initGallery() {
  const items = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.querySelector('.gallery-overlay span');
      if (!img || !lightbox) return;

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      if (lightboxCaption) lightboxCaption.textContent = caption ? caption.textContent : '';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
    });
  });

  function closeLightbox() {
    lightbox && lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
  lightbox && lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

/* ===== BACK TO TOP ===== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===== NEWSLETTER FORM ===== */
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = currentLang === 'hi' ? '✓ शामिल हो गए!' : '✓ Welcome to the Community!';
  btn.style.background = 'linear-gradient(135deg, var(--forest), #1a4a3a)';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 4000);
}

/* ===== FLOATING AMBIENT ELEMENTS ===== */
function initAmbientFloats() {
  // Subtle floating dividers for sections
  const floatStyle = document.createElement('style');
  floatStyle.textContent = `
    @keyframes subtleFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-8px) rotate(1deg); }
      66% { transform: translateY(4px) rotate(-0.5deg); }
    }
    .section-tag { animation: subtleFloat 6s ease-in-out infinite; }
  `;
  document.head.appendChild(floatStyle);
}

/* ===== VILLAGE CARD HOVER TILT ===== */
function initCardTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.village-card, .product-card, .artisan-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = ((e.clientY - cy) / rect.height) * -8;
      const ry = ((e.clientX - cx) / rect.width) * 8;
      card.style.transform = `translateY(-8px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      card.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
    });
  });
}

/* ===== SCROLL ACTIVATED ANIMATIONS ===== */
function initSunriseEffect() {
  // Dynamic warm light sweep on hero bg based on time of day
  const now = new Date();
  const hour = now.getHours();
  const heroBg = document.querySelector('.hero-bg');

  if (heroBg && currentTheme === 'day') {
    if (hour >= 6 && hour < 10) {
      // Morning golden hour
      heroBg.style.setProperty('--time-tint', 'rgba(255,180,80,0.15)');
    } else if (hour >= 17 && hour < 20) {
      // Sunset
      heroBg.style.setProperty('--time-tint', 'rgba(255,100,50,0.15)');
    }
  }
}

/* ===== EXPERIENCE CARDS STAGGER ===== */
function initExpCards() {
  const cards = document.querySelectorAll('.exp-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = Array.from(cards).indexOf(entry.target);
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, idx * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

/* ===== SMOOTH SECTION DETECTION (Active nav link) ===== */
function initActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active-nav', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));
}

/* ===== VILLAGE OF THE DAY (Dynamic) ===== */
function initVillageOfDay() {
  const villages = [
    { name: 'Majuli Island', name_hi: 'माजुली द्वीप', state: 'Assam', craft: 'Mask Making', craft_hi: 'मुखौटा निर्माण' },
    { name: 'Raghurajpur', name_hi: 'रघुराजपुर', state: 'Odisha', craft: 'Pattachitra', craft_hi: 'पट्टचित्र' },
    { name: 'Bhujodi', name_hi: 'भुजोड़ी', state: 'Gujarat', craft: 'Weaving', craft_hi: 'बुनाई' },
    { name: 'Channapatna', name_hi: 'चन्नापटना', state: 'Karnataka', craft: 'Lacquerware Toys', craft_hi: 'लाखकारी खिलौने' },
    { name: 'Pipli', name_hi: 'पिपली', state: 'Odisha', craft: 'Appliqué', craft_hi: 'अप्लीक' },
    { name: 'Moradabad', name_hi: 'मुरादाबाद', state: 'UP', craft: 'Brass Work', craft_hi: 'पीतल कला' },
    { name: 'Kanchipuram', name_hi: 'कांचीपुरम', state: 'Tamil Nadu', craft: 'Silk Weaving', craft_hi: 'रेशम बुनाई' },
  ];

  const dayIndex = new Date().getDay();
  const village = villages[dayIndex];

  // Create village-of-day widget (inject into hero)
  const widget = document.createElement('div');
  widget.className = 'village-of-day';
  widget.style.cssText = `
    position:absolute;
    top: 100px;
    right: 2rem;
    background: rgba(255,249,240,0.1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,249,240,0.18);
    border-radius: 16px;
    padding: 1rem 1.5rem;
    color: var(--cream);
    z-index: 20;
    max-width: 220px;
    opacity:0;
    transition: opacity 1s ease 2s;
  `;

  widget.innerHTML = `
    <div style="font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--mustard);margin-bottom:0.4rem;font-weight:700;">
      Village of the Day
    </div>
    <div style="font-family:var(--font-display);font-size:1.1rem;font-style:italic;margin-bottom:0.2rem;">${village.name}</div>
    <div style="font-size:0.75rem;color:rgba(255,249,240,0.65);">${village.state} · ${village.craft}</div>
  `;

  const hero = document.getElementById('hero');
  if (hero) {
    hero.appendChild(widget);
    // Show after loader
    setTimeout(() => { widget.style.opacity = '1'; }, 3500);
  }
}

/* ===== GRAIN TEXTURE ENHANCEMENT ===== */
function initNightModeFX() {
  // Dynamic night sky background shift
  const observer = new MutationObserver(() => {
    const isNight = document.documentElement.getAttribute('data-theme') === 'night';
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      heroBg.style.transition = 'filter 1s ease';
      heroBg.style.filter = isNight
        ? 'brightness(0.35) saturate(0.5) hue-rotate(200deg)'
        : 'brightness(1) saturate(1) hue-rotate(0deg)';
    }
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
}

/* ===== FESTIVAL COUNTDOWN ===== */
function initFestivalCountdown() {
  const now = new Date();
  const year = now.getFullYear();

  const festivals = [
    { name: 'Holi', name_hi: 'होली', date: new Date(year, 2, 14) },
    { name: 'Diwali', name_hi: 'दीवाली', date: new Date(year, 10, 1) },
    { name: 'Pushkar Fair', name_hi: 'पुष्कर मेला', date: new Date(year, 10, 12) },
    { name: 'Hornbill Festival', name_hi: 'हॉर्नबिल उत्सव', date: new Date(year, 11, 1) },
  ];

  // Find next upcoming festival
  let nextFestival = festivals.find(f => f.date > now);
  if (!nextFestival) nextFestival = { ...festivals[0], date: new Date(year + 1, 2, 14) };

  const diff = nextFestival.date - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Inject countdown into festival section header
  const festivalHeader = document.querySelector('.festival-section .section-header');
  if (festivalHeader && days > 0 && days < 365) {
    const countdown = document.createElement('div');
    countdown.style.cssText = `
      display:inline-flex;align-items:center;gap:0.5rem;
      background:rgba(200,107,60,0.1);border:1px solid rgba(200,107,60,0.2);
      border-radius:50px;padding:0.4rem 1rem;margin-top:1rem;
      font-size:0.8rem;color:var(--terracotta);font-weight:600;
    `;
    countdown.innerHTML = `🎉 <span>${days} days until ${nextFestival.name}</span>`;
    festivalHeader.appendChild(countdown);
  }
}

/* ===== FESTIVAL SLIDER & DAILY CALENDAR ===== */
function initFestivalCalendar() {
  const timeline = document.getElementById('festivalTimeline');
  const calendarDays = document.getElementById('calendarDays');
  if (!timeline || !calendarDays) return;
  const slides = timeline.querySelectorAll('.festival-item');
  const prev = document.getElementById('festivalPrev');
  const next = document.getElementById('festivalNext');
  const today = new Date();
  const year = today.getFullYear();
  const festivalDates = [new Date(year, 0, 14), new Date(year, 2, 4), new Date(year, 3, 13), new Date(year, 10, 1), new Date(year, 9, 30), new Date(year, 11, 1)];
  let index = 0;

  function drawCalendar(selectedDate) {
    const month = selectedDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();
    document.getElementById('dailyCalendarMonth').textContent = selectedDate.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
    calendarDays.innerHTML = '';
    for (let blank = 0; blank < startDay; blank += 1) calendarDays.insertAdjacentHTML('beforeend', '<span class="is-empty">0</span>');
    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month, day);
      const isToday = date.toDateString() === today.toDateString();
      const isFestival = date.toDateString() === selectedDate.toDateString();
      calendarDays.insertAdjacentHTML('beforeend', `<span class="${isToday ? 'is-today ' : ''}${isFestival ? 'is-festival' : ''}">${day}</span>`);
    }
    document.getElementById('calendarSelectedDate').textContent = selectedDate.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
    document.getElementById('calendarFestivalNote').textContent = slides[index].querySelector('.festival-name').textContent;
  }
  function showSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length;
    timeline.style.transform = `translateX(-${index * 100}%)`;
    drawCalendar(festivalDates[index]);
  }
  prev?.addEventListener('click', () => showSlide(index - 1));
  next?.addEventListener('click', () => showSlide(index + 1));
  showSlide(0);
}

/* ===== SAMPLE MANDI-RATE BOARD ===== */
function initMandiBoard() {
  const stamp = document.getElementById('mandiUpdated');
  if (!stamp) return;
  const refreshStamp = () => { stamp.textContent = `Updated ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`; };
  refreshStamp();
}

/* ===== ACCESSIBILITY: Skip to Main ===== */
function initSkipNav() {
  const skip = document.createElement('a');
  skip.href = '#hero';
  skip.textContent = 'Skip to main content';
  skip.style.cssText = `
    position:fixed;top:-100px;left:1rem;
    background:var(--terracotta);color:var(--cream);
    padding:0.75rem 1.5rem;border-radius:0 0 8px 8px;
    z-index:99999;font-weight:600;font-size:0.9rem;
    transition:top 0.3s ease;
  `;
  skip.addEventListener('focus', () => { skip.style.top = '0'; });
  skip.addEventListener('blur', () => { skip.style.top = '-100px'; });
  document.body.prepend(skip);
}

/* ===== ACTIVE NAV LINK STYLE ===== */
function injectActiveNavStyle() {
  const style = document.createElement('style');
  style.textContent = `
    .nav-link.active-nav {
      color: var(--terracotta) !important;
    }
    .nav-link.active-nav::after {
      width: 100% !important;
    }
  `;
  document.head.appendChild(style);
}

/* ===== PERFORMANCE: LAZY BG IMAGES ===== */
function initLazyBg() {
  const lazyBgs = document.querySelectorAll('[data-bg]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.backgroundImage = `url('${entry.target.dataset.bg}')`;
        observer.unobserve(entry.target);
      }
    });
  });
  lazyBgs.forEach(el => observer.observe(el));
}

/* ===== VOICE SEARCH ===== */
function initVoiceSearch() {
  const form = document.getElementById('voiceSearch');
  const input = document.getElementById('voiceSearchInput');
  const mic = document.getElementById('voiceSearchMic');
  const copy = document.getElementById('voiceSearchCopy');
  const status = document.getElementById('voiceSearchStatus');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!form || !input || !mic || !status) return;

  const setStatus = (message, isError = false) => {
    status.textContent = message;
    status.classList.toggle('is-error', isError);
  };

  const updateCopyState = () => { if (copy) copy.disabled = !input.value.trim(); };
  input.addEventListener('input', updateCopyState);
  copy?.addEventListener('click', async () => {
    const transcript = input.value.trim();
    if (!transcript) return;
    try {
      await navigator.clipboard.writeText(transcript);
    } catch (error) {
      input.select();
      document.execCommand('copy');
    }
    setStatus('Voice text copied to your clipboard.');
    copy.setAttribute('aria-label', 'Voice text copied');
    setTimeout(() => copy.setAttribute('aria-label', 'Copy voice text'), 1800);
  });

  const searchSite = () => {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      setStatus('Tell us what you would like to discover.');
      input.focus();
      return;
    }

    const destinations = [
      { words: ['shop', 'buy', 'craft', 'textile', 'pottery', 'product', 'market', 'कारीगर', 'खरीद'], id: 'marketplace', label: 'the indigenous marketplace' },
      { words: ['experience', 'workshop', 'cooking', 'farm', 'dance', 'music', 'travel', 'यात्रा', 'अनुभव'], id: 'experiences', label: 'village experiences' },
      { words: ['artisan', 'artist', 'weaver', 'potter', 'कारीगर', 'कलाकार'], id: 'artisans', label: 'our artisans' },
      { words: ['festival', 'holi', 'diwali', 'mela', 'उत्सव'], id: 'festivals', label: 'the festival calendar' },
    ];
    const match = destinations.find(destination => destination.words.some(word => query.includes(word)));
    const target = match ? document.getElementById(match.id) : document.getElementById('villages');
    const label = match ? match.label : 'featured villages';

    setStatus(`Showing ${label} for “${input.value.trim()}”.`);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    searchSite();
  });

  if (!SpeechRecognition) {
    mic.disabled = true;
    mic.setAttribute('aria-label', 'Voice search is unavailable in this browser');
    mic.title = 'Voice search is unavailable in this browser';
    setStatus('Voice search works in supported browsers. You can still type a search.');
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  let listening = false;

  const stopListening = () => {
    listening = false;
    mic.classList.remove('is-listening');
    mic.setAttribute('aria-pressed', 'false');
    mic.setAttribute('aria-label', 'Start voice search');
  };

  recognition.onstart = () => {
    listening = true;
    mic.classList.add('is-listening');
    mic.setAttribute('aria-pressed', 'true');
    mic.setAttribute('aria-label', 'Stop voice search');
    setStatus('Listening… speak naturally.');
  };

  recognition.onresult = event => {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; i += 1) transcript += event.results[i][0].transcript;
    input.value = transcript.trim();
    updateCopyState();
    setStatus(event.results[event.results.length - 1].isFinal ? 'Captured your words. Press Enter to explore.' : 'Listening…');
  };

  recognition.onerror = event => {
    const messages = {
      'not-allowed': 'Microphone access was denied. Allow it in your browser settings and try again.',
      'no-speech': 'We did not hear anything. Please try again.',
      'audio-capture': 'No microphone was found. You can type your search instead.',
    };
    setStatus(messages[event.error] || 'Voice search could not start. Please try again.', true);
  };

  recognition.onend = stopListening;

  mic.addEventListener('click', () => {
    if (listening) {
      recognition.stop();
      return;
    }
    recognition.lang = document.documentElement.getAttribute('data-lang') === 'hi' ? 'hi-IN' : 'en-IN';
    try {
      recognition.start();
    } catch (error) {
      setStatus('Voice search is already starting. Please try again in a moment.', true);
    }
  });
}

/* ===== SHOPPING CART & DEMO CHECKOUT ===== */
function initCart() {
  const products = {
    shawl: { name: 'Kutchi Handloom Shawl', price: 3200 },
    'tea-set': { name: 'Blue Pottery Tea Set', price: 1800 },
    dhokra: { name: 'Bastar Dhokra Art', price: 5500 },
    textile: { name: 'Moirang Phee Textile', price: 4200 },
  };
  const drawer = document.getElementById('cartDrawer');
  const scrim = document.getElementById('cartScrim');
  const toggle = document.getElementById('cartToggle');
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const summary = document.getElementById('cartSummary');
  const count = document.getElementById('cartCount');
  const subtotal = document.getElementById('cartSubtotal');
  const checkoutLayer = document.getElementById('checkoutLayer');
  const completeLayer = document.getElementById('orderComplete');
  const form = document.getElementById('checkoutForm');
  if (!drawer || !toggle || !itemsEl) return;

  let cart = {};
  try { cart = JSON.parse(localStorage.getItem('grameen-cart') || '{}'); } catch (error) { cart = {}; }
  const formatPrice = value => `₹${value.toLocaleString('en-IN')}`;
  const save = () => localStorage.setItem('grameen-cart', JSON.stringify(cart));
  const total = () => Object.entries(cart).reduce((sum, [id, qty]) => sum + (products[id]?.price || 0) * qty, 0);
  const itemCount = () => Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const closeCart = () => { drawer.classList.remove('is-open'); scrim.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); toggle.setAttribute('aria-expanded', 'false'); };
  const openCart = () => { drawer.classList.add('is-open'); scrim.classList.add('is-open'); drawer.setAttribute('aria-hidden', 'false'); toggle.setAttribute('aria-expanded', 'true'); };

  function render() {
    const ids = Object.keys(cart).filter(id => products[id] && cart[id] > 0);
    if (!ids.length) cart = {};
    itemsEl.innerHTML = ids.map(id => {
      const product = products[id]; const qty = cart[id];
      return `<article class="cart-line"><div><h3>${product.name}</h3><p class="cart-line-price">${formatPrice(product.price)}</p><div class="cart-line-actions"><button class="qty-btn" type="button" data-cart-action="decrease" data-product-id="${id}" aria-label="Decrease quantity">−</button><span>${qty}</span><button class="qty-btn" type="button" data-cart-action="increase" data-product-id="${id}" aria-label="Increase quantity">+</button><button class="remove-item" type="button" data-cart-action="remove" data-product-id="${id}">Remove</button></div></div><strong>${formatPrice(product.price * qty)}</strong></article>`;
    }).join('');
    const isEmpty = !ids.length;
    emptyEl.hidden = !isEmpty; summary.hidden = isEmpty;
    const cartTotal = total();
    count.textContent = itemCount(); subtotal.textContent = formatPrice(cartTotal);
    document.getElementById('checkoutTotal').textContent = formatPrice(cartTotal);
    save();
  }

  document.querySelectorAll('.product-add-btn[data-product-id]').forEach(button => button.addEventListener('click', () => {
    const id = button.dataset.productId;
    cart[id] = (cart[id] || 0) + 1; render(); openCart();
    const oldText = button.textContent; button.textContent = 'Added ✓';
    setTimeout(() => { button.textContent = oldText; }, 1200);
  }));
  itemsEl.addEventListener('click', event => {
    const button = event.target.closest('[data-cart-action]'); if (!button) return;
    const { productId: id, cartAction: action } = button.dataset;
    if (action === 'increase') cart[id] += 1;
    if (action === 'decrease') cart[id] -= 1;
    if (action === 'remove' || cart[id] <= 0) delete cart[id];
    render();
  });
  toggle.addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  scrim.addEventListener('click', closeCart);
  document.getElementById('cartContinue').addEventListener('click', () => { closeCart(); document.getElementById('marketplace').scrollIntoView({ behavior: 'smooth' }); });
  document.getElementById('checkoutButton').addEventListener('click', () => { closeCart(); checkoutLayer.classList.add('is-open'); checkoutLayer.setAttribute('aria-hidden', 'false'); });
  document.getElementById('checkoutClose').addEventListener('click', () => { checkoutLayer.classList.remove('is-open'); checkoutLayer.setAttribute('aria-hidden', 'true'); });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = new FormData(form).get('name').trim();
    const orderId = `GRM-${Date.now().toString().slice(-6)}`;
    document.getElementById('orderCompleteMessage').textContent = `Thank you, ${name}. Your order will be lovingly prepared by our artisan partners.`;
    document.getElementById('orderNumber').textContent = `Demo order ${orderId} · ${formatPrice(total())}`;
    checkoutLayer.classList.remove('is-open'); checkoutLayer.setAttribute('aria-hidden', 'true'); completeLayer.classList.add('is-open'); completeLayer.setAttribute('aria-hidden', 'false');
    cart = {}; render(); form.reset();
  });
  document.getElementById('continueShopping').addEventListener('click', () => { completeLayer.classList.remove('is-open'); completeLayer.setAttribute('aria-hidden', 'true'); document.getElementById('marketplace').scrollIntoView({ behavior: 'smooth' }); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeCart(); checkoutLayer.classList.remove('is-open'); checkoutLayer.setAttribute('aria-hidden', 'true'); completeLayer.classList.remove('is-open'); completeLayer.setAttribute('aria-hidden', 'true'); } });
  render();
}

/* ===== MAIN INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initSkipNav();
  injectActiveNavStyle();
  initLoader();
  initParticles();
  initStars();
  initFireflies();
  initTheme();
  initLanguage();
  initNav();
  initScrollProgress();
  initParallax();
  initCursor();
  initMagneticButtons();
  initRipple();
  initReveal();
  initCounters();
  initFAQ();
  initTestimonials();
  initGallery();
  initBackToTop();
  initAmbientFloats();
  initCardTilt();
  initActiveSection();
  initVillageOfDay();
  initNightModeFX();
  initFestivalCountdown();
  initFestivalCalendar();
  initMandiBoard();
  initLazyBg();
  initVoiceSearch();
  initCart();

  // Init exp cards after a tick
  setTimeout(initExpCards, 100);

  // Initial theme effect on hero bg
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg && currentTheme === 'night') {
    heroBg.style.filter = 'brightness(0.35) saturate(0.5) hue-rotate(200deg)';
  }
});

/* ===== WINDOW LOAD (after all resources) ===== */
window.addEventListener('load', () => {
  initSunriseEffect();

  // Performance: preload next viewport images
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    imgs.forEach(img => imgObserver.observe(img));
  }
});

/* ===== ERROR BOUNDARY ===== */
window.addEventListener('error', e => {
  // Silently catch non-critical errors to maintain premium experience
  if (e.message && e.message.includes('ResizeObserver')) return;
  console.warn('[GRAMEEN]', e.message);
});
