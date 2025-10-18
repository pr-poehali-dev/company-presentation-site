import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [vehicleCount, setVehicleCount] = useState(10);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const calculatePrice = () => {
    const basePrice = 500;
    const pricePerVehicle = 300;
    const total = basePrice + (vehicleCount * pricePerVehicle);
    setCalculatedPrice(total);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cpu" size={32} className="text-primary" />
              <span className="text-2xl font-bold">ЕПУТС</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#products" onClick={(e) => scrollToSection(e, '#products')} className="text-foreground hover:text-primary transition-colors">Продукты</a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#advantages" onClick={(e) => scrollToSection(e, '#advantages')} className="text-foreground hover:text-primary transition-colors">Преимущества</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="flex items-center gap-4">
              <Button className="hidden md:inline-flex" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>Связаться</Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="block text-foreground hover:text-primary transition-colors py-2">Главная</a>
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="block text-foreground hover:text-primary transition-colors py-2">О компании</a>
              <a href="#products" onClick={(e) => scrollToSection(e, '#products')} className="block text-foreground hover:text-primary transition-colors py-2">Продукты</a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="block text-foreground hover:text-primary transition-colors py-2">Услуги</a>
              <a href="#advantages" onClick={(e) => scrollToSection(e, '#advantages')} className="block text-foreground hover:text-primary transition-colors py-2">Преимущества</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="block text-foreground hover:text-primary transition-colors py-2">Контакты</a>
              <Button className="w-full mt-4" onClick={() => { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }}>Связаться</Button>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Объединенные Системы
                <span className="text-primary block">Управления Транспортом</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Разработка и внедрение автоматизированных систем управления транспортом для повышения эффективности логистики и безопасности перевозок
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  Наши продукты
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/995e6233-dcbf-4f78-bc54-6b7d451e9c3b/files/1497c1fe-0553-440a-ba0d-6a9f57da4d42.jpg"
                alt="Technology background"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О компании</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ведущий разработчик систем управления и мониторинга транспорта в России
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://cdn.poehali.dev/projects/995e6233-dcbf-4f78-bc54-6b7d451e9c3b/files/ec97eada-6614-4f12-934b-03f022a70e16.jpg"
              alt="Our team"
              className="rounded-2xl shadow-xl animate-scale-in"
            />
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Миссия и ценности</h3>
              <p className="text-lg text-muted-foreground">
                Мы создаем комплексные решения для управления транспортными системами, обеспечивая безопасность, эффективность и надежность логистических процессов. Наши технологии помогают компаниям оптимизировать затраты и повысить качество услуг.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">250+</div>
                  <div className="text-muted-foreground">Успешных проектов</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground">Специалистов в команде</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground">Стран присутствия</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">99%</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши продукты</h2>
            <p className="text-xl text-muted-foreground">
              Профессиональные решения для управления транспортом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">GPS мониторинг</CardTitle>
                <CardDescription className="text-base">
                  Отслеживание транспорта в режиме реального времени
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Контроль местоположения, маршрутов и состояния транспортных средств с высокой точностью
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Gauge" size={28} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Телематика</CardTitle>
                <CardDescription className="text-base">
                  Дистанционный контроль параметров транспорта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мониторинг расхода топлива, скорости, температуры и других критических показателей
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Аналитика</CardTitle>
                <CardDescription className="text-base">
                  Отчеты и анализ эффективности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Детальные отчеты по использованию транспорта, затратам и оптимизации логистики
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Комплексный подход к управлению транспортом
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <CardTitle>Мониторинг транспорта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Контроль местоположения и состояния транспортных средств
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Route" size={32} className="text-secondary" />
                </div>
                <CardTitle>Оптимизация маршрутов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Планирование и корректировка маршрутов для экономии ресурсов
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" size={32} className="text-primary" />
                </div>
                <CardTitle>Отчетность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Детальные отчеты по использованию транспорта
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-secondary" />
                </div>
                <CardTitle>Интеграция систем</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Подключение к существующим корпоративным системам
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground">
              Почему выбирают нас
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://cdn.poehali.dev/projects/995e6233-dcbf-4f78-bc54-6b7d451e9c3b/files/9de4083c-1482-432a-a540-0eb4d855f3c0.jpg"
              alt="Data visualization"
              className="rounded-2xl shadow-xl"
            />
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Надежность</h3>
                  <p className="text-muted-foreground">
                    Стабильная работа систем с минимальным временем простоя и бесперебойным мониторингом
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Trophy" size={24} className="text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Экономия</h3>
                  <p className="text-muted-foreground">
                    Снижение затрат на топливо, оптимизация маршрутов и повышение эффективности использования транспорта
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Lock" size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Контроль</h3>
                  <p className="text-muted-foreground">
                    Полный контроль над транспортом: местоположение, скорость, расход топлива и состояние транспорта
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Headphones" size={24} className="text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Интеграция</h3>
                  <p className="text-muted-foreground">
                    Легкая интеграция с любыми учетными системами и бизнес-процессами компании
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас наши партнеры
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Building2" size={28} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">ООО "ТрансЛогистик"</CardTitle>
                    <CardDescription>Директор по логистике</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "Внедрение системы мониторинга от ЕПУТС позволило нам сократить расходы на топливо на 12% и повысить дисциплину водителей. Окупилось за 4 месяца!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="Truck" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">АО "Грузовые перевозки"</CardTitle>
                    <CardDescription>Генеральный директор</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "Отличная система контроля транспорта. Техподдержка работает оперативно, все вопросы решаются быстро. Рекомендуем!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Package" size={28} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">ООО "Экспресс-Доставка"</CardTitle>
                    <CardDescription>Начальник автопарка</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "Благодаря аналитике и отчетам мы оптимизировали маршруты и сократили время доставки на 20%. Система очень удобная и понятная."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Успешные кейсы</h2>
            <p className="text-xl text-muted-foreground">
              Примеры внедрения наших решений
            </p>
          </div>
          <div className="space-y-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Icon name="TrendingUp" size={64} className="text-primary mx-auto" />
                    <div className="space-y-2">
                      <p className="text-5xl font-bold text-primary">150+</p>
                      <p className="text-muted-foreground">Транспортных средств</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <CardTitle className="text-2xl mb-4">Федеральная транспортная компания</CardTitle>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Задача:</h4>
                      <p className="text-muted-foreground">
                        Контроль парка из 150+ грузовых автомобилей по всей России, снижение расходов на топливо
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Решение:</h4>
                      <p className="text-muted-foreground">
                        Внедрение GPS-мониторинга с контролем топлива и телематики
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Результат:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Экономия топлива 14% за первые 6 месяцев</li>
                        <li>Снижение простоев на 25%</li>
                        <li>ROI достигнут за 5 месяцев</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 flex items-center justify-center order-2 md:order-1">
                  <div className="text-center space-y-4">
                    <Icon name="Clock" size={64} className="text-secondary mx-auto" />
                    <div className="space-y-2">
                      <p className="text-5xl font-bold text-secondary">-30%</p>
                      <p className="text-muted-foreground">Время доставки</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 order-1 md:order-2">
                  <CardTitle className="text-2xl mb-4">Курьерская служба</CardTitle>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Задача:</h4>
                      <p className="text-muted-foreground">
                        Оптимизация маршрутов курьеров, повышение скорости доставки в мегаполисе
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Решение:</h4>
                      <p className="text-muted-foreground">
                        Система мониторинга с модулем оптимизации маршрутов и аналитикой
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Результат:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Сокращение времени доставки на 30%</li>
                        <li>Увеличение количества заказов на 40%</li>
                        <li>Повышение удовлетворенности клиентов</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Icon name="Shield" size={64} className="text-primary mx-auto" />
                    <div className="space-y-2">
                      <p className="text-5xl font-bold text-primary">100%</p>
                      <p className="text-muted-foreground">Безопасность грузов</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <CardTitle className="text-2xl mb-4">Строительная компания</CardTitle>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Задача:</h4>
                      <p className="text-muted-foreground">
                        Контроль техники на стройплощадках, предотвращение краж топлива и нецелевого использования
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Решение:</h4>
                      <p className="text-muted-foreground">
                        GPS-мониторинг с датчиками топлива и контролем моточасов
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Результат:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Полное устранение краж топлива</li>
                        <li>Снижение затрат на ГСМ на 18%</li>
                        <li>Прозрачная отчетность для руководства</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Рассчитать стоимость</h2>
            <p className="text-xl text-muted-foreground">
              Узнайте примерную стоимость внедрения системы для вашего парка
            </p>
          </div>
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="pt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-lg font-medium">Количество транспортных средств</label>
                    <span className="text-3xl font-bold text-primary">{vehicleCount}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={vehicleCount}
                    onChange={(e) => setVehicleCount(Number(e.target.value))}
                    className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 ТС</span>
                    <span>100 ТС</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-muted-foreground">Базовая плата</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">500 ₽/мес</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-muted-foreground">За 1 ТС</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">300 ₽/мес</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-muted-foreground">Экономия топлива</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-green-600">до 15%</p>
                    </CardContent>
                  </Card>
                </div>

                <Button 
                  size="lg" 
                  className="w-full text-lg"
                  onClick={calculatePrice}
                >
                  Рассчитать стоимость
                  <Icon name="Calculator" size={20} className="ml-2" />
                </Button>

                {calculatedPrice > 0 && (
                  <Card className="bg-primary text-primary-foreground animate-scale-in">
                    <CardContent className="pt-6">
                      <div className="text-center space-y-2">
                        <p className="text-sm opacity-90">Ориентировочная стоимость</p>
                        <p className="text-5xl font-bold">{calculatedPrice.toLocaleString()} ₽</p>
                        <p className="text-sm opacity-90">в месяц</p>
                        <p className="text-xs opacity-75 mt-4">
                          При парке {vehicleCount} ТС вы сэкономите до {Math.round(vehicleCount * 2500).toLocaleString()} ₽/мес на топливе
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Напишите нам!
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@eputs.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Офис</p>
                    <p className="text-muted-foreground">Россия, Москва</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 flex items-center justify-center">
              <div className="text-center space-y-2">
                <Icon name="Map" size={64} className="text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold">Интерактивная карта</h4>
                <p className="text-sm text-muted-foreground">
                  Москва, центральный офис
                </p>
                <div className="pt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4447637736947!2d37.6156!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzYnNTYuMiJF!5e0!3m2!1sru!2sru!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '0.5rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Cpu" size={28} className="text-primary" />
                <span className="text-xl font-bold">ЕПУТС</span>
              </div>
              <p className="text-background/80">
                Объединенные Системы Управления Транспортом
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#products" className="hover:text-primary transition-colors">GPS мониторинг</a></li>
                <li><a href="#products" className="hover:text-primary transition-colors">Телематика</a></li>
                <li><a href="#products" className="hover:text-primary transition-colors">Аналитика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li>info@eputs.org</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2024 ЕПУТС. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;