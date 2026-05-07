import React from 'react';
import { primitiveColors } from '../tokens/data-primitive-colors';

export default {
  title: 'Tokens/Cores Primitivas',
  parameters: { docs: { description: { component: '8 paletas primitivas com 10-11 steps cada (50→900). Base para todos os tokens semânticos do colorTheme.' } } },
};

const Swatch = ({ hex, name, size = 48 }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, width: size + 16 }}>
    <div style={{ width: size, height: size, borderRadius: 8, background: hex, border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }} />
    <span style={{ fontSize: 10, color: '#666', textAlign: 'center' }}>{name}</span>
    <span style={{ fontSize: 9, color: '#999', fontFamily: 'monospace' }}>{hex}</span>
  </div>
);

const PaletteRow = ({ name, palette }) => {
  const steps = Object.keys(palette)
    .filter(k => k !== '$extensions')
    .sort((a, b) => {
      const na = parseInt(a), nb = parseInt(b);
      if (!isNaN(na) && !isNaN(nb)) return na - nb;
      return a.localeCompare(b);
    });
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, textTransform: 'capitalize' }}>{name}</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {steps.map(step => {
          const val = palette[step]?.$value;
          const hex = val?.hex || '#000';
          return <Swatch key={step} hex={hex} name={step} />;
        })}
      </div>
    </div>
  );
};

export const TodasAsPaletas = () => {
  const colors = primitiveColors;
  const palettes = Object.keys(colors).filter(k => k !== '$extensions').sort();
  return (
    <div>
      <p style={{ fontSize: 13, color: '#666', marginBottom: 24, maxWidth: 600 }}>
        Paletas primitivas extraídas da collection <code>primitive: colors</code>. 
        Esses valores não devem ser usados diretamente em interfaces — use os tokens 
        semânticos do <strong>colorTheme</strong>.
      </p>
      {palettes.map(name => (
        <PaletteRow key={name} name={name} palette={colors[name]} />
      ))}
    </div>
  );
};
