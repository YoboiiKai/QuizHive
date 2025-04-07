"use client"

import { useState } from "react"
import SuperAdminLayout from "../../Layouts/SuperAdminLayout"
import { Head } from "@inertiajs/react"
import { 
  Users, 
  BookOpen, 
  Award, 
  Clock, 
  BarChart2, 
  Calendar, 
  CheckCircle, 
  AlertCircle 
} from "lucide-react"

export default function Dashboard() {
  // Mock data for demonstration
  const stats = [
    { title: "Total Questions", value: "1,245", icon: BookOpen, color: "blue" },
    { title: "Active Teams", value: "32", icon: Users, color: "green" },
    { title: "Quizzes Completed", value: "78", icon: CheckCircle, color: "indigo" },
    { title: "Upcoming Quizzes", value: "12", icon: Calendar, color: "purple" }
  ]

  const recentQuizzes = [
    { id: 1, title: "Science Championship", date: "April 5, 2025", teams: 8, status: "Completed" },
    { id: 2, title: "Math Olympiad", date: "April 2, 2025", teams: 12, status: "Completed" },
    { id: 3, title: "History Bowl", date: "March 28, 2025", teams: 6, status: "Completed" },
    { id: 4, title: "Literature Quiz", date: "April 10, 2025", teams: 10, status: "Upcoming" },
    { id: 5, title: "Technology Challenge", date: "April 15, 2025", teams: 8, status: "Upcoming" }
  ]

  const topTeams = [
    { id: 1, name: "Quantum Minds", score: 985, wins: 7 },
    { id: 2, name: "Brain Waves", score: 920, wins: 6 },
    { id: 3, name: "Logic Masters", score: 875, wins: 5 },
    { id: 4, name: "Trivia Titans", score: 840, wins: 5 },
    { id: 5, name: "Knowledge Seekers", score: 810, wins: 4 }
  ]

  const recentActivity = [
    { id: 1, action: "New question added", category: "Science", user: "Admin", time: "10 minutes ago" },
    { id: 2, action: "Quiz scheduled", title: "Geography Challenge", user: "Admin", time: "1 hour ago" },
    { id: 3, action: "Team registered", team: "Curious Minds", user: "John Doe", time: "3 hours ago" },
    { id: 4, action: "Question updated", category: "Mathematics", user: "Admin", time: "5 hours ago" },
    { id: 5, action: "Quiz completed", title: "Science Championship", user: "Admin", time: "1 day ago" }
  ]

  return (
    <SuperAdminLayout>
      <Head title="SuperAdmin Dashboard" />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome to the QuizHive admin dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-full p-3 bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Quizzes */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Recent Quizzes</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quiz Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Teams
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentQuizzes.map((quiz) => (
                    <tr key={quiz.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{quiz.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{quiz.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{quiz.teams}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          quiz.status === "Completed" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {quiz.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Teams */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Top Teams</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {topTeams.map((team, index) => (
                  <li key={team.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                        {index + 1}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{team.name}</p>
                        <p className="text-xs text-gray-500">{team.wins} wins</p>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">{team.score}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {recentActivity.map((activity) => (
                <li key={activity.id} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">
                      {activity.title || activity.category || activity.team} by {activity.user} • {activity.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  )
}
