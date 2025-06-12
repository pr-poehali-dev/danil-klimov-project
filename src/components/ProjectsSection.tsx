import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Современная платформа для онлайн-торговли с интуитивным интерфейсом и мощной административной панелью.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description:
        "Приложение для управления задачами с возможностью командной работы и трекингом прогресса.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["Next.js", "TypeScript", "Prisma", "tRPC"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Персональный сайт-портфолио с современным дизайном и адаптивной версткой.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Проекты</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Некоторые из моих последних работ, демонстрирующие различные навыки
            и подходы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700 flex-1"
                  >
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-200 text-purple-700 hover:bg-purple-50"
                  >
                    <Icon name="Github" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
          >
            Посмотреть все проекты
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
