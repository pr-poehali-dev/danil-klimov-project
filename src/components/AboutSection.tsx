import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const highlights = [
    {
      icon: "Code",
      title: "Разработка",
      description:
        "Создаю современные веб-приложения с использованием актуальных технологий",
    },
    {
      icon: "Palette",
      title: "Дизайн",
      description: "Проектирую интуитивные пользовательские интерфейсы",
    },
    {
      icon: "Zap",
      title: "Оптимизация",
      description: "Обеспечиваю высокую производительность и отзывчивость",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">О себе</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Привет! Я Данил — веб-разработчик с страстью к созданию
              качественных цифровых продуктов. Специализируюсь на
              Frontend-разработке и UX/UI дизайне.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Моя цель — создавать веб-решения, которые не только красиво
              выглядят, но и решают реальные задачи пользователей. Каждый проект
              для меня — это возможность воплотить креативные идеи в жизнь.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "TypeScript", "Node.js", "Next.js", "Tailwind"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Icon
                        name={item.icon as any}
                        size={24}
                        className="text-purple-600"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
