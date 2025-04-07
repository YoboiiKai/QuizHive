"use client"

import { useState, useEffect, useRef } from "react"
import {
  Hexagon,
  Brain,
  Menu,
  X,
  Search,
  Bell,
  HelpCircle,
  ChevronDown,
  LogOut,
  User,
  Settings,
  Home,
  BookOpen,
  Users,
  Award,
  PlayCircle,
  Volume2,
  Monitor,
  FileText,
  Zap,
  Activity,
  Shield,
} from "lucide-react"

export default function SuperAdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState("dashboard")
  const [expandedMenus, setExpandedMenus] = useState({
    users: false,
    analytics: false,
    settings: false,
  })
  const [scrolled, setScrolled] = useState(false)
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New user registered", time: "2 min ago", read: false },
    { id: 2, title: "Server update completed", time: "1 hour ago", read: false },
    { id: 3, title: "New quiz published", time: "3 hours ago", read: true },
  ])
  const [showNotifications, setShowNotifications] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  const notificationRef = useRef(null)
  const userMenuRef = useRef(null)

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle clicks outside of dropdown menus
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleSubmenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  const menuItems = [
    {
      name: "dashboard",
      label: "Dashboard",
      icon: Home,
      path: "/admin/dashboard",
    },
    {
      name: "quiz-management",
      label: "Quiz Management",
      icon: BookOpen,
      path: "",// connect mo lahat to 
      submenu: [
        { name: "questionbank", label: "Question Bank", path: "/superadmin/questionbank" },
        { name: "addquestion", label: "Add New Question", path: "/superadmin/addquestion" },
        { name: "categories", label: "Categories", path: "/superadmin/categories" },
        { name: "questionsettings", label: "Question Settings", path: "/superadmin/questionsettings" }
      ],
    },
    {
      name: "participants",
      label: "Participants",
      icon: Users,
      path: "/superadmin/participants",
      submenu: [
        { name: "teams-contestants", label: "Teams / Contestants", path: "/superadmin/participants/teams-contestants" },
        { name: "add-team", label: "Add Team", path: "/superadmin/participants/add-team" },
        { name: "team-info-profiles", label: "Team Info / Profiles", path: "/superadmin/participants/team-info-profiles" }
      ],
    },
    {
      name: "scores-results",
      label: "Scores & Results",
      icon: Award,
      path: "/superadmin/scores-results",
      submenu: [
        { name: "live-scores", label: "Live Scores", path: "/superadmin/scores-results/live-scores" },
        { name: "final-results", label: "Final Results", path: "/superadmin/scores-results/final-results" },
        { name: "score-history", label: "Score History", path: "/superadmin/scores-results/score-history" }
      ],
    },
    {
      name: "quiz-control-panel",
      label: "Quiz Control Panel",
      icon: PlayCircle,
      path: "/superadmin/quiz-control-panel",// buzzer system lang ang connected dto
      submenu: [
        { name: "start-pause-stop-quiz", label: "Start / Pause / Stop Quiz", path: "/superadmin/quiz-control-panel/start-pause-stop-quiz" },
        { name: "timer-settings", label: "Timer Settings", path: "/superadmin/quiz-control-panel/timer-settings" },
        { name: "announce-question", label: "Announce Question", path: "/superadmin/quiz-control-panel/announce-question" },
        { name: "mark-answer", label: "Mark Answer", path: "/superadmin/quiz-control-panel/mark-answer" },
        { name: "buzzersystem", label: "Buzzer System", path: "/superadmin/buzzersystem" }
      ],
    },
    {
      name: "Rounds Management",
      label: "Rounds Management",
      icon: Zap,
      path: "/superadmin/buzzer-system",
      submenu: [
        { name: "easy-round", label: "Easy Round", path: "/superadmin/buzzer-system/easy-round" },
        { name: "average-round", label: "Average Round", path: "/superadmin/buzzer-system/average-round" },
        { name: "difficult-round", label: "Difficult Round", path: "/superadmin/buzzer-system/difficult-round" },
        { name: "add-round", label: "Add Round", path: "/superadmin/buzzer-system/add-round" }
      ],
    },
    {
      name: "sound-buzzers",
      label: "Sound & Buzzers",
      icon: Volume2,
      path: "/admin/sound-buzzers",
      submenu: [
        { name: "sound-settings", label: "Sound Settings", path: "/admin/sound-buzzers/sound-settings" },
        { name: "buzzer-management", label: "Buzzer Management", path: "/admin/sound-buzzers/buzzer-management" },
        { name: "test-buzzers", label: "Test Buzzers", path: "/admin/sound-buzzers/test-buzzers" }
      ],
    },
    {
      name: "live-display",
      label: "Live Display",
      icon: Monitor,
      path: "/admin/live-display",
      submenu: [
        { name: "screen-for-audience", label: "Screen for Audience", path: "/admin/live-display/screen-for-audience" },
        { name: "switch-views", label: "Switch Views", path: "/admin/live-display/switch-views" }
      ],
    },
    {
      name: "settings",
      label: "Settings",
      icon: Settings,
      path: "/admin/settings",
      submenu: [
        { name: "system-settings", label: "System Settings", path: "/admin/settings/system-settings" },
        { name: "theme-display-options", label: "Theme / Display Options", path: "/admin/settings/theme-display-options" },
        { name: "admin-controls", label: "Admin Controls", path: "/admin/settings/admin-controls" }
      ],
    },
    {
      name: "logs-history",
      label: "Logs & History",
      icon: FileText,
      path: "/admin/logs-history",
      submenu: [
        { name: "event-logs", label: "Event Logs", path: "/admin/logs-history/event-logs" },
        { name: "export-data", label: "Export Data", path: "/admin/logs-history/export-data" }
      ],
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-[#0a1f44] to-[#152a4e] text-white transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } ${sidebarOpen ? "lg:w-72" : "lg:w-20"}`}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#152a4e]/50 backdrop-blur-sm bg-[#0a1f44]/90 sticky top-0 z-10">
          <div
            className={`flex items-center ${!sidebarOpen ? "lg:justify-center lg:w-full" : "space-x-3"} transition-all duration-300`}
          >
            <div className="relative flex-shrink-0 group">
              <Hexagon
                className={`h-10 w-10 text-yellow-400 transition-all duration-300 group-hover:rotate-12 ${!sidebarOpen && "lg:h-8 lg:w-8"}`}
                fill="#0a1f44"
              />
              <Brain
                className={`h-5 w-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${!sidebarOpen && "lg:h-4 lg:w-4"}`}
              />
            </div>
            <span
              className={`text-xl font-bold transition-all duration-300 ${!sidebarOpen ? "lg:opacity-0 lg:w-0 lg:translate-x-10" : "opacity-100 translate-x-0"}`}
            >
              QuizHive
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden text-white p-1 rounded-md hover:bg-[#152a4e] transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="py-4 flex flex-col h-[calc(100%-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-[#152a4e] scrollbar-track-transparent">
          <div className="px-4 mb-6">
            <div
              className={`flex items-center ${
                !sidebarOpen ? "lg:justify-center lg:p-2" : "space-x-3 p-3"
              } rounded-lg bg-gradient-to-r from-[#152a4e] to-[#1d3a6a] shadow-lg transition-all duration-300 hover:shadow-xl hover:from-[#1d3a6a] hover:to-[#254980]`}
            >
              <div
                className={`relative ${!sidebarOpen ? "lg:h-9 lg:w-9" : "h-10 w-10"} rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300`}
              >
                <Shield
                  className={`${!sidebarOpen ? "lg:h-4 lg:w-4" : "h-5 w-5"} text-[#0a1f44] transition-all duration-300`}
                />
              </div>
              <div
                className={`transition-all duration-300 ${!sidebarOpen ? "lg:opacity-0 lg:w-0 lg:hidden" : "opacity-100"}`}
              >
                <div className="font-medium">Super Admin</div>
                <div className="text-xs text-gray-300">Full Access</div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-3">
            <ul className="space-y-1.5">
              {menuItems.map((item) => (
                <li key={item.name} className="group">
                  <a
                    href={item.path}
                    className={`flex items-center ${
                      !sidebarOpen ? "lg:justify-center lg:px-2" : "px-3"
                    } py-2.5 rounded-lg transition-all duration-200 ${
                      activeMenu === item.name
                        ? "bg-yellow-400 text-[#0a1f44] font-medium shadow-md"
                        : "text-gray-300 hover:bg-[#152a4e]/70 hover:text-white"
                    }`}
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault()
                        toggleSubmenu(item.name)
                      } else {
                        setActiveMenu(item.name)
                      }
                    }}
                  >
                    <div
                      className={`relative ${activeMenu === item.name ? "text-[#0a1f44]" : "text-gray-400 group-hover:text-white"} ${!sidebarOpen && "lg:h-5 lg:w-5 lg:flex lg:items-center lg:justify-center"}`}
                    >
                      <item.icon
                        className={`h-5 w-5 transition-transform duration-300 ${activeMenu === item.name ? "scale-110" : "group-hover:scale-110"}`}
                      />
                      {item.badge && (
                        <span
                          className={`absolute -top-1.5 ${!sidebarOpen ? "lg:-right-0.5" : "-right-1.5"} flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white transition-all duration-300`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span
                      className={`ml-3 transition-all duration-300 ${!sidebarOpen ? "lg:opacity-0 lg:w-0 lg:hidden" : "opacity-100 translate-x-0"}`}
                    >
                      {item.label}
                    </span>
                    {item.submenu && (
                      <ChevronDown
                        className={`ml-auto h-4 w-4 transition-transform duration-300 ${
                          expandedMenus[item.name] ? "rotate-180" : ""
                        } ${!sidebarOpen ? "lg:opacity-0 lg:w-0 lg:hidden" : "opacity-100"} ${
                          activeMenu === item.name ? "text-[#0a1f44]" : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Submenu */}
                  {item.submenu && expandedMenus[item.name] && (
                    <ul
                      className={`mt-1 ml-4 pl-3 border-l border-[#152a4e]/70 space-y-1 ${!sidebarOpen ? "lg:hidden" : ""}`}
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            href={subItem.path}
                            className={`flex items-center px-3 py-2 text-sm rounded-md transition-all duration-200 ${
                              activeMenu === subItem.name
                                ? "bg-yellow-400/80 text-[#0a1f44] font-medium"
                                : "text-gray-300 hover:text-white hover:bg-[#152a4e]/20"
                            }`}
                            onClick={() => setActiveMenu(subItem.name)}
                          >
                            <span>{subItem.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="mt-auto px-4 py-4 border-t border-[#152a4e]/50">
            <a
              href="/logout"
              className={`flex items-center px-3 py-2.5 text-gray-300 rounded-lg hover:bg-[#152a4e]/70 hover:text-white transition-all duration-200 group ${!sidebarOpen && "lg:justify-center"}`}
            >
              <LogOut className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
              <span
                className={`ml-3 transition-all duration-300 ${!sidebarOpen ? "lg:opacity-0 lg:w-0 lg:translate-x-10" : "opacity-100 translate-x-0"}`}
              >
                Logout
              </span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className={`bg-white z-10 transition-all duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"}`}>
          {/* Main Header */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-yellow-100/20 to-yellow-300/20 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-100/20 to-blue-300/20 blur-lg"></div>
            </div>

            {/* Header Content */}
            <div className="relative flex items-center justify-between h-20 px-6 bg-gradient-to-r from-[#0a1f44] to-[#152a4e] text-white shadow-md">
              {/* Background decorative elements - adjusted for dark background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-yellow-400/15 blur-lg"></div>
              </div>

              {/* Left side */}
              <div className="flex items-center relative z-10">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        setMobileMenuOpen(!mobileMenuOpen)
                      } else {
                        setSidebarOpen(!sidebarOpen)
                      }
                    }}
                    className="group p-2.5 rounded-full bg-yellow-400 text-[#0a1f44] hover:bg-yellow-300 shadow-md hover:shadow-lg border border-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200"
                    aria-label="Toggle sidebar"
                  >
                    <Menu className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                  </button>

                  <div className="hidden md:flex h-10 w-px bg-[#152a4e]/70 mx-2"></div>

                  <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="h-4 w-4 text-white/70" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search..."
                      className={`py-2.5 pl-10 pr-4 w-56 rounded-full border border-[#152a4e] bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all duration-300 ${
                        searchFocused ? "w-72 shadow-md bg-white/20" : "w-56"
                      }`}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                    />
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center space-x-3 relative z-10">
                {/* Notifications */}
                <div className="relative" ref={notificationRef}>
                  <button
                    className={`p-2.5 rounded-full relative transition-all duration-200 ${
                      showNotifications
                        ? "bg-yellow-400 text-[#0a1f44] shadow-md"
                        : "bg-white/15 text-white hover:bg-white/25 shadow-md hover:shadow-lg border border-white/20"
                    }`}
                    onClick={() => setShowNotifications(!showNotifications)}
                    aria-label="Notifications"
                  >
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                      <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-medium text-white border-2 border-[#152a4e] transform translate-x-1 -translate-y-1">
                        {unreadCount}
                      </span>
                    )}
                  </button>

                  {/* Notifications Dropdown - keeping the same */}
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200/80 z-50 overflow-hidden transition-all duration-200 animate-in fade-in slide-in-from-top-5">
                      <div className="p-3 border-b border-gray-200/80 flex justify-between items-center bg-gradient-to-r from-gray-50 to-white">
                        <h3 className="font-semibold text-[#0a1f44]">Notifications</h3>
                        <button
                          className="text-xs text-[#0a1f44] hover:text-[#152a4e] transition-colors px-2 py-1 rounded-md hover:bg-gray-100"
                          onClick={markAllAsRead}
                        >
                          Mark all as read
                        </button>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                                notification.read ? "" : "bg-blue-50/50"
                              }`}
                            >
                              <div className="flex items-start">
                                <div
                                  className={`w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                                    notification.read ? "bg-gray-300" : "bg-blue-500 animate-pulse"
                                  }`}
                                ></div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-gray-800">{notification.title}</p>
                                  <p className="text-xs text-gray-500 mt-0.5">{notification.time}</p>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-4 text-center text-gray-500">No notifications</div>
                        )}
                      </div>
                      <div className="p-2 border-t border-gray-200/80 bg-gray-50">
                        <a
                          href="#"
                          className="block text-center text-sm text-[#0a1f44] hover:text-[#152a4e] transition-colors py-1 rounded-md hover:bg-gray-100"
                        >
                          View all notifications
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* User Menu */}
                <div className="relative" ref={userMenuRef}>
                  <button
                    className={`flex items-center space-x-2 p-1.5 rounded-full transition-all duration-200 ${
                      showUserMenu
                        ? "bg-yellow-400/30 ring-2 ring-yellow-400/50"
                        : "bg-white/15 text-white hover:bg-white/25 shadow-md hover:shadow-lg border border-white/20"
                    }`}
                    onClick={() => setShowUserMenu(!showUserMenu)}
                  >
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-[#0a1f44] shadow-md border-2 border-white/30">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="hidden md:block font-medium text-sm text-white">Admin</span>
                    <ChevronDown
                      className={`hidden md:block h-4 w-4 text-white/70 transition-transform duration-200 ${
                        showUserMenu ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* User Dropdown - keeping the same */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200/80 z-50 overflow-hidden transition-all duration-200 animate-in fade-in slide-in-from-top-5">
                      <div className="p-4 border-b border-gray-200/80 text-center bg-gradient-to-r from-[#0a1f44]/5 to-[#152a4e]/5">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#0a1f44] to-[#152a4e] flex items-center justify-center text-white mx-auto mb-3 shadow-lg border-4 border-white">
                          <User className="h-8 w-8" />
                        </div>
                        <h3 className="font-semibold text-[#0a1f44] text-lg">Admin User</h3>
                        <p className="text-xs text-gray-500 mt-1">admin@quizhive.com</p>
                        <div className="mt-2 flex justify-center">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Super Admin
                          </span>
                        </div>
                      </div>
                      <div className="py-1">
                        <a
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <User className="h-4 w-4 mr-2 text-gray-500" />
                          Profile
                        </a>
                        <a
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Settings className="h-4 w-4 mr-2 text-gray-500" />
                          Settings
                        </a>
                        <a
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Activity className="h-4 w-4 mr-2 text-gray-500" />
                          Activity Log
                        </a>
                      </div>
                      <div className="py-1 border-t border-gray-200/80 bg-gray-50">
                        <a
                          href="/logout"
                          className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="h-4 w-4 mr-2 text-red-500" />
                          Logout
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Help */}
                <button className="p-2.5 rounded-full bg-white/15 text-white hover:bg-white/25 shadow-md hover:shadow-lg border border-white/20 transition-all duration-200 group">
                  <HelpCircle className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}
