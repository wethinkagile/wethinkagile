import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://wethinkagile.com">
            <Image
              src="/logo.png"
              alt="We Think Agile Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">München, den 11. Januar '24</h3>
          <p className="text-sm text-gray-500">
            Ich bin ein Freelancer, der als Scrum Master, Product Owner oder Solutions Architekt im gesamttechnischen Kontext
            Ihres Projektes tätig werden kann.
            <br /><br />
            Ich kann hierbei für Sie auf meine Erfahrungen während mehrjährigen Festanstellungen wie etwa bei Microsoft, Yahoo, Akamai sowie Projekten
            bei der MunichRE, RedHat IBM, der Software AG und DiGA-StartUps zurückgreifen.
            <br /><br />
            Gemeinsam mit Ihrem Team, meinen Coaching Skills und meiner mehrjährigen Erfahrung in agilen und DevOps-gelenkten Projekten,
            werden Sie eine Beauftragung meiner Person wertschätzen lernen.
            <br /><br />
            Ich freue mich von Ihnen zu hören,<br />
            Stephan Kristyn.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
