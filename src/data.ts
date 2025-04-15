import katuMirim1 from './assets/katu-mirim1.webp'
import katuMirim2 from './assets/katu-mirim2.webp'

import esperancaGarcia1 from './assets/esperanca-garcia1.webp'
import esperancaGarcia2 from './assets/esperanca-garcia2.webp'
import esperancaGarcia3 from './assets/esperanca-garcia3.webp'
import esperancaGarcia4 from './assets/esperanca-garcia4.webp'

import dandaraPalmares1 from './assets/dandara-palmares1.webp'
import dandaraPalmares2 from './assets/dandara-palmares2.webp'
import dandaraPalmares3 from './assets/dandara-palmares3.webp'
import dandaraPalmares4 from './assets/dandara-palmares4.webp'

import soniaGuajajara1 from "./assets/sonia-guajajara1.jpg"
import soniaGuajajara2 from "./assets/sonia-guajajara2.jpg"
import soniaGuajajara3 from "./assets/sonia-guajajara3.jpg"
import soniaGuajajara4 from "./assets/sonia-guajajara4.png"

import tiaCiata1 from "./assets/tia-ciata1.jpg"
import tiaCiata2 from "./assets/tia-ciata2.jpg"

import terezaBenguela1 from "./assets/tereza-benguela1.jpg"
import terezaBenguela2 from "./assets/tereza-benguela2.jpg"
import terezaBenguela3 from "./assets/tereza-benguela3.jpg"


export interface Paragraph {
    name: string,
    text: string,
    imagePath?: string
}

export interface IWomanData {
    name: string,
    paragraphs: Array<Paragraph>
}


//=======================

export const womanData = <Array<IWomanData>>[
    {
        name: "Katú Mirim",
        paragraphs: [
            {
                name: "Biografia",
                text: "Katú Mirim é uma rapper, cantora, compositora, atriz e ativista da causa indígena. Katú Mirim é reconhecida por suas letras, que através do rap/rock, reconta a história da colonização pela ótica indígena, através do rap ela fala das suas vivências, identidade, gênero e orientação sexual.\nKatú mirim nasceu e cresceu  no interior paulista, ainda bebê foi adotada  e na infância descobriu que foi adotada ao completar seus 13 anos ela descobriu ser filha biológica de pai indígena e mãe negra, logo ela foi atrás da história do seu pai e estudou sua cultura,e assim se declarou indígena boe bororo.",
                imagePath: katuMirim1
            },
            {
                name: "Sua importância",
                text: "Ela ficou conhecida em 2017, quando criou a hashtag \"#indionaoefantasia\" para debater o uso indevido de símbolos indígenas. No mesmo ano, lançou sua carreira no rap com a música \"Aguyjevete\", falando sobre resistência indígena e negra. Katú também fundou o movimento \"Visibilidade Indígena\", lutando pela representatividade e pelos direitos dos povos indígenas.\nAlém da música, ela já participou de eventos como o São Paulo Fashion Week e o Rock in Rio, e trabalhou com marcas como Levi's e Converse. Em 2019, fundou o coletivo Tibira, voltado para indígenas LGBTQ+.",
                imagePath: katuMirim2
            }
        ]
    },
    {
        name: "Esperança Garcia",
        paragraphs: [
            {
                name: "Biografia",
                text: "Esperança Garcia, considerada a 1 mulher advogada do brasil. escravizada que se destacou pela luta contra o racismo e por direitos humanos. Garcia Esperança foi uma líder importante no Quilombo do Ribeirão, ela organizou a comunidade quilombola e defendeu seus direitos contra as forças coloniais. Além de sua atuação militar, Garcia também preservou as tradições africanas, transmitindo conhecimentos sobre medicina herbal e práticas culturais. Seu legado simboliza a resistência feminina e a luta por liberdade, inspirando muitas mulheres até hoje",
                imagePath: esperancaGarcia1
            },
            {
                name: "",
                text: "Ela é considerada a 1ª mulher advogada do Brasil. Conhecida por sua coragem e resistência na luta pela liberdade de seu povo. Esperança nasceu em uma fazenda de propriedade dos jesuítas, onde hoje fica o município de Nazaré do Piauí. Aos 9 anos de idade, quando a ordem foi expulsa do Piauí pelo Marquês de Pombal, ela foi levada como escrava para a casa do capitão Antônio Vieira de Couto. Aos 16 anos, teve seu primeiro filho.",
                imagePath: esperancaGarcia2
            },
            {
                name: "",
                text: "Em 6 de setembro de 1770, escreveu uma carta ao governador da Capitania do Piauí, Gonçalo Lourenço Botelho de Castro, denunciando os maus-tratos que sofria. Pedia ainda para retornar à Fazenda Algodões e para ter sua filha batizada. Fugiu pouco depois, reaparecendo numa relação de trabalhadores escravizados da Fazenda Algodões, datada de 1778, casada com o angolano Ignácio e com sete filhos.",
                imagePath: esperancaGarcia3
            },
            {
                name: "",
                text: "A carta de Esperança Garcia é considerada a primeira petição escrita por uma mulher na história do Brasil, o que a torna uma precursora da advocacia no país e no estado do Piauí. Também é um documento importante na origem da literatura afro-brasileira. \n Na data de envio, 6 de setembro, é comemorado o Dia Estadual da Consciência Negra no Piauí. Em 2017, o Memorial Zumbi Palmares, espaço dedicado à cultura negra em Teresina, foi reformado e reinaugurado com o nome de Memorial Esperança Garcia.",
                imagePath: esperancaGarcia4
            }
        ]
    },
    {
        name: "Dandara dos Palmares",
        paragraphs: [
            {
                name: "Quem foi Dandara?",
                text: "Dandara dos Palmares foi uma líder crucial na luta contra a escravidão no Brasil colonial e se tornou um símbolo de resistência e liberdade. Nascida provavelmente no Nordeste, foi escravizada antes de escapar para o Quilombo dos Palmares, onde desempenhou papel central na defesa e organização das batalhas contra as forças coloniais. Palmares era uma rede de comunidades autônomas formadas por africanos escravizados que fugiam das fazendas e engenhos de cana-de-açúcar, indígenas e mestiços.",
                imagePath: dandaraPalmares1
            },
            {
                text: "Dandara defendia a ideia de que os habitantes de Palmares não deveriam se render às propostas de paz oferecidas pelos colonizadores, que frequentemente incluíam a submissão e a volta à escravidão.\nCasada com Zumbi dos Palmares, uma das principais lideranças do quilombo, e juntos tiveram três filhos: Aristogíton, Harmódio e Motumbo. A parceria deles simboliza a união na luta pela liberdade e resistência contra a opressão da escravidão. E como ele, também lutou com armas pela libertação total das negras e negros no Brasil; liderava mulheres e homens, também tinha objetivos que iam às raízes do problema e, sobretudo, não se encaixava nos padrões de gênero que ainda hoje são impostos às mulheres.",
                imagePath: dandaraPalmares2
            },
            {
                text: "Conhecida como uma guerreira destemida, Dandara era habilidosa em capoeira e se envolveu ativamente na defesa do quilombo contra os ataques das forças coloniais portuguesas. Ela não só lutava nas batalhas, mas também ajudava a planejar estratégias de resistência, mostrando que possuía tanto força física quanto inteligência. Além de suas atividades militares, Dandara participava das tarefas diárias em Palmares, como caça e agricultura, contribuindo para a sobrevivência da comunidade.",
                imagePath: dandaraPalmares3
            },
            {
                text: "Dandara foi uma aliada estratégica na luta pela liberdade. Apesar da destruição do Quilombo em 1694, sua coragem e determinação foram fundamentais para o legado de resistência. Sua morte, Em 6 de fevereiro de 1694, após uma intensa ofensiva das tropas coloniais que levou à destruição de Palmares. Recusando-se a voltar à condição de escravizada, ela fez a escolha corajosa de tirar a própria vida, referindo isso a perder sua liberdade e dignidade.\nAté hoje, Dandara é lembrada como uma figura de luta pela liberdade, justiça e igualdade, inspirando movimentos sociais, culturais e educacionais, especialmente no contexto da resistência das mulheres negras e da luta por direitos humanos no Brasil.",
                imagePath: dandaraPalmares4
            }
        ]
    },
    {
        name: "Sônia Guajajara",
        paragraphs: [
            {
                name: "Biografia",
                text: "Sônia Guajajara, nascida em 6 de março de 1974 na Terra Indígena Arariboia, Maranhão, é uma proeminente líder indígena e política brasileira, pertencente ao povo Guajajara/Tenetehara. Sua trajetória é marcada pela defesa dos direitos dos povos indígenas e pela luta por justiça social e ambiental.\nSonia enfrentou desafios comuns a muitas comunidades indígenas, como a falta de acesso à educação e a violação de direitos territoriais.",
                imagePath: soniaGuajajara1
            },
            {
                name: "Biografia",
                text: "Aos 15 anos, contrariando a vontade dos pais, deixou sua terra natal para estudar o ensino médio em Minas Gerais, com o suporte da Funai. Após concluir essa etapa, retornou ao Maranhão e graduou-se em Letras e Enfermagem pela Universidade Estadual do Maranhão (UEMA), além de realizar pós-graduação em Educação Especial.\nSua militância iniciou-se na Coordenação das Organizações e Articulações dos Povos Indígenas do Maranhão (COAPIMA), posteriormente integrando a Coordenação das Organizações Indígenas da Amazônia Brasileira (COIAB).",
                imagePath: soniaGuajajara2
            },
            {
                name: "Biografia",
                text: "Ganhou destaque nacional e internacional ao assumir a coordenação executiva da Articulação dos Povos Indígenas do Brasil (APIB), organização que representa e articula as lutas dos povos indígenas em nível nacional e internacional. Sob sua liderança, a APIB ganhou visibilidade global, denunciando as ameaças aos territórios indígenas e ao meio ambiente, representando os povos indígenas em diversos fóruns globais, incluindo o Conselho de Direitos Humanos da ONU, onde defende a importância dos povos indígenas na proteção das florestas e na mitigação das mudanças climáticas, e o Parlamento Europeu.",
                imagePath: soniaGuajajara3
            },
            {
                name: "Biografia",
                text: "Em 2018, candidatou-se a vice-presidente pelo PSOL. Em 2022, foi eleita deputada federal por São Paulo e tornou-se a primeira ministra dos Povos Indígenas do Brasil no governo Lula. Reconhecida internacionalmente, foi incluída na lista das 100 pessoas mais influentes do mundo pela Time em 2022 e das 100 mulheres mais inspiradoras pela BBC em 2023. Sônia Guajajara emergiu como uma das vozes mais influentes do movimento indígena no Brasil.",
                imagePath: soniaGuajajara4
            }
        ]
    }, 
    {
        name: "Tereza de Benguela",
        paragraphs: [
            {
                text: "Tereza de Benguela foi uma líder quilombola do século XVIII, conhecida por sua resistência contra a escravidão no Brasil. Ela liderou o Quilombo do Quariterê, localizado na região onde hoje é o Mato Grosso, após a morte de seu companheiro, José Piolho. Sob sua liderança, o quilombo prosperou por duas décadas, resistindo a investidas das forças coloniais.",
                imagePath: terezaBenguela1
            },
            {
                text: "Tereza organizou uma estrutura política e econômica auto suficiente, baseada na agricultura, no artesanato e no comércio. Além disso, o quilombo mantinha um sistema de defesa contra ataques dos portugueses. Infelizmente, em 1770, o quilombo foi destruído pelas tropas da coroa portuguesa, e Tereza foi capturada e morta.",
                imagePath: terezaBenguela2
            },
            {
                text: "Seu legado simboliza a luta das mulheres negras e quilombolas por liberdade e igualdade. Em reconhecimento à sua importância, o dia 25 de julho, Dia da Mulher Negra, Latina e Caribenha, foi oficializado no Brasil como Dia Nacional de Tereza de Benguela e da Mulher Negra.",
                imagePath: terezaBenguela3
            }
        ]
    },
    {
        name: "Tia Ciata",
        paragraphs: [
            {
                text: "Hilária Batista de Almeida, mais conhecida como Tia Ciata, foi uma personalidade negra de grande importância para a cultura brasileira. Ela viveu na segunda metade do século XIX e teve papel essencial na criação e difusão do samba. Ciata era mãe de santo e morava em uma casa na Praça Onze, no Rio de Janeiro. Lá recebia muitos músicos e abria espaço para que cantassem e tocassem em um momento em que o samba era proibido por lei. Acredita-se que foi em seu quintal onde surgiu o primeiro samba gravado, que se chamou Pelo Telefone, de autoria atribuída ao sambista Donga.",
                imagePath: tiaCiata1
            },
            {
                text: "Nascida em 13 de janeiro de 1854 no Recôncavo Baiano, ainda jovem iniciou-se na Irmandade da Boa Morte, associação afro-católica que cultuava os orixás e ancestralidade africana. Ciata se mudou para a cidade do Rio de Janeiro em 1876, aos 22 anos e com uma filha. Ao se instalar em terras cariocas, a baiana leva referências do samba de roda (originário do Recôncavo Baiano), além de conhecimentos de ervas e culto aos orixás. Ciata se casa com João Baptista da Silva, um funcionário público, e com ele tem 14 filhos.",
                imagePath: tiaCiata2
            }
        ]
    }
];

export const sources = [
    "https://pt.wikipedia.org/wiki/Katú_Mirim",
    "https://pt.wikipedia.org/wiki/Esperança_Garcia",
    "https://www.conjur.com.br/2022-nov-26/negra-escravizada-reconhecida-primeira-advogada-pais/",
    "https://pt.wikipedia.org/wiki/Sônia_Guajajara",
    "https://brasilescola.uol.com.br/historia/dandara-dos-palmares.htm",
    "https://pt.wikipedia.org/wiki/Tereza_de_Benguela",
    "https://www.ebiografia.com/tia_ciata/",
]