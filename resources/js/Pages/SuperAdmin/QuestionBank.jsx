"use client"

import { useState } from "react"
import SuperAdminLayout from "../../Layouts/SuperAdminLayout"
import { Head } from "@inertiajs/react"
import { Search, Filter, Plus, Edit, Trash2, Eye, CheckCircle } from "lucide-react"

export default function QuestionBank() {
  return (
    <SuperAdminLayout>
      <div className="bg-gradient-to-r from-[#0a1f44] to-[#152a4e] rounded-xl p-6 mb-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl font-bold mb-2">Question Bank</h1>
            <p className="text-blue-100 max-w-2xl">
              View, edit, and organize all stored questions for your quiz competitions.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-[#0a1f44] font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              Add Question
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 flex flex-col md:flex-row justify-between items-center border-b border-gray-100">
          <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
            <div className="relative flex-grow md:flex-grow-0 md:w-64">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                className="py-2 pl-10 pr-4 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a1f44]/30 focus:border-transparent"
              />
            </div>
            <div className="relative ml-2">
              <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="ml-2 text-sm text-gray-700">Filter</span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2 w-full md:w-auto justify-between md:justify-end">
            <button className="py-2 px-4 bg-[#0a1f44] text-white rounded-lg hover:bg-[#152a4e] transition-colors flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              <span className="text-sm">Add Question</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3">Question</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Difficulty</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Last Updated</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                {
                  question: "What is the chemical symbol for gold?",
                  category: "Science",
                  difficulty: "Easy",
                  status: "Active",
                  lastUpdated: "Today, 10:30 AM",
                },
                {
                  question: "What is the value of π (pi) to two decimal places?",
                  category: "Mathematics",
                  difficulty: "Easy",
                  status: "Active",
                  lastUpdated: "Yesterday",
                },
                {
                  question: "Who was the first president of the United States?",
                  category: "History",
                  difficulty: "Easy",
                  status: "Active",
                  lastUpdated: "3 days ago",
                },
                {
                  question: "Who wrote 'Romeo and Juliet'?",
                  category: "Literature",
                  difficulty: "Easy",
                  status: "Active",
                  lastUpdated: "1 week ago",
                },
                {
                  question: "What does HTML stand for?",
                  category: "Technology",
                  difficulty: "Easy",
                  status: "Active",
                  lastUpdated: "2 days ago",
                },
              ].map((question, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{question.question}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {question.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {question.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      {question.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{question.lastUpdated}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-gray-500 hover:text-[#0a1f44] transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-[#0a1f44] transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-red-600 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-100">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
            <span className="font-medium">450</span> questions
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded-md border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 rounded-md bg-[#0a1f44] text-white text-sm hover:bg-[#152a4e] transition-colors">
              1
            </button>
            <button className="px-3 py-1 rounded-md border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="px-3 py-1 rounded-md border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-colors">
              3
            </button>
            <button className="px-3 py-1 rounded-md border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  )
}
