import { FileText, TrendingUp, BarChart3, Clock } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Registro de partidas',
    description: 'Salve os dados das suas partidas de forma simples e rápida',
    color: 'purple',
  },
  {
    icon: TrendingUp,
    title: 'Análise de desempenho',
    description: 'Veja métricas como KDA, winrate e pontuação',
    color: 'yellow',
  },
  {
    icon: BarChart3,
    title: 'Gráficos interativos',
    description: 'Visualize sua evolução com gráficos claros e intuitivos',
    color: 'purple',
  },
  {
    icon: Clock,
    title: 'Histórico completo',
    description: 'Acesse todas as suas partidas anteriores e compare resultados',
    color: 'yellow',
  },
];

export function Features() {
  return (
    <section className="relative py-20 sm:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
              Funcionalidades
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tudo que você precisa para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">
              evoluir
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ferramentas profissionais para acompanhar e melhorar seu desempenho nos jogos
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isYellow = feature.color === 'yellow';
            
            return (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-br ${
                  isYellow 
                    ? 'from-yellow-500/10 to-transparent' 
                    : 'from-purple-500/10 to-transparent'
                }`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                    isYellow 
                      ? 'bg-yellow-500/10 text-yellow-400 shadow-lg shadow-yellow-500/20' 
                      : 'bg-purple-500/10 text-purple-400 shadow-lg shadow-purple-500/20'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
