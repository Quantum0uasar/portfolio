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
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl border-t border-gray-200 px-6 py-10 text-sm text-gray-500 dark:border-gray-800">
        Computer Science Portfolio
      </footer>
    </main>
  );
}