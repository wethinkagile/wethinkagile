import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import { nFormatter } from "@/lib/utils";
import {Ghost} from "lucide-react";



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
            <Ghost className="h-5 w-5 text-[#1d9bf0]" />
            <p className="text-sm font-semibold text-[#1d9bf0]">
              Visit my Blog about Software Engineering
            </p>
          </a>

          <h1
              className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
              style={{animationDelay: "0.15s", animationFillMode: "forwards"}}
          >Courage Focus, Commitment, Respect and Openness
          </h1>
          <p
              className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
              style={{animationDelay: "0.25s", animationFillMode: "forwards"}}
          >
            Beauftragen Sie einen <strong>Scrum</strong>.org® <a
              href="https://www.scrum.org/user/1352608"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
          >Professional Scrum Master™</a> um die Vision Ihres Produktes zu realisieren - Iterativ, Empirisch, Früh und Oft.
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
              <p>Releasen</p>
            </a>
            <a
                className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
                href="https://github.com/wethinkagile"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Github/>
              <p>
                <span className="hidden sm:inline-block">Merken</span>{" "}
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
                    title === "Offered Expertise and Professionalism in" ? (
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
    title: ".. percent focus on your project with extensive experience in..",
    description:
      "Agile Coaching, Information Security, Regulatory (BSI), Cloud, Law, FullStack, GitOps, DevOps, ISO/IEC",
    large: true,
    demo: <WebVitals />
  },
];
