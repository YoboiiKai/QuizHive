"use client"

import { useState, useEffect } from "react"
import {
  Brain,
  Trophy,
  Users,
  BarChart,
  CheckCircle,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Star,
  Hexagon,
  Play,
  ChevronDown,
} from "lucide-react"

export default function QuizHiveLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  // Add a hook to track window size for responsive design
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Testimonials data
  const testimonials = [
    {
      name: "Jane Doe",
      role: "High School Teacher",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "QuizHive has transformed how I assess my students. The analytics help me identify areas where students need additional support. The platform is incredibly intuitive and my students love the interactive elements!",
      initials: "JD",
    },
    {
      name: "Mark Smith",
      role: "Corporate Trainer",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "We use QuizHive for all our training assessments. The platform is intuitive, and the reporting features are excellent. It's saved us countless hours and improved our training outcomes by 35%.",
      initials: "MS",
    },
    {
      name: "Amy Lee",
      role: "University Professor",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The collaborative features allow my teaching assistants and me to work together seamlessly on creating comprehensive assessments. QuizHive has become an essential tool in our department.",
      initials: "AL",
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden">
      {/* Honeycomb Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.5v35L30 60 0 42.5v-35L30 0zm0 5.764L5.764 20v30l24.236 14.236L54.236 50V20L30 5.764z' fill='%230a1f44' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a1f44]/95 py-2 shadow-lg" : "bg-[#0a1f44] py-4"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Hexagon className="h-10 w-10 text-yellow-400" fill="#0a1f44" />
              <Brain className="h-5 w-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <span className="text-2xl font-bold text-white">QuizHive</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1 group"
            >
              <span>Features</span>
              <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#how-it-works"
              className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1 group"
            >
              <span>How It Works</span>
              <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1 group"
            >
              <span>Testimonials</span>
              <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1 group"
            >
              <span>Pricing</span>
              <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Login/Signup Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="px-4 py-2 rounded-md border border-white/70 hover:border-white hover:bg-white/10 transition-all text-white"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a1f44] rounded-md hover:from-yellow-300 hover:to-yellow-400 transition-all font-medium shadow-lg shadow-yellow-500/20"
            >
              Sign Up Free
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a1f44]/95 py-4 backdrop-blur-sm animate-fadeIn">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a
                href="#features"
                className="text-white hover:text-yellow-400 transition-colors py-2 border-b border-white/10"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-white hover:text-yellow-400 transition-colors py-2 border-b border-white/10"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-white hover:text-yellow-400 transition-colors py-2 border-b border-white/10"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-white hover:text-yellow-400 transition-colors py-2 border-b border-white/10"
              >
                Pricing
              </a>
              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="flex-1 px-4 py-3 rounded-md border border-white/70 hover:bg-white/10 transition-all text-white text-center"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a1f44] rounded-md hover:from-yellow-300 hover:to-yellow-400 transition-all font-medium text-center"
                >
                  Sign Up Free
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#0a1f44] to-[#152a4e] text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>

        {/* Honeycomb Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <Hexagon
              key={i}
              className="absolute text-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block px-4 py-1 bg-yellow-400/20 rounded-full text-yellow-300 font-medium text-sm mb-6">
              #1 Quiz Platform for Educators
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Create <span className="text-yellow-400">Engaging</span> Quizzes with QuizHive
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              The ultimate quiz platform for educators, businesses, and quiz enthusiasts. Create, share, and analyze
              quizzes with ease.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a1f44] rounded-md hover:from-yellow-300 hover:to-yellow-400 transition-all font-bold flex items-center justify-center shadow-lg shadow-yellow-500/20 group"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm rounded-md hover:bg-white/10 transition-all font-bold flex items-center justify-center group">
                <Play className="mr-2 h-5 w-5 fill-white" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#152a4e] rounded-lg border border-[#1d3a6a]">
                <div className="text-3xl font-bold text-yellow-400">10k+</div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
              <div className="text-center p-4 bg-[#152a4e] rounded-lg border border-[#1d3a6a]">
                <div className="text-3xl font-bold text-yellow-400">5M+</div>
                <div className="text-sm text-gray-300">Quizzes Taken</div>
              </div>
              <div className="text-center p-4 bg-[#152a4e] rounded-lg border border-[#1d3a6a]">
                <div className="text-3xl font-bold text-yellow-400">98%</div>
                <div className="text-sm text-gray-300">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-[#0a1f44] rounded-full text-white font-medium text-sm mb-4">
              POWERFUL FEATURES
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#0a1f44]">
              Everything You Need to Create <span className="text-yellow-500">Amazing</span> Quizzes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools to create, manage, and analyze quizzes that engage your audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#0a1f44] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-[#152a4e] group hover:-translate-y-1 duration-300">
              <div className="bg-gradient-to-br from-[#0a1f44] to-[#152a4e] p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Intuitive Quiz Builder</h3>
              <p className="text-gray-300 mb-6">
                Create engaging quizzes with our drag-and-drop interface. Add images, videos, and various question
                types.
              </p>
              <div className="flex items-center text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#0a1f44] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-[#152a4e] group hover:-translate-y-1 duration-300">
              <div className="bg-gradient-to-br from-[#0a1f44] to-[#152a4e] p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Collaborative Editing</h3>
              <p className="text-gray-300 mb-6">
                Work together with your team to create and edit quizzes in real-time with collaborative features.
              </p>
              <div className="flex items-center text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#0a1f44] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-[#152a4e] group hover:-translate-y-1 duration-300">
              <div className="bg-gradient-to-br from-[#0a1f44] to-[#152a4e] p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <BarChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Detailed Analytics</h3>
              <p className="text-gray-300 mb-6">
                Get insights into quiz performance with detailed analytics and participant results.
              </p>
              <div className="flex items-center text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#0a1f44] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-[#152a4e] group hover:-translate-y-1 duration-300">
              <div className="bg-gradient-to-br from-[#0a1f44] to-[#152a4e] p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Gamification Elements</h3>
              <p className="text-gray-300 mb-6">
                Engage participants with leaderboards, badges, and rewards to make learning fun.
              </p>
              <div className="flex items-center text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#0a1f44] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-[#152a4e] group hover:-translate-y-1 duration-300">
              <div className="bg-gradient-to-br from-[#0a1f44] to-[#152a4e] p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Automated Grading</h3>
              <p className="text-gray-300 mb-6">
                Save time with automatic grading and instant feedback for participants.
              </p>
              <div className="flex items-center text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#0a1f44] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-[#152a4e] group hover:-translate-y-1 duration-300">
              <div className="bg-gradient-to-br from-[#0a1f44] to-[#152a4e] p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Custom Branding</h3>
              <p className="text-gray-300 mb-6">Personalize your quizzes with your own branding, colors, and logos.</p>
              <div className="flex items-center text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0a1f44]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-yellow-400/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-yellow-400/20 rounded-full text-yellow-600 font-medium text-sm mb-4">
              SIMPLE PROCESS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#0a1f44]">
              How <span className="text-yellow-500">QuizHive</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create and share quizzes in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

            {/* Step 1 */}
            <div className="relative">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-[#0a1f44] to-[#152a4e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-900/20 relative z-10">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0a1f44]">Create Your Quiz</h3>
                <p className="text-gray-600">
                  Use our intuitive builder to create engaging quizzes with various question types, media, and
                  customization options.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Create Quiz Interface"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-500">Easy to use</span>
                  </div>
                  <div className="text-[#0a1f44]">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-[#152a4e] to-[#2a4a7a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-900/20 relative z-10">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0a1f44]">Share with Participants</h3>
                <p className="text-gray-600">
                  Distribute your quiz via link, embed on your website, or integrate with your learning management
                  system.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Share Quiz Interface"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-500">Multiple sharing options</span>
                  </div>
                  <div className="text-[#0a1f44]">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-[#2a4a7a] to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/20 relative z-10">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0a1f44]">Analyze Results</h3>
                <p className="text-gray-600">
                  Review detailed analytics, participant performance, and export reports to improve future quizzes.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Analytics Dashboard"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-500">Comprehensive insights</span>
                  </div>
                  <div className="text-[#0a1f44]">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-b from-[#0a1f44] to-[#152a4e] text-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <Hexagon
              key={i}
              className="absolute text-white/5"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-yellow-300 font-medium text-sm mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our <span className="text-yellow-400">Users</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied educators and businesses using QuizHive
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Testimonial Slider */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500"
                  style={{
                    width: `${((activeTestimonial + 1) / testimonials.length) * 100}%`,
                    transition: "width 0.5s ease-in-out",
                  }}
                ></div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#0a1f44] flex items-center justify-center text-white text-2xl font-bold mb-4 border-4 border-yellow-400">
                    {testimonials[activeTestimonial].initials}
                  </div>
                  <h4 className="font-bold text-xl">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-300">{testimonials[activeTestimonial].role}</p>

                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 text-6xl text-yellow-400/30">"</div>
                    <p className="text-lg md:text-xl leading-relaxed relative z-10">
                      {testimonials[activeTestimonial].quote}
                    </p>
                    <div className="absolute -bottom-10 -right-6 text-6xl text-yellow-400/30">"</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-3 h-3 rounded-full ${activeTestimonial === i ? "bg-yellow-400" : "bg-white/30"}`}
                    aria-label={`View testimonial ${i + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0a1f44] to-[#152a4e] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>

            {/* Honeycomb Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(5)].map((_, i) => (
                <Hexagon
                  key={i}
                  className="absolute text-white"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 60 + 30}px`,
                    height: `${Math.random() * 60 + 30}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    opacity: Math.random() * 0.5 + 0.1,
                  }}
                />
              ))}
            </div>

            <div className="md:w-2/3 mb-8 md:mb-0 relative z-10">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-yellow-300 font-medium text-sm mb-4">
                GET STARTED TODAY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Create Engaging Quizzes?</h2>
              <p className="text-xl text-gray-300">
                Join thousands of educators and businesses using QuizHive to create interactive quizzes.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-2" />
                  <span className="text-white">Free 14-day trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-2" />
                  <span className="text-white">No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-2" />
                  <span className="text-white">Cancel anytime</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 flex justify-center relative z-10">
              <a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a1f44] rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all font-bold text-lg shadow-lg shadow-yellow-500/20 group flex items-center"
              >
                Get Started for Free
                <ChevronRight className="ml-2 h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1f44] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Hexagon className="h-10 w-10 text-yellow-400" fill="#0a1f44" />
                  <Brain className="h-5 w-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <span className="text-2xl font-bold">QuizHive</span>
              </div>
              <p className="text-gray-300 mb-6">
                The ultimate quiz platform for educators, businesses, and quiz enthusiasts.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Product</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Resources</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Legal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} QuizHive. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
