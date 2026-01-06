import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';
import { ChevronDown, ChevronUp, Trophy, Medal, Award, TrendingUp, BookOpen, Brain, Target, Zap } from 'lucide-react';

const DeepResearchBattle = () => {
  const [expandedTool, setExpandedTool] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const tools = {
    chatgpt: {
      name: 'ChatGPT',
      rank: 1,
      total: 157,
      percentage: 82.6,
      color: '#10a37f',
      icon: '🤖',
      badge: '🥇',
      classification: 'EXCELENTE',
      palavras: 12167,
      paginas: 40,
      citacoes: 103,
      densidade: 304.2,
      scores: {
        cobertura: 9,
        tecnica: 9,
        completude: 10,
        controversias: 8,
        equilibrio: 8,
        fundamentacao: 9,
        clareza: 9,
        usabilidade: 9,
        redacao: 9,
        contextualizacao: 9,
        aplicabilidade: 9,
        atualidade: 7,
        original: 8,
        valor: 9,
        extensao: 10,
        densidade: 9,
        citacoes_score: 9,
        limitacoes: 8
      },
      strengths: [
        'Completude incomparável - 40 páginas, 12.167 palavras',
        'Maior número de citações científicas (103)',
        'Cobertura equilibrada de todas as 4 partes do livro',
        'Estrutura organizacional exemplar com progressão lógica',
        'Explicações técnicas detalhadas (Processo C e S, NREM/REM)',
        'Excelente densidade informacional (304.2 palavras/página)',
        'Tabelas comparativas e elementos visuais',
        'Forte aplicabilidade prática'
      ],
      weaknesses: [
        'Foco excessivo em detalhes de capítulos específicos',
        'Menos atualizado (poucos dados de 2023-2025)',
        'Poderia ser mais profundo em críticas acadêmicas',
        'Equilíbrio crítico apenas moderado (8/10)'
      ],
      ideal_for: [
        'Pesquisa acadêmica profunda e exaustiva',
        'Trabalhos que exigem máximo volume de informação',
        'Necessidade de múltiplas citações científicas',
        'Projetos que demandam completude absoluta'
      ]
    },
    perplexity: {
      name: 'Perplexity',
      rank: 2,
      total: 154,
      percentage: 81.1,
      color: '#7c3aed',
      icon: '🔮',
      badge: '🥈',
      classification: 'EXCELENTE',
      palavras: 8500,
      paginas: 23,
      citacoes: 90,
      densidade: 340,
      scores: {
        cobertura: 9,
        tecnica: 8,
        completude: 9,
        controversias: 9,
        equilibrio: 9,
        fundamentacao: 9,
        clareza: 9,
        usabilidade: 9,
        redacao: 9,
        contextualizacao: 9,
        aplicabilidade: 9,
        atualidade: 8,
        original: 8,
        valor: 9,
        extensao: 8,
        densidade: 9,
        citacoes_score: 9,
        limitacoes: 9
      },
      strengths: [
        'MELHOR equilíbrio entre elogios e críticas (9/10)',
        'Narrativa coesa e fluida - não apenas lista informações',
        'Excelente contextualização histórica (sono bifásico)',
        'Forte atualidade - referências a dados 2024-2025',
        '90+ citações numeradas e rastreáveis',
        'Perspectiva cultural brasileira incluída',
        'Maior densidade informacional (340 pal/pág)',
        'Seção dedicada a "Críticas Acadêmicas e Controvérsias"',
        'Sumário executivo presente e bem estruturado'
      ],
      weaknesses: [
        'Volume ~30% menor que ChatGPT (8.500 vs 12.167 palavras)',
        'Menos elementos visuais e tabelas comparativas',
        'Profundidade técnica ligeiramente inferior ao Gemini',
        'Alguns mecanismos eletrofisiológicos menos detalhados'
      ],
      ideal_for: [
        'Pesquisa profissional que valoriza equilíbrio',
        'Relatórios que precisam de narrativa coesa',
        'Projetos que exigem informações atualizadas',
        'Trabalhos acadêmicos com viés crítico balanceado'
      ]
    },
    gemini: {
      name: 'Gemini',
      rank: 3,
      total: 153,
      percentage: 80.5,
      color: '#4285f4',
      icon: '💎',
      badge: '🥉',
      classification: 'MUITO BOM',
      palavras: 4974,
      paginas: 16,
      citacoes: 48,
      densidade: 310.9,
      scores: {
        cobertura: 8,
        tecnica: 10,
        completude: 9,
        controversias: 9,
        equilibrio: 8,
        fundamentacao: 9,
        clareza: 8,
        usabilidade: 8,
        redacao: 9,
        contextualizacao: 8,
        aplicabilidade: 7,
        atualidade: 8,
        original: 8,
        valor: 9,
        extensao: 8,
        densidade: 9,
        citacoes_score: 8,
        limitacoes: 9
      },
      strengths: [
        'MELHOR profundidade técnica (10/10) - supera todos',
        'Explicação extremamente técnica de ritmo circadiano',
        'Detalhamento superior do sistema glinfático',
        'Uso excepcional de tabelas para comparação de fases',
        'Terminologia neurocientífica precisa e rigorosa',
        'Forte em mecanismos de adenosina e melatonina',
        'Dados atualizados de 2024-2025',
        'Excelente reconhecimento de limitações (9/10)'
      ],
      weaknesses: [
        'Volume menor que ChatGPT (4.974 vs 12.167 palavras)',
        'Menos detalhado em aplicabilidade prática (7/10)',
        'Foco excessivo em teoria vs. prática',
        'Menos citações que ChatGPT (48 vs 103)',
        'Contextualização moderada'
      ],
      ideal_for: [
        'Pesquisa que exige máxima profundidade técnica',
        'Trabalhos em neurociência ou medicina',
        'Estudos que precisam de terminologia precisa',
        'Projetos focados em mecanismos biológicos'
      ]
    },
    manus: {
      name: 'Manus',
      rank: 4,
      total: 140,
      percentage: 73.7,
      color: '#f59e0b',
      icon: '📚',
      badge: '4º',
      classification: 'BOM',
      palavras: 4017,
      paginas: 17,
      citacoes: 32,
      densidade: 236.3,
      scores: {
        cobertura: 7,
        tecnica: 7,
        completude: 8,
        controversias: 8,
        equilibrio: 9,
        fundamentacao: 8,
        clareza: 9,
        usabilidade: 8,
        redacao: 9,
        contextualizacao: 8,
        aplicabilidade: 9,
        atualidade: 8,
        original: 7,
        valor: 8,
        extensao: 8,
        densidade: 7,
        citacoes_score: 7,
        limitacoes: 9
      },
      strengths: [
        'MELHOR equilíbrio crítico junto com Perplexity (9/10)',
        'Estrutura clara com sumário executivo',
        'Linguagem mais acessível para público geral',
        'Excelente reconhecimento de limitações (9/10)',
        'Contexto apropriado para cada alegação',
        'Boa aplicabilidade prática (9/10)',
        'Organização lógica exemplar'
      ],
      weaknesses: [
        'Menos detalhes técnicos que top 3',
        'Menos citações (32 vs 103 do ChatGPT)',
        'Densidade informacional menor (236.3 pal/pág)',
        'Menos perspectivas únicas e análise original',
        'Profundidade técnica moderada (7/10)'
      ],
      ideal_for: [
        'Divulgação científica para público geral',
        'Trabalhos que precisam de linguagem acessível',
        'Projetos que valorizam equilíbrio crítico',
        'Relatórios para não-especialistas'
      ]
    },
    claude: {
      name: 'Claude',
      rank: 5,
      total: 127,
      percentage: 66.8,
      color: '#c17a4a',
      icon: '🎭',
      badge: '5º',
      classification: 'REGULAR',
      palavras: 2089,
      paginas: 7,
      citacoes: 23,
      densidade: 298.4,
      scores: {
        cobertura: 6,
        tecnica: 6,
        completude: 7,
        controversias: 10,
        equilibrio: 6,
        fundamentacao: 8,
        clareza: 8,
        usabilidade: 7,
        redacao: 9,
        contextualizacao: 9,
        aplicabilidade: 6,
        atualidade: 7,
        original: 8,
        valor: 9,
        extensao: 6,
        densidade: 9,
        citacoes_score: 8,
        limitacoes: 8
      },
      strengths: [
        'MELHOR análise de controvérsias (10/10) - supera todos',
        'Discussão extremamente detalhada de Alexey Guzey',
        'Análise profunda de manipulação de dados',
        'Forte contextualização do impacto cultural',
        'Alta densidade informacional (298.4 pal/pág)',
        'Excelente qualidade de redação (9/10)',
        'Críticas bem documentadas'
      ],
      weaknesses: [
        'DESEQUILÍBRIO crítico severo (6/10) - muito negativo',
        'Volume muito pequeno (2.089 palavras, 7 páginas)',
        'Foco excessivo em críticas vs. contribuições',
        'Menos cobertura de mecanismos neurobiológicos',
        'Pouca aplicabilidade prática (6/10)',
        'Cobertura temática limitada (6/10)'
      ],
      ideal_for: [
        'Análise focada em controvérsias científicas',
        'Trabalhos de revisão crítica',
        'Estudos sobre integridade científica',
        'Projetos que exigem ceticismo'
      ]
    },
    genspark: {
      name: 'Genspark',
      rank: 6,
      total: 98,
      percentage: 51.6,
      color: '#ef4444',
      icon: '⚡',
      badge: '6º',
      classification: 'INSUFICIENTE',
      palavras: 909,
      paginas: 4,
      citacoes: 3,
      densidade: 227.2,
      scores: {
        cobertura: 5,
        tecnica: 4,
        completude: 5,
        controversias: 6,
        equilibrio: 7,
        fundamentacao: 5,
        clareza: 6,
        usabilidade: 5,
        redacao: 8,
        contextualizacao: 6,
        aplicabilidade: 8,
        atualidade: 7,
        original: 6,
        valor: 6,
        extensao: 4,
        densidade: 7,
        citacoes_score: 3,
        limitacoes: 6
      },
      strengths: [
        'Foco forte em aplicabilidade prática (8/10)',
        'Conciso e direto ao ponto',
        'Boa qualidade de redação (8/10)',
        'Linguagem clara e acessível'
      ],
      weaknesses: [
        'Volume MÍNIMO - apenas 909 palavras, 4 páginas',
        'Apenas 3 citações - credibilidade comprometida',
        'Profundidade técnica muito superficial (4/10)',
        'Cobertura básica e incompleta',
        'Inadequado para compreensão técnica profunda',
        'Menos detalhes em todos os aspectos',
        'Estrutura desorganizada'
      ],
      ideal_for: [
        'Resumos executivos ultra-breves',
        'Visões gerais rápidas',
        'NÃO recomendado para Deep Research sério'
      ]
    }
  };

  const categorias = [
    { id: 'profundidade', nome: 'Profundidade', max: 30, criteria: ['cobertura', 'tecnica', 'completude'] },
    { id: 'rigor', nome: 'Rigor Crítico', max: 30, criteria: ['controversias', 'equilibrio', 'fundamentacao'] },
    { id: 'estrutura', nome: 'Estrutura', max: 30, criteria: ['clareza', 'usabilidade', 'redacao'] },
    { id: 'relevancia', nome: 'Relevância', max: 30, criteria: ['contextualizacao', 'aplicabilidade', 'atualidade'] },
    { id: 'originalidade', nome: 'Originalidade', max: 20, criteria: ['original', 'valor'] },
    { id: 'volume', nome: 'Volume', max: 20, criteria: ['extensao', 'densidade'] },
    { id: 'credibilidade', nome: 'Credibilidade', max: 20, criteria: ['citacoes_score', 'limitacoes'] }
  ];

  const radarData = Object.entries(tools).map(([key, tool]) => ({
    ferramenta: tool.name,
    Profundidade: ((tool.scores.cobertura + tool.scores.tecnica + tool.scores.completude) / 30) * 100,
    Rigor: ((tool.scores.controversias + tool.scores.equilibrio + tool.scores.fundamentacao) / 30) * 100,
    Estrutura: ((tool.scores.clareza + tool.scores.usabilidade + tool.scores.redacao) / 30) * 100,
    Relevância: ((tool.scores.contextualizacao + tool.scores.aplicabilidade + tool.scores.atualidade) / 30) * 100,
    Original: ((tool.scores.original + tool.scores.valor) / 20) * 100,
    Volume: ((tool.scores.extensao + tool.scores.densidade) / 20) * 100,
    Credibilidade: ((tool.scores.citacoes_score + tool.scores.limitacoes) / 20) * 100
  }));

  const barData = Object.entries(tools).map(([key, tool]) => ({
    name: tool.name,
    total: tool.total,
    percentage: tool.percentage
  }));

  const detailedScores = Object.entries(tools).map(([key, tool]) => ({
    name: tool.name,
    ...tool.scores
  }));

  const volumeComparison = Object.entries(tools).map(([key, tool]) => ({
    name: tool.name,
    palavras: tool.palavras,
    paginas: tool.paginas,
    citacoes: tool.citacoes,
    densidade: tool.densidade
  }));

  const criticalAnalysis = {
    chatgpt: {
      why_won: [
        'Volume e completude incomparáveis (12.167 palavras, 40 páginas)',
        'Maior número absoluto de citações científicas (103)',
        'Cobertura equilibrada e exaustiva de todas as partes do livro',
        'Estrutura organizacional exemplar com progressão perfeita',
        'Explicações técnicas detalhadas sem perder acessibilidade'
      ],
      differential: 'Domínio absoluto em VOLUME e COMPLETUDE - ideal quando é necessário um relatório exaustivo e completo.',
      when_to_use: 'Use quando precisar de máxima profundidade, múltiplas citações e cobertura completa do tema.'
    },
    perplexity: {
      why_won: [
        'Melhor equilíbrio crítico entre todas as ferramentas (9/10)',
        'Narrativa coesa que conecta todos os elementos organicamente',
        'Excelente atualidade com dados de 2024-2025',
        'Contextualização histórica e cultural superior',
        'Densidade informacional máxima (340 palavras/página)'
      ],
      differential: 'EQUILÍBRIO PERFEITO entre profundidade, crítica e narrativa - apenas 3 pontos atrás do ChatGPT.',
      when_to_use: 'Use quando precisar de equilíbrio crítico, narrativa coesa e informações atualizadas.'
    },
    gemini: {
      why_won: [
        'Profundidade técnica incomparável (10/10) - supera todos',
        'Melhor ferramenta para terminologia neurocientífica precisa',
        'Explicações superiores de mecanismos biológicos complexos',
        'Uso excepcional de tabelas e visualizações técnicas'
      ],
      differential: 'CAMPEÃO em PROFUNDIDADE TÉCNICA - imbatível para quem precisa de rigor científico máximo.',
      when_to_use: 'Use para pesquisas que exigem máxima profundidade técnica e terminologia neurocientífica precisa.'
    },
    manus: {
      why_won: [
        'Linguagem mais acessível para público não-especialista',
        'Equilíbrio crítico exemplar (9/10)',
        'Estrutura clara e amigável com sumário executivo'
      ],
      differential: 'MELHOR para PÚBLICO GERAL - equilibra rigor científico com acessibilidade.',
      when_to_use: 'Use para divulgação científica ou quando o público-alvo não é especialista.'
    },
    claude: {
      why_won: [
        'Análise de controvérsias mais detalhada (10/10)',
        'Discussão profunda de integridade científica'
      ],
      differential: 'ESPECIALISTA em CRÍTICA - excelente para análise de controvérsias, mas desequilibrado.',
      when_to_use: 'Use apenas quando o foco for análise crítica de controvérsias científicas.'
    },
    genspark: {
      why_lost: [
        'Volume insuficiente (apenas 909 palavras)',
        'Apenas 3 citações - credibilidade comprometida',
        'Superficialidade em todos os aspectos técnicos'
      ],
      differential: 'INADEQUADO para Deep Research - falha em critérios fundamentais.',
      when_to_use: 'NÃO use para Deep Research sério. Apenas para resumos ultra-breves.'
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8 shadow-2xl">
        <div className="flex items-center gap-4 mb-4">
          <Trophy className="w-12 h-12" />
          <div>
            <h1 className="text-4xl font-bold">Batalha Deep Research</h1>
            <p className="text-xl opacity-90">Análise Comparativa Completa: "Por que Nós Dormimos"</p>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-lg">
            <strong>Prompt:</strong> "busque tudo que vc puder sobre o livro: Por que nós dormimos de Matthew Walker. A nova ciência do sono."
          </p>
          <p className="mt-2 text-sm opacity-80">
            6 ferramentas de IA | 19 critérios | 7 categorias | 190 pontos totais
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {[
          { id: 'overview', label: 'Visão Geral', icon: <TrendingUp className="w-4 h-4" /> },
          { id: 'ranking', label: 'Ranking Detalhado', icon: <Trophy className="w-4 h-4" /> },
          { id: 'radar', label: 'Análise Radar', icon: <Target className="w-4 h-4" /> },
          { id: 'detailed', label: 'Pontuações Completas', icon: <Brain className="w-4 h-4" /> },
          { id: 'volume', label: 'Comparação Volume', icon: <BookOpen className="w-4 h-4" /> },
          { id: 'insights', label: 'Insights Críticos', icon: <Zap className="w-4 h-4" /> }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Podium */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {/* 2nd Place */}
            <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl p-6 text-center transform translate-y-8">
              <div className="text-5xl mb-2">{tools.perplexity.badge}</div>
              <div className="text-3xl mb-2">{tools.perplexity.icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{tools.perplexity.name}</h3>
              <p className="text-3xl font-bold text-gray-900 my-2">{tools.perplexity.percentage}%</p>
              <p className="text-sm text-gray-700">{tools.perplexity.total}/190 pontos</p>
              <div className="mt-3 px-3 py-1 bg-white/50 rounded-full text-xs font-semibold">
                {tools.perplexity.classification}
              </div>
            </div>

            {/* 1st Place */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-6 text-center shadow-2xl">
              <div className="text-6xl mb-2">{tools.chatgpt.badge}</div>
              <div className="text-4xl mb-2">{tools.chatgpt.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{tools.chatgpt.name}</h3>
              <p className="text-4xl font-bold text-gray-900 my-3">{tools.chatgpt.percentage}%</p>
              <p className="text-base text-gray-800 font-semibold">{tools.chatgpt.total}/190 pontos</p>
              <div className="mt-4 px-4 py-2 bg-white/80 rounded-full text-sm font-bold">
                {tools.chatgpt.classification}
              </div>
            </div>

            {/* 3rd Place */}
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-6 text-center transform translate-y-8">
              <div className="text-5xl mb-2">{tools.gemini.badge}</div>
              <div className="text-3xl mb-2">{tools.gemini.icon}</div>
              <h3 className="text-xl font-bold text-white">{tools.gemini.name}</h3>
              <p className="text-3xl font-bold text-white my-2">{tools.gemini.percentage}%</p>
              <p className="text-sm text-white/90">{tools.gemini.total}/190 pontos</p>
              <div className="mt-3 px-3 py-1 bg-white/50 rounded-full text-xs font-semibold">
                {tools.gemini.classification}
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Pontuação Total (190 pontos)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 190]} />
                <Tooltip />
                <Bar dataKey="total" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-4">
              <div className="text-3xl font-bold">{tools.chatgpt.palavras.toLocaleString()}</div>
              <div className="text-sm opacity-90">Palavras (Máximo)</div>
              <div className="text-xs mt-1">ChatGPT - 40 páginas</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4">
              <div className="text-3xl font-bold">{tools.chatgpt.citacoes}</div>
              <div className="text-sm opacity-90">Citações (Máximo)</div>
              <div className="text-xs mt-1">ChatGPT domina</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4">
              <div className="text-3xl font-bold">{tools.perplexity.densidade}</div>
              <div className="text-sm opacity-90">Densidade (Máximo)</div>
              <div className="text-xs mt-1">Perplexity pal/pág</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-4">
              <div className="text-3xl font-bold">10/10</div>
              <div className="text-sm opacity-90">Técnica (Máximo)</div>
              <div className="text-xs mt-1">Gemini é imbatível</div>
            </div>
          </div>
        </div>
      )}

      {/* Ranking Tab */}
      {activeTab === 'ranking' && (
        <div className="space-y-4">
          {Object.entries(tools).map(([key, tool]) => (
            <div
              key={key}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all"
              style={{ borderColor: tool.color }}
            >
              <div
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedTool(expandedTool === key ? null : key)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-4xl">{tool.badge}</div>
                    <div className="text-3xl">{tool.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold" style={{ color: tool.color }}>
                          {tool.name}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          tool.classification === 'EXCELENTE' ? 'bg-green-100 text-green-800' :
                          tool.classification === 'MUITO BOM' ? 'bg-blue-100 text-blue-800' :
                          tool.classification === 'BOM' ? 'bg-yellow-100 text-yellow-800' :
                          tool.classification === 'REGULAR' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {tool.classification}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 mt-2 text-sm">
                        <div>
                          <span className="text-gray-600">Pontuação:</span>
                          <span className="font-bold ml-2">{tool.total}/190</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Percentual:</span>
                          <span className="font-bold ml-2">{tool.percentage}%</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Palavras:</span>
                          <span className="font-bold ml-2">{tool.palavras.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Citações:</span>
                          <span className="font-bold ml-2">{tool.citacoes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {expandedTool === key ? <ChevronUp /> : <ChevronDown />}
                </div>

                {/* Progress Bar */}
                <div className="mt-4 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full transition-all duration-500 rounded-full"
                    style={{ 
                      width: `${tool.percentage}%`,
                      background: `linear-gradient(to right, ${tool.color}, ${tool.color}dd)`
                    }}
                  />
                </div>
              </div>

              {expandedTool === key && (
                <div className="p-6 bg-gray-50 border-t-2" style={{ borderColor: tool.color }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Strengths */}
                    <div>
                      <h4 className="text-lg font-bold text-green-700 mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Pontos Fortes
                      </h4>
                      <ul className="space-y-2">
                        {tool.strengths.map((strength, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Weaknesses */}
                    <div>
                      <h4 className="text-lg font-bold text-orange-700 mb-3 flex items-center gap-2">
                        <Medal className="w-5 h-5" />
                        Pontos Fracos
                      </h4>
                      <ul className="space-y-2">
                        {tool.weaknesses.map((weakness, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-orange-600 mt-1">⚠</span>
                            <span>{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mt-6">
                    <h4 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Ideal Para
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {tool.ideal_for.map((use, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm bg-white p-3 rounded-lg">
                          <span className="text-blue-600">→</span>
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scores Grid */}
                  <div className="mt-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Pontuações Detalhadas</h4>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                      {Object.entries(tool.scores).map(([key, value]) => (
                        <div key={key} className="bg-white p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold" style={{ color: value >= 9 ? '#10b981' : value >= 7 ? '#3b82f6' : value >= 5 ? '#f59e0b' : '#ef4444' }}>
                            {value}
                          </div>
                          <div className="text-xs text-gray-600 mt-1 capitalize">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Radar Tab */}
      {activeTab === 'radar' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Análise Radar por Categoria</h2>
            <ResponsiveContainer width="100%" height={500}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="ferramenta" />
                <PolarRadiusAxis domain={[0, 100]} />
                <Radar name="ChatGPT" dataKey="Profundidade" stroke={tools.chatgpt.color} fill={tools.chatgpt.color} fillOpacity={0.3} />
                <Radar name="Perplexity" dataKey="Profundidade" stroke={tools.perplexity.color} fill={tools.perplexity.color} fillOpacity={0.3} />
                <Radar name="Gemini" dataKey="Profundidade" stroke={tools.gemini.color} fill={tools.gemini.color} fillOpacity={0.3} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Category Breakdown */}
          <div className="grid md:grid-cols-2 gap-4">
            {categorias.map(cat => (
              <div key={cat.id} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{cat.nome} ({cat.max} pts)</h3>
                <div className="space-y-2">
                  {Object.entries(tools).map(([key, tool]) => {
                    const score = cat.criteria.reduce((sum, c) => sum + tool.scores[c], 0);
                    const percentage = (score / cat.max) * 100;
                    return (
                      <div key={key}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{tool.name}</span>
                          <span className="font-bold">{score}/{cat.max}</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${percentage}%`, backgroundColor: tool.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Scores Tab */}
      {activeTab === 'detailed' && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="p-4 text-left sticky left-0 bg-gray-800">Critério</th>
                  {Object.entries(tools).map(([key, tool]) => (
                    <th key={key} className="p-4 text-center" style={{ color: tool.color }}>
                      {tool.icon} {tool.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { key: 'cobertura', label: '1.1 Cobertura Temática', max: 10 },
                  { key: 'tecnica', label: '1.2 Profundidade Técnica', max: 10 },
                  { key: 'completude', label: '1.3 Completude', max: 10 },
                  { key: 'controversias', label: '2.1 Controvérsias', max: 10 },
                  { key: 'equilibrio', label: '2.2 Equilíbrio', max: 10 },
                  { key: 'fundamentacao', label: '2.3 Fundamentação', max: 10 },
                  { key: 'clareza', label: '3.1 Clareza Estrutural', max: 10 },
                  { key: 'usabilidade', label: '3.2 Usabilidade', max: 10 },
                  { key: 'redacao', label: '3.3 Qualidade Redação', max: 10 },
                  { key: 'contextualizacao', label: '4.1 Contextualização', max: 10 },
                  { key: 'aplicabilidade', label: '4.2 Aplicabilidade', max: 10 },
                  { key: 'atualidade', label: '4.3 Atualidade', max: 10 },
                  { key: 'original', label: '5.1 Análise Original', max: 10 },
                  { key: 'valor', label: '5.2 Valor Agregado', max: 10 },
                  { key: 'extensao', label: '6.1 Extensão', max: 10 },
                  { key: 'densidade', label: '6.2 Densidade', max: 10 },
                  { key: 'citacoes_score', label: '7.1 Citações', max: 10 },
                  { key: 'limitacoes', label: '7.2 Limitações', max: 10 }
                ].map((criterion, idx) => (
                  <tr key={criterion.key} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium sticky left-0 bg-inherit">{criterion.label}</td>
                    {Object.entries(tools).map(([toolKey, tool]) => {
                      const score = tool.scores[criterion.key];
                      return (
                        <td key={toolKey} className="p-4 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full font-bold ${
                              score >= 9 ? 'bg-green-100 text-green-800' :
                              score >= 7 ? 'bg-blue-100 text-blue-800' :
                              score >= 5 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}
                          >
                            {score}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr className="bg-gray-800 text-white font-bold">
                  <td className="p-4 sticky left-0 bg-gray-800">TOTAL (190)</td>
                  {Object.entries(tools).map(([key, tool]) => (
                    <td key={key} className="p-4 text-center text-xl">{tool.total}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Volume Comparison Tab */}
      {activeTab === 'volume' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Palavras por Ferramenta</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={volumeComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="palavras" fill="#10b981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Citações por Ferramenta</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={volumeComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="citacoes" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Páginas por Ferramenta</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={volumeComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="paginas" fill="#f59e0b" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Densidade (palavras/página)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={volumeComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="densidade" stroke="#8b5cf6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detailed Volume Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="p-4 text-left">Ferramenta</th>
                  <th className="p-4 text-center">Palavras</th>
                  <th className="p-4 text-center">Páginas</th>
                  <th className="p-4 text-center">Citações</th>
                  <th className="p-4 text-center">Densidade (pal/pág)</th>
                  <th className="p-4 text-center">Índice Eficiência</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(tools).map(([key, tool], idx) => {
                  const efficiency = (tool.percentage / 100) * (tool.densidade / 340) * (tool.citacoes / 103);
                  return (
                    <tr key={key} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-bold flex items-center gap-2">
                        <span className="text-2xl">{tool.icon}</span>
                        {tool.name}
                      </td>
                      <td className="p-4 text-center font-semibold">{tool.palavras.toLocaleString()}</td>
                      <td className="p-4 text-center">{tool.paginas}</td>
                      <td className="p-4 text-center font-semibold">{tool.citacoes}</td>
                      <td className="p-4 text-center">{tool.densidade.toFixed(1)}</td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${Math.min(efficiency * 100, 100)}%`,
                                backgroundColor: tool.color
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium">{(efficiency * 100).toFixed(0)}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Insights Tab */}
      {activeTab === 'insights' && (
        <div className="space-y-6">
          {Object.entries(tools).map(([key, tool]) => {
            const analysis = criticalAnalysis[key];
            return (
              <div key={key} className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderColor: tool.color }}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{tool.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: tool.color }}>{tool.name}</h3>
                    <p className="text-gray-600">{tool.rank}º lugar • {tool.percentage}% • {tool.classification}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">💡 Diferencial</h4>
                  <p className="text-gray-700">{analysis.differential}</p>
                </div>

                {analysis.why_won && (
                  <div className="mb-4">
                    <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      Por que venceu / se destacou:
                    </h4>
                    <ul className="space-y-2">
                      {analysis.why_won.map((reason, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {analysis.why_lost && (
                  <div className="mb-4">
                    <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Por que perdeu:
                    </h4>
                    <ul className="space-y-2">
                      {analysis.why_lost.map((reason, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-red-600 mt-1">✗</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Quando usar:
                  </h4>
                  <p className="text-gray-700">{analysis.when_to_use}</p>
                </div>
              </div>
            );
          })}

          {/* Final Recommendations */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8" />
              Recomendações Finais
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">🥇</div>
                <h3 className="text-xl font-bold mb-2">Para Volume Máximo</h3>
                <p className="text-sm opacity-90">Use <strong>ChatGPT</strong> quando precisar de:</p>
                <ul className="mt-2 space-y-1 text-sm opacity-90">
                  <li>• Relatórios exaustivos</li>
                  <li>• Máximas citações</li>
                  <li>• Completude absoluta</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">🥈</div>
                <h3 className="text-xl font-bold mb-2">Para Equilíbrio</h3>
                <p className="text-sm opacity-90">Use <strong>Perplexity</strong> quando precisar de:</p>
                <ul className="mt-2 space-y-1 text-sm opacity-90">
                  <li>• Narrativa coesa</li>
                  <li>• Equilíbrio crítico</li>
                  <li>• Dados atualizados</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">🥉</div>
                <h3 className="text-xl font-bold mb-2">Para Técnica</h3>
                <p className="text-sm opacity-90">Use <strong>Gemini</strong> quando precisar de:</p>
                <ul className="mt-2 space-y-1 text-sm opacity-90">
                  <li>• Máxima profundidade</li>
                  <li>• Rigor científico</li>
                  <li>• Terminologia precisa</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">🎯 Insights Críticos</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span>💡</span>
                  <span>A diferença entre os 3 primeiros é marginal (82.6%, 81.1%, 80.5%) - a escolha depende das prioridades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💡</span>
                  <span><strong>Perplexity</strong> tem a maior densidade informacional (340 pal/pág) e melhor equilíbrio crítico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💡</span>
                  <span><strong>ChatGPT</strong> domina em volume absoluto - ideal para pesquisa acadêmica exaustiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💡</span>
                  <span><strong>Gemini</strong> é imbatível em profundidade técnica (10/10) - perfeito para neurociência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>⚠️</span>
                  <span><strong>Genspark</strong> falha em todos os critérios de Deep Research - inadequado para trabalhos sérios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeepResearchBattle;