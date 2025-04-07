"use client"

import { useState } from "react"
import SuperAdminLayout from "../../Layouts/SuperAdminLayout"
import { Head } from "@inertiajs/react"
import { Plus, Edit, Trash2, Save, X, Search } from "lucide-react"

export default function Categories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Science", description: "Questions related to various scientific disciplines", questionCount: 45 },
    { id: 2, name: "Mathematics", description: "Questions about numbers, equations, and mathematical concepts", questionCount: 38 },
    { id: 3, name: "History", description: "Questions about historical events and figures", questionCount: 32 },
    { id: 4, name: "Literature", description: "Questions about books, authors, and literary works", questionCount: 27 },
    { id: 5, name: "Technology", description: "Questions about computers, software, and technological innovations", questionCount: 41 },
    { id: 6, name: "Geography", description: "Questions about countries, capitals, and geographical features", questionCount: 29 },
    { id: 7, name: "Sports", description: "Questions about various sports and sporting events", questionCount: 24 },
    { id: 8, name: "Entertainment", description: "Questions about movies, music, and pop culture", questionCount: 35 }
  ])
  
  const [newCategory, setNewCategory] = useState({ name: "", description: "" })
  const [editingCategory, setEditingCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)

  const filteredCategories = categories.filter(
    category => category.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                category.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddCategory = () => {
    if (newCategory.name.trim() === "") return
    
    const newId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1
    setCategories([...categories, { 
      id: newId, 
      name: newCategory.name, 
      description: newCategory.description,
      questionCount: 0
    }])
    setNewCategory({ name: "", description: "" })
    setShowAddForm(false)
  }

  const handleUpdateCategory = () => {
    if (!editingCategory || editingCategory.name.trim() === "") return
    
    setCategories(categories.map(category => 
      category.id === editingCategory.id ? editingCategory : category
    ))
    setEditingCategory(null)
  }

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id))
  }

  const startEditing = (category) => {
    setEditingCategory({ ...category })
  }

  const cancelEditing = () => {
    setEditingCategory(null)
  }

  return (
    <SuperAdminLayout>
      <Head title="Categories" />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
            <p className="text-gray-600">Manage and organize your quiz categories</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-[#0a1f44] hover:bg-[#152a4e] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add New Category
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Add Category Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Add New Category</h2>
              <button 
                onClick={() => setShowAddForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
                  placeholder="Enter category name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
                  placeholder="Enter category description"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleAddCategory}
                  className="bg-[#0a1f44] hover:bg-[#152a4e] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Category
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Categories Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Questions
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCategories.map((category) => (
                  <tr key={category.id} className="hover:bg-gray-50">
                    {editingCategory && editingCategory.id === category.id ? (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            value={editingCategory.name}
                            onChange={(e) => setEditingCategory({...editingCategory, name: e.target.value})}
                            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <textarea
                            value={editingCategory.description}
                            onChange={(e) => setEditingCategory({...editingCategory, description: e.target.value})}
                            rows={2}
                            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:border-transparent"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {category.questionCount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button 
                              onClick={handleUpdateCategory}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Save className="h-5 w-5" />
                            </button>
                            <button 
                              onClick={cancelEditing}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{category.name}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">{category.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {category.questionCount}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button 
                              onClick={() => startEditing(category)}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              <Edit className="h-5 w-5" />
                            </button>
                            <button 
                              onClick={() => handleDeleteCategory(category.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
                {filteredCategories.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                      No categories found. {searchTerm ? "Try a different search term." : "Add a new category to get started."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  )
}
