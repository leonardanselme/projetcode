import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import productDemo from "@/app/productDemo.jpeg";
import { auth } from "@/auth";
//import clientPromise from "@/libs/mongo";

export default async function Home() {
  const session = await auth();

  //const greeting = `Hello, ${isLoggedIn ? name : "there"}`;

  return (
    <main>
      {/*HEADER*/}
      <section className="bg-base-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-8 py-2">
          <div className="font-bold">Leo Saas</div>
          <div className="space-x-4 max-md:hidden ">
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
          </div>
          <div>
            <ButtonLogin session={session} />
          </div>
        </div>
      </section>
      {/*HERO*/}
      <section className="text-center lg:text-left py-32 px-8 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start">
        <Image
          src={productDemo}
          alt="Product demo"
          className="w-96 rounded-xl"
        />

        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Collect customer feedback to build better projects
          </h1>
          <div className="opacity-90 mb-10">
            Create a feedback board in minutes, prioritize features, and build
            products that your customers will love.
          </div>

          <ButtonLogin session={session} />
        </div>
      </section>
      {/*PRICING*/}

      <section className="bg-base 200" id="pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            {" "}
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapt to your needs
          </h2>

          <div className="p-8 bg-gray-50 rounded-3xl mx-auto space-y-6 w-80 ">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">19$ </div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>

            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-green-600 size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z"
                    clipRule="evenodd"
                  />
                </svg>
                Collect feedback{" "}
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-green-600 size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z"
                    clipRule="evenodd"
                  />
                </svg>
                Unlimited boards
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-green-600 size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z"
                    clipRule="evenodd"
                  />
                </svg>
                Admin dashboard
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-green-600 size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z"
                    clipRule="evenodd"
                  />
                </svg>
                24/7 Support
              </li>
            </ul>

            <ButtonLogin session={session} extraStyle="w-full" />
          </div>
        </div>
      </section>

      {/*FAQ*/}
      <section className="bg-base 200" id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            {" "}
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <ul className="max-w-lg mx-auto">
            {[
              { question: "What do I get?", answer: "Loreum Ipsum" },
              { question: "How do I get started?", answer: "Loreum Ipsum" },
              { question: "Do you offer a free plan?", answer: "Loreum Ipsum" },
            ].map(
              (
                qa //Dans cet exemple, qa contient les objets  { question: "Q", answer: "A" }
              ) => (
                <FAQListItem key={qa.question} qa={qa} />
              )
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}

/*
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {}
      <nav className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-16">
        <div className="navbar-start">
          <div className="flex items-center">
            <Image 
              src="/vercel.svg" 
              alt="Logo" 
              width={32} 
              height={32} 
              className="mr-2"
            />
            <span className="font-bold text-xl">FeedbackHub</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><Link href="#features" className="font-medium">Features</Link></li>
            <li><Link href="#pricing" className="font-medium">Pricing</Link></li>
            <li><Link href="#testimonials" className="font-medium">Testimonials</Link></li>
            <li><Link href="#faq" className="font-medium">FAQ</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/login" className="btn btn-ghost mr-2">Log in</Link>
          <Link href="/signup" className="btn btn-primary">Sign up</Link>
        </div>
      </nav>

      {}
      <section className="hero bg-base-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Collect customer feedback to build better products
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-xl">
              Create a feedback board in minutes, prioritize features, 
              and build products that your customers will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup" className="btn btn-primary btn-lg">
                Get Started - It&apos;s Free
              </Link>
              <Link href="/demo" className="btn btn-outline btn-lg">
                See Demo
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-gray-200 rounded-lg shadow-lg p-6 w-full max-w-md">
              <div className="bg-white rounded-md p-4 mb-4">
                <h3 className="font-bold mb-2">Feedback Board</h3>
                <div className="space-y-2">
                  {[
                    { title: "Add dark mode support", votes: 42 },
                    { title: "Improve mobile experience", votes: 36 },
                    { title: "Export data to CSV", votes: 29 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center bg-base-100 rounded p-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-semibold mr-3">
                        {item.votes}
                      </span>
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to manage feedback</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform provides all the tools you need to collect, organize, and act on customer feedback effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customizable Feedback Boards",
                description: "Create branded feedback portals that match your company's identity and engage your audience effectively."
              },
              {
                title: "Prioritization Tools",
                description: "Use custom fields, tags, and voting to identify which features matter most to your customers."
              },
              {
                title: "Roadmap Planning",
                description: "Share your product plans publicly or privately and keep customers informed about what's coming next."
              },
              {
                title: "Team Collaboration",
                description: "Invite team members, assign feedback items, and work together on customer requests."
              },
              {
                title: "Customer Engagement",
                description: "Keep users in the loop with automated updates when their feedback is considered or implemented."
              },
              {
                title: "Analytics Dashboard",
                description: "Gain insights into feedback trends, popular feature requests, and customer satisfaction."
              }
            ].map((feature, index) => (
              <div key={index} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="card-body">
                  <h3 className="card-title text-xl">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to improve your product with real customer feedback?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of teams that use FeedbackHub to build better products by listening to what customers really want.
          </p>
          <Link href="/signup" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
            Start collecting feedback today
          </Link>
        </div>
      </section>

      {}
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <div className="flex items-center mb-4">
            <Image src="/vercel.svg" alt="Logo" width={24} height={24} className="mr-2" />
            <span className="font-bold">FeedbackHub</span>
          </div>
          <p>Building better products through customer feedback<br/>Since 2023</p>
        </div> 
        <div>
          <span className="footer-title">Product</span> 
          <Link href="/features" className="link link-hover">Features</Link> 
          <Link href="/pricing" className="link link-hover">Pricing</Link> 
          <Link href="/roadmap" className="link link-hover">Roadmap</Link> 
          <Link href="/changelog" className="link link-hover">Changelog</Link>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <Link href="/about" className="link link-hover">About us</Link> 
          <Link href="/contact" className="link link-hover">Contact</Link> 
          <Link href="/blog" className="link link-hover">Blog</Link> 
          <Link href="/careers" className="link link-hover">Careers</Link>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <Link href="/terms" className="link link-hover">Terms of service</Link> 
          <Link href="/privacy" className="link link-hover">Privacy policy</Link> 
          <Link href="/cookies" className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
}*/
