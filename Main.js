var res = document.getAnimations('res').values
    
    const latitude = -23.550520;
    const longitude = -46.633308;
    const zoomLevel = 12;

    const myMap = L.map('map').setView([latitude, longitude], zoomLevel);

    // Adicione uma camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(myMap);

    // Adicione um marcador
    L.marker([latitude, longitude]).addTo(myMap)
  
      .bindPopup("são Paulo")
      .openPopup();
