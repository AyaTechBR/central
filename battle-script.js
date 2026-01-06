/* Deep Research Battle Logic */

const toolsData = {
    chatgpt: {
        name: 'ChatGPT',
        rank: 1,
        total: 157,
        percentage: 82.6,
        color: '#10a37f',
        icon: '🤖',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg',
        badge: '🥇',
        classification: 'EXCELENTE',
        palavras: 12167,
        paginas: 40,
        citacoes: 103,
        densidade: 304.2,
        scores: {
            cobertura: 9, tecnica: 9, completude: 10, controversias: 8, equilibrio: 8,
            fundamentacao: 9, clareza: 9, usabilidade: 9, redacao: 9, contextualizacao: 9,
            aplicabilidade: 9, atualidade: 7, original: 8, valor: 9, extensao: 10,
            densidade: 9, citacoes_score: 9, limitacoes: 8
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
        logoUrl: 'https://cdn.simpleicons.org/perplexity/7c3aed',
        badge: '🥈',
        classification: 'EXCELENTE',
        palavras: 8500,
        paginas: 23,
        citacoes: 90,
        densidade: 340,
        scores: {
            cobertura: 9, tecnica: 8, completude: 9, controversias: 9, equilibrio: 9,
            fundamentacao: 9, clareza: 9, usabilidade: 9, redacao: 9, contextualizacao: 9,
            aplicabilidade: 9, atualidade: 8, original: 8, valor: 9, extensao: 8,
            densidade: 9, citacoes_score: 9, limitacoes: 9
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
        logoUrl: 'https://cdn.simpleicons.org/googlegemini/4285f4',
        badge: '🥉',
        classification: 'MUITO BOM',
        palavras: 4974,
        paginas: 16,
        citacoes: 48,
        densidade: 310.9,
        scores: {
            cobertura: 8, tecnica: 10, completude: 9, controversias: 9, equilibrio: 8,
            fundamentacao: 9, clareza: 8, usabilidade: 8, redacao: 9, contextualizacao: 8,
            aplicabilidade: 7, atualidade: 8, original: 8, valor: 9, extensao: 8,
            densidade: 9, citacoes_score: 8, limitacoes: 9
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
        logoUrl: 'assets/img/manus.svg',
        badge: '4º',
        classification: 'BOM',
        palavras: 4017,
        paginas: 17,
        citacoes: 32,
        densidade: 236.3,
        scores: {
            cobertura: 7, tecnica: 7, completude: 8, controversias: 8, equilibrio: 9,
            fundamentacao: 8, clareza: 9, usabilidade: 8, redacao: 9, contextualizacao: 8,
            aplicabilidade: 9, atualidade: 8, original: 7, valor: 8, extensao: 8,
            densidade: 7, citacoes_score: 7, limitacoes: 9
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
        logoUrl: 'https://cdn.simpleicons.org/claude/c17a4a',
        badge: '5º',
        classification: 'REGULAR',
        palavras: 2089,
        paginas: 7,
        citacoes: 23,
        densidade: 298.4,
        scores: {
            cobertura: 6, tecnica: 6, completude: 7, controversias: 10, equilibrio: 6,
            fundamentacao: 8, clareza: 8, usabilidade: 7, redacao: 9, contextualizacao: 9,
            aplicabilidade: 6, atualidade: 7, original: 8, valor: 9, extensao: 6,
            densidade: 9, citacoes_score: 8, limitacoes: 8
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
        logoUrl: 'assets/img/genspark-ai-icon.svg',
        badge: '6º',
        classification: 'INSUFICIENTE',
        palavras: 909,
        paginas: 4,
        citacoes: 3,
        densidade: 227.2,
        scores: {
            cobertura: 5, tecnica: 4, completude: 5, controversias: 6, equilibrio: 7,
            fundamentacao: 5, clareza: 6, usabilidade: 5, redacao: 8, contextualizacao: 6,
            aplicabilidade: 8, atualidade: 7, original: 6, valor: 6, extensao: 4,
            densidade: 7, citacoes_score: 3, limitacoes: 6
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

// Helper to render logo
function renderLogo(tool) {
    if (tool.isImage) {
        return `<img src="${tool.logoUrl}" alt="${tool.name}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 50%;">`;
    }
    // For Manus, we might need a filter to make it white if it's black
    const style = tool.name === 'Manus' ? 'filter: brightness(0) invert(1);' : '';
    return `<img src="${tool.logoUrl}" alt="${tool.name}" style="width: 60%; height: 60%; object-fit: contain; ${style}">`;
}

const categorias = [
    { id: 'profundidade', nome: 'Profundidade', max: 30, criteria: ['cobertura', 'tecnica', 'completude'] },
    { id: 'rigor', nome: 'Rigor Crítico', max: 30, criteria: ['controversias', 'equilibrio', 'fundamentacao'] },
    { id: 'estrutura', nome: 'Estrutura', max: 30, criteria: ['clareza', 'usabilidade', 'redacao'] },
    { id: 'relevancia', nome: 'Relevância', max: 30, criteria: ['contextualizacao', 'aplicabilidade', 'atualidade'] },
    { id: 'originalidade', nome: 'Originalidade', max: 20, criteria: ['original', 'valor'] },
    { id: 'volume', nome: 'Volume', max: 20, criteria: ['extensao', 'densidade'] },
    { id: 'credibilidade', nome: 'Credibilidade', max: 20, criteria: ['citacoes_score', 'limitacoes'] }
];

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


// Render Podium (Top 3)
function renderPodium() {
    const container = document.getElementById('podium-container');
    if (!container) return;

    const top3 = Object.values(toolsData).slice(0, 3);

    container.innerHTML = `
        <div class="flex flex-col md:flex-row items-stretch md:items-end justify-center gap-6 max-w-4xl mx-auto podium-container">
            <!-- 1st Place (Mobile First) -->
            <div class="podium-step flex-1 glass-card rounded-t-3xl p-8 flex flex-col items-center justify-end border-t-4 relative md:order-2" style="height: 100%; border-color: #fbbf24">
                <div class="absolute -top-6 bg-yellow-400 text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Campeão</div>
                <div class="text-5xl mb-4">${top3[0].badge}</div>
                <div class="w-24 h-24 mb-4 p-5 bg-white/10 rounded-full flex items-center justify-center">
                    <img src="${top3[0].logoUrl}" alt="${top3[0].name}" class="w-full h-full object-contain">
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">${top3[0].name}</h3>
                <div class="text-4xl font-black mb-1" style="color: ${top3[0].color}">${top3[0].percentage}%</div>
                <div class="text-sm text-slate-400">${top3[0].total}/190 pts</div>
            </div>

            <!-- 2nd Place -->
            <div class="podium-step flex-1 glass-card rounded-t-3xl p-8 flex flex-col items-center justify-end border-t-4 md:order-1" style="height: 70%; border-color: ${top3[1].color}">
                <div class="text-4xl mb-4">${top3[1].badge}</div>
                <div class="w-20 h-20 mb-4 p-4 bg-white/10 rounded-full flex items-center justify-center">
                    <img src="${top3[1].logoUrl}" alt="${top3[1].name}" class="w-full h-full object-contain" style="${top3[1].name === 'Perplexity' ? '' : 'filter: brightness(0) invert(1);'}">
                </div>
                <h3 class="text-xl font-bold text-white mb-2">${top3[1].name}</h3>
                <div class="text-3xl font-black mb-1" style="color: ${top3[1].color}">${top3[1].percentage}%</div>
                <div class="text-sm text-slate-400">${top3[1].total}/190 pts</div>
            </div>

            <!-- 3rd Place -->
            <div class="podium-step flex-1 glass-card rounded-t-3xl p-8 flex flex-col items-center justify-end border-t-4 md:order-3" style="height: 60%; border-color: ${top3[2].color}">
                <div class="text-4xl mb-4">${top3[2].badge}</div>
                <div class="w-20 h-20 mb-4 p-4 bg-white/10 rounded-full flex items-center justify-center">
                    <img src="${top3[2].logoUrl}" alt="${top3[2].name}" class="w-full h-full object-contain">
                </div>
                <h3 class="text-xl font-bold text-white mb-2">${top3[2].name}</h3>
                <div class="text-3xl font-black mb-1" style="color: ${top3[2].color}">${top3[2].percentage}%</div>
                <div class="text-sm text-slate-400">${top3[2].total}/190 pts</div>
            </div>
        </div>
    `;
}

// Render Ranking List (Expandable)
function renderRankingList() {
    const container = document.getElementById('ranking-list');
    if (!container) return;

    Object.values(toolsData).forEach((tool) => {
        const card = document.createElement('div');
        card.className = 'ranking-card glass-card rounded-2xl overflow-hidden';
        card.style.borderLeft = `4px solid ${tool.color}`;

        card.innerHTML = `
            <div class="p-6 flex items-center justify-between">
                <div class="flex items-center gap-4 flex-1">
                    <div class="text-4xl">${tool.badge}</div>
                    <div class="w-16 h-16 p-3 bg-white/10 rounded-full flex items-center justify-center">
                        <img src="${tool.logoUrl}" alt="${tool.name}" class="w-full h-full object-contain">
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center gap-3 mb-1">
                            <h3 class="text-2xl font-bold" style="color: ${tool.color}">${tool.name}</h3>
                            <span class="text-xs px-3 py-1 bg-white/10 rounded-full uppercase tracking-wider">${tool.classification}</span>
                        </div>
                        <div class="text-slate-400">
                            ${tool.percentage}% • ${tool.total}/190 pontos
                        </div>
                    </div>
                </div>
                <svg class="chevron w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            <div class="ranking-content">
                <div class="p-6 border-t border-white/10 grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="text-green-400 font-bold mb-3 flex items-center gap-2">
                            <span>✓</span> Pontos Fortes
                        </h4>
                        <ul class="space-y-2 text-sm text-slate-300">
                            ${tool.strengths.map(s => `<li>• ${s}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-red-400 font-bold mb-3 flex items-center gap-2">
                            <span>⚠</span> Pontos Fracos
                        </h4>
                        <ul class="space-y-2 text-sm text-slate-300">
                            ${tool.weaknesses.map(w => `<li>• ${w}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="p-6 border-t border-white/10">
                    <h4 class="text-blue-400 font-bold mb-3 flex items-center gap-2">
                        <span>🎯</span> Ideal Para
                    </h4>
                    <div class="flex flex-wrap gap-2">
                        ${tool.ideal_for.map(i => `<span class="text-xs px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full">${i}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;

        // Toggle on header click
        card.querySelector('.p-6').addEventListener('click', () => {
            card.classList.toggle('open');
        });

        // Close on content click (mobile only) with scroll back to card
        const content = card.querySelector('.ranking-content');
        content.addEventListener('click', (e) => {
            if (window.innerWidth < 768 && card.classList.contains('open')) {
                card.classList.remove('open');
                // Scroll back to the card header after closing
                setTimeout(() => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });

        container.appendChild(card);
    });
}

// Render All Charts
function renderAllCharts() {
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

    const chartTotal = document.getElementById('chart-total');
    if (chartTotal) {
        new Chart(chartTotal, {
            type: 'bar',
            data: {
                labels: Object.values(toolsData).map(t => t.name),
                datasets: [{
                    label: 'Pontuação Total',
                    data: Object.values(toolsData).map(t => t.total),
                    backgroundColor: Object.values(toolsData).map(t => t.color),
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, max: 190 } }
            }
        });
    }

    const chartRadar = document.getElementById('chart-radar');
    if (chartRadar) {
        const radarDatasets = Object.values(toolsData).slice(0, 3).map(tool => {
            const data = categorias.map(cat => {
                return cat.criteria.reduce((sum, c) => sum + tool.scores[c], 0) / cat.max * 100;
            });
            return {
                label: tool.name,
                data: data,
                borderColor: tool.color,
                backgroundColor: tool.color + '33',
                fill: true
            };
        });

        new Chart(chartRadar, {
            type: 'radar',
            data: {
                labels: categorias.map(c => c.nome),
                datasets: radarDatasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(255,255,255,0.1)' },
                        grid: { color: 'rgba(255,255,255,0.1)' },
                        pointLabels: { color: '#fff', font: { size: 11 } },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        ticks: { display: false }
                    }
                }
            }
        });
    }

    const chartVolume = document.getElementById('chart-volume');
    if (chartVolume) {
        new Chart(chartVolume, {
            type: 'bar',
            data: {
                labels: Object.values(toolsData).map(t => t.name),
                datasets: [
                    {
                        label: 'Palavras',
                        data: Object.values(toolsData).map(t => t.palavras),
                        backgroundColor: '#10b981',
                        yAxisID: 'y'
                    },
                    {
                        label: 'Citações',
                        data: Object.values(toolsData).map(t => t.citacoes),
                        backgroundColor: '#3b82f6',
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { type: 'linear', display: true, position: 'left', title: { display: true, text: 'Palavras' } },
                    y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'Citações' } }
                }
            }
        });
    }
}

// Render Detailed Table
function renderDetailedTable() {
    const headerContainer = document.getElementById('table-header');
    const bodyContainer = document.getElementById('detailed-table-body');
    if (!headerContainer || !bodyContainer) return;

    // Header
    Object.values(toolsData).forEach(tool => {
        const th = document.createElement('th');
        th.className = 'p-4 text-center';
        th.innerHTML = `<div class="text-sm font-bold" style="color: ${tool.color}">${tool.name}</div>`;
        headerContainer.appendChild(th);
    });

    // Rows
    const criteriaList = [
        { key: 'cobertura', label: '1.1 Cobertura Temática' },
        { key: 'tecnica', label: '1.2 Profundidade Técnica' },
        { key: 'completude', label: '1.3 Completude' },
        { key: 'controversias', label: '2.1 Controvérsias' },
        { key: 'equilibrio', label: '2.2 Equilíbrio' },
        { key: 'fundamentacao', label: '2.3 Fundamentação' },
        { key: 'clareza', label: '3.1 Clareza Estrutural' },
        { key: 'usabilidade', label: '3.2 Usabilidade' },
        { key: 'redacao', label: '3.3 Qualidade Redação' },
        { key: 'contextualizacao', label: '4.1 Contextualização' },
        { key: 'aplicabilidade', label: '4.2 Aplicabilidade' },
        { key: 'atualidade', label: '4.3 Atualidade' },
        { key: 'original', label: '5.1 Análise Original' },
        { key: 'valor', label: '5.2 Valor Agregado' },
        { key: 'extensao', label: '6.1 Extensão' },
        { key: 'densidade', label: '6.2 Densidade' },
        { key: 'citacoes_score', label: '7.1 Citações' },
        { key: 'limitacoes', label: '7.2 Limitações' }
    ];

    criteriaList.forEach(crit => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-white/5 hover:bg-white/5 transition-colors';
        tr.innerHTML = `<td class="p-4 text-slate-400">${crit.label}</td>`;

        Object.values(toolsData).forEach(tool => {
            const score = tool.scores[crit.key];
            let color = '#f87171';
            if (score >= 9) color = '#4ade80';
            else if (score >= 7) color = '#60a5fa';
            else if (score >= 5) color = '#fbbf24';

            const td = document.createElement('td');
            td.className = 'p-4 text-center';
            td.innerHTML = `<span class="font-bold" style="color: ${color}">${score}</span>`;
            tr.appendChild(td);
        });

        bodyContainer.appendChild(tr);
    });
}

// Render Insights Section
function renderInsightsSection() {
    const container = document.getElementById('insights-container');
    if (!container) return;

    Object.entries(toolsData).forEach(([key, tool]) => {
        const analysis = criticalAnalysis[key];

        const card = document.createElement('div');
        card.className = 'glass-card rounded-2xl p-8 reveal-section';
        card.style.borderLeft = `4px solid ${tool.color}`;

        card.innerHTML = `
            <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 p-3 bg-white/10 rounded-full flex items-center justify-center">
                    <img src="${tool.logoUrl}" alt="${tool.name}" class="w-full h-full object-contain">
                </div>
                <div>
                    <h3 class="text-2xl font-bold" style="color: ${tool.color}">${tool.name}</h3>
                    <p class="text-slate-400">${tool.rank}º lugar • ${tool.classification}</p>
                </div>
            </div>

            <div class="bg-white/5 p-4 rounded-xl mb-4">
                <strong class="text-amber-400">💡 Diferencial:</strong>
                <span class="text-slate-200"> ${analysis.differential}</span>
            </div>

            ${analysis.why_won ? `
                <div class="mb-4">
                    <strong class="text-green-400">🏆 Destaques:</strong>
                    <ul class="mt-2 space-y-1 text-sm text-slate-300 ml-6">
                        ${analysis.why_won.map(w => `<li>• ${w}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${analysis.why_lost ? `
                <div class="mb-4">
                    <strong class="text-red-400">⚠️ Pontos Críticos:</strong>
                    <ul class="mt-2 space-y-1 text-sm text-slate-300 ml-6">
                        ${analysis.why_lost.map(w => `<li>• ${w}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            <div class="pt-4 border-t border-white/10">
                <strong class="text-blue-400">🎯 Quando usar:</strong>
                <p class="text-sm text-slate-300 mt-1">${analysis.when_to_use}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Initialization (removed old DOMContentLoaded)


function setupTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    if (tabs.length === 0) return;
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.dataset.target).classList.add('active');
        });
    });
}

function renderRanking() {
    const container = document.getElementById('ranking-list');
    if (!container) return;
    Object.entries(toolsData).forEach(([key, tool]) => {
        const div = document.createElement('div');
        div.className = 'ranking-item';
        div.style.borderColor = tool.color;

        div.innerHTML = `
            <div class="ranking-header">
                <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">
                    <div style="font-size: 2rem;">${tool.badge}</div>
                    <div style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border-radius: 50%; padding: 8px;">
                        ${renderLogo(tool)}
                    </div>
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <h3 style="color: ${tool.color}; font-weight: bold;">${tool.name}</h3>
                            <span style="font-size: 0.75rem; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 99px;">${tool.classification}</span>
                        </div>
                        <div style="font-size: 0.875rem; color: var(--text-secondary);">
                            ${tool.percentage}% (Total: ${tool.total}/190)
                        </div>
                    </div>
                    <i class="fas fa-chevron-down chevron" style="transition: transform 0.3s;"></i>
                </div>
            </div>
            <div class="ranking-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                    <div>
                        <h4 style="color: #4ade80; margin-bottom: 0.5rem;"><i class="fas fa-check"></i> Pontos Fortes</h4>
                        <ul style="list-style: none; font-size: 0.9rem;">
                            ${tool.strengths.map(s => `<li style="margin-bottom: 0.25rem;">• ${s}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4 style="color: #f87171; margin-bottom: 0.5rem;"><i class="fas fa-exclamation-triangle"></i> Pontos Fracos</h4>
                        <ul style="list-style: none; font-size: 0.9rem;">
                            ${tool.weaknesses.map(w => `<li style="margin-bottom: 0.25rem;">• ${w}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                    <h4 style="color: #60a5fa; margin-bottom: 0.5rem;"><i class="fas fa-crosshairs"></i> Ideal Para</h4>
                     <ul style="display: flex; gap: 0.5rem; flex-wrap: wrap; list-style: none;">
                            ${tool.ideal_for.map(i => `<li style="background: rgba(59, 130, 246, 0.2); padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.8rem;">${i}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        div.querySelector('.ranking-header').addEventListener('click', () => {
            div.classList.toggle('open');
        });

        container.appendChild(div);
    });
}

function renderDetailedScores() {
    const container = document.getElementById('detailed-table-body');
    if (!container) return;
    const criteriaList = [
        { key: 'cobertura', label: '1.1 Cobertura Temática' },
        { key: 'tecnica', label: '1.2 Profundidade Técnica' },
        { key: 'completude', label: '1.3 Completude' },
        { key: 'controversias', label: '2.1 Controvérsias' },
        { key: 'equilibrio', label: '2.2 Equilíbrio' },
        { key: 'fundamentacao', label: '2.3 Fundamentação' },
        { key: 'clareza', label: '3.1 Clareza Estrutural' },
        { key: 'usabilidade', label: '3.2 Usabilidade' },
        { key: 'redacao', label: '3.3 Qualidade Redação' },
        { key: 'contextualizacao', label: '4.1 Contextualização' },
        { key: 'aplicabilidade', label: '4.2 Aplicabilidade' },
        { key: 'atualidade', label: '4.3 Atualidade' },
        { key: 'original', label: '5.1 Análise Original' },
        { key: 'valor', label: '5.2 Valor Agregado' },
        { key: 'extensao', label: '6.1 Extensão' },
        { key: 'densidade', label: '6.2 Densidade' },
        { key: 'citacoes_score', label: '7.1 Citações' },
        { key: 'limitacoes', label: '7.2 Limitações' }
    ];

    criteriaList.forEach(crit => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td style="padding: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1);">${crit.label}</td>`;

        Object.values(toolsData).forEach(tool => {
            const score = tool.scores[crit.key];
            let color = '#f87171';
            if (score >= 9) color = '#4ade80';
            else if (score >= 7) color = '#60a5fa';
            else if (score >= 5) color = '#fbbf24';

            tr.innerHTML += `
                <td style="padding: 1rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="color: ${color}; font-weight: bold;">${score}</span>
                </td>
            `;
        });
        container.appendChild(tr);
    });
}

function renderCharts() {
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

    // Bar Chart - Total Score
    const chartTotal = document.getElementById('chart-total');
    if (chartTotal) {
        new Chart(chartTotal, {
            type: 'bar',
            data: {
                labels: Object.values(toolsData).map(t => t.name),
                datasets: [{
                    label: 'Pontuação Total',
                    data: Object.values(toolsData).map(t => t.total),
                    backgroundColor: Object.values(toolsData).map(t => t.color),
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true, max: 190 }
                }
            }
        });
    }

    // Radar Chart - Categories
    const chartRadar = document.getElementById('chart-radar');
    if (chartRadar) {
        const radarDatasets = Object.values(toolsData).slice(0, 3).map(tool => { // Top 3 only for clarity
            const data = categorias.map(cat => {
                return cat.criteria.reduce((sum, c) => sum + tool.scores[c], 0) / cat.max * 100;
            });

            return {
                label: tool.name,
                data: data,
                borderColor: tool.color,
                backgroundColor: tool.color + '33', // 20% opacity
                fill: true
            };
        });

        new Chart(chartRadar, {
            type: 'radar',
            data: {
                labels: categorias.map(c => c.nome),
                datasets: radarDatasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(255,255,255,0.1)' },
                        grid: { color: 'rgba(255,255,255,0.1)' },
                        pointLabels: { color: '#fff', font: { size: 12 } },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }

    // Volume Comparison Chart
    const chartVolume = document.getElementById('chart-volume');
    if (chartVolume) {
        new Chart(chartVolume, {
            type: 'bar',
            data: {
                labels: Object.values(toolsData).map(t => t.name),
                datasets: [
                    {
                        label: 'Palavras',
                        data: Object.values(toolsData).map(t => t.palavras),
                        backgroundColor: '#10b981',
                        yAxisID: 'y'
                    },
                    {
                        label: 'Citações',
                        data: Object.values(toolsData).map(t => t.citacoes),
                        backgroundColor: '#3b82f6',
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: { display: true, text: 'Palavras' }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false,
                        },
                        title: { display: true, text: 'Citações' }
                    },
                }
            }
        });
    }
}

function renderInsights() {
    const container = document.getElementById('insights-container');
    if (!container) return;
    Object.entries(toolsData).forEach(([key, tool]) => {
        const analysis = criticalAnalysis[key];

        const div = document.createElement('div');
        div.className = 'glass-card'; // Updated to match dashboard style
        div.style.marginBottom = '2rem';
        div.style.padding = '2rem';
        div.style.borderLeft = `4px solid ${tool.color}`;

        div.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border-radius: 50%; padding: 8px;">
                    ${renderLogo(tool)}
                </div>
                <div>
                     <h3 style="font-size: 1.5rem; color: ${tool.color};">${tool.name}</h3>
                     <p style="color: var(--text-secondary);">${tool.rank}º lugar • ${tool.classification}</p>
                </div>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                <strong style="color:white;">💡 Diferencial:</strong> ${analysis.differential}
            </div>

            ${analysis.why_won ? `
                <div style="margin-bottom: 1rem;">
                    <strong style="color: #4ade80;">🏆 Destaques:</strong>
                    <ul style="margin-left: 1.5rem; margin-top: 0.5rem; color: var(--text-secondary);">
                        ${analysis.why_won.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

             ${analysis.why_lost ? `
                <div style="margin-bottom: 1rem;">
                    <strong style="color: #f87171;">⚠️ Pontos Críticos:</strong>
                    <ul style="margin-left: 1.5rem; margin-top: 0.5rem; color: var(--text-secondary);">
                         ${analysis.why_lost.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                <strong style="color: #60a5fa;">🎯 Quando usar:</strong>
                <p style="margin-top: 0.25rem; color: var(--text-secondary);">${analysis.when_to_use}</p>
            </div>
        `;

        container.appendChild(div);
    });
}
