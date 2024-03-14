import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import { nFormatter } from "@/lib/utils";



export default async function Home() {

  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/stevek-pro/wethinkagile",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

return (
      <>

        <div className="z-10 w-full max-w-xl px-5 xl:px-0">
          <a
              href="https://blog.wethinkagile.com"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
          >
            <p className="text-sm font-semibold text-[#1d9bf0]">
              Besuchen Sie meinen Blog
            </p>
          </a>

          <h1
              className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
              style={{animationDelay: "0.15s", animationFillMode: "forwards"}}
          >Mut, Fokus, Verbindlichkeit, Respekt, Freimut
          </h1>
          <p
              className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
              style={{animationDelay: "0.25s", animationFillMode: "forwards"}}
          >
            Beauftragen Sie einen <strong>Scrum</strong>.org ® Professional Scrum Master um die Vision Ihres Produktes zu realisieren - Früh und Oft.
          </p>
          <div
              className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
              style={{animationDelay: "0.3s", animationFillMode: "forwards"}}
          >
            <a
                className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
                href={DEPLOY_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
              <svg
                  className="h-4 w-4 group-hover:text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M12 4L20 20H4L12 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
              </svg>
              <p>Sofortiger Roll-Out</p>
            </a>
            <a
                className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
                href="https://github.com/stevek-pro/wethinkagile"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Github/>
              <p>
                <span className="hidden sm:inline-block">Auf</span> GitHub merken{" "}
                <span className="font-semibold">{nFormatter(stars)}</span>
              </p>
            </a>
          </div>
        </div>
        <div
            className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-1 xl:px-0">
          {features.map(({title, description, demo, large}) => (
              <Card
                  key={title}
                  title={title}
                  description={description}
                  demo={
                    title === "Was bekommen Sie nur bei mir?" ? (
                        <ComponentGrid/>
                    ) : (
                        demo
                    )
                  }
                  large={large}
              />
          ))}
        </div>
      </>
  );
}

const features = [
  {
    title: "Was bekommen Sie nur bei mir?",
    description:
      "Agiles Coaching, Informationssicherheit, BSI-Regulatorik, DE-Cloud, Rechtskentnisse, FullStack, GitOps, ISO-Normen",
    large: true,
    demo: <WebVitals />
  },
];
