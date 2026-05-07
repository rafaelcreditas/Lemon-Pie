import React, { useState } from 'react';
import { tokenData } from '../tokens/token-data';

export default {
  title: 'Tokens/Tipografia',
  parameters: { docs: { description: { component: '9 text styles (title 1-3, headline, body, callout, footnote, caption, overline) × 2 weights (regular, bold) × 6 zoom levels (80%→150%). Alimentados pelas variables de typeZoom.' } } },
};

const STYLES = ['headline', 'title 1', 'title 2', 'title 3', 'body', 'callout', 'footnote', 'caption', 'overline'];
const ZOOM_LEVELS = ['80%', '90%', '100%', '110%', '125%', '150%'];
const SAMPLE_TEXT = 'Creditas transforma vidas com crédito inteligente.';

export const EscalaTipografica = () => {
  const [zoom, setZoom] = useState('100%');
  const [weight, setWeight] = useState('regular');
  const data = tokenData.typeZoom[zoom];
  
  return (
    <div>
      <p style={{ fontSize: 13, color: '#666', marginBottom: 16, maxWidth: 600 }}>
        Collection <code>🔢 typeZoom</code> alimenta os 9 text styles. 
        Cada zoom level escala o fontSize mantendo lineHeight e letterSpacing fixos.
        Para cada estilo existe variação <strong>regular</strong> e <strong>bold</strong>.
      </p>
      
      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', marginRight: 16 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#666' }}>Zoom:</span>
          {ZOOM_LEVELS.map(z => (
            <button key={z} onClick={() => setZoom(z)} style={{
              padding: '4px 10px', borderRadius: 6, fontSize: 11, cursor: 'pointer',
              border: z === zoom ? '2px solid #81C700' : '1px solid #ddd',
              background: z === zoom ? '#f4fbe6' : '#fff',
              fontWeight: z === zoom ? 700 : 400,
            }}>{z}</button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#666' }}>Peso:</span>
          {['regular', 'bold'].map(w => (
            <button key={w} onClick={() => setWeight(w)} style={{
              padding: '4px 10px', borderRadius: 6, fontSize: 11, cursor: 'pointer',
              border: w === weight ? '2px solid #81C700' : '1px solid #ddd',
              background: w === weight ? '#f4fbe6' : '#fff',
              fontWeight: w === weight ? 700 : 400, textTransform: 'capitalize',
            }}>{w}</button>
          ))}
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {STYLES.map(style => {
          const s = data?.[style];
          if (!s) return null;
          const fontSize = s.fontSize?.$value;
          const lineHeight = s.lineHeight?.$value;
          const letterSpacing = s.letterSpacing?.$value;
          const fontFamily = s.fontFamily?.$value;
          const fw = weight === 'bold' ? s.fontWeightBold?.$value : s.fontWeightRegular?.$value;
          
          return (
            <div key={style} style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ width: 90, flexShrink: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#333' }}>{style}</div>
                <div style={{ fontSize: 9, fontFamily: 'monospace', color: '#999' }}>
                  {fontSize}px / {lineHeight} / {letterSpacing}
                </div>
              </div>
              <div style={{
                fontSize: fontSize,
                lineHeight: lineHeight,
                letterSpacing: `${letterSpacing}px`,
                fontFamily: `'${fontFamily}', Helvetica, Arial, sans-serif`,
                fontWeight: fw === 'bold' ? 700 : fw === 'semibold' ? 600 : 400,
                color: 'var(--color-text-neutral-high, #1c2422)',
              }}>
                {SAMPLE_TEXT}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const TabelaDeZoom = () => {
  return (
    <div>
      <p style={{ fontSize: 13, color: '#666', marginBottom: 16, maxWidth: 600 }}>
        Como o fontSize de cada estilo escala nos 6 modes de zoom.
        Os valores em px são os que alimentam os text styles no Figma.
      </p>
      
      <table style={{ borderCollapse: 'collapse', fontSize: 12, width: '100%', maxWidth: 700 }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: 8, fontWeight: 700 }}>Estilo</th>
            {ZOOM_LEVELS.map(z => (
              <th key={z} style={{ textAlign: 'center', padding: 8, fontWeight: 700, background: z === '100%' ? '#f4fbe6' : 'transparent' }}>{z}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {STYLES.map(style => (
            <tr key={style} style={{ borderBottom: '1px solid #f0f0f0' }}>
              <td style={{ padding: 8, fontWeight: 600 }}>{style}</td>
              {ZOOM_LEVELS.map(z => {
                const val = tokenData.typeZoom[z]?.[style]?.fontSize?.$value;
                return (
                  <td key={z} style={{ 
                    padding: 8, textAlign: 'center', fontFamily: 'monospace',
                    background: z === '100%' ? '#f4fbe6' : 'transparent',
                    fontWeight: z === '100%' ? 700 : 400,
                  }}>
                    {val}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      
      <div style={{ marginTop: 32, padding: 16, background: '#fffbeb', borderRadius: 8, border: '1px solid #fcd34d', maxWidth: 700 }}>
        <h4 style={{ fontSize: 12, fontWeight: 700, marginBottom: 8, color: '#92400e' }}>Observações da auditoria</h4>
        <ul style={{ fontSize: 11, color: '#78350f', margin: 0, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <li><strong>lineHeight fixo:</strong> Todos os estilos usam 120% em todos os zoom levels. Body e textos de leitura se beneficiariam de 140-150%.</li>
          <li><strong>letterSpacing fixo:</strong> 0.5px uniforme. Headings poderiam usar tracking mais apertado, caption/overline mais aberto.</li>
          <li><strong>body = callout em 100%:</strong> Ambos a 12px. A diferenciação entre eles depende do peso (regular vs bold).</li>
          <li><strong>footnote = overline em 100%:</strong> Ambos a 10px. Overline tipicamente usa tracking aberto + uppercase.</li>
          <li><strong>caption a 8px:</strong> No modo 100%, 8px com 120% lineHeight = 9.6px de entrelinha. Limite inferior para legibilidade.</li>
        </ul>
      </div>
    </div>
  );
};

export const PreviewRegularVsBold = () => {
  const data = tokenData.typeZoom['100%'];
  
  return (
    <div>
      <p style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        Cada text style tem variação <strong>regular</strong> e <strong>bold</strong>.
        Visualização lado a lado no zoom 100%.
      </p>
      
      {STYLES.map(style => {
        const s = data?.[style];
        if (!s) return null;
        const fontSize = s.fontSize?.$value;
        const fontFamily = s.fontFamily?.$value;
        const lineHeight = s.lineHeight?.$value;
        const letterSpacing = s.letterSpacing?.$value;
        
        return (
          <div key={style} style={{ marginBottom: 20, padding: 16, background: '#fafafa', borderRadius: 8, border: '1px solid #eee' }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#888', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
              {style} — {fontSize}px
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <div style={{ fontSize: 9, color: '#aaa', marginBottom: 4 }}>Regular</div>
                <div style={{
                  fontSize, lineHeight, letterSpacing: `${letterSpacing}px`,
                  fontFamily: `'${fontFamily}', Helvetica, sans-serif`,
                  fontWeight: 400,
                }}>
                  {SAMPLE_TEXT}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 9, color: '#aaa', marginBottom: 4 }}>Bold</div>
                <div style={{
                  fontSize, lineHeight, letterSpacing: `${letterSpacing}px`,
                  fontFamily: `'${fontFamily}', Helvetica, sans-serif`,
                  fontWeight: 700,
                }}>
                  {SAMPLE_TEXT}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
