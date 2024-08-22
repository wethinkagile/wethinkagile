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
          <h3 className="font-display text-2xl font-bold">we think Agile Consulting</h3>
          <p className="text-sm text-gray-500">


            <strong>Scrum</strong>.org® certified Scrum Master™<br /> Certified <strong>DevOps 2.0 Coach</strong><br />
            <strong>Microsoft</strong> certified <strong>Azure AZ-900</strong><br />
            <strong>Google </strong>certified <strong>Site Reliability Engineer </strong><br />
            Certified <strong>ISO27001 Advisor</strong><br />
            <strong>Linux Professional Instititue</strong> accredited<br />
            Berkely certified <strong>AI/ML Software Engineer</strong><br />
            Oxford-graduated <strong>Software Engineer</strong><br />
            Oxford-accredited <strong>Business Coach</strong><br /><br />

            Experience in:<br />
            <strong>
            IT-Regulatory, Data-Privacy Legislation, Federal and Local Government, Health, Defense, Finance, Hightech, Entertainment<br /><br />
            </strong>

            Alumni of:<br />
            <strong>Microsoft | Red Hat | Intel </strong><br /><br />

            Worked with ❤ in:<br />
            <strong>London, Berlin, Munich, Heidelberg</strong><br /><br />


            Send me an <u><a href="mailto:info -at- we think agile dot com"> E-Mail</a></u> any time. Let&apos;s have coffee.<br />

            Get my <u><a href="/Lebenslauf%20-%20DE%20-%20We%20Think%20Agile%20%28Stephan%20Kristyn%2C%20Certified%20Scrum%20Master%29.pdf"> CV</a></u> here.
            ___________________________________________<br />
            Community contributor at Stackoverflow<br />
            Sponsorer & submitter at Github<br />
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
