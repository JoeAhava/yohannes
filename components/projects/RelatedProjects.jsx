import { v4 as uuidv4 } from "uuid";
import { projectsData } from "../../data/projectsData";

const RelatedProject = {
	title: "Related Projects",
	Projects: [
		{
			id: uuidv4(),
			title: "Mobile UI",
			img: "/images/ui-project-2.jpg",
		},
		{
			id: uuidv4(),
			title: "Web Application",
			img: "/images/mobile-project-1.jpg",
		},
		{
			id: uuidv4(),
			title: "UI Design",
			img: "/images/web-project-1.jpg",
		},
		{
			id: uuidv4(),
			title: "Kabul Mobile App UI",
			img: "/images/mobile-project-2.jpg",
		},
	],
};

function RelatedProjects() {
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10 h-[20vh]">
				{projectsData.slice(0, 3).map((project) => {
					return (
						<img
							src={project.img}
							className="rounded-xl cursor-pointer object-cover w-full h-[20vh]"
							alt={project.title}
							key={project.id}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default RelatedProjects;
