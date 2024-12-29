import React from "react";

function Menu() {
  const posts = [
    {
      id: 1,
      title: "Introduction to Node.js",
      img: "https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.webp?a=1&b=1&s=612x612&w=0&k=20&c=Da21SecOXwrJiU0nZcofNDiPGvMghXfmKvqkr-C2STc=",
      desc: "Learn the basics of Node.js, an open-source, cross-platform JavaScript runtime environment.",
    },
    {
      id: 2,
      title: "Understanding React.js",
      img: "https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.webp?a=1&b=1&s=612x612&w=0&k=20&c=KXqN8IRwVW7k3Nexdwol2K9ZJPWakOjC8tkg3UR1g9E=",
      desc: "Explore the fundamentals of React.js, a JavaScript library for building user interfaces.",
    },
    {
      id: 3,
      title: "Mastering CSS Grid",
      img: "https://media.istockphoto.com/id/2125872569/photo/businessman-signing-a-legal-real-estate-contract-agreement-home-insurance.webp?a=1&b=1&s=612x612&w=0&k=20&c=jeT_yWSIcphgoW9LEAkkCv0bKTOro5jlK3LJxuXpdRw=",
      desc: "Dive into CSS Grid to create modern and responsive web layouts.",
    },
    {
      id: 4,
      title: "JavaScript ES6 Features",
      img: "https://media.istockphoto.com/id/157180797/photo/car-accident-crash.webp?a=1&b=1&s=612x612&w=0&k=20&c=TEUh7HGlir6pWMcPJTiabcQnmCqjMcC0TJaLC3tgRPA=",
      desc: "Discover the latest features of ES6 and enhance your JavaScript programming skills.",
    },
    {
      id: 5,
      title: "Building REST APIs",
      img: "https://media.istockphoto.com/id/2161390438/photo/legal-liability-concept-law-books-and-magnifying-glass.webp?a=1&b=1&s=612x612&w=0&k=20&c=_JS-4ZIXaPSuEKmp_8404OMIn5nTGfoXQepZZwGPmZM=",
      desc: "Learn how to design and implement RESTful APIs using Node.js.",
    },
    {
      id: 6,
      title: "MongoDB Essentials",
      img: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww",
      desc: "Get started with MongoDB, a NoSQL database for modern applications.",
    },
    {
      id: 7,
      title: "Version Control with Git",
      img: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww",
      desc: "Master version control using Git for efficient code collaboration.",
    },
    {
      id: 8,
      title: "Responsive Design Principles",
      img: "https://plus.unsplash.com/premium_photo-1666901328734-3c6eb9b6b979?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww",
      desc: "Understand responsive web design to build websites that adapt to different screen sizes.",
    },
    {
      id: 9,
      title: "Introduction to TypeScript",
      img: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww",
      desc: "Learn the basics of TypeScript, a strongly typed programming language built on JavaScript.",
    },
    {
      id: 10,
      title: "Deploying with Docker",
      img: "https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fHww",
      desc: "Discover how to containerize applications and deploy them with Docker.",
    },
  ];

  return (
    <div className="menu">
      <h1>Other Posts</h1>
      {posts.map((item) => {
        return (
          <div className="post" key={item.id}>
            <img src={item.img} alt="Other pictures" />
            <h2>{item.title}</h2>
            <button>Read more</button>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
