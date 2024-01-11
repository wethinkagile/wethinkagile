import { BuyMeACoffee } from "../shared/icons";

export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-500">
        Kontaktieren Sie {" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="mailto:info 'At-Zeichen' wethinkagile.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stephan Kristyn
        </a> | <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://raw.githubusercontent.com/stevek-pro/kube-client-micro/main/imprint.html"
          target="_blank"
          rel="noopener noreferrer"
      >
          Impressum
      </a>
      </p>
      <a
        href="https://www.buymeacoffee.com/stevekpro"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-6 py-2 transition-all duration-75 hover:scale-105"
      >
        <BuyMeACoffee className="h-6 w-6" />
        <p className="font-medium text-gray-600">Laden Sie mich zum Kaffee ein</p>
      </a>
    </div>
  );
}
