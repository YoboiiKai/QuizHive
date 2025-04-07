"use client"

import { useState } from "react"
import SuperAdminLayout from "../../Layouts/SuperAdminLayout"
import { Head } from "@inertiajs/react"
import { Save, X, Plus, Trash2, HelpCircle } from "lucide-react"

export default function AddQuestion() {
  const [questionType, setQuestionType] = useState("multiple-choice")
  const [questionText, setQuestionText] = useState("")
  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("medium")
  const [timeLimit, setTimeLimit] = useState(30)
  const [points, setPoints] = useState(10)
  const [options, setOptions] = useState([
    { id: 1, text: "", isCorrect: false },
    { id: 2, text: "", isCorrect: false },
    { id: 3, text: "", isCorrect: false },
    { id: 4, text: "", isCorrect: false }
  ])
  const [explanation, setExplanation] = useState("")
  const [tags, setTags] = useState([])
  const [currentTag, setCurrentTag] = useState("")

  // Mock data for demonstration
  const categories = [
    { id: 1, name: "Science" },
    { id: 2, name: "Mathematics" },
    { id: 3, name: "History" },
    { id: 4, name: "Literature" },
    { id: 5, name: "Technology" }
  ]

  const handleOptionChange = (id, field, value) => {
    setOptions(
      options.map((option) => {
        if (option.id === id) {
          return { ...option, [field]: value }
        }
        // If setting this option as correct, make sure others are not correct (for single answer questions)
        if (field === "isCorrect" && value === true && questionType === "multiple-choice") {
          return option.id === id ? { ...option, isCorrect: true } : { ...option, isCorrect: false }
        }
        return option
      })
    )
  }

  const addOption = () => {
    const newId = options.length > 0 ? Math.max(...options.map((o) => o.id)) + 1 : 1
    setOptions([...options, { id: newId, text: "", isCorrect: false }])
  }

  const removeOption = (id) => {
    if (options.length > 2) {
      setOptions(options.filter((option) => option.id !== id))
    }
  }

  const addTag = () => {
    if (currentTag.trim() !== "" && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()])
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({
      questionType,
      questionText,
      category,
      difficulty,
      timeLimit,
      points,
      options,
      explanation,
      tags
    })
    // After successful submission, you might want to redirect or clear the form
  }

  return (
    <SuperAdminLayout>
      <Head title="Add New Question" />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Add New Question</h1>
          <p className="text-gray-600">Create a new question for your quiz</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Question Type</label>
                <select
                  value={questionType}
                  onChange={(e) => setQuestionType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
                >
                  <option value="multiple-choice">Multiple Choice (Single Answer)</option>
                  <option value="multiple-answer">Multiple Choice (Multiple Answers)</option>
                  <option value="true-false">True/False</option>
                  <option value="short-answer">Short Answer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Question Text</label>
              <textarea
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
                placeholder="Enter your question here..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Limit (seconds)</label>
                <input
                  type="number"
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(parseInt(e.target.value))}
                  min={5}
                  max={300}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Points</label>
                <input
                  type="number"
                  value={points}
                  onChange={(e) => setPoints(parseInt(e.target.value))}
                  min={1}
                  max={100}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Options Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Answer Options</h2>
            
            {questionType === "true-false" ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="radio"
                    id="true-option"
                    name="true-false"
                    checked={options[0].isCorrect}
                    onChange={() => {
                      setOptions([
                        { id: 1, text: "True", isCorrect: true },
                        { id: 2, text: "False", isCorrect: false }
                      ])
                    }}
                    className="h-4 w-4 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                  <label htmlFor="true-option" className="text-gray-700">True</label>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="radio"
                    id="false-option"
                    name="true-false"
                    checked={options[1].isCorrect}
                    onChange={() => {
                      setOptions([
                        { id: 1, text: "True", isCorrect: false },
                        { id: 2, text: "False", isCorrect: true }
                      ])
                    }}
                    className="h-4 w-4 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                  <label htmlFor="false-option" className="text-gray-700">False</label>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <input
                        type={questionType === "multiple-answer" ? "checkbox" : "radio"}
                        name="answer-option"
                        checked={option.isCorrect}
                        onChange={(e) => handleOptionChange(option.id, "isCorrect", e.target.checked)}
                        className="h-4 w-4 text-[#0a1f44] focus:ring-[#0a1f44]"
                      />
                    </div>
                    <div className="flex-grow">
                      <input
                        type="text"
                        value={option.text}
                        onChange={(e) => handleOptionChange(option.id, "text", e.target.value)}
                        placeholder={`Option ${option.id}`}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => removeOption(option.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addOption}
                  className="mt-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Option
                </button>
              </div>
            )}
          </div>

          {/* Explanation Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Explanation (Optional)</h2>
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
              placeholder="Explain why the correct answer is correct..."
            />
          </div>

          {/* Tags Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Tags (Optional)</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm text-gray-700"
                >
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                placeholder="Add a tag"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    addTag()
                  }
                }}
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-[#0a1f44] text-white rounded-r-lg hover:bg-[#152a4e]"
              >
                Add
              </button>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4">
            <a
              href="/superadmin/questionbank"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </a>
            <button
              type="submit"
              className="px-6 py-2 bg-[#0a1f44] text-white rounded-lg hover:bg-[#152a4e] flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Question
            </button>
          </div>
        </form>
      </div>
    </SuperAdminLayout>
  )
}
