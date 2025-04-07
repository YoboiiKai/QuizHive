"use client"

import SuperAdminLayout from "../../Layouts/SuperAdminLayout"
import {
  Zap,
  RefreshCw,
  Settings,
  Volume2,
  VolumeX,
  Clock,
  Users,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart2,
  Save,
  Bell,
} from "lucide-react"
import { useState } from "react"

export default function BuzzerSystem() {
  const [buzzerMode, setBuzzerMode] = useState("first-to-buzz")
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [lockoutEnabled, setLockoutEnabled] = useState(true)
  const [selectedTeam, setSelectedTeam] = useState(null)

  // Mock data for teams and their buzzer status
  const teams = [
    {
      id: 1,
      name: "Team Einstein",
      status: "ready",
      buzzTime: null,
      buzzOrder: null,
      connectionStatus: "connected",
      batteryLevel: 85,
      responseTime: "0.82s",
      color: "blue",
    },
    {
      id: 2,
      name: "Quantum Minds",
      status: "buzzed",
      buzzTime: "14:32:05",
      buzzOrder: 1,
      connectionStatus: "connected",
      batteryLevel: 72,
      responseTime: "0.65s",
      color: "purple",
    },
    {
      id: 3,
      name: "Math Wizards",
      status: "locked",
      buzzTime: "14:32:06",
      buzzOrder: 2,
      connectionStatus: "connected",
      batteryLevel: 91,
      responseTime: "0.93s",
      color: "green",
    },
    {
      id: 4,
      name: "History Buffs",
      status: "ready",
      buzzTime: null,
      buzzOrder: null,
      connectionStatus: "connected",
      batteryLevel: 64,
      responseTime: "1.05s",
      color: "amber",
    },
    {
      id: 5,
      name: "Tech Titans",
      status: "disconnected",
      buzzTime: null,
      buzzOrder: null,
      connectionStatus: "disconnected",
      batteryLevel: 0,
      responseTime: "N/A",
      color: "red",
    },
  ]

  // Mock data for buzzer activity log
  const buzzerLogs = [
    { id: 1, team: "Quantum Minds", action: "Buzzed in", time: "14:32:05", status: "success" },
    { id: 2, team: "Math Wizards", action: "Buzzed in", time: "14:32:06", status: "locked" },
    { id: 3, team: "Team Einstein", action: "Reset buzzer", time: "14:31:45", status: "info" },
    { id: 4, team: "Tech Titans", action: "Disconnected", time: "14:30:22", status: "error" },
    { id: 5, team: "History Buffs", action: "Connected", time: "14:28:15", status: "info" },
  ]

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "ready":
        return "bg-green-100 text-green-800"
      case "buzzed":
        return "bg-blue-100 text-blue-800"
      case "locked":
        return "bg-amber-100 text-amber-800"
      case "disconnected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "ready":
        return <CheckCircle className="h-3 w-3 mr-1" />
      case "buzzed":
        return <Bell className="h-3 w-3 mr-1" />
      case "locked":
        return <XCircle className="h-3 w-3 mr-1" />
      case "disconnected":
        return <AlertTriangle className="h-3 w-3 mr-1" />
      default:
        return null
    }
  }

  // Get log status color
  const getLogStatusColor = (status) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800"
      case "locked":
        return "bg-amber-100 text-amber-800"
      case "error":
        return "bg-red-100 text-red-800"
      case "info":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Reset all buzzers
  const resetAllBuzzers = () => {
    // In a real application, this would send a signal to reset all buzzers
    alert("All buzzers have been reset!")
  }

  // Handle team selection
  const handleTeamSelect = (team) => {
    setSelectedTeam(team)
  }

  return (
    <SuperAdminLayout>
      <div className="bg-gradient-to-r from-[#0a1f44] to-[#152a4e] rounded-xl p-6 mb-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl font-bold mb-2">Buzzer System</h1>
            <p className="text-blue-100 max-w-2xl">
              Monitor and manage team buzzers, track response times, and control buzzer settings.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button
              className="bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center border border-white/20"
              onClick={() => setSoundEnabled(!soundEnabled)}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="mr-2 h-4 w-4" />
                  Sound On
                </>
              ) : (
                <>
                  <VolumeX className="mr-2 h-4 w-4" />
                  Sound Off
                </>
              )}
            </button>
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-[#0a1f44] font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
              onClick={resetAllBuzzers}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset All Buzzers
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Buzzer Status Panel */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-[#0a1f44]/10 text-[#0a1f44] mr-3">
                  <Zap className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold text-[#0a1f44]">Buzzer Status</h2>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Mode:</span>
                <select
                  className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-[#0a1f44] focus:border-[#0a1f44]"
                  value={buzzerMode}
                  onChange={(e) => setBuzzerMode(e.target.value)}
                >
                  <option value="first-to-buzz">First to Buzz</option>
                  <option value="queue">Queue Mode</option>
                  <option value="free-for-all">Free for All</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {teams.map((team) => (
                <div
                  key={team.id}
                  className={`border rounded-lg p-4 transition-all duration-300 hover:shadow-md cursor-pointer ${
                    selectedTeam?.id === team.id ? "border-[#0a1f44] bg-[#0a1f44]/5" : "border-gray-200"
                  }`}
                  onClick={() => handleTeamSelect(team)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full bg-${team.color}-100 flex items-center justify-center text-${team.color}-600 mr-3`}
                      >
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{team.name}</h3>
                        <div className="flex items-center mt-0.5">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(team.status)}`}
                          >
                            {getStatusIcon(team.status)}
                            {team.status.charAt(0).toUpperCase() + team.status.slice(1)}
                          </span>
                          {team.buzzOrder && (
                            <span className="ml-2 text-xs text-gray-500">Buzz order: #{team.buzzOrder}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    {team.status === "buzzed" && (
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-lg animate-pulse">
                        1
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                      Response: {team.responseTime}
                    </div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className={`bg-${team.connectionStatus === "connected" ? "green" : "red"}-500 h-1.5 rounded-full`}
                          style={{ width: `${team.batteryLevel}%` }}
                        ></div>
                      </div>
                      <span className="ml-1.5">{team.batteryLevel}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-3">
              <button className="px-4 py-2 bg-[#0a1f44] text-white rounded-lg hover:bg-[#152a4e] transition-colors flex items-center">
                <RefreshCw className="mr-2 h-4 w-4" />
                Reset All
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                Configure
              </button>
            </div>
          </div>

          {/* Buzzer Activity Log */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#0a1f44]/10 text-[#0a1f44] mr-3">
                <BarChart2 className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-[#0a1f44]">Buzzer Activity Log</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-3 rounded-tl-lg">Time</th>
                    <th className="px-6 py-3">Team</th>
                    <th className="px-6 py-3">Action</th>
                    <th className="px-6 py-3 rounded-tr-lg">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {buzzerLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.team}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.action}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLogStatusColor(log.status)}`}
                        >
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-center">
              <button className="text-sm text-[#0a1f44] hover:text-[#152a4e] font-medium">
                View full activity log
              </button>
            </div>
          </div>
        </div>

        {/* Settings and Team Details */}
        <div className="space-y-6">
          {/* Buzzer Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#0a1f44]/10 text-[#0a1f44] mr-3">
                <Settings className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-[#0a1f44]">Buzzer Settings</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="buzzer-mode" className="block text-sm font-medium text-gray-700 mb-1">
                  Buzzer Mode
                </label>
                <select
                  id="buzzer-mode"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] transition-colors"
                  value={buzzerMode}
                  onChange={(e) => setBuzzerMode(e.target.value)}
                >
                  <option value="first-to-buzz">First to Buzz</option>
                  <option value="queue">Queue Mode</option>
                  <option value="free-for-all">Free for All</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  {buzzerMode === "first-to-buzz"
                    ? "Only the first team to buzz in can answer"
                    : buzzerMode === "queue"
                      ? "Teams are placed in a queue based on buzz order"
                      : "All teams can buzz in and answer"}
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="lockout-enabled"
                    type="checkbox"
                    checked={lockoutEnabled}
                    onChange={() => setLockoutEnabled(!lockoutEnabled)}
                    className="h-4 w-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="lockout-enabled" className="font-medium text-gray-700">
                    Enable lockout
                  </label>
                  <p className="text-gray-500">Lock out teams after first buzz</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="sound-enabled"
                    type="checkbox"
                    checked={soundEnabled}
                    onChange={() => setSoundEnabled(!soundEnabled)}
                    className="h-4 w-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="sound-enabled" className="font-medium text-gray-700">
                    Enable sound
                  </label>
                  <p className="text-gray-500">Play sound when a team buzzes in</p>
                </div>
              </div>

              <div>
                <label htmlFor="response-time" className="block text-sm font-medium text-gray-700 mb-1">
                  Response Time Limit (seconds)
                </label>
                <input
                  id="response-time"
                  type="number"
                  min="1"
                  max="60"
                  defaultValue="5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] transition-colors"
                />
                <p className="mt-1 text-xs text-gray-500">Time allowed to answer after buzzing in</p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  className="w-full py-2 bg-[#0a1f44] text-white rounded-lg hover:bg-[#152a4e] transition-colors flex items-center justify-center"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Settings
                </button>
              </div>
            </div>
          </div>

          {/* Selected Team Details */}
          {selectedTeam ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center mb-4">
                <div
                  className={`w-10 h-10 rounded-full bg-${selectedTeam.color}-100 flex items-center justify-center text-${selectedTeam.color}-600 mr-3`}
                >
                  <Users className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold text-[#0a1f44]">{selectedTeam.name}</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Status</div>
                    <div className="font-medium text-gray-900 capitalize">{selectedTeam.status}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Response Time</div>
                    <div className="font-medium text-gray-900">{selectedTeam.responseTime}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Connection</div>
                    <div className="font-medium text-gray-900 capitalize">{selectedTeam.connectionStatus}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Battery</div>
                    <div className="font-medium text-gray-900">{selectedTeam.batteryLevel}%</div>
                  </div>
                </div>

                {selectedTeam.status === "buzzed" && (
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm font-medium text-blue-800">Currently Buzzed In</div>
                        <div className="text-xs text-blue-600 mt-1">Buzz time: {selectedTeam.buzzTime}</div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1.5 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors">
                          Correct
                        </button>
                        <button className="px-3 py-1.5 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors">
                          Incorrect
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-2 pt-2">
                  <button className="flex-1 py-2 bg-[#0a1f44] text-white rounded-lg hover:bg-[#152a4e] transition-colors flex items-center justify-center">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Reset Buzzer
                  </button>
                  <button className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Configure
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-700 mb-1">No Team Selected</h3>
                <p className="text-sm text-gray-500">
                  Select a team from the list to view details and manage their buzzer.
                </p>
              </div>
            </div>
          )}

          {/* Quick Tips */}
          <div className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-yellow-800">Buzzer Tips</h3>
                <div className="mt-2 text-sm text-yellow-700 space-y-2">
                  <p>• Ensure all teams have fully charged buzzers before starting</p>
                  <p>• Test all buzzers before the competition begins</p>
                  <p>• Reset all buzzers between questions</p>
                  <p>• Keep spare batteries on hand for wireless buzzers</p>
                  <p>• Check for interference if wireless buzzers are not responding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  )
}

