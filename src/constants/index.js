
import { Facebook, Github, Instagram, Linkedin, Mail, } from "../assets";


export const navigation = [
  { name: "Marketplace", to: "/market" },
  { name: "Services", to: "/services" },
  { name: "Company", to: "/company" },
  
];

export const productsData = {
  product: [
    {
      id: 1,
      type: "Avocados",
      desc: "Southern Africa green-skin variety.",
      image: "../src/assets/avocados.png",
    },
    {
      id: 2,
      type: "Apples",
      desc: "Sweet apples from eastern Zimbabwe.",
      image: "../src/assets/apples.png",
    },
    {
      id: 3,
      type: "Bananas",
      desc: "Sweet bananas from eastern Zimbabwe.",
      image: "../src/assets/bananas.png",
    },
    {
      id: 4,
      type: "Cucumber",
      desc: "Cucumbers from the western region.",
      image: "../src/assets/cucumbers.png",
    },
    {
      id: 5,
      type: "Pepper",
      desc: "Colorful pepper from the northern region.",
      image: "../src/assets/pepper.png",
    },
    {
      id: 6,
      type: "Potatoes",
      desc: "Potatoes from the southern region.",
      image: "../src/assets/potato.png",
    },
    {
      id: 7,
      type: "Round Nuts",
      desc: "Round Nuts from the eastern region.",
      image: "../src/assets/roundnuts.png",
    },
    {
      id: 8,
      type: "Peas",
      desc: "Firm peas from the western region.",
      image: "../src/assets/peas.png",
    },
    {
      id: 9,
      type: "Raspberry",
      desc: "Juicy Raspberry from the southern region.",
      image: "../src/assets/rasberry.png",
    },
    {
      id: 10,
      type: "Macadamia",
      desc: "Tasty macadamia nuts from the northern region.",
      image: "../src/assets/macadamia.png",
    },
    {
      id: 11,
      type: "Strawberries",
      desc: "Sweet strawberries from the western region.",
      image: "../src/assets/strawberries.png",
    },
    {
      id: 12,
      type: "Paprika",
      desc: "Dark sweet blue berries from Zimbabwe",
      image: "../src/assets/paprika.png",
    },
  ],
};

export const socialLinks = [
  {
    name: "Facebook",
    logo: Facebook,
    link: "#",
  },
  {
    name: "Instagram",
    logo: Instagram,
    link: "#",
  },
  {
    name: "Github",
    logo: Github,
    link: "#",
  },
  {
    name: "Linkedin",
    logo: Linkedin,
    link: "#",
  },
  {
    name: "Mail",
    logo: Mail,
    link: "#",
  },
];

export const menuLinks = {
  Product: [
      {
          name: "Fruits",
          link: "#"
      },
      {
          name: "Vegetables",
          link: "#"
      },
      {
          name: "Spice Products",
          link: "#"
      },
  ],
  Markets: [
      {
          name: "Europe",
          link: "#"
      },
      {
          name: "East Africa",
          link: "#"
      },
      {
          name: "West Africa",
          link: "#"
      }
  ],
  Resources: [
      {
          name: "Blog",
          link: "#"
      },
      {
        name: "Supplying",
        link: "#"
      },
      {
        name: "White Paper",
        link: "#"
      },
      
  ],
  Company: [
      {
        name: "FAQs",
        link: "#"
      },
      {
        name: "Team",
        link: "#"
      },
      {
          name: "Careers",
          link: "#"
      },
      {
        name: "About Us",
        link: "#"
      },    

  ],
  Bottom: [
      {
          name: "Privacy Policy",
          link: "#"
      }, 
      {
          name: "Terms of Use",
          link: "#"
      },   
      {
          name: "Sales and Documentation",
          link: "#"
      }, 
      {
          name: "Legal",
          link: "#"
      },   
      {
          name: "Sitemap",
          link: "#"
      },    
  ]
}

export const teamData = [
  {
    name: "Confidence Nyirenda",
    position: "Co-Founder & CTO",
    desc: "Confidence drives the technical strategy of the Tswaanda ecosystem and brand.",
    image: "../src/assets/team/confidence.png"
  },
  {
    name: "Selestine Mabhunuh",
    position: "Co-Founder & COO",
    desc: "Selestine drives the operations strategy of the Tswaanda ecosystem and brand.",
    image: "../src/assets/team/selestine.png"
  },
  {
    name: "Isheanesu N. Misi",
    position: "Lead Developer",
    desc: "Nigel is a seasoned full-stack developer with 5 years of experience in web development .",
    image: "../src/assets/team/nigel.png"
  },
]
