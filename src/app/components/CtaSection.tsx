import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CtaSection() {
    return (
        <section className="relative py-20 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative max-w-4xl mx-auto">
                    {/* Background decorations */}
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-yellow-500/20 rounded-full blur-3xl"></div>

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
                        <div className="text-center space-y-8">
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-yellow-500/20 border border-purple-500/30">
                                <Sparkles className="w-8 h-8 text-yellow-400" />
                            </div>

                            {/* Heading */}
                            <div className="space-y-4">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                    Pronto para{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">
                                        evoluir no jogo?
                                    </span>
                                </h2>
                                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
                                    Crie sua conta gratuitamente e comece a acompanhar seu desempenho hoje mesmo
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link
                                    to="/signup"
                                    className="cursor-pointer group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                    Criar conta grátis
                                </Link>
                            </div>

                            {/* Trust indicators */}
                            <div className="flex flex-wrap gap-6 justify-center items-center text-sm text-slate-400 pt-4">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>100% Gratuito</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Sem cartão de crédito</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Configuração em 2 minutos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
