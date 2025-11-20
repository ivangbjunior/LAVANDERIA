import React, { useState } from 'react';
import { 
  WashingMachine, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Leaf, 
  Building2, 
  Smartphone, 
  ShieldCheck,
  Users,
  Award,
  Home,
  HelpCircle,
  Zap,
  BarChart3,
  FileText,
  Menu,
  X,
  ClipboardCheck,
  Rocket,
  Armchair,
  Tv,
  Wifi,
  Wind,
  Shirt,
  ShoppingBasket,
  Droplets
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ----------------------------------------------------------------------
// CONFIGURAÇÃO DE IMAGENS & DADOS
// ----------------------------------------------------------------------

const LOGO_URL = "https://cdn-icons-png.flaticon.com/512/2928/2928883.png"; 

// Definição dos menus baseados nos slides anteriores
const MENU_ITEMS = [
  { id: 'intro', label: 'Início', icon: Home },
  { id: 'nossa-empresa', label: 'Nossa Empresa', icon: Users },
  { id: 'conceito', label: 'O Conceito', icon: HelpCircle },
  { id: 'beneficios', label: 'Benefícios', icon: Zap },
  { id: 'como-funciona', label: 'Como Funciona', icon: WashingMachine },
  { id: 'custos', label: 'Custos', icon: DollarSign },
  { id: 'resultados', label: 'Resultados', icon: BarChart3 },
  { id: 'ambiente', label: 'Ambiente', icon: Armchair },
  { id: 'proximo-passo', label: 'Próximo Passo', icon: ClipboardCheck },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'intro': return <SlideIntro />;
      case 'nossa-empresa': return <SlideNossaEmpresa />;
      case 'conceito': return <SlideConceito />;
      case 'beneficios': return <SlideBeneficios />;
      case 'como-funciona': return <SlideComoFunciona />;
      case 'custos': return <SlideCustos />;
      case 'resultados': return <SlideResultados />;
      case 'ambiente': return <SlideAmbiente />;
      case 'proximo-passo': return <SlideProximoPasso />;
      default: return <SlideIntro />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-700 overflow-hidden">
      
      {/* ---------------------------------------------------------------------------
         SIDEBAR (MENU LATERAL)
      --------------------------------------------------------------------------- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-brand-900 text-white transform transition-transform duration-300 ease-in-out shadow-2xl
        md:relative md:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-brand-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold">AL</div>
            <span className="font-bold text-lg tracking-tight">All Laundry</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-brand-200">
            <X />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm
                  ${isActive 
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-900/50 translate-x-1' 
                    : 'text-brand-100 hover:bg-brand-800 hover:text-white'}
                `}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 w-full p-6 bg-brand-950/30">
          <p className="text-xs text-brand-400 uppercase font-bold mb-1">Apresentação</p>
          <p className="text-sm text-brand-100">Residencial Turim</p>
        </div>
      </aside>

      {/* ---------------------------------------------------------------------------
         CONTEÚDO PRINCIPAL
      --------------------------------------------------------------------------- */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Header Mobile */}
        <div className="md:hidden p-4 bg-white shadow-sm flex items-center justify-between z-40">
          <span className="font-bold text-brand-900">All Laundry</span>
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-brand-900">
            <Menu />
          </button>
        </div>

        {/* Área de Scroll do Conteúdo */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-50 p-4 md:p-8 lg:p-12 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="max-w-6xl mx-auto min-h-full flex flex-col justify-center"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
        </div>

      </main>
    </div>
  );
};

/* --------------------------------------------------------------------------
   COMPONENTES DE PÁGINA (ANTIGOS SLIDES)
-------------------------------------------------------------------------- */

const SlideIntro: React.FC = () => (
  <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
    <div className="inline-block px-6 py-2 bg-brand-100 text-brand-800 rounded-full text-sm font-bold tracking-wide uppercase mb-8">
      Proposta para Assembleia
    </div>
    
    <h1 className="text-6xl md:text-8xl font-extrabold text-brand-950 leading-none tracking-tight mb-6">
      All Laundry <br/>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
        Lavanderia Express
      </span>
    </h1>
    
    <p className="text-2xl md:text-3xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed mb-12">
      A solução moderna que traz economia, praticidade e valorização imediata para o seu patrimônio.
    </p>

    {/* Elementos decorativos de fundo */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-200 rounded-full filter blur-3xl opacity-20 -z-10 animate-pulse pointer-events-none"></div>
    
    <div className="grid grid-cols-3 gap-8 opacity-60">
      <div className="flex flex-col items-center gap-2">
        <div className="p-4 bg-white shadow-lg rounded-full text-brand-600"><DollarSign size={24}/></div>
        <span className="text-sm font-bold text-slate-400 uppercase">Zero Custo</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="p-4 bg-white shadow-lg rounded-full text-brand-600"><ShieldCheck size={24}/></div>
        <span className="text-sm font-bold text-slate-400 uppercase">Segurança</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="p-4 bg-white shadow-lg rounded-full text-brand-600"><Clock size={24}/></div>
        <span className="text-sm font-bold text-slate-400 uppercase">Praticidade</span>
      </div>
    </div>
  </div>
);

const SlideNossaEmpresa: React.FC = () => (
  <div className="w-full">
    <div className="mb-12 border-b border-slate-200 pb-6">
      <h2 className="text-4xl font-bold text-brand-900">Nossa Empresa</h2>
      <p className="text-xl text-slate-500 mt-2">Soluções completas em lavanderia de autosserviço.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-brand-100 relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-2xl font-bold text-brand-900 mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-brand-600"/> Nossa Missão
            </h4>
            <p className="text-slate-600 text-lg leading-relaxed">
              Levar praticidade, economia e tecnologia para melhorar o dia a dia dos moradores, 
              transformando áreas comuns ociosas em espaços valorizados e funcionais.
            </p>
          </div>
          <WashingMachine className="absolute -bottom-10 -right-10 w-48 h-48 text-brand-50 opacity-80 rotate-12"/>
        </div>

        <div className="space-y-6">
          <DifferentiatorItem text="Operação totalmente automatizada" />
          <DifferentiatorItem text="Equipamentos Industriais de alta durabilidade" />
          <DifferentiatorItem text="Suporte rápido e especializado" />
          <DifferentiatorItem text="Sistema via aplicativo fácil de usar" />
          <div className="bg-brand-900 text-white p-6 rounded-2xl mt-8">
            <p className="font-medium">
              "Não apenas instalamos máquinas, criamos um ambiente de convivência e utilidade real para o condomínio."
            </p>
          </div>
        </div>
    </div>
  </div>
);

const SlideConceito: React.FC = () => (
  <div className="w-full">
    <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full filter blur-[100px] opacity-20"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">O Conceito Autosserviço</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            O modelo consagrado nos EUA e Europa, agora trazendo modernidade e eficiência para dentro do seu condomínio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <ConceptIcon icon={<WashingMachine size={32}/>} title="Industrial" desc="Lava e Seca Profissional" />
          <ConceptIcon icon={<Smartphone size={32}/>} title="Digital" desc="Pagamento via App/Pix" />
          <ConceptIcon icon={<Users size={32}/>} title="Autônoma" desc="Sem funcionários locais" />
          <ConceptIcon icon={<Clock size={32}/>} title="Rápida" desc="Ciclos de ~40 min" />
          <ConceptIcon icon={<ShieldCheck size={32}/>} title="Segura" desc="Monitoramento 24h" />
        </div>
      </div>
    </div>
  </div>
);

const SlideBeneficios: React.FC = () => (
  <div className="w-full">
    <div className="mb-10">
       <h2 className="text-4xl font-bold text-brand-900">Benefícios Reais</h2>
       <p className="text-lg text-slate-500">Vantagens diretas para moradores e administração.</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6">
      <BenefitCard 
        icon={<Users className="text-blue-500 w-8 h-8" />}
        title="Conforto e Praticidade"
        items={[
          "Evita máquinas nos aptos",
          "Reduz umidade e mofo",
          "Fim do barulho nas unidades",
          "Libera espaço na área de serviço",
          "Segurança: serviço 24h dentro do condomínio"
        ]}
      />
      <BenefitCard 
        icon={<DollarSign className="text-green-600 w-8 h-8" />}
        title="Economia Real"
        items={[
          "Renda extra para o condomínio",
          "Menor conta de energia",
          "Instalação SEM CUSTO",
          "Valorização do imóvel"
        ]}
      />
      <BenefitCard 
        icon={<Leaf className="text-brand-600 w-8 h-8" />}
        title="Sustentabilidade"
        items={[
          "Máquinas industriais econômicas",
          "Menor uso de produtos químicos",
          "Consumo consciente"
        ]}
      />
    </div>
  </div>
);

const SlideComoFunciona: React.FC = () => (
  <div className="w-full">
    <div className="mb-12 text-center md:text-left">
       <h2 className="text-4xl font-bold text-brand-900">Ciclo de Implementação</h2>
       <p className="text-xl text-slate-600 mt-2">
         Do projeto à operação: cuidamos de tudo.
       </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
       <Step number="1" title="Projeto Personalizado" desc="Adequamos o layout ao espaço disponível no condomínio." />
       <Step number="2" title="Reforma e Instalação" desc="Toda a infraestrutura e obra civil é por nossa conta." />
       <Step number="3" title="Gestão Completa" desc="Manutenção preventiva, limpeza e insumos inclusos." />
       <Step number="4" title="Operação Digital" desc="100% controlada por App, sem necessidade de fichas." />
       <Step number="5" title="Suporte e Reposição" desc="Equipe técnica dedicada para atender qualquer chamado." />
       <Step number="6" title="Dosagem Automática" desc="Sabão e amaciante injetados automaticamente na máquina." />
    </div>
  </div>
);

const SlideCustos: React.FC = () => (
  <div className="w-full flex flex-col items-center">
    <h2 className="text-4xl font-bold text-brand-900 mb-10 text-center">Custos e Responsabilidades</h2>
       
    <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
      {/* Coluna All Laundry */}
      <div className="bg-brand-600 text-white rounded-3xl p-10 shadow-2xl transform hover:-translate-y-1 transition-transform duration-300">
         <div className="flex items-center gap-4 mb-8 border-b border-brand-500 pb-6">
            <div className="bg-white/20 p-3 rounded-xl">
              <WashingMachine className="w-8 h-8"/>
            </div>
            <h3 className="text-3xl font-bold">All Laundry</h3>
         </div>
         <ul className="space-y-6 text-lg">
            <RespItem text="Equipamentos Industriais" light />
            <RespItem text="Obras e Reformas" light />
            <RespItem text="Manutenção Total" light />
            <RespItem text="Sistema e App" light />
            <RespItem text="Sabão e Amaciante" light />
         </ul>
      </div>

      {/* Coluna Condomínio */}
      <div className="bg-white text-slate-700 rounded-3xl p-10 shadow-xl border border-slate-200 flex flex-col h-full">
         <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
            <div className="bg-slate-100 p-3 rounded-xl">
              <Building2 className="w-8 h-8 text-slate-500"/>
            </div>
            <h3 className="text-3xl font-bold">Condomínio</h3>
         </div>
         <div className="flex-grow">
            <ul className="space-y-6 text-lg">
               <li className="flex items-center gap-4">
                  <span className="w-3 h-3 bg-slate-300 rounded-full"></span>
                  Ceder o Espaço
               </li>
               <li className="flex items-center gap-4">
                  <span className="w-3 h-3 bg-slate-300 rounded-full"></span>
                  Pontos de Água/Luz
               </li>
            </ul>
         </div>
         
         <div className="mt-10 bg-green-50 border border-green-200 p-8 rounded-2xl text-center">
            <p className="text-sm font-bold text-green-800 uppercase mb-2 tracking-wider">Investimento Necessário</p>
            <p className="text-6xl font-extrabold text-green-600 tracking-tight">R$ 0,00</p>
         </div>
      </div>
    </div>
  </div>
);

const SlideResultados: React.FC = () => (
  <div className="w-full h-full flex flex-col justify-center">
    <div className="bg-[#1a2e05] text-white rounded-[2rem] p-12 md:p-16 shadow-2xl text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Resultados Imediatos</h2>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <ResultCard value="100%" label="Mais Praticidade" />
            <ResultCard value="-30%" label="Ruído nos Aptos" />
            <ResultCard value="Zero" label="Investimento" highlighted />
            <ResultCard value="+ Valor" label="Patrimonial" />
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-4xl italic font-light text-brand-100 mb-10 font-serif">
              "Uma atualização moderna que valoriza o patrimônio de todos os condôminos."
            </p>
            <div className="w-24 h-1 bg-brand-500 mx-auto mb-10 rounded-full"></div>
            
            <p className="text-sm text-brand-400 font-bold tracking-[0.3em] uppercase">
                All Laundry Lavanderia Express
            </p>
          </div>
        </div>
    </div>
  </div>
);

const SlideAmbiente: React.FC = () => (
  <div className="w-full">
    <div className="mb-4 border-b border-slate-200 pb-2">
      <h2 className="text-3xl font-bold text-brand-900">Infraestrutura e Ambiente</h2>
      <p className="text-base text-slate-500 mt-1">Um espaço pensado para o seu conforto e praticidade.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <AmenityCard 
        icon={<Wind className="w-5 h-5 text-brand-500" />} 
        title="Ambiente Climatizado" 
        desc="Espaço sempre fresco e ventilado." 
      />
      <AmenityCard 
        icon={<Tv className="w-5 h-5 text-brand-500" />} 
        title="Smart TV" 
        desc="Entretenimento enquanto aguarda." 
      />
      <AmenityCard 
        icon={<Wifi className="w-5 h-5 text-brand-500" />} 
        title="Internet Wi-Fi" 
        desc="Conexão rápida gratuita." 
      />
      <AmenityCard 
        icon={<Armchair className="w-5 h-5 text-brand-500" />} 
        title="Poltronas" 
        desc="Mobiliário para descanso." 
      />
      <AmenityCard 
        icon={<Shirt className="w-5 h-5 text-brand-500" />} 
        title="Bancada de Apoio" 
        desc="Espaço para dobrar roupas." 
      />
      <AmenityCard 
        icon={<ShoppingBasket className="w-5 h-5 text-brand-500" />} 
        title="Cestos Medidores" 
        desc="Facilita o transporte." 
      />
      
      <div className="md:col-span-2 lg:col-span-3 mt-1">
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white p-2 rounded-full shadow-sm">
            <div className="flex gap-2">
              <WashingMachine className="w-5 h-5 text-brand-600" />
              <WashingMachine className="w-5 h-5 text-brand-400" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-brand-900 mb-0">Capacidade de Atendimento</h3>
            <p className="text-slate-600 text-xs">
              <span className="font-bold text-brand-700">Dois Conjuntos</span> (Lavar e Secar) profissionais.
            </p>
          </div>
        </div>
      </div>

      {/* Rodapé Insumos */}
      <div className="md:col-span-2 lg:col-span-3 mt-1">
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
           <div className="flex flex-col gap-1 items-center md:items-start">
              <div className="flex items-center gap-2 text-brand-600">
                <Droplets className="w-4 h-4" />
                <h3 className="text-sm font-bold text-brand-900">Insumos Inclusos</h3>
              </div>
              <p className="text-slate-600 text-[10px] text-center md:text-left">Produtos originais e dosagem automática.</p>
           </div>
           <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
              <div className="flex flex-col items-center">
                 <span className="text-xl font-black text-[#003DA5] tracking-tighter">OMO</span>
                 <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wide">Profissional</span>
              </div>
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="flex flex-col items-center">
                 <span className="text-xl font-bold text-[#E4007E] font-serif italic">Comfort</span>
                 <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wide">Maciez</span>
              </div>
           </div>
        </div>
      </div>

    </div>
  </div>
);

const SlideProximoPasso: React.FC = () => (
  <div className="w-full max-w-4xl mx-auto">
    <div className="mb-12 text-center">
      <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-full mb-4">
        <Rocket className="w-8 h-8 text-brand-600" />
      </div>
      <h2 className="text-4xl font-bold text-brand-900">Próximos Passos</h2>
      <p className="text-xl text-slate-500 mt-2">O caminho para a modernização do seu condomínio começa agora.</p>
    </div>

    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-ml-px"></div>
      <div className="space-y-12">
        <TimelineItem 
          number="01" 
          title="Aprovação na Assembleia" 
          desc="Validação da proposta pelos condôminos e autorização para o síndico prosseguir."
          alignment="left"
        />
        <TimelineItem 
          number="02" 
          title="Vistoria Técnica no Espaço" 
          desc="Nossa equipe de engenharia avalia o local para definir as necessidades hidráulicas e elétricas."
          alignment="right"
        />
        <TimelineItem 
          number="03" 
          title="Assinatura do Contrato" 
          desc="Formalização da parceria em comodato, garantindo segurança jurídica para o condomínio."
          alignment="left"
        />
        <TimelineItem 
          number="04" 
          title="Instalação e Ativação" 
          desc="Execução da obra (se necessária), entrega das máquinas e início da operação."
          alignment="right"
        />
      </div>
    </div>
    
    <div className="mt-16 text-center">
      <button className="bg-brand-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-brand-700 transition-transform hover:scale-105 flex items-center gap-2 mx-auto">
        <ClipboardCheck className="w-6 h-6" />
        Vamos Iniciar?
      </button>
    </div>
  </div>
);

/* --------------------------------------------------------------------------
   SUB-COMPONENTES VISUAIS REUTILIZÁVEIS
-------------------------------------------------------------------------- */

const DifferentiatorItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4 border-brand-500 hover:shadow-md transition-all">
     <CheckCircle2 className="text-brand-500 w-6 h-6 flex-shrink-0" />
     <span className="font-medium text-slate-700 text-lg">{text}</span>
  </div>
);

const ConceptIcon: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
   <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-brand-400/30 group">
      <div className="text-brand-400 mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="font-bold text-white text-lg mb-2">{title}</h4>
      <p className="text-sm text-slate-400 leading-snug">{desc}</p>
   </div>
);

const BenefitCard: React.FC<{ icon: React.ReactNode, title: string, items: string[] }> = ({ icon, title, items }) => (
   <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-left h-full hover:border-brand-200 transition-all hover:-translate-y-1">
      <div className="bg-brand-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-brand-900 mb-5">{title}</h3>
      <ul className="space-y-3">
         {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-600">
               <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2 flex-shrink-0"></span>
               {item}
            </li>
         ))}
      </ul>
   </div>
);

const Step: React.FC<{ title: string, desc: string, number: string }> = ({ title, desc, number }) => (
   <div className="flex gap-5 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
      <div className="w-10 h-10 bg-brand-100 text-brand-700 rounded-lg flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
         {number}
      </div>
      <div>
         <h4 className="font-bold text-lg text-slate-900 mb-1">{title}</h4>
         <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
   </div>
);

const RespItem: React.FC<{ text: string, light?: boolean }> = ({ text, light }) => (
   <li className={`flex items-center gap-4 font-medium text-lg ${light ? 'text-brand-50' : 'text-slate-700'}`}>
      <CheckCircle2 className={`w-6 h-6 flex-shrink-0 ${light ? 'text-brand-300' : 'text-brand-600'}`} />
      {text}
   </li>
);

const ResultCard: React.FC<{ value: string, label: string, highlighted?: boolean }> = ({ value, label, highlighted }) => (
   <div className={`p-8 rounded-3xl border flex flex-col justify-center items-center min-h-[180px] backdrop-blur-sm ${highlighted ? 'bg-yellow-500/20 border-yellow-500/50' : 'bg-white/5 border-white/10'}`}>
      <div className={`text-5xl font-bold mb-3 ${highlighted ? 'text-yellow-400' : 'text-white'}`}>{value}</div>
      <div className="text-brand-100 text-xs uppercase tracking-widest font-bold">{label}</div>
   </div>
);

const TimelineItem: React.FC<{ number: string, title: string, desc: string, alignment: 'left' | 'right' }> = ({ number, title, desc, alignment }) => (
  <div className={`relative flex items-center justify-between md:justify-center w-full mb-8 md:mb-12 ${alignment === 'left' ? 'flex-row-reverse md:flex-row' : ''}`}>
    
    {/* Content Left (Desktop) */}
    <div className={`hidden md:block w-5/12 ${alignment === 'left' ? 'text-right pr-8' : 'pl-8 col-start-2'}`}>
       {alignment === 'left' && (
         <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:border-brand-300 transition-colors">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-500">{desc}</p>
         </div>
       )}
    </div>

    {/* Center Point */}
    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-brand-500 border-4 border-white shadow-sm z-10 text-white font-bold text-sm">
      {number}
    </div>

    {/* Content Right (Desktop) or Mobile Content */}
    <div className={`w-full pl-20 md:w-5/12 md:pl-0 ${alignment === 'right' ? 'md:pl-8' : 'md:pr-8'}`}>
       {/* Mobile View */}
       <div className="md:hidden bg-white p-6 rounded-2xl shadow-md border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-500">{desc}</p>
       </div>

       {/* Desktop Right View */}
       <div className="hidden md:block">
          {alignment === 'right' && (
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:border-brand-300 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500">{desc}</p>
            </div>
          )}
       </div>
    </div>
  </div>
);

const AmenityCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-brand-300 hover:shadow-md transition-all duration-300 group h-full">
    <div className="mb-2 bg-brand-50 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-brand-100 transition-colors">
      {icon}
    </div>
    <h3 className="text-base font-bold text-slate-900 mb-0">{title}</h3>
    <p className="text-slate-500 text-[11px] leading-relaxed">{desc}</p>
  </div>
);

export default App;