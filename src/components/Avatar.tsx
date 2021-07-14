import { styled } from '@twind/react';
import * as React from 'react';

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

export const Avatar = (props: {
  [x: string]: any;
  src: string;
  alt?: string;
}) => {
  const { alt, src, ...rest } = props;
  return <StyledAvatar src={src} alt={alt || ''} {...rest} />;
};
