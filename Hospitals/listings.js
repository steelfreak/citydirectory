// listings.js
const listings = [
  {
    "id": 1,
    "category": "healthcare",
    "title": "MARA HEALTH CARE CENTER",
    "description": "A place to have better wellness of the body.",
    "image": "https://drive.google.com/uc?export=view&id=1tcZ1ildVBLxb2jkG3P4lmJoYg6SFNLTb",
    "contact": "Tel: 0781728944",
    "address": "Layibi central A & B along Louis, Otika Road, Gulu",
    "rating": 4.5,
    "url": "https://www.google.com/",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63761.263157883564!2d32.22890264863279!3d2.7929587000000065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a7cfdae4e8f7%3A0x98e114ddd19934d0!2sMARA%20HEALTH%20CARE%20CENTER!5e0!3m2!1sen!2sug!4v1752502949084!5m2!1sen!2sug"
  },
  {
    "id": 2,
    "category": "healthcare",
    "title": "Revital Health Care Pharmacy Gulu",
    "description": "null.",
    "image": "null",
    "contact": "Tel: 0776256110",
    "address": null,
    "rating": 4.8,
    "url": null,
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63761.263157883564!2d32.22890264863279!3d2.7929587000000065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a794b01a88b7%3A0xaa9992ead0167c62!2sRevital%20Health%20Care%20Pharmacy%20Gulu!5e0!3m2!1sen!2sug!4v1752502337069!5m2!1sen!2sug"
  },
  {
    "id": 3,
    "category": "healthcare",
    "title": "Laroo Health Center II",
    "description": "Laroo Health Center II is located in Gulu. Laroo Health Center II is working in Hospitals activities. You can contact the company at 0788 508355.",
    "image": null,
    "contact": "0788 508355",
    "address": "kampala",
    "rating": 3.4,
    "url": null,
    "map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7970.207340622727!2d32.324813!3d2.785663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a7a6578dbfc9%3A0x8dd30a15448d1406!2sLaroo%20Health%20Center%20II!5e0!3m2!1sen!2sus!4v1752502091273!5m2!1sen!2sus"
  },
  {
    "id": 4,
    "category": "healthcare",
    "title": "International Medical Centre",
    "description": "Quality Care & Accessibility at C Care IMC. Expanding Network of Primary and Tertiary Healthcare Services",
    "image": null,
    "contact": "039 3274218",
    "address": "Gulu Town, P.O BOX 8177, Gulu, Uganda",
    "rating": 4.5,
    "url": "https://c-care.com/ug/clinic/c-care-imc-gulu/",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63761.263157883564!2d32.22890264863279!3d2.7929587000000065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a62ffd6107c1%3A0x55bffb46cb13861!2sInternational%20Medical%20Centre!5e0!3m2!1sen!2sug!4v1752501678138!5m2!1sen!2sug"
  },
  {
    "id": 5,
    "category": "healthcare",
    "title": "AAR Gulu Clinic",
    "description": "AAR Healthcare Gulu is dedicated to providing personalized and comprehensive healthcare services, ensuring you receive the attention and care you deserve.",
    "image": null,
    "contact": "(+256) 709 767730 / (+256) 776 876860 / 0716247352",
    "address": "Plot 10 Queens Avenue, Next to African Queen, Gulu Uganda",
    "rating": 4,
    "url": "https://aar-healthcare.ug/aar-clinics-network/aar-gulu/",
    "map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7970.29399470407!2d32.29856!3d2.772831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a647ef2378ab%3A0x11c3d59632dbd9c4!2sAAR%20Gulu%20Clinic!5e0!3m2!1sen!2sus!4v1752500819420!5m2!1sen!2sus"
  },
  {
    "id": 6,
    "category": "healthcare",
    "title": "Ferund health services, Gulu",
    "description": "Ferund health services, Gulu",
    "image": null,
    "contact": "+256 782 043428",
    "address": "Acholi Road, Gulu, Gulu, UG Uganda",
    "rating": 5,
    "url": null,
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63761.263157883564!2d32.22890264863279!3d2.7929587000000065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a7812bcdfb95%3A0x7df989b13a4bcb61!2sFerund%20health%20services%2C%20Gulu!5e0!3m2!1sen!2sug!4v1752500028107!5m2!1sen!2sug"
  },
  {
    "id": 7,
    "category": "healthcare",
    "title": "Greenland Medical Centre Gulu",
    "description": null,
    "image": null,
    "contact": "0771 566210",
    "address": "Gulu, Uganda",
    "rating": 4.5,
    "url": null,
    "map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7970.19820764652!2d32.292901!3d2.787012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a77e32127701%3A0x3da7357d8fa86475!2sGreenland%20Medical%20Centre%20Gulu!5e0!3m2!1sen!2sus!4v1752499462575!5m2!1sen!2sus"
  }
];
