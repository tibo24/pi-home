# 📱 Pi‑Home  
Een slimme Android‑app die communiceert met een Raspberry Pi voor realtime smart‑home functionaliteit.

## 📌 Over het project  
Pi‑Home is een Android‑applicatie die ik ontwikkelde voor het vak **Cordova** in het derde jaar van mijn opleiding. De app laat gebruikers temperatuurdata uitlezen, LEDs op afstand bedienen en realtime updates ontvangen van een Raspberry Pi. Daarnaast maakt de app gebruik van native functionaliteiten zoals **fingerprint‑authenticatie** en **email‑integratie**.

De applicatie werkt als een **Single Page Application (SPA)** met vier overzichtelijke tabs: *Home*, *Temperatuur*, *Bestuur uw lichten* en *Info*. De UI is gebouwd met **Materialize CSS**, aangevuld met eigen styling voor een moderne en consistente look.

---

## 🧩 Functionaliteiten  
- **Light Control** – Individueel LEDs bedienen via de smartphone  
- **Temperature Monitoring** – Actuele temperatuur + grafiek van de laatste 8 uur  
- **Realtime synchronisatie** – LED‑status wordt automatisch bijgewerkt wanneer deze fysiek op de Pi wordt bediend  
- **Fingerprint Authentication** – Veilige toegang via biometrische verificatie  
- **Email Integration** – Eenvoudig contact opnemen via ingebouwde mailfunctionaliteit  
- **Offline ondersteuning** – Temperatuurdata wordt lokaal opgeslagen via LocalStorage  
- **Cross‑Platform** – Ondersteuning voor Android en Browser builds  

---

## 🎯 Opgavevereisten  
- Individueel een Android‑app ontwikkelen met Cordova  
- SPA‑interface met minstens vier tabs, inclusief verplicht Info‑scherm  
- Gebruik van minstens één Cordova‑plug‑in die niet in de les behandeld werd  
- IoT‑communicatie met een extern device (Raspberry Pi, Arduino, …)  
- Data ophalen en/of versturen naar het IoT‑toestel  
- Lokale opslag via LocalStorage  

---

## 📝 Beschrijving  
Pi‑Home communiceert rechtstreeks met een **Raspberry Pi** om temperatuurdata op te halen en LEDs op afstand te bedienen. De app toont de actuele temperatuur via een gauge‑meter en visualiseert historische data in een grafiek. Deze gegevens worden lokaal opgeslagen zodat de gebruiker ook offline recente waarden kan raadplegen.

De LED‑bediening werkt in twee richtingen: wanneer een LED fysiek wordt ingedrukt op de Raspberry Pi, wordt de status automatisch bijgewerkt in de app. Dit zorgt voor een realtime, betrouwbaar IoT‑systeem.

Voor beveiliging maakt de app gebruik van **fingerprint‑authenticatie**, zodat enkel de eigenaar van de smartphone toegang krijgt. Via het Info‑scherm kan de gebruiker eenvoudig contact opnemen via mail, telefoon of SMS, dankzij geïntegreerde Cordova‑plug‑ins.

Het resultaat is een compacte maar krachtige smart‑home applicatie die IoT‑communicatie, native functionaliteit en een intuïtieve mobiele interface combineert.

---

# ⚙️ Technische informatie

## 📦 Requirements  
- Node.js (v10 of hoger)  
- Cordova CLI  
- Android SDK  
- Java JDK  
- Raspberry Pi met Python 3  
- Firebase Realtime Database  

---

## 🚀 Installatie

### 1. Repository clonen  
```bash
git clone https://github.com/yourusername/pi-home.git
cd pi-home/cordova
```

### 2. Dependencies installeren  
```bash
npm install
```

### 3. Platforms toevoegen  
```bash
cordova platform add android
cordova platform add browser
```

### 4. Build uitvoeren  
```bash
cordova build android
cordova build browser
```

### 5. App runnen  
```bash
cordova run android
cordova run browser
```

---

## 🖥️ Backend Setup (Raspberry Pi)

De Python‑scripts in de `python/` map regelen de hardware‑aansturing:

- `lampen.py` – GPIO‑aansturing voor LEDs  
- `switch.py` – Beheer van fysieke schakelaars  
- `temperatuur.py` – Uitlezen van temperatuursensoren  

### Installatie op de Raspberry Pi  
```bash
pip install firebase-admin RPi.GPIO
```

Plaats `project_cordova_cred.json` in `/home/pi/` en start de scripts via systemd of cron.

---

## 📁 Projectstructuur  
```
cordova/
├── config.xml
├── package.json
├── www/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── img/
├── platforms/
├── plugins/
└── res/

python/
├── lampen.py
├── switch.py
└── temperatuur.py
```

---

## 🔌 Gebruikte plug‑ins  
- cordova-plugin-whitelist  
- cordova-plugin-email  
- cordova-plugin-android-fingerprint-auth  
- es6-promise-plugin  

---

## ⚙️ Configuratie  
- **Orientation:** Portrait  
- **Keep Running:** False  

---

## 🧪 Conclusie  
Dit project was mijn eerste ervaring met mobiele app‑ontwikkeling. Ik leerde hoe je een betrouwbaar IoT‑systeem opzet dat realtime gegevens uitwisselt, en hoe je fallback‑mechanismen implementeert zodat de app correct blijft functioneren zonder netwerkverbinding. Deze opdracht heeft mijn interesse in slimme, verbonden systemen verder versterkt.
