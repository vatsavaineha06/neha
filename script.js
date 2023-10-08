function initMap() {
const mapStyles = [
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
    }
];
    // Create a map centered at Hyderabad, India
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 17.385044, lng: 78.486671 },
        zoom: 12, // Adjust the zoom level as needed
        styles: mapStyles,
    });
    // Assuming you have created a Google Map instance called 'map'

    // Add markers to the map with event listeners
    const hussainSagarMarker = new google.maps.Marker({
        position: { lat: 17.4239, lng: 78.4738 }, // Hussain Sagar coordinates
        map: map,
    });

    const birlaMandirMarker = new google.maps.Marker({
        position: { lat: 17.4062, lng: 78.4691 }, // Birla Mandir coordinates
        map: map,
    });
const charminarMarker = new google.maps.Marker({
    position: { lat: 17.3616, lng: 78.4747 }, // Charminar coordinates
    map: map,
});
    // Add more markers as needed

    // Add event listeners to change content on marker hover
    hussainSagarMarker.addListener('mouseover', () => {
        // Change the content of your image and text containers here for Hussain Sagar
        document.getElementById('image1').innerHTML = '<img src="https://www.holidify.com/images/cmsuploads/compressed/1280px-Hussain_Sagar_lake2C_Hyderabad_20230309153045.jpg" alt="Hussain Sagar" class="linked-image">';
        document.getElementById('text1').innerHTML = '<p>Hussain Sagar</p>';
    });

    birlaMandirMarker.addListener('mouseover', () => {
        // Change the content of your image and text containers here for Birla Mandir
 document.getElementById('image1').innerHTML = `
        <img src="https://lh3.googleusercontent.com/places/ABKp1IoTgUHQX0cSNnf0GyvqKshwgkqUy5xEAAOtR0Tj4lXU6Ps2Op12fcdtt4a_0qzI7xUeGhs5uPelW5Tf1DmkJ_40b_Ov2CmSlSU=s500-w500" alt="Image 1" class="linked-image">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/56/ff/7a/photo0jpg.jpg?w=1200&h=-1&s=1" alt="Image 2" class="linked-image">
        <img src="https://www.nativeplanet.com/photos/412x309x100/2012/12/_13546033780.jpg" alt="Image 3" class="linked-image"> 
  <img src="https://i.pinimg.com/originals/b6/d9/aa/b6d9aa11208027a116ccce402f2abc10.jpg" alt="Image 3" class="linked-image"> 
 `;
      
 document.getElementById('image2').innerHTML = '<img src="https://lh3.googleusercontent.com/places/ABKp1IoTgUHQX0cSNnf0GyvqKshwgkqUy5xEAAOtR0Tj4lXU6Ps2Op12fcdtt4a_0qzI7xUeGhs5uPelW5Tf1DmkJ_40b_Ov2CmSlSU=s500-w500" alt="Birla Mandir" class="linked-image">';
        document.getElementById('text1').innerHTML = '<p>Birla Mandir</p>';
    });
charminarMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
        <img src="https://thumbs.dreamstime.com/b/famous-hyderabad-landmark-charminar-india-world-built-quli-qutb-shah-th-century-128124667.jpg" alt="Image 1" class="linked-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Charminar-Pride_of_Hyderabad.jpg" alt="Image 2" class="linked-image">
        <img src="https://assets.thehansindia.com/h-upload/2023/04/21/1347928-charm.webp" alt="Image 3" class="linked-image"> 
  <img src="https://images.unsplash.com/photo-1558202071-a0891de573ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhcm1pbmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Image 3" class="linked-image"> 
 `;
    document.getElementById('text1').innerHTML = '<p>Charminar</p>';
document.getElementById('image2').innerHTML = `
        <img src="https://media.istockphoto.com/id/173866847/photo/charminar.webp?b=1&s=170667a&w=0&k=20&c=y-gJNttzjPSSDRuiHsEJeRSN29cBIStIQrowZlr039E=" alt="Image 1" class="linked-image">
        <img src="https://media.istockphoto.com/id/535518265/photo/charminar-architecture.jpg?s=612x612&w=0&k=20&c=YmuFTkIURBQZ4J6sMOJgouMuKopYtioSk6yBuxth-h4=" alt="Image 2" class="linked-image">
        <img src="https://media.istockphoto.com/id/185617540/photo/architectural-details-of-400-year-old-charminar-hyderabad-india.jpg?s=612x612&w=0&k=20&c=djX9gPfFjx5dGG7KsxsqQbG7DYLh6AdLb5L0px_u0c8=" alt="Image 3" class="linked-image"> 
  <img src="https://media.istockphoto.com/id/1715187600/photo/charminar.jpg?s=612x612&w=0&k=20&c=VvLSbRUoiW459xJKX85oBSbffNvluunoW9HkDduR8lA=" alt="Image 3" class="linked-image"> 

 `;
    document.getElementById('text1').innerHTML = '<p>Charminar</p>';

});
   // Assuming you have created a Google Map instance called 'map'
    // Assuming you have created a Google Map instance called 'map'






    // Add listeners for other markers
}
