import { TrendingUp, Lightbulb, LineChart } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Melhore seu desempenho',
    description: 'Identifique pontos fortes e fracos para aprimorar suas habilidades continuamente',
  },
  {
    icon: Lightbulb,
    title: 'Tome decisões com base em dados',
    description: 'Use estatísticas reais para entender o que funciona e o que precisa mudar',
  },
  {
    icon: LineChart,
    title: 'Acompanhe sua evolução ao longo do tempo',
    description: 'Visualize seu progresso e celebre cada conquista alcançada',
  },
];

export function Benefits() {
  return (
    <section className="relative py-20 sm:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
              Benefícios
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que escolher o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">
              Game Metrics
            </span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <div
                key={index}
                className="relative text-center"
              >
                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-2xl blur-xl opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-purple-500/20">
                    <Icon className="w-10 h-10 text-purple-400" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-yellow-500/10 border border-purple-500/20">
            <span className="text-slate-300">
              Junte-se a milhares de jogadores que já melhoraram com nosso sistema
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}