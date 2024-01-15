import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Sit amet consectetur adipisicing elit. Iusto at reprehenderit accusantium laudantium aliquid minima eveniet dicta doloremque esse voluptatibus.",
  },
  {
    icon: <UserGroupIcon className="h6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Dolor sit amet consectetur adipisicing elit. Eveniet, esse? Iusto at reprehenderit accusantium.",
  },
  {
    icon: <AcademicCapIcon className="h6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Iusto at reprehenderit accusantium laudantium aliquid minima eveniet dicta doloremque esse voluptatibus.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>HEALTH IS A PRIORITY HERE</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quas expedita aut alias amet eaque similique natus provident dolorum
            commodi distinctio eveniet debitis sequi?
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefit-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>.
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Dolor sit amet consectetur adipisicing elit. Omnis, in eos
                maxime hic iste quae aliquam natus praesentium, culpa asperiores
                quam mollitia ipsa, dolore dolorum! Veritatis corrupti excepturi
                porro quo inventore similique atque expedita! Accusamus. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                dolorum?
              </p>
              <p className="mb-5">
                Consectetur adipisicing elit. Adipisci ab quae fugiat maxime
                tempora eos, neque repellendus voluptas sit quo quod. Dolor
                laboriosam dicta quas. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perferendis, aspernatur.
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
