import type { StyledComponent } from '@twind/react';
import { styled } from '@twind/react';
import * as React from 'react';
import type { BaseComponent } from '../types';
export interface AvatarProps
  extends BaseComponent,
    Omit<
      StyledComponent<
        {
          size: {
            sm: string;
            md: string;
            lg: string;
          };
          round: {
            true: string;
          };
        },
        'img'
      >,
      'className' | 'selector'
    >,
    Omit<
      React.HTMLAttributes<HTMLImageElement>,
      'children' | 'className' | 'css'
    > {
  /**
   * Determines if the button is fully rounded
   */
  round?: boolean;
  /**
   * Controls the text size and padding of the button
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Determines the url to the image
   */
  src: string;
  /**
   * The alt of the image
   */
  alt?: string;
}

const StyledAvatar = styled('img', {
  base: `rounded-md`,
  variants: {
    size: {
      sm: `h-12 w-12`,
      md: `h-16 w-16`,
      lg: `h-20 w-20`,
    },
    round: {
      true: `rounded-full`,
    },
  },
  defaults: {
    size: 'md',
  },
});

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  (props) => {
    return <StyledAvatar {...props} />;
  },
);

// eslint-disable-next-line functional/immutable-data
Avatar.defaultProps = {
  className: '',
  alt: '',
  src: undefined,
};
