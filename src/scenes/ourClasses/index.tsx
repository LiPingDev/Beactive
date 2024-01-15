import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Training Class 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque maxime, incidunt nisi vitae ratione eius fuga magni deserunt amet beatae.",
    image: image1,
  },
  {
    name: "Training Class 2",
    image: image2,
  },
  {
    name: "Training Class 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque maxime, incidunt nisi vitae ratione eius fuga magni deserunt amet beatae.",
    image: image3,
  },
  {
    name: "Training Class 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque maxime, incidunt nisi vitae ratione eius fuga magni deserunt amet beatae.",
    image: image4,
  },
  {
    name: "Training Class 5",
    image: image5,
  },
  {
    name: "Training Class 5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque maxime, incidunt nisi vitae ratione eius fuga magni deserunt amet beatae.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <h4 className="text-2xl text-primary-300 ">
              Powered by fitness & inspired by helping others
            </h4>
            <p className="py-5 text-sm">
              Ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              architecto et fuga, exercitationem voluptates eum quis beatae, qui
              ut impedit neque commodi ea repellendus eius! Accusamus odio illo
              architecto in.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
