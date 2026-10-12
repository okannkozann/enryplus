// ==========================================================================
// Models Page — Doğalgaz Operasyon Takip: İlçe & Proje Klasörleri Yönetimi
// 9 İlçe -> Proje Klasörleri -> 3 Statü & "Onaylandı" Dinamik Alanları
// ==========================================================================

export const FOLDERS_DATA = [
  {
    id: 'kepez',
    name: 'Kepez',
    projects: [
      {
        id: 'varsak-hatti',
        name: 'Varsak Dağıtım Hattı Projesi',
        code: 'KPZ-2026-01',
        stage1: {
          file: { name: 'kepez-varsak-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: { name: 'varsak-tatbikat-projesi-v2.pdf', type: 'pdf' }
        },
        stage3: {
          subStatus: 'onaylandi', // 'yazi_gonderildi' | 'bekliyor' | 'onaylandi'
          applicationFile: { name: 'kepez-belediyesi-basvuru-yazisi.pdf', type: 'pdf' },
          approvalFile: { name: 'kepez-onayli-ruhsat-belgesi-2026.pdf', type: 'pdf' },
          startDate: '2026-03-01',
          endDate: '2026-09-01'
        }
      },
      {
        id: 'kultur-mah',
        name: 'Kültür Mahallesi Besleme Hattı',
        code: 'KPZ-2026-02',
        stage1: {
          file: { name: 'kultur-mah-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: { name: 'kultur-tatbikat-revize.pdf', type: 'pdf' }
        },
        stage3: {
          subStatus: 'yazi_gonderildi',
          applicationFile: { name: 'kultur-mah-ruhsat-basvuru-yazisi.pdf', type: 'pdf' },
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      },
      {
        id: 'fabrikalar-sanayi',
        name: 'Fabrikalar Sanayi Bölgesi Bağlantısı',
        code: 'KPZ-2026-03',
        stage1: {
          file: { name: 'fabrikalar-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: null
        },
        stage3: {
          subStatus: 'bekliyor',
          applicationFile: { name: 'sanayi-kazi-talep-yazisi.pdf', type: 'pdf' },
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      },
      {
        id: 'yesilyurt-altyapi',
        name: 'Yeşilyurt Altyapı Genişletme',
        code: 'KPZ-2026-04',
        stage1: {
          file: null
        },
        stage2: {
          file: null
        },
        stage3: {
          subStatus: 'yazi_gonderildi',
          applicationFile: null,
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      }
    ]
  },
  {
    id: 'muratpasa',
    name: 'Muratpaşa',
    projects: [
      {
        id: 'fener-sirinyali',
        name: 'Fener & Şirinyalı Şebeke Yenileme',
        code: 'MRT-2026-01',
        stage1: {
          file: { name: 'fener-sirinyali-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: { name: 'fener-tatbikat-kesit-cizim.pdf', type: 'pdf' }
        },
        stage3: {
          subStatus: 'onaylandi',
          applicationFile: { name: 'muratpasa-resmi-yazi.pdf', type: 'pdf' },
          approvalFile: { name: 'muratpasa-onayli-ruhsat-2026.pdf', type: 'pdf' },
          startDate: '2026-02-15',
          endDate: '2026-08-15'
        }
      },
      {
        id: 'lara-sahil',
        name: 'Lara Sahil Hattı Besleme',
        code: 'MRT-2026-02',
        stage1: {
          file: { name: 'lara-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: { name: 'lara-tatbikat-projesi.pdf', type: 'pdf' }
        },
        stage3: {
          subStatus: 'yazi_gonderildi',
          applicationFile: { name: 'lara-belediye-yazisi.pdf', type: 'pdf' },
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      },
      {
        id: 'kircami-imar',
        name: 'Kırcami İmar Yolu Dağıtım Hattı',
        code: 'MRT-2026-03',
        stage1: {
          file: { name: 'kircami-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: null
        },
        stage3: {
          subStatus: 'bekliyor',
          applicationFile: null,
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      }
    ]
  },
  {
    id: 'dosemealti',
    name: 'Döşemealtı',
    projects: [
      {
        id: 'osb-sanayi',
        name: 'OSB 2. Kısım Sanayi Besleme Hattı',
        code: 'DSM-2026-01',
        stage1: {
          file: { name: 'dosemealti-osb-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: { name: 'osb-tatbikat-boru-hatti.pdf', type: 'pdf' }
        },
        stage3: {
          subStatus: 'onaylandi',
          applicationFile: { name: 'osb-ruhsat-basvuru-yazisi.pdf', type: 'pdf' },
          approvalFile: { name: 'dosemealti-ruhsat-belgesi.pdf', type: 'pdf' },
          startDate: '2026-01-10',
          endDate: '2026-07-10'
        }
      },
      {
        id: 'yenikoy-merkez',
        name: 'Yeniköy Merkez Dağıtım Şebekesi',
        code: 'DSM-2026-02',
        stage1: {
          file: { name: 'yenikoy-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: null
        },
        stage3: {
          subStatus: 'bekliyor',
          applicationFile: null,
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      }
    ]
  },
  {
    id: 'konyaalti',
    name: 'Konyaaltı',
    projects: [
      {
        id: 'liman-hurma',
        name: 'Liman & Hurma Ring Hattı',
        code: 'KNY-2026-01',
        stage1: {
          file: { name: 'konyaalti-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: { name: 'liman-hurma-tatbikat-projesi.pdf', type: 'pdf' }
        },
        stage3: {
          subStatus: 'onaylandi',
          applicationFile: { name: 'konyaalti-basvuru-yazisi.pdf', type: 'pdf' },
          approvalFile: { name: 'konyaalti-onayli-ruhsat.pdf', type: 'pdf' },
          startDate: '2026-04-01',
          endDate: '2026-10-01'
        }
      },
      {
        id: 'bogacay-gecis',
        name: 'Boğaçay Boru Geçiş Projesi',
        code: 'KNY-2026-02',
        stage1: {
          file: { name: 'bogacay-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: { name: 'bogacay-tatbikat-kesitler.pdf', type: 'pdf' }
        },
        stage3: {
          subStatus: 'bekliyor',
          applicationFile: { name: 'dsi-ve-belediye-yazisi.pdf', type: 'pdf' },
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      }
    ]
  },
  {
    id: 'serik',
    name: 'Serik',
    projects: [
      {
        id: 'belek-turizm',
        name: 'Belek Turizm Merkezi Doğalgaz Hattı',
        code: 'SRK-2026-01',
        stage1: {
          file: { name: 'belek-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: { name: 'belek-tatbikat-projesi.pdf', type: 'pdf' }
        },
        stage3: {
          subStatus: 'onaylandi',
          applicationFile: { name: 'serik-belediyesi-talep-yazisi.pdf', type: 'pdf' },
          approvalFile: { name: 'serik-onayli-ruhsat-belgesi.pdf', type: 'pdf' },
          startDate: '2026-03-15',
          endDate: '2026-09-15'
        }
      },
      {
        id: 'kadriye-sera',
        name: 'Kadriye Tarımsal Sera Besleme',
        code: 'SRK-2026-02',
        stage1: {
          file: { name: 'kadriye-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: null
        },
        stage3: {
          subStatus: 'yazi_gonderildi',
          applicationFile: null,
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      }
    ]
  },
  {
    id: 'aksu',
    name: 'Aksu',
    projects: [
      {
        id: 'expo-havalimani',
        name: 'EXPO & Havalimanı Çevreyolu Hattı',
        code: 'AKS-2026-01',
        stage1: {
          file: { name: 'aksu-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: { name: 'aksu-tatbikat-projesi.pdf', type: 'pdf' }
        },
        stage3: {
          subStatus: 'yazi_gonderildi',
          applicationFile: { name: 'aksu-belediyesi-basvuru.pdf', type: 'pdf' },
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      },
      {
        id: 'kundu-otel',
        name: 'Kundu Oteller Bölgesi Bağlantısı',
        code: 'AKS-2026-02',
        stage1: {
          file: { name: 'kundu-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: null
        },
        stage3: {
          subStatus: 'bekliyor',
          applicationFile: null,
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      }
    ]
  },
  {
    id: 'manavgat',
    name: 'Manavgat',
    projects: [
      {
        id: 'side-turizm',
        name: 'Side Kentsel Sit Dışı Dağıtım',
        code: 'MNV-2026-01',
        stage1: {
          file: { name: 'manavgat-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: { name: 'side-tatbikat-projesi.pdf', type: 'pdf' }
        },
        stage3: {
          subStatus: 'onaylandi',
          applicationFile: { name: 'manavgat-basvuru-yazisi.pdf', type: 'pdf' },
          approvalFile: { name: 'side-onayli-ruhsat-belgesi.pdf', type: 'pdf' },
          startDate: '2026-02-01',
          endDate: '2026-08-01'
        }
      },
      {
        id: 'ilica-sanayi',
        name: 'Ilıca Küçük Sanayi Sitesi Hattı',
        code: 'MNV-2026-02',
        stage1: {
          file: null
        },
        stage2: {
          file: null
        },
        stage3: {
          subStatus: 'yazi_gonderildi',
          applicationFile: null,
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      }
    ]
  },
  {
    id: 'alanya',
    name: 'Alanya',
    projects: [
      {
        id: 'oba-tosmur',
        name: 'Oba & Tosmur Ana İletim Hattı',
        code: 'ALN-2026-01',
        stage1: {
          file: { name: 'alanya-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: { name: 'oba-tosmur-tatbikat.pdf', type: 'pdf' }
        },
        stage3: {
          subStatus: 'onaylandi',
          applicationFile: { name: 'alanya-belediyesi-yazisi.pdf', type: 'pdf' },
          approvalFile: { name: 'alanya-onayli-ruhsat.pdf', type: 'pdf' },
          startDate: '2026-04-10',
          endDate: '2026-10-10'
        }
      },
      {
        id: 'cng-istasyon',
        name: 'Mahmutlar CNG Besleme İstasyonu',
        code: 'ALN-2026-02',
        stage1: {
          file: { name: 'cng-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: null
        },
        stage3: {
          subStatus: 'bekliyor',
          applicationFile: null,
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      }
    ]
  },
  {
    id: 'korkuteli',
    name: 'Korkuteli',
    projects: [
      {
        id: 'korkuteli-osb',
        name: 'Mermer İhtisas OSB Hattı',
        code: 'KRT-2026-01',
        stage1: {
          file: { name: 'korkuteli-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: { name: 'osb-tatbikat-projesi.pdf', type: 'pdf' }
        },
        stage3: {
          subStatus: 'onaylandi',
          applicationFile: { name: 'korkuteli-basvuru.pdf', type: 'pdf' },
          approvalFile: { name: 'korkuteli-ruhsat-belgesi.pdf', type: 'pdf' },
          startDate: '2026-01-20',
          endDate: '2026-07-20'
        }
      },
      {
        id: 'yayla-merkez',
        name: 'Korkuteli Yayla Dağıtım Şebekesi',
        code: 'KRT-2026-02',
        stage1: {
          file: { name: 'yayla-hat-yok-liste.xlsx', type: 'xlsx' }
        },
        stage2: {
          file: null
        },
        stage3: {
          subStatus: 'bekliyor',
          applicationFile: null,
          approvalFile: null,
          startDate: '',
          endDate: ''
        }
      }
    ]
  }
];

// Flowchart SVG Oluşturucu (Referans Görsel: 3 Aşamalı Işıltılı Halka & Kesikli Ok Çizgisi)
function renderFlowchartSvg(step1, step2, step3, uniqueId) {
  const markerId = `fc-arr-${uniqueId}`;

  // Step 1: Mavi / Cam Göbeği Halka (Cyan/Blue Aura)
  const halo1 = step1.done 
    ? `
      <circle cx="45" cy="44" r="23" fill="rgba(56, 189, 248, 0.16)"/>
      <circle cx="45" cy="44" r="15" fill="rgba(56, 189, 248, 0.34)"/>
      <circle cx="45" cy="44" r="8" fill="rgba(56, 189, 248, 0.7)"/>
      <circle cx="45" cy="44" r="3.5" fill="#ffffff" stroke="#1e2138" stroke-width="1.8"/>
    ` : `
      <circle cx="45" cy="44" r="18" fill="rgba(160, 165, 195, 0.14)"/>
      <circle cx="45" cy="44" r="10" fill="rgba(160, 165, 195, 0.25)"/>
      <circle cx="45" cy="44" r="3.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1.8"/>
    `;

  // Step 2: Mor Halka (Violet/Purple Aura)
  const halo2 = step2.done 
    ? `
      <circle cx="135" cy="44" r="23" fill="rgba(168, 85, 247, 0.16)"/>
      <circle cx="135" cy="44" r="15" fill="rgba(168, 85, 247, 0.34)"/>
      <circle cx="135" cy="44" r="8" fill="rgba(168, 85, 247, 0.7)"/>
      <circle cx="135" cy="44" r="3.5" fill="#ffffff" stroke="#1e2138" stroke-width="1.8"/>
    ` : `
      <circle cx="135" cy="44" r="18" fill="rgba(160, 165, 195, 0.14)"/>
      <circle cx="135" cy="44" r="10" fill="rgba(160, 165, 195, 0.25)"/>
      <circle cx="135" cy="44" r="3.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1.8"/>
    `;

  // Step 3: Mercan/Kırmızı veya Yeşil Halka (Coral/Red/Green Aura)
  let halo3Color = '244, 63, 94'; // default mercan/kırmızı
  if (step3.state === 'approved') halo3Color = '16, 185, 129';
  else if (step3.state === 'waiting') halo3Color = '245, 158, 11';
  else if (step3.state === 'sent') halo3Color = '59, 130, 246';

  const halo3 = step3.done !== false
    ? `
      <circle cx="225" cy="44" r="23" fill="rgba(${halo3Color}, 0.16)"/>
      <circle cx="225" cy="44" r="15" fill="rgba(${halo3Color}, 0.34)"/>
      <circle cx="225" cy="44" r="8" fill="rgba(${halo3Color}, 0.7)"/>
      <circle cx="225" cy="44" r="3.5" fill="#ffffff" stroke="#1e2138" stroke-width="1.8"/>
    ` : `
      <circle cx="225" cy="44" r="18" fill="rgba(160, 165, 195, 0.14)"/>
      <circle cx="225" cy="44" r="10" fill="rgba(160, 165, 195, 0.25)"/>
      <circle cx="225" cy="44" r="3.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1.8"/>
    `;

  return `
    <svg class="flowchart-svg" viewBox="0 0 270 98" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <marker id="${markerId}" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 1 1.5 L 6.5 4 L 1 6.5 Z" fill="#1e2138"/>
        </marker>
      </defs>

      <!-- Kesikli Ok Çizgileri (Dotted Arrow Lines) -->
      <path d="M 68 44 L 112 44" stroke="#1e2138" stroke-width="1.4" stroke-dasharray="2.5 3" marker-end="url(#${markerId})" />
      <path d="M 158 44 L 202 44" stroke="#1e2138" stroke-width="1.4" stroke-dasharray="2.5 3" marker-end="url(#${markerId})" />

      <!-- Step 1 İkonu (Hoparlör / Duyuru İkonu) -->
      <g transform="translate(37, 6) scale(0.68)">
        <path d="m3 11 17-5v12L3 13v-2z" fill="none" stroke="#1e2138" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" fill="none" stroke="#1e2138" stroke-width="2" stroke-linecap="round"/>
      </g>

      <!-- Step 2 İkonu (Takvim İkonu) -->
      <g transform="translate(127, 6) scale(0.68)">
        <rect x="3" y="4" width="18" height="18" rx="3" fill="none" stroke="#1e2138" stroke-width="2"/>
        <line x1="3" y1="10" x2="21" y2="10" stroke="#1e2138" stroke-width="2"/>
        <line x1="8" y1="2" x2="8" y2="6" stroke="#1e2138" stroke-width="2"/>
        <line x1="16" y1="2" x2="16" y2="6" stroke="#1e2138" stroke-width="2"/>
        <circle cx="8" cy="15" r="1" fill="#1e2138"/>
        <circle cx="12" cy="15" r="1" fill="#1e2138"/>
        <circle cx="16" cy="15" r="1" fill="#1e2138"/>
      </g>

      <!-- Step 3 İkonu (Ruhsat Kartı İkonu) -->
      <g transform="translate(217, 6) scale(0.68)">
        <rect x="2" y="5" width="20" height="14" rx="3" fill="none" stroke="#1e2138" stroke-width="2"/>
        <line x1="2" y1="10" x2="22" y2="10" stroke="#1e2138" stroke-width="2"/>
        <line x1="6" y1="14" x2="11" y2="14" stroke="#1e2138" stroke-width="2"/>
      </g>

      <!-- Işıltılı Halkalar & Merkez Noktalar -->
      ${halo1}
      ${halo2}
      ${halo3}

      <!-- Step 1 Başlığı -->
      <text x="45" y="76" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1e2138" font-family="var(--font-family-stack)">
        <tspan x="45" dy="0">${step1.labelLine1}</tspan>
        <tspan x="45" dy="11">${step1.labelLine2}</tspan>
      </text>

      <!-- Step 2 Başlığı -->
      <text x="135" y="76" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1e2138" font-family="var(--font-family-stack)">
        <tspan x="135" dy="0">${step2.labelLine1}</tspan>
        <tspan x="135" dy="11">${step2.labelLine2}</tspan>
      </text>

      <!-- Step 3 Başlığı -->
      <text x="225" y="76" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1e2138" font-family="var(--font-family-stack)">
        <tspan x="225" dy="0">${step3.labelLine1}</tspan>
        <tspan x="225" dy="11">${step3.labelLine2}</tspan>
      </text>
    </svg>
  `;
}

// İlçe Flowchart Durumu Hesaplayıcı
function getDistrictFlowchart(district) {
  const pList = district.projects || [];
  const hasStage1 = pList.some(p => p.stage1?.status === 'tamamlandi' || (!p.stage1?.status && !!p.stage1?.file));
  const hasStage2 = pList.some(p => p.stage2?.status === 'tamamlandi' || (!p.stage2?.status && !!p.stage2?.file));
  const isApproved = pList.some(p => p.stage3?.subStatus === 'onaylandi');
  const isSent = pList.some(p => p.stage3?.subStatus === 'yazi_gonderildi');

  return {
    step1: {
      labelLine1: 'Liste',
      labelLine2: hasStage1 ? 'Paylaşıldı' : 'Bekliyor',
      done: hasStage1
    },
    step2: {
      labelLine1: 'Tatbikat',
      labelLine2: hasStage2 ? 'Alındı' : 'Bekliyor',
      done: hasStage2
    },
    step3: {
      labelLine1: isSent ? 'Yazı' : 'Başvuru',
      labelLine2: isApproved ? 'Onaylandı' : (isSent ? 'Gönderildi' : 'Bekliyor'),
      state: isApproved ? 'approved' : (isSent ? 'sent' : 'waiting'),
      done: isApproved || isSent
    }
  };
}

// Proje Flowchart Durumu Hesaplayıcı
function getProjectFlowchart(project) {
  const hasStage1 = project.stage1?.status === 'tamamlandi' || (!project.stage1?.status && !!project.stage1?.file);
  const hasStage2 = project.stage2?.status === 'tamamlandi' || (!project.stage2?.status && !!project.stage2?.file);
  const isApproved = project.stage3?.subStatus === 'onaylandi';
  const isSent = project.stage3?.subStatus === 'yazi_gonderildi';

  return {
    step1: {
      labelLine1: 'Liste',
      labelLine2: hasStage1 ? 'Paylaşıldı' : 'Bekliyor',
      done: hasStage1
    },
    step2: {
      labelLine1: 'Tatbikat',
      labelLine2: hasStage2 ? 'Alındı' : 'Bekliyor',
      done: hasStage2
    },
    step3: {
      labelLine1: isSent ? 'Yazı' : 'Başvuru',
      labelLine2: isApproved ? 'Onaylandı' : (isSent ? 'Gönderildi' : 'Bekliyor'),
      state: isApproved ? 'approved' : (isSent ? 'sent' : 'waiting'),
      done: isApproved || isSent
    }
  };
}

const FOLDER_PATH_280 = "M 16 0 L 100 0 C 112 0, 116 16, 128 16 L 264 16 A 16 16 0 0 1 280 32 L 280 164 A 16 16 0 0 1 264 180 L 16 180 A 16 16 0 0 1 0 164 L 0 16 A 16 16 0 0 1 16 0 Z";

export class ModelsController {
  constructor(targetEl) {
    this.target = targetEl;
    this.activeDistrictId = null;
    this.activeProjectId = null;
    this.districtSearchQuery = '';
    this.projectSearchQuery = '';
  }

  setFolder(folderId) {
    this.navigate(folderId, null);
  }

  navigate(districtId, projectId) {
    this.activeDistrictId = districtId || null;
    this.activeProjectId = projectId || null;
    this.projectSearchQuery = '';
    this.render();
  }

  render() {
    if (!this.target) return;

    // 1. Durum: Proje Detayı (#models/:districtId/:projectId)
    if (this.activeDistrictId && this.activeProjectId) {
      const district = FOLDERS_DATA.find(d => d.id === this.activeDistrictId);
      const project = district?.projects.find(p => p.id === this.activeProjectId);
      if (district && project) {
        this.renderProjectDetail(district, project);
        return;
      }
    }

    // 2. Durum: İlçeye Ait Projeler Listesi (#models/:districtId)
    if (this.activeDistrictId) {
      const district = FOLDERS_DATA.find(d => d.id === this.activeDistrictId);
      if (district) {
        this.renderDistrictProjects(district);
        return;
      }
    }

    // 3. Durum: 9 İlçe 3x3 Klasör Izgarası (#models)
    this.render3x3Grid();
  }

  // =========================================================================
  // GÖRÜNÜM 1: 3x3 İLÇE KLASÖRLERİ & ÜZERİNDE FLOWCHART
  // =========================================================================
  render3x3Grid() {
    const q = this.districtSearchQuery.toLowerCase();
    const filtered = FOLDERS_DATA.filter(f => !q || f.name.toLowerCase().includes(q));

    this.target.innerHTML = `
      <div class="models-view">
        <header class="models-topbar">
          <div class="models-title-group">
            <h1>Models</h1>
          </div>
          <div class="topbar__controls">
            <div class="field" style="width: 240px;">
              <svg class="field__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
              </svg>
              <input class="input" id="models-search-input" type="search" placeholder="İlçe ara..." value="${this.districtSearchQuery}" style="width: 100%; height: var(--control-height-sm);" />
            </div>
          </div>
        </header>

        <div class="models-stage">
          <section class="folder-grid-centered" aria-label="3x3 İlçe Klasörleri">
            ${filtered.map((folder, index) => `
              <article class="sample-folder-card ${index === 0 ? 'is-featured' : ''}" data-district-id="${folder.id}" tabindex="0" role="button" aria-label="${folder.name} klasörünü aç">
                <svg class="sample-folder-card__svg" viewBox="0 0 200 150" preserveAspectRatio="none" aria-hidden="true">
                  <path class="folder-shape-path" d="M 16 0 L 76 0 C 86 0, 92 14, 102 14 L 184 14 A 16 16 0 0 1 200 30 L 200 134 A 16 16 0 0 1 184 150 L 16 150 A 16 16 0 0 1 0 134 L 0 16 A 16 16 0 0 1 16 0 Z" />
                </svg>
                <div class="sample-folder-card__content">
                  <h2 class="sample-folder-card__title">${folder.name}</h2>
                </div>
              </article>
            `).join('')}
          </section>
        </div>

        ${filtered.length === 0 ? `
          <div class="grid-empty" style="display: flex;">
            <h2>Klasör bulunamadı</h2>
            <p class="state-hint">"${this.districtSearchQuery}" ile eşleşen bir ilçe klasörü yok.</p>
            <button class="btn btn--ghost btn--sm" type="button" id="btn-clear-model-search">Temizle</button>
          </div>
        ` : ''}
      </div>
    `;

    const searchInput = this.target.querySelector('#models-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.districtSearchQuery = e.target.value;
        this.render3x3Grid();
        const ref = this.target.querySelector('#models-search-input');
        if (ref) {
          ref.focus();
          ref.selectionStart = ref.selectionEnd = ref.value.length;
        }
      });
    }

    const clearBtn = this.target.querySelector('#btn-clear-model-search');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.districtSearchQuery = '';
        this.render3x3Grid();
      });
    }

    this.target.querySelectorAll('.sample-folder-card').forEach(tile => {
      const open = () => {
        const dId = tile.getAttribute('data-district-id');
        window.location.hash = `#models/${dId}`;
      };
      tile.addEventListener('click', open);
      tile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });
  }

  // =========================================================================
  // GÖRÜNÜM 2: İLÇE İÇİ PROJE KLASÖRLERİ (#models/:districtId)
  // =========================================================================
  renderDistrictProjects(district) {
    const q = this.projectSearchQuery.toLowerCase();
    const filteredProjects = district.projects.filter(p =>
      !q || p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q)
    );

    this.target.innerHTML = `
      <div class="projects-view">
        <header class="projects-topbar">
          <div class="projects-topbar__nav">
            <button class="folder-back-btn" id="btn-back-to-districts" type="button" aria-label="İlçelere Geri Dön">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="width: 14px; height: 14px;">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span>İlçeler</span>
            </button>
            <div class="projects-title-wrap">
              <h1>${district.name} Projeleri</h1>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: var(--space-1);">
            <div class="field" style="width: 220px;">
              <svg class="field__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
              </svg>
              <input class="input" id="projects-search-input" type="search" placeholder="Proje ara..." value="${this.projectSearchQuery}" style="width: 100%; height: var(--control-height-sm);" />
            </div>
            <button class="btn btn--primary btn--sm" id="btn-create-new-project" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              <span class="btn__label">Yeni Proje Ekle</span>
            </button>
          </div>
        </header>

        <div class="projects-stage">
          <section class="projects-grid-centered" aria-label="${district.name} Projeleri">
            ${filteredProjects.map(project => {
              const fc = getProjectFlowchart(project);
              return `
                <article class="folder-card-flowchart" data-project-id="${project.id}" tabindex="0" role="button" aria-label="${project.name} projesini aç">
                  <svg class="folder-card-flowchart__bg" viewBox="0 0 280 180" preserveAspectRatio="none" aria-hidden="true">
                    <path class="folder-card-flowchart-path" d="${FOLDER_PATH_280}" />
                  </svg>
                  <div class="folder-card-flowchart__content">
                    <div class="folder-card-flowchart__header" style="justify-content: space-between;">
                      <h2 class="folder-card-flowchart__title" style="font-size: 15px;">${project.name}</h2>
                      <span class="project-header-code">${project.code}</span>
                    </div>
                    <div class="folder-card-flowchart__body">
                      ${renderFlowchartSvg(fc.step1, fc.step2, fc.step3, project.id)}
                    </div>
                  </div>
                </article>
              `;
            }).join('')}
          </section>
        </div>

        ${filteredProjects.length === 0 ? `
          <div class="grid-empty" style="display: flex;">
            <h2>Proje bulunamadı</h2>
            <p class="state-hint">"${this.projectSearchQuery}" ile eşleşen bir proje kaydı yok.</p>
          </div>
        ` : ''}
      </div>
    `;

    // Geri Dön Butonu
    const backBtn = this.target.querySelector('#btn-back-to-districts');
    if (backBtn) {
      backBtn.addEventListener('click', () => { window.location.hash = '#models'; });
    }

    // Proje Arama
    const searchInput = this.target.querySelector('#projects-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.projectSearchQuery = e.target.value;
        this.renderDistrictProjects(district);
        const ref = this.target.querySelector('#projects-search-input');
        if (ref) {
          ref.focus();
          ref.selectionStart = ref.selectionEnd = ref.value.length;
        }
      });
    }

    // Yeni Proje Ekle Butonu
    const createBtn = this.target.querySelector('#btn-create-new-project');
    if (createBtn) {
      createBtn.addEventListener('click', () => {
        const pName = prompt('Yeni proje adını giriniz:');
        if (pName && pName.trim()) {
          const newId = 'prj-' + Date.now().toString(36);
          const newCode = `${district.id.slice(0, 3).toUpperCase()}-2026-0${district.projects.length + 1}`;
          district.projects.push({
            id: newId,
            name: pName.trim(),
            code: newCode,
            stage1: { file: null },
            stage2: { file: null },
            stage3: {
              subStatus: 'yazi_gonderildi',
              applicationFile: null,
              approvalFile: null,
              startDate: '',
              endDate: ''
            }
          });
          window.showToast?.(`"${pName.trim()}" projesi başarıyla eklendi.`);
          this.renderDistrictProjects(district);
        }
      });
    }

    // Proje Detayına Gir
    this.target.querySelectorAll('.folder-card-flowchart').forEach(tile => {
      const open = () => {
        const pId = tile.getAttribute('data-project-id');
        window.location.hash = `#models/${district.id}/${pId}`;
      };
      tile.addEventListener('click', open);
      tile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });
  }

  // =========================================================================
  // GÖRÜNÜM 3: PROJE DETAYI & 3 STATÜ İŞ AKIŞI (#models/:districtId/:projectId)
  // 1. Hat Yok Liste (.xlsx)
  // 2. Tatbikat Projesi (.pdf)
  // 3. Ruhsat Başvuru (Yazı Gönderildi / Bekliyor / Onaylandı)
  // "Onaylandı" -> Onaylı Ruhsat Belgesi (.pdf) + Başlangıç & Bitiş Tarihi
  // =========================================================================
  renderProjectDetail(district, project) {
    if (!this.isStage3Open) {
      this.isStage3Open = true;
    }
    // Varsayılan statü kontrolleri
    if (!project.stage1.status) {
      project.stage1.status = project.stage1.file ? 'tamamlandi' : 'bekliyor';
    }
    if (!project.stage2.status) {
      project.stage2.status = project.stage2.file ? 'tamamlandi' : 'bekliyor';
    }
    if (!project.stage3.subStatus) {
      project.stage3.subStatus = 'yazi_gonderildi';
    }

    const stage1Status = project.stage1.status;
    const stage2Status = project.stage2.status;
    const stage3Status = project.stage3.subStatus;
    const isStage3Approved = stage3Status === 'onaylandi';
    const isStage3Sent = stage3Status === 'yazi_gonderildi';
    const isStage3Waiting = stage3Status === 'bekliyor';

    const chevronSvg = `
      <div class="yellow-chevron-separator" aria-hidden="true">
        <svg viewBox="0 0 32 64" fill="none">
          <path d="M 4 8 L 14 8 L 30 32 L 14 56 L 4 56 L 20 32 Z" fill="url(#yellow-chevron-grad)" />
          <defs>
            <linearGradient id="yellow-chevron-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#eab308"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    `;

    this.target.innerHTML = `
      <div class="project-detail-view">
        <!-- Kompakt ve Şık Üst Bar -->
        <header class="project-detail-topbar">
          <div class="project-detail-topbar__left">
            <button class="folder-back-btn" id="btn-back-to-projects" type="button" aria-label="Projelere Geri Dön">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="width: 14px; height: 14px;">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span>${district.name} Projeleri</span>
            </button>
            <div class="project-header-info">
              <h1>${project.name}</h1>
              <span class="project-header-code">${project.code}</span>
            </div>
          </div>

          <div class="project-detail-topbar__right">
            <!-- Aynı ilçedeki projeler arası hızlı geçiş hapları -->
            <div class="project-tabs-list">
              ${district.projects.map(p => `
                <button class="project-tab-pill ${p.id === project.id ? 'is-active' : ''}" data-switch-project="${p.id}" type="button">
                  ${p.name.length > 20 ? p.name.slice(0, 18) + '...' : p.name}
                </button>
              `).join('')}
            </div>
            <button class="btn btn--primary btn--sm" id="btn-save-project-workflow" type="button" style="margin-left: 8px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                <polyline points="17 21 17 13 7 13 7 21"/>
                <polyline points="7 3 7 8 15 8"/>
              </svg>
              <span class="btn__label">Değişiklikleri Kaydet</span>
            </button>
          </div>
        </header>

        <!-- Hidden File Inputs -->
        <input type="file" id="file-input-stage1" accept=".xlsx,.xls" hidden />
        <input type="file" id="file-input-stage2" accept=".pdf" hidden />
        <input type="file" id="file-input-stage3-app" accept=".pdf" hidden />
        <input type="file" id="file-input-stage3-approval" accept=".pdf" hidden />

        <!-- Chevron Süreç Alanı (Sıfır Scroll, Referans Görsel Düzeni) -->
        <div class="chevron-process-stage">
          <div class="chevron-pipeline">
            
            <!-- KART 1: HAT YOK LİSTE PAYLAŞILDI -->
            <article class="chevron-card" id="card-stage-1">
              <!-- Yukarıda ikonlar: Ekle ikonu (yazısız) ve Görüntüleme ikonu (yazısız) -->
              <div class="card-top-actions">
                <!-- Ekle İkonu (Yazısız) -->
                <button class="card-action-btn-circle card-action-btn-circle--add" id="trigger-upload-stage1" type="button" title="${project.stage1.file ? 'Dosyayı Değiştir (.xlsx)' : 'Hat Yok Liste Ekle (.xlsx)'}" aria-label="Hat Yok Liste Ekle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>

                <!-- Görüntüleme İkonu (Yazısız) -->
                <button class="card-action-btn-circle card-action-btn-circle--view ${!project.stage1.file ? 'is-disabled' : ''}" data-view-stage1 type="button" title="${project.stage1.file ? project.stage1.file.name + ' Görüntüle' : 'Dosya eklenmedi'}" aria-label="Hat Yok Liste Görüntüle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>

              <!-- İlgili başlık ortada (Doğal Türkçe karakterler ve sayfa tasarım stili) -->
              <h2 class="chevron-card__title">Hat Yok Liste<br/>Paylaşıldı</h2>

              <!-- Başlığın altında bekliyor veya tamamlandı seçimi & dosya adı -->
              <div class="chevron-card__body">
                <div class="status-pill-toggle">
                  <button class="status-pill-btn ${stage1Status === 'bekliyor' ? 'is-active-waiting' : ''}" data-stage1-status="bekliyor" type="button">Bekliyor</button>
                  <button class="status-pill-btn ${stage1Status === 'tamamlandi' ? 'is-active-completed' : ''}" data-stage1-status="tamamlandi" type="button">Tamamlandı</button>
                </div>

                ${project.stage1.file ? `
                  <div class="file-view-badge-wrap anim-fade-in" style="margin-top: 6px;">
                    <span class="file-hint-name" title="${project.stage1.file.name}">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 12px; height: 12px; vertical-align: middle; margin-right: 4px; color: #10b981;">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      ${project.stage1.file.name}
                    </span>
                  </div>
                ` : `
                  <span class="file-hint-name" style="color: #94a3b8; font-style: italic; margin-top: 6px;">Dosya yüklenmedi</span>
                `}
              </div>
            </article>

            <!-- 1. Sarı Chevron Ok -->
            ${chevronSvg}

            <!-- KART 2: TATBİKAT PROJESİ TESLİM ALINDI -->
            <article class="chevron-card" id="card-stage-2">
              <!-- Yukarıda ikonlar: Ekle ikonu (yazısız) ve Görüntüleme ikonu (yazısız) -->
              <div class="card-top-actions">
                <!-- Ekle İkonu (Yazısız) -->
                <button class="card-action-btn-circle card-action-btn-circle--add" id="trigger-upload-stage2" type="button" title="${project.stage2.file ? 'Tatbikat Projesini Değiştir (.pdf)' : 'Tatbikat Projesi Ekle (.pdf)'}" aria-label="Tatbikat Projesi Ekle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>

                <!-- Görüntüleme İkonu (Yazısız) -->
                <button class="card-action-btn-circle card-action-btn-circle--view ${!project.stage2.file ? 'is-disabled' : ''}" data-view-stage2 type="button" title="${project.stage2.file ? project.stage2.file.name + ' Görüntüle' : 'Dosya eklenmedi'}" aria-label="Tatbikat Projesi Görüntüle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>

              <!-- İlgili başlık ortada -->
              <h2 class="chevron-card__title">Tatbikat Projesi<br/>Teslim Alındı</h2>

              <!-- Başlığın altında bekliyor veya tamamlandı seçimi & dosya adı -->
              <div class="chevron-card__body">
                <div class="status-pill-toggle">
                  <button class="status-pill-btn ${stage2Status === 'bekliyor' ? 'is-active-waiting' : ''}" data-stage2-status="bekliyor" type="button">Bekliyor</button>
                  <button class="status-pill-btn ${stage2Status === 'tamamlandi' ? 'is-active-completed' : ''}" data-stage2-status="tamamlandi" type="button">Tamamlandı</button>
                </div>

                ${project.stage2.file ? `
                  <div class="file-view-badge-wrap anim-fade-in" style="margin-top: 6px;">
                    <span class="file-hint-name" title="${project.stage2.file.name}">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 12px; height: 12px; vertical-align: middle; margin-right: 4px; color: #10b981;">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      ${project.stage2.file.name}
                    </span>
                  </div>
                ` : `
                  <span class="file-hint-name" style="color: #94a3b8; font-style: italic; margin-top: 6px;">Dosya yüklenmedi</span>
                `}
              </div>
            </article>

            <!-- 2. Sarı Chevron Ok -->
            ${chevronSvg}

            <!-- KART 3: RUHSAT BAŞVURU SÜRECİ (Tıklandığında sağdaki branşlar açılır) -->
            <article class="chevron-card chevron-card--stage3 ${this.isStage3Open ? 'is-active' : ''}" id="card-stage-3" role="button" tabindex="0" title="Ruhsat Başvuru Aşamalarını Aç">
              <div class="stage3-icon-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;">
                  <rect x="2" y="5" width="20" height="14" rx="3"/>
                  <line x1="2" y1="10" x2="22" y2="10"/>
                  <line x1="6" y1="14" x2="11" y2="14"/>
                </svg>
              </div>

              <!-- İlgili başlık ortada -->
              <h2 class="chevron-card__title">Ruhsat Başvuru<br/>Süreci</h2>

              <div class="chevron-card__body">
                <div class="stage3-current-summary ${isStage3Approved ? 'is-approved' : (isStage3Sent ? 'is-sent' : '')}">
                  ${isStage3Approved ? 'Onaylandı' : (isStage3Sent ? 'Yazı Gönderildi' : 'Bekliyor')}
                </div>
                <span class="file-hint-name" style="margin-top: 4px; font-weight: 600;">Sağ menüden seçim yapınız</span>
              </div>
            </article>

            <!-- 3. Sarı Chevron Ok -->
            ${this.isStage3Open ? chevronSvg : ''}

            <!-- 3. BAŞLIK SEÇİMLERİ (SAĞ ÜSTE, SAĞ ORTAYA, SAĞ ALTA) -->
            ${this.isStage3Open ? `
              <div class="stage3-branches-column anim-fade-in">
                <!-- 1. SAĞ ÜST: YAZI GÖNDERİLDİ -->
                <article class="branch-option-card branch-option-card--sent ${isStage3Sent ? 'is-selected' : ''}" data-branch-select="yazi_gonderildi" tabindex="0">
                  <div class="branch-card-header">
                    <div class="branch-card-title-group">
                      <span class="branch-radio-dot"></span>
                      <span class="branch-card-title">Yazı Gönderildi</span>
                    </div>
                    <!-- Görüntüleme ve Ekleme İkonları -->
                    <div class="branch-actions-wrap">
                      <button class="btn-view-icon-only ${!project.stage3.applicationFile ? 'is-disabled' : ''}" data-view-sent-letter type="button" title="${project.stage3.applicationFile ? 'Gönderilen Resmi Yazıyı Görüntüle' : 'Dosya eklenmedi'}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                      <button class="btn-add-icon-only" data-upload-sent-letter type="button" title="${project.stage3.applicationFile ? 'Resmi Yazıyı Değiştir (.pdf)' : 'Resmi Yazı Ekle (.pdf)'}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p class="branch-card-desc">
                    ${project.stage3.applicationFile ? project.stage3.applicationFile.name : 'Belediyeye resmi başvuru yazısı (.pdf)'}
                  </p>
                </article>

                <!-- 2. SAĞ ORTA: BEKLİYOR -->
                <article class="branch-option-card branch-option-card--waiting ${isStage3Waiting ? 'is-selected' : ''}" data-branch-select="bekliyor" tabindex="0">
                  <div class="branch-card-header">
                    <div class="branch-card-title-group">
                      <span class="branch-radio-dot"></span>
                      <span class="branch-card-title">Bekliyor</span>
                    </div>
                  </div>
                  <p class="branch-card-desc">Belediye inceleme süreci beklemede</p>
                </article>

                <!-- 3. SAĞ ALT: ONAYLANDI -->
                <article class="branch-option-card branch-option-card--approved ${isStage3Approved ? 'is-selected' : ''}" data-branch-select="onaylandi" tabindex="0">
                  <div class="branch-card-header">
                    <div class="branch-card-title-group">
                      <span class="branch-radio-dot"></span>
                      <span class="branch-card-title">Onaylandı</span>
                    </div>
                    <!-- Görüntüleme ve Ekleme İkonları -->
                    <div class="branch-actions-wrap">
                      <button class="btn-view-icon-only ${!project.stage3.approvalFile ? 'is-disabled' : ''}" data-view-approval-doc type="button" title="${project.stage3.approvalFile ? 'Onaylı Ruhsat Belgesini Görüntüle' : 'Belge eklenmedi'}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                      <button class="btn-add-icon-only" data-upload-approval-doc type="button" title="${project.stage3.approvalFile ? 'Ruhsat Belgesini Değiştir (.pdf)' : 'Onaylı Ruhsat Belgesi Ekle (.pdf)'}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p class="branch-card-desc">
                    ${project.stage3.approvalFile ? project.stage3.approvalFile.name : 'Belediye ruhsat onay belgesi (.pdf)'}
                  </p>

                  <!-- Onaylandı Seçilince Açılan İki Field (Ruhsat Başlangıç & Bitiş Tarihi) -->
                  ${isStage3Approved ? `
                    <div class="approved-date-fields anim-fade-in" onclick="event.stopPropagation()">
                      <div class="approved-date-row">
                        <label class="approved-date-label" for="ruhsat-start-date">Ruhsat Başlangıç Tarihi</label>
                        <input type="date" class="approved-date-input" id="ruhsat-start-date" value="${project.stage3.startDate || ''}" />
                      </div>
                      <div class="approved-date-row">
                        <label class="approved-date-label" for="ruhsat-end-date">Ruhsat Bitiş Tarihi</label>
                        <input type="date" class="approved-date-input" id="ruhsat-end-date" value="${project.stage3.endDate || ''}" />
                      </div>
                    </div>
                  ` : ''}
                </article>
              </div>
            ` : ''}

          </div>
        </div>
      </div>
    `;

    // 1. Geri Dön Butonu
    const backBtn = this.target.querySelector('#btn-back-to-projects');
    if (backBtn) {
      backBtn.addEventListener('click', () => { window.location.hash = `#models/${district.id}`; });
    }

    // 2. Proje Hızlı Geçiş Butonları
    this.target.querySelectorAll('[data-switch-project]').forEach(tab => {
      tab.addEventListener('click', () => {
        const nextId = tab.getAttribute('data-switch-project');
        window.location.hash = `#models/${district.id}/${nextId}`;
      });
    });

    // 3. Statü 1 Dosya Yükleme / Değiştirme
    const triggerUpload1 = this.target.querySelector('#trigger-upload-stage1');
    const fileInput1 = this.target.querySelector('#file-input-stage1');
    if (triggerUpload1 && fileInput1) {
      triggerUpload1.addEventListener('click', () => fileInput1.click());
      triggerUpload1.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          fileInput1.click();
        }
      });
      fileInput1.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) {
          project.stage1.file = { name: file.name, type: 'xlsx' };
          project.stage1.status = 'tamamlandi';
          window.showToast?.(`"${file.name}" Statü 1 (Hat Yok Liste) olarak yüklendi.`);
          this.renderProjectDetail(district, project);
        }
      });
    }

    // 4. Statü 1 "Bekliyor" / "Tamamlandı" Seçimi
    this.target.querySelectorAll('[data-stage1-status]').forEach(btn => {
      btn.addEventListener('click', () => {
        const newStatus = btn.getAttribute('data-stage1-status');
        project.stage1.status = newStatus;
        this.renderProjectDetail(district, project);
      });
    });

    // 5. Statü 1 Dosya Görüntüleme Butonu
    const viewBtn1 = this.target.querySelector('[data-view-stage1]');
    if (viewBtn1) {
      viewBtn1.addEventListener('click', () => {
        if (project.stage1.file) {
          this.openFileModal(project.stage1.file, 'stage1', district, project);
        } else {
          window.showToast?.('Henüz dosya eklenmemiş. Lütfen (+) butonundan .xlsx yükleyiniz.');
        }
      });
    }

    // 6. Statü 2 Dosya Yükleme / Değiştirme
    const triggerUpload2 = this.target.querySelector('#trigger-upload-stage2');
    const fileInput2 = this.target.querySelector('#file-input-stage2');
    if (triggerUpload2 && fileInput2) {
      triggerUpload2.addEventListener('click', () => fileInput2.click());
      triggerUpload2.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          fileInput2.click();
        }
      });
      fileInput2.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) {
          project.stage2.file = { name: file.name, type: 'pdf' };
          project.stage2.status = 'tamamlandi';
          window.showToast?.(`"${file.name}" Statü 2 (Tatbikat Projesi) olarak yüklendi.`);
          this.renderProjectDetail(district, project);
        }
      });
    }

    // 7. Statü 2 "Bekliyor" / "Tamamlandı" Seçimi
    this.target.querySelectorAll('[data-stage2-status]').forEach(btn => {
      btn.addEventListener('click', () => {
        const newStatus = btn.getAttribute('data-stage2-status');
        project.stage2.status = newStatus;
        this.renderProjectDetail(district, project);
      });
    });

    // 8. Statü 2 Dosya Görüntüleme Butonu
    const viewBtn2 = this.target.querySelector('[data-view-stage2]');
    if (viewBtn2) {
      viewBtn2.addEventListener('click', () => {
        if (project.stage2.file) {
          this.openFileModal(project.stage2.file, 'stage2', district, project);
        } else {
          window.showToast?.('Henüz dosya eklenmemiş. Lütfen (+) butonundan .pdf yükleyiniz.');
        }
      });
    }

    // 9. 3. Başlık Kartı Tıklaması (Sağdaki Seçimleri Açar/Odaklar)
    const card3 = this.target.querySelector('#card-stage-3');
    if (card3) {
      card3.addEventListener('click', () => {
        this.isStage3Open = true;
        this.renderProjectDetail(district, project);
      });
      card3.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.isStage3Open = true;
          this.renderProjectDetail(district, project);
        }
      });
    }

    // 10. Sağdaki Branş Seçimleri (Yazı Gönderildi, Bekliyor, Onaylandı)
    this.target.querySelectorAll('[data-branch-select]').forEach(branchCard => {
      branchCard.addEventListener('click', (e) => {
        // Date inputlara veya ikon butonlarına tıklanırsa seçimi sıfırlama
        if (e.target.closest('.approved-date-fields') || e.target.closest('.btn-view-icon-only') || e.target.closest('.btn-add-icon-only')) return;
        const targetBranch = branchCard.getAttribute('data-branch-select');
        project.stage3.subStatus = targetBranch;
        this.renderProjectDetail(district, project);
      });
      branchCard.addEventListener('keydown', (e) => {
        if (e.target.closest('.approved-date-fields') || e.target.closest('.btn-view-icon-only') || e.target.closest('.btn-add-icon-only')) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const targetBranch = branchCard.getAttribute('data-branch-select');
          project.stage3.subStatus = targetBranch;
          this.renderProjectDetail(district, project);
        }
      });
    });

    // 11. Yazı Gönderildi Görüntüleme ve Ekleme İkonları
    const viewSentBtn = this.target.querySelector('[data-view-sent-letter]');
    const uploadSentBtn = this.target.querySelector('[data-upload-sent-letter]');
    const fileInputApp = this.target.querySelector('#file-input-stage3-app');

    if (viewSentBtn) {
      viewSentBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (project.stage3.applicationFile) {
          this.openFileModal(project.stage3.applicationFile, 'stage3-app', district, project);
        } else {
          window.showToast?.('Henüz başvuru yazısı yüklenmemiş. Yanındaki (+) ikonundan .pdf ekleyebilirsiniz.');
        }
      });
    }

    if (uploadSentBtn && fileInputApp) {
      uploadSentBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInputApp.click();
      });
    }

    if (fileInputApp) {
      fileInputApp.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) {
          project.stage3.applicationFile = { name: file.name, type: 'pdf' };
          project.stage3.subStatus = 'yazi_gonderildi';
          window.showToast?.(`"${file.name}" Başvuru Yazısı (.pdf) olarak eklendi.`);
          this.renderProjectDetail(district, project);
        }
      });
    }

    // 12. Onaylı Ruhsat Belgesi Görüntüleme ve Ekleme İkonları
    const viewApprovalBtn = this.target.querySelector('[data-view-approval-doc]');
    const uploadApprovalBtn = this.target.querySelector('[data-upload-approval-doc]');
    const fileInputApproval = this.target.querySelector('#file-input-stage3-approval');

    if (viewApprovalBtn) {
      viewApprovalBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (project.stage3.approvalFile) {
          this.openFileModal(project.stage3.approvalFile, 'stage3-approval', district, project);
        } else {
          window.showToast?.('Henüz onaylı ruhsat belgesi yüklenmemiş. Yanındaki (+) ikonundan .pdf ekleyebilirsiniz.');
        }
      });
    }

    if (uploadApprovalBtn && fileInputApproval) {
      uploadApprovalBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInputApproval.click();
      });
    }

    if (fileInputApproval) {
      fileInputApproval.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) {
          project.stage3.approvalFile = { name: file.name, type: 'pdf' };
          project.stage3.subStatus = 'onaylandi';
          window.showToast?.(`"${file.name}" Onaylı Ruhsat Belgesi (.pdf) olarak kaydedildi.`);
          this.renderProjectDetail(district, project);
        }
      });
    }

    // 13. Onaylandı Seçilince Açılan Ruhsat Başlangıç & Bitiş Tarihleri
    const startDateInput = this.target.querySelector('#ruhsat-start-date');
    if (startDateInput) {
      startDateInput.addEventListener('change', (e) => {
        project.stage3.startDate = e.target.value;
      });
      startDateInput.addEventListener('click', (e) => e.stopPropagation());
    }

    const endDateInput = this.target.querySelector('#ruhsat-end-date');
    if (endDateInput) {
      endDateInput.addEventListener('change', (e) => {
        project.stage3.endDate = e.target.value;
      });
      endDateInput.addEventListener('click', (e) => e.stopPropagation());
    }

    // 14. Değişiklikleri Kaydet Butonu
    const saveBtn = this.target.querySelector('#btn-save-project-workflow');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        window.showToast?.(`"${project.name}" iş akışı başarıyla kaydedildi.`);
      });
    }
  }

  // =========================================================================
  // DOSYA GÖRÜNTÜLEME MODALI (Modal & Detaylar)
  // =========================================================================
  openFileModal(file, stageKey, district, project) {
    const existing = document.querySelector('.file-modal-backdrop');
    if (existing) existing.remove();

    const isPdf = file.name.toLowerCase().endsWith('.pdf') || file.type === 'pdf';
    const modalEl = document.createElement('div');
    modalEl.className = 'file-modal-backdrop';
    modalEl.innerHTML = `
      <div class="file-modal-card" role="dialog" aria-modal="true" aria-label="${file.name} Detayı">
        <div class="file-modal-header">
          <div class="file-modal-title-group">
            <div class="file-modal-icon ${isPdf ? 'file-modal-icon--pdf' : 'file-modal-icon--xlsx'}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <div>
              <h3>${isPdf ? 'PDF Belgesi' : 'Excel Veri Tablosu'}</h3>
              <span>${project.code} — ${district.name}</span>
            </div>
          </div>
          <button class="file-modal-close-btn" id="btn-close-file-modal" type="button" aria-label="Kapat">&times;</button>
        </div>

        <div class="file-modal-body">
          <div class="file-meta-box">
            <span class="file-meta-name">${file.name}</span>
            <span class="file-meta-status">Sistemde Doğrulandı &bull; Hazır</span>
          </div>

          <div style="background: #f1f5f9; border-radius: 12px; height: 160px; display: grid; place-items: center; border: 1.5px dashed #cbd5e1;">
            <div style="text-align: center; color: #64748b; font-size: 12px; display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width: 36px; height: 36px; color: ${isPdf ? '#e11d48' : '#107c41'};">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              <span>Belge güvenli bağlantı ile önizlendi.</span>
            </div>
          </div>
        </div>

        <div class="file-modal-footer">
          <button class="btn btn--secondary btn--sm" id="btn-modal-replace-file" type="button">Dosyayı Değiştir</button>
          <button class="btn btn--primary btn--sm" id="btn-modal-download-file" type="button">İndir</button>
        </div>
      </div>
    `;

    document.body.appendChild(modalEl);

    const closeModal = () => {
      modalEl.remove();
      document.removeEventListener('keydown', onKeyDown);
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKeyDown);

    modalEl.querySelector('#btn-close-file-modal')?.addEventListener('click', closeModal);
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) closeModal();
    });

    modalEl.querySelector('#btn-modal-download-file')?.addEventListener('click', () => {
      window.showToast?.(`"${file.name}" indiriliyor...`);
    });

    modalEl.querySelector('#btn-modal-replace-file')?.addEventListener('click', () => {
      closeModal();
      if (stageKey === 'stage1') {
        document.querySelector('#file-input-stage1')?.click();
      } else if (stageKey === 'stage2') {
        document.querySelector('#file-input-stage2')?.click();
      } else if (stageKey === 'stage3-app') {
        document.querySelector('#file-input-stage3-app')?.click();
      } else if (stageKey === 'stage3-approval') {
        document.querySelector('#file-input-stage3-approval')?.click();
      }
    });
  }

  // Proje Durumu Özeti Yardımcısı
  getProjectStatusSummary(project) {
    if (project.stage3.subStatus === 'onaylandi') {
      return { label: 'Ruhsat: Onaylandı', type: 'success' };
    }
    if (project.stage3.subStatus === 'bekliyor') {
      return { label: 'Ruhsat: Bekliyor', type: 'warning' };
    }
    if (project.stage3.subStatus === 'yazi_gonderildi') {
      return { label: 'Ruhsat: Yazı Gönderildi', type: 'info' };
    }
    if (project.stage2.file) {
      return { label: 'Tatbikat Projesi Alındı', type: 'info' };
    }
    if (project.stage1.file) {
      return { label: 'Hat Yok Liste Paylaşıldı', type: 'muted' };
    }
    return { label: 'Yeni Başlangıç', type: 'muted' };
  }
}
