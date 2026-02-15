import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

interface JobDescription {
  title: string;
  type: string;
  location: string;
  description: string[];
  skills: string[];
  experience: string;
  education: string;
}

const jobs: JobDescription[] = [
  {
    title: "Technical Support Analyst",
    type: "Full-time",
    location: "Remote",
    description: [
      "Connect and build rapport with a variety of customers by actively listening to our customers, asking the right questions and offering solutions (products and services) which cater to customer needs",
      "Deliver reliable solutions to our customers with a sense of urgency and sound of judgment",
      "Complete accurate transactions in a timely manner",
      "Be at ease working in a structured and goal-oriented environment (call duration, quality, customer retention)",
      "Embrace change in a fast-paced, performance driven team environment",
    ],
    skills: [
      "Must have strong computer literacy, windows and Internet navigation knowledge",
      "Available to work on a flexible schedule to meet customer demand",
      "Excellent active listening and communication skills",
      "Customer Champion: passionate about providing world class customer service",
      "Strong problem solving skills and ability to deal with customers tactfully and effectively in a fast paced environment",
      "Punctual and committed to work schedules",
      "Must have superior verbal communication and interpersonal skills with a professional telephone manner",
      "Able to multitask in a fast paced environment - Should have strong team work skills and accountability",
      "Career focused",
    ],
    experience: "2 Years in Technical Support Role",
    education: "Bachelor's or minimum 2 years of Technical Support",
  },
  {
    title: "SCCM Administrator",
    type: "Full-time",
    location: "On-site",
    description: [
      "Automate provisioning, configuration, and ongoing support tasks for: Intel based server hardware – Cisco Unified Computing System (UCS); Hypervisors – VMWare ESX, Hyper-V; KVM; Operating Systems – RedHat Linux, Microsoft Windows Server; Network devices – Cisco, F5, IBM",
      "Work directly with users to prioritize requests and frequently update users to make certain that they are informed of progress and estimated delivery timeframe",
      "Effectively coordinate support escalation communication",
      "Participate in the development and maintenance of appropriate project technical documentation including design, configuration, installation",
      "Automate Build-Test-Deploy process in support of application development",
      "Maintain up-to-date knowledge of new hardware and software developments; participate in the evaluation of alternative approaches and new software or modifications to enhance operations and development activities",
    ],
    skills: [
      "3 years of senior level systems administrator experience; preferably in enterprise level data centers with production environments over 1000 servers",
      "Bachelor's degree from an accredited college/university or equivalent work experience",
      "Enterprise level experience with Microsoft SCCM 2012 as a Systems Administrator that includes report and query writing in addition to creating applications / collections and deploying applications in addition to monitoring SCCM client health/server uptime",
      "Advanced experience with Windows 7 and Windows 10 along with Scripting with VBS and Powershell",
      "Experience operating in a large enterprise environment and understanding of implementation of systems at scale",
      "Strong verbal/written communication, problem solving, analytical and independent judgment skills to support an environment driven by customer service and team work; ability to positively influence, mentor and be a credible source of knowledge to less experienced team members",
    ],
    experience: "3 years working with SCCM 2012 in an enterprise environment",
    education: "Bachelor's degree",
  },
  {
    title: "Citrix Administrator",
    type: "Contract",
    location: "Hybrid",
    description: [
      "Resource will need to have extensive Citrix skills and will be a primary resource in managing Citrix environment",
      "Implement and support Citrix XenApp / Citrix XenDesktop in multiple environments",
      "Administering Citrix provisioning Services",
      "Farm and Servers Reports / Maintenance",
      "Installing / publishing applications in Citrix farms",
      "Configure and support NetScaler and Access Gateway solutions to support scalable delivery of applications and desktops to various endpoints",
      "Experience in architecture and establishing Citrix environment with high availability",
      "Hands-on experience of XenApp configuration, XenDesktop, Provisioning Server, some hypervisor and management experience (vSphere/vCenter)",
      "Day to day handling of Citrix Issues / Citrix User Issues",
      "Experience with troubleshooting Citrix XenApp/XenDesktop end-user related issues",
      "Experience with and knowledge of third-party solutions related to desktop virtualization – including thin terminals, thin boot applications, profile/personality management, print management, etc.",
      "Effectively collaborate and communicate with internal and customer engineers for supporting technologies – including storage, networking, security, etc.",
      "VMWare experience/knowledge would be a plus",
    ],
    skills: [
      "Manage Citrix environment, including updates, hot fixes, application access, and the printing environment",
      "Perform application installations and updates to the Citrix environment. Work with internal and external personnel to implement new applications",
      "Work with internal software application managers to ensure the applications are performing at optimal levels",
      "Work with software vendors to manage installation and day-to-day management of applications in Citrix and on local devices (laptops, tablets, etc.)",
      "Document software installation and update processes. Train secondary personnel on installations and updates",
      "Work with internal support desk personnel to resolve Tier II and III application issues",
      "Work with external database support personnel to resolve issues",
      "Manage medium to large scale projects to make a positive impact on business operations",
      "Secondary resource for many of the corporate IT director responsibilities",
    ],
    experience: "5 Years in Citrix XenApp/XenDesktop",
    education: "Bachelor's degree",
  },
  {
    title: "System Administrator",
    type: "Full-time",
    location: "Remote",
    description: [
      "Deliver excellent customer service",
      "Perform advanced monitoring, administration, maintenance, and troubleshooting of Microsoft technologies, including Windows Server Operating Systems, SQL Server and SQL databases, IIS, Active Directory, Group Policies, and Microsoft Clustering",
      "Build and configure systems, including operating systems and applications",
      "Secure the environment, including the remediation and mitigation of vulnerabilities",
      "Participate in the development, maintenance, and testing of High Availability and Disaster Recovery",
      "Provide oversight for IT projects to validate alignment with our strategic goals and technical standards",
      "Ensure technical consistency between different IT teams through participation in internal technical user groups and change management initiatives",
      "Be the lead role in technically complex situations",
      "Lead and participate in the definition and documentation of IT strategies, standards, procedures, and architecture information to describe our IT environment",
      "Work closely with other departments to identify, recommend, and implement solutions in a project oriented environment",
      "Develop effective working relationships with peers and customers",
      "Manage a ticket queue for system requests",
      "Participate in a rotating 24x7 \"on call\" coverage schedule for data center and application related issues",
    ],
    skills: [
      "In-depth knowledge and experience in installing, configuring, and administering Microsoft Core Infrastructure technologies: Active Directory, DNS, DHCP, Group Policies",
      "Microsoft Server Operating System technologies: Windows Server 2012 R2 and 2016",
      "Microsoft Enterprise technologies: SQL server 2012 or greater",
      "Knowledge and experience in security and protecting an enterprise environment in the form of vulnerability remediation, following best practices, creating controls, following processes, researching current trends, and recommending mitigations",
      "Enterprise monitoring experience with products such as What's Up Gold and SolarWinds, including installation, configuration, and maintenance",
      "The ability to perform and understand baselines and native Microsoft performance counters with the capability to interpret results from all toolsets",
      "Ability to communicate effectively to both IT and to our internal customers",
      "Ability to exercise independent judgement and maintain confidentiality",
    ],
    experience: "5 Years in System Administrator role",
    education: "Bachelor's degree",
  },
];

interface JobModalProps {
  job: JobDescription;
  onClose: () => void;
}

const JobModal = ({ job, onClose }: JobModalProps) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const mailtoLink = `mailto:info@ubersoftinc.com?subject=${encodeURIComponent(job.title)} - First/Last Name`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-background border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="mb-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              {job.title}
            </h2>
            <div className="flex gap-3 text-sm">
              <span className="px-3 py-1 bg-gold/10 text-gold border border-gold/20">
                {job.type}
              </span>
              <span className="px-3 py-1 bg-muted text-muted-foreground border border-border">
                {job.location}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Job Description
              </h3>
              <ul className="space-y-2">
                {job.description.map((item, index) => (
                  <li key={index} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Skills & Qualifications
              </h3>
              <ul className="space-y-2">
                {job.skills.map((skill, index) => (
                  <li key={index} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-gold mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Experience
                </h3>
                <p className="text-muted-foreground text-sm">{job.experience}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Education
                </h3>
                <p className="text-muted-foreground text-sm">{job.education}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <a
              href={mailtoLink}
              className="inline-block w-full text-center bg-gold text-section-dark font-semibold px-10 py-4 hover:bg-gold/90 transition-colors text-sm uppercase tracking-wider"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CareersSection = () => {
  const [selectedJob, setSelectedJob] = useState<JobDescription | null>(null);

  return (
    <>
      <section id="careers" className="py-24 bg-section-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Join Our Team
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Career @ Ubersoft
            </h2>
            <p className="mt-6 text-muted-foreground">
              We're always looking for talented individuals to join our growing team.
              Check out our current openings below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {jobs.map((job) => (
              <div
                key={job.title}
                onClick={() => setSelectedJob(job)}
                className="flex items-center justify-between p-6 bg-background border border-border hover:border-gold transition-colors group cursor-pointer"
              >
                <div>
                  <h3 className="font-semibold text-foreground text-lg group-hover:text-gold transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {job.type} · {job.location}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="mailto:careers@ubersoftinc.com"
              className="inline-block bg-gold text-section-dark font-semibold px-10 py-4 hover:bg-gold/90 transition-colors text-sm uppercase tracking-wider"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
};

export default CareersSection;
