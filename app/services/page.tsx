import Link from "next/link"
import { ArrowRight, Bot, Code, LineChart, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      icon: <Bot className="h-10 w-10 text-purple-600" />,
      title: "AI Agents",
      description: "Custom intelligent agents that automate tasks and enhance productivity",
      details:
        "Our AI agents can handle customer service, data analysis, and process automation with human-like intelligence. We build agents that integrate with your existing systems and workflows, providing immediate value and ROI.",
      link: "/services/ai-agents",
    },
    {
      icon: <Code className="h-10 w-10 text-purple-600" />,
      title: "Software Development",
      description: "End-to-end AI-powered software solutions for your business",
      details:
        "We build custom software applications that leverage the latest AI technologies to solve complex business problems. From web and mobile apps to enterprise systems, our development team delivers high-quality, scalable solutions.",
      link: "/services/software-development",
    },
    {
      icon: <Users className="h-10 w-10 text-purple-600" />,
      title: "AI Consulting",
      description: "Expert guidance on implementing AI in your organization",
      details:
        "Our consultants help you identify opportunities, develop strategies, and implement AI solutions that drive business value. We work with you to understand your goals and create a roadmap for AI adoption.",
      link: "/services/ai-consulting",
    },
    {
      icon: <LineChart className="h-10 w-10 text-purple-600" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      details:
        "Our advanced analytics solutions help you understand patterns, predict trends, and make data-driven decisions. We combine statistical analysis, machine learning, and visualization to extract value from your data.",
      link: "/services/data-analytics",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-purple-600" />,
      title: "Conversational AI",
      description: "Natural language interfaces for seamless human-computer interaction",
      details:
        "We develop chatbots, virtual assistants, and voice interfaces that understand and respond to natural language. Our conversational AI solutions enhance customer experience and streamline operations.",
      link: "/services/conversational-ai",
    },
    {
      icon: <Bot className="h-10 w-10 text-purple-600" />,
      title: "AI Training",
      description: "Empower your team with AI knowledge and skills",
      details:
        "Our training programs help your team understand AI concepts and develop the skills needed to work with AI technologies. We offer customized workshops, courses, and hands-on training sessions.",
      link: "/services/ai-training",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Services</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{service.details}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm dark:bg-purple-800/30">
                Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Work</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our proven approach to delivering successful AI projects
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-4 mt-12">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, challenges, and goals to identify the right AI solutions.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We develop a comprehensive strategy and roadmap for implementing AI in your organization.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our team builds and tests the AI solution, ensuring it meets your requirements and expectations.",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "We deploy the solution and provide ongoing support and optimization to ensure long-term success.",
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800/30">
                  <span className="text-xl font-bold text-purple-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50 dark:bg-purple-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Contact us today to discuss how our AI solutions can help your business
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

