import React from 'react';
import { tokenData } from '../tokens/token-data';

export default {
  title: 'Tokens/Spacing',
  parameters: { docs: { description: { component: '12 tokens de spacing semântico com 3 modes de densidade: compact, default e comfortable.' } } },
};

const SpacingBar = ({ name, value, desc, maxVal = 56 }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid #f5f5f5' }}>
    <div style={{ width: 80, fontSize: 12, fontWeight: 600, fontFamily: 'monospace', flexShrink: 0 }}>
      spacing/{name}
    </div>
    <div style={{ width: 36, fontSize: 11, fontFamily: 'monospace', color: '#666', textAlign: 'right', flexShrink: 0 }}>
      {value}px
    </div>
    <div style={{ flex: 1, maxWidth: 300 }}>
      <div style={{ 
        height: 24, 
        width: `${Math.max((value / maxVal) * 100, 2)}%`, 
        background: 'var(--color-action-branded-default, #81C700)', 
        borderRadius: 4,
        transition: 'width 0.3s ease'
      }} />
    </div>
    <div style={{ fontSize: 10, color: '#999', minWidth: 120 }}>{desc}</div>
  </div>
);

const SpacingMode = ({ mode, data }) => {
  const spacing = data?.spacing || {};
  const steps = Object.keys(spacing)
    .filter(k => k !== '$extensions')
    .sort((a, b) => parseInt(a) - parseInt(b));
  
  return (
    <div>
      {steps.map(step => (
        <SpacingBar
          key={step}
          name={step}
          value={spacing[step]?.$value}
          desc={spacing[step]?.$description || ''}
        />
      ))}
    </div>
  );
};

export const EscalaCompleta = () => (
  <div>
    <p style={{ fontSize: 13, color: '#666', marginBottom: 24, maxWidth: 600 }}>
      Collection <code>📏 spacing</code> — 12 tokens semânticos com labels descritivos.
      Scope: <code>GAP</code>. A escala muda por modo de densidade.
    </p>
    <SpacingMode mode="default" data={tokenData.spacing.default} />
  </div>
);

export const ComparativoDeDensidades = () => {
  const modes = ['compact', 'default', 'comfortable'];
  const steps = Object.keys(tokenData.spacing.default?.spacing || {})
    .filter(k => k !== '$extensions')
    .sort((a, b) => parseInt(a) - parseInt(b));
  
  return (
    <div>
      <p style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        A mesma escala em 3 densidades. Compact comprime, comfortable expande.
      </p>
      <table style={{ width: '100%', maxWidth: 700, borderCollapse: 'collapse', fontSize: 12 }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: 8, fontWeight: 700 }}>Token</th>
            <th style={{ textAlign: 'left', padding: 8, fontWeight: 700 }}>Label</th>
            {modes.map(m => (
              <th key={m} style={{ textAlign: 'right', padding: 8, fontWeight: 700, textTransform: 'capitalize' }}>{m}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {steps.map(step => (
            <tr key={step} style={{ borderBottom: '1px solid #f0f0f0' }}>
              <td style={{ padding: 8, fontFamily: 'monospace', fontWeight: 600 }}>spacing/{step}</td>
              <td style={{ padding: 8, color: '#666' }}>{tokenData.spacing.default?.spacing?.[step]?.$description?.split('.')[0] || ''}</td>
              {modes.map(m => (
                <td key={m} style={{ padding: 8, textAlign: 'right', fontFamily: 'monospace' }}>
                  {tokenData.spacing[m]?.spacing?.[step]?.$value}px
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
