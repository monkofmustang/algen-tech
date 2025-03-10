"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Bot, Cpu, Network, Brain, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const MotionLink = motion(Link)

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Revolutionizing Business with AI
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400">
                  Cutting-edge AI solutions tailored for Nepal's evolving business landscape
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 50,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                <div className="absolute inset-0 rounded-full border-2 border-white/20 rotate-45" />
                <div className="absolute inset-0 rounded-full border-2 border-white/20 rotate-90" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-500" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our AI Solutions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Empowering businesses with next-generation AI technologies
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {[
              {
                icon: Bot,
                title: "AI Agents",
                description: "Intelligent virtual assistants for customer service and task automation",
              },
              {
                icon: Cpu,
                title: "Machine Learning",
                description: "Custom ML models for predictive analytics and decision-making",
              },
              {
                icon: Network,
                title: "Neural Networks",
                description: "Deep learning solutions for complex pattern recognition",
              },
              {
                icon: Brain,
                title: "Cognitive Computing",
                description: "AI systems that mimic human thought processes",
              },
              {
                icon: Sparkles,
                title: "Natural Language Processing",
                description: "Advanced text analysis and language understanding",
              },
              {
                icon: ArrowRight,
                title: "AI Consulting",
                description: "Expert guidance on AI strategy and implementation",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <service.icon className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cutting-Edge AI for Nepal</h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  We're bringing world-class AI solutions to businesses across Nepal, driving innovation and growth.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                {[
                  "Tailored for local business needs",
                  "Seamless integration with existing systems",
                  "Continuous learning and improvement",
                  "Scalable solutions for businesses of all sizes",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      className=" text-green-500 flex-shrink-0"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
                  <Link href="/case-studies">
                    View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
                <motion.div
                  className="absolute inset-0 bg-blue-500 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-4 bg-purple-500 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute inset-8 bg-green-500 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how our AI solutions can drive your success
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-200">
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

