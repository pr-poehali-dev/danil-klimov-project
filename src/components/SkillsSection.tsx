import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    { name: "React / Next.js", level: 90, color: "bg-blue-500" },
    { name: "TypeScript", level: 85, color: "bg-blue-600" },
    { name: "Node.js", level: 80, color: "bg-green-500" },
    { name: "Python", level: 75, color: "bg-yellow-500" },
    { name: "UI/UX Design", level: 85, color: "bg-purple-500" },
    { name: "Database Design", level: 70, color: "bg-orange-500" },
  ];

  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST API"],
    },
    {
      title: "Инструменты",
      skills: ["Git", "Docker", "Figma", "VS Code", "Webpack"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Навыки</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Технологии и инструменты, которые я использую для создания
            качественных решений
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Прогресс навыков */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Основные технологии
            </h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3" />
              </div>
            ))}
          </div>

          {/* Категории навыков */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Экспертиза
            </h3>
            {categories.map((category, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
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

export default SkillsSection;
