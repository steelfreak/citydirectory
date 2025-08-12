// list.js
const listings = [
  {
    "id": 1754982929980,
    "category": "waste-mgt",
    "title": "Gulu City Landfill",
    "description": "Rubbish collection and Dumping Ground",
    "image": null,
    "contact": null,
    "address": null,
    "rating": null,
    "url": null,
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31880.84976769925!2d32.2900852565999!3d2.7849092202905292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a7c5f43c1f93%3A0x1a4db02900b0c8ce!2sGulu%20City%20Landfill!5e0!3m2!1sen!2sug!4v1754936855132!5m2!1sen!2sug"
  },
  {
    "id": 1754983036198,
    "category": "waste-mgt",
    "title": "Takataka Plastics",
    "description": "Plastic Collection and Recycling",
    "image": null,
    "contact": null,
    "address": null,
    "rating": null,
    "url": null,
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31880.84976769925!2d32.2900852565999!3d2.7849092202905292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a78946003c15%3A0xe3e66bceee66c464!2sTakataka%20Plastics!5e0!3m2!1sen!2sug!4v1754936926533!5m2!1sen!2sug"
  },
  {
    "id": 1754983121096,
    "category": "waste-mgt",
    "title": "Scratch Upcycling Recycling center",
    "description": "Plastic collection and Recycling",
    "image": null,
    "contact": "0782311048",
    "address": "Plot 75, 79 Jomo Kenyatta Rd, Gulu",
    "rating": null,
    "url": null,
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31880.84976769925!2d32.2900852565999!3d2.7849092202905292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a797f7e8a1e3%3A0xd55758d1de5a9f9b!2sScratch%20Upcycling!5e0!3m2!1sen!2sug!4v1754936993021!5m2!1sen!2sug"
  },
  {
    "id": 1754983180775,
    "category": "waste-mgt",
    "title": "Chalonn Recyclers",
    "description": "Waste management service",
    "image": null,
    "contact": "0752230175",
    "address": null,
    "rating": null,
    "url": null,
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31881.187490782817!2d32.2499637743164!3d2.772403800000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a7c0364f342f%3A0xbd85a367d2ec5ff2!2sChalonn%20Recyclers!5e0!3m2!1sen!2sug!4v1754937060430!5m2!1sen!2sug"
  },
  {
    "id": 1754983287350,
    "category": "waste-mgt",
    "title": "AfriGreen Sustain",
    "description": "Waste Management",
    "image": null,
    "contact": "0780177969",
    "address": "Plot 75, 79 Jomo Kenyatta Rd, Gulu",
    "rating": null,
    "url": null,
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31881.094328324325!2d32.31248267431641!3d2.775859100000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a78935769021%3A0x4aa4b8319f32575f!2sAfriGreen%20Sustain!5e0!3m2!1sen!2sug!4v1754937119383!5m2!1sen!2sug"
  },
  {
    "id": 1754983402998,
    "category": "Coperative",
    "title": "Green Home Plastic",
    "description": "Waste Management",
    "image": null,
    "contact": "0771079343",
    "address": "Plot 61, Block Road 3, Unyama Sub county Laroo Pece Gulu City Division",
    "rating": null,
    "url": "http://www.greenhomeplastic.org/",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31881.094328324325!2d32.31248267431641!3d2.775859100000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a769e0a02d5d%3A0xed291d94d9ad0bd2!2sGreen%20Home%20Plastic!5e0!3m2!1sen!2sug!4v1754937281900!5m2!1sen!2sug"
  },
  {
    "id": 1754983469987,
    "category": "waste-mgt",
    "title": "Andican city cleaners",
    "description": null,
    "image": null,
    "contact": "0774089798",
    "address": null,
    "rating": null,
    "url": null,
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31881.187490782817!2d32.2499637743164!3d2.772403800000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a7fc6f90134b%3A0x1e641f0fae62a871!2sAndican%20city%20cleaners!5e0!3m2!1sen!2sug!4v1754937345587!5m2!1sen!2sug"
  },
  {
    "id": 1754983585125,
    "category": "waste-mgt",
    "title": "AGRICYCLE UGANDA",
    "description": null,
    "image": null,
    "contact": "0787265325",
    "address": "Forest ward Laroo division, Gulu",
    "rating": null,
    "url": "https://agricycleuganda.org/",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31881.187490782817!2d32.2499637743164!3d2.772403800000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a7017e4155bf%3A0x6a92a0fcbc3de04c!2sAGRICYCLE%20UGANDA!5e0!3m2!1sen!2sug!4v1754937469176!5m2!1sen!2sug"
  }
];
