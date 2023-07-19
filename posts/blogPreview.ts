export interface BlogPreview {
    title: string;
    subtitle: string;
    date: string;
    cover_image: string;
    tags: string[];
    slug:string;
  }
  

  

export const blogPreview: BlogPreview[]=[
    {
      "title": "Building a QR code micro-app",
      "subtitle": "Build a serverless 'hello-world' QR code app with Python and AWS.",
      "date": "2021-08-14",
      "cover_image": "/images/posts/img3.jpg",
      "tags": ["mylife", "qrcode"],
      "slug":"/aws-quickstart"
    },
    {
      "title": "Getting Started with AWS",
      "subtitle": "Create an AWS account and set up CLI/SDK access.",
      "date": "2020-12-27",
      "cover_image": "/images/posts/img1.jpg",
      "tags": ["aws", "coding"],
      "slug":"/gpt-3-generated-poetry"

    },
    {
      "title": "Using AI to generate poetry",
      "subtitle": "I used GPT-3 to generate poetry and other creative content.",
      "date": "2021-08-27",
      "cover_image": "/images/posts/img2.jpg",
      "tags": ["gpt", "openai"],
      "slug":"/qr-code-micro-app"

    },
    {
      "title": "Create retro games with PICO-8",
      "subtitle": "8-bit games are a great way to learn and expand your portfolio.",
      "date": "2020-12-19",
      "cover_image": "/images/posts/img4.jpg",
      "tags": ["gaming", "fun"],
      "slug":"/retro-games-with-pico-8"

    },
    {
      "title": "Building a serverless SaaS product",
      "subtitle": "A full-stack SaaS project with authentication and payments.",
      "date": "2021-07-12",
      "cover_image": "/images/posts/img5.jpg",
      "tags": ["scss", "coding", "webdev"],
      "slug":"/saas-starter-app"

    },
    {
      "title": "Wolfhunter: A PICO-8 RPG",
      "subtitle": "Implementing Pokemon-like combat mechanics in PICO-8.",
      "date": "2020-12-22",
      "cover_image": "/images/posts/img6.jpg",
      "tags": ["gaming", "fun"],
      "slug":"/wolfhunter"
    }
]
  