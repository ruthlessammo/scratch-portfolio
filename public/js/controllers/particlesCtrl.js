angular.module('portfolio')
  .controller('particlesCtrl', ['$scope', particlesCtrl])
  .directive('particlesDrv', ['$window', '$log', particlesDrv]);

function particlesCtrl($scope) {
  $scope.showParticles = true;
}

function particlesDrv($window, $log) {
  return {
    restrict: 'A',
    template: `<div class="particleJs" id="particleJs"><button class="enter pjs" ui-sref="about" type="button">William Hilto<img src="../images/tri5.png" alt="logo" width="13px">'s Portfolio</button></div>`,
    link: function(scope, element, attrs, fn) {
      $log.debug('test');
      $window.particlesJS('particleJs', {
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#000000'
          },
          shape: {
            type: "triangle",
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#000000',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 100,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 150,
              duration: 0.4
            },
            push: {
              particles_nb: 10
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }
  };
}
