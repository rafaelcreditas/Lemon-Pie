import React, { useState } from 'react';
import { colorThemeLight } from '../tokens/data-color-light';
import { colorThemeDark } from '../tokens/data-color-dark';

export default {
  title: 'Tokens/Cores Semânticas',
  parameters: { docs: { description: { component: '135 tokens semânticos em 6 domínios × 6 tons × escala de intensidade. Suporta light e dark mode.' } } },
};

const ColorToken = ({ name, value, desc }) => {
  const hex = value?.hex || (typeof value === 'string' ? value : '#000');
  const alpha = value?.alpha ?? 1;
  const displayHex = alpha < 1 
    ? `${hex} (${Math.round(alpha * 100)}%)`
    : hex;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '6px 0', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ width: 32, height: 32, borderRadius: 6, flexShrink: 0, background: hex, opacity: alpha, border: '1px solid rgba(0,0,0,0.08)' }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 600, fontFamily: 'monospace' }}>{name}</div>
        {desc && <div style={{ fontSize: 10, color: '#888', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{desc}</div>}
      </div>
      <div style={{ fontSize: 10, fontFamily: 'monospace', color: '#999', flexShrink: 0 }}>{displayHex}</div>
    </div>
  );
};

const DomainSection = ({ domain, data, prefix = '' }) => {
  const tones = Object.keys(data).filter(k => k !== '$extensions').sort();
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, textTransform: 'capitalize' }}>{domain}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
        {tones.map(tone => {
          const intensities = data[tone];
          const steps = Object.keys(intensities).filter(k => k !== '$extensions');
          return (
            <div key={tone} style={{ background: '#fafafa', borderRadius: 8, padding: 12, border: '1px solid #eee' }}>
              <h4 style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, color: '#555', textTransform: 'capitalize' }}>{tone}</h4>
              {steps.map(step => (
                <ColorToken
                  key={step}
                  name={`${domain}/${tone}/${step}`}
                  value={intensities[step]?.$value}
                  desc={intensities[step]?.$description}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const LightMode = () => {
  const colors = colorThemeLight;
  const domains = Object.keys(colors).filter(k => k !== '$extensions');
  return (
    <div>
      <p style={{ fontSize: 13, color: '#666', marginBottom: 24, maxWidth: 700 }}>
        Collection <code>🎨 colorTheme</code> — mode <strong>light</strong>. 
        135 tokens organizados em {'{domínio}/{tom}/{intensidade}'}.
        Scopes corretos: TEXT_FILL para texto, FRAME_FILL+SHAPE_FILL para surfaces.
      </p>
      {domains.map(domain => (
        <DomainSection key={domain} domain={domain} data={colors[domain]} />
      ))}
    </div>
  );
};

export const DarkMode = () => {
  const colors = colorThemeDark;
  const domains = Object.keys(colors).filter(k => k !== '$extensions');
  return (
    <div style={{ background: '#101715', color: '#f2f4f3', padding: 32, borderRadius: 12, margin: -24, minHeight: '100vh' }}>
      <p style={{ fontSize: 13, color: '#a8b2af', marginBottom: 24, maxWidth: 700 }}>
        Collection <code style={{ color: '#a8b2af' }}>🎨 colorTheme</code> — mode <strong>dark</strong>.
        114 de 135 tokens mudam entre light e dark.
      </p>
      {domains.map(domain => {
        const tones = Object.keys(colors[domain]).filter(k => k !== '$extensions').sort();
        return (
          <div key={domain} style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, textTransform: 'capitalize', color: '#f2f4f3' }}>{domain}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
              {tones.map(tone => {
                const intensities = colors[domain][tone];
                const steps = Object.keys(intensities).filter(k => k !== '$extensions');
                return (
                  <div key={tone} style={{ background: '#1c2422', borderRadius: 8, padding: 12, border: '1px solid #3a4340' }}>
                    <h4 style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, color: '#a8b2af', textTransform: 'capitalize' }}>{tone}</h4>
                    {steps.map(step => {
                      const val = intensities[step]?.$value;
                      const hex = val?.hex || '#000';
                      const alpha = val?.alpha ?? 1;
                      const desc = intensities[step]?.$description;
                      return (
                        <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '6px 0', borderBottom: '1px solid #2a3330' }}>
                          <div style={{ width: 32, height: 32, borderRadius: 6, flexShrink: 0, background: hex, opacity: alpha, border: '1px solid rgba(255,255,255,0.1)' }} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: 12, fontWeight: 600, fontFamily: 'monospace', color: '#d4dad8' }}>{`${domain}/${tone}/${step}`}</div>
                            {desc && <div style={{ fontSize: 10, color: '#6b7c77', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{desc}</div>}
                          </div>
                          <div style={{ fontSize: 10, fontFamily: 'monospace', color: '#6b7c77', flexShrink: 0 }}>{hex}</div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Comparativo = () => {
  const [showAll, setShowAll] = useState(false);
  const light = colorThemeLight;
  const dark = colorThemeDark;

  const flatten = (obj, prefix = '') => {
    const result = {};
    for (const [k, v] of Object.entries(obj)) {
      if (k === '$extensions') continue;
      if (v && v.$value) result[prefix + k] = v.$value;
      else if (typeof v === 'object') Object.assign(result, flatten(v, prefix + k + '/'));
    }
    return result;
  };

  const lf = flatten(light);
  const df = flatten(dark);
  const changed = Object.keys(lf).filter(k => JSON.stringify(lf[k]) !== JSON.stringify(df[k]));
  const same = Object.keys(lf).filter(k => JSON.stringify(lf[k]) === JSON.stringify(df[k]));
  const visible = showAll ? changed : changed.slice(0, 40);

  return (
    <div>
      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Light vs Dark — Tokens que mudam ({changed.length})</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, maxWidth: 700, fontSize: 11 }}>
        <div style={{ padding: 8, fontWeight: 700, borderBottom: '2px solid #ddd' }}>Token</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', fontWeight: 700, borderBottom: '2px solid #ddd' }}>
          <div style={{ padding: 8 }}>Light</div>
          <div style={{ padding: 8 }}>Dark</div>
        </div>
        {visible.map(k => (
          <React.Fragment key={k}>
            <div style={{ padding: '4px 8px', fontFamily: 'monospace', fontSize: 10, borderBottom: '1px solid #f0f0f0' }}>{k}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ padding: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 16, height: 16, borderRadius: 4, background: lf[k]?.hex || '#000', border: '1px solid rgba(0,0,0,0.1)' }} />
                <span style={{ fontSize: 9, fontFamily: 'monospace' }}>{lf[k]?.hex || '?'}</span>
              </div>
              <div style={{ padding: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 16, height: 16, borderRadius: 4, background: df[k]?.hex || '#000', border: '1px solid rgba(0,0,0,0.1)' }} />
                <span style={{ fontSize: 9, fontFamily: 'monospace' }}>{df[k]?.hex || '?'}</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      {!showAll && changed.length > 40 && (
        <button
          onClick={() => setShowAll(true)}
          style={{
            marginTop: 12, padding: '8px 16px', fontSize: 12, fontWeight: 600,
            background: '#f4fbe6', border: '1px solid #81C700', borderRadius: 6,
            cursor: 'pointer', color: '#3c5c00',
          }}
        >
          Mostrar todos os {changed.length} tokens
        </button>
      )}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          style={{
            marginTop: 12, padding: '8px 16px', fontSize: 12, fontWeight: 600,
            background: '#f5f5f5', border: '1px solid #ddd', borderRadius: 6,
            cursor: 'pointer', color: '#666',
          }}
        >
          Mostrar menos
        </button>
      )}

      <h3 style={{ fontSize: 14, fontWeight: 700, marginTop: 32, marginBottom: 8 }}>Tokens iguais em ambos os modes ({same.length})</h3>
      <p style={{ fontSize: 11, color: '#888', fontFamily: 'monospace' }}>{same.join(', ')}</p>
    </div>
  );
};
