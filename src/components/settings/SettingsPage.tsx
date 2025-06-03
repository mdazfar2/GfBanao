import React, { useState } from 'react';
import { Camera, Lock, Bell, Trash2, Download, RefreshCw, Check, X, Eye, EyeOff, Upload } from 'lucide-react';

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('account');
  const [showPassword, setShowPassword] = useState(false);
  const [notificationSound, setNotificationSound] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [savedToast, setSavedToast] = useState(false);

  const handleSave = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Settings Navigation */}
          <div className="flex border-b">
            {['Account', 'Profile', 'Privacy', 'Notifications', 'Danger Zone'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section.toLowerCase())}
                className={`px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.toLowerCase()
                    ? 'border-b-2 border-pink-500 text-pink-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Settings Content */}
          <div className="p-6">
            {/* Account Settings */}
            {activeSection === 'account' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img
                      src="/azfar.webp"
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <button className="absolute bottom-0 right-0 p-2 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition-colors duration-200">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Profile Photo</h3>
                    <p className="text-sm text-gray-500">Update your profile picture</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Azfar Alam"
                      className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      defaultValue="azfar@gfbanao.com"
                      disabled
                      className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        defaultValue="********"
                        className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Preferences */}
            {activeSection === 'profile' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">About Me</label>
                  <textarea
                    rows={4}
                    defaultValue="Full-stack developer passionate about React and Node.js. Looking for someone who shares my love for clean code and coffee ☕"
                    className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Tech Stack</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['React', 'Node.js', 'TypeScript', 'MongoDB'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm flex items-center"
                      >
                        {tech}
                        <button className="ml-2 text-purple-400 hover:text-purple-600">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    <button className="px-3 py-1 border border-gray-200 text-gray-600 rounded-full text-sm hover:bg-gray-50">
                      + Add Tech
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Looking For</label>
                  <select className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option>Relationship & Tech Collaboration</option>
                    <option>Just Tech Collaboration</option>
                    <option>Relationship Only</option>
                    <option>Mentorship</option>
                  </select>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeSection === 'privacy' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Profile Visibility</h3>
                    <p className="text-sm text-gray-500">Control who can see your profile</p>
                  </div>
                  <button
                    onClick={() => setProfileVisibility(profileVisibility === 'public' ? 'private' : 'public')}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      profileVisibility === 'public' ? 'bg-pink-500' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                        profileVisibility === 'public' ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">AI Match Discovery</h3>
                    <p className="text-sm text-gray-500">Allow AI to suggest potential matches</p>
                  </div>
                  <button
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-pink-500 transition-colors duration-200 ease-in-out focus:outline-none"
                  >
                    <span className="inline-block h-5 w-5 transform rounded-full bg-white translate-x-5 transition duration-200 ease-in-out" />
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Blocked Users</h3>
                  <div className="space-y-3">
                    {['Kritika Jindal', 'Ananya Singh'].map((user) => (
                      <div key={user} className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-lg">
                        <span>{user}</span>
                        <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                          Unblock
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeSection === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
                  <div className="space-y-3">
                    {[
                      'New matches',
                      'New messages',
                      'Project likes & comments',
                      'Tech event invites'
                    ].map((setting) => (
                      <div key={setting} className="flex items-center">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                        />
                        <label className="ml-3 text-sm text-gray-700">{setting}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Push Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Notification Sound</h4>
                        <p className="text-sm text-gray-500">Play sound for new notifications</p>
                      </div>
                      <button
                        onClick={() => setNotificationSound(!notificationSound)}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                          notificationSound ? 'bg-pink-500' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                            notificationSound ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Danger Zone */}
            {activeSection === 'danger zone' && (
              <div className="space-y-6">
                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                  <h3 className="text-lg font-medium text-red-800 mb-4">Danger Zone</h3>
                  <div className="space-y-4">
                    <div>
                      <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                        <Trash2 className="w-4 h-4" />
                        <span>Delete Account</span>
                      </button>
                      <p className="mt-2 text-sm text-red-600">
                        Once deleted, your account cannot be recovered.
                      </p>
                    </div>

                    <div>
                      <button className="w-full px-4 py-2 border border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                        <RefreshCw className="w-4 h-4" />
                        <span>Reset All Settings</span>
                      </button>
                    </div>

                    <div>
                      <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Export My Data</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Check className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {savedToast && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 animate-fade-in">
          <Check className="w-4 h-4" />
          <span>Settings saved successfully!</span>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;