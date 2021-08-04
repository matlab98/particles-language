import Particles from "react-tsparticles";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    return (
      <Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          "fullScreen": {
            "enable": true
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 1,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 20000,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 4,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 35,
            },
            shape: {
              options: {
                images: [
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
                        "height": 2000,
                        "width": 2000
                    }
                    ,
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png",
                        "height": 2000,
                        "width": 2000
                    }
                    ,
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flutter/flutter.png",
                        "height": 2000,
                        "width": 2000
                    }
                    ,
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
                        "height": 2000,
                        "width": 2000
                    }
                    ,
                    {
                        "src": "https://pbs.twimg.com/profile_images/124492554144828620008/rzylUjaf.jpg",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://c0.klipartz.com/pngpicture/189/584/sticker-png-bootstrap-react-software-framework-javascript-front-and-back-ends-web-design-web-design-text-logo-internet-css.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://img.icons8.com/dusk/64/000000/webpack.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "http://res.cloudinary.com/dpykpv9hd/image/upload/v1625889215/cf6ljh3rwotgsakbne9c.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://img.icons8.com/color/48/000000/mysql-logo.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZXcAliAvDSazXRrZoCmMUiI0Tc4kLTjpcbf3H-FE_-dgUm7cDj-Yk_jZoEfVBOmwUW8&usqp=CAU",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://img.icons8.com/color/48/000000/git.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/azure/azure.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://img.icons8.com/color/48/000000/circleci.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://avatars.githubusercontent.com/u/44036562?s=20000&v=4",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://img.icons8.com/color/452/google-cloud-platform.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/azure/azure.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://img.icons8.com/color/48/000000/kubernetes.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/linux/linux.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://www.todosobretusistemaoperativo.com/wp-content/uploads/200016/08/Mac-OS-El-Capitan-nombre-0-830x511-1.jpg",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://logos-marcas.com/wp-content/uploads/20002000/12/Windows-Logo.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png",
                        "height": 2000,
                        "width": 2000
                    },
                    {
                        "src": "https://img.icons8.com/color/48/000000/intellij-idea.png",
                        "height": 2000,
                        "width": 2000
                    }
                ],
               
              },
              type: "image",
            },
            size: {
              value: 20,
            },
          },
        }}
      />
    );
  }
}

export default App;
