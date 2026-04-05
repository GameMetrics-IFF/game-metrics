import { ImageWithFallback } from './figma/ImageWithFallback';

export function DashboardPreview() {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image - Chart Visualization Mock */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-yellow-500/10"></div>
              
              {/* Chart Mock */}
              <div className="relative space-y-4">
                {/* Line Chart */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
                  <div className="h-3 w-32 bg-slate-700 rounded mb-4"></div>
                  <div className="h-48 relative">
                    <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <line x1="0" y1="37.5" x2="400" y2="37.5" stroke="rgb(51, 65, 85)" strokeWidth="1" />
                      <line x1="0" y1="75" x2="400" y2="75" stroke="rgb(51, 65, 85)" strokeWidth="1" />
                      <line x1="0" y1="112.5" x2="400" y2="112.5" stroke="rgb(51, 65, 85)" strokeWidth="1" />
                      
                      {/* Line chart - Purple */}
                      <path
                        d="M 0 120 L 40 100 L 80 110 L 120 70 L 160 80 L 200 50 L 240 60 L 280 40 L 320 45 L 360 25 L 400 30"
                        fill="none"
                        stroke="url(#gradient1)"
                        strokeWidth="3"
                      />
                      
                      {/* Line chart - Yellow */}
                      <path
                        d="M 0 130 L 40 125 L 80 115 L 120 105 L 160 100 L 200 85 L 240 80 L 280 70 L 320 60 L 360 50 L 400 45"
                        fill="none"
                        stroke="url(#gradient2)"
                        strokeWidth="3"
                      />
                      
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgb(168, 85, 247)" />
                          <stop offset="100%" stopColor="rgb(147, 51, 234)" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgb(251, 191, 36)" />
                          <stop offset="100%" stopColor="rgb(245, 158, 11)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Bar and Pie Charts Row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Bar Chart */}
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
                    <div className="h-2 w-20 bg-slate-700 rounded mb-3"></div>
                    <div className="h-24 flex items-end gap-1">
                      {[60, 80, 50, 90, 70, 85].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Pie Chart */}
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 flex items-center justify-center">
                    <div className="relative w-24 h-24">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          fill="none"
                          stroke="rgb(168, 85, 247)"
                          strokeWidth="16"
                          strokeDasharray="251.2"
                          strokeDashoffset="62.8"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          fill="none"
                          stroke="rgb(251, 191, 36)"
                          strokeWidth="16"
                          strokeDasharray="251.2"
                          strokeDashoffset="-62.8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500/20 rounded-full blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm font-medium">
                Visualização de dados
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Tenha uma visão completa do seu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">
                desempenho
              </span>{' '}
              em um único lugar
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              Nosso dashboard intuitivo apresenta todos os seus dados de forma clara e organizada. 
              Gráficos de linha, barras e pizza mostram sua evolução ao longo do tempo.
            </p>

            {/* Feature list */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Gráficos de evolução</div>
                  <div className="text-slate-400">Acompanhe seu progresso ao longo das semanas e meses</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Comparação de períodos</div>
                  <div className="text-slate-400">Compare seu desempenho em diferentes momentos</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Métricas detalhadas</div>
                  <div className="text-slate-400">Veja estatísticas completas de cada partida jogada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}