const particleParams = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 400,
      },
    },
    line_linked: {
      enable: false,
      opacity: 2,
    },
    move: {
      direction: "right",
      speed: 0.01,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.5,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      }
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
}

export default particleParams;