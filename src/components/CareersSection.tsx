import { ArrowRight } from "lucide-react";

const jobs = [
  { title: "Technical Support Analyst", type: "Full-time", location: "Remote" },
  { title: "SCCM Administrator", type: "Full-time", location: "On-site" },
  { title: "Citrix Administrator", type: "Contract", location: "Hybrid" },
  { title: "System Administrator", type: "Full-time", location: "Remote" },
];

const CareersSection = () => {
  return (
    <section id="careers" className="py-24 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Join Our Team
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Career @ Ubersoft
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="flex items-center justify-between p-6 bg-card rounded-lg border border-border hover:border-secondary/50 transition-colors group cursor-pointer"
            >
              <div>
                <h3 className="font-semibold text-foreground text-lg group-hover:text-secondary transition-colors">
                  {job.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {job.type} · {job.location}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
