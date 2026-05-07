import '../src/tokens/primitive-colors.css';
import '../src/tokens/color-theme-light.css';
import '../src/tokens/color-theme-dark.css';
import '../src/tokens/spacing.css';
import '../src/tokens/numbers-effects.css';
import '../src/tokens/typography.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    layout: 'padded',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    options: {
      storySort: {
        order: [
          'Tokens',
          ['Cores Primitivas', 'Cores Semânticas', 'Spacing', 'Border Radius', 'Opacity', 'Elevation', 'Tipografia'],
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
    density: {
      description: 'Spacing density',
      toolbar: {
        title: 'Density',
        icon: 'grow',
        items: ['compact', 'default', 'comfortable'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
    density: 'default',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      const density = context.globals.density || 'default';
      return (
        <div data-theme={theme} data-density={density} style={{ fontFamily: "'Helvetica Now Display', Helvetica, Arial, sans-serif", color: 'var(--color-text-neutral-high)', background: 'var(--color-background-neutral-default)', padding: 24, minHeight: '100vh' }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
