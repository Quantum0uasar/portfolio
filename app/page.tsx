import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <h1 className="text-xl font-semibold">Portfolio</h1>

        <div className="flex items-center gap-6">
          <div className="hidden gap-6 text-sm text-gray-600 md:flex dark:text-gray-400">
            <a
              href="#about"
              className="transition hover:text-black dark:hover:text-white"
            >
              About
            </a>

            <a
              href="#experience"
              className="transition hover:text-black dark:hover:text-white"
            >
              Experience
            </a>

            <a
              href="#skills"
              className="transition hover:text-black dark:hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition hover:text-black dark:hover:text-white"
            >
              Projects
            </a>

            <a
              href="#cloud-computing"
              className="transition hover:text-black dark:hover:text-white"
            >
              Cloud
            </a>
          </div>

          <ThemeToggle />
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6">
        <p className="mb-4 text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Computer Science Student
        </p>

        <h2 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Building strong foundations in software, systems, and problem solving.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          Developing my technical skills through computer science coursework,
          hands-on projects, professional experience, and modern AI-assisted
          workflows.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            View Projects
          </a>

          <a
            href="#experience"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
          >
            Experience
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
          About
        </p>

        <h2 className="text-3xl font-semibold">What I&apos;m Learning</h2>

        <p className="mt-6 max-w-3xl leading-8 text-gray-600 dark:text-gray-400">
          My computer science coursework has developed my understanding of
          Data Structures & Algorithms, Computer Architecture, Software
          Engineering, Systems Programming, Discrete Structures, Logic,
          Statistics, and Object-Oriented Programming.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
          Experience
        </p>

        <h2 className="text-3xl font-semibold">
          Mortgage Specialist Assistant
        </h2>

        <p className="mt-2 text-gray-500">TD Bank</p>

        <ul className="mt-8 max-w-3xl space-y-4 leading-7 text-gray-600 dark:text-gray-400">
          <li>
            • Support Mortgage Specialists throughout the mortgage application
            process and assist with customer documentation.
          </li>

          <li>
            • Request required documents from customers and organize and index
            them within internal systems.
          </li>

          <li>
            • Enter and maintain client and mortgage application information
            within CreditLink.
          </li>

          <li>
            • Work with mortgage application processes, documentation
            requirements, and internal banking procedures.
          </li>

          <li>
            • Follow compliance requirements and established procedures while
            handling customer and financial information.
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
          Skills & Tools
        </p>

        <h2 className="text-3xl font-semibold">How I Work</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="text-xl font-semibold">Technical Skills</h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
              Programming, debugging, problem solving, Git/GitHub,
              command-line tools, APIs, databases, and software development
              workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="text-xl font-semibold">AI-Assisted Workflow</h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
              ChatGPT, Gemini, Claude, and Perplexity for technical research,
              learning new concepts, comparing approaches, debugging,
              summarizing information, and improving productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
          Projects
        </p>

        <h2 className="text-3xl font-semibold">Featured Projects</h2>

        <p className="mt-6 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
          Projects where I apply technical concepts to practical problems.
        </p>

        {/* HomeAtlas */}
        <div className="mt-10 rounded-2xl border border-gray-200 p-8 transition hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600">
          <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
            Full-Stack Web Application
          </p>

          <h3 className="text-3xl font-semibold">HomeAtlas</h3>

          <p className="mt-5 max-w-3xl leading-7 text-gray-600 dark:text-gray-400">
            A full-stack real-estate exploration platform that helps users
            search for homes, review property details, estimate mortgage and
            ownership costs, compare properties, and understand financial
            considerations such as cash to close and projected equity.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Interactive Property Search</p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                Displays property listings on an interactive Leaflet map with
                property information and photos.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Mortgage Analysis</p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                Calculates mortgage-related values, monthly ownership costs,
                cash-to-close estimates, and affordability information.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Property Comparison</p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                Allows users to compare two properties side by side and review
                financial differences.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Backend & Data</p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                Uses a FastAPI backend with SQLite and Pandas to provide
                property data and application functionality to the frontend.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium">Tech Stack</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Leaflet",
                "Python",
                "FastAPI",
                "SQLite",
                "Pandas",
                "Render",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://homeatlas-site.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Live Demo ↗
            </a>

            <a
              href="https://github.com/Quantum0uasar/homeatlas"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-300 px-5 py-3 font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
            >
              View GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Cloud Computing */}
      <section
        id="cloud-computing"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
          Cloud Computing
        </p>

        <h2 className="text-3xl font-semibold">AWS Projects</h2>

        <p className="mt-6 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
          Hands-on cloud projects focused on AWS architecture, deployment,
          security, networking, and production-style cloud services.
        </p>

        {/* AWS Project 01 */}
        <div className="mt-10 rounded-2xl border border-gray-200 p-8 transition hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600">
          {/* Header */}
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
                AWS Project 01
              </p>

              <h3 className="text-3xl font-semibold">
                Static Website Hosting on AWS
              </h3>
            </div>

            {/* Live AWS Badge */}
            <a
              href="https://learningaws2026.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 rounded-full border border-green-300 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-50 dark:border-green-900 dark:text-green-400 dark:hover:bg-green-950"
            >
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Live on AWS
            </a>
          </div>

          <p className="mt-6 max-w-3xl leading-7 text-gray-600 dark:text-gray-400">
            Designed and deployed a secure static website architecture on AWS.
            The website files are stored in a private Amazon S3 bucket and
            delivered globally through Amazon CloudFront. Route 53 manages DNS,
            AWS Certificate Manager provides HTTPS, AWS WAF adds web-layer
            protection, and Origin Access Control prevents direct public access
            to the S3 origin.
          </p>

          {/* Architecture Flow */}
          <div className="mt-8">
            <p className="text-sm font-medium">Architecture</p>

            <div className="mt-4 grid gap-3 md:grid-cols-5">
              <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                <p className="font-semibold">Route 53</p>
                <p className="mt-1 text-sm text-gray-500">DNS</p>
              </div>

              <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                <p className="font-semibold">CloudFront</p>
                <p className="mt-1 text-sm text-gray-500">Global CDN</p>
              </div>

              <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                <p className="font-semibold">Amazon S3</p>
                <p className="mt-1 text-sm text-gray-500">Private storage</p>
              </div>

              <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                <p className="font-semibold">ACM</p>
                <p className="mt-1 text-sm text-gray-500">HTTPS / TLS</p>
              </div>

              <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                <p className="font-semibold">AWS WAF</p>
                <p className="mt-1 text-sm text-gray-500">Web security</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Private S3 Origin</p>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                Direct access to the S3 objects is blocked. CloudFront accesses
                the bucket securely using Origin Access Control.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Global Content Delivery</p>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                CloudFront caches and delivers website content through AWS edge
                locations.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Custom Domain & HTTPS</p>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                learningaws2026.com is routed through Route 53 and protected
                with a TLS certificate from AWS Certificate Manager.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Web Security</p>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                AWS WAF provides protection at the web layer while the S3
                origin remains private.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-8">
            <p className="text-sm font-medium">AWS Services & Technologies</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Amazon S3",
                "CloudFront",
                "Route 53",
                "AWS WAF",
                "ACM",
                "OAC",
                "DNS",
                "HTTPS",
                "HTML",
                "CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://learningaws2026.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Launch AWS Project ↗
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Hosted directly on AWS — not Vercel.
          </p>
        </div>

          {/* AWS Project 02 */}
<div className="mt-10 rounded-2xl border border-gray-200 p-8 transition hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600">
  {/* Header */}
  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
    <div>
      <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
        AWS Project 02
      </p>

      <h3 className="text-3xl font-semibold">
        Three-Tier Web Application on AWS
      </h3>
    </div>

    <div className="w-fit rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 dark:border-gray-700 dark:text-gray-400">
      Deployed & Validated on AWS
    </div>
  </div>

  <p className="mt-6 max-w-3xl leading-7 text-gray-600 dark:text-gray-400">
    Built and deployed a three-tier web application on AWS with a public load
    balancer, private EC2 application servers, and a private MySQL database.
    The project was designed across two Availability Zones and tested by
    saving real messages from the browser into Amazon RDS.
  </p>

  {/* Result */}
  <div className="mt-8 rounded-xl bg-gray-100 p-6 dark:bg-gray-950">
    <p className="text-sm uppercase tracking-widest text-gray-500">
      End-to-End Result
    </p>

    <p className="mt-3 text-lg font-medium">
      Browser → Application Load Balancer → Private EC2 → Amazon RDS
    </p>

    <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-400">
      A user can submit a message from the browser. The request passes through
      the AWS load balancer to Flask running on private EC2 instances, and the
      message is stored permanently in the RDS MySQL database.
    </p>
  </div>

  {/* Live Demo Video */}
  <div className="mt-10">
    <div className="mb-4">
      <p className="text-sm uppercase tracking-widest text-gray-500">
        Deployment Demo
      </p>

      <h4 className="mt-2 text-xl font-semibold">
        Working Application
      </h4>

      <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-400">
        Recorded while the complete AWS environment was running. The demo
        shows a message being sent through the application and stored
        successfully in the database.
      </p>
    </div>

    <video
      controls
      playsInline
      preload="metadata"
      className="mx-auto w-full max-w-4xl rounded-xl border border-gray-200 dark:border-gray-800"
    >
      <source
        src="/projects/aws-three-tier/aws-three-tier-live-demo.mp4"
        type="video/mp4"
      />
    </video>
  </div>

  {/* Working App Screenshot */}
  <div className="mt-8">
    <img
  src="/projects/aws-three-tier/aws-three-tier-live-app-success.png"
  alt="AWS three-tier application successfully storing messages"
  className="mx-auto w-full max-w-3xl rounded-xl border border-gray-200 object-contain dark:border-gray-800"
/>

    <p className="mt-3 text-sm text-gray-500">
      Successful database write through the complete AWS architecture.
    </p>
  </div>

  {/* Architecture */}
  <div className="mt-10">
    <p className="text-sm font-medium">Architecture</p>

    <div className="mt-4 grid gap-3 md:grid-cols-4">
      <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
        <p className="font-semibold">Internet</p>
        <p className="mt-1 text-sm text-gray-500">
          User request
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
        <p className="font-semibold">Application Load Balancer</p>
        <p className="mt-1 text-sm text-gray-500">
          Public entry point
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
        <p className="font-semibold">EC2 + Auto Scaling</p>
        <p className="mt-1 text-sm text-gray-500">
          Private Flask servers
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
        <p className="font-semibold">Amazon RDS</p>
        <p className="mt-1 text-sm text-gray-500">
          Private MySQL database
        </p>
      </div>
    </div>
  </div>

  {/* VPC Walkthrough */}
  <div className="mt-10">
    <p className="text-sm uppercase tracking-widest text-gray-500">
      Infrastructure Walkthrough
    </p>

    <h4 className="mt-2 text-xl font-semibold">
      Custom VPC & Private Networking
    </h4>

    <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-400">
      I created six subnets across two Availability Zones: two public subnets
      for the load balancer, two private subnets for the application servers,
      and two private database subnets for RDS.
    </p>

    <video
  controls
  playsInline
  preload="metadata"
  className="mx-auto mt-5 w-full max-w-4xl rounded-xl border border-gray-200 dark:border-gray-800"
>
      <source
        src="/projects/aws-three-tier/aws-three-tier-vpc-walkthrough.mp4"
        type="video/mp4"
      />
    </video>
  </div>

  {/* Key Build Areas */}
  <div className="mt-10 grid gap-4 md:grid-cols-2">
    <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
      <p className="font-medium">High Availability</p>

      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
        Ran application servers across two Availability Zones and placed them
        behind an Application Load Balancer.
      </p>
    </div>

    <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
      <p className="font-medium">Automatic Recovery</p>

      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
        Terminated application instances during testing and verified that the
        Auto Scaling Group automatically launched replacement servers.
      </p>
    </div>

    <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
      <p className="font-medium">Private Database</p>

      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
        Amazon RDS MySQL stayed inside private database subnets and accepted
        database traffic only from the application tier.
      </p>
    </div>

    <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
      <p className="font-medium">Secure Credentials</p>

      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
        Stored the database password as a SecureString in Systems Manager
        Parameter Store instead of putting it directly inside the application.
      </p>
    </div>
  </div>

  {/* Evidence */}
  <div className="mt-10">
    <p className="text-sm font-medium">Deployment Evidence</p>

    <div className="mt-5 grid gap-5 md:grid-cols-2">
      <div>
        <img
          src="/projects/aws-three-tier/aws-three-tier-target-group-healthy.png"
          alt="AWS target group with two healthy EC2 application servers"
          className="rounded-xl border border-gray-200 dark:border-gray-800"
        />

        <p className="mt-2 text-sm text-gray-500">
          Two healthy application targets.
        </p>
      </div>

      <div>
        <img
          src="/projects/aws-three-tier/aws-three-tier-auto-scaling-group.png"
          alt="AWS Auto Scaling Group"
          className="rounded-xl border border-gray-200 dark:border-gray-800"
        />

        <p className="mt-2 text-sm text-gray-500">
          Auto Scaling Group maintaining application capacity.
        </p>
      </div>

      <div>
        <img
          src="/projects/aws-three-tier/aws-three-tier-alb-listener.png"
          alt="Application Load Balancer listener forwarding HTTP traffic"
          className="rounded-xl border border-gray-200 dark:border-gray-800"
        />

        <p className="mt-2 text-sm text-gray-500">
          HTTP traffic forwarded from the ALB to the application target group.
        </p>
      </div>

      <div>
        <img
          src="/projects/aws-three-tier/aws-three-tier-parameter-store.png"
          alt="AWS Systems Manager Parameter Store SecureString"
          className="rounded-xl border border-gray-200 dark:border-gray-800"
        />

        <p className="mt-2 text-sm text-gray-500">
          Database credentials stored as a SecureString.
        </p>
      </div>
    </div>
  </div>

  {/* Where Useful */}
  <div className="mt-10">
    <p className="text-sm uppercase tracking-widest text-gray-500">
      Where This Architecture Is Useful
    </p>

    <h4 className="mt-2 text-xl font-semibold">
      Real Applications That Need Separation and Reliability
    </h4>

    <p className="mt-4 max-w-3xl leading-7 text-gray-600 dark:text-gray-400">
      This type of architecture can support customer portals, booking systems,
      dashboards, internal business applications, e-commerce services, and
      small SaaS platforms where the web entry point can be public while the
      application servers and database stay private.
    </p>
  </div>

  {/* Skills Demonstrated */}
  <div className="mt-10 rounded-xl border border-gray-200 p-6 dark:border-gray-800">
    <p className="text-sm uppercase tracking-widest text-gray-500">
      Skills Demonstrated
    </p>

    <h4 className="mt-2 text-xl font-semibold">
      What I Actually Built & Tested
    </h4>

    <div className="mt-5 grid gap-3 text-sm leading-6 text-gray-600 md:grid-cols-2 dark:text-gray-400">
      <p>• Designed a custom AWS VPC and subnet structure.</p>
      <p>• Deployed EC2 instances inside private subnets.</p>
      <p>• Configured an Application Load Balancer and target group.</p>
      <p>• Built an Auto Scaling deployment using an AMI and Launch Template.</p>
      <p>• Connected a Flask application to Amazon RDS MySQL.</p>
      <p>• Restricted communication using Security Groups.</p>
      <p>• Used IAM roles and Systems Manager Parameter Store.</p>
      <p>• Tested instance failure and automatic replacement.</p>
      <p>• Diagnosed and fixed a real database authentication problem.</p>
      <p>• Verified the entire application from browser to database.</p>
    </div>
  </div>

  {/* Tech Stack */}
  <div className="mt-10">
    <p className="text-sm font-medium">
      AWS Services & Technologies
    </p>

    <div className="mt-4 flex flex-wrap gap-2">
      {[
        "Amazon VPC",
        "EC2",
        "Application Load Balancer",
        "Target Groups",
        "Auto Scaling",
        "Launch Templates",
        "Amazon RDS",
        "MySQL",
        "IAM",
        "SSM Parameter Store",
        "VPC Endpoint",
        "Security Groups",
        "Python",
        "Flask",
        "HTML",
        "JavaScript",
      ].map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* Cost / Status */}
  <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-800">
    <p className="text-sm leading-6 text-gray-500">
      Successfully deployed and validated on AWS. The temporary cloud
      environment was decommissioned after testing to avoid unnecessary
      recurring infrastructure costs.
    </p>
  </div>
        </div> 
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl border-t border-gray-200 px-6 py-10 text-sm text-gray-500 dark:border-gray-800">
        Computer Science Portfolio
      </footer>
    </main>
  );
}