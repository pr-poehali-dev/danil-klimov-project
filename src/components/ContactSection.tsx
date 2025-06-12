import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "Mail",
      title: "Email",
      value: "daniil@klimov.ru",
      link: "mailto:daniil@klimov.ru",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
    },
    {
      icon: "MapPin",
      title: "Локация",
      value: "Москва, Россия",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: "Github", link: "https://github.com", label: "GitHub" },
    { icon: "Linkedin", link: "https://linkedin.com", label: "LinkedIn" },
    { icon: "Twitter", link: "https://twitter.com", label: "Twitter" },
    { icon: "Instagram", link: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Свяжитесь со мной</h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Готов обсудить ваш проект или возможности сотрудничества
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-600 rounded-lg">
                      <Icon
                        name={item.icon as any}
                        size={20}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">{item.title}</p>
                      <a
                        href={item.link}
                        className="text-white font-medium hover:text-purple-300 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Социальные сети</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="p-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon
                      name={social.icon as any}
                      size={20}
                      className="text-white"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <Card className="bg-white/10 border-purple-400/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Отправить сообщение
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Имя
                    </label>
                    <Input
                      placeholder="Ваше имя"
                      className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Тема
                  </label>
                  <Input
                    placeholder="Тема сообщения"
                    className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Отправить сообщение
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
