import { ChevronRight } from 'lucide-react'
import { DashboardMock } from './DashboardMock'
import { Link } from 'react-router-dom'

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:44px_44px]"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[128px]"></div>

            <div className="relative container mx-auto px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="inline-block">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                </span>
                                Sistema de análise profissional
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="text-white">Acompanhe seu</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">
                                desempenho nos jogos
                            </span>
                            <br />
                            <span className="text-white">como um profissional</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
                            Analise suas partidas, visualize gráficos e evolua seu desempenho com dados precisos
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/login"
                                className="cursor-pointer group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Começar agora
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <button className="cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border border-slate-700 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-200">
                                Ver demonstração
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
                            <div>
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">
                                    10K+
                                </div>
                                <div className="text-slate-400 text-sm">Jogadores ativos</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">
                                    500K+
                                </div>
                                <div className="text-slate-400 text-sm">Partidas analisadas</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">
                                    98%
                                </div>
                                <div className="text-slate-400 text-sm">Satisfação</div>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Mock */}
                    <div className="relative">
                        <DashboardMock />

                        {/* Floating cards */}
                        <div className="hidden lg:block absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 shadow-xl">
                            <div className="text-xs text-slate-400 mb-1">Winrate</div>
                            <div className="text-2xl font-bold text-green-400">67.8%</div>
                            <div className="text-xs text-green-400">↑ 12.3%</div>
                        </div>

                        <div className="hidden lg:block absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4 shadow-xl">
                            <div className="text-xs text-slate-400 mb-1">KDA médio</div>
                            <div className="text-2xl font-bold text-yellow-400">4.2</div>
                            <div className="text-xs text-yellow-400">↑ 0.8</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
