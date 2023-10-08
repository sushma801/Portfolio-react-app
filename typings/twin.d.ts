import 'twin.macro';
import styledImport, { css as cssImport, CSSProp } from 'styled-components';
import { DOMAttributes } from 'react';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}
declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
    tw?: string;
    cs?: CSSProp;
  }
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttribute<T> extends DOMAttributes<T> {
      as?: string;
    }
  }
}