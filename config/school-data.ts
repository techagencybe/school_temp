export const SchoolConfig = {
    name: "Living Fountain International School",
    shortName: "LFIS",
    colors: {
        primary: "#003366", // The deep blue from their logo
        secondary: "#C5A059", // A gold/brass accent for "Excellence"
    },
    contact: {
        phones: ["+234 0906 3733 913", "+234 0809 8315 819"],
        highSchoolPhone: "+234 708 911 6852",
        emails: ["info@lfis-edu.org", "highschool@lfis-edu.org", "fountainschool@gmail.com", "lfis.highschool@gmail.com"],
        address: "Plot 3214, F Road, CITEC Mount Pleasant Estate, off Airport Road, Mbora District, FCT, Abuja, Nigeria",
        googleMaps: "https://www.google.com/maps/dir//Living+Fountain+International+School,+Plot+3214,+F+Road,+CITEC+Mount+Pleasant+Estate,+off+Airport+Road,+Mbora+District,+FCT,+Abuja,+Nigeria"
    },
    navLinks: [
        { 
          name: "ABOUT US", 
          href: "/about",
          subLinks: ["Who We Are", "From the Founder and Director"]
        },
        { 
          name: "MEDIA UNIT", 
          href: "/media",
          subLinks: ["Events", "Latest News", "Calendar", "Facility Gallery"]
        },
        { name: "ADMISSIONS", href: "/admissions" },
        { name: "PRIMARY SCHOOL", href: "/primary" },
        { name: "HIGH SCHOOL", href: "/high-school" },
        { name: "PRE UNIVERSITY", href: "/pre-university" },
        { 
          name: "SCHOOL PORTALS", 
          href: "/portals",
          subLinks: ["Primary", "High School"]
        },
    ],
    heroSlides: [
        { type: 'image', src: '/images/hero-carousel/slider-scaled.jpg', title: 'A Community of Love', subtitle: 'Leadership & Service' },
        { type: 'image', src: '/images/hero-carousel/Class-ambience-scaled.jpg', title: 'Conducive Environment', subtitle: 'Focused on Learning' },
        { type: 'image', src: '/images/hero-carousel/ict-slide-1-scaled.jpg', title: 'ICT Compliant', subtitle: 'Preparing for a Digital Future' },
        { type: 'image', src: '/images/hero-carousel/home-economics-practicals-scaled.jpg', title: 'Holistic Development', subtitle: 'Practical Learning for Life' },
        { type: 'image', src: '/images/hero-carousel/learning-is-fun.jpg', title: 'Early Years Foundation', subtitle: 'Where Learning is Fun' },
        { type: 'image', src: '/images/hero-carousel/cic-nig-scaled.jpg', title: 'Global Perspectives', subtitle: 'International Excellence' },
        { type: 'image', src: '/images/hero-carousel/christian-School.jpg', title: 'Moral Foundations', subtitle: 'Character and Faith' },
    ],
    welcome: {
        title: "Leadership & Service",
        subtitle: "WELCOME TO LFIS",
        description: "Living Fountain International School is an excellent educational facility which is founded on Godly principles. We run a British-Nigerian incorporated curriculum and are intentional about raising leaders for global relevance.",
        points: [
            "Godly Principles & Moral Values",
            "British-Nigerian Curriculum",
            "Ultra-modern Facilities",
            "Experienced & Competent Tutors"
        ]
    },
    programs: [
        {
            id: "01",
            name: "Crèche & Early Years",
            label: "FOUNDATION",
            desc: "Our playgroup to Reception (1yr - 4yrs) focus on quick learning and social development in a hospitable environment.",
            image: "/images/CRECHE.png"
        },
        {
            id: "02",
            name: "Primary School",
            label: "ACADEMICS",
            desc: "Ensuring holistic education as pupils are positioned for choice secondary schools globally.",
            image: "/images/primary-school.jpg"
        },
        {
            id: "03",
            name: "High School",
            label: "LEADERSHIP",
            desc: "Young scholars are encouraged to take responsibility and develop empathetic leadership skills.",
            image: "/images/high-school.jpg"
        }
    ],
    canadaPartnership: {
        title: "Study in Nigeria, Graduate in Canada",
        subtitle: "PRE-UNIVERSITY PROGRAM",
        desc: "In partnership with Canadian Independent College, we offer a cost-effective pathway for students seeking university placements outside Nigeria.",
        image: "/images/canada.jpg",
        activities: ["University Placement Support", "IELTS/SAT Preparation", "Visa Guidance", "Cultural Integration"]
    },
    features: [
        { title: "Conducive Environment", desc: "Ultra-modern facilities in a serene, secure location at Citec Estate, Mbora." },
        { title: "World-Class Curriculum", desc: "A blend of British and Nigerian curricula designed for global relevance." },
        { title: "Core Values", desc: "Developing passion for learning, self-confidence, and Godly principles." },
        { title: "Expert Tutors", desc: "Saturated with professional staff ensuring high academic achievement." },
        { title: "Extra-Curricular", desc: "From music to sports, we fan students' peculiar skills into mastery." },
        { title: "Proven Success", desc: "Our graduates consistently compete at the highest level in global institutions." },
    ],
    testimonials: [
        { name: "David Coker", role: "Alumni (2013 Set)", quote: "LFIS method of teaching is incredibly super. I had loads of fun learning and meeting quality friends.", image: "/images/testimonial/1.jpeg" },
        { name: "Roseline", role: "Class 10 Scholar", quote: "LFIS is a blessing to my family and society. I have two more of my siblings here doing just fine!", image: "/images/testimonial/2.jpg" },
        { name: "Engr. Benjamin", role: "Parent", quote: "LFIS work ethics is second to none... So incredible. Simply the best formative school in the FCT.", image: "/images/testimonial/1.jpeg" },
    ],
    news: [
        {
            date: "23 May 2025",
            title: "2025 JAMB High Scorers From Our School",
            excerpt: "We are proud to announce the exceptional performance of our students in the recent JAMB examinations...",
            category: "Academic",
            image: "/images/hero-carousel/slider-scaled.jpg" // Using existing image for now
        },
        {
            date: "06 March 2025",
            title: "Student Wins National History Competition",
            excerpt: "Our scholar emerged victorious in the 'Know Your History' national challenge held in Abuja...",
            category: "Competition",
            image: "/images/hero-carousel/Class-ambience-scaled.jpg"
        },
        {
            date: "20 Feb 2025",
            title: "Annual Inter-House Sports Extravaganza",
            excerpt: "A day of grit, teamwork, and athletic excellence as students competed for the prestigious gold cup...",
            category: "Sports",
            image: "/images/hero-carousel/ict-slide-1-scaled.jpg"
        }
    ]
};