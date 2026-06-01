/* ============================================================
   LATIN AMERICA REPRESENTATIVE — i18n.js
   Traduções embutidas — sem fetch, funciona em file://
   ============================================================ */

(function () {
  'use strict';

  var STORAGE_KEY = 'lar_lang';
  var DEFAULT_LANG = 'en';

  var translations = {
    "en": {
      "nav_home": "Home", "nav_services": "Services", "nav_markets": "Markets", "nav_products": "Products", "nav_about": "About", "nav_contact": "Contact", "nav_cta": "Get in Touch",
      "hero_eyebrow": "China \u2194 Latin America \u00b7 Your Access to the World", "hero_title_1": "Your Bridge Between", "hero_title_em1": "China", "hero_title_and": "and", "hero_title_em2": "Latin America", "hero_sub": "We connect verified Chinese suppliers with serious buyers across 5+ Latin American markets \u2014 automotive parts, tires, equipment and more.", "hero_cta_primary": "Request a Quote", "hero_cta_secondary": "Learn More",
      "services_eyebrow": "What we do", "services_title": "Our Services", "services_sub": "End-to-end support for Chinese exporters entering Latin America and for LATAM buyers sourcing reliable Chinese suppliers.", "service1_title": "Commercial Representation", "service1_desc": "HY Automotive\u2019s exclusive representative for distributors, trade shows and key partners across Latin America.", "service2_title": "Product Verification & Compliance", "service2_desc": "Ensuring products meet local standards, certifications and regulations in each target market.", "service3_title": "Trade & Legal Assistance", "service3_desc": "Support with legal, contractual and regulatory requirements throughout the trade cycle.", "service4_title": "Logistics & Customs Management", "service4_desc": "Full export management with deep expertise in Brazilian customs and Latin American ports, handled by IDB Brasil.",
      "markets_eyebrow": "Where we operate", "markets_title": "Markets We Serve", "markets_sub": "Five major Latin American economies \u2014 over 660 million consumers and 138+ million vehicles on the road.", "market_gdp": "GDP", "market_fleet": "FLEET",
      "products_eyebrow": "Categories", "products_title": "Products We Source", "products_sub": "We specialize in sourcing verified automotive and industrial parts from China \u2014 built for Latin American demand.", "product1_name": "Brake Systems", "product2_name": "Tires & Wheels", "product3_name": "Suspension", "product4_name": "Gears", "product5_name": "Agricultural Parts", "product6_name": "Chemical Products", "products_learn_more": "Learn more \u2192", "products_cta_title": "Need a specific product?", "products_cta_sub": "Tell us what you\u2019re sourcing \u2014 we\u2019ll find verified suppliers.", "products_cta_btn": "Contact us",
      "trust_eyebrow": "How we work", "trust_title": "Why Trust Us", "trust1_title": "No easy promises", "trust1_desc": "We tell you what is realistic. Honest assessments of timelines, costs and obstacles \u2014 never inflated expectations.", "trust2_title": "Long-term partnerships", "trust2_desc": "Our business model is built on repeat trade. We invest in relationships, not one-off transactions.", "trust3_title": "We share the risk", "trust3_desc": "We make decisions together with clarity on risks and rewards. Our success is tied to yours.",
      "about_eyebrow": "Who we are", "about_title": "About Latin America Representative", "about_p1": "Headquartered in Crici\u00fama, Santa Catarina \u2014 Brazil \u2014 we exist to remove the friction from cross-Pacific trade. For years we have worked alongside Chinese manufacturers and Latin American importers, translating not just language but business culture, compliance, and logistics.", "about_p2": "Our mission is simple: build trustworthy commercial bridges that last. We are not a marketplace and we are not brokers chasing commissions \u2014 we are a representation firm that puts its name on every deal we facilitate.", "about_card_title": "What sets us apart", "about_item1": "Registered CNPJ", "about_item2": "Active operations since founding", "about_item3": "Service in 3 languages: English, Portuguese, Spanish", "about_item4": "Physical presence in Brazil", "about_item5": "Physical presence in Weifang, China", "about_item6": "Direct relationships with verified Chinese factories", "about_item7": "On-the-ground support across Latin American markets",
      "contact_eyebrow": "Get in touch", "contact_title": "Let\u2019s Talk Business", "contact_sub": "Tell us about your sourcing needs or distribution plans. We respond within one business day.", "form_name": "Name", "form_company": "Company", "form_email": "Email", "form_country": "Country", "form_message": "Message", "form_submit": "Send Message", "form_success": "Thanks \u2014 your message was received. We\u2019ll reply shortly.", "contact_email_label": "EMAIL", "contact_wa_label": "WHATSAPP", "contact_wa_cta": "Chat on WhatsApp \u2192", "contact_address_label": "ADDRESS", "contact_address_value": "Crici\u00fama, SC \u2014 Brazil",
      "footer_desc": "Connecting verified Chinese suppliers with serious Latin American buyers \u2014 automotive, industrial and retail.", "footer_nav_title": "Navigation", "footer_contact_title": "Contact", "footer_copy": "\u00a9 2025 Latin America Representative. All rights reserved.",
      "prod_back": "Back to home", "prod_eyebrow": "Product Catalog", "prod_title_em": "Product Catalog", "prod_sub": "Verified automotive and industrial parts sourced directly from China \u2014 built for Latin American demand.",
      "cat01_label": "Category 01", "cat01_title": "Brake Systems", "cat01_desc": "Complete brake system solutions for light and heavy vehicles, sourced from certified manufacturers.", "brake1_title": "Brake Caliper & Repair Kit", "brake1_desc": "Complete calipers and rebuild kits for passenger and light vehicles.", "brake2_title": "Ventilated & Solid Brake Disc", "brake2_desc": "High-performance discs engineered for durability and consistent stopping power.", "brake3_title": "Ceramic & Semi-Metallic Brake Pads", "brake3_desc": "Low-dust ceramic and semi-metallic compounds for all vehicle types.", "brake4_title": "Truck Brake Lining", "brake4_desc": "Heavy-duty brake linings for commercial trucks and fleet applications.", "brake5_title": "Brake Shoe", "brake5_desc": "Drum brake shoes for light and commercial vehicles.", "brake6_title": "Brake Drum", "brake6_desc": "Cast iron brake drums for trucks and commercial vehicles.", "brake7_title": "Brake Lining Roll", "brake7_desc": "Raw lining rolls for workshop applications and custom fitment.", "brake8_title": "Master Cylinder", "brake8_desc": "Hydraulic master cylinders for cars and light trucks.", "brake9_title": "Flexible Brake Hose", "brake9_desc": "High-pressure flexible hoses for brake hydraulic circuits.",
      "cat02_label": "Category 02", "cat02_title": "Tires & Wheels", "cat02_desc": "New tires for all vehicle segments, sourced from trusted Chinese manufacturers with proven quality standards.", "cat02_note": "Contact us to find the specific size or specification you need.", "tire1_title": "Heavy-Duty Tires (Trucks & Buses)", "tire1_desc": "Full range of tires for trucks, buses, and heavy commercial vehicles. Multiple sizes available on request.", "tire2_title": "Light Vehicle Tires (Passenger Cars)", "tire2_desc": "Tires for passenger cars and light utility vehicles. Wide range of sizes available.",
      "cat03_label": "Category 03", "cat03_title": "Suspension", "cat03_desc": "Quality suspension components to restore handling and ride comfort across light and commercial vehicle lines.", "susp1_title": "Stabilizer Link", "susp1_desc": "Front and rear stabilizer bar links for cars and light vehicles.", "susp2_title": "Shock Absorber", "susp2_desc": "Gas and hydraulic shock absorbers for a wide range of vehicle applications.", "susp3_title": "Steering Knuckle", "susp3_desc": "Steering knuckle / spindle assemblies for light and commercial vehicles.",
      "cat04_label": "Category 04", "cat04_title": "Gears", "cat04_desc": "Precision-machined gears and drivetrain components for industrial and automotive use.", "gear1_title": "Gears", "gear1_desc": "Precision-machined industrial and automotive gears in multiple configurations.", "gear2_title": "Crown & Pinion", "gear2_desc": "Ring and pinion gear sets for differentials and transmission assemblies.",
      "cat05_label": "Category 05", "cat05_title": "Agricultural Parts", "cat05_desc": "We source auto parts for agricultural machinery of all kinds. Don\u2019t see what you need? Just reach out \u2014 we\u2019ll find it.", "cat05_note": "Looking for a specific part? Contact us and we\u2019ll source it for you.", "agri1_title": "Agricultural Machinery Parts (General)", "agri1_desc": "Replacement parts and industrial components for tractors, harvesters and farming equipment of all brands.",
      "cat06_label": "Category 06", "cat06_title": "Chemical Products", "cat06_desc": "Automotive chemical solutions for fleet maintenance and compliance.", "chem1_title": "Automotive Urea", "chem1_desc": "High-purity automotive-grade urea (granulated) for SCR diesel emission systems. Compliant with ISO 22241. Available in Big Bags of 800 kg and 1,000 kg for fleet and bulk distribution.",
      "prod_bottom_title": "Can\u2019t find what you\u2019re looking for?", "prod_bottom_desc": "Tell us the part, brand or specification \u2014 we\u2019ll source verified suppliers in China and handle the entire process for you.", "prod_bottom_cta": "Contact Us \u2192", "quote_cta": "Request a Quote \u2192"
    },
    "pt": {
      "nav_home": "In\u00edcio", "nav_services": "Servi\u00e7os", "nav_markets": "Mercados", "nav_products": "Produtos", "nav_about": "Sobre", "nav_contact": "Contato", "nav_cta": "Entre em Contato",
      "hero_eyebrow": "China \u2194 Am\u00e9rica Latina \u00b7 Seu Acesso ao Mundo", "hero_title_1": "Sua Ponte Entre", "hero_title_em1": "China", "hero_title_and": "e", "hero_title_em2": "Am\u00e9rica Latina", "hero_sub": "Conectamos fornecedores chineses verificados com compradores s\u00e9rios em mais de 5 mercados latino-americanos \u2014 pe\u00e7as automotivas, pneus, equipamentos e muito mais.", "hero_cta_primary": "Solicitar Cota\u00e7\u00e3o", "hero_cta_secondary": "Saiba Mais",
      "services_eyebrow": "O que fazemos", "services_title": "Nossos Servi\u00e7os", "services_sub": "Suporte completo para exportadores chineses que entram na Am\u00e9rica Latina e para compradores LATAM que buscam fornecedores chineses confi\u00e1veis.", "service1_title": "Representa\u00e7\u00e3o Comercial", "service1_desc": "Representante exclusivo da HY Automotive para distribuidores, feiras e parceiros-chave em toda a Am\u00e9rica Latina.", "service2_title": "Verifica\u00e7\u00e3o de Produtos & Conformidade", "service2_desc": "Garantimos que os produtos atendam \u00e0s normas locais, certifica\u00e7\u00f5es e regulamenta\u00e7\u00f5es de cada mercado.", "service3_title": "Assist\u00eancia Jur\u00eddica & Comercial", "service3_desc": "Suporte com requisitos legais, contratuais e regulat\u00f3rios ao longo de todo o ciclo comercial.", "service4_title": "Log\u00edstica & Gest\u00e3o Aduaneira", "service4_desc": "Gest\u00e3o completa de exporta\u00e7\u00e3o com profundo conhecimento da aduana brasileira e portos latino-americanos, realizada pela IDB Brasil.",
      "markets_eyebrow": "Onde atuamos", "markets_title": "Mercados que Atendemos", "markets_sub": "Cinco grandes economias latino-americanas \u2014 mais de 660 milh\u00f5es de consumidores e mais de 138 milh\u00f5es de ve\u00edculos nas estradas.", "market_gdp": "PIB", "market_fleet": "FROTA",
      "products_eyebrow": "Categorias", "products_title": "Produtos que Fornecemos", "products_sub": "Especializados em fornecimento de pe\u00e7as automotivas e industriais verificadas da China \u2014 desenvolvidas para a demanda latino-americana.", "product1_name": "Sistemas de Freio", "product2_name": "Pneus & Rodas", "product3_name": "Suspens\u00e3o", "product4_name": "Engrenagens", "product5_name": "Pe\u00e7as Agr\u00edcolas", "product6_name": "Produtos Qu\u00edmicos", "products_learn_more": "Saiba mais \u2192", "products_cta_title": "Precisa de um produto espec\u00edfico?", "products_cta_sub": "Diga-nos o que voc\u00ea est\u00e1 buscando \u2014 encontraremos fornecedores verificados.", "products_cta_btn": "Fale conosco",
      "trust_eyebrow": "Como trabalhamos", "trust_title": "Por que confiar em n\u00f3s", "trust1_title": "Sem promessas f\u00e1ceis", "trust1_desc": "Dizemos o que \u00e9 realista. Avalia\u00e7\u00f5es honestas de prazos, custos e obst\u00e1culos \u2014 sem expectativas infladas.", "trust2_title": "Parcerias de longo prazo", "trust2_desc": "Nosso modelo de neg\u00f3cio \u00e9 constru\u00eddo sobre com\u00e9rcio recorrente. Investimos em relacionamentos, n\u00e3o em transa\u00e7\u00f5es \u00fanicas.", "trust3_title": "Compartilhamos o risco", "trust3_desc": "Tomamos decis\u00f5es juntos com clareza sobre riscos e recompensas. Nosso sucesso est\u00e1 ligado ao seu.",
      "about_eyebrow": "Quem somos", "about_title": "Sobre a Latin America Representative", "about_p1": "Sediados em Crici\u00fama, Santa Catarina \u2014 Brasil \u2014 existimos para eliminar a fric\u00e7\u00e3o do com\u00e9rcio transpacífico. Por anos trabalhamos ao lado de fabricantes chineses e importadores latino-americanos, traduzindo n\u00e3o apenas o idioma, mas a cultura empresarial, a conformidade e a log\u00edstica.", "about_p2": "Nossa miss\u00e3o \u00e9 simples: construir pontes comerciais confi\u00e1veis e duradouras. N\u00e3o somos um marketplace e n\u00e3o somos corretores atr\u00e1s de comiss\u00f5es \u2014 somos uma empresa de representa\u00e7\u00e3o que coloca seu nome em cada neg\u00f3cio que facilita.", "about_card_title": "O que nos diferencia", "about_item1": "CNPJ registrado", "about_item2": "Opera\u00e7\u00f5es ativas desde a funda\u00e7\u00e3o", "about_item3": "Atendimento em 3 idiomas: ingl\u00eas, portugu\u00eas e espanhol", "about_item4": "Presen\u00e7a f\u00edsica no Brasil", "about_item5": "Presen\u00e7a f\u00edsica em Weifang, China", "about_item6": "Relacionamento direto com f\u00e1bricas chinesas verificadas", "about_item7": "Suporte local nos mercados da Am\u00e9rica Latina",
      "contact_eyebrow": "Entre em contato", "contact_title": "Vamos Conversar sobre Neg\u00f3cios", "contact_sub": "Conte-nos sobre suas necessidades de fornecimento ou planos de distribui\u00e7\u00e3o. Respondemos em at\u00e9 um dia \u00fatil.", "form_name": "Nome", "form_company": "Empresa", "form_email": "E-mail", "form_country": "Pa\u00eds", "form_message": "Mensagem", "form_submit": "Enviar Mensagem", "form_success": "Obrigado \u2014 sua mensagem foi recebida. Responderemos em breve.", "contact_email_label": "E-MAIL", "contact_wa_label": "WHATSAPP", "contact_wa_cta": "Conversar no WhatsApp \u2192", "contact_address_label": "ENDERE\u00c7O", "contact_address_value": "Crici\u00fama, SC \u2014 Brasil",
      "footer_desc": "Conectando fornecedores chineses verificados com compradores s\u00e9rios na Am\u00e9rica Latina \u2014 automotivo, industrial e varejo.", "footer_nav_title": "Navega\u00e7\u00e3o", "footer_contact_title": "Contato", "footer_copy": "\u00a9 2025 Latin America Representative. Todos os direitos reservados.",
      "prod_back": "Voltar ao in\u00edcio", "prod_eyebrow": "Cat\u00e1logo de Produtos", "prod_title_em": "Cat\u00e1logo de Produtos", "prod_sub": "Pe\u00e7as automotivas e industriais verificadas, fornecidas diretamente da China \u2014 desenvolvidas para a demanda latino-americana.",
      "cat01_label": "Categoria 01", "cat01_title": "Sistemas de Freio", "cat01_desc": "Solu\u00e7\u00f5es completas de sistemas de freio para ve\u00edculos leves e pesados, fornecidas por fabricantes certificados.", "brake1_title": "Pin\u00e7a de Freio & Kit de Reparo", "brake1_desc": "Pin\u00e7as completas e kits de reconstru\u00e7\u00e3o para ve\u00edculos de passeio e leves.", "brake2_title": "Disco de Freio Ventilado & S\u00f3lido", "brake2_desc": "Discos de alto desempenho projetados para durabilidade e poder de frenagem consistente.", "brake3_title": "Pastilhas de Freio Cer\u00e2micas & Semi-Met\u00e1licas", "brake3_desc": "Compostos cer\u00e2micos de baixo p\u00f3 e semi-met\u00e1licos para todos os tipos de ve\u00edculos.", "brake4_title": "Lona de Freio para Caminh\u00e3o", "brake4_desc": "Lonas de freio resistentes para caminh\u00f5es comerciais e frotas.", "brake5_title": "Sapata de Freio", "brake5_desc": "Sapatas de freio a tambor para ve\u00edculos leves e comerciais.", "brake6_title": "Tambor de Freio", "brake6_desc": "Tambores de freio em ferro fundido para caminh\u00f5es e ve\u00edculos comerciais.", "brake7_title": "Rolo de Lona de Freio", "brake7_desc": "Rolos de lona bruta para aplica\u00e7\u00f5es em oficinas e ajustes personalizados.", "brake8_title": "Cilindro Mestre", "brake8_desc": "Cilindros mestres hidr\u00e1ulicos para carros e caminh\u00f5es leves.", "brake9_title": "Mangueira de Freio Flex\u00edvel", "brake9_desc": "Mangueiras flex\u00edveis de alta press\u00e3o para circuitos hidr\u00e1ulicos de freio.",
      "cat02_label": "Categoria 02", "cat02_title": "Pneus & Rodas", "cat02_desc": "Pneus novos para todos os segmentos de ve\u00edculos, fornecidos por fabricantes chineses confi\u00e1veis com padr\u00f5es de qualidade comprovados.", "cat02_note": "Entre em contato para encontrar o tamanho ou especifica\u00e7\u00e3o que voc\u00ea precisa.", "tire1_title": "Pneus para Ve\u00edculos Pesados (Caminh\u00f5es & \u00d4nibus)", "tire1_desc": "Linha completa de pneus para caminh\u00f5es, \u00f4nibus e ve\u00edculos comerciais pesados. V\u00e1rios tamanhos dispon\u00edveis sob consulta.", "tire2_title": "Pneus para Ve\u00edculos Leves (Carros de Passeio)", "tire2_desc": "Pneus para carros de passeio e ve\u00edculos utilit\u00e1rios leves. Ampla variedade de tamanhos dispon\u00edvel.",
      "cat03_label": "Categoria 03", "cat03_title": "Suspens\u00e3o", "cat03_desc": "Componentes de suspens\u00e3o de qualidade para restaurar a dirigibilidade e o conforto em linhas de ve\u00edculos leves e comerciais.", "susp1_title": "Bieleta Estabilizadora", "susp1_desc": "Bieletas dianteiras e traseiras para carros e ve\u00edculos leves.", "susp2_title": "Amortecedor", "susp2_desc": "Amortecedores a g\u00e1s e hidr\u00e1ulicos para uma ampla variedade de aplica\u00e7\u00f5es veiculares.", "susp3_title": "Manga de Eixo", "susp3_desc": "Conjuntos de manga de eixo/pino mestre para ve\u00edculos leves e comerciais.",
      "cat04_label": "Categoria 04", "cat04_title": "Engrenagens", "cat04_desc": "Engrenagens usinadas com precis\u00e3o e componentes de transmiss\u00e3o para uso industrial e automotivo.", "gear1_title": "Engrenagens", "gear1_desc": "Engrenagens industriais e automotivas usinadas com precis\u00e3o em m\u00faltiplas configura\u00e7\u00f5es.", "gear2_title": "Coroa & Pinh\u00e3o", "gear2_desc": "Conjuntos de coroa e pinh\u00e3o para diferenciais e conjuntos de transmiss\u00e3o.",
      "cat05_label": "Categoria 05", "cat05_title": "Pe\u00e7as Agr\u00edcolas", "cat05_desc": "Fornecemos pe\u00e7as para maquin\u00e1rio agr\u00edcola de todos os tipos. N\u00e3o encontrou o que precisa? Entre em contato \u2014 vamos encontrar.", "cat05_note": "Procurando uma pe\u00e7a espec\u00edfica? Fale conosco e vamos fornec\u00ea-la para voc\u00ea.", "agri1_title": "Pe\u00e7as para Maquin\u00e1rio Agr\u00edcola (Geral)", "agri1_desc": "Pe\u00e7as de reposi\u00e7\u00e3o e componentes industriais para tratores, colheitadeiras e equipamentos agr\u00edcolas de todas as marcas.",
      "cat06_label": "Categoria 06", "cat06_title": "Produtos Qu\u00edmicos", "cat06_desc": "Solu\u00e7\u00f5es qu\u00edmicas automotivas para manuten\u00e7\u00e3o de frotas e conformidade regulat\u00f3ria.", "chem1_title": "Ureia Automotiva", "chem1_desc": "Ureia automotiva de alta pureza (granulada) para sistemas SCR de emiss\u00e3o diesel. Conforme ISO 22241. Dispon\u00edvel em Big Bags de 800 kg e 1.000 kg para frotas e distribui\u00e7\u00e3o a granel.",
      "prod_bottom_title": "N\u00e3o encontrou o que procura?", "prod_bottom_desc": "Informe-nos a pe\u00e7a, marca ou especifica\u00e7\u00e3o \u2014 buscaremos fornecedores verificados na China e cuidaremos de todo o processo para voc\u00ea.", "prod_bottom_cta": "Fale Conosco \u2192", "quote_cta": "Solicitar Cota\u00e7\u00e3o \u2192"
    },
    "es": {
      "nav_home": "Inicio", "nav_services": "Servicios", "nav_markets": "Mercados", "nav_products": "Productos", "nav_about": "Nosotros", "nav_contact": "Contacto", "nav_cta": "Cont\u00e1ctenos",
      "hero_eyebrow": "China \u2194 Am\u00e9rica Latina \u00b7 Su Acceso al Mundo", "hero_title_1": "Su Puente Entre", "hero_title_em1": "China", "hero_title_and": "y", "hero_title_em2": "Am\u00e9rica Latina", "hero_sub": "Conectamos proveedores chinos verificados con compradores serios en m\u00e1s de 5 mercados latinoamericanos \u2014 autopartes, neum\u00e1ticos, equipos y m\u00e1s.", "hero_cta_primary": "Solicitar Cotizaci\u00f3n", "hero_cta_secondary": "Saber M\u00e1s",
      "services_eyebrow": "Lo que hacemos", "services_title": "Nuestros Servicios", "services_sub": "Soporte integral para exportadores chinos que ingresan a Am\u00e9rica Latina y para compradores LATAM que buscan proveedores chinos confiables.", "service1_title": "Representaci\u00f3n Comercial", "service1_desc": "Representante exclusivo de HY Automotive para distribuidores, ferias y socios clave en toda Am\u00e9rica Latina.", "service2_title": "Verificaci\u00f3n de Productos & Cumplimiento", "service2_desc": "Garantizamos que los productos cumplan con normas locales, certificaciones y regulaciones en cada mercado objetivo.", "service3_title": "Asistencia Jur\u00eddica & Comercial", "service3_desc": "Apoyo con requisitos legales, contractuales y regulatorios a lo largo de todo el ciclo comercial.", "service4_title": "Log\u00edstica & Gesti\u00f3n Aduanera", "service4_desc": "Gesti\u00f3n completa de exportaci\u00f3n con profundo conocimiento de la aduana brasile\u00f1a y los puertos latinoamericanos, a cargo de IDB Brasil.",
      "markets_eyebrow": "D\u00f3nde operamos", "markets_title": "Mercados que Atendemos", "markets_sub": "Cinco grandes econom\u00edas latinoamericanas \u2014 m\u00e1s de 660 millones de consumidores y m\u00e1s de 138 millones de veh\u00edculos en circulaci\u00f3n.", "market_gdp": "PIB", "market_fleet": "FLOTA",
      "products_eyebrow": "Categor\u00edas", "products_title": "Productos que Proveemos", "products_sub": "Nos especializamos en proveer autopartes e industriales verificadas de China \u2014 desarrolladas para la demanda latinoamericana.", "product1_name": "Sistemas de Freno", "product2_name": "Neum\u00e1ticos & Ruedas", "product3_name": "Suspensi\u00f3n", "product4_name": "Engranajes", "product5_name": "Repuestos Agr\u00edcolas", "product6_name": "Productos Qu\u00edmicos", "products_learn_more": "Saber m\u00e1s \u2192", "products_cta_title": "\u00bfNecesita un producto espec\u00edfico?", "products_cta_sub": "D\u00edganos qu\u00e9 est\u00e1 buscando \u2014 encontraremos proveedores verificados.", "products_cta_btn": "Cont\u00e1ctenos",
      "trust_eyebrow": "C\u00f3mo trabajamos", "trust_title": "Por qu\u00e9 confiar en nosotros", "trust1_title": "Sin promesas f\u00e1ciles", "trust1_desc": "Le decimos lo que es realista. Evaluaciones honestas de plazos, costos y obst\u00e1culos \u2014 sin expectativas infladas.", "trust2_title": "Alianzas a largo plazo", "trust2_desc": "Nuestro modelo de negocio se basa en el comercio recurrente. Invertimos en relaciones, no en transacciones \u00fanicas.", "trust3_title": "Compartimos el riesgo", "trust3_desc": "Tomamos decisiones juntos con claridad sobre riesgos y beneficios. Nuestro \u00e9xito est\u00e1 ligado al suyo.",
      "about_eyebrow": "Qui\u00e9nes somos", "about_title": "Sobre Latin America Representative", "about_p1": "Con sede en Crici\u00fama, Santa Catarina \u2014 Brasil \u2014 existimos para eliminar la fricci\u00f3n del comercio transpacífico. Durante a\u00f1os hemos trabajado junto a fabricantes chinos e importadores latinoamericanos, traduciendo no solo el idioma, sino la cultura empresarial, el cumplimiento normativo y la log\u00edstica.", "about_p2": "Nuestra misi\u00f3n es simple: construir puentes comerciales confiables y duraderos. No somos un marketplace ni somos intermediarios en busca de comisiones \u2014 somos una empresa de representaci\u00f3n que pone su nombre en cada operaci\u00f3n que facilita.", "about_card_title": "Lo que nos diferencia", "about_item1": "CNPJ registrado", "about_item2": "Operaciones activas desde la fundaci\u00f3n", "about_item3": "Atenci\u00f3n en 3 idiomas: ingl\u00e9s, portugu\u00e9s y espa\u00f1ol", "about_item4": "Presencia f\u00edsica en Brasil", "about_item5": "Presencia f\u00edsica en Weifang, China", "about_item6": "Relaciones directas con f\u00e1bricas chinas verificadas", "about_item7": "Apoyo local en los mercados de Am\u00e9rica Latina",
      "contact_eyebrow": "Cont\u00e1ctenos", "contact_title": "Hablemos de Negocios", "contact_sub": "Cu\u00e9ntenos sobre sus necesidades de abastecimiento o planes de distribuci\u00f3n. Respondemos en un d\u00eda h\u00e1bil.", "form_name": "Nombre", "form_company": "Empresa", "form_email": "Correo electr\u00f3nico", "form_country": "Pa\u00eds", "form_message": "Mensaje", "form_submit": "Enviar Mensaje", "form_success": "Gracias \u2014 su mensaje fue recibido. Le responderemos en breve.", "contact_email_label": "CORREO", "contact_wa_label": "WHATSAPP", "contact_wa_cta": "Chatear en WhatsApp \u2192", "contact_address_label": "DIRECCI\u00d3N", "contact_address_value": "Crici\u00fama, SC \u2014 Brasil",
      "footer_desc": "Conectando proveedores chinos verificados con compradores serios en Am\u00e9rica Latina \u2014 automotriz, industrial y retail.", "footer_nav_title": "Navegaci\u00f3n", "footer_contact_title": "Contacto", "footer_copy": "\u00a9 2025 Latin America Representative. Todos los derechos reservados.",
      "prod_back": "Volver al inicio", "prod_eyebrow": "Cat\u00e1logo de Productos", "prod_title_em": "Cat\u00e1logo de Productos", "prod_sub": "Autopartes e industriales verificadas, provenientes directamente de China \u2014 desarrolladas para la demanda latinoamericana.",
      "cat01_label": "Categor\u00eda 01", "cat01_title": "Sistemas de Freno", "cat01_desc": "Soluciones completas de sistemas de freno para veh\u00edculos ligeros y pesados, provenientes de fabricantes certificados.", "brake1_title": "Pinza de Freno & Kit de Reparaci\u00f3n", "brake1_desc": "Pinzas completas y kits de reconstrucci\u00f3n para veh\u00edculos de pasajeros y ligeros.", "brake2_title": "Disco de Freno Ventilado & S\u00f3lido", "brake2_desc": "Discos de alto rendimiento dise\u00f1ados para durabilidad y potencia de frenado consistente.", "brake3_title": "Pastillas de Freno Cer\u00e1micas & Semi-Met\u00e1licas", "brake3_desc": "Compuestos cer\u00e1micos de bajo polvo y semi-met\u00e1licos para todo tipo de veh\u00edculos.", "brake4_title": "Forro de Freno para Cami\u00f3n", "brake4_desc": "Forros de freno resistentes para camiones comerciales y flotas.", "brake5_title": "Zapata de Freno", "brake5_desc": "Zapatas de freno de tambor para veh\u00edculos ligeros y comerciales.", "brake6_title": "Tambor de Freno", "brake6_desc": "Tambores de freno de hierro fundido para camiones y veh\u00edculos comerciales.", "brake7_title": "Rollo de Forro de Freno", "brake7_desc": "Rollos de forro en bruto para aplicaciones en talleres y ajuste personalizado.", "brake8_title": "Cilindro Maestro", "brake8_desc": "Cilindros maestros hidr\u00e1ulicos para autos y camionetas ligeras.", "brake9_title": "Manguera de Freno Flexible", "brake9_desc": "Mangueras flexibles de alta presi\u00f3n para circuitos hidr\u00e1ulicos de freno.",
      "cat02_label": "Categor\u00eda 02", "cat02_title": "Neum\u00e1ticos & Ruedas", "cat02_desc": "Neum\u00e1ticos nuevos para todos los segmentos de veh\u00edculos, provenientes de fabricantes chinos confiables con est\u00e1ndares de calidad comprobados.", "cat02_note": "Cont\u00e1ctenos para encontrar el tama\u00f1o o especificaci\u00f3n que necesita.", "tire1_title": "Neum\u00e1ticos para Veh\u00edculos Pesados (Camiones & Buses)", "tire1_desc": "Gama completa de neum\u00e1ticos para camiones, buses y veh\u00edculos comerciales pesados. M\u00faltiples tama\u00f1os disponibles bajo pedido.", "tire2_title": "Neum\u00e1ticos para Veh\u00edculos Ligeros (Autos de Pasajeros)", "tire2_desc": "Neum\u00e1ticos para autos de pasajeros y veh\u00edculos utilitarios ligeros. Amplia variedad de tama\u00f1os disponible.",
      "cat03_label": "Categor\u00eda 03", "cat03_title": "Suspensi\u00f3n", "cat03_desc": "Componentes de suspensi\u00f3n de calidad para restaurar el manejo y la comodidad de conducci\u00f3n en veh\u00edculos ligeros y comerciales.", "susp1_title": "Bieleta Estabilizadora", "susp1_desc": "Bieletas delantera y trasera para autos y veh\u00edculos ligeros.", "susp2_title": "Amortiguador", "susp2_desc": "Amortiguadores a gas e hidr\u00e1ulicos para una amplia variedad de aplicaciones vehiculares.", "susp3_title": "Mangueta de Direcci\u00f3n", "susp3_desc": "Conjuntos de mangueta/eje de direcci\u00f3n para veh\u00edculos ligeros y comerciales.",
      "cat04_label": "Categor\u00eda 04", "cat04_title": "Engranajes", "cat04_desc": "Engranajes mecanizados con precisi\u00f3n y componentes de tren motriz para uso industrial y automotriz.", "gear1_title": "Engranajes", "gear1_desc": "Engranajes industriales y automotrices mecanizados con precisi\u00f3n en m\u00faltiples configuraciones.", "gear2_title": "Corona & Pi\u00f1\u00f3n", "gear2_desc": "Conjuntos de corona y pi\u00f1\u00f3n para diferenciales y conjuntos de transmisi\u00f3n.",
      "cat05_label": "Categor\u00eda 05", "cat05_title": "Repuestos Agr\u00edcolas", "cat05_desc": "Proveemos repuestos para maquinaria agr\u00edcola de todo tipo. \u00bfNo encuentra lo que necesita? Cont\u00e1ctenos \u2014 lo encontraremos.", "cat05_note": "\u00bfBusca una pieza espec\u00edfica? Cont\u00e1ctenos y la conseguiremos para usted.", "agri1_title": "Repuestos para Maquinaria Agr\u00edcola (General)", "agri1_desc": "Repuestos y componentes industriales para tractores, cosechadoras y equipos agr\u00edcolas de todas las marcas.",
      "cat06_label": "Categor\u00eda 06", "cat06_title": "Productos Qu\u00edmicos", "cat06_desc": "Soluciones qu\u00edmicas automotrices para mantenimiento de flotas y cumplimiento normativo.", "chem1_title": "Urea Automotriz", "chem1_desc": "Urea automotriz de alta pureza (granulada) para sistemas SCR de emisiones di\u00e9sel. Conforme con ISO 22241. Disponible en Big Bags de 800 kg y 1.000 kg para flotas y distribuci\u00f3n a granel.",
      "prod_bottom_title": "\u00bfNo encuentra lo que busca?", "prod_bottom_desc": "Ind\u00edquenos la pieza, marca o especificaci\u00f3n \u2014 buscaremos proveedores verificados en China y gestionaremos todo el proceso por usted.", "prod_bottom_cta": "Cont\u00e1ctenos \u2192", "quote_cta": "Solicitar Cotizaci\u00f3n \u2192"
    }
  };

  /* ---- Apply translations to DOM ---- */
  function applyLang(lang) {
    var t = translations[lang];
    if (!t) return;

    /* text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    /* Save preference */
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    /* Update lang button label */
    var labels = { en: 'EN', pt: 'PT', es: 'ES' };
    document.querySelectorAll('#langToggle').forEach(function (btn) {
      var svg = btn.querySelector('svg');
      while (btn.firstChild) btn.removeChild(btn.firstChild);
      btn.appendChild(document.createTextNode(labels[lang] + ' '));
      if (svg) btn.appendChild(svg);
    });

    /* Update mobile lang buttons active state */
    document.querySelectorAll('.mobile-lang__btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    /* html lang attribute */
    var htmlLang = { en: 'en', pt: 'pt-BR', es: 'es' };
    document.documentElement.lang = htmlLang[lang] || lang;
  }

  /* ---- Detect language from browser ---- */
  function detectLang() {
    /* Portuguese: pt, pt-BR, pt-PT */
    var ptLangs = ['pt', 'pt-br', 'pt-pt'];
    /* Spanish: es-* (any Spanish-speaking country) */
    var esLangs = ['es', 'es-ar', 'es-mx', 'es-co', 'es-cl', 'es-pe', 'es-ve',
                   'es-ec', 'es-bo', 'es-py', 'es-uy', 'es-cr', 'es-gt', 'es-cu',
                   'es-do', 'es-hn', 'es-ni', 'es-pa', 'es-sv', 'es-us', 'es-419'];

    var langs = navigator.languages
      ? Array.from(navigator.languages)
      : [navigator.language || navigator.userLanguage || DEFAULT_LANG];

    for (var i = 0; i < langs.length; i++) {
      var code = langs[i].toLowerCase();
      if (ptLangs.indexOf(code) !== -1 || code.startsWith('pt')) return 'pt';
      if (esLangs.indexOf(code) !== -1 || code.startsWith('es')) return 'es';
      if (code.startsWith('en')) return 'en';
    }
    return DEFAULT_LANG;
  }

  /* ---- Init ---- */
  function init() {
    /* Use saved preference if exists, otherwise detect from browser */
    var lang = DEFAULT_LANG;
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      lang = saved || detectLang();
    } catch (e) {
      lang = detectLang();
    }
    applyLang(lang);

    /* Wire up desktop dropdown buttons */
    document.querySelectorAll('.lang-dropdown button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var map = { 'English': 'en', 'Português': 'pt', 'Español': 'es' };
        var lang = map[this.textContent.trim()];
        if (lang) applyLang(lang);
      });
    });

    /* Wire up mobile lang buttons via event delegation */
    var mobileMenu = document.getElementById('mobileMenu');
    var hamburger  = document.getElementById('hamburger');
    if (mobileMenu) {
      mobileMenu.addEventListener('click', function (e) {
        var btn = e.target.closest('.mobile-lang__btn');
        if (btn) {
          var lang = btn.getAttribute('data-lang');
          if (lang) {
            applyLang(lang);
            /* Close the mobile menu after selecting a language */
            mobileMenu.classList.remove('open');
            if (hamburger) {
              hamburger.classList.remove('open');
              hamburger.setAttribute('aria-expanded', 'false');
            }
          }
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();