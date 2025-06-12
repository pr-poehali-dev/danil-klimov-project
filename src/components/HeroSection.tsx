import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50 opacity-50"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">ДК</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Daniil Klimov
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Музыкант • Исполнитель • Артист
          </p>
        </div>
      </div>

      {/* Секция анонса концерта */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 py-16 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                ШОУ STARS PARTY
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Привет! Соскучились? И я! Тогда жду тебя на своем концерте!
                <br />
                <span className="font-semibold">Ваш Daniil Klimov</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-white">28</div>
                  <div className="text-white/80 text-sm">ФЕВРАЛЯ</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-white">19:00</div>
                  <div className="text-white/80 text-sm">ВРЕМЯ</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-white">
                    Дворец Молодёжи
                  </div>
                  <div className="text-white/80 text-sm">МЕСТО</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
                >
                  Купить билеты
                  <Icon name="Ticket" className="ml-2" size={20} />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold"
                >
                  Подробнее
                  <Icon name="Music" className="ml-2" size={20} />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://cdn.poehali.dev/files/1949b2b9-2c10-45ce-9d72-f389d7f255a1.jpg"
                  alt="Daniil Klimov - Stars Party Concert"
                  className="w-full h-auto max-w-md mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Декоративные звезды */}
              <div className="absolute -top-4 -right-4 text-yellow-300 text-4xl animate-pulse">
                ✨
              </div>
              <div className="absolute -bottom-4 -left-4 text-yellow-300 text-3xl animate-pulse">
                ⭐
              </div>
              <div className="absolute top-1/2 -left-8 text-white text-2xl animate-bounce">
                🎵
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-purple-400" />
      </div>
    </section>
  );
};

export default HeroSection;
