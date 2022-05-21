export const data = [
    {
      id:1,
      headingId: "headingOne",
      collapseid: "collapseOne",
      isExpanded: true,
      isCollapse: 'show',
      question: 'Difference between javascript and nodejs?',
      answer: `জাভাস্ক্রিপ্ট একটি interpreted programming language, জাভাস্ক্রিপ্ট একটি সফটলি কোডেড Language যার কারনে জাভাস্ক্রিপ্ট ব্যাবহার করার জন্য মেশিন নিয়ে খুব বেশি জানার প্রয়োজন হয় না এই Language অনেকটাই নিজের মত করে কাজ করে নেয় । জাভাস্ক্রিপ্ট ব্রাউজারে রান করার জন্য একটি ইঞ্জিন প্রয়োজন হয় । প্রত্যেক ব্রাউজারেরই নিজস্ব ইঞ্জিন আছে যার মধ্যে সবচেয়ে আলোচিত এবং সুপরিচিত হচ্ছে google chrome এর v8 ইঞ্জিন । জাভাস্ক্রিপ্ট ফাইল যখন ব্রাউজারে রান করা হয় তখন প্রত্যেক ব্রাউজারের যে নিজস্ব ইঞ্জিন রয়েছে তার মাধ্যমে ফাইলের উপর থেকে নিচ পর্যন্ত এক্সিকিউশন করে এবং প্রতিটি লাইন পার্স করে মেশিন কোডে রুপান্তর করে। এভাবে জাভাস্ক্রিপ্ট কাজ করে থাকে। আর Node js হচ্ছে রান টাইম যা google chrome এর v8 ইঞ্জিন এর উপর তৈরি যার মাধ্যমে ব্রাউজারে javascript এর কোড রান হয়। এটি একটি ওপেন সোর্স, ক্রস প্ল্যাটফর্ম জাভাস্ক্রিপ্ট রানটাইম এনভ্যায়র্নমেন্ট যার মাধ্যমে সার্ভার সাইডে জাভাস্ক্রিপ্ট কোড এক্সিকউট করা যায়।`
    },
    {
      id:2,
      headingId: "headingTwo",
      collapseid: "collapseTwo",
      isExpanded: false,
      isCollapse: '',
      question: 'When should you use nodejs and when should you use mongodb?',
      answer: `Node js হচ্ছে রান টাইম যা google chrome এর v8 ইঞ্জিন এর উপর তৈরি যার মাধ্যমে ব্রাউজারে javascript এর কোড রান হয়। এটি server build করার জন্য ব্যাবহার হয়। আর MongoDB হচ্ছে একটি Database Engine সার্বারে ডাটা সংরক্ষন , অনুসন্ধান , আপডেট , ডিলেট করার জন্য MongoDB ব্যাবহার হয়। MongoDB একটি API লাইব্রেরি  যেটি  Nodejs অ্যাপ্লিকেশনের মধ্যে চালিত হয়। MongoDB তে পাইথন, জাভা, ইত্যাদির মতো অন্যান্য প্রোগ্রামিং পরিবেশের জন্য API লাইব্রেরিও রয়েছে।`
    },
    {
      id:3,
      headingId: "headingThree",
      collapseid: "collapseThree",
      isExpanded: false,
      isCollapse: '',
      question: 'What is the purpose of jwt and how does it work?',
      answer: `Json Web Token সাধারনত ব্যবহারকারীদের Authentication এবং Information share করার একটি নিরাপদ উপায় হিসাবে ব্যবহৃত হয়। এতে একটি secret key থাকে যার মাধ্যমে ব্যাবহারকারিকে সনাক্ত করা এবং ব্যাবহার কারির তথ্য শেয়ার করার জন্য কাজে আসে। আমরা আমাদের API গুলো secure করার জন্য jwt ব্যাবহার করি যেমন কোন ইউজার ভ্যালিড কিনা ইউজারটি কত সময় পর্যন্ত ভ্যালিড থাকবে এবং অন্যান্য আরো অনেক কাজ আমরা এর মাধ্যমে করে থাকি।`
    },
  ]