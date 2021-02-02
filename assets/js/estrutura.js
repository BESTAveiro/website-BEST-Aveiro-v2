/*
Depedendecies:
in index.html:


*/

$(document).ready(function () {

    var language = {
        navbar: {
            page: "index-en.html",
            abouts: "Sobre",
            events: "Eventos",
            teams: "Equipas",
            board: "Direção",
            partners: "Parceiros",
            contacts: "Contactos",
            language: "EN",
            pageLanguage: "indexEn.html"
        },
        abouts: {
            text01: "O BEST é uma organização europeia sem fins "+
                    "lucrativos e apolítica de estudantes de Ciências, "+
                    "Engenharia e Tecnologia, presente, através de 93 grupos locais, "+
                    "em 34 países, com cerca de 3000 membros e abrangendo "+
                    "aproximadamente 1 milhão de estudantes.",
            text02: "O BEST Aveiro é um dos 93 grupos locais "+
                    "do BEST, uma organização europeia de estudantes de Ciências, Engenharia e Tecnologia que trabalham "+
                    "cooperativamente para a prestação dos vários serviços "+
                    "que a organização disponibiliza.",
            btn: "Ler mais",
            btn2: "Ler mais"
        },
        events: {
            title: "Eventos",
            textEbec: "Conhece a maior competição <br>de engenharia da Europa!",
            textInnov: "Gostas de inovação? <br>Este é o evento ideal para ti.",
            textCourses: "A melhor combinação entre <br> aprendizagem e entretenimento."
        },
        teams: {
            title: "Equipas",
            titleCnt: "Conteúdo Académico",
            titleMkt: "Marketing e Relações Públicas",
            titleHR: "Recursos Humanos",
            titleIT: "Tecnologias de Informação",
            titleFR: "Relações Empresariais",
            textCnt: "Garantir o desenvolvimento do conteúdo académico dos "+
                     "eventos externos da Associação de forma diversificada e inovadora.",
            textMkt: "Garantir a divulgação e promoção da Associação e suas atividades.",
            textHR: "Organizar e estimular atividades de integração e"+
                    "motivação para os membros da Associação.",
            textIT: "Criar, manter e gerir os recursos tecnológicos da Associação.",
            textFR: "Criar, manter e gerir as relações corporativas da Associação.",
        },
        mgmt: {
            boardtitle: "Direção",
            president: "Presidente",
            treasurer: "Tesoureira",
            secretary: "Secretária",
            vphr: "Vice Presidente para Recursos Humanos",
            vpis: "Vice Presidente para Suporte Interno",
            mgmttitle: "Coordenadores",
            mkt: "Marketing e Relações Públicas",
            cnt: "Conteúdo Académico",
            it: "Tecnologias de Informação",
            fr: "Relações Empresariais"
        },
        partners: {
            title: "Parceiros"
        },
        contacts: {
            title: "Contactos",
            addresstitle: "Morada:",
            address: "Incubadora de Empresas da Universidade de Aveiro<br/>"+
                     "Campus Universitário de Santiago, Edifício 1<br/>"+
                     "3810-193 Aveiro<br/>"+
                     "Portugal",
            teltitle: "Telefone:"
           
        },
        modalBEST: {
            p1: "O BEST (Board of European Students of Technology) é uma organização "+
                "europeia sem fins lucrativos e apolítica de estudantes de Ciências, Engenharia e Tecnologia, "+
                "presente em 96 universidades de 34 países, com cerca de 3000 membros "+
                "e abrangendo aproximadamente 1 milhão de estudantes.<br>",
            mission: "Missão",
            missionText: "A missão do BEST é desenvolver os estudantes, dando-lhes a oportunidade "+
                         "de complementar o seu percurso académico e desenvolver soft-skills, num ambiente "+
                         "multicultural para compreensão da sociedade e melhor adaptação a um mercado "+
                         "de trabalho globalizado. Assim, o BEST visa, através dos seus eventos, "+
                         "aproximar estudantes, universidades e empresas.",
            vision: "Visão",
            visionText: "A visão do BEST é baseada na criação de um ambiente de diversidade, "+
                       "entre os estudantes, propício à aprendizagem, compreensão e respeito pelas "+
                       "diferentes culturas e backgrounds sociais, bem como à preparação dos estudantes para "+
                       "um mercado de trabalho global. O BEST acredita que os ambientes culturalmente enriquecidos "+
                       "aumentam a probabilidade de sucesso de um grupo de trabalho.",
            site: "Visita a página oficial"
        },
        modalLBG: {
            organization: "Organização",
            p1: "O BEST Aveiro é um dos 96 grupos locais do BEST - Board of European Students of Technology, "+
                "uma organização europeia de estudantes de Ciências, Engenharia e Tecnologia, presente em 97 universidades "+
                "de 34 países, que trabalham cooperativamente para a prestação dos vários serviços que a organização disponibiliza.<br>",
            p2: "O grupo local do BEST em Aveiro foi "+
                "fundado em 2008, sob a liderança de Eric Bosne, que tinha como objetivo desenvolver as suas capacidades "+
                "académicas, partilhar experiências e conhecer novas pessoas, tanto em Portugal como no estrangeiro, contagiando "+
                "alguns colegas com a mesma vontade. ",
            p3: "Esta é uma organização de e para estudantes, trabalhando em prol do desenvolvimento pessoal, académico e cultural dos mesmos, "+
                "oferecendo diversas oportunidades de formação complementar e intercâmbio. Para tal, o BEST Aveiro organiza anualmente:",
            events: {
                courses: "Curso Sazonal",
                ebec: "Competição de engenharia EBEC Aveiro (European BEST Engineering Competition)",
                btd: "BEST Training Days, durante todo o ano"
            },
            city: "Cidade",
            p1c: "Aveiro é uma pitoresca cidade portuguesa, conhecida como a 'Veneza de Portugal'. "+
                 "Capital do distrito de Aveiro, situa-se na região Centro, com cerca de "+
                 "60 000 habitantes. Foi elevada a cidade em 1759 por D.José I.",
            p2c: "A atribuição da alcunha de “Veneza Portuguesa” deve-se ao facto de a cidade apresentar um território descontínuo, com um grande número de ramais da "+
                 "Ria de Aveiro a fazer a divisão do território. Esta zona pertence à bacia do Rio Vouga, que ao chegar a Aveiro "+
                 "se divide em inúmeros canais criando uma paisagem única. A existência destes canais deu origem à atividade da "+
                 "“apanha do moliço”, que era usado nos séculos passados para a produção de adubo que fornecia as terras agrícolas "+
                 "da região. Esta atividade era realizada com recurso aos barcos moliceiros que ainda hoje se podem encontrar no "+
                 "centro da cidade, embora sejam utilizados apenas para fins turísticos. Estes barcos são um dos ex-libris desta "+
                 "região, sendo muito apreciados pelas suas cores e pela decoração que é normalmente humorística, fazendo alusão a "+
                 "situações do quotidiano.",
            p3c: "A doçaria de Aveiro é também bastante reconhecida, principalmente devido aos ovos moles exclusivamente produzidos na cidade.",
            p4c: "Outra das marcas da cidade Aveirense são as salinas, que eram utilizadas para a produção de sal ainda antes da fundação de Portugal. Devido à "+
                 "produção e comercialização de sal a zona portuária de Aveiro cresceu e tornou-se também o principal ponto "+
                 "nacional ao nível da pesca e seca do bacalhau. Atualmente as salinas estão na sua maioria desativadas, ou "+
                 "convertidas em viveiros piscícolas. Os antigos armazéns de sal no canal de São Roque estão hoje a ser "+
                 "convertidos principalmente em bares e restaurantes, de forma a preservar o património cultural da cidade.",
            p5c: "Para além do reconhecimento como cidade marítima, Aveiro tem uma forte identidade industrial e um porto bastante importante.",
            uni: "Universidade",
            textuni: "A Universidade de Aveiro, com cerca de 15 000 alunos e fundada em 1973, é uma universidade de renome nacional, assim como de renome europeu, devido à "+
                     "alta qualidade da sua investigação em diversas áreas (sendo que, em média, cada docente publica 1,5 artigos científicos por ano), do seu corpo docente e das suas infraestruturas.<br><br> "+
                     "A área do seu campus é equivalente a cerca de 92 campos de futebol, com 65 edifícios (alguns dos quais grandes obras arquitetónicas) e 15 blocos de residências. Incluem-se: ",
            list: {
                refectory: "Refeitórios",
                library: "Bibliotecas",
                bookstore: "Livrarias",
                conference: "Salas para conferências e espetáculos",
                gallery: "Galerias para exposições",
                square: "Pavilhão desportivo",
                track: "Pista de atletismo",
                laundry: "Lavandarias",
                mail: "Correios",
                bank: "Banco",
                store: "Lojas"
            }
            
        }
        

    };

    var vm = {
        body: ko.observable(language),
    };
    ko.applyBindings(vm);
});
