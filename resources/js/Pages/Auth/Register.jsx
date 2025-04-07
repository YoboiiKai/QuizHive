"use client"

import { useState } from "react"
import { Hexagon, Brain, Eye, EyeOff, ArrowLeft, CheckCircle, Info } from "lucide-react"

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)

    // Simple password strength calculation
    let strength = 0
    if (newPassword.length >= 8) strength += 1
    if (/[A-Z]/.test(newPassword)) strength += 1
    if (/[0-9]/.test(newPassword)) strength += 1
    if (/[^A-Za-z0-9]/.test(newPassword)) strength += 1

    setPasswordStrength(strength)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle registration logic here
    console.log({ name, email, password, confirmPassword, agreeTerms })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1f44] to-[#152a4e] flex flex-col">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>

      {/* Honeycomb Pattern */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.5v35L30 60 0 42.5v-35L30 0zm0 5.764L5.764 20v30l24.236 14.236L54.236 50V20L30 5.764z' fill='%230a1f44' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Floating Hexagons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            }}
          />
        ))}
      </div>

      {/* Back to Home */}
      <div className="container mx-auto px-4 py-6">
        <a
          href="/"
          className="inline-flex items-center text-white hover:text-yellow-400 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </a>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Hexagon className="h-12 w-12 text-yellow-400" fill="#0a1f44" />
                <Brain className="h-6 w-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span className="text-3xl font-bold text-white">QuizHive</span>
            </div>
          </div>

          {/* Register Card */}
          <div className="bg-[#0a1f44] rounded-2xl p-8 shadow-2xl border border-[#152a4e]">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Create Your Account</h1>
              <p className="text-gray-300">Join QuizHive and start creating amazing quizzes</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#152a4e] border border-[#1d3a6a] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#152a4e] border border-[#1d3a6a] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-3 bg-[#152a4e] border border-[#1d3a6a] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-colors"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {password && (
                  <div className="mt-2">
                    <div className="flex items-center mb-1">
                      <div className="flex-1 h-1.5 bg-[#152a4e] rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            passwordStrength === 0 ? 'bg-red-500' : 
                            passwordStrength === 1 ? 'bg-orange-500' : 
                            passwordStrength === 2 ? 'bg-yellow-500' : 
                            passwordStrength === 3 ? 'bg-green-500' : 'bg-green-400'
                          }`}
                          style={{ width: `${(passwordStrength / 4) * 100}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-xs text-gray-300">
                        {passwordStrength === 0 && 'Weak'}
                        {passwordStrength === 1 && 'Fair'}
                        {passwordStrength === 2 && 'Good'}
                        {passwordStrength === 3 && 'Strong'}
                        {passwordStrength === 4 && 'Very Strong'}
                      </span>
                    </div>
                    <div className="flex items-start mt-2">
                      <Info className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-400">
                        Password should be at least 8 characters and include uppercase, numbers, and special characters.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full px-4 py-3 bg-[#152a4e] border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-colors ${
                      confirmPassword && password !== confirmPassword
                        ? "border-red-500"
                        : "border-[#1d3a6a]"
                    }`}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="mt-1 text-xs text-red-400">Passwords do not match</p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <div className="relative flex items-center mt-0.5">
                  <input
                    id="agree-terms"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                    className="opacity-0 absolute h-5 w-5 cursor-pointer"
                    required
                  />
                  <div className="h-5 w-5 border border-[#1d3a6a] rounded flex items-center justify-center mr-2">
                    {agreeTerms && <CheckCircle className="h-4 w-4 text-yellow-400" />}
                  </div>
                </div>
                <label htmlFor="agree-terms" className="text-sm text-gray-300 cursor-pointer">
                  I agree to the{" "}
                  <a href="/terms" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a1f44] rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all font-medium shadow-lg shadow-yellow-500/20 mt-6"
              >
                Create Account
              </button>

              {/* Login Link */}
              <div className="text-center mt-6">
                <p className="text-gray-300">
                  Already have an account?{" "}
                  <a href="/login" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Social Registration */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#1d3a6a]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#0a1f44] text-gray-300">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border border-[#1d3a6a] rounded-xl hover:bg-[#152a4e] transition-colors">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="white">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-[#1d3a6a] rounded-xl hover:bg-[#152a4e] transition-colors">
                <svg className="h-5 w-5 mr-2" fill="white" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} QuizHive. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Help
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
