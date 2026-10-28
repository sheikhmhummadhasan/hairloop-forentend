import React from 'react';
import { Bookmark, Send, Calendar, Award, User, RefreshCw, Volume2, Mail, Plus } from 'lucide-react';

export default function SeekerDashboardPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#16161a] border border-gray-800 rounded-xl p-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-gray-400">Saved Jobs</p>
            <h2 className="text-3xl font-bold text-white mt-2">12</h2>
          </div>
          <div className="p-2 bg-gray-800/60 rounded-lg text-gray-300">
            <Bookmark className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-[#16161a] border border-gray-800 rounded-xl p-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-gray-400">Applications Submitted</p>
            <h2 className="text-3xl font-bold text-white mt-2">24</h2>
          </div>
          <div className="p-2 bg-gray-800/60 rounded-lg text-gray-300">
            <Send className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-[#16161a] border border-gray-800 rounded-xl p-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-gray-400">Interviews Scheduled</p>
            <h2 className="text-3xl font-bold text-white mt-2">3</h2>
          </div>
          <div className="p-2 bg-gray-800/60 rounded-lg text-amber-500">
            <Calendar className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-[#16161a] border border-gray-800 rounded-xl p-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-gray-400">Offers Received</p>
            <h2 className="text-3xl font-bold text-white mt-2">1</h2>
          </div>
          <div className="p-2 bg-gray-800/60 rounded-lg text-emerald-500">
            <Award className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Profile & Application Status Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* User Profile Card */}
        <div className="lg:col-span-5 bg-[#16161a] border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 text-gray-400">
            <User className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-white">Alex Rivera</h3>
          <p className="text-sm text-gray-400 mt-1">alex.rivera@example.com</p>
          <button className="mt-6 w-full max-w-xs py-2 px-4 border border-gray-700 hover:border-gray-500 rounded-lg text-sm text-gray-300 font-medium transition">
            Edit Profile
          </button>
        </div>

        {/* Application Status Card */}
        <div className="lg:col-span-7 bg-[#16161a] border border-gray-800 rounded-xl p-6">
          <h3 className="text-base font-semibold text-white mb-6">Application Status</h3>
          <div className="space-y-4">
            {/* Applied */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Applied</span>
                <span className="text-white font-medium">10</span>
              </div>
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* Under Review */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Under Review</span>
                <span className="text-white font-medium">6</span>
              </div>
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>

            {/* Shortlisted */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Shortlisted</span>
                <span className="text-white font-medium">5</span>
              </div>
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>

            {/* Rejected */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Rejected</span>
                <span className="text-white font-medium">2</span>
              </div>
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>

            {/* Offered */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Offered</span>
                <span className="text-white font-medium">1</span>
              </div>
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Recent Activity</h3>
          <a href="#" className="text-xs text-gray-400 hover:text-white underline">View All Activity</a>
        </div>

        <div className="space-y-3 relative">
          {/* Activity Item 1 */}
          <div className="bg-[#16161a] border border-gray-800 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-gray-800/80 rounded-lg text-gray-300">
                <RefreshCw className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-300">
                Application for <span className="text-white font-medium">Senior Product Designer</span> at <span className="text-white font-medium">TechFlow</span> updated to <a href="#" className="text-amber-400 underline">'Under Review'</a>
              </p>
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap">2 hours ago</span>
          </div>

          {/* Activity Item 2 */}
          <div className="bg-[#16161a] border border-gray-800 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-emerald-950/40 text-emerald-500 rounded-lg border border-emerald-800/30">
                <Volume2 className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-300">
                New Job Alert: <span className="text-white font-medium">Lead Frontend Engineer</span> at <span className="text-white font-medium">FinGrid</span> matches your profile.
              </p>
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap">5 hours ago</span>
          </div>

          {/* Activity Item 3 */}
          <div className="bg-[#16161a] border border-gray-800 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-gray-800/80 rounded-lg text-gray-300">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-300">
                You have a new message from <span className="text-white font-medium">Sarah Jenkins</span> (Hiring Manager at CloudOps).
              </p>
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap">1 day ago</span>
          </div>

          {/* Floating Action Button */}
          <button className="fixed bottom-6 right-6 p-4 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}