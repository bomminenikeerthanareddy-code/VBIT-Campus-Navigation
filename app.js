const STORAGE_KEY = "vbit-visitor";

const PLACES = {
  campusCenter: { name: "Main Campus", lat: 17.4475, lng: 78.7303 },
  parking: { name: "Parking", lat: 17.4472, lng: 78.7297 },
  mainOffice: { name: "Main Office", lat: 17.4475, lng: 78.7302 },
  principal: { name: "Principal", lat: 17.4475, lng: 78.7302 },
  admission: { name: "Admissions", lat: 17.4475, lng: 78.7302 },
  feeCounter: { name: "Fee Counter", lat: 17.4474, lng: 78.7302 },
  canteen: { name: "Canteen", lat: 17.4477, lng: 78.7300 },
  academic: { name: "Academic Blocks", lat: 17.4473, lng: 78.7304 },
  freshman: { name: "Pratham & Prathibha (First Year)", lat: 17.4471, lng: 78.7305 },
  nalanda: { name: "Nalanda (Placement Cell, Main Auditorium)", lat: 17.4479, lng: 78.7301 },
  hostels: { name: "Hostels (Nachiketha & Niveditha)", lat: 17.4468, lng: 78.7309 }
};

const RESTROOMS = [
  { place: "Srujan Block", note: "Ground floor", routePlace: "academic" },
  { place: "Avishkar Block", note: "Ground floor", routePlace: "academic" },
  { place: "Prashasan Block", note: "Ground floor", routePlace: "academic" }
];

const translations = {
  en: {
    loginTitle: "Welcome",
    loginSubtitle: "Tell us your name and phone number",
    name: "Name",
    phone: "Phone number",
    continue: "Continue",
    guest: "Continue as Guest",
    readyTitle: "You are ready!",
    readyMessage: "Campus directions will appear here next.",
    openGuide: "Open campus guide",
    startAgain: "Start again",
    back: "← Back",
    mapBack: "← Go Back",
    home: "⌂ Home",
    homeTitle: "Where do you want to go?",
    homeSubtitle: "Tap a place",
    help: "Help",
    blocks: "Blocks",
    blocksTitle: "Campus Blocks",
    blocksSubtitle: "Choose a block",
    startGate: "Start from Main Gate",
    hearDirections: "Hear directions",
    walkingTime: "2 minutes walk",
    locationDenied: "Please allow location so we can guide you.",
    followOn: "Follow me: On",
    followOff: "Follow me: Off",
    recenter: "Re-center",
    arrived: "You have arrived!",
    voiceText: "Go straight, then turn left",
    tiles: {
      parking: "Parking",
      mainOffice: "Main Office",
      principal: "Principal",
      admissions: "Admissions",
      fees: "Fee Counter",
      canteen: "Canteen",
      restrooms: "Restrooms",
      hostel: "Hostel"
      , blocks: "Blocks"
    },
    required: "Please enter your name and phone number."
  },
  te: {
    loginTitle: "స్వాగతం",
    loginSubtitle: "మీ పేరు మరియు ఫోన్ నంబర్ చెప్పండి",
    name: "పేరు",
    phone: "ఫోన్ నంబర్",
    continue: "కొనసాగండి",
    guest: "అతిథిగా కొనసాగండి",
    readyTitle: "మీరు సిద్ధంగా ఉన్నారు!",
    readyMessage: "క్యాంపస్ దారులు త్వరలో కనిపిస్తాయి.",
    openGuide: "క్యాంపస్ గైడ్ తెరవండి",
    startAgain: "మళ్లీ ప్రారంభించండి",
    back: "← వెనుకకు",
    mapBack: "← వెనుకకు",
    home: "⌂ హోమ్",
    homeTitle: "మీరు ఎక్కడికి వెళ్లాలి?",
    homeSubtitle: "ఒక స్థలాన్ని ఎంచుకోండి",
    help: "సహాయం",
    blocks: "బ్లాక్స్",
    blocksTitle: "క్యాంపస్ బ్లాక్స్",
    blocksSubtitle: "ఒక బ్లాక్ ఎంచుకోండి",
    startGate: "ప్రధాన గేట్ నుండి ప్రారంభించండి",
    hearDirections: "దిశలను వినండి",
    walkingTime: "2 నిమిషాల నడక",
    locationDenied: "దయచేసి లొకేషన్ అనుమతించండి, మేము మీకు దారి చూపుతాము.",
    followOn: "నన్ను అనుసరించండి: ఆన్",
    followOff: "నన్ను అనుసరించండి: ఆఫ్",
    recenter: "మళ్లీ మధ్యలో పెట్టండి",
    arrived: "మీరు చేరుకున్నారు!",
    voiceText: "నేరుగా వెళ్లి, తర్వాత ఎడమవైపు తిరగండి",
    tiles: {
      parking: "పార్కింగ్",
      mainOffice: "ప్రధాన కార్యాలయం",
      principal: "ప్రిన్సిపాల్",
      admissions: "అడ్మిషన్లు",
      fees: "ఫీజు కౌంటర్",
      canteen: "క్యాంటీన్",
      restrooms: "మరుగుదొడ్లు",
      hostel: "హాస్టల్"
      , blocks: "బ్లాక్స్"
    },
    required: "దయచేసి మీ పేరు మరియు ఫోన్ నంబర్ నమోదు చేయండి."
  },
  hi: {
    loginTitle: "स्वागत है",
    loginSubtitle: "अपना नाम और फोन नंबर बताएं",
    name: "नाम",
    phone: "फोन नंबर",
    continue: "जारी रखें",
    guest: "अतिथि के रूप में जारी रखें",
    readyTitle: "आप तैयार हैं!",
    readyMessage: "कैंपस के रास्ते जल्द दिखाई देंगे।",
    openGuide: "कैंपस गाइड खोलें",
    startAgain: "फिर से शुरू करें",
    back: "← वापस",
    mapBack: "← वापस",
    home: "⌂ होम",
    homeTitle: "आपको कहाँ जाना है?",
    homeSubtitle: "एक जगह चुनें",
    help: "मदद",
    blocks: "ब्लॉक्स",
    blocksTitle: "कैंपस ब्लॉक",
    blocksSubtitle: "एक ब्लॉक चुनें",
    startGate: "मुख्य गेट से शुरू करें",
    hearDirections: "दिशाएं सुनें",
    walkingTime: "2 मिनट की पैदल दूरी",
    locationDenied: "कृपया लोकेशन की अनुमति दें ताकि हम आपको रास्ता दिखा सकें।",
    followOn: "मुझे फॉलो करें: चालू",
    followOff: "मुझे फॉलो करें: बंद",
    recenter: "फिर से केंद्र में",
    arrived: "आप पहुंच गए हैं!",
    voiceText: "सीधे जाएं, फिर बाएं मुड़ें",
    tiles: {
      parking: "पार्किंग",
      mainOffice: "मुख्य कार्यालय",
      principal: "प्रिंसिपल",
      admissions: "प्रवेश",
      fees: "फीस काउंटर",
      canteen: "कैंटीन",
      restrooms: "शौचालय",
      hostel: "छात्रावास"
      , blocks: "ब्लॉक्स"
    },
    required: "कृपया अपना नाम और फोन नंबर दर्ज करें।"
  }

};

const languageScreen = document.querySelector("#language-screen");
const loginScreen = document.querySelector("#login-screen");
const readyScreen = document.querySelector("#ready-screen");
const homeScreen = document.querySelector("#home-screen");
const blocksScreen = document.querySelector("#blocks-screen");
const blockDetailScreen = document.querySelector("#block-detail-screen");
const restroomsScreen = document.querySelector("#restrooms-screen");
const mapScreen = document.querySelector("#map-screen");
const loginForm = document.querySelector("#login-form");
const nameInput = document.querySelector("#visitor-name");
const phoneInput = document.querySelector("#visitor-phone");
const errorMessage = document.querySelector("#login-error");

let selectedLanguage = "en";

function enableLogoFallback(image) {
  const showFallback = () => {
    image.hidden = true;
    const fallback = image.parentElement.querySelector(".logo-fallback");
    if (fallback) {
      fallback.style.display = "grid";
    }
  };

  image.addEventListener("error", showFallback);
  if (image.complete && image.naturalWidth === 0) {
    showFallback();
  }
}

document.querySelectorAll(".logo-image").forEach(enableLogoFallback);

function setScreen(screenToShow) {
  [languageScreen, loginScreen, readyScreen, homeScreen, blocksScreen, blockDetailScreen, restroomsScreen, mapScreen].forEach((screen) => {
    screen.classList.toggle("hidden", screen !== screenToShow);
  });
}

function renderBlocks() {
  const blocksList = document.querySelector("#blocks-list");
  const searchText = document.querySelector("#blocks-search").value.trim().toLowerCase();
  blocksList.innerHTML = "";
  const groups = [
    { title: "Academic Blocks", ids: ["srujan", "avishkar", "nirmithi", "aakash", "pratham", "prathibha", "vishwakarma"] },
    { title: "Administrative & Facilities Blocks", ids: ["prashasan", "pragnya", "nalanda", "nachiketha", "niveditha"] }
  ];

  groups.forEach((group) => {
    const matchingBlocks = group.ids
      .map((blockId) => ({ ...BLOCKS[blockId], id: blockId }))
      .filter((block) => !searchText
        || block.name.toLowerCase().includes(searchText)
        || block.departments.some((department) => department.toLowerCase().includes(searchText)));

    if (matchingBlocks.length === 0) {
      return;
    }

    const heading = document.createElement("h3");
    heading.className = "block-group-heading";
    heading.textContent = group.title;
    blocksList.appendChild(heading);

    matchingBlocks.forEach((block) => {
      const item = document.createElement("article");
      item.className = "block-card";
      const name = block.name;
      const departments = block.departments;
      const spokenText = `${name}. Departments: ${departments.join(", ")}`;
      item.innerHTML = `
        <button class="block-button" type="button" data-block="${block.id}">
          <img src="${block.photo || "images/building-placeholder.svg"}" alt="" class="block-photo">
          <span class="block-copy">
            <strong>${name}</strong>
            <span class="department-label">Departments</span>
            <span class="department-chips">${departments.map((department) => `<span class="department-chip">${department}</span>`).join("")}</span>
          </span>
        </button>
        ${block.routePlace && PLACES[block.routePlace] ? `
          <button class="block-route-button" type="button" data-route-place="${block.routePlace}">
            Show route
          </button>
        ` : ""}
        <button class="speak-button block-speak-button" type="button" aria-label="Speak ${spokenText}" data-speak="${spokenText}">🔊</button>
      `;
      blocksList.appendChild(item);
      item.querySelector(".block-photo").addEventListener("error", (event) => {
        event.currentTarget.src = "images/building-placeholder.svg";
      });
      item.querySelector(".block-button").addEventListener("click", () => openBlock(block.id));
      const routeButton = item.querySelector(".block-route-button");
      if (routeButton) {
        routeButton.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          showMap(block.routePlace);
        });
      }
      item.querySelector(".block-speak-button").addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        speakLabel(spokenText);
      });
    });
  });
}

function showBlocks() {
  document.querySelector("#blocks-search").value = "";
  renderBlocks();
  setScreen(blocksScreen);
}

function openBlock(blockId) {
  const block = BLOCKS[blockId];
  if (!block) {
    return;
  }

  const details = document.querySelector("#block-detail-list");
  details.innerHTML = `
    <p class="detail-item"><strong>Departments and facilities</strong></p>
    ${block.departments.map((department) => `<p class="detail-item">${department}</p>`).join("")}
  `;
  document.querySelector("#block-detail-title").textContent = block.name;
  const routeButton = document.querySelector("#block-detail-route-button");
  routeButton.classList.toggle("hidden", !(block.routePlace && PLACES[block.routePlace]));
  routeButton.onclick = () => showMap(block.routePlace);
  document.querySelector("#block-detail-voice-button").onclick = () => {
    speakLabel(`${block.name}. Departments and facilities: ${block.departments.join(", ")}`);
  };
  setScreen(blockDetailScreen);
}

function showRestrooms() {
  const list = document.querySelector("#restrooms-list");
  list.innerHTML = RESTROOMS.map((restroom) => `
    <article class="detail-card">
      <p class="detail-item"><strong>${restroom.place}</strong></p>
      <p class="detail-item">${restroom.note}</p>
      ${restroom.routePlace && PLACES[restroom.routePlace] ? `
        <button class="block-route-button restroom-route-button" type="button" data-route-place="${restroom.routePlace}">
          Show route
        </button>
      ` : ""}
    </article>
  `).join("");
  list.querySelectorAll(".restroom-route-button").forEach((button) => {
    button.addEventListener("click", () => showMap(button.dataset.routePlace));
  });
  setScreen(restroomsScreen);
}

function updateLoginText() {
  const text = translations[selectedLanguage];
  document.documentElement.lang = selectedLanguage;
  document.querySelector("#login-title").textContent = text.loginTitle;
  document.querySelector("#login-subtitle").textContent = text.loginSubtitle;
  document.querySelector("#name-label").textContent = text.name;
  document.querySelector("#phone-label").textContent = text.phone;
  document.querySelector("#continue-button").textContent = text.continue;
  document.querySelector("#guest-button").textContent = text.guest;
  document.querySelector("#back-to-language").textContent = text.back;
  document.querySelector("#open-home-button").textContent = text.openGuide;
  document.querySelector("#home-back-button").textContent = text.back;
  document.querySelector("#home-home-button").textContent = text.home;
  document.querySelector("#home-title").textContent = text.homeTitle;
  document.querySelector("#home-subtitle").textContent = text.homeSubtitle;
  document.querySelector("#help-label").textContent = text.help;
  document.querySelector("#blocks-title").textContent = text.blocksTitle;
  document.querySelector("#blocks-subtitle").textContent = text.blocksSubtitle;
  document.querySelector("#map-back-button").textContent = text.mapBack;
  document.querySelector("#start-gate-button").textContent = text.startGate;
  document.querySelector("#voice-guidance-label").textContent = text.hearDirections;
  document.querySelector("#walking-time").textContent = text.walkingTime;
}

function saveVisitor(name, phone, guest = false) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    language: selectedLanguage,
    name,
    phone,
    guest
  }));
}

function showReady() {
  const text = translations[selectedLanguage];
  document.querySelector("#ready-title").textContent = text.readyTitle;
  document.querySelector("#ready-message").textContent = text.readyMessage;
  document.querySelector("#reset-button").textContent = text.startAgain;
  setScreen(readyScreen);
}

const tileDefinitions = [
  { key: "parking", placeId: "parking", icon: "🅿️" },
  { key: "mainOffice", placeId: "mainOffice", icon: "🏢" },
  { key: "principal", placeId: "principal", icon: "👤" },
  { key: "admissions", placeId: "admission", icon: "📝" },
  { key: "fees", placeId: "feeCounter", icon: "💳" },
  { key: "canteen", placeId: "canteen", icon: "🍽️" },
  // TODO: replace with real restroom coordinates
  { key: "restrooms", placeId: "restrooms", icon: "🚻" },
  { key: "blocks", placeId: "blocks", icon: "🏢" }
];

const campusPlaces = Object.entries(PLACES).map(([id, place]) => ({
  id,
  name_en: place.name,
  lat: place.lat,
  lng: place.lng,
  photo: "images/building-placeholder.svg",
  description: place.name
}));

const BLOCK_IDS = ["srujan"];

const BLOCKS = {
  srujan: { name: "Srujan", routePlace: "academic", departments: ["CSE", "IT", "EEE", "MBA", "Chethana auditorium"] },
  avishkar: { name: "Avishkar", routePlace: "academic", departments: ["CSE-AIML", "CSE-DS"] },
  nirmithi: { name: "Nirmithi", routePlace: "academic", departments: ["Mechanical", "CSBS labs"] },
  prashasan: { name: "Prashasan", routePlace: "academic", departments: ["College offices", "15,000 SFT computer centre", "Central Library"] },
  aakash: { name: "Aakash", routePlace: "academic", departments: ["ECE", "Civil", "CSE-Cyber Security", "Prerana hall"] },
  pratham: { name: "Pratham", routePlace: "freshman", departments: ["Freshman Engineering (first-year B.Tech)", "science labs", "workshops", "department libraries", "400-seat auditorium"] },
  prathibha: { name: "Prathibha", routePlace: "freshman", departments: ["Freshman Engineering (first-year B.Tech)", "foundation labs", "departmental library"] },
  pragnya: { name: "Pragnya", routePlace: "academic", departments: ["Examination Branch"] },
  vishwakarma: { name: "Vishwakarma", routePlace: "academic", departments: ["Central Workshop", "IT"] },
  nalanda: { name: "Nalanda", routePlace: "nalanda", departments: ["Training & Placement Cell", "IIIC", "EDC", "health center", "900-seat main auditorium"] },
  nachiketha: { name: "Nachiketha", routePlace: "hostels", departments: ["Boys' hostel"] },
  niveditha: { name: "Niveditha", routePlace: "hostels", departments: ["Girls' hostel"] }
};

function speakLabel(label) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance(label);
  speech.lang = selectedLanguage === "te" ? "te-IN" : selectedLanguage === "hi" ? "hi-IN" : "en-IN";
  window.speechSynthesis.speak(speech);
}

function renderHomeTiles() {
  const text = translations[selectedLanguage];
  const tiles = document.querySelector("#home-tiles");
  tiles.innerHTML = "";

  tileDefinitions.forEach(({ key, placeId, icon }) => {
    const tile = document.createElement("article");
    tile.className = "place-tile";
    const label = text.tiles[key] || translations.en.tiles[key] || "Place";
    tile.innerHTML = `
      <button class="place-button" type="button" data-place="${placeId}" aria-label="${label}">
        <span class="place-icon" aria-hidden="true">${icon}</span>
        <span class="place-label">${label}</span>
      </button>
      <button class="speak-button" type="button" aria-label="Speak ${label}" data-speak="${label}">🔊</button>
    `;
    tiles.appendChild(tile);
    const placeButton = tile.querySelector(".place-button");
    placeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (placeId === "blocks") {
        showBlocks();
      } else if (placeId === "restrooms") {
        showRestrooms();
      } else {
        showMap(placeId);
      }
    });
  });

  tiles.querySelectorAll(".speak-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      speakLabel(button.dataset.speak);
    });
  });
}

function showHome() {
  renderHomeTiles();
  setScreen(homeScreen);
}

const parkingCoordinates = [PLACES.parking.lat, PLACES.parking.lng];
const mapCenter = [PLACES.campusCenter.lat, PLACES.campusCenter.lng];
let campusMap;
let visitorMarker;
let accuracyCircle;
let routeLine;
let directionArrow;
let routeControl;
let selectedPlace;
let currentOrigin = mapCenter;
let locationWasDenied = false;
let streetLayer;
let satelliteLayer;
let locationWatchId;
let followVisitor = true;
let lastRoutedOrigin;
let hasAnnouncedArrival = false;

function getPlaceName(place) {
  return place[`name_${selectedLanguage}`] || place.name_en || "Place";
}

function createPlaceIcon() {
  return L.divIcon({
    className: "place-map-icon",
    html: "📍",
    iconSize: [38, 38],
    iconAnchor: [19, 38]
  });
}

function createArrowIcon(angle) {
  return L.divIcon({
    className: "direction-arrow-icon",
    html: `<span style="transform: rotate(${angle}deg)">➤</span>`,
    iconSize: [52, 52],
    iconAnchor: [26, 26]
  });
}

function getBearing(from, to) {
  const latitudeFactor = Math.cos((from[0] * Math.PI) / 180);
  return Math.atan2((to[1] - from[1]) * latitudeFactor, to[0] - from[0]) * 180 / Math.PI;
}

function distanceBetween(first, second) {
  const earthRadius = 6371000;
  const latitudeDifference = (second[0] - first[0]) * Math.PI / 180;
  const longitudeDifference = (second[1] - first[1]) * Math.PI / 180;
  const firstLatitude = first[0] * Math.PI / 180;
  const secondLatitude = second[0] * Math.PI / 180;
  const a = Math.sin(latitudeDifference / 2) ** 2
    + Math.cos(firstLatitude) * Math.cos(secondLatitude) * Math.sin(longitudeDifference / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function updateWalkingTime(distanceMeters) {
  if (Number.isFinite(distanceMeters)) {
    const minutes = Math.max(1, Math.ceil(distanceMeters / 80));
    document.querySelector("#walking-time").textContent = `${minutes} minutes walk`;
  }
}

function showArrivalIfNeeded(origin, destination) {
  if (distanceBetween(origin, destination) <= 20) {
    document.querySelector("#location-status").textContent = translations[selectedLanguage].arrived;
    if (!hasAnnouncedArrival) {
      hasAnnouncedArrival = true;
      speakLabel(translations[selectedLanguage].arrived);
    }
  } else {
    hasAnnouncedArrival = false;
  }
}

function drawRoute(origin, destination, dashed = false) {
  currentOrigin = origin;
  if (routeLine) {
    routeLine.remove();
  }
  if (directionArrow) {
    directionArrow.remove();
  }

  routeLine = L.polyline([origin, destination], {
    color: "#1769aa",
    weight: 8,
    opacity: 0.9,
    lineCap: "round",
    dashArray: dashed ? "14 12" : null
  }).addTo(campusMap);

  const midpoint = [(origin[0] + destination[0]) / 2, (origin[1] + destination[1]) / 2];
  directionArrow = L.marker(midpoint, {
    icon: createArrowIcon(getBearing(origin, destination)),
    interactive: false
  }).addTo(campusMap);
}

function showFarFromCampusRoute(destination) {
  if (routeControl) {
    campusMap.removeControl(routeControl);
    routeControl = null;
  }
  drawRoute(parkingCoordinates, destination, true);
  updateWalkingTime(distanceBetween(parkingCoordinates, destination));
}

function drawRoutedPath(origin, destination, shouldFit = false) {
  if (!window.L || !campusMap) {
    return;
  }
  if (distanceBetween(origin, mapCenter) > 2000) {
    showFarFromCampusRoute(destination);
    return;
  }
  if (!window.L.Routing) {
    drawRoute(origin, destination);
    updateWalkingTime(distanceBetween(origin, destination));
    return;
  }

  if (routeControl) {
    campusMap.removeControl(routeControl);
  }
  routeControl = L.Routing.control({
    waypoints: [L.latLng(origin[0], origin[1]), L.latLng(destination[0], destination[1])],
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: false,
    show: false,
    lineOptions: {
      styles: [{ color: "#1769aa", weight: 8, opacity: 0.9 }]
    },
    createMarker: () => null,
    router: L.Routing.osrmv1({
      serviceUrl: "https://router.project-osrm.org/route/v1",
      profile: "foot"
    })
  }).addTo(campusMap);

  routeControl.on("routesfound", (event) => {
    const route = event.routes[0];
    const routeDistance = route && route.summary ? route.summary.totalDistance : null;
    const straightDistance = distanceBetween(origin, destination);
    if (routeDistance && routeDistance > straightDistance * 3) {
      showFarFromCampusRoute(destination);
      return;
    }
    updateWalkingTime(routeDistance || straightDistance);
    if (shouldFit && route && route.bounds) {
      campusMap.fitBounds(route.bounds, { padding: [30, 30] });
    }
  });
  routeControl.on("routingerror", () => {
    if (routeControl) {
      campusMap.removeControl(routeControl);
      routeControl = null;
    }
    drawRoute(origin, destination);
    updateWalkingTime(distanceBetween(origin, destination));
  });
}

function drawRouteFromParking(showPermissionMessage = false) {
  if (selectedPlace) {
    locationWasDenied = true;
    drawRoutedPath(parkingCoordinates, [selectedPlace.lat, selectedPlace.lng], true);
    document.querySelector("#start-gate-button").classList.add("hidden");
    if (showPermissionMessage) {
      document.querySelector("#location-status").textContent = translations[selectedLanguage].locationDenied;
    }
    if (routeLine) {
      campusMap.fitBounds(routeLine.getBounds(), { padding: [30, 30] });
    }
  }
}

function initializeMap() {
  if (!window.L) {
    return;
  }
  if (campusMap) {
    campusMap.invalidateSize();
    return;
  }

  campusMap = L.map("map", {
    zoomControl: true,
    attributionControl: true
  }).setView(mapCenter, 18);

  streetLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 19,
    attribution: "Tiles &copy; Esri"
  });
  satelliteLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 19,
    attribution: "Tiles &copy; Esri"
  }).addTo(campusMap);
  document.querySelector("#map-layer-button").addEventListener("click", () => {
    const button = document.querySelector("#map-layer-button");
    if (campusMap.hasLayer(streetLayer)) {
      campusMap.removeLayer(streetLayer);
      satelliteLayer.addTo(campusMap);
      button.textContent = "Satellite";
      button.classList.add("active-layer");
    } else {
      campusMap.removeLayer(satelliteLayer);
      streetLayer.addTo(campusMap);
      button.textContent = "Map";
      button.classList.remove("active-layer");
    }
  });

  campusPlaces.forEach((place) => {
    L.marker([place.lat, place.lng], { icon: createPlaceIcon() })
      .addTo(campusMap)
      .bindPopup(`<strong>${getPlaceName(place)}</strong>`);
  });

  if ("geolocation" in navigator && !locationWatchId) {
    locationWatchId = navigator.geolocation.watchPosition(
      (position) => {
        const location = [position.coords.latitude, position.coords.longitude];
        const accuracy = Number.isFinite(position.coords.accuracy) ? position.coords.accuracy : 0;
        if (!visitorMarker) {
          visitorMarker = L.circleMarker(location, {
            radius: 10,
            color: "#ffffff",
            weight: 3,
            fillColor: "#1769aa",
            fillOpacity: 1
          }).addTo(campusMap).bindPopup("You are here");
        } else {
          visitorMarker.setLatLng(location);
        }
        if (!accuracyCircle) {
          accuracyCircle = L.circle(location, {
            radius: accuracy,
            color: "#1769aa",
            weight: 1,
            fillColor: "#1769aa",
            fillOpacity: 0.15
          }).addTo(campusMap);
        } else {
          accuracyCircle.setLatLng(location);
          accuracyCircle.setRadius(accuracy);
        }
        currentOrigin = location;
        locationWasDenied = false;
        document.querySelector("#start-gate-button").classList.add("hidden");
        if (followVisitor) {
          campusMap.setView(location, Math.max(campusMap.getZoom(), 17), { animate: false });
        }
        if (selectedPlace) {
          const destination = [selectedPlace.lat, selectedPlace.lng];
          showArrivalIfNeeded(location, destination);
          if (!lastRoutedOrigin || distanceBetween(lastRoutedOrigin, location) > 15) {
            lastRoutedOrigin = location;
            drawRoutedPath(location, destination);
          }
        }
      },
      () => {
        locationWasDenied = true;
        drawRouteFromParking(true);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 5000 }
    );
  }
}

function showMap(placeId) {
  const place = campusPlaces.find((candidate) => candidate.id === placeId);
  if (!place) {
    return;
  }

  selectedPlace = place;
  locationWasDenied = false;
  lastRoutedOrigin = null;
  hasAnnouncedArrival = false;
  setScreen(mapScreen);
  document.querySelector("#map-title").textContent = getPlaceName(place);
  document.querySelector("#destination-name").textContent = getPlaceName(place);
  document.querySelector("#destination-description").textContent = place.description;
  const destinationPhoto = document.querySelector("#destination-photo");
  destinationPhoto.src = place.photo;
  destinationPhoto.alt = getPlaceName(place);
  destinationPhoto.onerror = () => {
    destinationPhoto.src = "images/building-placeholder.svg";
  };
  document.querySelector("#destination-card").classList.remove("hidden");
  document.querySelector("#start-gate-button").classList.add("hidden");
  document.querySelector("#walking-time").textContent = translations[selectedLanguage].walkingTime;
  initializeMap();
  if (!campusMap) {
    return;
  }
  campusMap.setView(mapCenter, 18);
  if (visitorMarker) {
    const location = [visitorMarker.getLatLng().lat, visitorMarker.getLatLng().lng];
    lastRoutedOrigin = location;
    drawRoutedPath(location, [place.lat, place.lng], true);
  } else {
    drawRouteFromParking();
  }
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedLanguage = button.dataset.language;
    updateLoginText();
    setScreen(loginScreen);
    nameInput.focus();
  });
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!name || !phone) {
    errorMessage.textContent = translations[selectedLanguage].required;
    return;
  }

  errorMessage.textContent = "";
  saveVisitor(name, phone);
  showReady();
});

document.querySelector("#guest-button").addEventListener("click", () => {
  saveVisitor("", "", true);
  showReady();
});

document.querySelector("#open-home-button").addEventListener("click", showHome);
document.querySelector("#home-home-button").addEventListener("click", showHome);
document.querySelector("#home-back-button").addEventListener("click", showReady);
document.querySelector("#help-button").addEventListener("click", () => {
  speakLabel(translations[selectedLanguage].help);
});

document.querySelector("#home-tiles").addEventListener("click", (event) => {
  if (event.target.closest(".speak-button")) {
    return;
  }
  const placeButton = event.target.closest(".place-button");
  if (placeButton) {
    if (placeButton.dataset.place === "blocks") {
      showBlocks();
    } else if (placeButton.dataset.place === "restrooms") {
      showRestrooms();
    } else {
      showMap(placeButton.dataset.place);
    }
  }
});

document.querySelector("#map-home-button").addEventListener("click", showHome);
document.querySelector("#map-back-button").addEventListener("click", showHome);
document.querySelector("#blocks-home-button").addEventListener("click", showHome);
document.querySelector("#blocks-back-button").addEventListener("click", showHome);
document.querySelector("#block-detail-back-button").addEventListener("click", showBlocks);
document.querySelector("#restrooms-back-button").addEventListener("click", showHome);
document.querySelector("#blocks-search").addEventListener("input", renderBlocks);
document.querySelector("#start-gate-button").addEventListener("click", drawRouteFromParking);
document.querySelector("#follow-me-button").addEventListener("click", () => {
  followVisitor = !followVisitor;
  const button = document.querySelector("#follow-me-button");
  button.textContent = followVisitor
    ? translations[selectedLanguage].followOn
    : translations[selectedLanguage].followOff;
  button.classList.toggle("active-map-action", followVisitor);
});
document.querySelector("#recenter-button").addEventListener("click", () => {
  if (visitorMarker && campusMap) {
    followVisitor = true;
    document.querySelector("#follow-me-button").textContent = translations[selectedLanguage].followOn;
    document.querySelector("#follow-me-button").classList.add("active-map-action");
    campusMap.setView(visitorMarker.getLatLng(), Math.max(campusMap.getZoom(), 17));
  }
});
document.querySelector("#voice-guidance-button").addEventListener("click", () => {
  speakLabel(translations[selectedLanguage].voiceText);
});
document.querySelector("#restrooms-voice-button").addEventListener("click", () => {
  speakLabel(RESTROOMS.map((restroom) => `${restroom.place}, ${restroom.note}`).join(". "));
});

document.querySelector("#back-to-language").addEventListener("click", () => {
  setScreen(languageScreen);
});

document.querySelector("#reset-button").addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  nameInput.value = "";
  phoneInput.value = "";
  setScreen(languageScreen);
});

const savedVisitor = localStorage.getItem(STORAGE_KEY);
renderHomeTiles();
if (savedVisitor) {
  try {
    const visitor = JSON.parse(savedVisitor);
    if (translations[visitor.language]) {
      selectedLanguage = visitor.language;
      updateLoginText();
      showHome();
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}
