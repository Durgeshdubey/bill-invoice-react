import Particles from "react-tsparticles";
import particlesConfig from "./particlesConfig.js";
import { loadFull } from "tsparticles";
export default function ParticleBackground() {
	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				"particles": {
					"number": {
					  "value": 170,
					  "density": {
						"enable": false,
						"value_area": 959.616153538585
					  }
					},
					"color": {
					  "value": "#ffffff"
					},
					"shape": {
					  "type": "circle",
					  "stroke": {
						"width": 1,
						"color": "#ffffff"
					  },
					  "polygon": {
						"nb_sides": 3
					  },
					  "image": {
						"src": "img/github.svg",
						"width": 100,
						"height": 100
					  }
					},
					"opacity": {
					  "value": 0.12794882047181133,
					  "random": true,
					  "anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.1,
						"sync": false
					  }
					},
					"size": {
					  "value": 3.998400639744104,
					  "random": true,
					  "anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
					  }
					},
					"line_linked": {
					  "enable": true,
					  "distance": 143.94242303078775,
					  "color": "#ffffff",
					  "opacity": 0.4,
					  "width": 1
					},
					"move": {
					  "enable": true,
					  "speed": 2,
					  "direction": "none",
					  "random": true,
					  "straight": false,
					  "out_mode": "out",
					  "bounce": false,
					  "attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200
					  }
					}
				  },
				  "interactivity": {
					"detect_on": "canvas",
					"events": {
					  "onhover": {
						"enable": true,
						"mode": "repulse"
					  },
					  "onclick": {
						"enable": true,
						"mode": "push"
					  },
					  "resize": false
					},
					"modes": {
					  "grab": {
						"distance": 400,
						"line_linked": {
						  "opacity": 1
						}
					  },
					  "bubble": {
						"distance": 400,
						"size": 60,
						"duration": 2,
						"opacity": 2,
						"speed": 1
					  },
					  "repulse": {
						"distance": 100,
						"duration": 0.4
					  },
					  "push": {
						"particles_nb": 4
					  },
					  "remove": {
						"particles_nb": 2
					  }
					}
				  },
				  "retina_detect": false
			}}
		/>
	);
}