const modules = [
  {group:'ÜBERSICHT', route:'dashboard', label:'Dashboard', icon:'⌂'},
  {group:'CORE OPERATIONS', route:'members', label:'Mitglieder', icon:'◎', badge:'1.248'},
  {group:'CORE OPERATIONS', route:'contracts', label:'Tarife & Verträge', icon:'▱'},
  {group:'CORE OPERATIONS', route:'sales', label:'Studio Sales', icon:'＋'},
  {group:'CORE OPERATIONS', route:'sepa', label:'SEPA & Forderungen', icon:'€', badge:'12'},
  {group:'CORE OPERATIONS', route:'accounting', label:'Buchhaltung', icon:'≡'},
  {group:'CORE OPERATIONS', route:'access', label:'Zutrittskontrolle', icon:'⌁'},
  {group:'CORE OPERATIONS', route:'pos', label:'POS / Kasse', icon:'▣'},
  {group:'CORE OPERATIONS', route:'online', label:'Online-Verträge', icon:'↗'},
  {group:'CORE OPERATIONS', route:'reports', label:'Reporting', icon:'▥'},
  {group:'INTELLIGENCE', route:'location', label:'Standortanalyse', icon:'⌖'},
  {group:'INTELLIGENCE', route:'ai', label:'AI Communication', icon:'✦'},
  {group:'INTELLIGENCE', route:'churn', label:'Churn Prediction', icon:'◔'},
  {group:'INTELLIGENCE', route:'receivables-ai', label:'AI Forderungen', icon:'◈'},
  {group:'INTELLIGENCE', route:'leads', label:'Lead Automation', icon:'◇'},
  {group:'INTELLIGENCE', route:'marketing-ai', label:'AI Marketing', icon:'✧'},
  {group:'INTELLIGENCE', route:'automation', label:'Automatisierung', icon:'⚙'},
  {group:'GROWTH & INTEGRATION', route:'live-marketing', label:'Live Marketing', icon:'↗'},
  {group:'GROWTH & INTEGRATION', route:'expansion', label:'Expansion Tool', icon:'⌗'},
  {group:'GROWTH & INTEGRATION', route:'payments', label:'Payments', icon:'◫'},
  {group:'GROWTH & INTEGRATION', route:'integrations', label:'Integrationen', icon:'⇄'},
  {group:'MEMBER EXPERIENCE', route:'member-app', label:'Member App', icon:'▯'},
  {group:'MEMBER EXPERIENCE', route:'classes', label:'Classes & Training', icon:'◒'},
  {group:'MEMBER EXPERIENCE', route:'community', label:'Community & Referral', icon:'♢'},
  {group:'SYSTEM', route:'scope', label:'Scope Overview', icon:'✓'},
  {group:'SYSTEM', route:'settings', label:'Einstellungen', icon:'⚙'}
];

const scope = {
  members: {phase:'Phase 1', title:'Mitgliederverwaltung', subtitle:'Zentrale Mitgliederakte mit Lifecycle, Dokumenten, Timeline, GDPR und intelligenten Listen.', icon:'◎', features:[
    ['Mitglieder-Lifecycle','Aktiv, pausiert, gekündigt, Interessent und ehemalige Mitglieder mit vollständiger Historie.'],
    ['Dynamische Listen','Segmente nach Tarif, Status, Alter, Zahlungsstatus, Check-ins und frei kombinierbaren Filtern.'],
    ['Timeline & Audit Log','Lückenlose Ereignishistorie für Änderungen, Kommunikation, Verträge, Zahlungen und Zutritte.'],
    ['Duplicate Detection','Erkennung potenzieller Dubletten über Name, E-Mail, Telefonnummer und Bankdaten.'],
    ['GDPR Datenexport','Strukturierter Export sowie definierter Prozess für Lösch- und Auskunftsanfragen.'],
    ['Dokumentenablage','Verträge, Mandate, Rechnungen, Einwilligungen und externe Dokumente direkt am Mitglied.']
  ]},
  contracts: {phase:'Phase 2', title:'Tarife & Verträge', subtitle:'Flexibles Tarifmodell und belastbare Contract State Machine für komplexe Studioverträge.', icon:'▱', features:[
    ['Tarif-Engine','Laufzeit, Intervalle, Aufnahmegebühr, Zusatzmodule, Startgebühren und wiederkehrende Positionen.'],
    ['Contract State Machine','Entwurf, aktiv, pausiert, gekündigt, widerrufen und beendet mit gültigen Transitionen.'],
    ['Kündigungslogik','Fristen, Mindestlaufzeit, Verlängerungen, Sonderkündigung und dokumentierte Wirksamkeit.'],
    ['Ruhezeiten','Vertragspausen mit Verschiebung der Laufzeit, Beitragslogik und Zugriffssperren.'],
    ['Preis-Historie','Versionierte Preise und Bedingungen ohne rückwirkende Änderung bestehender Verträge.'],
    ['Due Items','Automatische Erzeugung abrechenbarer Vertragspositionen als Basis für SEPA und Rechnungen.']
  ]},
  sales: {phase:'Phase 3', title:'In-Studio Sales', subtitle:'Geführter Abschlussprozess vom Interessenten bis zum unterschriebenen Vertrag und SEPA-Mandat.', icon:'＋', features:[
    ['Signup Wizard','Mehrstufiger Abschluss mit Stammdaten, Tarif, Optionen, Zahlungsdaten und Einwilligungen.'],
    ['Digitale Unterschrift','Signatur direkt auf Tablet oder Desktop inklusive Timestamp und Dokumentreferenz.'],
    ['PDF-Vertrag','Automatische, versionierte Vertragserstellung mit allen individuellen Positionen.'],
    ['SEPA-Mandat','Mandatserfassung im selben Flow und unmittelbare Verknüpfung mit dem Vertrag.'],
    ['Atomic Transaction','Mitglied, Vertrag, Mandat und Dokumente werden konsistent in einem Abschluss erzeugt.'],
    ['Terms Versioning','AGB, Datenschutz und Widerruf mit dokumentierter Version und Zustimmung.']
  ]},
  sepa: {phase:'Phase 4', title:'SEPA & Forderungsmanagement', subtitle:'Von Mandaten und pain.008 bis Rücklastschriften, Mahnwesen und Bankabgleich.', icon:'€', features:[
    ['Mandatsverwaltung','Mandatsreferenz, Gläubiger-ID, IBAN/BIC, Signaturdatum und Statusverwaltung.'],
    ['pain.008 Export','XML-Generator für Direct Debit Runs inklusive Sequenztypen und Fälligkeitsdatum.'],
    ['Vier-Augen-Freigabe','Debit Runs können vorbereitet, geprüft und erst danach final freigegeben werden.'],
    ['Pre-Notification','Automatisierte Vorabinformation an Mitglieder vor dem geplanten Einzug.'],
    ['Bank Reconciliation','Import von Bankbewegungen und automatisierte Zuordnung zu offenen Forderungen.'],
    ['R-Codes & Mahnung','Rücklastschriftgründe, Gebühren, Mahnstufen, Sperren und nachvollziehbare Historie.']
  ]},
  accounting: {phase:'Phase 5', title:'Buchhaltung & Rechnungen', subtitle:'Nachvollziehbare Finanzprozesse mit VAT, unveränderbaren Belegen, DATEV Export und E-Rechnung.', icon:'≡', features:[
    ['Invoice Engine','Eindeutige Rechnungsnummern, Leistungszeiträume, Steuerlogik und PDF-Ausgabe.'],
    ['Unveränderbare Belege','Nach Finalisierung keine stille Mutation – nur Storno, Korrektur oder Gutschrift.'],
    ['VAT Handling','Steuersätze und steuerliche Behandlung für Mitgliedschaft, Produkte und Zusatzleistungen.'],
    ['DATEV Export','Buchungsexport mit konfigurierbarer Kontenzuordnung für den Steuerberater.'],
    ['Credit Notes','Sauberer Gutschriften- und Stornoprozess mit Referenz auf das Ursprungsdokument.'],
    ['E-Invoicing Ready','Strukturierte Grundlage für elektronische Rechnungsformate und externe Provider.']
  ]},
  access: {phase:'Phase 6', title:'Zutrittskontrolle', subtitle:'Realtime Access Engine für RFID, NFC und QR mit Offline-Whitelist und Anti-Passback.', icon:'⌁', features:[
    ['Access Rules','Zutritt nach Mitgliedsstatus, Tarif, Zeitfenster, Forderungsstatus und Standort.'],
    ['RFID / NFC / QR','Medien können ausgegeben, ersetzt, widerrufen und eindeutig Mitgliedern zugeordnet werden.'],
    ['Door Controller Adapter','Vendor-neutrale Schnittstelle für Drehkreuze, Türen und externe Controller.'],
    ['Offline Whitelist','Lokaler Cache für stabilen Zutritt bei kurzfristigem Ausfall der Internetverbindung.'],
    ['Anti-Passback','Regeln gegen Mehrfachnutzung desselben Mediums innerhalb definierter Zeitfenster.'],
    ['Realtime Log','Jeder Zutrittsversuch mit Ergebnis, Gerät, Regel, Zeitpunkt und Mitglied im Audit Trail.']
  ]},
  pos: {phase:'Phase 7', title:'POS / Kasse', subtitle:'Studio-Kasse für Produkte und Services mit TSE-Adapter, DSFinV-K, Belegen und Tagesabschluss.', icon:'▣', features:[
    ['Produktkatalog','Artikel, Varianten, Preise, Steuerklassen, Lagerbestand und Schnellwahltasten.'],
    ['TSE Adapter','Abstraktionsschicht für zertifizierten TSE-Provider und fiskalisierte Transaktionen.'],
    ['DSFinV-K Export','Technische Exportstruktur für die gesetzlich relevante Kassendatenbereitstellung.'],
    ['Belegausgabe','Digitaler oder gedruckter Kassenbeleg mit sauberer Transaktionsreferenz.'],
    ['Storno & Gegenbuchung','Nachvollziehbare Korrekturprozesse statt nachträglicher Manipulation.'],
    ['Z-Bericht','Tagesabschluss, Kassenbestand, Zahlarten, Differenzen und Export für Accounting.']
  ]},
  online: {phase:'Phase 8', title:'Online-Verträge & Self-Service', subtitle:'Digitale Vertragsstrecke inklusive Widerruf, Kündigung, Bestätigung und rechtssicher dokumentierter Einwilligungen.', icon:'↗', features:[
    ['Online Signup','Responsive Abschlussstrecke mit Tarifauswahl, persönlichen Daten, SEPA und Bestätigung.'],
    ['Kündigungsfunktion','Digitaler Kündigungsprozess mit Identifikation, Wirksamkeitsdatum und Bestätigung.'],
    ['Widerrufsprozess','Elektronischer Widerruf mit Dokumentation, Eingangsbestätigung und Statuswechsel.'],
    ['Consent Tracking','Versionierte Nachweise für AGB, Datenschutz, Marketing und optionale Einwilligungen.'],
    ['Branding per Tenant','Farben, Logo, Texte und Vertragsdokumente pro Studio konfigurierbar.'],
    ['Conversion Tracking','Schritte und Abbrüche für Funnel-Optimierung und Marketing-Attribution.']
  ]},
  reports: {phase:'Phase 9', title:'Reporting & Studio KPIs', subtitle:'Operatives Reporting für Umsatz, Mitglieder, Kündigungen, Check-ins, Forderungen und Export.', icon:'▥', features:[
    ['Executive Dashboard','MRR, aktive Mitglieder, Churn, Forderungen, Check-ins und Umsatzentwicklung.'],
    ['Revenue Reporting','Umsatz nach Zeitraum, Tarif, Standort, Produkt, Zahlart und Steuerklasse.'],
    ['Member Analytics','Neuzugänge, Kündigungen, Pausen, Kohorten und Mitgliederentwicklung.'],
    ['Check-in Analytics','Besuchshäufigkeit, Stoßzeiten, aktive Nutzer und Inaktivitätssegmente.'],
    ['CSV Export','Alle relevanten Reports mit Filtern exportierbar für weitere Analyse.'],
    ['Materialized Aggregates','Performance-optimierte Auswertungen für große Mandanten und längere Zeiträume.']
  ]},
  ai: {phase:'Phase 10', title:'AI Communication Agent', subtitle:'Kontextsensitiver Studio-Agent für Service, Verträge, Termine, Zahlungsfragen und proaktive Kommunikation.', icon:'✦', features:[
    ['Member Context','Antworten auf Basis von Mitglied, Vertrag, offenen Positionen, Check-ins und Kommunikation.'],
    ['Omnichannel Ready','Einheitliche Agent-Logik für App-Inbox, E-Mail und spätere Messaging-Kanäle.'],
    ['Guardrails','Erlaubte Aktionen, sensible Themen, Freigabestufen und nachvollziehbare Agent-Entscheidungen.'],
    ['Knowledge Base','Studio-Regeln, Tarife, Öffnungszeiten, FAQ und interne Richtlinien als Wissensbasis.'],
    ['Human Handover','Übergabe an Mitarbeiter mit kompletter Gesprächszusammenfassung und Kontext.'],
    ['Action Tools','Vorbereitete Tool-Calls für Status, Dokumente, Termine, Forderungen und interne Workflows.']
  ]},
  churn: {phase:'Phase 11', title:'Churn Prediction', subtitle:'Früherkennung gefährdeter Mitglieder aus Verhalten, Zahlungen, Nutzung und Vertragsdaten.', icon:'◔', features:[
    ['Risk Score','Kontinuierlicher Score pro Mitglied mit transparenten Einflussfaktoren.'],
    ['Rule-based Start','Sofort nutzbare Regeln bevor genügend Trainingsdaten für ML vorhanden sind.'],
    ['Behavior Signals','Besuchsabfall, ausbleibende Nutzung, Supportkontakte und Vertragsereignisse.'],
    ['Payment Signals','Rücklastschriften, Mahnstufen und wiederkehrende Zahlungsprobleme als Signale.'],
    ['Retention Playbooks','Automatische Empfehlungen für Kontakt, Angebot, Gespräch oder Kampagne.'],
    ['Model Evolution','Späterer Wechsel zu trainierten Modellen auf Basis realer Studiogrid-Daten.']
  ]},
  'receivables-ai': {phase:'Phase 12', title:'AI Receivables', subtitle:'Intelligente Priorisierung und Kommunikation im Forderungsprozess.', icon:'◈', features:[
    ['Case Prioritization','Fälle nach Betrag, Alter, Historie, Risiko und Erfolgsaussicht sortieren.'],
    ['Message Drafts','Situationsabhängige, sachliche Kommunikation passend zur Mahnstufe vorbereiten.'],
    ['Promise Tracking','Zahlungszusagen und vereinbarte Termine strukturiert erfassen und überwachen.'],
    ['Next Best Action','Empfehlung für Erinnerung, Kontakt, Ratenlösung oder Übergabe.'],
    ['Escalation Rules','Definierte Grenzen für manuelle Prüfung und weitere rechtliche Schritte.'],
    ['Receivables Insights','Muster bei Rücklastschriften, Ausfällen und Erfolgsquoten sichtbar machen.']
  ]},
  leads: {phase:'Phase 13', title:'Lead Automation', subtitle:'Automatisierter Lead-Funnel von Kampagne und Anfrage bis Probetraining und Abschluss.', icon:'◇', features:[
    ['Lead Inbox','Alle neuen Leads mit Quelle, Kampagne, Status, Score und verantwortlicher Person.'],
    ['Auto Follow-up','Zeitgesteuerte Kontaktsequenzen nach Anfrage, No-Show und Probetraining.'],
    ['Lead Scoring','Priorisierung nach Quelle, Reaktion, Standort, Interessen und Interaktionen.'],
    ['Trial Booking','Probetraining als zentraler Conversion-Schritt mit Reminder und No-Show Flow.'],
    ['Sales Tasks','Automatisch erzeugte Aufgaben für Mitarbeitende mit Fälligkeit und Kontext.'],
    ['Funnel Analytics','Conversion von Lead → Termin → Besuch → Vertrag nach Kampagne und Kanal.']
  ]},
  'marketing-ai': {phase:'Phase 14', title:'AI Marketing Content', subtitle:'Studio-spezifischer Content Assistent für Kampagnen, Social, E-Mail und lokale Angebote.', icon:'✧', features:[
    ['Campaign Concepts','Ideen passend zu Zielgruppe, Studio, Saison und gewünschter Conversion.'],
    ['Copy Generation','Anzeigenvarianten, Social Captions, Landingpage- und E-Mail-Texte.'],
    ['Brand Voice','Konfigurierbare Tonalität und Do/Don’t-Regeln pro Studio oder Kette.'],
    ['Offer Builder','Angebotsvarianten aus Tarif-, Standort- und Performance-Daten ableiten.'],
    ['Approval Workflow','Entwürfe vor Veröffentlichung intern prüfen und freigeben.'],
    ['Performance Feedback','Spätere Kampagnendaten fließen als Feedback in Empfehlungen zurück.']
  ]},
  automation: {phase:'Phase 15', title:'Interne Automatisierung', subtitle:'Regel- und eventbasierte Workflows für wiederkehrende Studio-Prozesse.', icon:'⚙', features:[
    ['Trigger Engine','Events wie Vertrag, Zahlung, Check-in, Kündigung oder Lead starten Automationen.'],
    ['Workflow Actions','E-Mail, Aufgabe, Statuswechsel, Tag, Notiz und interne Benachrichtigung.'],
    ['Document Classification','Dokumente automatisch erkennen, typisieren und dem richtigen Datensatz zuordnen.'],
    ['Task Automation','Wiederkehrende Aufgaben automatisch erzeugen, priorisieren und zuweisen.'],
    ['Conditions','Verzweigungen nach Studio, Tarif, Mitgliedsstatus, Betrag, Zeitraum oder Segment.'],
    ['Auditability','Jeder Workflow-Lauf bleibt mit Input, Entscheidung und Ergebnis nachvollziehbar.']
  ]},
  'live-marketing': {phase:'Phase 16', title:'Live Marketing Integration', subtitle:'Marketingdaten und Studioperformance in einem gemeinsamen Cockpit.', icon:'↗', features:[
    ['Campaign Sync','Kampagnen, Ad Sets, Spend, Leads und Ergebnisse aus Marketingquellen synchronisieren.'],
    ['Meta Ads Ready','Anbindung an Meta direkt oder über geeignete Aggregationsanbieter.'],
    ['Attribution','Leads, Termine und Verträge mit Kampagne und Quelle zusammenführen.'],
    ['CAC & ROAS','Kosten pro Lead, Termin, Vertrag und Marketingrendite auf Studioebene.'],
    ['Budget Signals','Performance-basierte Hinweise für Budgetverschiebung und Kampagnenoptimierung.'],
    ['Cross-Studio View','Standorte und Kampagnen vergleichbar machen, ohne Mandantentrennung aufzugeben.']
  ]},
  expansion: {phase:'Phase 17', title:'Expansion Tool', subtitle:'Datenbasierte Standortbewertung mit Einzugsgebieten, Wettbewerb, Penetration und Potenzial.', icon:'⌗', features:[
    ['Census Grid','Bevölkerungs- und Strukturdaten als räumliche Analysebasis in PostGIS.'],
    ['Drive-Time Isochrones','Einzugsgebiete nicht nur nach Radius, sondern nach realistischen Fahrzeiten bewerten.'],
    ['Competitor Mapping','Wettbewerber strukturiert erfassen und im Standortkontext gewichten.'],
    ['Huff Gravity Model','Wahrscheinlichkeitsbasierte Attraktivitäts- und Einzugsmodellierung.'],
    ['Penetration Analysis','Bestehende Mitglieder gegen Potenzialgebiete und Bevölkerungsstruktur spiegeln.'],
    ['Opportunity Heatmap','Visuelle Chancenkarte für Expansion und lokale Marketingmaßnahmen.']
  ]},
  payments: {phase:'Phase 18', title:'Payment Provider', subtitle:'Zentrale Zahlungsabstraktion für Karten, Wallets und Online-Payments zusätzlich zu SEPA.', icon:'◫', features:[
    ['Provider Adapter','Vendor-neutrale Zahlungs-Schnittstelle für austauschbare Payment Provider.'],
    ['Checkout','Hosted oder embedded Checkout für Zusatzkäufe und Online-Verträge.'],
    ['Webhook Processing','Signierte Events für erfolgreiche, fehlgeschlagene und erstattete Zahlungen.'],
    ['Refunds','Rückerstattungen mit Referenz auf Transaktion, Rechnung und Mitglied.'],
    ['Tokenized Methods','Gespeicherte Zahlungsreferenzen ohne unnötige lokale Speicherung sensibler Kartendaten.'],
    ['Payment Ledger','Einheitliche Transaktionssicht über Provider, POS und weitere Zahlarten.']
  ]},
  integrations: {phase:'Phase 19', title:'Accounting API & Integrationen', subtitle:'Saubere Integrationsschicht für DATEV, lexoffice, SAP und weitere Systeme.', icon:'⇄', features:[
    ['DATEV','Export und API-ready Mapping für Buchungen, Konten und Belegreferenzen.'],
    ['lexoffice','Adapter für Belege, Kontakte und buchhaltungsrelevante Übergaben.'],
    ['SAP Ready','Erweiterbare Schnittstelle für größere Betreiber und Enterprise-Systemlandschaften.'],
    ['Integration Logs','Request, Response, Status, Retry und Fehlerdetails nachvollziehbar protokolliert.'],
    ['Mapping Layer','Externe IDs und Datenmodelle sauber auf Studiogrid-Entitäten abbilden.'],
    ['Retries & Idempotency','Robuste Wiederholung ohne doppelte Buchungen oder inkonsistente Zustände.']
  ]},
  'member-app': {phase:'Phase 20', title:'Member App', subtitle:'White-label fähige Member Experience mit digitalem Zugang, Verträgen, Rechnungen und Self-Service.', icon:'▯', features:[
    ['Onboarding & Login','Sichere Anmeldung und direkte Zuordnung zum Mitglied und Studio.'],
    ['Rotating QR','Kurzlebiger QR-Code für sicheren Check-in und Schutz vor einfachem Screenshot-Sharing.'],
    ['Wallet / NFC Ready','Architektur für digitale Mitgliedskarte und geräteabhängige Wallet-Integration.'],
    ['Verträge & Rechnungen','Aktueller Vertrag, Dokumente, Rechnungen und Zahlungsinformationen jederzeit einsehbar.'],
    ['Self-Service','Bankdaten, Zusatzmodule, Ruhezeit, Kündigung und weitere erlaubte Stammdatenprozesse.'],
    ['Push & Inbox','Benachrichtigungen, Studio-News, Vertragsereignisse und Agent-Kommunikation.']
  ]},
  classes: {phase:'Phase 21', title:'Classes & Training', subtitle:'Kursbuchung, Trainingspläne und Trainer-Zuordnung als Erweiterung der Member Experience.', icon:'◒', features:[
    ['Class Schedule','Kursplan nach Studio, Raum, Trainer, Kapazität und Kategorie.'],
    ['Booking & Waitlist','Buchen, stornieren, Warteliste und Kapazitätsmanagement.'],
    ['Training Plans','Individuelle Pläne, Übungen, Ziele und Fortschritt direkt im Mitgliedskontext.'],
    ['Trainer Assignment','Mitglieder und Trainingspläne verantwortlichen Trainern zuordnen.'],
    ['Attendance','Teilnahme und No-Show mit Check-in- und Buchungsdaten verbinden.'],
    ['Progress Signals','Trainingsaktivität als weiteres Signal für Engagement und Churn-Prävention.']
  ]},
  community: {phase:'Phase 21+', title:'Community & Referral', subtitle:'Streaks, Empfehlungen und Community-Mechaniken für höhere Bindung und organisches Wachstum.', icon:'♢', features:[
    ['Streaks','Besuchsserien und motivierende Meilensteine aus Check-in-Daten.'],
    ['Referral Codes','Persönliche Empfehlungscodes mit sauberer Lead- und Abschlusszuordnung.'],
    ['Rewards','Belohnungen oder Benefits bei definierten Referral- oder Aktivitätsereignissen.'],
    ['Community Feed','Optionaler Studio-Feed für News, Challenges und lokale Community-Aktivierung.'],
    ['Challenges','Zeitlich begrenzte Ziele für Besuche, Kurse oder Trainingsaktivität.'],
    ['Engagement Analytics','Messung von Aktivität, Retention und Referral-Performance.']
  ]}
};

const navigation = document.getElementById('navigation');
const content = document.getElementById('content');
const breadcrumb = document.getElementById('breadcrumb');
let currentRoute = 'dashboard';

function buildNavigation(){
  let lastGroup='';
  navigation.innerHTML = modules.filter(m=>!['classes','community'].includes(m.route)).map(m=>{
    const group = m.group !== lastGroup ? `<div class="nav-group">${(lastGroup=m.group)}</div>` : '';
    return `${group}<button class="nav-item ${m.route===currentRoute?'active':''}" data-route="${m.route}"><span class="nav-icon">${m.icon}</span><span>${m.label}</span>${m.badge?`<span class="nav-badge">${m.badge}</span>`:''}</button>`;
  }).join('');
}

const demoAction = () => {
  const toast=document.getElementById('toast');
  toast.classList.add('show');
  clearTimeout(window.__toast);
  window.__toast=setTimeout(()=>toast.classList.remove('show'),2200);
};

function sparkline(points=[9,13,12,17,15,23,21,27,26,32]){
  const coords=points.map((p,i)=>`${i*(100/(points.length-1))},${36-p}`).join(' ');
  return `<div class="sparkline"><svg viewBox="0 0 100 40" preserveAspectRatio="none"><defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3EE6B0" stop-opacity=".28"/><stop offset="1" stop-color="#3EE6B0" stop-opacity="0"/></linearGradient></defs><polygon points="0,40 ${coords} 100,40" fill="url(#sg)"/><polyline points="${coords}" fill="none" stroke="#27C898" stroke-width="2" vector-effect="non-scaling-stroke"/></svg></div>`;
}

function kpi(label,value,trend,icon,points){return `<div class="kpi-card"><div class="kpi-top"><span class="kpi-label">${label}</span><span class="kpi-icon">${icon}</span></div><strong>${value}</strong><div class="kpi-foot"><span class="trend-up">${trend}</span><span>vs. Vormonat</span></div>${sparkline(points)}</div>`}

function dashboard(){
  return `
    <div class="page-head"><div><span class="eyebrow">Mittwoch, 19. August</span><h1>Guten Morgen, Anna.</h1><p>Hier ist der aktuelle Überblick über Pulse Frankfurt und die wichtigsten Signale für heute.</p></div><div class="page-actions"><button class="ghost-btn demo-action">Bericht exportieren</button><button class="soft-btn" data-route="scope">Alle Module ansehen</button></div></div>
    <div class="hero-panel"><div class="hero-copy"><small>Studiogrid Intelligence</small><h2>Dein Studio. Ein System. Volle Kontrolle.</h2><p>Mitglieder, Verträge, Zahlungen, Zutritt, Kasse, Marketing und AI laufen in einem gemeinsamen Datenmodell zusammen.</p><div class="hero-actions"><button class="mint-btn" data-route="ai">AI Assistant öffnen</button><button class="dark-ghost-btn" data-route="reports">Performance ansehen</button></div></div><div class="hero-visual"><div class="orbit"><div class="orbit-core">SG</div><div class="orbit-node n1">AI</div><div class="orbit-node n2">€</div><div class="orbit-node n3">CRM</div><div class="orbit-node n4">POS</div></div></div></div>
    <div class="kpi-grid">${kpi('Aktive Mitglieder','1.248','+4,8%','◎',[8,10,12,11,16,17,19,23,24,28])}${kpi('MRR','€ 68.420','+7,2%','€',[10,11,13,15,14,20,21,24,27,30])}${kpi('Check-ins heute','327','+12,4%','⌁',[7,14,11,18,15,25,22,28,26,31])}${kpi('Offene Forderungen','€ 4.860','−8,1%','◈',[26,25,24,22,23,19,18,17,15,14])}</div>
    <div class="grid-2"><div class="card"><div class="card-head"><div><h3>Umsatzentwicklung</h3><p>Beiträge & Zusatzumsätze der letzten 7 Monate</p></div><div class="segmented"><button>Woche</button><button class="active">Monat</button><button>Jahr</button></div></div><div class="chart-wrap"><div class="chart-grid"><span></span><span></span><span></span><span></span></div>${[52,61,58,68,64,73,71].map((h,i)=>`<div class="bar-group"><i class="bar" style="height:${h-12}%"></i><i class="bar primary" style="height:${h}%"></i></div>`).join('')}</div><div class="chart-labels"><span>Feb</span><span>Mär</span><span>Apr</span><span>Mai</span><span>Jun</span><span>Jul</span><span>Aug</span></div><div class="legend"><span><i class="l1"></i>2026</span><span><i class="l2"></i>2025</span><span style="margin-left:auto" class="trend-up">+9,6% YTD</span></div></div>
    <div class="card"><div class="card-head"><div><h3>Live-Aktivität</h3><p>Neueste Studio-Ereignisse</p></div><button class="card-menu">•••</button></div><div class="activity-list"><div class="activity-item"><div class="activity-icon">⌁</div><div><strong>Check-in erfolgreich</strong><p>Laura Becker · Gate 1</p></div><time>2m</time></div><div class="activity-item"><div class="activity-icon">€</div><div><strong>SEPA Zahlung</strong><p>€ 59,90 · Marc Weber</p></div><time>5m</time></div><div class="activity-item"><div class="activity-icon">＋</div><div><strong>Neuer Vertrag</strong><p>Premium 24 · Sarah Klein</p></div><time>18m</time></div><div class="activity-item"><div class="activity-icon">✦</div><div><strong>AI Retention Task</strong><p>Risk Score 82 · Tobias Hahn</p></div><time>24m</time></div></div></div></div>
    <div class="card"><div class="card-head"><div><h3>Schnellaktionen</h3><p>Die wichtigsten Prozesse mit einem Klick starten</p></div></div><div class="quick-grid"><button class="quick-card" data-route="members"><span class="quick-icon">＋</span><span><strong>Mitglied anlegen</strong><small>inkl. Vertrag</small></span></button><button class="quick-card" data-route="sepa"><span class="quick-icon">€</span><span><strong>SEPA Lauf</strong><small>12 Positionen offen</small></span></button><button class="quick-card" data-route="access"><span class="quick-icon">⌁</span><span><strong>Zutritt prüfen</strong><small>3 Gates online</small></span></button><button class="quick-card" data-route="leads"><span class="quick-icon">◇</span><span><strong>Leads bearbeiten</strong><small>8 heute neu</small></span></button></div></div>
  `;
}

const membersRows = `
<tr><td><div class="person-cell"><span class="person-dot">LB</span><span><strong>Laura Becker</strong><small>#M-10482 · Premium 24</small></span></div></td><td><span class="chip mint">Aktiv</span></td><td>15.08.2026</td><td>18.08.2028</td><td><span class="amount">€ 69,90</span></td><td>Heute, 09:42</td></tr>
<tr><td><div class="person-cell"><span class="person-dot">MW</span><span><strong>Marc Weber</strong><small>#M-10376 · Flex 12</small></span></div></td><td><span class="chip mint">Aktiv</span></td><td>02.04.2026</td><td>01.04.2027</td><td><span class="amount">€ 59,90</span></td><td>Gestern, 18:11</td></tr>
<tr><td><div class="person-cell"><span class="person-dot">TH</span><span><strong>Tobias Hahn</strong><small>#M-09811 · Basic 24</small></span></div></td><td><span class="chip red">Risiko</span></td><td>11.11.2025</td><td>10.11.2027</td><td><span class="amount">€ 49,90</span></td><td>vor 19 Tagen</td></tr>
<tr><td><div class="person-cell"><span class="person-dot">SK</span><span><strong>Sarah Klein</strong><small>#M-10497 · Premium 24</small></span></div></td><td><span class="chip blue">Neu</span></td><td>19.08.2026</td><td>18.08.2028</td><td><span class="amount">€ 69,90</span></td><td>—</td></tr>
<tr><td><div class="person-cell"><span class="person-dot">JN</span><span><strong>Jonas Neumann</strong><small>#M-09102 · Flex 12</small></span></div></td><td><span class="chip amber">Pausiert</span></td><td>08.06.2025</td><td>07.09.2026</td><td><span class="amount">€ 59,90</span></td><td>04.08.2026</td></tr>`;

function membersPage(){
  return `${pageHead('Mitglieder','Alle Mitglieder, Verträge, Dokumente und Aktivitäten an einem Ort.','Mitglied importieren','+ Mitglied anlegen')}
  <div class="status-strip"><div class="status-box"><small>Aktiv</small><strong>1.248</strong><span>+34 diesen Monat</span></div><div class="status-box"><small>Neu im August</small><strong>41</strong><span>+12,7% vs. Juli</span></div><div class="status-box"><small>Pausiert</small><strong>63</strong><span>5,0% der Basis</span></div><div class="status-box"><small>Churn Risk</small><strong>27</strong><span>AI priorisiert</span></div></div>
  <div class="card table-card"><div class="card-head"><div><h3>Mitgliederliste</h3><p>1.391 Datensätze · 1.248 aktiv</p></div><div class="page-actions"><button class="ghost-btn demo-action">Filter</button><button class="ghost-btn demo-action">Export CSV</button></div></div><table class="data-table"><thead><tr><th>Mitglied</th><th>Status</th><th>Start</th><th>Vertragsende</th><th>Beitrag</th><th>Letzter Check-in</th></tr></thead><tbody>${membersRows}</tbody></table></div>
  <div class="grid-3"><div class="card"><div class="card-head"><div><h3>Smart Segments</h3><p>Dynamische Listen</p></div></div>${['Keine Besuche > 14 Tage','Vertrag endet < 60 Tage','Offene Forderung > €100','Premium + hohe Aktivität'].map((x,i)=>`<div class="activity-item"><div class="activity-icon">${i+1}</div><div><strong>${x}</strong><p>${[38,22,17,146][i]} Mitglieder</p></div><span class="chip">Öffnen</span></div>`).join('')}</div><div class="card"><div class="card-head"><div><h3>GDPR Center</h3><p>Auskunft & Löschung</p></div></div><div class="progress-row"><span>Datenexporte</span><div class="progress-track"><i style="width:76%"></i></div><strong>19</strong></div><div class="progress-row"><span>Löschanfragen</span><div class="progress-track"><i style="width:24%"></i></div><strong>6</strong></div><div class="notice" style="margin-top:16px"><span class="notice-icon">i</span><div><strong>Auditierbar</strong>Jede Anfrage wird mit Frist, Status und verantwortlicher Person dokumentiert.</div></div></div><div class="card"><div class="card-head"><div><h3>Duplicate Detection</h3><p>Automatisch erkannt</p></div></div><div class="risk-list"><div class="risk-row"><div class="risk-score">92%</div><div><strong>Max Müller ↔ Maximilian Müller</strong><small>gleiche IBAN · ähnliche E-Mail</small></div><span class="chip amber">Prüfen</span></div><div class="risk-row"><div class="risk-score" style="background:#FFF7E9;color:#A66A13">74%</div><div><strong>Julia Koch ↔ J. Koch</strong><small>gleiche Telefonnummer</small></div><span class="chip">Prüfen</span></div></div></div></div>`;
}

function pageHead(title,sub,left='Exportieren',right='+ Neu'){
  return `<div class="page-head"><div><span class="eyebrow">Studiogrid</span><h1>${title}</h1><p>${sub}</p></div><div class="page-actions"><button class="ghost-btn demo-action">${left}</button><button class="primary-btn demo-action">${right}</button></div></div>`;
}

function genericModule(route){
  const m=scope[route];
  if(!m) return dashboard();
  return `${pageHead(m.title,m.subtitle,'Dokumentation','+ Aktion')}
    <div class="module-hero"><div><span class="eyebrow">${m.phase}</span><h2>${m.title}</h2><p>${m.subtitle}</p><div class="module-meta"><span class="chip mint">✓ Im Demo-Scope</span><span class="chip">Multi-Tenant</span><span class="chip">Audit Log</span><span class="chip">API Ready</span></div></div><div class="module-hero-icon">${m.icon}</div></div>
    ${route==='access'?accessVisual():route==='pos'?posVisual():route==='ai'?aiVisual():route==='churn'?churnVisual():route==='location'||route==='expansion'?locationVisual():route==='member-app'?memberAppVisual():route==='integrations'?integrationsVisual():route==='leads'?leadsVisual():route==='sepa'?sepaVisual():route==='accounting'?accountingVisual():''}
    <div class="feature-grid">${m.features.map((f,i)=>`<div class="feature-card"><div class="feature-icon">${['✓','⌁','◈','↗','◎','⚙'][i%6]}</div><strong>${f[0]}</strong><p>${f[1]}</p><div class="mini-status"><span class="chip mint">Demo verfügbar</span></div></div>`).join('')}</div>
    <div class="grid-2 equal"><div class="card"><div class="card-head"><div><h3>Workflow</h3><p>Beispielhafter End-to-End Ablauf</p></div></div><div class="timeline"><div class="timeline-row"><strong>Event empfangen</strong><p>System validiert Mandant, Nutzer und fachlichen Kontext.</p><time>Automatisch</time></div><div class="timeline-row"><strong>Regeln & Berechtigungen</strong><p>Business Rules, Rollen und Statusbedingungen werden angewendet.</p><time>&lt; 100 ms</time></div><div class="timeline-row"><strong>Aktion & Audit</strong><p>Ergebnis wird persistiert und vollständig im Audit Trail protokolliert.</p><time>Realtime</time></div></div></div><div class="card"><div class="card-head"><div><h3>System Status</h3><p>Demo-Umgebung</p></div></div><div class="progress-row"><span>Core API</span><div class="progress-track"><i style="width:100%"></i></div><strong>100%</strong></div><div class="progress-row"><span>UI Coverage</span><div class="progress-track"><i style="width:100%"></i></div><strong>100%</strong></div><div class="progress-row"><span>Demo Data</span><div class="progress-track"><i style="width:92%"></i></div><strong>92%</strong></div><div class="notice" style="margin-top:14px"><span class="notice-icon">i</span><div><strong>Demo-Modus</strong>Externe Provider und physische Hardware sind in dieser Oberfläche als simulierte Integrationen dargestellt.</div></div></div></div>`;
}

function accessVisual(){return `<div class="card" style="margin-bottom:14px"><div class="card-head"><div><h3>Live Zutrittsgeräte</h3><p>Pulse Frankfurt · 3/3 online</p></div><span class="chip mint">● Live</span></div><div class="access-gates">${[['Gate 01','Haupteingang','327 heute'],['Gate 02','Member Area','184 heute'],['Door 03','Staff / Office','26 heute']].map((g,i)=>`<div class="gate"><div class="gate-top"><div class="gate-icon">⌁</div><div class="signal"><i></i><i></i><i></i></div></div><strong>${g[0]} · ${g[1]}</strong><small>${g[2]} · ${i===0?'RFID + QR':'RFID'} · Online</small></div>`).join('')}</div></div>`}

function posVisual(){return `<div class="card" style="margin-bottom:14px"><div class="card-head"><div><h3>POS Terminal · Kasse 1</h3><p>TSE verbunden · Bediener: Anna Müller</p></div><span class="chip mint">TSE Ready</span></div><div class="pos-shell"><div class="product-grid">${[['Protein Shake','€ 4,90','🥤'],['Wasser 0,5l','€ 2,20','💧'],['Protein Bar','€ 3,50','▰'],['Handtuch','€ 8,90','▱'],['Day Pass','€ 15,00','◫'],['Personal Training','€ 79,00','◎']].map(p=>`<button class="product demo-action"><div class="product-art">${p[2]}</div><strong>${p[0]}</strong><small>${p[1]}</small></button>`).join('')}</div><div class="basket"><h3>Aktueller Verkauf</h3><div class="basket-line"><span>Protein Shake × 2</span><strong>€ 9,80</strong></div><div class="basket-line"><span>Handtuch × 1</span><strong>€ 8,90</strong></div><div class="basket-line"><span>MwSt.</span><span>inkl. € 2,99</span></div><div class="basket-total"><span>Gesamt</span><strong>€ 18,70</strong></div><button class="pay-btn demo-action">Zahlung abschließen</button></div></div></div>`}

function aiVisual(){return `<div class="grid-2" style="margin-bottom:14px"><div class="ai-console"><div class="ai-console-head"><div class="ai-agent"><div class="ai-orb">✦</div><div><strong>Studiogrid AI</strong><small>Member Service Agent</small></div></div><div class="online-dot"></div></div><div class="chat"><div class="bubble user">Warum wurde mein Beitrag diesen Monat zweimal belastet?</div><div class="bubble bot">Ich habe deinen Vertrag und die Zahlungen geprüft. Die zweite Buchung ist keine doppelte Monatsgebühr, sondern die einmalige Aktivierungsgebühr aus deinem Vertragsstart. Ich kann dir die zugehörige Rechnung direkt öffnen.</div><div class="bubble user">Ja bitte, und schick sie mir auch per Mail.</div><div class="bubble bot">Erledigt. Die Rechnung wurde in deiner App geöffnet und an deine hinterlegte E-Mail-Adresse versendet. ✓</div></div><div class="ai-input">Nachricht an Studiogrid AI… <span>→</span></div></div><div class="card"><div class="card-head"><div><h3>Agent Capabilities</h3><p>Heute ausgeführt</p></div><span class="chip purple">AI</span></div>${[['Vertragsfragen','46','98%'],['Rechnungsanfragen','31','96%'],['Öffnungszeiten & FAQ','28','100%'],['Human Handover','7','—']].map(x=>`<div class="progress-row"><span>${x[0]}</span><div class="progress-track"><i style="width:${Math.min(100,parseInt(x[1])*2)}%"></i></div><strong>${x[1]}</strong></div>`).join('')}<div class="notice" style="margin-top:15px"><span class="notice-icon">✦</span><div><strong>Guardrails aktiv</strong>Sensible Aktionen benötigen definierte Freigabe oder werden an einen Mitarbeiter übergeben.</div></div></div></div>`}

function churnVisual(){return `<div class="grid-2 equal" style="margin-bottom:14px"><div class="card"><div class="card-head"><div><h3>Churn Risk Queue</h3><p>27 Mitglieder benötigen Aufmerksamkeit</p></div><span class="chip red">High Risk</span></div><div class="risk-list">${[['TH','Tobias Hahn','82','19 Tage kein Besuch'],['JK','Julia Koch','76','2 Rücklastschriften'],['FW','Felix Wolf','71','Nutzung −68%']].map(x=>`<div class="risk-row"><div class="risk-score">${x[2]}</div><div><strong>${x[1]}</strong><small>${x[3]}</small></div><button class="ghost-btn demo-action">Playbook</button></div>`).join('')}</div></div><div class="card"><div class="card-head"><div><h3>Risk Distribution</h3><p>Aktive Mitglieder nach Risiko</p></div></div><div class="progress-row"><span>Niedrig</span><div class="progress-track"><i style="width:82%"></i></div><strong>1.024</strong></div><div class="progress-row"><span>Mittel</span><div class="progress-track"><i style="width:31%;background:#FFB84D"></i></div><strong>197</strong></div><div class="progress-row"><span>Hoch</span><div class="progress-track"><i style="width:8%;background:#F56F6F"></i></div><strong>27</strong></div><div class="notice" style="margin-top:17px"><span class="notice-icon">i</span><div><strong>Explainable Score</strong>Jeder Score zeigt die konkreten Signale, statt nur eine Black-Box-Zahl auszugeben.</div></div></div></div>`}

function locationVisual(){return `<div class="grid-2" style="margin-bottom:14px"><div class="card"><div class="card-head"><div><h3>Opportunity Heatmap · Frankfurt</h3><p>Drive-time · Bevölkerung · Mitglieder · Wettbewerb</p></div><div class="segmented"><button class="active">15 min</button><button>20 min</button><button>30 min</button></div></div><div class="map-panel"><div class="map-grid"></div><div class="road r1"></div><div class="road r2"></div><div class="heat h1"></div><div class="heat h2"></div><div class="heat h3"></div><div class="map-pin p1"><span>P</span></div><div class="map-pin p2"><span>C</span></div><div class="map-pin p3"><span>C</span></div><div class="map-overlay"><strong>Pulse Frankfurt</strong><small>Penetration 3,8% · 1.248 Mitglieder</small></div><div class="map-legend"><span><i style="background:#3EE6B0"></i>Hohe Chance</span><span><i style="background:#FFBE5C"></i>Mittel</span><span><i style="background:#83AFFF"></i>Bestand</span></div></div></div><div class="card"><div class="card-head"><div><h3>Standort Score</h3><p>Huff Model + Studio Daten</p></div><span class="chip mint">87 / 100</span></div><div class="progress-row"><span>Population Fit</span><div class="progress-track"><i style="width:91%"></i></div><strong>91</strong></div><div class="progress-row"><span>Competition</span><div class="progress-track"><i style="width:73%"></i></div><strong>73</strong></div><div class="progress-row"><span>Accessibility</span><div class="progress-track"><i style="width:89%"></i></div><strong>89</strong></div><div class="progress-row"><span>Member Density</span><div class="progress-track"><i style="width:94%"></i></div><strong>94</strong></div><div class="notice" style="margin-top:18px"><span class="notice-icon">⌖</span><div><strong>Top Opportunity</strong>Nordöstliches Einzugsgebiet zeigt hohe Zielgruppendichte bei vergleichsweise niedrigem Wettbewerbsdruck.</div></div></div></div>`}

function memberAppVisual(){return `<div class="grid-2 equal" style="margin-bottom:14px"><div class="card"><div class="card-head"><div><h3>Member App Preview</h3><p>White-label · Pulse Frankfurt</p></div><span class="chip mint">iOS / Android</span></div><div class="phone-wrap"><div class="phone"><div class="phone-notch"></div><div class="phone-screen"><div class="phone-top"><small>Guten Morgen</small><h3>Laura 👋</h3></div><div class="member-card-mobile"><small>PREMIUM MEMBER</small><strong>Laura Becker</strong><div class="qr"></div><small style="position:absolute;left:13px;bottom:13px">QR aktualisiert in 00:24</small></div><div class="mobile-body"><div class="mobile-grid"><div class="mobile-tile"><span>▱</span><strong>Mein Vertrag</strong></div><div class="mobile-tile"><span>€</span><strong>Rechnungen</strong></div><div class="mobile-tile"><span>◒</span><strong>Kurse</strong></div><div class="mobile-tile"><span>✦</span><strong>Studio AI</strong></div></div><div class="class-card"><div><strong>Functional Training</strong><small>Heute · 18:30 · 4 Plätze frei</small></div><button>Buchen</button></div></div></div></div></div></div><div class="card"><div class="card-head"><div><h3>App Modules</h3><p>Self-Service & Engagement</p></div></div>${[['Digitaler Check-in','Rotating QR + Wallet/NFC ready'],['Vertrag & Rechnungen','Dokumente jederzeit verfügbar'],['Bankdaten & Add-ons','Self-Service mit Audit Trail'],['Kündigung & Ruhezeit','Digitaler Prozess inkl. Bestätigung'],['Push & Inbox','Studio-News, Reminder und AI'],['Classes & Training','Buchung, Pläne, Trainer & Streaks']].map((x,i)=>`<div class="activity-item"><div class="activity-icon">${['⌁','▱','€','↗','◌','◒'][i]}</div><div><strong>${x[0]}</strong><p>${x[1]}</p></div><span class="chip mint">✓</span></div>`).join('')}</div></div>`}

function integrationsVisual(){return `<div class="card" style="margin-bottom:14px"><div class="card-head"><div><h3>Integration Hub</h3><p>Ein Datenmodell, mehrere externe Systeme</p></div><span class="chip mint">6 Connectors</span></div><div class="integration-grid">${[['DATEV','Buchhaltung','Live'],['lexoffice','Accounting','Ready'],['SAP','Enterprise','Adapter'],['Meta','Marketing','Live'],['TSE','Fiscal','Provider'],['SEPA','Banking','Live'],['Maps','Geo','Live'],['OpenAI','AI','Live']].map((x,i)=>`<div class="integration"><div class="integration-logo">${x[0].slice(0,3).toUpperCase()}</div><strong>${x[0]}</strong><small>${x[1]}</small><span class="chip ${i%3===0?'mint':''}">${x[2]}</span></div>`).join('')}</div></div>`}

function leadsVisual(){return `<div class="grid-2" style="margin-bottom:14px"><div class="card"><div class="card-head"><div><h3>Lead Funnel · August</h3><p>Meta + Website + Referral</p></div><span class="chip mint">CAC € 41</span></div><div class="funnel">${[['184','Leads'],['121','Kontakt'],['82','Termin'],['61','Besuch'],['34','Vertrag']].map(x=>`<div class="funnel-step"><strong>${x[0]}</strong><small>${x[1]}</small></div>`).join('')}</div></div><div class="card"><div class="card-head"><div><h3>Automation Queue</h3><p>Nächste Aktionen</p></div></div><div class="timeline"><div class="timeline-row"><strong>8 neue Leads begrüßen</strong><p>WhatsApp/E-Mail Sequenz · Quelle: Meta</p><time>Jetzt</time></div><div class="timeline-row"><strong>5 No-Shows nachfassen</strong><p>Probetraining gestern nicht wahrgenommen</p><time>11:00</time></div><div class="timeline-row"><strong>12 Trial Leads priorisieren</strong><p>AI Score > 70 · Mitarbeiteraufgabe erzeugen</p><time>13:30</time></div></div></div></div>`}

function sepaVisual(){return `<div class="grid-2 equal" style="margin-bottom:14px"><div class="card"><div class="card-head"><div><h3>SEPA Lauf · 01.09.2026</h3><p>Vorbereitet · Freigabe erforderlich</p></div><span class="chip amber">4-Augen-Prinzip</span></div><div class="status-strip" style="grid-template-columns:repeat(3,1fr);margin:0"><div class="status-box"><small>Positionen</small><strong>1.186</strong><span>validiert</span></div><div class="status-box"><small>Volumen</small><strong>€ 64.982</strong><span>CORE</span></div><div class="status-box"><small>Fehler</small><strong>3</strong><span style="color:#C85A5A">prüfen</span></div></div><button class="primary-btn demo-action" style="margin-top:14px">pain.008 erzeugen</button></div><div class="card"><div class="card-head"><div><h3>Rücklastschriften</h3><p>Letzte 30 Tage</p></div></div><div class="progress-row"><span>AC04 Konto geschlossen</span><div class="progress-track"><i style="width:21%;background:#F56F6F"></i></div><strong>4</strong></div><div class="progress-row"><span>AM04 Keine Deckung</span><div class="progress-track"><i style="width:44%;background:#FFB84D"></i></div><strong>9</strong></div><div class="progress-row"><span>MD06 Widerspruch</span><div class="progress-track"><i style="width:15%;background:#9E8CFF"></i></div><strong>3</strong></div></div></div>`}

function accountingVisual(){return `<div class="grid-2 equal" style="margin-bottom:14px"><div class="card"><div class="card-head"><div><h3>Finanzstatus · August</h3><p>Abrechnung & offene Belege</p></div><span class="chip mint">GoBD Workflow</span></div><div class="status-strip" style="grid-template-columns:repeat(3,1fr);margin:0"><div class="status-box"><small>Rechnungen</small><strong>1.302</strong><span>€ 72.440</span></div><div class="status-box"><small>Gutschriften</small><strong>17</strong><span>€ 1.214</span></div><div class="status-box"><small>DATEV</small><strong>Aug</strong><span>bereit</span></div></div></div><div class="card"><div class="card-head"><div><h3>Export Center</h3><p>Steuerberater & E-Rechnung</p></div></div><div class="activity-item"><div class="activity-icon">D</div><div><strong>DATEV Buchungsstapel</strong><p>August 2026 · 1.417 Buchungen</p></div><button class="ghost-btn demo-action">Export</button></div><div class="activity-item"><div class="activity-icon">XML</div><div><strong>E-Rechnung Daten</strong><p>Strukturierte Rechnungsinformationen</p></div><button class="ghost-btn demo-action">Öffnen</button></div></div></div>`}

function scopeOverview(){
  const stages=[
    ['Stage 1','Core Operations',['Phase 0 · Foundation','Phase 1 · Members','Phase 2 · Contracts','Phase 3 · Sales','Phase 4 · SEPA','Phase 5 · Accounting','Phase 6 · Access','Phase 7 · POS','Phase 8 · Online','Phase 9 · Reporting']],
    ['Stage 2','AI & Automation',['Phase 10 · AI Agent','Phase 11 · Churn','Phase 12 · AI Receivables','Phase 13 · Leads','Phase 14 · AI Marketing','Phase 15 · Automation']],
    ['Stage 3','Growth & Integrations',['Phase 16 · Live Marketing','Phase 17 · Expansion','Phase 18 · Payments','Phase 19 · Accounting API']],
    ['Stage 4','Member Experience',['Phase 20 · Member App','Phase 21 · Classes','Training Plans','Trainer Assignment','Streaks & Referral']]
  ];
  return `${pageHead('Gesamter Projekt-Scope','Alle im Studiogrid Specification PDF beschriebenen Bereiche sind in dieser Demo sichtbar.','PDF Scope','Demo vollständig')}
  <div class="module-hero"><div><span class="eyebrow">21 PHASEN · 4 STAGES</span><h2>Das komplette Studio Operating System</h2><p>Von Multi-Tenant Foundation und Mitgliederverwaltung über SEPA, Accounting, Access Control, POS, AI und Expansion bis zur Member App.</p><div class="module-meta"><span class="chip mint">✓ Alle Hauptmodule abgedeckt</span><span class="chip">React-ready</span><span class="chip">FastAPI-ready</span><span class="chip">PostgreSQL / PostGIS</span></div></div><div class="module-hero-icon">✓</div></div>
  <div class="phase-overview">${stages.map(s=>`<div class="stage-column"><div class="stage-head"><small>${s[0]}</small><strong>${s[1]}</strong></div>${s[2].map(p=>`<div class="phase-mini"><strong>${p}</strong><small>Im Demo dargestellt</small></div>`).join('')}</div>`).join('')}</div>
  <div class="grid-2 equal" style="margin-top:14px"><div class="card"><div class="card-head"><div><h3>Platform Foundation</h3><p>Technische Basis aus dem Scope</p></div></div>${['Multi-Tenant SaaS / tenant_id isolation','Role & Permission System','Background Jobs & E-Mail Infrastructure','Audit Logging & Data Protection','React Design System','Python / FastAPI API Layer','PostgreSQL + PostGIS','White-label ready Member Experience'].map((x,i)=>`<div class="activity-item"><div class="activity-icon">✓</div><div><strong>${x}</strong><p>${i<4?'Core architecture':'Platform capability'}</p></div><span class="chip mint">Included</span></div>`).join('')}</div><div class="card"><div class="card-head"><div><h3>External Dependencies</h3><p>In der Demo simuliert, später real zu verbinden</p></div></div>${['Turnstile / Door Controller Hardware','Zertifizierter TSE Provider','Bank / EBICS / produktive SEPA Übergabe','Payment Provider Live Credentials','DATEV / Steuerberater Mapping Sign-off','Legal Review & Datenschutz Sign-off','Apple / Google Store Review','Live Census / Maps / Marketing Provider'].map(x=>`<div class="activity-item"><div class="activity-icon">↗</div><div><strong>${x}</strong><p>Adapter / UI im Scope</p></div><span class="chip amber">External</span></div>`).join('')}</div></div>`;
}

function settings(){return `${pageHead('Einstellungen','Mandant, Rollen, Branding, Integrationen und Systemkonfiguration.','Audit Log','Änderungen speichern')}<div class="grid-3"><div class="card"><div class="card-head"><div><h3>Mandant</h3><p>Pulse Frankfurt</p></div><span class="chip mint">Aktiv</span></div><div class="activity-item"><div class="activity-icon">P</div><div><strong>Pulse Frankfurt GmbH</strong><p>Tenant ID · plsf-fra-001</p></div></div><div class="activity-item"><div class="activity-icon">⌖</div><div><strong>Frankfurt am Main</strong><p>Europe/Berlin · EUR</p></div></div></div><div class="card"><div class="card-head"><div><h3>Rollen & Rechte</h3><p>RBAC</p></div></div>${[['Owner','2'],['Studio Admin','4'],['Sales','7'],['Trainer','11']].map(x=>`<div class="activity-item"><div class="activity-icon">◎</div><div><strong>${x[0]}</strong><p>${x[1]} Nutzer</p></div><span class="chip">Bearbeiten</span></div>`).join('')}</div><div class="card"><div class="card-head"><div><h3>Branding</h3><p>White-label</p></div></div><div style="height:100px;border-radius:14px;background:linear-gradient(135deg,#0E2A32 0 60%,#3EE6B0 60%);display:flex;align-items:flex-end;padding:13px;color:white;font-weight:800">PULSE FRANKFURT</div><div class="page-actions" style="margin-top:12px"><button class="ghost-btn demo-action">Logo</button><button class="ghost-btn demo-action">Farben</button></div></div></div>${integrationsVisual()}`}

function render(route){
  currentRoute=route;
  buildNavigation();
  const meta=modules.find(m=>m.route===route) || modules[0];
  breadcrumb.innerHTML=`<span>${meta.group.replaceAll('&','&amp;')}</span><strong>${meta.label}</strong>`;
  if(route==='dashboard') content.innerHTML=dashboard();
  else if(route==='members') content.innerHTML=membersPage();
  else if(route==='scope') content.innerHTML=scopeOverview();
  else if(route==='settings') content.innerHTML=settings();
  else content.innerHTML=genericModule(route);
  document.querySelectorAll('[data-route]').forEach(el=>el.addEventListener('click',()=>navigate(el.dataset.route)));
  document.querySelectorAll('.demo-action').forEach(el=>el.addEventListener('click',demoAction));
  window.scrollTo({top:0,behavior:'smooth'});
}

function navigate(route){
  if(!modules.some(m=>m.route===route) && !scope[route]) route='dashboard';
  history.pushState({route},'',`#${route}`);
  render(route);
  document.getElementById('sidebar').classList.remove('open');
}

function openModal(){
  document.getElementById('modalContent').innerHTML=`<h2>Neues Mitglied</h2><p>Schneller Demo-Flow für Stammdaten und Vertragsstart.</p><div class="form-grid"><div class="field"><label>Vorname</label><input value="Sophie"></div><div class="field"><label>Nachname</label><input value="Wagner"></div><div class="field"><label>E-Mail</label><input value="sophie.wagner@example.de"></div><div class="field"><label>Telefon</label><input value="+49 170 1234567"></div><div class="field full"><label>Tarif</label><select><option>Premium 24 · €69,90 / Monat</option><option>Flex 12 · €59,90 / Monat</option><option>Basic 24 · €49,90 / Monat</option></select></div><div class="field"><label>Startdatum</label><input type="date" value="2026-08-19"></div><div class="field"><label>Zahlung</label><select><option>SEPA Lastschrift</option><option>Karte</option></select></div></div><div class="form-actions"><button class="ghost-btn" id="cancelModal">Abbrechen</button><button class="primary-btn" id="saveMember">Mitglied & Vertrag anlegen</button></div>`;
  document.getElementById('modalBackdrop').hidden=false;
  document.getElementById('cancelModal').onclick=closeModal;
  document.getElementById('saveMember').onclick=()=>{closeModal();demoAction();};
}
function closeModal(){document.getElementById('modalBackdrop').hidden=true}

document.getElementById('quickAdd').addEventListener('click',openModal);
document.getElementById('modalClose').addEventListener('click',closeModal);
document.getElementById('modalBackdrop').addEventListener('click',e=>{if(e.target===e.currentTarget)closeModal()});
document.getElementById('openSidebar').addEventListener('click',()=>document.getElementById('sidebar').classList.add('open'));
document.getElementById('closeSidebar').addEventListener('click',()=>document.getElementById('sidebar').classList.remove('open'));
document.getElementById('notificationButton').addEventListener('click',demoAction);

const palette=document.getElementById('commandPalette');
const cmdInput=document.getElementById('commandInput');
function openPalette(){palette.hidden=false;cmdInput.value='';renderCommands('');setTimeout(()=>cmdInput.focus(),0)}
function closePalette(){palette.hidden=true}
function renderCommands(q){
  const items=modules.filter(m=>m.label.toLowerCase().includes(q.toLowerCase())).slice(0,9);
  document.getElementById('commandResults').innerHTML=items.map((m,i)=>`<button class="command-result ${i===0?'active':''}" data-command-route="${m.route}"><span class="nav-icon">${m.icon}</span><span><strong>${m.label}</strong><small>${m.group}</small></span></button>`).join('');
  document.querySelectorAll('[data-command-route]').forEach(el=>el.onclick=()=>{navigate(el.dataset.commandRoute);closePalette()});
}
document.getElementById('searchButton').addEventListener('click',openPalette);
cmdInput.addEventListener('input',()=>renderCommands(cmdInput.value));
document.addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openPalette()}
  if(e.key==='Escape'){closePalette();closeModal()}
  if(e.key==='Enter'&&!palette.hidden){const first=document.querySelector('.command-result');if(first)first.click()}
});
palette.addEventListener('click',e=>{if(e.target===palette)closePalette()});
window.addEventListener('popstate',()=>render(location.hash.slice(1)||'dashboard'));

buildNavigation();
render(location.hash.slice(1)||'dashboard');
