export function DashboardMock() {
  return (
    <div className="relative w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-purple-500/20 shadow-2xl shadow-purple-500/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <div className="h-4 w-32 bg-slate-700 rounded"></div>
          <div className="h-3 w-24 bg-slate-700/60 rounded"></div>
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded bg-slate-700/60"></div>
          <div className="w-8 h-8 rounded bg-slate-700/60"></div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
          <div className="text-xs text-slate-400 mb-2">Winrate</div>
          <div className="text-2xl font-bold text-green-400">67.8%</div>
          <div className="text-xs text-green-400 mt-1">↑ 12.3%</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
          <div className="text-xs text-slate-400 mb-2">KDA</div>
          <div className="text-2xl font-bold text-yellow-400">4.2</div>
          <div className="text-xs text-yellow-400 mt-1">↑ 0.8</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
          <div className="text-xs text-slate-400 mb-2">Partidas</div>
          <div className="text-2xl font-bold text-purple-400">156</div>
          <div className="text-xs text-purple-400 mt-1">+23</div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 mb-4">
        <div className="h-3 w-24 bg-slate-700 rounded mb-4"></div>
        <div className="h-48 relative">
          {/* Line Chart Background */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="45" x2="400" y2="45" stroke="rgb(51, 65, 85)" strokeWidth="1" />
            <line x1="0" y1="90" x2="400" y2="90" stroke="rgb(51, 65, 85)" strokeWidth="1" />
            <line x1="0" y1="135" x2="400" y2="135" stroke="rgb(51, 65, 85)" strokeWidth="1" />
            
            {/* Line chart - Purple */}
            <path
              d="M 0 150 L 33 140 L 66 145 L 100 120 L 133 125 L 166 100 L 200 105 L 233 85 L 266 90 L 300 70 L 333 75 L 366 60 L 400 65"
              fill="none"
              stroke="url(#heroGradient1)"
              strokeWidth="3"
            />
            
            {/* Line chart - Yellow */}
            <path
              d="M 0 160 L 33 155 L 66 150 L 100 140 L 133 135 L 166 125 L 200 120 L 233 110 L 266 105 L 300 95 L 333 90 L 366 80 L 400 75"
              fill="none"
              stroke="url(#heroGradient2)"
              strokeWidth="3"
            />
            
            <defs>
              <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(168, 85, 247)" />
                <stop offset="100%" stopColor="rgb(147, 51, 234)" />
              </linearGradient>
              <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(251, 191, 36)" />
                <stop offset="100%" stopColor="rgb(245, 158, 11)" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Bar Chart on top */}
          <div className="absolute inset-0 flex items-end gap-2">
            {[40, 60, 45, 75, 55, 80, 65, 85, 70, 90, 78, 95].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end">
                <div
                  className={`w-full rounded-t transition-all ${
                    i % 3 === 0
                      ? 'bg-gradient-to-t from-purple-500 to-purple-400'
                      : i % 3 === 1
                      ? 'bg-gradient-to-t from-yellow-500 to-yellow-400'
                      : 'bg-gradient-to-t from-blue-500 to-blue-400'
                  }`}
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
          <div className="h-3 w-20 bg-slate-700 rounded mb-3"></div>
          <div className="flex items-center gap-3">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="30"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-slate-700"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="30"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="188.4"
                  strokeDashoffset="47"
                  className="text-purple-500"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm text-slate-400">Vitórias</div>
              <div className="text-xl font-bold text-white">75%</div>
            </div>
          </div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
          <div className="h-3 w-20 bg-slate-700 rounded mb-3"></div>
          <div className="space-y-2">
            {[80, 65, 45].map((width, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      i === 0
                        ? 'bg-gradient-to-r from-purple-500 to-purple-400'
                        : i === 1
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-400'
                        : 'bg-gradient-to-r from-blue-500 to-blue-400'
                    }`}
                    style={{ width: `${width}%` }}
                  ></div>
                </div>
                <span className="text-xs text-slate-400 w-8">{width}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}