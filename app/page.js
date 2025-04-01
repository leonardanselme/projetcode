import ButtonLogin from "@/components/ButtonLogin";
import Link from "next/link";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  // Define inverted color theme classes
  const invertedTheme = {
    background: "bg-white text-black",
    foreground: "text-black",
    mutedForeground: "text-gray-700",
    border: "border-gray-300",
    section: "bg-gray-100",
    card: "bg-white border-gray-300",
    primary: "bg-black text-white",
    primaryForeground: "text-white",
    success: "text-green-600",
    buttonText: "text-white",
    buttonBg: "bg-black hover:bg-gray-800",
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Leo SaaS</span>
            </Link>
            <nav className="flex gap-6">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="flex items-center text-sm font-medium text-muted-foreground"
              >
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="flex items-center space-x-1">
              <ButtonLogin session={session} />
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Collect customer feedback to build better projects
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Create a feedback board in minutes, prioritize features, and build
              products that your customers will love.
            </p>
            <div className="space-x-4">
              <ButtonLogin session={session} />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="container mx-auto space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our platform provides all the tools you need to collect, organize,
              and act on customer feedback effectively.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-[180px] flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold">Collect Feedback</h3>
                  <p className="text-sm text-muted-foreground">
                    Create branded feedback portals that match your company's
                    identity and engage your audience effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-[180px] flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold">Unlimited Boards</h3>
                  <p className="text-sm text-muted-foreground">
                    Create as many feedback boards as you need for different
                    projects, products, or teams.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-[180px] flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold">Admin Dashboard</h3>
                  <p className="text-sm text-muted-foreground">
                    Powerful admin tools to manage your feedback boards, users,
                    and settings in one place.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-[180px] flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold">Prioritization</h3>
                  <p className="text-sm text-muted-foreground">
                    Use custom fields, tags, and voting to identify which
                    features matter most to your customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-[180px] flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold">Customer Engagement</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep users in the loop with automated updates when their
                    feedback is considered or implemented.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-[180px] flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team is always available to help you with any questions
                    or issues you may have.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="container mx-auto space-y-6 py-8 md:py-12 lg:py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Pricing
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              A pricing plan that adapts to your needs
            </p>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-6">
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold">Free</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">$0</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      1 Feedback Board
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Basic Analytics
                    </li>
                  </ul>
                </div>
                <ButtonLogin session={session} />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-lg">
              <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Popular
              </div>
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold">Pro</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">$19</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Unlimited Boards
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Advanced Analytics
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Admin Dashboard
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      24/7 Support
                    </li>
                  </ul>
                </div>
                <ButtonLogin session={session} extraStyle="w-full" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">Custom</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Everything in Pro
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Custom Integrations
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Dedicated Account Manager
                    </li>
                  </ul>
                </div>
                <ButtonLogin session={session} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="container mx-auto space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Find answers to common questions about our platform
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4">
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-medium">What do I get?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You get access to a powerful feedback management platform that
                helps you collect, organize, and prioritize customer feedback to
                build better products.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-medium">How do I get started?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Simply sign up for an account, create your first feedback board,
                and share the link with your customers. You'll start receiving
                feedback right away.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-medium">Do you offer a free plan?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Yes, we offer a free plan with limited features to help you get
                started. You can upgrade to a paid plan at any time to access
                more features.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a href="#" className="font-medium underline underline-offset-4">
              Leo SaaS
            </a>
            . The source code is available on{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
