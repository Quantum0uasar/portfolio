import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <h1 className="text-xl font-semibold">Jaideep Singh</h1>

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
      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center gap-10 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-4 text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Jaideep Singh · Computer Science @ Western University
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            Building full-stack applications and cloud systems.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Computer Science student at Western University building deployed
            software with Python, FastAPI, React, AWS, Docker, and real-time
            data systems.
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
        </div>

        {/* Profile Photo */}
        <img
          src="/photo.PNG"
          alt="Jaideep Singh"
          className="h-48 w-48 shrink-0 rounded-full border-2 border-gray-200 object-cover object-top shadow-lg md:h-64 md:w-64 dark:border-gray-800"
        />
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
          About
        </p>

        <h2 className="text-3xl font-semibold">Background</h2>

        <p className="mt-6 max-w-3xl leading-8 text-gray-600 dark:text-gray-400">
          I&apos;m an Honours Computer Science student at Western University
          with a minor in Software Engineering and a focus on full-stack
          development and cloud systems. I learn primarily by building and
          deploying real applications, from FastAPI web platforms to
          event-driven AWS architectures.
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
            <h3 className="text-xl font-semibold">Software Development</h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
              Python, FastAPI, Flask, JavaScript, Java, SQL (MySQL, SQLite),
              REST API design, Git/GitHub, and command-line tooling — with an
              AI-assisted workflow for research, debugging, and code review.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="text-xl font-semibold">Cloud & AWS</h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
              VPC design and private networking, EC2 with Auto Scaling and
              load balancing, RDS MySQL, S3, CloudFront, Route 53, WAF, IAM,
              and Systems Manager Parameter Store. Currently pursuing the AWS
              Cloud Practitioner certification.
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

            <div className="w-fit rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 dark:border-gray-700 dark:text-gray-400">
              Deployed & Validated on AWS
            </div>
          </div>

          <p className="mt-6 max-w-3xl leading-7 text-gray-600 dark:text-gray-400">
            Designed and deployed a secure static website architecture on AWS.
            Website files were stored in a private Amazon S3 bucket and
            delivered globally through Amazon CloudFront. Route 53 handled DNS,
            AWS Certificate Manager provided HTTPS, AWS WAF added web-layer
            protection, and Origin Access Control prevented direct public access
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
                Direct access to the S3 objects was blocked. CloudFront
                accessed the private bucket securely using Origin Access
                Control.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Global Content Delivery</p>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                CloudFront cached and delivered website content through AWS
                edge locations.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Custom Domain & HTTPS</p>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                During deployment, learningaws2026.com was routed through
                Route 53 and protected with a TLS certificate from AWS
                Certificate Manager.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Web Security</p>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                AWS WAF provided protection at the web layer while the S3
                origin remained private.
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

          {/* GitHub */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/Quantum0uasar/aws-static-website"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              View Project on GitHub ↗
            </a>
          </div>

          {/* Cost / Status */}
          <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
            <p className="text-sm leading-6 text-gray-500">
              Successfully deployed and validated on AWS. The live AWS
              environment was later decommissioned to avoid ongoing cloud
              infrastructure charges. Source code and project documentation
              remain available on GitHub.
            </p>
          </div>
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
            Built and deployed a three-tier web application on AWS with a
            public load balancer, private EC2 application servers, and a
            private MySQL database. The project was designed across two
            Availability Zones and tested by saving real messages from the
            browser into Amazon RDS.
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
              A user can submit a message from the browser. The request passes
              through the AWS load balancer to Flask running on private EC2
              instances, and the message is stored permanently in the RDS
              MySQL database.
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
                Recorded while the complete AWS environment was running. The
                demo shows a message being sent through the application and
                stored successfully in the database.
              </p>
            </div>

            <video
              controls
              playsInline
              preload="metadata"
              className="mx-auto w-full max-w-2xl rounded-xl border border-gray-200 dark:border-gray-800"
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
              className="mx-auto w-full max-w-2xl rounded-xl border border-gray-200 object-contain dark:border-gray-800"
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
                <p className="mt-1 text-sm text-gray-500">User request</p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
                <p className="font-semibold">
                  Application Load Balancer
                </p>
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
              I created six subnets across two Availability Zones: two public
              subnets for the load balancer, two private subnets for the
              application servers, and two private database subnets for RDS.
            </p>

            <video
              controls
              playsInline
              preload="metadata"
              className="mx-auto mt-5 w-full max-w-2xl rounded-xl border border-gray-200 dark:border-gray-800"
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
                Ran application servers across two Availability Zones and
                placed them behind an Application Load Balancer.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Automatic Recovery</p>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                Terminated application instances during testing and verified
                that the Auto Scaling Group automatically launched replacement
                servers.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Private Database</p>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                Amazon RDS MySQL stayed inside private database subnets and
                accepted database traffic only from the application tier.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Secure Credentials</p>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                Stored the database password as a SecureString in Systems
                Manager Parameter Store instead of putting it directly inside
                the application.
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
                  HTTP traffic forwarded from the ALB to the application target
                  group.
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
              This type of architecture can support customer portals, booking
              systems, dashboards, internal business applications, e-commerce
              services, and small SaaS platforms where the web entry point can
              be public while the application servers and database stay
              private.
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
              <p>
                • Built an Auto Scaling deployment using an AMI and Launch
                Template.
              </p>
              <p>• Connected a Flask application to Amazon RDS MySQL.</p>
              <p>• Restricted communication using Security Groups.</p>
              <p>• Used IAM roles and Systems Manager Parameter Store.</p>
              <p>• Tested instance failure and automatic replacement.</p>
              <p>
                • Diagnosed and fixed a real database authentication problem.
              </p>
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

        {/* AWS Project 03 */}
        <div className="mt-10 rounded-2xl border border-gray-200 p-8 transition hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600">
          {/* Header */}
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
                AWS Project 03
              </p>

              <h3 className="text-3xl font-semibold">
                FleetPulse — Real-Time Vehicle Telemetry Platform
              </h3>
            </div>

            <div className="w-fit rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 dark:border-gray-700 dark:text-gray-400">
              Deployed & Validated on AWS
            </div>
          </div>

          <p className="mt-6 max-w-3xl leading-7 text-gray-600 dark:text-gray-400">
            Built an event-driven vehicle telemetry platform that streams GPS,
            speed, battery, engine temperature, and vehicle health data through
            AWS. A Python simulator publishes telemetry to Amazon Kinesis, AWS
            Lambda processes each event, DynamoDB stores live vehicle state and
            alerts, S3 keeps telemetry history, and a FastAPI WebSocket backend
            deployed on ECS Fargate feeds a live React dashboard.
          </p>

          {/* Live Dashboard */}
          <div className="mt-10">
            <div className="mb-4">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Live Operations Dashboard
              </p>

              <h4 className="mt-2 text-xl font-semibold">
                Real-Time Fleet Monitoring
              </h4>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                The dashboard displays live vehicle positions, fleet speed,
                battery health, vehicle telemetry, and automatically detected
                anomalies. The screenshot and video below were captured while
                the AWS pipeline was running.
              </p>
            </div>

            <img
              src="/projects/fleetpulse/fleetpulse-dashboard.png"
              alt="FleetPulse live operations dashboard showing vehicle telemetry and alerts"
              className="w-full rounded-xl border border-gray-200 object-contain dark:border-gray-800"
            />

            <video
              controls
              playsInline
              preload="metadata"
              className="mx-auto mt-6 w-full max-w-4xl rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <source
                src="/projects/fleetpulse/fleetpulse-live-demo.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Architecture */}
          <div className="mt-10">
            <p className="text-sm font-medium">Architecture</p>

            <div className="mt-4 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
              {[
                ["Simulator", "Python telemetry"],
                ["Kinesis", "Streaming ingest"],
                ["Lambda", "Event processing"],
                ["DynamoDB + S3", "Live + history"],
                ["FastAPI / ECS", "Containerized API"],
                ["React", "Live dashboard"],
              ].map(([name, detail]) => (
                <div
                  key={name}
                  className="rounded-xl border border-gray-200 p-4 dark:border-gray-800"
                >
                  <p className="font-semibold">{name}</p>
                  <p className="mt-1 text-sm text-gray-500">{detail}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Simulator → Kinesis → Lambda → DynamoDB / S3 → FastAPI on ECS
              Fargate → WebSocket → React
            </p>
          </div>

          {/* Measured Results */}
          <div className="mt-10">
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Measured Results
            </p>

            <h4 className="mt-2 text-xl font-semibold">
              AWS-Hosted API Test
            </h4>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
                <p className="text-2xl font-semibold">10 / 10</p>
                <p className="mt-1 text-sm text-gray-500">
                  Successful requests
                </p>
              </div>

              <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
                <p className="text-2xl font-semibold">13.52 req/s</p>
                <p className="mt-1 text-sm text-gray-500">Throughput</p>
              </div>

              <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
                <p className="text-2xl font-semibold">640.10 ms</p>
                <p className="mt-1 text-sm text-gray-500">Average latency</p>
              </div>

              <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
                <p className="text-2xl font-semibold">716.92 ms</p>
                <p className="mt-1 text-sm text-gray-500">P95 latency</p>
              </div>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Small development concurrency test against the ECS-hosted
              FastAPI backend; not presented as a production-scale benchmark.
            </p>
          </div>

          {/* Alerting */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Automated Anomaly Detection</p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                Lambda evaluates incoming telemetry and creates alerts for high
                engine temperature, low battery, high speed, and vehicle fault
                codes. A demo anomaly at 110°C was detected and surfaced in the
                live dashboard.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Infrastructure as Code</p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                Provisioned the AWS environment with Terraform, including
                Kinesis, Lambda, DynamoDB, S3, SQS, ECR, ECS Fargate,
                CloudWatch, IAM roles, security groups, and an AWS Budget.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Container Deployment</p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                Containerized the FastAPI backend with Docker, pushed the image
                to Amazon ECR, and ran it as an ARM64 ECS Fargate task with
                CloudWatch logging and a dedicated task IAM role.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-950">
              <p className="font-medium">Real-Time WebSockets</p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-500">
                FastAPI streams current vehicle and alert data to the React
                frontend over WebSockets so the map and fleet metrics update
                without manual page refreshes.
              </p>
            </div>
          </div>

          {/* AWS Evidence */}
          <div className="mt-10">
            <p className="text-sm uppercase tracking-widest text-gray-500">
              AWS Deployment Evidence
            </p>

            <h4 className="mt-2 text-xl font-semibold">
              Validated Cloud Resources
            </h4>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <img
                  src="/projects/fleetpulse/fleetpulse-ecs.png"
                  alt="FleetPulse ECS cluster with a running Fargate task"
                  className="rounded-xl border border-gray-200 dark:border-gray-800"
                />
                <p className="mt-2 text-sm text-gray-500">
                  ECS cluster with the backend Fargate task running.
                </p>
              </div>

              <div>
                <img
                  src="/projects/fleetpulse/fleetpulse-kinesis.png"
                  alt="FleetPulse Kinesis telemetry stream active"
                  className="rounded-xl border border-gray-200 dark:border-gray-800"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Active provisioned Kinesis telemetry stream.
                </p>
              </div>

              <div>
                <img
                  src="/projects/fleetpulse/fleetpulse-dynamodb.png"
                  alt="FleetPulse DynamoDB live vehicle and alert tables"
                  className="rounded-xl border border-gray-200 dark:border-gray-800"
                />
                <p className="mt-2 text-sm text-gray-500">
                  DynamoDB tables for live vehicle state and detected alerts.
                </p>
              </div>

              <div>
                <img
                  src="/projects/fleetpulse/fleetpulse-ecr.png"
                  alt="FleetPulse backend repository in Amazon ECR"
                  className="rounded-xl border border-gray-200 dark:border-gray-800"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Docker backend image stored in Amazon ECR.
                </p>
              </div>
            </div>

            <video
              controls
              playsInline
              preload="metadata"
              className="mx-auto mt-6 w-full max-w-4xl rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <source
                src="/projects/fleetpulse/fleetpulse-aws-proof.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Tech Stack */}
          <div className="mt-10">
            <p className="text-sm font-medium">AWS Services & Technologies</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Amazon Kinesis",
                "AWS Lambda",
                "DynamoDB",
                "Amazon S3",
                "Amazon SQS",
                "Amazon ECR",
                "ECS Fargate",
                "CloudWatch",
                "IAM",
                "Terraform",
                "Docker",
                "Python",
                "FastAPI",
                "WebSockets",
                "React",
                "Vite",
                "Leaflet",
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

          {/* GitHub */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/Quantum0uasar/fleetpulse"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              View FleetPulse on GitHub ↗
            </a>
          </div>

          {/* Cost / Status */}
          <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-800">
            <p className="text-sm leading-6 text-gray-500">
              Successfully deployed and validated end to end on AWS. After
              recording the dashboard, deployment evidence, and performance
              results, the temporary AWS infrastructure was destroyed with
              Terraform to avoid unnecessary recurring costs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-gray-200 px-6 py-10 text-sm text-gray-500 md:flex-row md:items-center md:justify-between dark:border-gray-800"
      >
        <p className="font-medium text-black dark:text-white">
          Jaideep Singh — Computer Science, Western University
        </p>

        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:jaideep.s2024@gmail.com"
            className="transition hover:text-black dark:hover:text-white"
          >
            Email
          </a>

          <a
            href="https://github.com/Quantum0uasar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-black dark:hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jaideep-singh-a541882aa"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-black dark:hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
