"use client"

import SuperAdminLayout from "../../Layouts/SuperAdminLayout"
import { Save, Clock, Award, Shuffle, Settings, AlertTriangle } from "lucide-react"

export default function QuestionSettings() {
  return (
    <SuperAdminLayout>
      <div className="bg-gradient-to-r from-[#0a1f44] to-[#152a4e] rounded-xl p-6 mb-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl font-bold mb-2">Question Settings</h1>
            <p className="text-blue-100 max-w-2xl">
              Configure time limits, point values, and behavior settings for quiz questions.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-[#0a1f44] font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center">
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#0a1f44]/10 text-[#0a1f44] mr-3">
                <Clock className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-[#0a1f44]">Time Settings</h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="default-time" className="block text-sm font-medium text-gray-700 mb-1">
                    Default Time Limit (seconds)
                  </label>
                  <input
                    id="default-time"
                    type="number"
                    min="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] transition-colors"
                    defaultValue="30"
                  />
                  <p className="mt-1 text-xs text-gray-500">Default time for all questions</p>
                </div>

                <div>
                  <label htmlFor="easy-time" className="block text-sm font-medium text-gray-700 mb-1">
                    Easy Questions Time (seconds)
                  </label>
                  <input
                    id="easy-time"
                    type="number"
                    min="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] transition-colors"
                    defaultValue="20"
                  />
                  <p className="mt-1 text-xs text-gray-500">Time for easy difficulty questions</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="medium-time" className="block text-sm font-medium text-gray-700 mb-1">
                    Medium Questions Time (seconds)
                  </label>
                  <input
                    id="medium-time"
                    type="number"
                    min="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] transition-colors"
                    defaultValue="30"
                  />
                  <p className="mt-1 text-xs text-gray-500">Time for medium difficulty questions</p>
                </div>

                <div>
                  <label htmlFor="hard-time" className="block text-sm font-medium text-gray-700 mb-1">
                    Hard Questions Time (seconds)
                  </label>
                  <input
                    id="hard-time"
                    type="number"
                    min="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] transition-colors"
                    defaultValue="45"
                  />
                  <p className="mt-1 text-xs text-gray-500">Time for hard difficulty questions</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="countdown-visible"
                    type="checkbox"
                    checked={true}
                    className="h-4 w-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="countdown-visible" className="font-medium text-gray-700">
                    Show countdown timer
                  </label>
                  <p className="text-gray-500">Display the timer countdown to participants</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="warning-sound"
                    type="checkbox"
                    checked={true}
                    className="h-4 w-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="warning-sound" className="font-medium text-gray-700">
                    Play warning sound
                  </label>
                  <p className="text-gray-500">Play a sound when 5 seconds remain</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#0a1f44]/10 text-[#0a1f44] mr-3">
                <Award className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-[#0a1f44]">Points Settings</h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="default-points" className="block text-sm font-medium text-gray-700 mb-1">
                    Default Points Value
                  </label>
                  <input
                    id="default-points"
                    type="number"
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] transition-colors"
                    defaultValue="10"
                  />
                  <p className="mt-1 text-xs text-gray-500">Default points for all questions</p>
                </div>

                <div>
                  <label htmlFor="easy-points" className="block text-sm font-medium text-gray-700 mb-1">
                    Easy Questions Points
                  </label>
                  <input
                    id="easy-points"
                    type="number"
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] transition-colors"
                    defaultValue="5"
                  />
                  <p className="mt-1 text-xs text-gray-500">Points for easy difficulty questions</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="medium-points" className="block text-sm font-medium text-gray-700 mb-1">
                    Medium Questions Points
                  </label>
                  <input
                    id="medium-points"
                    type="number"
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] transition-colors"
                    defaultValue="10"
                  />
                  <p className="mt-1 text-xs text-gray-500">Points for medium difficulty questions</p>
                </div>

                <div>
                  <label htmlFor="hard-points" className="block text-sm font-medium text-gray-700 mb-1">
                    Hard Questions Points
                  </label>
                  <input
                    id="hard-points"
                    type="number"
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] transition-colors"
                    defaultValue="15"
                  />
                  <p className="mt-1 text-xs text-gray-500">Points for hard difficulty questions</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="time-bonus"
                    type="checkbox"
                    checked={true}
                    className="h-4 w-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="time-bonus" className="font-medium text-gray-700">
                    Enable time bonus
                  </label>
                  <p className="text-gray-500">Award bonus points for quick answers</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="negative-points"
                    type="checkbox"
                    checked={false}
                    className="h-4 w-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="negative-points" className="font-medium text-gray-700">
                    Enable negative marking
                  </label>
                  <p className="text-gray-500">Deduct points for incorrect answers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#0a1f44]/10 text-[#0a1f44] mr-3">
                <Shuffle className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-[#0a1f44]">Question Behavior</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="shuffle-questions"
                    type="checkbox"
                    checked={true}
                    className="h-4 w-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="shuffle-questions" className="font-medium text-gray-700">
                    Shuffle questions
                  </label>
                  <p className="text-gray-500">Randomize question order in each quiz</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="shuffle-answers"
                    type="checkbox"
                    checked={true}
                    className="h-4 w-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="shuffle-answers" className="font-medium text-gray-700">
                    Shuffle answer options
                  </label>
                  <p className="text-gray-500">Randomize the order of answer choices</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="show-correct"
                    type="checkbox"
                    checked={true}
                    className="h-4 w-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="show-correct" className="font-medium text-gray-700">
                    Show correct answer
                  </label>
                  <p className="text-gray-500">Display correct answer after question time expires</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="show-explanation"
                    type="checkbox"
                    checked={true}
                    className="h-4 w-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="show-explanation" className="font-medium text-gray-700">
                    Show explanation
                  </label>
                  <p className="text-gray-500">Display explanation for correct answer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#0a1f44]/10 text-[#0a1f44] mr-3">
                <Settings className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-[#0a1f44]">Advanced Settings</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="answer-timeout" className="block text-sm font-medium text-gray-700 mb-1">
                  Answer Submission Timeout (seconds)
                </label>
                <input
                  id="answer-timeout"
                  type="number"
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] transition-colors"
                  defaultValue="3"
                />
                <p className="mt-1 text-xs text-gray-500">Time between answer submission and next question</p>
              </div>

              <div>
                <label htmlFor="buzzer-timeout" className="block text-sm font-medium text-gray-700 mb-1">
                  Buzzer Timeout (seconds)
                </label>
                <input
                  id="buzzer-timeout"
                  type="number"
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] transition-colors"
                  defaultValue="5"
                />
                <p className="mt-1 text-xs text-gray-500">Time allowed to answer after buzzing in</p>
              </div>

              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="auto-proceed"
                    type="checkbox"
                    checked={true}
                    className="h-4 w-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="auto-proceed" className="font-medium text-gray-700">
                    Auto-proceed to next question
                  </label>
                  <p className="text-gray-500">Automatically move to next question after timeout</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-yellow-800">Important Note</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Changes to these settings will affect all future quizzes. Currently active quizzes will continue
                    with their existing settings.
                  </p>
                  <p className="mt-2">Make sure to test your settings before starting an official competition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  )
}
