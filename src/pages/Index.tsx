import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cpu" size={32} className="text-primary" />
              <span className="text-2xl font-bold">TechCorp</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукты</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:inline-flex">Связаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Технологии будущего
                <span className="text-primary block">уже сегодня</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Мы создаём инновационные IT-решения, которые трансформируют ваш бизнес и открывают новые возможности
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
              Более 10 лет мы создаём технологические решения мирового уровня
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
                Наша компания специализируется на разработке передовых технологических продуктов. 
                Мы помогаем бизнесу достигать новых высот через внедрение инноваций.
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
              Инновационные решения для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Database" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Cloud Platform</CardTitle>
                <CardDescription className="text-base">
                  Облачная платформа для управления данными и процессами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Масштабируемое решение для хранения и обработки больших данных с гарантией безопасности
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brain" size={28} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">AI Analytics</CardTitle>
                <CardDescription className="text-base">
                  Платформа аналитики на основе искусственного интеллекта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Прогнозирование трендов и автоматизация принятия решений с помощью ML-моделей
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">SecureNet</CardTitle>
                <CardDescription className="text-base">
                  Комплексная система кибербезопасности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Защита корпоративных данных и инфраструктуры от современных угроз
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
              Полный спектр IT-решений для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Code" size={32} className="text-primary" />
                </div>
                <CardTitle>Разработка ПО</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Кастомная разработка программного обеспечения под ключ
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Cloud" size={32} className="text-secondary" />
                </div>
                <CardTitle>Облачные решения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Миграция и оптимизация инфраструктуры в облаке
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" size={32} className="text-primary" />
                </div>
                <CardTitle>DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Автоматизация процессов развертывания и мониторинга
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <CardTitle>Консалтинг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Экспертные консультации по IT-стратегии
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
                  <h3 className="text-xl font-bold mb-2">Скорость внедрения</h3>
                  <p className="text-muted-foreground">
                    Быстрый запуск проектов благодаря проверенным методологиям и опытной команде
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
                  <h3 className="text-xl font-bold mb-2">Экспертиза</h3>
                  <p className="text-muted-foreground">
                    Команда сертифицированных специалистов с опытом работы в крупнейших международных проектах
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
                  <h3 className="text-xl font-bold mb-2">Безопасность</h3>
                  <p className="text-muted-foreground">
                    Полное соответствие международным стандартам информационной безопасности
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
                  <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
                  <p className="text-muted-foreground">
                    Круглосуточная техническая поддержка и оперативное решение любых вопросов
                  </p>
                </div>
              </div>
            </div>
          </div>
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

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground">info@techcorp.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Офис</h3>
              <p className="text-muted-foreground">Москва, ул. Примерная, 1</p>
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
                <span className="text-xl font-bold">TechCorp</span>
              </div>
              <p className="text-background/80">
                Инновационные технологические решения для вашего бизнеса
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
                <li><a href="#products" className="hover:text-primary transition-colors">Cloud Platform</a></li>
                <li><a href="#products" className="hover:text-primary transition-colors">AI Analytics</a></li>
                <li><a href="#products" className="hover:text-primary transition-colors">SecureNet</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li>info@techcorp.com</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2024 TechCorp. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
