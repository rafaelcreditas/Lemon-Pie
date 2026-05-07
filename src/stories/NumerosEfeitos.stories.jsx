import React from 'react';
import { numbersData } from '../tokens/data-numbers';

export default {
  title: 'Tokens/Border Radius',
  parameters: { docs: { description: { component: '10 tokens de radius com modes responsivos (mobile/tablet). 4 border-weight, 6 opacity e elevation com 5 layers de sombra.' } } },
};

const RadiusPreview = ({ name, value, desc }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
    <div style={{
      width: 64, height: 64,
      background: 'var(--color-surface-branded-default, #8edb00)',
      borderRadius: Math.min(value, 32),
      border: '2px solid var(--color-action-branded-default, #81C700)',
    }} />
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 11, fontWeight: 600 }}>{name}</div>
      <div style={{ fontSize: 10, fontFamily: 'monospace', color: '#666' }}>{value}px</div>
    </div>
  </div>
);

export const EscalaDeRadius = () => {
  const mobile = numbersData.mobile;
  const tablet = numbersData.tablet;
  
  const radiusTokens = Object.entries(mobile?.border?.radius || {})
    .filter(([k]) => k !== '$extensions')
    .sort((a, b) => a[1].$value - b[1].$value);
  
  return (
    <div>
      <p style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        Collection <code>🔢 numbers&effects</code> → border/radius. 10 tokens, 2 modes (mobile/tablet).
      </p>
      
      <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>Mobile</h3>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
        {radiusTokens.map(([name, data]) => (
          <RadiusPreview key={name} name={name} value={data.$value} desc={data.$description} />
        ))}
      </div>
      
      <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>Comparativo Mobile vs Tablet</h3>
      <table style={{ borderCollapse: 'collapse', fontSize: 12, maxWidth: 500 }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: 8 }}>Token</th>
            <th style={{ textAlign: 'right', padding: 8 }}>Mobile</th>
            <th style={{ textAlign: 'right', padding: 8 }}>Tablet</th>
            <th style={{ textAlign: 'right', padding: 8 }}>Diff</th>
          </tr>
        </thead>
        <tbody>
          {radiusTokens.map(([name, data]) => {
            const tabVal = tablet?.border?.radius?.[name]?.$value ?? data.$value;
            const diff = tabVal - data.$value;
            return (
              <tr key={name} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: 8, fontFamily: 'monospace', fontWeight: 600 }}>{name}</td>
                <td style={{ padding: 8, textAlign: 'right' }}>{data.$value}px</td>
                <td style={{ padding: 8, textAlign: 'right' }}>{tabVal}px</td>
                <td style={{ padding: 8, textAlign: 'right', color: diff > 0 ? '#16a34a' : '#666' }}>
                  {diff > 0 ? `+${diff}` : diff}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const Opacity = () => {
  const opacity = numbersData.mobile?.opacity || {};
  const steps = Object.entries(opacity)
    .filter(([k]) => k !== '$extensions')
    .sort((a, b) => a[1].$value - b[1].$value);
  
  return (
    <div>
      <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Opacity</h3>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {steps.map(([name, data]) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div style={{
              width: 64, height: 64, borderRadius: 8,
              background: `var(--color-action-branded-default, #81C700)`,
              opacity: data.$value / 100,
              border: '1px solid rgba(0,0,0,0.05)',
            }} />
            <div style={{ fontSize: 11, fontWeight: 600, marginTop: 6 }}>{name}</div>
            <div style={{ fontSize: 10, fontFamily: 'monospace', color: '#666' }}>{data.$value}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BorderWeight = () => {
  const weight = numbersData.mobile?.border?.weight || {};
  const steps = Object.entries(weight)
    .filter(([k]) => k !== '$extensions')
    .sort((a, b) => a[1].$value - b[1].$value);
  
  return (
    <div>
      <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Border Weight</h3>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {steps.map(([name, data]) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div style={{
              width: 80, height: 48, borderRadius: 8,
              background: 'transparent',
              border: `${data.$value}px solid var(--color-action-neutral-default, #3a4340)`,
            }} />
            <div style={{ fontSize: 11, fontWeight: 600, marginTop: 6 }}>{name}</div>
            <div style={{ fontSize: 10, fontFamily: 'monospace', color: '#666' }}>{data.$value}px</div>
          </div>
        ))}
      </div>
    </div>
  );
};
