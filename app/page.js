
 import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "John";

  return (
    <main>
      <section className="bg-base-200 flex justify-between items-center px-8 py-2">
        <div className="font-bold">Leo Saas</div>
        <div className="space-x-4">
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Pricing</a>
          </div>
        <div><ButtonLogin isLoggedIn={isLoggedIn} name={name}/></div>
      </section>
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">Collect customer feedback to build better projects</h1>
      <div className="opacity-90 mb-10">
        Create a feedback board in minutes, prioritize features, 
        and build products that your customers will love.
      </div>
     

      <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
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