"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  FileText,
  Headphones,
  Award,
  TrendingUp,
} from "lucide-react";

const diferenciais = [
  {
    icon: Shield,
    title: "Segurança Jurídica",
    description:
      "Atuação segura em Direito Previdenciário e Trabalhista no ABC/SP, com foco em garantir seus direitos no INSS e na Justiça do Trabalho.",
  },
  {
    icon: Clock,
    title: "Agilidade",
    description:
      "Agilidade no andamento de processos previdenciários, trabalhistas e pedidos de isenção de IR, com acompanhamento direto em Santo André e região.",
  },
  {
    icon: FileText,
    title: "Transparência",
    description:
      "Transparência total no andamento de benefício negado, revisões e perícias do INSS, com atualizações claras em cada etapa.",
  },
  {
    icon: Headphones,
    title: "Atendimento Personalizado",
    description:
      "Atendimento individual em casos de aposentadoria, auxílio acidente, isenção de imposto de renda, isenções para PCD e ações trabalhistas, adaptado à realidade do morador do ABC.",
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description:
      "Mais de 20 anos atendendo segurados do INSS no Grande ABC, incluindo atividades especiais, metalúrgicos, docentes e trabalho insalubre.",
  },
  {
    icon: TrendingUp,
    title: "Foco na Solução",
    description:
      "Diagnóstico rápido para benefício negado, cálculos previdenciários, aposentadoria especial e processos trabalhistas, sempre com foco na solução mais vantajosa.",
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" 
    className="bg-deepnavy py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light mb-4 leading-16"
          >
            Por que contratar um advogado previdenciário e trabalhista no Grande ABC?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-muted text-2xl max-w-4xl mx-auto"
          >
            Atuamos há mais de 20 anos em casos Previdenciários, Trabalhista e Isenções Fiscais no Grande ABC (Santo André, São Bernardo e São Caetano) e Grande São Paulo, com foco em benefício negado, aposentadorias, revisões e direitos do trabalhador.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-navy rounded-2xl p-8 border border-light/10 hover:border-whatsapp/40 transition-colors"
              >
                <div className="w-14 h-14 bg-whatsapp/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-whatsapp/20 transition-colors">
                  <Icon className="w-7 h-7 text-whatsapp" />
                </div>
                <h3 className="text-xl font-semibold text-light mb-3">
                  {item.title}
                </h3>
                <p className="text-lg text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}