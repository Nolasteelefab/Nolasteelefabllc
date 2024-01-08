import { MotionValueSegment, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

interface MenuButtonProps {
  toggled: boolean;
  onClick: () => void;
}

function MenuButtonAnimations(toggled: boolean) {
  const [menuButtonRef, animate] = useAnimate();
  useEffect(() => {
    const open: any[] = [
      [
        '.line1',
        {
          y: '5px'
        },
        {
          duration: 0.5
        }
      ],
      [
        '.line3',
        {
          y: '-5px'
        },
        {
          duration: 0.5,
          at: '<'
        }
      ],
      [
        menuButtonRef.current,
        {
          rotate: 90
        },
        {
          duration: 0.35
        }
      ],
      [
        '.line1',
        {
          rotate: 45
        },
        {
          duration: 0.5
        }
      ],
      [
        '.line3',
        {
          rotate: -45
        },
        {
          duration: 0.5,
          at: '<'
        }
      ]
    ];
    const closed: any[] = [
      [
        '.line1',
        {
          rotate: 0
        },
        {
          duration: 0.5,
          at: '<'
        }
      ],
      [
        '.line3',
        {
          rotate: 0
        },
        {
          duration: 0.5,
          at: '<'
        }
      ],

      [
        menuButtonRef.current,
        {
          rotate: 0
        },
        {
          duration: 0.35
        }
      ],
      [
        '.line1',
        {
          y: '0px'
        },
        {
          duration: 0.5
        }
      ],
      [
        '.line3',
        {
          y: '0px',
          rotate: toggled ? 45 : 0
        },
        {
          duration: 0.5,
          at: '<'
        }
      ]
    ];

    const sequence = toggled ? open : closed;

    animate(sequence);
  }, [animate, toggled, menuButtonRef]);
  return menuButtonRef;
}

export default function MenuButton({ toggled, onClick }: MenuButtonProps) {
  const menuButtonRef = MenuButtonAnimations(toggled);
  return (
    <button
      ref={menuButtonRef}
      onClick={onClick} // Use handleToggle function for click event
      className="w-[50px] items-center gap-2 flex flex-col"
    >
      <span className="line1 w-full border border-white" />
      <span className="line3 w-full border border-white " />
    </button>
  );
}
