import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: "Target",
      title: "Контекстная реклама",
      description: "Настройка и управление рекламными кампаниями в Яндекс.Директ и Google Ads",
      metrics: ["CPC -40%", "CTR +125%"]
    },
    {
      icon: "TrendingUp",
      title: "Оптимизация ROI",
      description: "Повышение окупаемости рекламных затрат через аналитику и A/B тестирование",
      metrics: ["ROI +280%", "CPA -35%"]
    },
    {
      icon: "BarChart3",
      title: "Аналитика & Отчеты",
      description: "Подробные отчеты с метриками эффективности и рекомендациями по улучшению",
      metrics: ["Конверсия +90%", "LTV +150%"]
    }
  ];

  const cases = [
    {
      title: "E-commerce магазин электроники",
      industry: "Электроника",
      period: "3 месяца",
      budget: "450 000 ₽",
      metrics: [
        { label: "ROI", value: "345%", increase: true },
        { label: "Конверсия", value: "4.8%", increase: true },
        { label: "CPA", value: "-42%", increase: false }
      ],
      results: "Увеличили продажи на 280%, снизили стоимость привлечения клиента в 1.7 раза"
    },
    {
      title: "Онлайн-школа английского языка",
      industry: "Образование",
      period: "4 месяца",
      budget: "280 000 ₽",
      metrics: [
        { label: "ROI", value: "426%", increase: true },
        { label: "Заявки", value: "+355%", increase: true },
        { label: "CTR", value: "8.2%", increase: true }
      ],
      results: "Привлекли 520+ новых учеников, окупаемость кампании достигнута за 18 дней"
    },
    {
      title: "B2B SaaS платформа",
      industry: "IT & SaaS",
      period: "6 месяцев",
      budget: "890 000 ₽",
      metrics: [
        { label: "ROI", value: "512%", increase: true },
        { label: "Лиды", value: "+290%", increase: true },
        { label: "CPC", value: "-38%", increase: false }
      ],
      results: "Масштабировали рекламу в 4 регионах, получили 180+ качественных B2B лидов"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold bg-hero-gradient bg-clip-text text-transparent">
              ContextPro
            </h1>
            <div className="hidden md:flex items-center gap-8">
              {["Главная", "Обо мне", "Услуги", "Кейсы", "Контакты"].map((item, idx) => {
                const id = ["home", "about", "services", "cases", "contact"][idx];
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === id ? "text-primary" : "text-foreground/70"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <Button className="hidden md:flex bg-hero-gradient">
              Обсудить проект
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
                <Icon name="Zap" size={14} className="mr-1" />
                Топ-5% специалистов по контексту
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Превращаю рекламный{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  бюджет в прибыль
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Специализируюсь на настройке высокоэффективной контекстной рекламы с акцентом на ROI и масштабирование. 
                Более 150 успешных проектов с средним ростом прибыли 280%.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-opacity">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Запросить аудит
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("cases")}>
                  <Icon name="LineChart" size={18} className="mr-2" />
                  Посмотреть кейсы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                {[
                  { value: "150+", label: "Проектов" },
                  { value: "340%", label: "Средний ROI" },
                  { value: "6 лет", label: "Опыт" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-3xl font-heading font-bold bg-hero-gradient bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-hero-gradient opacity-20 blur-3xl animate-float" />
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 backdrop-blur">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "TrendingUp", label: "ROI", value: "+345%", color: "text-green-600" },
                    { icon: "MousePointerClick", label: "CTR", value: "8.4%", color: "text-blue-600" },
                    { icon: "Users", label: "Конверсия", value: "4.9%", color: "text-purple-600" },
                    { icon: "DollarSign", label: "CPA", value: "-42%", color: "text-orange-600" }
                  ].map((metric, idx) => (
                    <Card key={idx} className="border-2 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                      <CardContent className="p-6">
                        <Icon name={metric.icon as any} size={28} className={`${metric.color} mb-3`} />
                        <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                        <div className={`text-2xl font-heading font-bold ${metric.color}`}>{metric.value}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4">
              <Icon name="User" size={14} className="mr-1" />
              Обо мне
            </Badge>
            <h2 className="text-4xl font-heading font-bold mb-4">
              Привет! Я Александр — контекстолог-аналитик
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Помогаю бизнесу зарабатывать больше с помощью грамотной настройки контекстной рекламы. 
              Работаю на результат: моя цель — не просто запустить рекламу, а обеспечить максимальную отдачу от каждого вложенного рубля.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "Award", title: "Сертификации", text: "Яндекс.Директ PRO, Google Ads Advanced" },
              { icon: "Briefcase", title: "Опыт", text: "6+ лет в контекстной рекламе, 150+ проектов" },
              { icon: "Target", title: "Специализация", text: "E-commerce, B2B SaaS, Образование, Услуги" },
              { icon: "BarChart", title: "Подход", text: "Data-driven оптимизация с фокусом на ROI" }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Услуги
            </Badge>
            <h2 className="text-4xl font-heading font-bold mb-4">Что я делаю</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексная работа с контекстной рекламой — от стратегии до детальной оптимизации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-2"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex gap-2">
                    {service.metrics.map((metric, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/10 text-secondary">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">
              <Icon name="Briefcase" size={14} className="mr-1" />
              Кейсы
            </Badge>
            <h2 className="text-4xl font-heading font-bold mb-4">Результаты моих клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные проекты с фокусом на метрики и ROI
            </p>
          </div>
          <div className="space-y-8">
            {cases.map((caseItem, idx) => (
              <Card 
                key={idx} 
                className="overflow-hidden hover:shadow-xl transition-all animate-fade-in-up border-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-[1fr,auto] gap-8">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-heading font-bold mb-2">{caseItem.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="outline">
                              <Icon name="Building2" size={12} className="mr-1" />
                              {caseItem.industry}
                            </Badge>
                            <Badge variant="outline">
                              <Icon name="Clock" size={12} className="mr-1" />
                              {caseItem.period}
                            </Badge>
                            <Badge variant="outline">
                              <Icon name="Wallet" size={12} className="mr-1" />
                              Бюджет: {caseItem.budget}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{caseItem.results}</p>
                    </div>
                    <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:min-w-[200px]">
                      {caseItem.metrics.map((metric, i) => (
                        <div key={i} className="text-center lg:text-left p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5">
                          <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                          <div className={`text-3xl font-heading font-bold ${metric.increase ? 'text-green-600' : 'text-orange-600'}`}>
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-2 shadow-xl animate-scale-in overflow-hidden">
            <div className="absolute inset-0 bg-hero-gradient opacity-5" />
            <CardContent className="p-12 relative">
              <div className="text-center">
                <Badge className="mb-4">
                  <Icon name="Mail" size={14} className="mr-1" />
                  Контакты
                </Badge>
                <h2 className="text-4xl font-heading font-bold mb-4">Готовы увеличить прибыль?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Запросите бесплатный аудит вашей текущей рекламы. Покажу точки роста и план по увеличению ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-opacity">
                    <Icon name="Send" size={18} className="mr-2" />
                    Написать в Telegram
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Mail" size={18} className="mr-2" />
                    Email: context@pro.ru
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-6 pt-6 border-t border-border">
                  {["Phone", "MessageSquare", "Linkedin"].map((icon) => (
                    <button key={icon} className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center">
                      <Icon name={icon as any} size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 ContextPro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
