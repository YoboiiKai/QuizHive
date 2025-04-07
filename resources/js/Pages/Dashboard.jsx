"use client"

import { useState } from "react"
import SuperAdminLayout from "../Layouts/SuperAdminLayout"
import {
  Trophy,
  Users,
  Calendar,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Star,
  Zap,
  BookOpen,
  UserCheck,
  Layers,
  AlertTriangle,
} from "lucide-react"

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("week")

  // Mock data for the dashboard
  const stats = [
    {
      title: "Active Competitions",
      value: "12",
      change: "+3",
      changeType: "positive",
      icon: Trophy,
      color: "blue",
    },
    {
      title: "Registered Teams",
      value: "48",
      change: "+5",
      changeType: "positive",
      icon: Users,
      color: "purple",
    },
    {
      title: "Questions Bank",
      value: "1,250",
      change: "+120",
      changeType: "positive",
      icon: BookOpen,
      color: "amber",
    },
    {
      title: "Completion Rate",
      value: "92%",
      change: "-2%",
      changeType: "negative",
      icon: CheckCircle,
      color: "green",
    },
  ]

  const upcomingCompetitions = [
    {
      id: 1,
      name: "National Science Quiz Bee",
      date: "May 15, 2025",
      time: "10:00 AM",
      teams: 16,
      status: "Scheduled",
      category: "Science",
    },
    {
      id: 2,
      name: "Regional Math Challenge",
      date: "May 22, 2025",
      time: "9:30 AM",
      teams: 12,
      status: "Registration Open",
      category: "Mathematics",
    },
    {
      id: 3,
      name: "Inter-School History Bowl",
      date: "June 5, 2025",
      time: "1:00 PM",
      teams: 8,
      status: "Scheduled",
      category: "History",
    },
    {
      id: 4,
      name: "Tech & Programming Quiz",
      date: "June 12, 2025",
      time: "11:00 AM",
      teams: 10,
      status: "Registration Open",
      category: "Technology",
    },
  ]

  const topPerformers = [
    {
      id: 1,
      name: "Quantum Minds",
      school: "Einstein Academy",
      score: 98,
      wins: 5,
      category: "Science",
    },
    {
      id: 2,
      name: "Mathmagicians",
      school: "Pythagoras High School",
      score: 95,
      wins: 4,
      category: "Mathematics",
    },
    {
      id: 3,
      name: "History Hunters",
      school: "Heritage Institute",
      score: 92,
      wins: 4,
      category: "History",
    },
    {
      id: 4,
      name: "Code Warriors",
      school: "Tech Academy",
      score: 90,
      wins: 3,
      category: "Technology",
    },
    {
      id: 5,
      name: "Literary Lions",
      school: "Shakespeare High",
      score: 88,
      wins: 3,
      category: "Literature",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      action: "New team registered",
      subject: "Quantum Physics Team",
      time: "10 minutes ago",
      icon: UserCheck,
      color: "blue",
    },
    {
      id: 2,
      action: "Competition completed",
      subject: "Junior Science Quiz Bee",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "green",
    },
    {
      id: 3,
      action: "New questions added",
      subject: "Advanced Mathematics",
      time: "3 hours ago",
      icon: BookOpen,
      color: "purple",
    },
    {
      id: 4,
      action: "Competition rescheduled",
      subject: "Regional History Bowl",
      time: "Yesterday",
      icon: Calendar,
      color: "amber",
    },
    {
      id: 5,
      action: "Technical issue reported",
      subject: "Scoring System",
      time: "Yesterday",
      icon: AlertTriangle,
      color: "red",
    },
  ]

  const categoryPerformance = [
    { name: "Science", completion: 94, questions: 320 },
    { name: "Mathematics", completion: 88, questions: 280 },
    { name: "History", completion: 82, questions: 240 },
    { name: "Literature", completion: 78, questions: 200 },
    { name: "Technology", completion: 76, questions: 180 },
  ]

  return (
    <SuperAdminLayout>
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#0a1f44] to-[#152a4e] rounded-xl p-6 mb-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl font-bold mb-2">Quiz Bee Competition Dashboard</h1>
            <p className="text-blue-100 max-w-2xl">
              Monitor competitions, track team performance, and manage quiz bee events all in one place.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center border border-white/20">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Event
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-[#0a1f44] font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center">
              <Zap className="mr-2 h-4 w-4" />
              New Competition
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-gray-200 group"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1f44] group-hover:text-[#152a4e] transition-colors">
                  {stat.value}
                </h3>
                <div className="flex items-center mt-2">
                  <span
                    className={`text-sm font-medium flex items-center ${stat.changeType === "positive" ? "text-green-500" : "text-red-500"}`}
                  >
                    {stat.changeType === "positive" ? (
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                    )}
                    {stat.change}
                  </span>
                  <span className="text-gray-500 text-xs ml-2">vs last month</span>
                </div>
              </div>
              <div className={`bg-${stat.color}-50 p-3 rounded-lg group-hover:bg-${stat.color}-100 transition-colors`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-500`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Upcoming Competitions */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-[#0a1f44]">Upcoming Competitions</h3>
            <div className="flex space-x-2">
              <button
                className={`text-xs px-3 py-1 rounded-full transition-colors ${timeRange === "week" ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100"}`}
                onClick={() => setTimeRange("week")}
              >
                This Week
              </button>
              <button
                className={`text-xs px-3 py-1 rounded-full transition-colors ${timeRange === "month" ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100"}`}
                onClick={() => setTimeRange("month")}
              >
                This Month
              </button>
              <button
                className={`text-xs px-3 py-1 rounded-full transition-colors ${timeRange === "all" ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100"}`}
                onClick={() => setTimeRange("all")}
              >
                All
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <th className="px-4 py-3">Competition</th>
                  <th className="px-4 py-3">Date & Time</th>
                  <th className="px-4 py-3">Teams</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {upcomingCompetitions.map((competition) => (
                  <tr key={competition.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            competition.category === "Science"
                              ? "bg-blue-100 text-blue-600"
                              : competition.category === "Mathematics"
                                ? "bg-purple-100 text-purple-600"
                                : competition.category === "History"
                                  ? "bg-amber-100 text-amber-600"
                                  : "bg-green-100 text-green-600"
                          }`}
                        >
                          {competition.category === "Science" ? (
                            <Zap className="h-4 w-4" />
                          ) : competition.category === "Mathematics" ? (
                            <Layers className="h-4 w-4" />
                          ) : competition.category === "History" ? (
                            <BookOpen className="h-4 w-4" />
                          ) : (
                            <Trophy className="h-4 w-4" />
                          )}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-800">{competition.name}</p>
                          <p className="text-xs text-gray-500">{competition.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm text-gray-800">{competition.date}</div>
                      <div className="text-xs text-gray-500">{competition.time}</div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm text-gray-800">{competition.teams}</div>
                      <div className="text-xs text-gray-500">Registered</div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          competition.status === "Scheduled"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {competition.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center justify-end">
                        Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-center">
            <button className="text-sm text-[#0a1f44] hover:text-[#152a4e] font-medium">View all competitions</button>
          </div>
        </div>

        {/* Top Performing Teams */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-gray-200">
          <h3 className="text-lg font-semibold text-[#0a1f44] mb-6">Top Performing Teams</h3>
          <div className="space-y-5">
            {topPerformers.map((team, index) => (
              <div key={team.id} className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0a1f44] text-white flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium text-gray-800">{team.name}</h4>
                    <div className="flex items-center">
                      <Star className="h-3.5 w-3.5 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{team.score}</span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-gray-500">{team.school}</p>
                    <p className="text-xs text-gray-500">{team.wins} wins</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div
                      className="bg-gradient-to-r from-[#0a1f44] to-[#152a4e] h-1.5 rounded-full"
                      style={{ width: `${team.score}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <button className="w-full py-2 bg-[#0a1f44] hover:bg-[#152a4e] text-white rounded-lg transition-colors flex items-center justify-center">
              <Trophy className="h-4 w-4 mr-2" />
              View Leaderboard
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-gray-200">
          <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-${activity.color}-100 text-${activity.color}-500 flex items-center justify-center`}
                >
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm text-gray-800">
                    <span className="font-medium">{activity.subject}</span> - {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <button className="text-sm text-[#0a1f44] hover:text-[#152a4e] font-medium">View all activity</button>
          </div>
        </div>

        {/* Category Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-gray-200">
          <h3 className="text-lg font-semibold text-[#0a1f44] mb-4">Category Performance</h3>
          <div className="space-y-4">
            {categoryPerformance.map((category, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#0a1f44] to-[#152a4e] text-white flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium text-gray-800">{category.name}</h4>
                    <span className="text-xs text-gray-500">{category.questions} questions</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-[#0a1f44] to-[#152a4e] h-1.5 rounded-full"
                        style={{ width: `${category.completion}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs font-medium text-gray-700">{category.completion}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-[#0a1f44]/5 rounded-lg">
            <h4 className="text-sm font-medium text-[#0a1f44] mb-2">Competition Stats</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Average Score</div>
                <div className="text-lg font-semibold text-[#0a1f44]">86.5%</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Participation</div>
                <div className="text-lg font-semibold text-[#0a1f44]">92%</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Avg. Duration</div>
                <div className="text-lg font-semibold text-[#0a1f44]">45 min</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Difficulty</div>
                <div className="text-lg font-semibold text-[#0a1f44]">Medium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  )
}

