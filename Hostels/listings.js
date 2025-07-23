// listings.js
const listings = [
  {
    id: 1,
    category: 'business',
    title: 'Gulu Fresh Market',
    description: 'A vibrant market offering fresh produce, local crafts, and daily essentials.',
    image: 'https://drive.google.com/file/d/1c8xQn1m6Xo2xZ2J5qvZb1f8gGqRzK0vS/view?usp=sharing',
    contact: 'Tel: +256 123 456 789',
    address: 'Main Street, Gulu',
    rating: 4.5,
    url: 'https://www.google.com/',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d32.290275!3d2.772435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1763d123456789ab%3A0x123456789abcdef0!2sGulu%20Fresh%20Market!5e0!3m2!1sen!2sug!4v1234567890'
  },
  {
    id: 2,
    category: 'business',
    title: 'Blue Nile Restaurant',
    description: 'Enjoy authentic Ugandan and international cuisine in a cozy setting.',
    image: 'https://drive.google.com/file/d/1F8WqvX0T4y1q7DgZ3K6jYoQW9bE2x9rV/view?usp=sharing',
    contact: 'Tel: +256 987 654 321',
    address: '2nd Avenue, Gulu',
    rating: 4.7,
    url: '#',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d32.290275!3d2.772435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1763d123456789ab%3A0xabcdef1234567890!2sBlue%20Nile%20Restaurant!5e0!3m2!1sen!2sug!4v1234567890'
  },
  {
    id: 3,
    category: 'attraction',
    title: 'Gulu Cultural Center',
    description: 'Explore the rich Acholi culture through exhibitions, performances, and workshops.',
    image: 'https://drive.google.com/file/d/1ZxvF8QzW9YvK1a7TgC3JbP4Xo9Lq5v6M/view?usp=sharing',
    contact: 'Tel: +256 111 222 333',
    address: 'Cultural Road, Gulu',
    rating: 4.8,
    url: '#',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d32.290275!3d2.772435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1763d123456789ab%3A0x123456789abcdef1!2sGulu%20Cultural%20Center!5e0!3m2!1sen!2sug!4v1234567890'
  },
  {
    id: 4,
    category: 'event',
    title: 'Gulu Music Festival',
    description: 'Annual festival showcasing local and regional music talents.',
    image: 'https://drive.google.com/file/d/1QvTzL0W9xYvK7a6JgC3MbP4Xo9Lq5v6M/view?usp=sharing',
    contact: 'info@gulumusicfest.ug',
    address: 'Gulu City Park',
    rating: 4.9,
    url: '#',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d32.290275!3d2.772435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1763d123456789ab%3A0xabcdefabcdefabcd!2sGulu%20City%20Park!5e0!3m2!1sen!2sug!4v1234567890'
  },
  {
    id: 5,
    category: 'service',
    title: 'Gulu City Hospital',
    description: 'Providing quality healthcare services to the community.',
    image: 'https://drive.google.com/file/d/1YxvF8QzW9YvK1a7TgC3JbP4Xo9Lq5v6M/view?usp=sharing',
    contact: 'Tel: +256 444 555 666',
    address: 'Hospital Road, Gulu',
    rating: 4.6,
    url: '#',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d32.290275!3d2.772435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1763d123456789ab%3A0xabcdefabcdefabcd!2sGulu%20City%20Hospital!5e0!3m2!1sen!2sug!4v1234567890'
  },
  {
    id: 6,
    category: 'service',
    title: 'Gulu Public Library',
    description: 'A place to read, learn, and connect with the community.',
    image: 'https://drive.google.com/file/d/1WxvF8QzW9YvK1a7TgC3JbP4Xo9Lq5v6M/view?usp=sharing',
    contact: 'Tel: +256 777 888 999',
    address: 'Library Street, Gulu',
    rating: 4.3,
    url: '#',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d32.290275!3d2.772435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1763d123456789ab%3A0xabcdefabcdefabcd!2sGulu%20Public%20Library!5e0!3m2!1sen!2sug!4v1234567890'
  }
];
