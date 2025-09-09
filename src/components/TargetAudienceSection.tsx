import { Palette, Globe, Camera, Megaphone, Building, User, Users } from "lucide-react";

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: Building,
      title: "Agencias de publicidad",
      description: "Que aún no tienen un equipo de performance propio."
    },
    {
      icon: Palette,
      title: "Agencias de branding y diseño",
      description: "Que quieren sumar Paid Media."
    },
    {
      icon: Camera,
      title: "Agencias de social media",
      description: "Que buscan resultados medibles."
    },
    {
      icon: Globe,
      title: "Estudios web",
      description: "Que desean ofrecer un ecosistema completo."
    },
    {
      icon: Megaphone,
      title: "Agencias de PR y comunicación",
      description: "Que necesitan potenciar lanzamientos."
    },
    {
      icon: Users,
      title: "Consultores de marketing",
      description: "Que desean digitalizar su oferta."
    },
    {
      icon: User,
      title: "Freelancers",
      description: "Que quieren escalar sin sobrecargarse."
    }
  ];

  return (
    <section className="py-14 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pensado para agencias{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              como la tuya
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="card-shadow bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-smooth">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{audience.title}</h3>
                  <p className="text-white/80 text-sm">{audience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;