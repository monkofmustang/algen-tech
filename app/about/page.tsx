import { Building, GraduationCap, History, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About NepalAI</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  We're on a mission to transform businesses in Nepal and beyond through innovative AI solutions.
                </p>
              </div>
            </div>
            <img
              alt="Our Team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              src="/placeholder.svg?height=550&width=750"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm dark:bg-purple-800/30">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">From Vision to Reality</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The journey of Nepal's leading AI company
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <History className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-bold">Our Beginning</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Founded in 2018 by a team of AI researchers and software engineers, NepalAI began with a vision to bring
                cutting-edge AI technology to Nepal. What started as a small consulting firm has grown into the
                country's premier AI solutions provider.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Target className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Our mission is to democratize AI technology in Nepal and empower businesses of all sizes to leverage the
                power of artificial intelligence. We believe that AI can transform industries and drive economic growth
                in our country.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Building className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-bold">Our Growth</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Over the years, we've expanded our team and capabilities, working with clients across various industries
                including finance, healthcare, education, and retail. Today, we're proud to be at the forefront of AI
                innovation in Nepal.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-bold">Our Expertise</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Our team consists of AI researchers, data scientists, software engineers, and business consultants with
                expertise in machine learning, natural language processing, computer vision, and more. We're committed
                to staying at the cutting edge of AI technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm dark:bg-purple-800/30">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Experts</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The talented individuals behind NepalAI
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {[
              {
                name: "Aarav Sharma",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
                bio: "AI researcher with 10+ years of experience in machine learning and natural language processing.",
              },
              {
                name: "Priya Patel",
                role: "CTO",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Former Google engineer with expertise in building scalable AI systems and software architecture.",
              },
              {
                name: "Niraj Thapa",
                role: "Head of AI Research",
                image: "/placeholder.svg?height=300&width=300",
                bio: "PhD in Computer Science with specialization in deep learning and computer vision.",
              },
              {
                name: "Maya Gurung",
                role: "Head of Consulting",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Business strategist with experience helping companies implement AI solutions.",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <img
                  alt={member.name}
                  className="rounded-full object-cover"
                  height="150"
                  src={member.image || "/placeholder.svg"}
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">{member.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm dark:bg-purple-800/30">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Stand For</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The principles that guide our work
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800/30">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Client-Centric</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We put our clients' needs first, working closely with them to understand their challenges and deliver
                solutions that create real value.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800/30">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Continuous Learning</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We're committed to staying at the forefront of AI innovation, constantly learning and evolving to
                provide the best solutions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800/30">
                <Building className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Ethical AI</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We believe in developing AI responsibly, with a focus on transparency, fairness, and privacy in all our
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

