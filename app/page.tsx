import { BrainCogIcon, EyeIcon, GlobeIcon, MonitorSmartphoneIcon, ZapIcon } from "lucide-react";
import Image from "next/image";

const features = [
  {
    name:"Store your PDF Documents",
    description:"Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
    icon:GlobeIcon
  },

  {
    name:"Blazing Fast Responses",
    description:"Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon: ZapIcon
  },

  {
    name:"Chat memorization",
    description:"Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience.",
    icon: BrainCogIcon
  },

  {
    name:"Interactive PDF Viewer",
    description:"Engage with your PDFs like never before using our intuitive and interactive viewer.",
    icon: EyeIcon
  },

  {
    name:"Responsive Across Devices",
    description:"Access and chat with your PDFs seamlessly on any device, whether it's your desktop, tablet or smartphone.",
    icon: MonitorSmartphoneIcon
  }
]

export default function Home() {
  return (
    <main className="">
      
    </main>
  );
}
